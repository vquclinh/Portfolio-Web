import lawdisImg from "../assets/prj-img/lawdis.png";
import localfoodImg from "../assets/prj-img/local-food.png"
import spotifycuiImg from "../assets/prj-img/spotify-cui.png"
import datastrucImg from "../assets/prj-img/datastructurevis.png"
import marioImg from "../assets/prj-img/mario.png"
import portfolioImg from "../assets/prj-img/portfolio.png";

// ── Research ──
export const research = [
   {
      id: "r1",
      title: "Discrete Diffusion Models and Masking Strategies for LLMs",
      date: "2026",
      description:
         "We propose improvements to the forward process of discrete diffusion models applied to language modeling. Our work introduces a novel method for computing the number of tokens to mask at each diffusion step, alongside a new masking strategy designed to better preserve linguistic structure — offering a compelling alternative to autoregressive generation in LLMs.",
      tags: ["Python", "PyTorch", "Discrete Diffusion", "NLP", "LLM"],
      paper: "",
      github: "",
      image: lawdisImg,
   },
   {
      id: "r2",
      title: "Depth-Guided Classifier Guidance for Dichotomous Image Segmentation",
      date: "2026",
      description:
         "Building on LawDIS, we train a classifier guidance model conditioned on depth maps and integrate it into the diffusion-based inference pipeline at each denoising step. The depth signal provides geometric cues that steer the segmentation toward structurally coherent boundaries, improving fine-grained object separation in complex scenes.",
      tags: ["Python", "PyTorch", "Diffusion", "Segmentation", "Depth Map", "Computer Vision"],
      paper: "",
      github: "https://github.com/vquclinh/GuideDIS",
      image: lawdisImg,
   },
];

// ── Projects ──
export type ProjectDomain = "AI" | "Web" | "Game" | "App";

export const projects = [
  {
      id: "p2",
      title: "Smart Food Tour Assistant",
      date: "2025",
      domain: "AI" as ProjectDomain,
      description:
         "A web-based chatbot that helps tourists explore Ho Chi Minh City's food scene. Built on a RAG-powered multi-agent system, it can answer questions about local dishes and restaurants, as well as automatically generate personalized food tour itineraries based on user preferences.",
      tags: ["React", "TypeScript", "Supabase", "RAG", "AI Agent", "LLM", "UI/UX"],
      demo: "https://www.youtube.com/watch?v=vMBRyovw7f8&t=39s",
      github: "https://github.com/namkiet/CS252-Web-Project-Group-XXX",
      image: localfoodImg,
  },
  {
      id: "p3",
      title: "Spotify Console UI",
      date: "2024",
      domain: "App" as ProjectDomain,
      description:
         "A terminal-based Spotify client inspired by spotify-tui, built with C++ and Rust. Features a keyboard-driven TUI for browsing playlists, controlling playback, searching tracks and artists, all within the terminal — connecting to the Spotify Web API under the hood.",
      tags: ["C++", "Rust", "TUI", "Spotify API", "CLI"],
      demo: "",
      github: "https://github.com/vquclinh/console-spotify",
      image: spotifycuiImg,
  },
  {
    id: "p4",
    title: "Data Structures Visualization",
    date: "2025",
    domain: "App" as ProjectDomain,
    description:
      "Interactive visualizer for common data structures — trees, graphs, heaps — built with C++ and SFML for real-time animation.",
    tags: ["C++", "SFML", "Algorithms"],
    demo: "https://www.youtube.com/watch?v=GDleKKIrUWU",
    github: "https://github.com/AmnO-O/Data-Structures-Visualization",
    image: datastrucImg,
  },
  {
      id: "p7",
      title: "Super Mario Game",
      date: "2025",
      domain: "Game" as ProjectDomain,
      description:
         "A Mario-style platformer built from scratch in C++ and SFML, applying OOP principles and 5 design patterns — Factory, State, Command, Observer, and Singleton. Features authentic physics, adaptive enemy AI with pathfinding, a full item and power-up system, and LAN multiplayer with client-side prediction and state synchronization.",
      tags: ["C++", "SFML", "OOP", "Design Patterns", "Multiplayer", "Game AI"],
      demo: "https://www.youtube.com/watch?v=rL0__nTDCJM",
      github: "https://github.com/Anhdung1478/MarioG",
      image: marioImg,
   },
  {
      id: "p8",
      title: "Chess Game 3D",
      date: "2025",
      domain: "Game" as ProjectDomain,
      description:
         "A 3D chess game built with C++ and SFML, featuring custom 3D piece models designed in Blender. Implements full chess rule enforcement, move validation, and an interactive board rendered with 3D perspective.",
      tags: ["C++", "SFML", "Blender", "3D", "Game"],
      demo: "",
      github: "https://github.com/vquclinh/Chess-3D",
      image: "/images/web.png",
   },
   {
      id: "p6",
      title: "Portfolio Website",
      date: "2025",
      domain: "Web" as ProjectDomain,
      description:
         "This portfolio — built with React, TypeScript, and Tailwind CSS. Features a project showcase, memories section, and personal timeline.",
      tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
      demo: "",
      github: "https://github.com/vquclinh/Portfolio-Web",
      image: portfolioImg,
   },
  {
      id: "p9",
      title: "Flappy Bird Game",
      date: "2025",
      domain: "Game" as ProjectDomain,
      description:
         "A Flappy Bird clone built with C++ and SFML, featuring smooth physics, procedural pipe generation, and high score tracking.",
      tags: ["C++", "SFML", "Game"],
      demo: "",
      github: "https://github.com/vquclinh/FlappyBirdGame",
      image: "/images/web.png",
   },
  
];

// Skills
export const skills = [
  "React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma", "HTML/CSS",
  "Python", "Rust", "C/C++", "Node.js", "REST API", "System Design",
  "PyTorch", "LangChain", "LangGraph", "Git", "Docker", "Linux",
];