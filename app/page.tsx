"use client"

import type React from "react"
import Link from "next/link"
import { Zap, Users, Calendar, Handshake } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Centered and minimal */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-8 leading-tight text-foreground">
            Connect with Tech Communities across México
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed">
            Discover and support tech communities from every state in Mexico. Find events, connect with organizers, and
            build meaningful tech relationships.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/communities"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
            >
              Explore Communities
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Users size={32} />}
            title="Communities"
            description="Browse and join tech communities across México. View member information and social links."
          />
          <FeatureCard
            icon={<Calendar size={32} />}
            title="Events"
            description="Discover upcoming tech events, workshops, and meetups organized throughout the country."
          />
          <FeatureCard
            icon={<Zap size={32} />}
            title="Open Source"
            description="Community-driven platform. Submit PRs to add your community or events."
          />
          <FeatureCard
            icon={<Handshake size={32} />}
            title="Sponsorships"
            description="Support communities by becoming a sponsor. Provide resources or spaces."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Is Your Community Missing?</h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            This is an open-source project. You can add your community, events, or become a sponsor by creating a pull
            request on GitHub.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}
