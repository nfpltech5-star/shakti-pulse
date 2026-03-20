"use client"

import { Ship, Plane, FileText, Bell } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "ETA Tracking (SEA)",
    description: "Sea shipment ETA monitoring",
    icon: Ship,
    items: [
      {
        name: "MSC Tracker",
        detail: "Runs every 6 hours",
        status: "online" as const,
      },
      {
        name: "Maersk Tracker",
        detail: "Runs every 6 hours",
        status: "online" as const,
      },
    ],
  },
  {
    title: "ETA Tracking (AIR)",
    description: "Air shipment ETA monitoring",
    icon: Plane,
    items: [
      {
        name: "Air Cargo Tracker",
        detail: "Runs every 4 hours",
        status: "online" as const,
      },
    ],
  },
  {
    title: "AMAX PD Bond Tracker",
    description: "PD Bond status tracking",
    icon: FileText,
    items: [
      {
        name: "Bond Status Monitor",
        detail: "Runs daily at 9:00 AM",
        status: "offline" as const,
      },
    ],
  },
  {
    title: "CBIC Notification",
    description: "CBIC circular notifications",
    icon: Bell,
    items: [
      {
        name: "Circular Monitor",
        detail: "Runs every 12 hours",
        status: "online" as const,
      },
      {
        name: "Notification Sender",
        detail: "Triggers on new circular",
        status: "online" as const,
      },
    ],
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {sections.map((section) => (
          <MonitorCard
            key={section.title}
            title={section.title}
            description={section.description}
            icon={section.icon}
            items={section.items}
          />
        ))}
      </div>
    </div>
  )
}
