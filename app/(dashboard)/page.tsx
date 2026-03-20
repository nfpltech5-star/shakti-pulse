import {
  Server,
  Globe,
  AppWindow,
  CalendarClock,
  ExternalLink,
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react"

const stats = [
  {
    title: "Infrastructure",
    description: "Servers, Routers, NAS & Devices",
    icon: Server,
    count: 6,
    online: 5,
    offline: 1,
    href: "/infrastructure",
  },
  {
    title: "Network",
    description: "Internet & DNS Monitoring",
    icon: Globe,
    count: 3,
    online: 3,
    offline: 0,
    href: "/network",
  },
  {
    title: "Applications",
    description: "n8n, tez, os, trainings",
    icon: AppWindow,
    count: 4,
    online: 4,
    offline: 0,
    href: "/applications",
  },
  {
    title: "Schedules",
    description: "ETA Tracking & Notifications",
    icon: CalendarClock,
    count: 4,
    online: 3,
    offline: 1,
    href: "/schedules",
  },
  {
    title: "External Websites",
    description: "ICE-GATE, CBIC, Zoho",
    icon: ExternalLink,
    count: 3,
    online: 3,
    offline: 0,
    href: "/websites",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Uptime and schedule monitoring overview
        </p>
      </div>

      {/* Overall Status Banner */}
      <div className="rounded-lg border border-border bg-card p-5 flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
          <Activity className="size-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-foreground">System Status</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            All critical systems are operational
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="size-4 text-emerald-500" />
            <span className="text-foreground font-medium">18 Online</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="size-4 text-amber-500" />
            <span className="text-foreground font-medium">1 Warning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <XCircle className="size-4 text-red-500" />
            <span className="text-foreground font-medium">1 Offline</span>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <a
            key={stat.title}
            href={stat.href}
            className="group rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <stat.icon className="size-5 text-primary" />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-emerald-600">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {stat.online}
                </span>
                {stat.offline > 0 && (
                  <span className="flex items-center gap-1 text-red-500">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500" />
                    {stat.offline}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {stat.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-foreground">
                {stat.count}
              </span>
              <span className="text-xs text-muted-foreground">
                monitored items
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
