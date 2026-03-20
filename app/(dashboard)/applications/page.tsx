"use client"

import { Container, BookOpen } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "n8n",
    description: "Workflow automation platform",
    icon: Container,
    items: [
      {
        name: "n8n Production",
        detail: "https://n8n.example.com",
        status: "online" as const,
      },
    ],
  },
  {
    title: "tez",
    description: "Business application",
    icon: Container,
    items: [
      {
        name: "Tez Production",
        detail: "https://tez.example.com",
        status: "online" as const,
      },
    ],
  },
  {
    title: "os",
    description: "Operating system services",
    icon: Container,
    items: [
      {
        name: "OS Service",
        detail: "https://os.example.com",
        status: "online" as const,
      },
    ],
  },
  {
    title: "trainings",
    description: "Training platform",
    icon: BookOpen,
    items: [
      {
        name: "Training Portal",
        detail: "https://trainings.example.com",
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
