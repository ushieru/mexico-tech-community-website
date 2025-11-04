export interface Sponsor {
  id: string
  name: string
  description: string
  type: "budget" | "space"
  logo?: string
  website?: string
}

export const sponsorsData: Sponsor[] = [
  {
    id: "sponsor-arena",
    name: "Arena",
    description: "Supporting local tech communities with resources and expertise.",
    type: "budget",
    logo: "ARENA",
    website: "https://arena.tech",
  },
  {
    id: "sponsor-tech-hub",
    name: "Tech Hub Monterrey",
    description: "Providing state-of-the-art venues and co-working spaces for community events.",
    type: "space",
    logo: "TECH HUB",
    website: "https://techhub.mx",
  },
  {
    id: "sponsor-innova",
    name: "Innova Solutions",
    description: "Enterprise software solutions and sponsorship for tech initiatives.",
    type: "budget",
    logo: "INNOVA",
    website: "https://innova-solutions.com",
  },
  {
    id: "sponsor-campus",
    name: "Innovation Campus",
    description: "Hosting workshops and providing infrastructure for community growth.",
    type: "space",
    logo: "CAMPUS",
    website: "https://innovationcampus.mx",
  },
]
