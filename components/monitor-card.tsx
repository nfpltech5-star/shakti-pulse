"use client"

import { useState } from "react"
import { ChevronDown, RotateCw, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type SubItemStatus = "online" | "offline" | "loading"

export type SubItem = {
  name: string
  detail?: string
  status: SubItemStatus
}

type MonitorCardProps = {
  title: string
  description: string
  icon: LucideIcon
  items: SubItem[]
}

function StatusDot({ status }: { status: SubItemStatus }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={cn(
          "inline-block w-2 h-2 rounded-full",
          status === "online" && "bg-emerald-500",
          status === "offline" && "bg-red-500",
          status === "loading" && "bg-amber-400 animate-pulse"
        )}
      />
      <span
        className={cn(
          "text-xs font-medium capitalize",
          status === "online" && "text-emerald-600",
          status === "offline" && "text-red-500",
          status === "loading" && "text-amber-500"
        )}
      >
        {status}
      </span>
    </span>
  )
}

export function MonitorCard({ title, description, icon: Icon, items }: MonitorCardProps) {
  const [open, setOpen] = useState(true)
  const [reloading, setReloading] = useState<Record<number, boolean>>({})

  const onlineCount = items.filter((i) => i.status === "online").length
  const offlineCount = items.filter((i) => i.status === "offline").length

  function handleReload(index: number) {
    setReloading((prev) => ({ ...prev, [index]: true }))
    setTimeout(() => {
      setReloading((prev) => ({ ...prev, [index]: false }))
    }, 1500)
  }

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      {/* Card Header — clickable to toggle drawer */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
          <Icon className="size-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        <div className="flex items-center gap-3 mr-2">
          {onlineCount > 0 && (
            <span className="flex items-center gap-1 text-xs text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {onlineCount}
            </span>
          )}
          {offlineCount > 0 && (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {offlineCount}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200 shrink-0",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Drawer Content */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border">
            {items.map((item, index) => (
              <div
                key={item.name}
                className={cn(
                  "flex items-center gap-4 px-5 py-3.5",
                  index < items.length - 1 && "border-b border-border/60"
                )}
              >
                {/* Indent line */}
                <div className="w-10 flex justify-center shrink-0">
                  <div className="w-px h-full bg-border" />
                </div>

                {/* Item info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.name}
                  </p>
                  {item.detail && (
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {item.detail}
                    </p>
                  )}
                </div>

                {/* Status */}
                <StatusDot
                  status={reloading[index] ? "loading" : item.status}
                />

                {/* Reload button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleReload(index)
                  }}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                  title={`Reload ${item.name}`}
                >
                  <RotateCw
                    className={cn(
                      "size-3.5 text-muted-foreground",
                      reloading[index] && "animate-spin text-primary"
                    )}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
