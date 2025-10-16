export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  priority?: boolean;
};

import kelaslyImage from "@/assets/portfolio/kelasly.webp";
import bonImage from "@/assets/portfolio/bon.webp";
import bpsdmPuprImage from "@/assets/portfolio/bpsdm-pupr.webp";
import lspBpsdmImage from "@/assets/portfolio/lsp-bpsdm.webp";
import posParkingTulungagungImage from "@/assets/portfolio/pos-parking-tulungagung.webp";
import puspasUnairImage from "@/assets/portfolio/puspas-unair.webp";
import exitaImage from "@/assets/portfolio/exita.webp";
import trakerKediriImage from "@/assets/portfolio/traker-kediri.webp";
import simantuImage from "@/assets/portfolio/simantu.webp";
import ePelatihanImage from "@/assets/portfolio/e-pelatihan.webp";
import panglimaEkspresImage from "@/assets/portfolio/panglima-ekspres.webp";
import meijiTimbanganImage from "@/assets/portfolio/meiji-timbangan.webp";
import ekinImage from "@/assets/portfolio/ekin.webp";
import appaDairyImage from "@/assets/portfolio/appa-dairy.webp";
import appaSportImage from "@/assets/portfolio/appa-sport.webp";
import lhrImage from "@/assets/portfolio/lhr.webp";
import pqsUnilever from "@/assets/portfolio/pqs-unilever.webp";
import sistemPersonalia from "@/assets/portfolio/sistem-personalia.webp";
import aaainvestama from "@/assets/portfolio/aaainvestama.webp";
import klop from "@/assets/portfolio/klop.webp";
import sunScraping from "@/assets/portfolio/sun-scraping.webp";
import sumwizardImage from "@/assets/portfolio/sumwizard.webp";
import appaAcademyImage from "@/assets/portfolio/appa-academy.webp";
import rekapKaryasiswaImage from "@/assets/portfolio/rekap-karyasiswa.webp";

