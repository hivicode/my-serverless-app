"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Layers, Clock, CheckCircle2 } from "lucide-react"

export type FilterStatus = "Semua" | "Berjalan" | "Selesai"

interface TaskStatusFilterProps {
  totalCount: number
  inProgressCount: number
  completedCount: number
  currentStatus: FilterStatus
}

export function TaskStatusFilter({
  totalCount,
  inProgressCount,
  completedCount,
  currentStatus,
}: TaskStatusFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = (status: FilterStatus) => {
    const params = new URLSearchParams(searchParams.toString())
    if (status === "Semua") {
      params.delete("status")
    } else {
      params.set("status", status)
    }
    const query = params.toString()
    router.push(query ? `/tasks?${query}` : "/tasks")
  }

  const filters: {
    id: FilterStatus
    label: string
    count: number
    icon: typeof Layers
  }[] = [
    {
      id: "Semua",
      label: "Semua",
      count: totalCount,
      icon: Layers,
    },
    {
      id: "Berjalan",
      label: "Berjalan",
      count: inProgressCount,
      icon: Clock,
    },
    {
      id: "Selesai",
      label: "Selesai",
      count: completedCount,
      icon: CheckCircle2,
    },
  ]

  return (
    <div
      role="tablist"
      aria-label="Filter status tugas"
      className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/60 backdrop-blur-md"
    >
      {filters.map((filter) => {
        const isActive = currentStatus === filter.id
        const IconComponent = filter.icon

        return (
          <button
            key={filter.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => handleSelect(filter.id)}
            className={`group inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/80"
                : "text-muted-foreground hover:text-foreground hover:bg-background/40"
            }`}
          >
            <IconComponent
              className={`size-3.5 transition-colors ${
                isActive
                  ? filter.id === "Berjalan"
                    ? "text-amber-500"
                    : filter.id === "Selesai"
                    ? "text-emerald-500"
                    : "text-indigo-500"
                  : "text-muted-foreground group-hover:text-foreground"
              }`}
            />
            <span>{filter.label}</span>
            <Badge
              variant={isActive ? "default" : "secondary"}
              className={`px-1.5 py-0 text-[10px] h-4 min-w-4 justify-center font-mono ${
                isActive
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground group-hover:bg-background"
              }`}
            >
              {filter.count}
            </Badge>
          </button>
        )
      })}
    </div>
  )
}
