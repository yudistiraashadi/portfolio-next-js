export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  location: string;
  employmentType?: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
};

import freelancer from "@/assets/work/freelancer.webp";
import mydaxue from "@/assets/work/mydaxue.webp";
import retas from "@/assets/work/retas.png";
import gtmLogo from "@/assets/work/gtm-logo.png";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2025,
    monthStart: 1,
    yearEnd: 2026,
    monthEnd: 7,
    companyName: "Quantamental AG",
    jobTitle: "Full-Stack AI Engineer",
    location: "Remote · Switzerland",
    employmentType: "Freelance",
    summary:
      "Sole engineer designing and delivering an AI-powered equity-research platform for an independent Swiss asset manager.",
    highlights: [
      "Built ingestion pipelines for financial statements, regulatory filings, earnings transcripts, fund letters, podcasts, newsletters, and social data.",
      "Developed source-grounded LLM workflows for document analysis, investment-thesis monitoring, value-driver modelling, projections, and valuation.",
      "Owned the complete product stack: Next.js and TypeScript, Node.js and Python services, PostgreSQL, object storage, authentication, background jobs, and containerized deployment.",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL", "LLMs"],
  },
  {
    yearStart: 2023,
    monthStart: 9,
    companyName: "PT. Graha Teknologi Maju",
    companyLogo: gtmLogo.src,
    jobTitle: "Co-Founder & CTO",
    location: "Indonesia",
    summary:
      "Co-founded an AI and enterprise software company, leading product architecture and delivery while remaining hands-on in engineering.",
    highlights: [
      "Architected an LLM-powered knowledge-management and e-learning platform for Indonesia's Ministry of Public Works, serving 3,000+ daily active users and 30,000+ at peak.",
      "Designed a real-time computer-vision traffic-detection pipeline for East Java's Transportation Department.",
      "Built APPA Academy end-to-end, a multi-tenant sports-management SaaS adopted by 500+ academies across Indonesia.",
      "Led 15+ developers across 29+ technology initiatives while contributing directly in TypeScript, React, Next.js, Python, and PostgreSQL.",
    ],
    technologies: ["Architecture", "AI", "Next.js", "Python", "Leadership"],
  },
  {
    yearStart: 2021,
    monthStart: 1,
    yearEnd: 2023,
    monthEnd: 9,
    companyName: "PT Solusi Siber Teknologi (Retas.io)",
    companyLogo: retas.src,
    jobTitle: "Software Developer → Lead Developer",
    location: "Surabaya, Indonesia",
    summary:
      "Progressed into technical leadership for concurrent government and enterprise products while maintaining 60%+ hands-on engineering time.",
    highlights: [
      "Architected and deployed a nationwide product-quality management system for Unilever Indonesia using React, Next.js, and Python REST APIs.",
      "Delivered 5+ React Native applications and 12+ web platforms for enterprise and government clients.",
      "Translated stakeholder requirements into system designs and iterative delivery plans as the primary technical liaison.",
      "Established CI/CD, automated testing, Git workflows, and code review practices for the engineering team.",
    ],
    technologies: ["React", "React Native", "Python", "REST APIs", "CI/CD"],
  },
  {
    yearStart: 2018,
    monthStart: 3,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "MyDaxue",
    companyLogo: mydaxue.src,
    jobTitle: "Mobile Application Developer",
    location: "Nanjing, China",
    summary:
      "Designed and built a React Native student-management app for the international-student community at Nanjing University of Aeronautics and Astronautics.",
    highlights: [
      "Worked across product design and implementation in a multilingual, cross-cultural team.",
      "Delivered mobile workflows and REST API integrations for student services.",
    ],
    technologies: ["React Native", "JavaScript", "REST APIs"],
  },
  {
    yearStart: 2014,
    monthStart: 10,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "Freelancer",
    companyLogo: freelancer.src,
    jobTitle: "Independent Full-Stack Developer",
    location: "Remote",
    summary:
      "Delivered web and mobile products for international clients, owning projects from early discovery through deployment.",
    highlights: [
      "Managed discovery, scoping, implementation, deployment, and remote client communication independently.",
      "Built production products with Laravel, PHP, React Native, and REST APIs.",
    ],
    technologies: ["Laravel", "PHP", "React Native", "REST APIs"],
  },
];
