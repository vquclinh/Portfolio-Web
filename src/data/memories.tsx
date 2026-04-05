import cfpo3 from "../assets/memories/scholarship/cfpo3.jpg"
import poweron from "../assets/memories/scholarship/poweron.jpg"
import team1 from "../assets/memories/scholarship/teambuilding1.jpg"
import team2 from "../assets/memories/scholarship/teambuilding2.jpg"
import team3 from "../assets/memories/scholarship/teambuilding3.jpg"

import a1 from "../assets/memories/highschool/a1.jpg"
import a2 from "../assets/memories/highschool/a2.jpg"
import a3 from "../assets/memories/highschool/a3.jpg"
import a4 from "../assets/memories/highschool/a4.jpg"
import a5 from "../assets/memories/highschool/a5.jpg"
import a6 from "../assets/memories/highschool/a6.jpg"
import a7 from "../assets/memories/highschool/a7.jpg"
import a8 from "../assets/memories/highschool/a8.jpg"
import a9 from "../assets/memories/highschool/a9.jpg"
import mama from "../assets/memories/highschool/mama.jpg"
import reve from "../assets/memories/highschool/reve.jpg"

import math1 from "../assets/memories/mathteam/team1.jpg"
import math2 from "../assets/memories/mathteam/team2.jpg"
import math3 from "../assets/memories/mathteam/team3.jpg"
import math4 from "../assets/memories/mathteam/team4.jpg"
import math5 from "../assets/memories/mathteam/team5.jpg"
import math6 from "../assets/memories/mathteam/team6.jpg"
import math7 from "../assets/memories/mathteam/team7.jpg"
import math8 from "../assets/memories/mathteam/team8.jpg"
import math9 from "../assets/memories/mathteam/team9.jpg"



export type MemoryCategory = "Scholarship" | "Math Team" | "University" | "12T1 - Le Khiet High School for The Gifted" | "Life";

export type Memory = {
  id: string;
  date: string;
  category: MemoryCategory;
  image: string;
};

export const memories: Memory[] = [
  { id: "m1", date: "2025", category: "Scholarship", image: cfpo3   },
  { id: "m2", date: "2025", category: "Scholarship", image: poweron },
  { id: "m3", date: "2025", category: "Scholarship", image: team1   },
  { id: "m4", date: "2025", category: "Scholarship", image: team2   },
  { id: "m5", date: "2025", category: "Scholarship", image: team3   },

  { id: "m5", date: "2025", category: "Math Team", image: math1  },
  { id: "m5", date: "2025", category: "Math Team", image: math2   },
  { id: "m5", date: "2025", category: "Math Team", image: math3   },
  { id: "m5", date: "2025", category: "Math Team", image: math4   },
  { id: "m5", date: "2025", category: "Math Team", image: math5   },
  { id: "m5", date: "2025", category: "Math Team", image: math6   },
  { id: "m5", date: "2025", category: "Math Team", image: math7   },
  { id: "m5", date: "2025", category: "Math Team", image: math8   },
  { id: "m5", date: "2025", category: "Math Team", image: math9   },

  { id: "h1", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a1},
  { id: "h2", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a2},
  { id: "h3", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a3},
  { id: "h4", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a4},
  { id: "h5", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a5},
  { id: "h6", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a6},
  { id: "h7", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a7},
  { id: "h8", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a8},
  { id: "m9", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: a9},
  { id: "m19", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: mama},
  { id: "m20", date: "2025", category: "12T1 - Le Khiet High School for The Gifted", image: reve}

];