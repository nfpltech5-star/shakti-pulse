"use client"

import { Wifi, Network, ShieldCheck } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "Current Internet",
    description: "Name & Public IP",
    icon: Wifi,
    items: [
      {
        name: "Jio Fiber",
        detail: "Public IP: 103.xx.xx.xx",
        status: "online" as const,
      },
    ],
  },
  {
    title: "Internet",
    description: "Connectivity monitoring",
    icon: Network,
    items: [
      {
        name: "Primary ISP - Jio Fiber",
        detail: "100 Mbps",
        status: "online" as const,
      },
      {
        name: "Backup ISP - Airtel",
        detail: "50 Mbps",
        status: "offline" as const,
      },
    ],
  },
  {
    title: "DNS Resolution Check",
    description: "DNS query monitoring",
    icon: ShieldCheck,
    items: [
      {
        name: "Google DNS",
        detail: "8.8.8.8",
        status: "online" as const,
      },
      {
        name: "Cloudflare DNS",
        detail: "1.1.1.1",
        status: "online" as const,
      },
      {
        name: "Custom DNS",
        detail: "192.168.1.1",
        status: "online" as const,
      },
    ],
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
