"use server"

import { revalidatePath } from "next/cache"
import { TaskSchema, type ActionState, type TaskInput } from "@/lib/schemas"
import { addTask, type Task } from "@/lib/tasks-data"

export async function createTaskAction(
  prevState: ActionState<TaskInput> | null,
  formData: FormData
): Promise<ActionState<TaskInput>> {
  const rawData = {
    title: formData.get("title") ? String(formData.get("title")).trim() : "",
    description: formData.get("description")
      ? String(formData.get("description")).trim()
      : undefined,
    priority: (formData.get("priority") as string) || "medium",
  }

  const validation = TaskSchema.safeParse(rawData)

  if (!validation.success) {
    return {
      success: false,
      message: "Validasi formulir gagal. Periksa kembali input Anda.",
      errors: validation.error.flatten().fieldErrors,
      data: rawData as TaskInput,
    }
  }

  const { title, description, priority } = validation.data

  const xpValue = priority === "high" ? 400 : priority === "medium" ? 250 : 150
  const randomId = `TSK-${Math.floor(100 + Math.random() * 900)}`

  const newTask: Task = {
    id: randomId,
    title,
    description: description || "Tugas serverless baru ditambahkan melalui formulir.",
    status: "Berjalan",
    xp: xpValue,
    category:
      priority === "high"
        ? "Critical Security"
        : priority === "medium"
        ? "Cloud Infrastructure"
        : "Optimization",
    deadline: "30 Okt 2026",
    assignee: {
      name: "Alex Pratama",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      role: "Lead Architect",
    },
    logs: [
      `Tugas dibuat via Server Action dengan prioritas ${priority.toUpperCase()}`,
      `Alokasi awal XP: +${xpValue} XP`,
      "Menunggu provisioning worker edge",
    ],
  }

  // Simpan mutasi data ke serverless storage
  addTask(newTask)

  // Revalidasi cache halaman tugas seketika
  revalidatePath("/tasks")

  return {
    success: true,
    message: `Tugas #${newTask.id} berhasil dibuat dan dialokasikan ke cluster!`,
    data: validation.data,
  }
}
