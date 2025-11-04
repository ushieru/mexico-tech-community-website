export interface Community {
  id: string
  name: string
  nameEs: string
  description: string
  descriptionEs: string
  focus: string[]
  focusEs: string[]
  members: number
  contacts: Contact[]
  image?: string
  category?: string
  meetups?: number
  links?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
  state: string // Added state for location filtering
  stateEs: string
  city: string
}

export interface Contact {
  name: string
  role: string
  roleEs: string
  bio?: string
  bioEs?: string
  socials: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
    email?: string
  }
}

export const communitiesData: Community[] = [
  {
    id: "arena",
    name: "Arena Tech Community",
    nameEs: "Comunidad Tech Arena",
    description: "A vibrant community focused on web development, design, and digital innovation.",
    descriptionEs: "Una comunidad vibrante enfocada en desarrollo web, diseño e innovación digital.",
    focus: ["Web Dev", "Design", "Digital Innovation"],
    focusEs: ["Desarrollo Web", "Diseño", "Innovación Digital"],
    members: 250,
    category: "Frontend",
    meetups: 8,
    image: "/react-community.jpg",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Juan García",
        role: "Community Lead",
        roleEs: "Líder de la Comunidad",
        bio: "Full-stack developer passionate about web technologies and community building.",
        bioEs: "Desarrollador full-stack apasionado por las tecnologías web y la construcción de comunidades.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          github: "https://github.com",
          website: "https://arena.tech",
          email: "juan@arena.tech",
        },
      },
      {
        name: "María López",
        role: "Event Coordinator",
        roleEs: "Coordinadora de Eventos",
        bio: "Organizer passionate about bringing tech enthusiasts together.",
        bioEs: "Organizadora apasionada por reunir a entusiastas de la tecnología.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          email: "maria@arena.tech",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/arena_tech",
      linkedin: "https://linkedin.com/company/arena-tech",
      github: "https://github.com/arena-tech",
      website: "https://arena.tech",
    },
  },
  {
    id: "devops-mty",
    name: "DevOps Monterrey",
    nameEs: "DevOps Monterrey",
    description: "Community dedicated to DevOps practices, cloud technologies, and infrastructure automation.",
    descriptionEs: "Comunidad dedicada a prácticas DevOps, tecnologías en la nube y automatización de infraestructura.",
    focus: ["DevOps", "Cloud", "Kubernetes", "Docker", "Infrastructure"],
    focusEs: ["DevOps", "Nube", "Kubernetes", "Docker", "Infraestructura"],
    members: 180,
    category: "DevOps",
    meetups: 5,
    image: "/devops-cloud.jpg",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Carlos Rodríguez",
        role: "Community Organizer",
        roleEs: "Organizador de la Comunidad",
        bio: "DevOps engineer with 10+ years of experience in cloud infrastructure.",
        bioEs: "Ingeniero DevOps con 10+ años de experiencia en infraestructura en la nube.",
        socials: {
          twitter: "https://twitter.com/carlos_devops",
          github: "https://github.com/carlos-devops",
          email: "carlos@devopsmty.com",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/devops_mty",
      github: "https://github.com/devops-monterrey",
      website: "https://devopsmty.com",
    },
  },
  {
    id: "python-mty",
    name: "Python Monterrey",
    nameEs: "Python Monterrey",
    description: "Passionate Python developers sharing knowledge and building amazing projects together.",
    descriptionEs:
      "Desarrolladores apasionados de Python compartiendo conocimiento y construyendo proyectos increíbles juntos.",
    focus: ["Python", "Data Science", "Backend", "AI/ML"],
    focusEs: ["Python", "Ciencia de Datos", "Backend", "IA/ML"],
    members: 220,
    category: "Backend",
    meetups: 6,
    image: "/python-community.jpg",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Sofia Chen",
        role: "Founder",
        roleEs: "Fundadora",
        bio: "Data scientist and Python enthusiast dedicated to advancing the tech community.",
        bioEs: "Científica de datos y entusiasta de Python dedicada a avanzar la comunidad tecnológica.",
        socials: {
          linkedin: "https://linkedin.com/in/sofia-chen",
          github: "https://github.com/sofia-chen",
          email: "sofia@pythonmty.com",
        },
      },
    ],
    links: {
      linkedin: "https://linkedin.com/company/python-monterrey",
      github: "https://github.com/python-monterrey",
      website: "https://pythonmty.com",
    },
  },
  {
    id: "react-mty",
    name: "React Monterrey",
    nameEs: "React Monterrey",
    description: "Community focused on React, modern frontend development, and JavaScript ecosystem.",
    descriptionEs: "Comunidad enfocada en React, desarrollo frontend moderno y el ecosistema de JavaScript.",
    focus: ["React", "Frontend", "JavaScript", "Web Development"],
    focusEs: ["React", "Frontend", "JavaScript", "Desarrollo Web"],
    members: 342,
    category: "Frontend",
    meetups: 8,
    image: "/react-community.jpg",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Luis Mejía",
        role: "Lead Organizer",
        roleEs: "Organizador Principal",
        bio: "Senior frontend engineer passionate about React and modern web technologies.",
        bioEs: "Ingeniero frontend senior apasionado por React y tecnologías web modernas.",
        socials: {
          twitter: "https://twitter.com/luis_dev",
          github: "https://github.com/luis-mejia",
          linkedin: "https://linkedin.com/in/luis-mejia",
          email: "luis@reactmty.com",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/react_mty",
      github: "https://github.com/react-monterrey",
      website: "https://reactmty.com",
    },
  },
  {
    id: "tech-mexico-city",
    name: "Mexico City Tech Hub",
    nameEs: "Hub Tech Ciudad de México",
    description: "Leading tech community in Mexico's capital, connecting innovators and entrepreneurs.",
    descriptionEs: "Comunidad tech líder en la capital de México, conectando innovadores y emprendedores.",
    focus: ["Startups", "Innovation", "Tech Entrepreneurship"],
    focusEs: ["Startups", "Innovación", "Emprendimiento Tech"],
    members: 1250,
    category: "Frontend",
    meetups: 12,
    image: "/react-community.jpg",
    state: "Ciudad de México",
    stateEs: "Ciudad de México",
    city: "Mexico City",
    contacts: [
      {
        name: "Roberto Martínez",
        role: "Community Director",
        roleEs: "Director de la Comunidad",
        bio: "Entrepreneur and tech community builder based in Mexico City.",
        bioEs: "Emprendedor y constructor de comunidades tech en Ciudad de México.",
        socials: {
          twitter: "https://twitter.com/roberto_tech",
          linkedin: "https://linkedin.com/in/roberto-martinez",
          email: "roberto@techmexico.city",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/tech_mexico_city",
      linkedin: "https://linkedin.com/company/mexico-city-tech",
      website: "https://techmexico.city",
    },
  },
  {
    id: "frontend-guadalajara",
    name: "Frontend Guadalajara",
    nameEs: "Frontend Guadalajara",
    description: "Frontend developers community in Guadalajara focused on modern web technologies.",
    descriptionEs: "Comunidad de desarrolladores frontend en Guadalajara enfocada en tecnologías web modernas.",
    focus: ["Frontend", "Web Design", "JavaScript", "React"],
    focusEs: ["Frontend", "Diseño Web", "JavaScript", "React"],
    members: 180,
    category: "Frontend",
    meetups: 4,
    image: "/react-community.jpg",
    state: "Jalisco",
    stateEs: "Jalisco",
    city: "Guadalajara",
    contacts: [
      {
        name: "Andrea Sánchez",
        role: "Community Lead",
        roleEs: "Líder de la Comunidad",
        bio: "UX/UI designer and frontend specialist.",
        bioEs: "Especialista en diseño UX/UI y frontend.",
        socials: {
          linkedin: "https://linkedin.com/in/andrea-sanchez",
          github: "https://github.com/andrea-frontend",
          email: "andrea@frontendgdl.mx",
        },
      },
    ],
    links: {
      github: "https://github.com/frontend-guadalajara",
      website: "https://frontendgdl.mx",
    },
  },
  {
    id: "backend-puebla",
    name: "Backend Puebla",
    nameEs: "Backend Puebla",
    description: "Backend development community focusing on server-side technologies and databases.",
    descriptionEs: "Comunidad de desarrollo backend enfocada en tecnologías del lado del servidor y bases de datos.",
    focus: ["Backend", "Databases", "Node.js", "APIs"],
    focusEs: ["Backend", "Bases de Datos", "Node.js", "APIs"],
    members: 95,
    category: "Backend",
    meetups: 3,
    image: "/python-community.jpg",
    state: "Puebla",
    stateEs: "Puebla",
    city: "Puebla",
    contacts: [
      {
        name: "Miguel Rosales",
        role: "Organizer",
        roleEs: "Organizador",
        bio: "Backend engineer passionate about scalable systems.",
        bioEs: "Ingeniero backend apasionado por sistemas escalables.",
        socials: {
          github: "https://github.com/miguel-backend",
          email: "miguel@backendpuebla.mx",
        },
      },
    ],
    links: {
      github: "https://github.com/backend-puebla",
      website: "https://backendpuebla.mx",
    },
  },
  {
    id: "devops-texas",
    name: "DevOps Querétaro",
    nameEs: "DevOps Querétaro",
    description: "Cloud infrastructure and DevOps community in Querétaro.",
    descriptionEs: "Comunidad de infraestructura en la nube y DevOps en Querétaro.",
    focus: ["DevOps", "Cloud", "AWS", "Infrastructure"],
    focusEs: ["DevOps", "Nube", "AWS", "Infraestructura"],
    members: 120,
    category: "DevOps",
    meetups: 4,
    image: "/devops-cloud.jpg",
    state: "Querétaro",
    stateEs: "Querétaro",
    city: "Querétaro",
    contacts: [
      {
        name: "Gabriel López",
        role: "Lead",
        roleEs: "Líder",
        bio: "Cloud architect and DevOps specialist.",
        bioEs: "Arquitecto de nube y especialista en DevOps.",
        socials: {
          email: "gabriel@devopsqro.mx",
        },
      },
    ],
    links: {
      website: "https://devopsqro.mx",
    },
  },
]

export const MEXICAN_STATES = [
  { id: "all", name: "All States", nameEs: "Todos los Estados" },
  { id: "NL", name: "Nuevo León", nameEs: "Nuevo León" },
  { id: "CDMX", name: "Ciudad de México", nameEs: "Ciudad de México" },
  { id: "JAL", name: "Jalisco", nameEs: "Jalisco" },
  { id: "PUE", name: "Puebla", nameEs: "Puebla" },
  { id: "QRO", name: "Querétaro", nameEs: "Querétaro" },
  { id: "BC", name: "Baja California", nameEs: "Baja California" },
  { id: "COAH", name: "Coahuila", nameEs: "Coahuila" },
  { id: "GTO", name: "Guanajuato", nameEs: "Guanajuato" },
  { id: "SLP", name: "San Luis Potosí", nameEs: "San Luis Potosí" },
  { id: "TAMPS", name: "Tamaulipas", nameEs: "Tamaulipas" },
]
