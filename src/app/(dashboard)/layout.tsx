import Link from "next/link"
import { ReactNode } from "react"
import { Cloud, CheckSquare, BarChart3, Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-indigo-500/20 selection:text-indigo-500">
      {/* Sticky Glassmorphism Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand & Left Navigation */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-500 shadow-md shadow-indigo-500/25">
                <Cloud className="size-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base font-bold tracking-tight text-foreground leading-none">
                  CloudTask Pro
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  Serverless Edition
                </span>
              </div>
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/tasks"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors text-foreground hover:bg-muted/80"
              >
                <CheckSquare className="size-4 text-indigo-500" />
                <span>Tugas</span>
                <Badge
                  variant="secondary"
                  className="ml-1 px-1.5 py-0 text-[10px] font-semibold"
                >
                  Live
                </Badge>
              </Link>

              <Link
                href="/analytics"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/60"
              >
                <BarChart3 className="size-4" />
                <span>Analitik</span>
              </Link>
            </nav>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Quick Status Pill */}
            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-[11px]">Region: ap-southeast-1</span>
            </div>

            {/* Notification Indicator */}
            <button
              type="button"
              className="relative flex size-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              aria-label="Notifikasi"
            >
              <Bell className="size-4" />
              <span className="absolute -top-1 -right-1 size-2 rounded-full bg-indigo-500" />
            </button>

            {/* Theme Toggle Client Component */}
            <ThemeToggle />

            {/* User Avatar & Info */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-border/60">
              <Avatar className="size-9 border-2 border-indigo-500/20">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                  alt="Senior Architect"
                />
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-semibold leading-tight text-foreground">
                  Alex Pratama
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  Lead Dev • 900 XP
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  )
}
