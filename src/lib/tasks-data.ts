export type TaskStatus = "Berjalan" | "Selesai"

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  xp: number
  category: string
  deadline: string
  assignee: {
    name: string
    avatar: string
    role: string
  }
  logs: string[]
}

export const INITIAL_TASKS: Task[] = [
  {
    id: "TSK-101",
    title: "Inisialisasi Serverless API Gateway",
    description:
      "Membangun rute proksi HTTP aman dengan latensi ultra-rendah dan validasi token JWT asinkron.",
    status: "Berjalan",
    xp: 250,
    category: "Cloud Infrastructure",
    deadline: "24 Okt 2026",
    assignee: {
      name: "Alex Pratama",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      role: "Cloud Architect",
    },
    logs: [
      "Endpoint provisioning selesai di region ap-southeast-1",
      "Rate-limiter 1000 req/min berhasil diuji",
      "Menunggu finalisasi SSL cert domain khusus",
    ],
  },
  {
    id: "TSK-102",
    title: "Optimasi Eksekusi Edge Function",
    description:
      "Mereduksi cold-start hingga di bawah 15ms menggunakan streaming chunks dan regional pre-warming.",
    status: "Selesai",
    xp: 350,
    category: "Performance",
    deadline: "18 Okt 2026",
    assignee: {
      name: "Nadya Putri",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
      role: "Edge Specialist",
    },
    logs: [
      "Bundle size dipangkas 42% menjadi 1.2MB",
      "Cold-start p99 tercatat di angka 11.4ms",
      "Deployment canary ke 100% production sukses",
    ],
  },
  {
    id: "TSK-103",
    title: "Sinkronisasi Event Driven Webhook",
    description:
      "Arsitektur fan-out publish/subscribe terdesentralisasi untuk penanganan notifikasi multi-tenant.",
    status: "Berjalan",
    xp: 300,
    category: "Event Streaming",
    deadline: "29 Okt 2026",
    assignee: {
      name: "Dimas Anggara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      role: "Backend Engineer",
    },
    logs: [
      "Dead Letter Queue (DLQ) terpasang dengan retry interval eksponensial",
      "Benchmark throughput menembus 25.000 evt/detik",
    ],
  },
  {
    id: "TSK-104",
    title: "Telemetry & OpenTelemetry Tracing",
    description:
      "Integrasi visualisasi distributed trace otomatis ke cloud monitor tanpa overhead komputasi.",
    status: "Selesai",
    xp: 200,
    category: "Observability",
    deadline: "12 Okt 2026",
    assignee: {
      name: "Sarah Wijaya",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      role: "DevOps Engineer",
    },
    logs: [
      "Exporter OTLP terintegrasi via protobuf",
      "Grafana dashboard telemetry aktif dengan alert threshold",
    ],
  },
]
