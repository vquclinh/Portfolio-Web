import lawdisImg from "../assets/prj-img/lawdis.png";
import localfoodImg from "../assets/prj-img/local-food.png"
import spotifycuiImg from "../assets/prj-img/spotify-cui.png"
import datastrucImg from "../assets/prj-img/datastructurevis.png"
import marioImg from "../assets/prj-img/mario.png"
import portfolioImg from "../assets/prj-img/portfolio.png"
import flappybirdImg from "../assets/prj-img/flappybird.png"
import chess3dImg from "../assets/prj-img/chess3D.png"
import depguardImg from "../assets/prj-img/depguard.png"
import pulselensImg from "../assets/prj-img/pulselens.png"

// Research
export const research = [
   {
      id: "r1",
      title: "Depth-Guided Classifier Guidance for Dichotomous Image Segmentation",
      date: "2026",
      description:
         "Building on LawDIS, we integrate a depth-conditioned classifier guidance model into the diffusion inference pipeline at each denoising step, improving fine-grained boundary detection in dichotomous image segmentation.",
      tags: ["Python", "PyTorch", "Diffusion", "Segmentation", "Depth Map", "Computer Vision"],
      paper: "",
      github: "https://github.com/vquclinh/GuideDIS",
      image: lawdisImg,
   },
];

// Projects
export type ProjectDomain = "AI" | "Web" | "Game" | "App" | "Tool/Infrastructure" | "App/TUI";
export type ProjectSection = "featured" | "archive";

export type Project = {
  id: string;
  title: string;
  date: string;
  domain: ProjectDomain;
  section: ProjectSection;
  description: string;
  tags: string[];
  demo: string;
  github: string;
  image: string;
  paper?: string;
};

