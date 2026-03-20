"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Server,
  Router,
  HardDrive,
  Printer,
  Globe,
  Wifi,
  ShieldCheck,
  LayoutDashboard,
  AppWindow,
  CalendarClock,
  ExternalLink,
  LogOut,
  ChevronDown,
  MonitorSmartphone,
  Network,
  Container,
  Ship,
  Plane,
  FileText,
  Bell,
  Landmark,
  BookOpen,
  Mail,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
]

const adminSections = [
  {
    title: "Infrastructure",
    icon: MonitorSmartphone,
    href: "/infrastructure",
    children: [
      {
        title: "Servers",
        href: "/infrastructure/servers",
        icon: Server,
        badge: "Dokploy-VPS, Dokploy-Internal",
      },
      { title: "Routers", href: "/infrastructure/routers", icon: Router },
      { title: "NAS", href: "/infrastructure/nas", icon: HardDrive },
      {
        title: "Other Devices",
        href: "/infrastructure/other-devices",
        icon: Printer,
        badge: "e-SSL, Printers, Scanners",
      },
    ],
  },
  {
    title: "Internet & Network",
    icon: Globe,
    href: "/network",
    children: [
      {
        title: "Current Internet",
        href: "/network/current",
        icon: Wifi,
        badge: "Name & Public IP",
      },
      { title: "Internet", href: "/network/internet", icon: Network },
      {
        title: "DNS Resolution Check",
        href: "/network/dns",
        icon: ShieldCheck,
      },
    ],
  },
  {
    title: "Applications",
    icon: AppWindow,
    href: "/applications",
    children: [
      { title: "n8n", href: "/applications/n8n", icon: Container },
      { title: "tez", href: "/applications/tez", icon: Container },
      { title: "os", href: "/applications/os", icon: Container },
      { title: "trainings", href: "/applications/trainings", icon: BookOpen },
    ],
  },
  {
    title: "Schedules",
    icon: CalendarClock,
    href: "/schedules",
    children: [
      {
        title: "ETA Tracking (SEA)",
        href: "/schedules/eta-sea",
        icon: Ship,
      },
      {
        title: "ETA Tracking (AIR)",
        href: "/schedules/eta-air",
        icon: Plane,
      },
      {
        title: "AMAX PD Bond Tracker",
        href: "/schedules/amax-pd-bond",
        icon: FileText,
      },
      {
        title: "CBIC Notification",
        href: "/schedules/cbic-notification",
        icon: Bell,
      },
    ],
  },
  {
    title: "External Websites",
    icon: ExternalLink,
    href: "/websites",
    children: [
      {
        title: "ICE-GATE Portal",
        href: "/websites/icegate",
        icon: Landmark,
      },
      {
        title: "CBIC Portal",
        href: "/websites/cbic",
        icon: Landmark,
      },
      {
        title: "Zoho",
        href: "/websites/zoho",
        icon: Mail,
      },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      {/* Logo Header */}
      <SidebarHeader className="px-4 py-5 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
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

      <SidebarContent className="px-2 py-2">
        {/* Dashboard Link */}
        <SidebarGroup className="py-0">
          <SidebarMenu>
            {navigation.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.title}
                  className={
                    pathname === item.href
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground"
                      : ""
                  }
                >
                  <Link href={item.href}>
                    <item.icon className="size-4" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Administration Section */}
        <SidebarGroup className="py-0">
          <SidebarGroupLabel className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSections.map((section) => {
                const isActive =
                  pathname === section.href ||
                  pathname.startsWith(section.href + "/") ||
                  section.children?.some(
                    (child) =>
                      pathname === child.href ||
                      pathname.startsWith(child.href + "/")
                  )

                return (
                  <Collapsible
                    key={section.title}
                    defaultOpen={isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={section.title}
                          isActive={isActive}
                          className={
                            isActive && pathname === section.href
                              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground data-active:bg-primary data-active:text-primary-foreground"
                              : ""
                          }
                        >
                          <section.icon className="size-4" />
                          <span className="font-medium">{section.title}</span>
                          <ChevronDown className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {section.children?.map((child) => {
                            const childActive =
                              pathname === child.href ||
                              pathname.startsWith(child.href + "/")
                            return (
                              <SidebarMenuSubItem key={child.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={childActive}
                                >
                                  <Link href={child.href}>
                                    <child.icon className="size-3.5" />
                                    <span>{child.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with Sign Out */}
      <SidebarFooter className="border-t border-sidebar-border px-4 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign Out"
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="size-4" />
              <span className="font-medium">Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
