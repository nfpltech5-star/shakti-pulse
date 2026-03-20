"use client"

import { Ship, Plane, FileText, Bell } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "ETA Tracking (SEA)",
    description: "Dokploy-Internal · Sea shipment ETA",
    icon: Ship,
    items: [
      {
        name: "MSC Tracker",
        detail: "Dokploy-Internal · 192.168.1.6",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 6 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 03:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "Maersk Tracker",
        detail: "Dokploy-Internal · 192.168.1.6",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 6 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 03:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
    ],
  },
  {
    title: "ETA Tracking (AIR)",
    description: "Dokploy-Internal · Air shipment ETA",
    icon: Plane,
    items: [
      {
        name: "Air Cargo Tracker",
        detail: "Dokploy-Internal · 192.168.1.6",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 4 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 01:00 PM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
    ],
  },
  {
    title: "AMAX PD Bond Tracker",
    description: "Dokploy-VPS · PD Bond status",
    icon: FileText,
    items: [
      {
        name: "Bond Status Monitor",
        detail: "Dokploy-VPS · 122.332.344.223",
        status: "offline" as const,
        meta: [
          { label: "Scheduled at", value: "Daily 9:00 AM" },
          { label: "Last Execution", value: "19 Mar 2026, 09:00 AM" },
          { label: "Last Execution Status", value: "❌ Failed" },
        ],
      },
    ],
  },
  {
    title: "CBIC Notification",
    description: "Dokploy-Internal · CBIC circulars",
    icon: Bell,
    items: [
      {
        name: "Circular Monitor",
        detail: "Dokploy-Internal · 192.168.1.6",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Every 12 hours" },
          { label: "Last Execution", value: "20 Mar 2026, 06:00 AM" },
          { label: "Last Execution Status", value: "✅ Success" },
        ],
      },
      {
        name: "Notification Sender",
        detail: "Dokploy-Internal · 192.168.1.6",
        status: "online" as const,
        meta: [
          { label: "Scheduled at", value: "Triggers on new circular" },
          { label: "Last Execution", value: "20 Mar 2026, 06:05 AM" },
          { label: "Last Execution Status", value: "✅ Success" },
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
