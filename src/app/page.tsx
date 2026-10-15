import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
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
        {/* Subtle grid pattern */}
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
      <main className="relative mx-auto flex flex-1 w-full max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Badge Banner */}
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="size-3.5 animate-pulse text-indigo-500" />
            <span>The Serverless Odyssey • Minggu 02</span>
          </Badge>
        </div>

        {/* Hero Title */}
        <h1 className="mt-8 font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Arsitektur Serverless{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
            Generasi Baru
          </span>{" "}
          dengan Skalabilitas Instan
        </h1>

        {/* Hero Description */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Orkestrasikan komputasi edge asinkron, kelola pipeline tugas berbasis
          micro-services, dan pantau metrik real-time dengan latensi nol cold-start.
          Dirancang untuk rekayasa perangkat lunak modern tingkat tinggi.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
          <Link href="/tasks" id="cta-tasks-primary">
            <Button
              size="lg"
              className="group relative h-12 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 px-7 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Jelajahi Dashboard Tugas</span>
              <ArrowRight className="size-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/70 bg-card/50 px-6 font-medium text-foreground backdrop-blur-md transition-all hover:bg-muted/80 hover:border-border"
            >
              <Terminal className="size-4 mr-2 text-muted-foreground" />
              <span>Dokumentasi Arsitektur</span>
            </Button>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-20 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl text-left animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Cpu className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              Edge Runtime Ready
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Eksekusi Server Component di Next.js 16 dengan streaming paralel dan latensi minimum.
            </p>
          </div>

          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              Gamified Productivity
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Sistem perolehan reward XP tugas terintegrasi untuk motivasi performa tim yang nyata.
            </p>
          </div>

          <div className="group rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-card/70 hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <ShieldCheck className="size-5" />
            </div>
            <h2 className="mt-4 font-heading font-semibold text-foreground text-base">
              Enterprise Resilience
            </h2>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
              Type-safe end-to-end tanpa tipe data any, isolasi runtime, dan audit logging terpadu.
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
              Sistem Operasional Normal
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
