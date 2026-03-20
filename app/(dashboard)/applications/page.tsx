import { Container, BookOpen } from "lucide-react"

const apps = [
  {
    title: "n8n",
    description: "Workflow automation platform",
    icon: Container,
    status: "online",
    uptime: "99.9%",
  },
  {
    title: "tez",
    description: "Business application",
    icon: Container,
    status: "online",
    uptime: "99.8%",
  },
  {
    title: "os",
    description: "Operating system services",
    icon: Container,
    status: "online",
    uptime: "99.9%",
  },
  {
    title: "trainings",
    description: "Training platform",
    icon: BookOpen,
    status: "online",
    uptime: "99.5%",
  },
]

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Applications</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor application uptime and health
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {apps.map((app) => (
          <div
            key={app.title}
            className="rounded-lg border border-border bg-card p-5 flex items-start gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              <app.icon className="size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{app.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {app.uptime} uptime
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
