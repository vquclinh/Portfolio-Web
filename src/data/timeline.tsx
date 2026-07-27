export type TimelineEvent = {
  id: string;
  date: string;
  description: string;
  details?: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t7",
    date: "23/07/2026",
    description: "Third Prize (top 3)",
    details: ["Awarded by the Vietnam Student Association"],
  },
  {
    id: "t9",
    date: "06/2026",
    description: "Participated in Vietnamese Student HackAIthon",
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
  },
  {
    id: "t4",
    date: "05/2023",
    description: "Bronze Medal — Vietnam Mathematical Olympiad for Students",
  },
  {
    id: "t3",
    date: "07/2022",
    description: "Silver Medal — Coastal and Red River Delta Mathematical Olympiad",
  },
  {
    id: "t2",
    date: "05/2022",
    description: "Consolation Prize — Vietnam Mathematical Olympiad for Students",
  },
  {
    id: "t1",
    date: "09/2021",
    description: "Admitted to the Mathematics Gifted Class at Le Khiet High School for the Gifted - Quang Ngai",
  },
];
