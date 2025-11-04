# MTY Tech Community Platform

An open-source platform connecting and showcasing tech communities in Monterrey, Mexico. Built with Next.js and designed to be community-driven and easy to contribute to.

## 🌟 Features

- **Communities Directory** - Browse and discover local tech communities
- **Events Calendar** - Interactive calendar view of upcoming tech events
- **Sponsors Directory** - Showcase organizations supporting the tech community
- **Open Source** - Community-driven platform where anyone can contribute

## 📋 Project Structure

\`\`\`
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── communities/       # Communities directory
│   ├── events/            # Events calendar
│   ├── sponsors/          # Sponsors page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer
│   └── ...
├── data/                  # Data files
│   ├── communities.ts    # Communities data
│   ├── events.ts         # Events data
│   └── sponsors.ts       # Sponsors data
└── public/               # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/mty-tech-community.git

# Navigate to the project
cd mty-tech-community

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🤝 Contributing

We welcome contributions! Here's how to add your community, event, or become a sponsor:

### Adding a Community

1. Fork the repository
2. Edit `data/communities.ts`
3. Add your community object:

\`\`\`typescript
{
  id: "unique-id",
  name: "Your Community Name",
  description: "Brief description of your community",
  focus: ["Topic1", "Topic2", "Topic3"],
  members: 100,
  contacts: [
    {
      name: "Your Name",
      role: "Community Lead",
      socials: {
        twitter: "https://twitter.com/username",
        linkedin: "https://linkedin.com/in/username",
        github: "https://github.com/username",
        website: "https://yourwebsite.com"
      }
    }
  ]
}
\`\`\`

4. Create a Pull Request with your changes

### Adding an Event

1. Fork the repository
2. Edit `data/events.ts`
3. Add your event object:

\`\`\`typescript
{
  id: "event-unique-id",
  title: "Event Title",
  description: "Event description",
  date: "YYYY-MM-DD",
  time: "HH:MM",
  location: "Event location",
  community: "Community Name",
  attendees: 50,
  link: "https://event-link.com"
}
\`\`\`

4. Create a Pull Request

### Becoming a Sponsor

1. Fork the repository
2. Edit `data/sponsors.ts`
3. Add your organization:

\`\`\`typescript
{
  id: "sponsor-unique-id",
  name: "Your Organization",
  description: "How you support the community",
  type: "budget" | "space",
  logo: "YOUR ORG",
  website: "https://yourwebsite.com"
}
\`\`\`

4. Create a Pull Request

## 📅 Data Format Reference

### Communities Data Structure

- `id`: Unique identifier (string, lowercase with hyphens)
- `name`: Community name (string)
- `description`: Short description (string)
- `focus`: Array of focus areas/topics
- `members`: Approximate member count (number)
- `contacts`: Array of contact people with their information

### Events Data Structure

- `id`: Unique identifier (string)
- `title`: Event title (string)
- `description`: Event description (string)
- `date`: Event date (YYYY-MM-DD format)
- `time`: Event time (HH:MM format, 24-hour)
- `location`: Event location (string)
- `community`: Associated community name (string)
- `attendees`: Expected attendee count (number)
- `link`: Event registration/info link (optional, string)

### Sponsors Data Structure

- `id`: Unique identifier (string)
- `name`: Organization name (string)
- `description`: How they support the community (string)
- `type`: "budget" or "space" (string)
- `logo`: Organization abbreviation/logo text (string)
- `website`: Organization website (string)

## 🎨 Design System

The platform uses:
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist (sans) and Geist Mono

## 🔄 Development Workflow

1. Make changes to your local branch
2. Test locally with `npm run dev`
3. Build and check for errors: `npm run build`
4. Create a Pull Request with:
   - Clear title describing changes
   - Description of what was added/modified
   - Screenshots if UI changes were made

## 📝 Validation Rules

When adding content, ensure:

- **Communities**: All fields filled, contact info valid, unique ID
- **Events**: Date must be in the future, time format HH:MM, location specified
- **Sponsors**: Valid type (budget/space), website valid URL, logo text concise

## 🤖 Automation

The platform includes:
- Automated deployment to Vercel
- PR preview environments
- Build checks for TypeScript and Next.js

## 📄 License

This project is open source. See LICENSE file for details.

## 💬 Community

- **GitHub Discussions**: Share ideas and feedback
- **Issues**: Report bugs and request features
- **Pull Requests**: Submit your contributions

## 🙋 Support

For questions or issues:
1. Check existing GitHub issues
2. Create a new issue with details
3. Contact: sponsors@mtytech.community

---

**Built with ❤️ by the MTY Tech Community**
