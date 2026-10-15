import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  PlusCircle,
  FileCode2,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-500">
      {/* Dynamic Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 size-[450px] rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="absolute bottom-10 right-0 size-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 shadow-md shadow-indigo-500/25">
              <Zap className="size-5 text-white" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/75 bg-clip-text">
              The Serverless Odyssey
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/tasks">
              <Button
                variant="outline"
                className="rounded-full border-border/80 bg-background/50 hover:bg-muted text-sm font-medium backdrop-blur-sm"
              >
                Buka Konsol
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative mx-auto flex flex-1 w-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* Badge Banner */}
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="size-3.5 animate-pulse text-indigo-500" />
            <span>The Serverless Odyssey • React 19 & Zod Mutation</span>
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="mt-8 font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Arsitektur Mutasi Data{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
            Server Action
          </span>{" "}
          Defensif & Reaktif
        </h1>

        {/* Hero Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Eksplorasi eksekusi mutasi data end-to-end tanpa API Routes manual. Didukung validasi
          skema runtime Zod, hook modern React 19 <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground font-semibold">useActionState</code>,
          dan revalidasi cache instan di Next.js 16.
        </p>

        {/* Action Buttons: Termasuk Tombol Aksi Cepat "Buka Form Pembuatan Tugas" */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          <Link href="/tasks" id="cta-open-form">
            <Button
              size="lg"
              className="group relative h-12 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 px-7 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <PlusCircle className="size-4 mr-2" />
              <span>Buka Form Pembuatan Tugas</span>
              <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/tasks">
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/70 bg-card/50 px-6 font-medium text-foreground backdrop-blur-md transition-all hover:bg-muted/80 hover:border-border cursor-pointer"
            >
              <FileCode2 className="size-4 mr-2 text-indigo-500" />
              <span>Lihat Pipeline & Metrik</span>
            </Button>
          </Link>
        </div>

        {/* Preview Modul Mutasi Data */}
        <div className="mt-14 w-full max-w-3xl rounded-2xl border border-border/70 bg-card/40 p-5 backdrop-blur-xl shadow-xl text-left animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
          <div className="flex items-center justify-between border-b border-border/50 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="size-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                src/actions/tasks.ts (Server Action)
              </span>
            </div>
            <Badge variant="secondary" className="font-mono text-[10px]">
              Type-Safe Zod
            </Badge>
          </div>
          <div className="font-mono text-xs text-muted-foreground space-y-1 overflow-x-auto">
            <p className="text-indigo-400 font-semibold">export async function createTaskAction(prevState, formData) &#123;</p>
            <p className="pl-4 text-muted-foreground">const validation = TaskSchema.safeParse(rawData);</p>
            <p className="pl-4 text-emerald-400">if (validation.success) &#123; revalidatePath(&apos;/tasks&apos;); return &#123; success: true &#125;; &#125;</p>
            <p className="pl-4 text-rose-400">return &#123; success: false, errors: validation.error.flatten() &#125;;</p>
            <p className="text-indigo-400 font-semibold">&#125;</p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl text-left animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Cpu className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              React 19 Actions
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Integrasi langsung useActionState dengan penanganan state pending dan error inline tanpa boilerplate.
            </p>
          </div>

          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              Defensive Validation
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Validasi ketat skema Zod di sisi server menjamin keamanan data dan isolasi bug runtime secara absolut.
            </p>
          </div>

          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <ShieldCheck className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              Instant Revalidation
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Pembaruan cache instan melalui Next.js revalidatePath tanpa reload browser yang mengganggu UX.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-6">
          <p>© 2026 The Serverless Odyssey. Crafted for High Performance Teams.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Serverless Mutations Active
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
