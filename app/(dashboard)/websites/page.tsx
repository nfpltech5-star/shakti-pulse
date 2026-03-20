import { Landmark, Mail } from "lucide-react"

const websites = [
  {
    title: "ICE-GATE Portal",
    description: "Indian Customs EDI Gateway",
    icon: Landmark,
    url: "https://www.icegate.gov.in",
    status: "online",
  },
  {
    title: "CBIC Portal",
    description: "Central Board of Indirect Taxes and Customs",
    icon: Landmark,
    url: "https://www.cbic.gov.in",
    status: "online",
  },
  {
    title: "Zoho",
    description: "Business management suite",
    icon: Mail,
    url: "https://www.zoho.com",
    status: "online",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {websites.map((site) => (
          <div
            key={site.title}
            className="rounded-lg border border-border bg-card p-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <site.icon className="size-5 text-primary" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{site.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{site.description}</p>
              <p className="text-xs text-primary mt-2 truncate">{site.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
