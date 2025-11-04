"use client";

import type React from "react";

import { useState } from "react";
import {
  Check,
  Mail,
  Building2,
  DollarSign,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { sponsorsData } from "@/data/sponsors";

export default function SponsorsPage() {
  const [activeTab, setActiveTab] = useState<"current" | "become">("current");
  const budgetSponsors = sponsorsData.filter((s) => s.type === "budget");
  const spaceSponsors = sponsorsData.filter((s) => s.type === "space");

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Thanks to our sponsors who support and enable tech communities in
            México. Together, we're building a thriving tech ecosystem.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-border">
          <button
            onClick={() => setActiveTab("current")}
            className={`
              px-6 py-4 font-semibold transition-all border-b-2 -mb-px
              ${
                activeTab === "current"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }
            `}
          >
            Current Sponsors
          </button>
          <button
            onClick={() => setActiveTab("become")}
            className={`
              px-6 py-4 font-semibold transition-all border-b-2 -mb-px
              ${
                activeTab === "become"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }
            `}
          >
            Become a Sponsor
          </button>
        </div>

        {/* Current Sponsors Tab */}
        {activeTab === "current" && (
          <div className="space-y-16">
            {/* Budget Sponsors */}
            {budgetSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <DollarSign size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold">Budget Sponsors</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {budgetSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            )}

            {/* Space Sponsors */}
            {spaceSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <MapPin size={28} className="text-accent" />
                  <h2 className="text-2xl font-bold">Space Sponsors</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spaceSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">
                Want to Support the Community?
              </h3>
              <p className="text-foreground/70 mb-6">
                Join our sponsors and help us grow the tech community in México.
              </p>
              <button
                onClick={() => setActiveTab("become")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Become a Sponsor
              </button>
            </div>
          </div>
        )}

        {/* Become a Sponsor Tab */}
        {activeTab === "become" && (
          <div className="space-y-12">
            {/* Sponsorship Tiers */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Sponsorship Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SponsorshipTier
                  icon={<DollarSign size={32} />}
                  title="Budget Sponsor"
                  description="Provide financial support for community initiatives"
                  benefits={[
                    "Support event hosting and speaker fees",
                    "Fund community initiatives",
                    "Sponsor talks & workshops",
                    "Featured listing on website",
                    "Logo on all event materials",
                    "Recognition in newsletters",
                  ]}
                  cta="Become Budget Sponsor"
                />
                <SponsorshipTier
                  icon={<Building2 size={32} />}
                  title="Space Sponsor"
                  description="Provide venue and infrastructure for events"
                  features={[
                    "Host community meetups",
                    "Support workshops & conferences",
                    "Provide workspace for collaborations",
                    "Featured listing on website",
                    "Logo on all event materials",
                    "Recognition in newsletters",
                  ]}
                  cta="Become Space Sponsor"
                />
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-8">
                How to Become a Sponsor
              </h2>
              <div className="space-y-6">
                <Step
                  number={1}
                  title="Prepare Your Information"
                  description="Gather your company logo, name, website, and a brief description of your organization."
                />
                <Step
                  number={2}
                  title="Create a Pull Request"
                  description="Fork our GitHub repository and add your sponsorship details to the sponsors data file."
                />
                <Step
                  number={3}
                  title="Submit for Review"
                  description="Create a PR with your changes. Our team will review and merge it within 24-48 hours."
                />
                <Step
                  number={4}
                  title="Get Featured"
                  description="Once merged, your organization will be featured on our website and at our events!"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-foreground/70 mb-6">
                  All sponsorships are managed through our GitHub repository to
                  ensure transparency and community trust.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  <Mail size={18} />
                  View Contribution Guide
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Questions?</h3>
              <p className="text-foreground/70 mb-6">
                Have questions about sponsorship opportunities? Contact us for
                more information.
              </p>
              <a
                href="mailto:sponsors@mtytech.community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                <Mail size={18} />
                Contact Us
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

interface Sponsor {
  id: string;
  name: string;
  description: string;
  type: "budget" | "space";
  logo?: string;
  website?: string;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const icon =
    sponsor.type === "budget" ? <DollarSign size={24} /> : <MapPin size={24} />;
  const color = sponsor.type === "budget" ? "text-primary" : "text-accent";

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className={`${color}`}>{icon}</div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold">{sponsor.name}</h3>
          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
              sponsor.type === "budget"
                ? "bg-primary/20 text-primary"
                : "bg-accent/20 text-accent"
            }`}
          >
            {sponsor.type === "budget" ? "Budget Sponsor" : "Space Sponsor"}
          </span>
        </div>
      </div>

      <p className="text-foreground/70 text-sm mb-4">{sponsor.description}</p>

      {sponsor.logo && (
        <div className="mb-4 h-12 flex items-center justify-center bg-muted rounded">
          <div className="text-xs font-semibold text-foreground/70">
            {sponsor.logo}
          </div>
        </div>
      )}

      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-semibold transition-colors"
        >
          Visit Website
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

function SponsorshipTier({
  icon,
  title,
  description,
  benefits,
  features,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  features?: string[];
  cta: string;
}) {
  const items = benefits || features || [];

  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
      <div className="mb-6 text-primary">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>

      <ul className="space-y-4 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all text-center inline-block"
      >
        {cta}
      </a>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
