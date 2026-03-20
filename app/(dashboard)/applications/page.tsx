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
        name: "Tez",
        detail: "tez.int.nagarkot.co.in",
        status: "online" as const,
      },
      {
        name: "Vault",
        detail: "vault.int.nagarkot.co.in",
        status: "online" as const,
      },
      {
        name: "n8n",
        detail: "n8n.int.nagarkot.co.in",
        status: "online" as const,
      },
    ],
  },
  {
    title: "Dokploy-VPS",
    description: "Hostinger VPS · 122.332.344.223",
    icon: Server,
    items: [
      {
        name: "OS",
        detail: "os.portal.nagarkot.co.in",
        status: "online" as const,
      },
      {
        name: "Trainings",
        detail: "trainings.portal.nagarkot.co.in",
        status: "online" as const,
      },
    ],
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
