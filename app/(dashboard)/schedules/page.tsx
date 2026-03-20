import { Ship, Plane, FileText, Bell } from "lucide-react"

const schedules = [
  {
    title: "ETA Tracking (SEA)",
    description: "Sea shipment ETA monitoring",
    icon: Ship,
    status: "active",
    nextRun: "Every 6 hours",
  },
  {
    title: "ETA Tracking (AIR)",
    description: "Air shipment ETA monitoring",
    icon: Plane,
    status: "active",
    nextRun: "Every 4 hours",
  },
  {
    title: "AMAX PD Bond Tracker",
    description: "PD Bond status tracking",
    icon: FileText,
    status: "paused",
    nextRun: "Paused",
  },
  {
    title: "CBIC Notification",
    description: "CBIC circular notifications",
    icon: Bell,
    status: "active",
    nextRun: "Every 12 hours",
  },
]

export default function SchedulesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Schedules</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor scheduled tasks and automated trackers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {schedules.map((schedule) => (
          <div
            key={schedule.title}
            className="rounded-lg border border-border bg-card p-5 flex items-start gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              <schedule.icon className="size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">{schedule.title}</h3>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                    schedule.status === "active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      schedule.status === "active" ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  />
                  {schedule.status === "active" ? "Active" : "Paused"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{schedule.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                <span className="text-foreground font-medium">Interval:</span>{" "}
                {schedule.nextRun}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
