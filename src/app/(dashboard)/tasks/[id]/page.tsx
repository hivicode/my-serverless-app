import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Zap,
  FolderGit2,
  Shield,
  Activity,
  UserCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { INITIAL_TASKS } from "@/lib/tasks-data"

interface TaskDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  // Next.js 16: params adalah Promise asinkron
  const { id } = await params

  const task = INITIAL_TASKS.find((t) => t.id.toLowerCase() === id.toLowerCase())

  if (!task) {
    return notFound()
  }

  const isCompleted = task.status === "Selesai"

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
      {/* Breadcrumb Navigasi Kembali ke /tasks */}
      <nav
        aria-label="Breadcrumb navigasi tugas"
        className="flex items-center gap-2 text-sm text-muted-foreground"
      >
        <Link
          href="/tasks"
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors hover:text-foreground hover:bg-muted"
        >
          <ArrowLeft className="size-3.5" />
          <span>Kembali ke Pipeline Tugas</span>
        </Link>
        <span className="text-muted-foreground/60">/</span>
        <span className="font-mono text-xs font-semibold text-foreground">
          {task.id}
        </span>
      </nav>

      {/* Main Detail Header Card */}
      <Card className="border-border/70 bg-card/60 backdrop-blur-md shadow-md">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="font-mono text-xs font-bold border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
              >
                {task.id}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {task.category}
              </Badge>
            </div>

            {/* Status & Reward XP */}
            <div className="flex items-center gap-2.5">
              <Badge
                variant="outline"
                className={
                  isCompleted
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-0.5"
                    : "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5"
                }
              >
                {isCompleted ? (
                  <CheckCircle2 className="size-3.5 mr-1.5" />
                ) : (
                  <Clock className="size-3.5 mr-1.5 animate-pulse" />
                )}
                {task.status}
              </Badge>

              <Badge
                variant="secondary"
                className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold border border-indigo-500/20 px-2.5 py-0.5"
              >
                <Zap className="size-3.5 mr-1 fill-current" />
                +{task.xp} XP
              </Badge>
            </div>
          </div>

          <CardTitle className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {task.title}
          </CardTitle>

          <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {task.description}
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6 space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Assignee */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5 flex items-center gap-3">
              <Avatar className="size-10 border border-border">
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold">
                  Penanggung Jawab
                </p>
                <p className="text-xs font-bold text-foreground">
                  {task.assignee.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {task.assignee.role}
                </p>
              </div>
            </div>

            {/* Deadline */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Calendar className="size-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold">
                  Tenggat Waktu
                </p>
                <p className="text-xs font-bold text-foreground font-mono">
                  {task.deadline}
                </p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Sesuai Jadwal
                </p>
              </div>
            </div>

            {/* Architecture Node */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-3.5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <FolderGit2 className="size-5" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase font-semibold">
                  Klaster Serverless
                </p>
                <p className="text-xs font-bold text-foreground font-mono">
                  Edge-V2 Cluster
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Region: ap-southeast-1
                </p>
              </div>
            </div>
          </div>

          {/* Operational Logs / Milestones */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="size-4 text-indigo-500" />
              <h2 className="font-heading font-semibold text-sm text-foreground">
                Log Eksekusi & Audit Jejak Serverless
              </h2>
            </div>

            <div className="rounded-xl border border-border/70 bg-muted/20 p-4 space-y-2.5 font-mono text-xs">
              {task.logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="text-indigo-500 select-none">›</span>
                  <span className="text-muted-foreground">{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="size-3.5 text-emerald-500" />
              <span>Audit kriptografi lolos verifikasi integritas runtime.</span>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/tasks">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Tutup Tampilan
                </Button>
              </Link>
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
              >
                <UserCheck className="size-3.5 mr-1.5" />
                Perbarui Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
