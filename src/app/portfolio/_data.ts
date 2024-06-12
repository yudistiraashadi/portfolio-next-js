export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
import appaDairyImage from "@/assets/portfolio/appa-dairy.webp";
import appaSportImage from "@/assets/portfolio/appa-sport.webp";
import lhrImage from "@/assets/portfolio/lhr.webp";

export const portfolioData: PortfolioType[] = [
  {
    urlMissingReason: "Only available for internal use",
    year: 2024,
    title: "Traffic Detection System AIGLE",
    description:
      "Web app for detection of vehicle and traffic counting, used by Dishub of East Java",
    image: lhrImage.src,
    tags: ["Next.js", "Supabase", "Postgres", "Computer Vision"],
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
