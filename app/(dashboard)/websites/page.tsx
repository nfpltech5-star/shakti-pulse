"use client"

import { Landmark, Mail } from "lucide-react"
import { MonitorCard } from "@/components/monitor-card"

const sections = [
  {
    title: "ICE-GATE Portal",
    description: "Indian Customs EDI Gateway",
    icon: Landmark,
    items: [
      {
        name: "ICE-GATE Main Portal",
        detail: "https://www.icegate.gov.in",
        status: "online" as const,
      },
      {
        name: "ICE-GATE e-Sanchit",
        detail: "https://esanchit.icegate.gov.in",
        status: "online" as const,
      },
    ],
  },
  {
    title: "CBIC Portal",
    description: "Central Board of Indirect Taxes and Customs",
    icon: Landmark,
    items: [
      {
        name: "CBIC Main Portal",
        detail: "https://www.cbic.gov.in",
        status: "online" as const,
      },
    ],
  },
  {
    title: "Zoho",
    description: "Business management suite",
    icon: Mail,
    items: [
      {
        name: "Zoho Mail",
        detail: "https://mail.zoho.in",
        status: "online" as const,
      },
      {
        name: "Zoho CRM",
        detail: "https://crm.zoho.in",
        status: "online" as const,
      },
    ],
  },
]

export default function WebsitesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">External Websites</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor external website availability
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
