"use client"

import { Server } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "Dokploy-Internal",
    description: "Hyper-V Debian · 192.168.1.6",
    icon: Server,
    items: [
      {
        name: "ETA Tracking (SEA) - MSC",
        detail: "Sea shipment ETA monitoring",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 6 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 03:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "ETA Tracking (SEA) - Maersk",
        detail: "Sea shipment ETA monitoring",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 6 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 03:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "ETA Tracking (AIR)",
        detail: "Air shipment ETA monitoring",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 4 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 01:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "CBIC Circular Monitor",
        detail: "CBIC circular notifications",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 12 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 06:00 AM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "CBIC Notification Sender",
        detail: "CBIC circular notifications",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Triggers on new circular" },
          { label: "Last Execution", value: "20 Mar 2026, 06:05 AM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
    ],
  },
  {
    title: "Dokploy-VPS",
    description: "Hostinger VPS · 122.332.344.223",
    icon: Server,
    items: [
      {
        name: "AMAX PD Bond Tracker",
        detail: "PD Bond status tracking",
        status: "offline" as const,
        meta: [
          { label: "Scheduled at", value: "Daily 9:00 AM" },
          { label: "Last Execution", value: "19 Mar 2026, 09:00 AM" },
          { label: "Last Execution Status", value: "❌ Failed" },
        ],
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
      <div className="columns-1 lg:columns-2 gap-5">
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
