export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  community: string
  attendees: number
  link?: string
}

export const eventsData: Event[] = [
  {
    id: "event-1",
    title: "Web Development Workshop: React Best Practices",
    description: "Learn advanced React patterns and best practices from industry experts.",
    date: "2025-12-15",
    time: "18:30",
    location: "Centro de Innovación Monterrey",
    community: "Arena Tech Community",
    attendees: 45,
    link: "https://example.com",
  },
  {
    id: "event-2",
    title: "DevOps Meetup: Kubernetes in Production",
    description: "Deep dive into running Kubernetes clusters in production environments.",
    date: "2025-12-18",
    time: "19:00",
    location: "Tech Hub Downtown",
    community: "DevOps Monterrey",
    attendees: 32,
    link: "https://example.com",
  },
  {
    id: "event-3",
    title: "Python Data Science Workshop",
    description: "Explore data science libraries and machine learning techniques with Python.",
    date: "2025-12-20",
    time: "17:00",
    location: "University Campus",
    community: "Python Monterrey",
    attendees: 55,
    link: "https://example.com",
  },
]
