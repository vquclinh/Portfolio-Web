import lawdisImg from "../assets/prj-img/lawdis.png";
import localfoodImg from "../assets/prj-img/local-food.png"
import spotifycuiImg from "../assets/prj-img/spotify-cui.png"
import datastrucImg from "../assets/prj-img/datastructurevis.png"
import marioImg from "../assets/prj-img/mario.png"
import portfolioImg from "../assets/prj-img/portfolio.png";
import flappybirdImg from "../assets/prj-img/flappybird.png"
import chess3dImg from "../assets/prj-img/chess3D.png"

// Research
export const research = [
   {
      id: "r1",
      title: "Discrete Diffusion Models and Masking Strategies for LLMs",
      date: "2026",
      description:
         "We propose improvements to the forward process of discrete diffusion models for language modeling — introducing a novel token masking schedule and masking strategy as an alternative to autoregressive LLMs.",
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
         "Building on LawDIS, we integrate a depth-conditioned classifier guidance model into the diffusion inference pipeline at each denoising step, improving fine-grained boundary detection in dichotomous image segmentation.",
      tags: ["Python", "PyTorch", "Diffusion", "Segmentation", "Depth Map", "Computer Vision"],
      paper: "",
      github: "https://github.com/vquclinh/GuideDIS",
      image: lawdisImg,
   },
];

// Projects
export type ProjectDomain = "AI" | "Web" | "Game" | "App";

export const projects = [
  {
      id: "p2",
      title: "Smart Food Tour Assistant",
      date: "2025",
      domain: "AI" as ProjectDomain,
      description:
         "A RAG-powered multi-agent chatbot that helps tourists explore Ho Chi Minh City's food scene — answering questions and generating personalized food tour itineraries.",
      tags: ["React", "TypeScript", "Supabase", "RAG", "AI Agent", "LLM", "UI/UX"],
      demo: "https://www.youtube.com/watch?v=vMBRyovw7f8&t=39s",
      github: "https://github.com/namkiet/CS252-Web-Project-Group-XXX",
      image: localfoodImg,
  },
  {
      id: "p3",
      title: "Spotify Console UI",
      date: "2026",
      domain: "App" as ProjectDomain,
      description:
         "A terminal-based Spotify client built with C++ and Rust, featuring a keyboard-driven TUI for browsing playlists, controlling playback, and searching tracks via the Spotify Web API.",
      tags: [ "Rust", "C++", "TUI", "Spotify API", "CLI"],
      demo: "",
      github: "https://github.com/vquclinh/console-spotify",
      image: spotifycuiImg,
  },
  {
      id: "p7",
      title: "Super Mario Game",
      date: "2025",
      domain: "Game" as ProjectDomain,
      description:
         "A Mario-style platformer in C++ and SFML applying 5 design patterns, adaptive enemy AI, a full power-up system, and LAN multiplayer with state synchronization.",
      tags: ["C++", "SFML", "OOP", "Design Patterns", "Multiplayer", "Game AI"],
      demo: "https://www.youtube.com/watch?v=rL0__nTDCJM",
      github: "https://github.com/Anhdung1478/MarioG",
      image: marioImg,
   },
  {
    id: "p4",
    title: "Data Structures Visualization",
    date: "2025",
    domain: "App" as ProjectDomain,
    description:
      "An interactive visualizer for linked list, graph, tree, and hash table — built with C++ and SFML, with real-time step-by-step animation using OOP design.",
    tags: ["C++", "SFML", "Algorithms"],
    demo: "https://www.youtube.com/watch?v=GDleKKIrUWU",
    github: "https://github.com/AmnO-O/Data-Structures-Visualization",
    image: datastrucImg,
  },
  {
      id: "p8",
      title: "Chess Game 3D",
      date: "2024",
      domain: "Game" as ProjectDomain,
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
      domain: "Web" as ProjectDomain,
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
      domain: "Game" as ProjectDomain,
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
  "Python", "Rust", "C/C++", "Node.js", "REST API", "System Design",
  "PyTorch", "LangChain", "LangGraph", "Git", "Docker", "Linux",
];