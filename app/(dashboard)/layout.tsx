"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Top header bar */}
        <header className="flex h-14 items-center gap-3 border-b border-border bg-card px-6">
          <SidebarTrigger className="-ml-2" />
          <Separator orientation="vertical" className="h-5" />
          <h1 className="text-lg font-bold text-primary tracking-tight">
            Shakti Pulse
          </h1>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card px-6 py-3">
          <p className="text-xs text-muted-foreground">
            Nagarkot Forwarders Pvt. Ltd. &copy;
          </p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}
