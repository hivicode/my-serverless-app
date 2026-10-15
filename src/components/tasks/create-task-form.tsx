"use client"

import { useActionState, useEffect, useRef } from "react"
import { createTaskAction } from "@/actions/tasks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  Loader2,
  Sparkles,
  Zap,
} from "lucide-react"

export function CreateTaskForm() {
  const [state, formAction, isPending] = useActionState(createTaskAction, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <Card className="border border-border/80 bg-card/70 backdrop-blur-md shadow-md transition-all">
      <CardHeader className="p-5 pb-3">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[11px] font-semibold"
          >
            <Sparkles className="size-3 mr-1 text-indigo-500" />
            React 19 Server Action
          </Badge>
          <span className="text-[11px] font-mono text-muted-foreground">
            useActionState
          </span>
        </div>
        <CardTitle className="text-lg font-bold font-heading flex items-center gap-2 mt-2 text-foreground">
          <PlusCircle className="size-5 text-indigo-500" />
          <span>Tambah Tugas Baru</span>
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground leading-relaxed">
          Mutasikan tugas baru ke dalam cluster pipeline serverless secara reaktif dan aman.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2">
        <form ref={formRef} action={formAction} className="space-y-4">
          {/* Judul Tugas */}
          <div className="space-y-1.5">
            <Label htmlFor="title" className="text-xs font-semibold text-foreground">
              Judul Tugas <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Contoh: Implementasi RLS Supabase..."
              disabled={isPending}
              aria-invalid={!!state?.errors?.title}
              className={`h-9 text-xs transition-all ${
                state?.errors?.title
                  ? "border-destructive focus-visible:ring-destructive/30"
                  : "focus-visible:ring-indigo-500/30"
              }`}
            />
            {state?.errors?.title && (
              <p className="text-xs text-destructive font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in-50 duration-200">
                <AlertCircle className="size-3.5 shrink-0" />
                <span>{state.errors.title[0]}</span>
              </p>
            )}
          </div>

          {/* Deskripsi Tugas */}
          <div className="space-y-1.5">
            <Label htmlFor="description" className="text-xs font-semibold text-foreground">
              Deskripsi Singkat <span className="text-muted-foreground font-normal text-[11px]">(Opsional)</span>
            </Label>
            <Textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Jelaskan spesifikasi teknis tugas arsitektur..."
              disabled={isPending}
              aria-invalid={!!state?.errors?.description}
              className={`text-xs transition-all resize-none ${
                state?.errors?.description
                  ? "border-destructive focus-visible:ring-destructive/30"
                  : "focus-visible:ring-indigo-500/30"
              }`}
            />
            {state?.errors?.description && (
              <p className="text-xs text-destructive font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in-50 duration-200">
                <AlertCircle className="size-3.5 shrink-0" />
                <span>{state.errors.description[0]}</span>
              </p>
            )}
          </div>

          {/* Tingkat Prioritas */}
          <div className="space-y-1.5">
            <Label htmlFor="priority" className="text-xs font-semibold text-foreground">
              Tingkat Prioritas
            </Label>
            <div className="grid grid-cols-3 gap-2">
              <label className="flex items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background/50 p-2 text-xs font-medium cursor-pointer transition-all hover:bg-muted has-[:checked]:border-emerald-500/50 has-[:checked]:bg-emerald-500/10 has-[:checked]:text-emerald-600 dark:has-[:checked]:text-emerald-400">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  className="sr-only"
                  disabled={isPending}
                />
                <span>Low</span>
                <span className="text-[10px] text-muted-foreground">(+150 XP)</span>
              </label>

              <label className="flex items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background/50 p-2 text-xs font-medium cursor-pointer transition-all hover:bg-muted has-[:checked]:border-indigo-500/50 has-[:checked]:bg-indigo-500/10 has-[:checked]:text-indigo-600 dark:has-[:checked]:text-indigo-400">
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  defaultChecked
                  className="sr-only"
                  disabled={isPending}
                />
                <span>Medium</span>
                <span className="text-[10px] text-muted-foreground">(+250 XP)</span>
              </label>

              <label className="flex items-center justify-center gap-1.5 rounded-lg border border-border/80 bg-background/50 p-2 text-xs font-medium cursor-pointer transition-all hover:bg-muted has-[:checked]:border-amber-500/50 has-[:checked]:bg-amber-500/10 has-[:checked]:text-amber-600 dark:has-[:checked]:text-amber-400">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  className="sr-only"
                  disabled={isPending}
                />
                <span>High</span>
                <span className="text-[10px] text-muted-foreground">(+400 XP)</span>
              </label>
            </div>
            {state?.errors?.priority && (
              <p className="text-xs text-destructive font-medium flex items-center gap-1.5 pt-0.5 animate-in fade-in-50 duration-200">
                <AlertCircle className="size-3.5 shrink-0" />
                <span>{state.errors.priority[0]}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-10 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:shadow-indigo-500/30 cursor-pointer disabled:opacity-70"
          >
            {isPending ? (
              <>
                <Loader2 className="size-3.5 animate-spin mr-2" />
                <span>Menyimpan ke Cluster Serverless...</span>
              </>
            ) : (
              <>
                <Zap className="size-3.5 mr-2 fill-current" />
                <span>Simpan & Alokasikan Tugas</span>
              </>
            )}
          </Button>

          {/* Feedback Alert Global (Sukses / Gagal) */}
          {state && (
            <div className="pt-2 animate-in fade-in-50 slide-in-from-top-1 duration-300">
              {state.success ? (
                <Alert className="border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 py-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <AlertTitle className="text-xs font-bold">Berhasil Disimpan!</AlertTitle>
                  <AlertDescription className="text-xs text-emerald-600/90 dark:text-emerald-400/90">
                    {state.message}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert variant="destructive" className="py-2.5 border-destructive/40 bg-destructive/10">
                  <AlertCircle className="size-4" />
                  <AlertTitle className="text-xs font-bold">Terjadi Kesalahan</AlertTitle>
                  <AlertDescription className="text-xs">
                    {state.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
