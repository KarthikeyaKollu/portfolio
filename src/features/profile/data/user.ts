import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Karthikeya",
  lastName: "Kollu",
  displayName: "Karthikeya Kollu",
  username: "Karthikeya-Kollu",
  gender: "male",
  pronouns: "he/him",
  bio: "Researching on AI",
  flipSentences: [
    "AI Engineer",
    "Lead Fullstack Engineer",
    "Open Source Contributor",
  ],
  address: "Andhra Pradesh, India",
  phoneNumber: "KzkxIDkzNDYzMzI0MDQ=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2FydGhpa2V5YWtvbGx1OEBnbWFpbC5jb20=", // base64 encoded
  website: "https://www.linkedin.com/in/karthikeyakollu",
  jobTitle: "AI Engineer",
  jobs: [
    {
      title: "Lead Fullstack",
      company: "MyAcolyte",
      website: "https://www.acolyteai.in/",
    },
    {
      title: "Founder",
      company: "Orian Ollama WebUI",
      website: "https://chromewebstore.google.com/detail/omjofoiomojnencdajljicnjoipcbbfc?utm_source=item-share-cb",
    },
  ],
  about: `
My name is Karthikeya. I like working with small-sized teams, preferably less than 30 people. I usually work around 15 hours daily on my side projects as well as my main work. I enjoy helping the community and contributing to open source projects.

I have around 1.5+ years of experience in development and 1+ year of professional experience building products. I like exploring how I can make scalable systems, like RAG pipelines and agentic workflows with task delegation.

I launched my own Chrome extension startup. Within 3 months, it reached around 500 users, and to this date, it has around 1,000 users.

I enjoy solving interesting problems and researching new things.I focus on implementing new features or researching innovative solutions.
  `,
  avatar: "https://avatars.githubusercontent.com/u/108949445?v=4",
  ogImage:
    "",
  namePronunciationUrl: "",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2025-10-01", // YYYY-MM-DD
};