export const projects: Project[] = [
  {
      id: "p0",
      title: "PulseLens",
      date: "2026",
      domain: "AI",
      section: "featured",
      description:
          "Evidence-backed market intelligence workspace for fast-moving sectors. A 14-node multi-agent pipeline collects live web data via Bright Data, extracts atomic facts, verifies every claim against its verbatim source, scores sentiment with FinBERT, triangulates across sources, and assembles a structured market report. Applies 11 peer-reviewed NLP methods (SAFE, FActScore, STORM, Self-RAG, FLARE, Multi-HyDE, etc.). Includes a full React analyst workspace with Signal Radar, Evidence Explorer, Pricing Intelligence, Company Lens, and grounded RAG chat.",
      tags: ["Python", "FastAPI", "LangGraph", "React", "TypeScript", "Supabase", "Bright Data", "Multi-Agent", "RAG", "FinBERT", "OpenRouter", "Tailwind CSS"],
      demo: "",
      github: "https://github.com/vquclinh/PulseLens",
      image: pulselensImg,
  },
  { 
      id: "p1",
      title: "DepGuard AI",
      date: "2026",
      domain: "Tool/Infrastructure",
      section: "featured",
      description:
          "DepGuard AI is an autonomous multi-agent system built to keep your project's dependencies safe and up to date. Its mission is to eliminate the manual effort and human error of dependency upgrades by letting a team of specialized AI agents collaborate from start to finish. The ScannerAgent maps your dependencies while the WatchdogAgent detects CVEs and outdated versions, then the ScoutAgent reads changelogs to find breaking changes, the PatchAgent rewrites your code, and the ProjectChecker and RepairAgent verify and auto-fix the result. Working together, these agents keep projects secure, current, and buildable with minimal developer intervention.",
      tags: ["FastAPI", "React", "Multi-Agent", "LLM Orchestration", "AST Parsing", "Tree-sitter"],
      demo: "",
      github: "https://github.com/vquclinh/DepGuard-AI",
      image: depguardImg,
  },
  {   
      id: "p2",
      title: "Smart Food Tour Assistant",
      date: "2025",
      domain: "AI",
      section: "featured",
      description:
         "Local Food is an AI-powered web application that helps travelers discover and enjoy the authentic culinary scene of Ho Chi Minh City. Built on a Multi-Agent System, it uses a Supervisor Agent to route requests to specialized agents — a Food Finder, a Location Expert, and an Itinerary Synthesizer — that together craft personalized, day-by-day food tours. The objective is to connect food lovers with genuine local vendors and hidden gems that ordinary guides overlook, with an interactive map, multilingual support (English & Vietnamese), and customizable schedules. Its broader impact is to promote HCMC's culinary tourism, boost small family-run eateries, and preserve traditional Saigonese food culture.",
      tags: ["Multi-Agent", "RAG", "React", "TypeScript", "Supabase", "LLM", "UI/UX"],
      demo: "https://www.youtube.com/watch?v=vMBRyovw7f8&t=39s",
      github: "https://github.com/namkiet/CS252-Web-Project-Group-XXX",
      image: localfoodImg,
  },
  {
      id: "p3",
      title: "Spotify Console UI (Spotty)",
      date: "2026",
      domain: "App/TUI",
      section: "featured",
      description:
         "Spotty is a modern, keyboard-driven Spotify client built entirely in Rust that runs straight in your terminal. It delivers the full Spotify experience — playback control, library browsing, search, queue management, device transfer, and synced lyrics — all without a browser or Electron overhead. Under the hood, it uses rspotify for the Spotify Web API, librespot for native audio streaming, and ratatui for a smooth, responsive TUI layout. The app follows a clean async architecture with Tokio, separating the network worker, audio player, and UI into independent layers communicating through channels. Spotty was built to prove that a polished, feature-complete music client doesn't need a GUI — just good engineering.",
      tags: [ "Rust", "TUI", "Spotify API", "CLI"],
      demo: "https://www.youtube.com/watch?v=VLUd_-fLCo4",
      github: "https://github.com/vquclinh/console-spotify",
      image: spotifycuiImg,
  },
  {
      id: "p7",
      title: "Super Mario Game",
      date: "2025",
      domain: "Game",
      section: "archive",
      description:
         "MarioG is a 2D platformer inspired by the classic Super Mario Bros., built from scratch in modern C++17 with the SFML library. It recreates the iconic side-scrolling experience — running, jumping, collecting coins, smashing blocks, and defeating enemies across handcrafted levels — while serving as a study in game architecture. Featuring an event-driven design (eventpp), modular entity, collision, and camera systems, a reusable UI toolkit, and network support for multiplayer, MarioG shows how clean software engineering and component-based design combine to build a maintainable, extensible game.",
      tags: ["C++", "SFML", "OOP", "Design Patterns", "Multiplayer", "Game AI"],
      demo: "https://www.youtube.com/watch?v=rL0__nTDCJM",
      github: "https://github.com/Anhdung1478/MarioG",
      image: marioImg,
   },
  {
    id: "p4",
    title: "Data Structures Visualization",
    date: "2025",
    domain: "App",
    section: "archive",
    description:
      "RayViz is an interactive C++/Raylib application built to make abstract data structures tangible. The objective is to turn complex concepts — Singly Linked Lists, Hash Tables, self-balancing AVL Trees, and Graphs — into clear, real-time animations. Users perform operations like insertion, deletion, search, AVL rotations, hash collision handling, and graph algorithms (Dijkstra's shortest path, Kruskal's MST), watching each step unfold with informative cues. Features include drag-and-drop graph nodes, adjustable animation speed, step-by-step mode, and light/dark themes. We built RayViz to bridge the gap between theory and intuition, helping students and learners see how data structures truly work and behave.",
    tags: ["C++", "SFML", "Algorithms"],
    demo: "https://www.youtube.com/watch?v=GDleKKIrUWU",
    github: "https://github.com/AmnO-O/Data-Structures-Visualization",
    image: datastrucImg,
  },
  {
      id: "p8",
      title: "Chess Game 3D",
      date: "2024",
      domain: "Game",
      section: "archive",
      description:
         "A 3D chess game in C++ and SFML with custom Blender-modeled pieces, full rule enforcement, and an interactive board rendered in 3D perspective.",
      tags: ["C++", "SFML", "Blender", "3D", "Game"],
      demo: "",
      github: "https://github.com/vquclinh/Chess-3D",
      image: chess3dImg,
   },
   {
      id: "p6",
      title: "Portfolio Website",
      date: "2026",
      domain: "Web",
      section: "archive",
      description:
         "This portfolio — built with React, TypeScript, and Tailwind CSS, featuring a project showcase, memories section, and personal timeline.",
      tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
      demo: "",
      github: "https://github.com/vquclinh/Portfolio-Web",
      image: portfolioImg,
   },
  {
      id: "p9",
      title: "Flappy Bird Game",
      date: "2024",
      domain: "Game",
      section: "archive",
      description:
         "A Flappy Bird clone in C++ and SFML with smooth physics, procedural pipe generation, and high score tracking.",
      tags: ["C++", "SFML", "Game"],
      demo: "",
      github: "https://github.com/vquclinh/FlappyBirdGame",
      image: flappybirdImg,
   },
  
];

// Skills
export const skills = [
  "React", "TypeScript", "Tailwind CSS", "UI/UX Design", "Figma", "HTML/CSS",
  "Python", "Rust", "C/C++", "Node.js", "FastAPI", "REST API", "System Design",
  "PyTorch", "LangChain", "LangGraph", "Git", "Docker", "Linux",
];
