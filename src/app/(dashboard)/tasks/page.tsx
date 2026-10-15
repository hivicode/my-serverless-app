import { Suspense } from "react"
import Link from "next/link"
import { Plus, Clock, CheckCircle2, ListTodo, ArrowUpRight, Zap, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TaskStatusFilter, type FilterStatus } from "@/components/task-status-filter"
import { INITIAL_TASKS, type Task } from "@/lib/tasks-data"

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

  const filteredTasks: Task[] =
    activeFilter === "Semua"
      ? INITIAL_TASKS
      : INITIAL_TASKS.filter((task) => task.status === activeFilter)

  const totalTasks = INITIAL_TASKS.length
  const inProgressTasks = INITIAL_TASKS.filter((t) => t.status === "Berjalan").length
  const completedTasks = INITIAL_TASKS.filter((t) => t.status === "Selesai").length
  const completionRate = Math.round((completedTasks / totalTasks) * 100)

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
              v2.1
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Pantau orkestrasikan tugas serverless, alokasi arsitektur, dan perolehan XP.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm transition-all hover:shadow cursor-pointer"
          >
            <Plus className="size-4 mr-1.5" />
            <span>Tambah Tugas</span>
          </Button>
        </div>
      </div>

      {/* Tiga Kartu Metrik Ringkasan dengan Ikon Tematik Bergradien Halus */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Metric 1: Total Tugas (Indigo) */}
        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-indigo-500/5 shadow-sm transition-all hover:shadow-md hover:border-indigo-500/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total Tugas
            </span>
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/30">
              <ListTodo className="size-4" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold font-heading text-foreground">
              {totalTasks}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Kapasitas Pipeline</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">100% Kapasitas</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div className="bg-indigo-600 h-1.5 rounded-full w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Metric 2: Berjalan (Amber) */}
        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-amber-500/5 shadow-sm transition-all hover:shadow-md hover:border-amber-500/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Sedang Berjalan
            </span>
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/30 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/30">
              <Clock className="size-4" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold font-heading text-foreground">
              {inProgressTasks}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Dalam Pengerjaan</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                {Math.round((inProgressTasks / totalTasks) * 100)}% Beban Kerja
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-500 h-1.5 rounded-full transition-all"
                style={{ width: `${(inProgressTasks / totalTasks) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Metric 3: Selesai (Emerald) */}
        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/40">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tugas Selesai
            </span>
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30">
              <CheckCircle2 className="size-4" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold font-heading text-foreground">
              {completedTasks}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Tingkat Capaian</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {completionRate}% Tercapai
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bilah Kontrol Atas (Filter Status & Summary) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-border/50 py-3">
        <TaskStatusFilter
          totalCount={totalTasks}
          inProgressCount={inProgressTasks}
          completedCount={completedTasks}
          currentStatus={activeFilter}
        />

        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span>Menampilkan:</span>
          <span className="font-semibold text-foreground">{filteredTasks.length} tugas</span>
        </div>
      </div>

      {/* Grid Tugas Responsif (1 Kolom Mobile, 2 Kolom Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTasks.map((task) => {
          const isCompleted = task.status === "Selesai"

          return (
            <Link
              key={task.id}
              href={`/tasks/${task.id}`}
              className="group block focus:outline-none"
            >
              <Card className="h-full border-border/70 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-500/40 hover:bg-card">
                <CardHeader className="space-y-3 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-muted-foreground tracking-wider">
                      {task.id}
                    </span>

                    {/* Status Badge Semantik yang Kontras */}
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          isCompleted
                            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                            : "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold"
                        }
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="size-3 mr-1" />
                        ) : (
                          <Clock className="size-3 mr-1 animate-pulse" />
                        )}
                        {task.status}
                      </Badge>

                      {/* Reward XP Badge */}
                      <Badge
                        variant="secondary"
                        className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-[11px] font-semibold border border-indigo-500/20"
                      >
                        <Zap className="size-3 mr-0.5 fill-current" />
                        +{task.xp} XP
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="font-heading text-base font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                    <span>{task.title}</span>
                    <ArrowUpRight className="size-4 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-indigo-500" />
                  </CardTitle>

                  <CardDescription className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {task.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  {/* Assignee Avatar & Name */}
                  <div className="flex items-center gap-2">
                    <Avatar className="size-6 border border-border">
                      <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                      <AvatarFallback className="text-[10px]">
                        {task.assignee.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground text-xs">
                      {task.assignee.name}
                    </span>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Calendar className="size-3.5" />
                    <span>{task.deadline}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
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
        <div className="h-9 w-32 bg-muted rounded-lg" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="h-32 rounded-xl bg-muted/40 border border-border/40" />
        <div className="h-32 rounded-xl bg-muted/40 border border-border/40" />
        <div className="h-32 rounded-xl bg-muted/40 border border-border/40" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-44 rounded-xl bg-muted/40 border border-border/40" />
        <div className="h-44 rounded-xl bg-muted/40 border border-border/40" />
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
