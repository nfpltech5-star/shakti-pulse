import { Server, Router, HardDrive, Printer } from "lucide-react"

const items = [
  {
    title: "Servers",
    description: "Dokploy-VPS, Dokploy-Internal",
    icon: Server,
    status: "online",
  },
  {
    title: "Routers",
    description: "Network routing devices",
    icon: Router,
    status: "online",
  },
  {
    title: "NAS",
    description: "Network Attached Storage",
    icon: HardDrive,
    status: "online",
  },
  {
    title: "Other Devices",
    description: "e-SSL, Printers, Scanners",
    icon: Printer,
    status: "warning",
  },
]

export default function InfrastructurePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Infrastructure</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor servers, routers, NAS and peripheral devices
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-card p-5 flex items-start gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              <item.icon className="size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                    item.status === "online"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.status === "online" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {item.status === "online" ? "Online" : "Warning"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
