import cfpo3 from "../assets/memories/scholarship/cfpo3.webp"
import poweron from "../assets/memories/scholarship/poweron.webp"
import team1 from "../assets/memories/scholarship/teambuilding1.webp"
import team2 from "../assets/memories/scholarship/teambuilding2.webp"
import team3 from "../assets/memories/scholarship/teambuilding3.webp"

import a1 from "../assets/memories/highschool/a1.webp"
import a2 from "../assets/memories/highschool/a2.webp"
import a3 from "../assets/memories/highschool/a3.webp"
import a4 from "../assets/memories/highschool/a4.webp"
import a5 from "../assets/memories/highschool/a5.webp"
import a6 from "../assets/memories/highschool/a6.webp"
import a7 from "../assets/memories/highschool/a7.webp"
import a8 from "../assets/memories/highschool/a8.webp"
import a9 from "../assets/memories/highschool/a9.webp"
import mama from "../assets/memories/highschool/mama.webp"
import reve from "../assets/memories/highschool/reve.webp"

import math1 from "../assets/memories/mathteam/team1.webp"
import math2 from "../assets/memories/mathteam/team2.webp"
import math3 from "../assets/memories/mathteam/team3.webp"
import math4 from "../assets/memories/mathteam/team4.webp"
import math5 from "../assets/memories/mathteam/team5.webp"
import math7 from "../assets/memories/mathteam/team7.webp"
import math8 from "../assets/memories/mathteam/team8.webp"
import math9 from "../assets/memories/mathteam/team9.webp"

import hackaithon1 from "../assets/memories/hackaithon/hackaithon1.webp"
import hackaithon2 from "../assets/memories/hackaithon/hackaithon2.webp"
import hackaithon3 from "../assets/memories/hackaithon/hackaithon3.webp"
import hackaithon4 from "../assets/memories/hackaithon/hackaithon4.webp"
import hackaithon5 from "../assets/memories/hackaithon/hackaithon5.webp"
import hackaithon6 from "../assets/memories/hackaithon/hackaithon6.webp"

import aic1 from "../assets/memories/aichallenge/aic1.webp"
import aic2 from "../assets/memories/aichallenge/aic2.webp"
import aic3 from "../assets/memories/aichallenge/aic3.webp"
import aic4 from "../assets/memories/aichallenge/aic4.webp"

export type MemoryCategory = "Scholarship" | "Math Team" | "University" | "12T1 - Le Khiet High School for The Gifted" | "Life" | "Vietnamese Student HackAIthon" | "AI Challenge HCMC 2026";

export type Memory = {
  id: string;
  date: string;
  category: MemoryCategory;
  image: string;
  width: number;
  height: number;
};

export const memories: Memory[] = [
  { id: "m1", date: "2025", category: "Scholarship", image: cfpo3, width: 800, height: 600 },
  { id: "m2", date: "2025", category: "Scholarship", image: poweron, width: 800, height: 559 },
  { id: "m3", date: "2025", category: "Scholarship", image: team1, width: 800, height: 599 },
  { id: "m4", date: "2025", category: "Scholarship", image: team2, width: 600, height: 800 },
  { id: "m5", date: "2025", category: "Scholarship", image: team3, width: 800, height: 599 },

  { id: "m5", date: "2025", category: "Math Team", image: math1, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math2, width: 800, height: 450 },
  { id: "m5", date: "2025", category: "Math Team", image: math3, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math4, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math5, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math7, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math8, width: 800, height: 600 },
  { id: "m5", date: "2025", category: "Math Team", image: math9, width: 800, height: 600 },

  { id: "h1", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a1, width: 600, height: 800 },
  { id: "h2", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a2, width: 533, height: 800 },
  { id: "h3", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a3, width: 800, height: 599 },
  { id: "h4", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a4, width: 800, height: 533 },
  { id: "h5", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a5, width: 800, height: 600 },
  { id: "h6", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a6, width: 800, height: 533 },
  { id: "h7", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a7, width: 800, height: 533 },
  { id: "h8", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a8, width: 800, height: 533 },
  { id: "m9", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a9, width: 800, height: 534 },
  { id: "m19", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: mama, width: 611, height: 800 },
  { id: "m20", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: reve, width: 600, height: 800 },

  { id: "h1", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon1, width: 600, height: 800 },
  { id: "h2", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon2, width: 600, height: 800 },
  { id: "h3", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon3, width: 800, height: 600 },
  { id: "h4", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon4, width: 800, height: 600 },
  { id: "h5", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon5, width: 600, height: 800 },
  { id: "h6", date: "2026", category: "Vietnamese Student HackAIthon", image: hackaithon6, width: 715, height: 651 },

  { id: "aic1", date: "2026", category: "AI Challenge HCMC 2026", image: aic1, width: 600, height: 800 },
  { id: "aic2", date: "2026", category: "AI Challenge HCMC 2026", image: aic2, width: 600, height: 800 },
  { id: "aic3", date: "2026", category: "AI Challenge HCMC 2026", image: aic3, width: 800, height: 600 },
  { id: "aic4", date: "2026", category: "AI Challenge HCMC 2026", image: aic4, width: 600, height: 800 },

];