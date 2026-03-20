"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 50
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out progress curve
      const raw = step / steps
      const eased = 1 - Math.pow(1 - raw, 3)
      setProgress(Math.min(eased * 100, 100))

      if (step >= steps) {
        clearInterval(timer)
        setFadeOut(true)
        setTimeout(() => setVisible(false), 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
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
          <h1 className="text-xl font-bold text-primary mb-10 animate-fade-in-delay tracking-tight">
            Shakti Pulse
          </h1>

          {/* Progress Bar */}
          <div className="w-56 h-[3px] bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      {children}
    </>
  )
}
