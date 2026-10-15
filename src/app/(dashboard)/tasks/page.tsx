import { Suspense } from "react"
import Link from "next/link"
import { Clock, CheckCircle2, ListTodo, ArrowUpRight, Zap, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TaskStatusFilter, type FilterStatus } from "@/components/task-status-filter"
import { CreateTaskForm } from "@/components/tasks/create-task-form"
import { getTasks, type Task } from "@/lib/tasks-data"

interface TasksPageProps {
  searchParams: Promise<{
    status?: string
  }>
}

async function TasksList({ searchParams }: TasksPageProps) {
  const resolvedSearchParams = await searchParams
  const rawStatus = resolvedSearchParams?.status

  const activeFilter: FilterStatus =
    rawStatus === "Berjalan" || rawStatus === "Selesai" ? rawStatus : "Semua"

  const allTasks = getTasks()
  const filteredTasks: Task[] =
    activeFilter === "Semua"
      ? allTasks
      : allTasks.filter((task) => task.status === activeFilter)

  const totalTasks = allTasks.length
  const inProgressTasks = allTasks.filter((t) => t.status === "Berjalan").length
  const completedTasks = allTasks.filter((t) => t.status === "Selesai").length
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Manajemen Pipeline Tugas
            </h1>
            <Badge
              variant="outline"
              className="border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono"
            >
              v2.1 • React 19
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Pantau dan mutasikan tugas arsitektur serverless dengan validasi runtime defensif Zod.
          </p>
        </div>
      </div>

      {/* Layout 2 Kolom: Kolom Kiri Formulir Mutasi, Kolom Kanan Ringkasan & Grid Tugas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: CreateTaskForm (4 Kolom pada Desktop) */}
        <div className="lg:col-span-5 sticky top-20">
          <CreateTaskForm />
        </div>

        {/* Kolom Kanan: Metrik Ringkasan & Daftar Tugas (7 Kolom pada Desktop) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tiga Kartu Metrik Ringkasan dengan Ikon Tematik Bergradien Halus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Metric 1: Total Tugas (Indigo) */}
            <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-indigo-500/5 shadow-sm transition-all hover:shadow-md hover:border-indigo-500/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Total
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/30">
                  <ListTodo className="size-3.5" />
                </div>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-0">
                <div className="text-2xl font-bold font-heading text-foreground">
                  {totalTasks}
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Pipeline</span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">100%</span>
                </div>
              </CardContent>
            </Card>

            {/* Metric 2: Berjalan (Amber) */}
            <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-sm transition-all hover:shadow-md hover:border-amber-500/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Berjalan
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/30 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/30">
                  <Clock className="size-3.5" />
                </div>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-0">
                <div className="text-2xl font-bold font-heading text-foreground">
                  {inProgressTasks}
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Proses</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {totalTasks > 0 ? Math.round((inProgressTasks / totalTasks) * 100) : 0}%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Metric 3: Selesai (Emerald) */}
            <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Selesai
                </span>
                <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
                  <CheckCircle2 className="size-3.5" />
                </div>
              </CardHeader>
              <CardContent className="space-y-1.5 pt-0">
                <div className="text-2xl font-bold font-heading text-foreground">
                  {completedTasks}
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Capaian</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {completionRate}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bilah Kontrol Atas (Filter Status & Counter) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-y border-border/50 py-2.5">
            <TaskStatusFilter
              totalCount={totalTasks}
              inProgressCount={inProgressTasks}
              completedCount={completedTasks}
              currentStatus={activeFilter}
            />

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <span>Menampilkan:</span>
              <span className="font-semibold text-foreground">{filteredTasks.length} tugas</span>
            </div>
          </div>

          {/* Grid Daftar Tugas Statis dengan Tautan ke Detail */}
          <div className="space-y-3.5">
            {filteredTasks.length === 0 ? (
              <div className="p-8 text-center rounded-xl border border-dashed border-border/80 bg-card/40">
                <p className="text-sm text-muted-foreground">
                  Belum ada tugas dalam filter ini. Gunakan formulir di sebelah kiri untuk menambah tugas baru.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => {
                const isCompleted = task.status === "Selesai"

                return (
                  <Link
                    key={task.id}
                    href={`/tasks/${task.id}`}
                    className="group block focus:outline-none"
                  >
                    <Card className="border-border/70 bg-card/60 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-500/40 hover:bg-card">
                      <CardHeader className="p-4 pb-2 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-xs font-bold text-muted-foreground tracking-wider">
                            {task.id}
                          </span>

                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                isCompleted
                                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]"
                                  : "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-[11px]"
                              }
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="size-3 mr-1" />
                              ) : (
                                <Clock className="size-3 mr-1 animate-pulse" />
                              )}
                              {task.status}
                            </Badge>

                            <Badge
                              variant="secondary"
                              className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-[11px] font-semibold border border-indigo-500/20"
                            >
                              <Zap className="size-3 mr-0.5 fill-current" />
                              +{task.xp} XP
                            </Badge>
                          </div>
                        </div>

                        <CardTitle className="font-heading text-sm font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                          <span>{task.title}</span>
                          <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-indigo-500" />
                        </CardTitle>

                        <CardDescription className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {task.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-4 pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="size-5 border border-border">
                            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                            <AvatarFallback className="text-[9px]">
                              {task.assignee.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground text-xs">
                            {task.assignee.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-[11px]">
                          <Calendar className="size-3" />
                          <span>{task.deadline}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function TasksListSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-muted rounded-lg" />
          <div className="h-4 w-96 bg-muted/60 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 h-96 rounded-xl bg-muted/40 border border-border/40" />
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-3 gap-3 h-24 bg-muted/40 rounded-xl" />
          <div className="h-32 bg-muted/40 rounded-xl" />
          <div className="h-32 bg-muted/40 rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default function TasksPage({ searchParams }: TasksPageProps) {
  return (
    <Suspense fallback={<TasksListSkeleton />}>
      <TasksList searchParams={searchParams} />
    </Suspense>
  )
}
