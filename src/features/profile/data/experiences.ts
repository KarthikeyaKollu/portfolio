import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "myacolyte",
    companyName: "MyAcolyte EdTech",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp", // Placeholder, replace later
    positions: [
      {
        id: "lead-fullstack-2025",
        title: "Lead Full Stack Developer",
        employmentPeriod: {
          start: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Redesigned platform for scalable, real-time AI workflows.
- Built a custom agentic AI library for Acolyte AI, inspired by AgnoAGI but with original strategies and multi-agent task delegation.
- Deployed production-ready AI agents with live monitoring, RAG, tool use, and multi-agent delegation.
- Reduced Docker container sizes by 38%, improving deployment speed and resource efficiency.
- Designed efficient fingerprinting algorithm for duplicate detection and linking in a central doc repository to optimize RAG.
- Developed a robust Examination Generation system: reduced question-generation time for 100 NEET-level medical questions from 30 minutes to 500 seconds (without parallelism, via optimized data/model flows).
- Refactored RHE flow: added permission and chunk tables, removing duplication; checked chunk existence to streamline retrieval and access control.
- Implemented dual-study agents: Smart Study Mode (ChatGPT-like) and Intensive Thinking Mode, enabling intelligent role switching for better study assistance.
- Built a PDF viewer with annotation support. leading to recurring API licensing deals (three-figure monthly revenue).
- Maintained project organization on ClickUp, ensuring smooth coordination.
- Managed 3 interns + 1 full-time dev; hired 30 engineers (conducted interviews and team scaling).
- Interviewed over 30 experienced engineers, supporting technical hiring and team scaling.
        `,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "TailwindCSS",
          "Python",
          "AWS",
          "Docker",
          "RAG Systems",
          "Vector DB",
          "Agentic AI",
          "Team Leadership",
          "Recruiting",
          "ClickUp",
        ],
        isExpanded: true,
      },
      {
        id: "fullstack-mvp-nov2024",
        title: "Full Stack Engineer (MVP)",
        employmentPeriod: {
          start: "11.2024",
          end: "12.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Conducted competitor analysis and user research to shape product strategy.
- Built MVP from scratch and validated concepts by gathering user feedback.
- Compared open-source vs paid libraries and implemented cost-saving free-tier infrastructure.
        `,
        skills: [
          "Full Stack",
          "Rapid Prototyping",
          "User Research",
          "Open Source",
          "Cost Optimization",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
  id: "orian",
  companyName: "Orian (Ollama WebUI)",
  companyLogo: "https://lh3.googleusercontent.com/4O1rzs-p_cKe2tKPLbsBGXS4vTU4dAl032tthojnFtvgHubQDKsC2NDEIUXOzU3XXfAfeNO9B45od8-AnJMMSpqP3Ks=s60", 
  positions: [
    {
      id: "founder-orian",
      title: "Founder",
      employmentPeriod: {
        start: "04.2024"
      },
      employmentType: "Part-time",
      icon: "idea",
      description: `
- Built a local-first Chrome extension [Orian (Ollama WebUI)](https://chromewebstore.google.com/detail/orian-ollama-webui/omjofoiomojnencdajljicnjoipcbbfc) integrating Ollama LLMs for website summarization, multi-page chat, and content assistance. 
- Developed AI-driven email inline suggestions and web assistance tools, improving productivity by up to 80%.
- Fully offline, cross-browser solution with strong privacy and performance.
- Currently has **1000 users**, designed for practical usage: chat with web pages, multiple pages simultaneously, and interact directly where text boxes are present.
      `,
      skills: [
        "TypeScript",
        "Chrome Extensions",
        "Ollama",
        "AI/ML",
        "Privacy",
        "Productivity Tools",
        "Web Automation"
      ]
    }
  ],
  isCurrentEmployer: true
}
,
  {
    id: "agno",
    companyName: "AgnoAGI Framework",
    companyLogo: "https://docs.agno.com/mintlify-assets/_mintlify/favicons/agno-v2/queHaJYpMArYtYjI/_generated/favicon/favicon.ico",
    positions: [
      {
        id: "contributor-agnoai",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `
- Added and tested tool hooks (pre-hook and post-hook) – [PR #4588](https://github.com/agno-agi/agno/pull/4588).
- Fixed RAG embedding issue in Vision OCR (page numbers excluded from chunks).
- Preserved extra content on early return in \`_clean_page_numbers\` – [PR #4717](https://github.com/agno-agi/agno/pull/4717).
- Implemented ImageReader with OCR and Vision modes – [PR #4722](https://github.com/agno-agi/agno/pull/4722).
- Refactored PDF readers for efficiency and code reuse – [PR #4757](https://github.com/agno-agi/agno/pull/4757).
- Updated broken template links in docs.
- Helped the community by closing issues and reviewing contributions (e.g. [PR #4868](https://github.com/agno-agi/agno/issues/4844)).
- And more.`,
        skills: [
          "Python",
          "Async",
          "SQL",
          "DynamoDB",
          "AWS",
          "OCR",
          "Vision",
          "RAG",
          "Open Source",
        ],
      },
    ],
  },

{
  id: "mem0",
  companyName: "Mem0",
  companyLogo: "https://docs.mem0.ai/mintlify-assets/_mintlify/favicons/mem0/zSZr9PQn3WsZgmie/_generated/favicon/favicon.ico",
  positions: [
    {
      id: "contributor-mem0",
      title: "Open Source Contributor",
      employmentPeriod: {
        start: "2024"
      },
      employmentType: "Part-time",
      icon: "code",
      description: `
- Added comprehensive test suite for SQLiteManager (telemetry, logs, event capturing) – [PR #3494](https://github.com/mem0ai/mem0/pull/3494).
- Working on extending database factories with support for DynamoDB, PostgreSQL, and other providers.
- Actively contributing to strengthening database reliability, modularity, and scalability of the framework.`,
      skills: [
        "Python",
        "SQLite",
        "DynamoDB",
        "PostgreSQL",
        "Testing",
        "Databases",
        "Open Source"
      ]
    }
  ]
},


{
  id: "opensource_projects",
  companyName: "Open Source <Partial>",
  companyLogo: "",
  positions: [
    {
      id: "openinterpreter",
      title: "OpenInterpreter Contributor",
      employmentPeriod: {
        start: "2024"
      },
      icon: "code",
      description: `
- Proposed cost-saving optimizations for AI model usage, reducing expenses by 25% through content summarization and strategic measures.
- Re-created the interpreter as [LocalInterpreter](https://github.com/KarthikeyaKollu/Local-Interpreter). at a low cost, achieving 80% of the same accuracy.
- Suggested adding a CheckLayer to verify code correctness before execution, expected to reduce failure rates to 20%-30%.
      `,
      skills: ["Python", "AI/ML", "Optimization", "Local AI", "Open Source"]
    },
    {
      id: "continue-extension",
      title: "Continue Extension Contributor",
      employmentPeriod: {
        start: "2024"
      },
      icon: "code",
      description: `
- Recreated the VSCode extension "Continue" for cross-device functionality in just 2 days.
- Wrote user guides and blogs for integrating AI with the extension, leading to a 30-user increase within minutes.
      `,
      skills: ["JavaScript", "VSCode Extension", "AI Integration", "Technical Writing"]
    },
    {
      id: "medisearch",
      title: "MediSearch Contributor",
      employmentPeriod: {
        start: "2024"
      },
      icon: "code",
      description: `
- Developed a full-stack AI chatting application for medical research, integrating AI models into the app.
- Added features to read images and PDFs to enhance research capabilities.
- Demonstrated the app to the team, impressing them with its functionality.
      `,
      skills: ["Python", "Full Stack Development", "AI/ML", "Medical Applications", "OCR"]
    }
  ]
}
,

{
  id: "education",
  companyName: "Education",
  companyLogo: "", 
  positions: [
    {
      id: "raghu-engineering",
      title: "B.Tech in Electronics (Minors in Computer Science)",
      employmentPeriod: {
        start: "2020",
        end: "2024"
      },
      icon: "education",
      description: `
- Raghu Engineering College  
- GPA: **8.6**  
- Specialized in Electronics with a minor in Computer Science.
- Applied coursework in AI frameworks, cloud infrastructure, and full-stack projects.
      `,
      skills: [
        "Electronics",
        "Computer Science",
        "AI/ML",
        "Cloud",
        "Full Stack Development"
      ]
    },
    {
      id: "sri-chaitanya",
      title: "Sri Chaitanya Junior College (MPC: Maths, Physics, Chemistry)",
      employmentPeriod: {
        start: "2018",
        end: "2020"
      },
      icon: "education",
      description: `
- MPC Stream (Maths, Physics, Chemistry)  
- GPA: **9.6**  
- Built strong foundations in Mathematics, Physics, and Chemistry.
      `,
      skills: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      id: "maria-montessori",
      title: "Maria Montessori School (Class X)",
      employmentPeriod: {
        start: "2017",
        end: "2018"
      },
      icon: "education",
      description: `
- Class X Board Examination  
- GPA: **9.7**  
- Early focus on logical reasoning and analytical skills.
      `,
      skills: ["STEM Basics", "Problem Solving", "Analytical Thinking"]
    }
  ]
}



];

