import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function TaskDetailLoading() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/tasks"
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium text-muted-foreground"
        >
          <ArrowLeft className="size-3.5" />
          <span>Kembali ke Pipeline Tugas</span>
        </Link>
        <span className="text-muted-foreground/60">/</span>
        <div className="h-4 w-16 bg-muted rounded" />
      </div>

      {/* Main Card Skeleton */}
      <Card className="border-border/70 bg-card/60 backdrop-blur-md">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-20 bg-muted rounded-full" />
              <div className="h-5 w-28 bg-muted rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-24 bg-muted rounded-full" />
              <div className="h-6 w-16 bg-muted rounded-full" />
            </div>
          </div>
          <div className="h-8 w-3/4 bg-muted rounded-lg" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted/60 rounded" />
            <div className="h-4 w-2/3 bg-muted/60 rounded" />
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="h-20 rounded-xl bg-muted/40 border border-border/40" />
            <div className="h-20 rounded-xl bg-muted/40 border border-border/40" />
            <div className="h-20 rounded-xl bg-muted/40 border border-border/40" />
          </div>
          <div className="h-28 rounded-xl bg-muted/30 border border-border/40" />
        </CardContent>
      </Card>
    </div>
  )
}
