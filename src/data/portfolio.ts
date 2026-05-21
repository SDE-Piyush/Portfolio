export const personal = {
  name: "Piyush Kumar",
  title: "Full Stack Developer",
  tagline:
    "Building scalable MERN applications with secure APIs, clean architecture, and AI-powered features.",
  email: "piyushkumarsmith@gmail.com",
  phone: "+91-8825329095",
  whatsapp: "+917277443795",
  whatsappUrl: "https://wa.me/917277443795",
  location: "Pune, India",
  linkedin: "https://www.linkedin.com/in/piyush-kumar-b575a81b5/",
  github: "https://github.com/SDE-Piyush",
  resumePath: "/Piyush_Kumar_resume.pdf",
};

export type EducationEntry = {
  id: string;
  icon: "graduation" | "laptop";
  title: string;
  institution: string;
  location?: string;
  periodBadge: string;
  description: string;
  tags: string[];
  certificateUrl?: string;
  serialNo?: string;
};

export const about = {
  summary:
    "B.Tech graduate in Computer Science with a completed MERN Full Stack Development certification from AccioJob. I design and ship full-stack products—from REST APIs with JWT auth to modular React frontends—and practice DSA to write efficient, maintainable code.",
  highlights: [
    "MERN stack & REST API development",
    "JWT authentication & role-based access",
    "Generative AI integration (interview prep, resume analysis)",
    "Modular frontend architecture (UI, hooks, state, API layers)",
  ],
};

export const educationEntries: EducationEntry[] = [
  {
    id: "btech",
    icon: "graduation",
    title: "B.Tech in Computer Science",
    institution: "Lovely Professional University",
    location: "Jalandhar, IN",
    periodBadge: "July 2020 - May 2024",
    description:
      "Completed undergraduate studies in Computer Science with focus on programming fundamentals, data structures, algorithms, and software engineering principles.",
    tags: ["B.Tech", "Computer Science"],
  },
  {
    id: "mern",
    icon: "laptop",
    title: "MERN Full Stack Development",
    institution: "AccioJob",
    periodBadge: "April 2025 - April 2026",
    description:
      "Certificate of Completion — successfully completed the Mern Full Stack Development course. Intensive training covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Redux, and REST APIs with hands-on full-stack projects.",
    tags: ["MERN Stack", "Full Stack", "AccioJob"],
    certificateUrl: "/Piyush_Kumar_Certificate.pdf",
    serialNo: "c749f0",
  },
];

export const skills = {
  languages: ["JavaScript", "Java", "Python", "HTML", "CSS", "SQL", "MongoDB"],
  frameworks: [
    "React.js",
    "Redux",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
  tools: [
    "Git",
    "Docker",
    "Postman",
    "VS Code",
    "IntelliJ IDEA",
    "Google Cloud Platform",
    "REST APIs",
    "JWT Authentication",
  ],
};

export const projects = [
  {
    name: "PrepWise AI",
    tagline: "AI Interview & Resume Optimization Platform",
    period: "April 2026",
    tech: ["MERN", "JWT", "Generative AI", "REST APIs"],
    description:
      "Full-stack platform that generates AI-driven interview questions and personalized prep plans from job descriptions, with resume parsing and ATS optimization.",
    highlights: [
      "Secure REST APIs with JWT and role-based access control",
      "Modular frontend layers: UI, hooks, state, and API",
      "Resume analysis, skill gap identification, and job-match scoring",
    ],
    github: "https://github.com/SDE-Piyush/PrepWise-AI",
    live: null,
    featured: true,
  },
  {
    name: "Financly",
    tagline: "Personal Finance Management System",
    period: "December 2025",
    tech: ["React", "Firebase Auth", "Data Viz", "CSV"],
    description:
      "Secure personal finance app to track income, expenses, and balances with interactive dashboards and data portability.",
    highlights: [
      "Firebase Authentication for secure sessions",
      "Interactive dashboards for financial insights",
      "CSV import/export for data management",
    ],
    github: "https://github.com/SDE-Piyush/Financly",
    live: null,
    featured: true,
  },
  {
    name: "Weather-Wise",
    tagline: "Real-Time Weather Monitoring",
    period: "December 2025",
    tech: ["React", "External APIs", "Responsive UI"],
    description:
      "Responsive weather app with optimized API calls and dynamic city-based search using reusable React components.",
    highlights: [
      "Real-time weather data from external APIs",
      "Dynamic city search with efficient state management",
      "Reusable component-driven UI",
    ],
    github: "https://github.com/SDE-Piyush/Weather-wise",
    live: "https://github.com/SDE-Piyush",
    featured: false,
  },
];

export const hobbies = {
  subtitle: "BEYOND CODING",
  introTitle: "What I Love Doing",
  introDescription:
    "When I'm not coding or designing, you'll find me exploring various creative outlets and adventures that fuel my inspiration.",
  cubeFaces: [
    {
      title: "Web Design",
      description: "UI & responsive layouts",
    },
    {
      title: "Photo Editing",
      description: "Beyond imagination",
    },
    {
      title: "Photography",
      description: "Creative visuals",
    },
    {
      title: "Video Editing",
      description: "Engaging stories",
    },
    {
      title: "Web Development",
      description: "New technologies",
    },
    {
      title: "Beyond Coding",
      description: "Inspiration",
    },
  ],
  items: [
    {
      title: "Photography",
      description:
        "Passionate about capturing and editing creative visuals",
    },
    {
      title: "Photo Editing",
      description:
        "Skilled in Adobe Photoshop for creative photo manipulation",
    },
    {
      title: "Video Editing",
      description: "Creating engaging content with Adobe Premiere Pro",
    },
    {
      title: "Web Development",
      description: "Building and experimenting with new web technologies",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "WhatsApp", href: "#whatsapp" },
  { label: "Contact", href: "#contact" },
];
