"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(timer)
          return 90
        }
        // Fast start, then slow down
        const increment = prev < 30 ? 8 : prev < 60 ? 4 : 2
        return Math.min(prev + increment, 90)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Logo */}
      <div className="mb-10 animate-fade-in">
        <Image
          src="/logo.png"
          alt="Nagarkot Forwarders"
          width={200}
          height={40}
          className="h-8 w-auto"
          priority
        />
      </div>

      {/* App Name */}
      <h1 className="text-xl font-bold text-primary mb-8 animate-fade-in-delay tracking-tight">
        Shakti Pulse
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-xs text-muted-foreground animate-pulse">
        Loading...
      </p>
    </div>
  )
}
