"use client"

import { Server, Router, HardDrive, Printer } from "lucide-react"
import { MonitorCard, type SubItem } from "@/components/monitor-card"

const infrastructure = [
  {
    title: "Servers",
    description: "Dokploy-VPS, Dokploy-Internal",
    icon: Server,
    items: [
      {
        name: "Hyper-V Debian",
        detail: "192.168.1.6",
        status: "online" as const,
      },
      {
        name: "Hostinger VPS",
        detail: "122.332.344.223",
        status: "online" as const,
      },
    ],
  },
  {
    title: "Routers",
    description: "Network routing devices",
    icon: Router,
    items: [
      {
        name: "Main Router",
        detail: "192.168.1.1",
        status: "online" as const,
      },
      {
        name: "AP Router",
        detail: "192.168.1.2",
        status: "online" as const,
      },
    ],
  },
  {
    title: "NAS",
    description: "Network Attached Storage",
    icon: HardDrive,
    items: [
      {
        name: "Synology NAS",
        detail: "192.168.1.10",
        status: "online" as const,
      },
    ],
  },
  {
    title: "Other Devices",
    description: "e-SSL, Printers, Scanners",
    icon: Printer,
    items: [
      {
        name: "e-SSL Biometric",
        detail: "192.168.1.20",
        status: "online" as const,
      },
      {
        name: "HP LaserJet Printer",
        detail: "192.168.1.30",
        status: "offline" as const,
      },
      {
        name: "Canon Scanner",
        detail: "192.168.1.31",
        status: "online" as const,
      },
    ],
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
      <div className="columns-1 lg:columns-2 gap-5">
        {infrastructure.map((section) => (
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
