export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
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
  "Desember",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2023,
    monthStart: 9,
    companyName: "PT. Graha Teknologi Maju",
    companyLogo: gtmLogo.src,
    jobTitle: "CTO and Co-Founder",
  },
  {
    yearStart: 2021,
    monthStart: 1,
    yearEnd: 2023,
    monthEnd: 9,
    companyName: "Retas.io",
    companyLogo: retas.src,
    jobTitle: "Lead Developer",
  },
  {
    yearStart: 2018,
    monthStart: 3,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "MyDaxue",
    companyLogo: mydaxue.src,
    jobTitle: "Mobile Application Developer",
  },
  {
    yearStart: 2014,
    monthStart: 10,
    yearEnd: 2019,
    monthEnd: 0,
    companyName: "Freelancer",
    companyLogo: freelancer.src,
    jobTitle: "Freelance Developer",
  },
];