export const portfolioData: PortfolioType[] = [
  {
    urlMissingReason: "Only available for internal use",
    year: 2025,
    title: "Karyasiswa PUPR Monitoring Dashboard",
    description:
      "Dashboard for monitoring and reporting scholarship students (Karyasiswa) at Ministry of Public Works and Housing (PUPR), enabling regular study progress tracking and evaluation",
    image: rekapKaryasiswaImage.src,
    tags: ["Dashboard", "Monitoring", "Data Visualization", "Reporting"],
    priority: true,
  },
  {
    url: "https://appa-academy.com/",
    year: 2025,
    title: "APPA Academy: Soccer School Management System",
    description:
      "Indonesia's leading management platform for soccer schools, trusted by 500+ academies with features including player assessment, training programs, and real-time monitoring",
    image: appaAcademyImage.src,
    tags: ["Next.js", "SaaS", "Cloud", "Dashboard", "Sports Tech"],
    priority: true,
  },
  {
    url: "https://sumwizard.com/",
    year: 2025,
    title: "Sumwizard: AI-Powered Media Analysis Platform",
    description:
      "AI-powered platform that transforms YouTube videos and audio files into actionable insights with automated summarization, transcription, and intelligent question answering",
    image: sumwizardImage.src,
    tags: ["Next.js", "AI", "NLP", "Media Analysis", "SaaS"],
    priority: true,
  },
  {
    urlMissingReason: "Closed research project",
    year: 2024,
    title: "News Sentiment Analysis: Scraping and Analyzing News Articles",
    description:
      "Research project on analyzing sentiments of news article and its effect in the bond market's yield, join research by ITS and the Ministry of Finance of Indonesia",
    image: sunScraping.src,
    tags: ["Python", "Scraping", "NLP", "Sentiment Analysis"],
  },
  {
    url: "https://klop.pu.go.id/",
    year: 2024,
    title: "Klop: AI Powered Knowledge Management System",
    description:
      "Knowledge management system with AI-powered features such as text recognition and LLM assisted search, used by Public Works and Housing Ministry of Indonesia",
    image: klop.src,
    tags: ["Next.js", "Supabase", "AI", "LLM"],
    priority: true,
  },
  {
    url: "https://www.triple-a.co.id/",
    year: 2024,
    title: "Landing Page for a Financial Agency",
    description:
      "Landing page for a private investment and corporate finance agency in Indonesia",
    image: aaainvestama.src,
    tags: ["Next.js", "SQLite"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "AI Powered HR Management System",
    description:
      "Human resources management system with AI-powered features such as face recognition, location tracking, and attendance monitoring",
    image: sistemPersonalia.src,
    tags: ["Next.js", "Supabase", "Postgres", "Computer Vision", "AI"],
    priority: true,
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "Unilever's Product Quality Standard",
    description:
      "Web app for managing product quality standard of Unilever Indonesia for quality checking, product approval, and data analytics",
    image: pqsUnilever.src,
    tags: ["PHP", "MySQL", "Data Analytics"],
    priority: true,
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "Traffic Detection System AIGLE",
    description:
      "Web app for detection of vehicle and traffic counting, used by Dishub of East Java",
    image: lhrImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Computer Vision", "AI"],
    priority: true,
  },
  {
    url: "https://appa-sport-web.vercel.app/",
    year: 2024,
    title: "APPA Sport",
    description: "Web app for statistics of football matches",
    image: appaSportImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Tailwind CSS"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "APPA Dairy Management System",
    description: "Web app for managing dairy production data of APPA Dairy",
    image: appaDairyImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Tailwind CSS"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "e-Kinerja PUPR",
    description:
      "Website for managing employee performance of Public Works and Housing Ministry of Indonesia",
    image: ekinImage.src,
    tags: ["PHP", "MySQL"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "Meiji Weighing Monitoring System",
    description:
      "Web app for monitoring weighing data of PT. Meiji Indonesian Pharmaceutical Industries in Bangil, Indonesia",
    image: meijiTimbanganImage.src,
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Docker"],
  },
  {
    url: "https://panglimaekspres.com/",
    year: 2023,
    title: "Panglima Ekspres",
    description:
      "Web app for Umroh and Hajj travel agency Panglima Ekspress in Surabaya, Indonesia",
    image: panglimaEkspresImage.src,
    tags: ["Codeigniter", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "BPSDM e-Pelatihan",
    description:
      "Web app for managing training activities of Public Works and Housing Ministry of Indonesia",
    image: ePelatihanImage.src,
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    url: "https://simantu.pu.go.id/",
    year: 2023,
    title: "SIMANTU - Sistem Manajemen Pengetahuan",
    description:
      "Web app for managing knowledge of Public Works and Housing Ministry of Indonesia",
    image: simantuImage.src,
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    url: "https://play.google.com/store/apps/details?id=com.app.trakerkediri&hl=id",
    year: 2023,
    title: "Traker Kediri",
    description:
      "Mobile app for getting public transportation, CCTV, and updates regarding Dishub of Kediri City, Indonesia",
    image: trakerKediriImage.src,
    tags: ["React Native", "GIS"],
    priority: true,
  },
  {
    url: "https://play.google.com/store/apps/details?id=com.exita",
    year: 2023,
    title: "Exita - Explorasi Tulungagung",
    description:
      "Mobile app for accessing public transportation information in Tulungagung City, Indonesia",
    image: exitaImage.src,
    tags: ["React Native", "MobX", "GIS"],
  },
  {
    url: "https://puspas.unair.ac.id",
    year: 2022,
    title: "PUSPAS UNAIR",
    description:
      "Website for Social Fund Management Department of Airlangga University in Surabaya, Indonesia",
    image: puspasUnairImage.src,
    tags: ["Codeigniter", "PHP", "Banking", "MySQL"],
  },
  {
    urlMissingReason: "Only available in local network",
    year: 2022,
    title: "Pos Parking Tulungagung",
    description: "Parking management system for Tulungagung City Government",
    image: posParkingTulungagungImage.src,
    tags: ["Codeigniter", "PHP", "Python", "REST API"],
  },
  {
    url: "https://bpsdm.pu.go.id/lspbpsdm/",
    year: 2022,
    title: "LSP BPSDM PUPR Website",
    description:
      "Website for Certification Body of Public Works and Housing Ministry of Indonesia",
    image: lspBpsdmImage.src,
    tags: ["Codeigniter", "PHP", "Bootstrap", "MySQL"],
  },
  {
    url: "https://bpsdm.pu.go.id/",
    year: 2022,
    title: "BPSDM PUPR Website",
    description:
      "Website for Human Resources Department of Public Works and Housing Ministry of Indonesia",
    image: bpsdmPuprImage.src,
    tags: ["Codeigniter", "PHP", "Bootstrap", "MySQL"],
  },
  {
    url: "https://play.google.com/store/apps/details?id=com.retas.bon&hl=en&gl=US",
    year: 2022,
    title: "Bon: Aplikasi Keuangan UMKM",
    description: "Mobile app for managing small businesses finance",
    image: bonImage.src,
    tags: ["Mobile App", "React Native"],
  },
  {
    year: 2021,
    title: "Kelasly",
    description: "Mobile app for education startup: Kelasly.id",
    image: kelaslyImage.src,
    tags: ["Mobile App", "React Native", "Firebase"],
  },
];
