"use client"

import { useState, useEffect } from "react"

export interface UserLocation {
  state: string
  detected: boolean
  loading: boolean
}

const TIMEZONE_TO_STATE: Record<string, string> = {
  "America/Mexico_City": "Ciudad de México",
  "America/Monterrey": "Nuevo León",
  "America/Mexico_City": "Ciudad de México",
  "America/Hermosillo": "Sonora",
  "America/Denver": "Chihuahua",
  "America/Chicago": "Tamaulipas",
}

export function useUserLocation(): UserLocation {
  const [location, setLocation] = useState<UserLocation>({
    state: "Nuevo León", // Default to Monterrey
    detected: false,
    loading: true,
  })

  useEffect(() => {
    // Try to detect location from browser geolocation or timezone
    const detectLocation = async () => {
      try {
        // First try to get timezone
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const detectedState = TIMEZONE_TO_STATE[timeZone]

        if (detectedState) {
          setLocation({
            state: detectedState,
            detected: true,
            loading: false,
          })
          return
        }

        // Fallback to default
        setLocation({
          state: "Nuevo León",
          detected: false,
          loading: false,
        })
      } catch {
        setLocation({
          state: "Nuevo León",
          detected: false,
          loading: false,
        })
      }
    }

    detectLocation()
  }, [])

  return location
}
