import { ExternalLink } from "lucide-react"

interface Community {
  id: number
  name: string
  category: string
  description: string
  members: number
  meetups: number
  image: string
  links: {
    twitter: string
    github: string
    website: string
  }
}

interface CommunitiesGridProps {
  communities: Community[]
}

export function CommunitiesGrid({ communities }: CommunitiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <div
          key={community.id}
          className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
        >
          {/* Community Image */}
          <div className="relative h-40 bg-muted overflow-hidden">
            <img
              src={community.image || "/placeholder.svg"}
              alt={community.name}
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute top-3 right-3">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {community.category}
              </span>
            </div>
          </div>

          {/* Community Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{community.name}</h3>
            <p className="text-foreground/70 text-sm mb-4">{community.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Members</p>
                <p className="text-lg font-semibold">{community.members}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Meetups</p>
                <p className="text-lg font-semibold">{community.meetups}</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={community.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all text-center text-sm"
              >
                Visit
              </a>
              <a
                href={community.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border border-border rounded-lg hover:bg-muted transition-all"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
