export type TimelineEvent = {
  id: string;
  date: string;
  description: string;
  details?: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t10",
    date: "05/08/2026",
    description: "Top 30 - Track 2 Viettel AI Race",
  },
  {
    id: "t7",
    date: "23/07/2026",
    description: "Third Prize (Top 3) - Vietnamese Student HackAIthon",
    details: ["Awarded by the Vietnam Student Association"],
  },
  {
    id: "t8",
    date: "05/2026",
    description: "Participated in GDGs On Campus - Hackathon Vietnam 2026",
  },
  {
    id: "t6",
    date: "09/2025",
    description: "Began studying Advanced Program in Computer Science at University of Science - VNU",
  },
  {
    id: "t5",
    date: "03/2024",
    description: "Third Prize — National Mathematics Gifted Student Competition",
    details: ["Awarded by the Ministry of Education and Training of Vietnam"],
  },
  {
    id: "t4",
    date: "05/2023",
    description: "Bronze Medal — Vietnam Mathematical Olympiad for Students",
    details: ["Awarded by the Vietnam Institute for Advanced Study in Mathematics (VIASM)"],
  },
  {
    id: "t3",
    date: "07/2022",
    description: "Silver Medal — Coastal and Red River Delta Mathematical Olympiad",
    details: ["Awarded by the Coastal and Red River Delta Specialized High Schools Association"],
  },
  {
    id: "t2",
    date: "05/2022",
    description: "Consolation Prize — Vietnam Mathematical Olympiad for Students",
    details: ["Awarded by the Vietnam Institute for Advanced Study in Mathematics (VIASM)"],
  },
  {
    id: "t1",
    date: "09/2021",
    description: "Admitted to the Mathematics Gifted Class at Le Khiet High School for the Gifted - Quang Ngai",
  },
];
