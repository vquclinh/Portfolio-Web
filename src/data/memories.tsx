export type MemoryCategory = "Scholarship" | "Work" | "University" | "High School" | "Life";

export type Memory = {
  id: string;
  title: string;
  date: string;
  category: MemoryCategory;
  description: string;
  image: string;
};

export const memories: Memory[] = [
  {
    id: "m1",
    title: "Graduation Day",
    date: "2026",
    category: "Scholarship",
    description: "",
    image: "",
  },
  {
    id: "m2",
    title: "First Research Paper",
    date: "2026",
    category: "Scholarship",
    description: "",
    image: "",
  },
  {
    id: "m3",
    title: "Game Jam Night",
    date: "2025",
    category: "Scholarship",
    description: "",
    image: "",
  },
  {
    id: "m4",
    title: "Road Trip",
    date: "2025",
    category: "Scholarship",
    description: "",
    image: "",
  },
  {
    id: "m5",
    title: "Coffee & Code",
    date: "2025",
    category: "Scholarship",
    description: "",
    image: "",
  },
];

export const timelineEvents = [];