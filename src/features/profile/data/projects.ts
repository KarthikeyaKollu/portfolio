import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "local-interpreter",
    title: "Local Interpreter",
    period: {
      start: "2025",
    },
    link: "https://github.com/KarthikeyaKollu/Local-Interpreter",
    skills: ["Python", "OpenAI", "Ollama"],
    description: `
An LLM-based OS that performs tasks according to prompts:
- Full system access, allowing modification of system settings and files.
- Replans and adapts efficiently if initial attempts fail (80%-95% success rate).
- Completely local, ensuring data privacy with no external data exposure.
`,
    logo: "https://www.openinterpreter.com/favicon.ico",
    isExpanded: true,
  },

   {
    id: "gumloop",
    title: "Gumloop",

    period: {
      start: "10.2025",
    },
    link: "https://www.notion.so/Day-3-246621c8114480bbb48be80b9b45d4d4",
    skills: [
      "JavaScript",
      "DOM Manipulation",
      "AI Flow Automation",
      "Web Extensions",
      "Prompt Engineering",
    ],
    description: `
Gumloop is a DOM extension designed to replace Gummy:
- Creates, edits, and modifies flows fully from scratch based on user prompts.
- Automates tasks in the browser efficiently.
- Maximum flexibility for AI-driven web workflows.
Additional reference: [Day 4 Notes](https://www.notion.so/Day-4-24c621c8114480528611cd66b38b9c6d)
`,
    logo: "https://avatars.githubusercontent.com/u/133821906?s=200&v=4",
    isExpanded: true,
  },

  {
    id: "copilotx",
    title: "CopilotX",
    period: {
      start: "2025",
    },
    link: "",
    skills: ["Python", "Tkinter", "Ollama", "LangChain", "Gemini API"],
    description: `
AI tool integrated with Gemini and Ollama models that enhances:
- Email writing, content summarization, and coding assistance.
- Boosts efficiency by over 30% during device use.
- Supports skill development and coding education for learners.
`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "workflow",
    title: "Workflow",
    period: {
      start: "2025",
    },
    link: "",
    skills: ["Python", "Flask", "ReactJS", "ShadcnUI", "Firebase", "ReactFlow"],
    description: `
Workflow Builder application:
- Users can visually construct workflows with drag-and-drop interface.
- Save, load, and execute workflows for data manipulation tasks.
- Backend interprets and executes tasks efficiently in sequence.
`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "pro-case",
    title: "Pro Case",
    period: {
      start: "2025",
    },
    link: "",
    skills: [
      "Python",
      "Flask",
      "React",
      "RaspberryPi",
      "Arduino",
      "Serial Communication",
    ],
    description: `
Hardware-software integrated health monitoring system:
- Real-time sensor data: SpO2, heart rate, temperature.
- Provides personalized exercise and hydration recommendations.
- Encourages healthier lifestyle choices.
`,
    logo: "",
    isExpanded: true,
  },
  {
    id: "social-media-analytics",
    title: "Social Media Comments Analytic Tool",
    period: {
      start: "2025",
    },
    link: "",
    skills: ["Python", "Flask", "Groq API", "ReactJS", "ShadcnUI"],
    description: `
- Uses LLM models to analyze social media comments.
- Reduces comment analysis time by 90%, enabling faster engagement with customers.
`,
    logo: "",
    isExpanded: true,
  },
];
