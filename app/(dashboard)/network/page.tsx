import { Wifi, Network, ShieldCheck } from "lucide-react"

const items = [
  {
    title: "Current Internet",
    description: "Name & Public IP monitoring",
    icon: Wifi,
    status: "online",
    detail: "Connected",
  },
  {
    title: "Internet",
    description: "Connectivity monitoring",
    icon: Network,
    status: "online",
    detail: "Stable",
  },
  {
    title: "DNS Resolution Check",
    description: "DNS query monitoring",
    icon: ShieldCheck,
    status: "online",
    detail: "Resolving",
  },
]

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Internet & Network</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor internet connectivity and DNS resolution
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-card p-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <item.icon className="size-5 text-primary" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {item.detail}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
