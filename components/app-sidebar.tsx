"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MonitorSmartphone,
  Globe,
  AppWindow,
  CalendarClock,
  ExternalLink,
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainNav = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
]

const adminNav = [
  {
    title: "Infrastructure",
    href: "/infrastructure",
    icon: MonitorSmartphone,
  },
  {
    title: "Internet & Network",
    href: "/network",
    icon: Globe,
  },
  {
    title: "Applications",
    href: "/applications",
    icon: AppWindow,
  },
  {
    title: "Schedules",
    href: "/schedules",
    icon: CalendarClock,
  },
  {
    title: "External Websites",
    href: "/websites",
    icon: ExternalLink,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      {/* Logo Header */}
      <SidebarHeader className="px-5 py-6 border-b border-sidebar-border">
        <Link
          href="/"
          className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center"
        >
          <Image
            src="/logo.png"
            alt="Nagarkot Forwarders"
            width={140}
            height={20}
            className="h-5 w-auto group-data-[collapsible=icon]:hidden"
            priority
          />
          <Image
            src="/logo.png"
            alt="Nagarkot"
            width={28}
            height={28}
            className="h-7 w-7 object-contain hidden group-data-[collapsible=icon]:block"
            priority
          />
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {/* Dashboard Link */}
        <SidebarGroup className="py-0 mb-2">
          <SidebarMenu className="gap-2">
            {mainNav.map((item) => {
              const isActive = pathname === item.href
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.title}
                    size="lg"
                    className={
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground h-11 text-[15px]"
                        : "h-11 text-[15px]"
                    }
                  >
                    <Link href={item.href}>
                      <item.icon className="size-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>

        {/* Administration Section */}
        <SidebarGroup className="py-0">
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-3 px-3">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {adminNav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      size="lg"
                      className={
                        isActive
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground h-11 text-[15px]"
                          : "h-11 text-[15px]"
                      }
                    >
                      <Link href={item.href}>
                        <item.icon className="size-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with Sign Out */}
      <SidebarFooter className="border-t border-sidebar-border px-5 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign Out"
              size="lg"
              className="text-destructive hover:text-destructive hover:bg-destructive/10 h-11 text-[15px]"
            >
              <LogOut className="size-5" />
              <span className="font-medium">Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
