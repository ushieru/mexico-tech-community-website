export interface Sponsor {
  id: string
  name: string
  description: string
  type: "budget" | "space"
  logo?: string
  website?: string
}

export const sponsorsData: Sponsor[] = []
