"use client"

import type React from "react"
import { useState } from "react"

// ...existing TechLogos object and SkillCategory interface...

interface SkillCard {
  name: string
  color: string
  description: string
  level: number
  logo: React.ReactNode
}

interface SkillCategory {
  id: string
  title: string
  color: string
  accent: string
  skills: SkillCard[]
  gridLayout: string
}

const TechLogos = {
  React: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <path d="M12 2C6.48 2 2 5.6 2 10c0 4.4 4.48 8 10 8s10-3.6 10-8-4.48-8-10-8z" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <path d="M5 12c0-3.87 2.24-7.21 5.5-8.94" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <path d="M19 12c0-3.87-2.24-7.21-5.5-8.94" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  NextJS: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0z" fill="white" />
      <text x="11.5" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="black">N</text>
    </svg>
  ),
  TypeScript: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="#3178C6" />
      <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">TS</text>
    </svg>
  ),
  // ...existing logos continue...
  TailwindCSS: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#06B6D4" />
      <path d="M9 8h6M8 11h8M7 14h10" stroke="white" strokeWidth="1" />
    </svg>
  ),
  HTML: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3l2 16h12l2-16H4zm3 2h10M7 8h10M7 12h8" stroke="#E34C26" strokeWidth="1.5" />
    </svg>
  ),
  CSS: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3l2 16h12l2-16H4z" stroke="#1572B6" strokeWidth="1.5" />
      <circle cx="7" cy="9" r="0.5" fill="#1572B6" />
      <circle cx="12" cy="9" r="0.5" fill="#1572B6" />
      <circle cx="17" cy="9" r="0.5" fill="#1572B6" />
    </svg>
  ),
  JavaScript: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="#F7DF1E" />
      <text x="12" y="16" fontSize="9" fontWeight="bold" textAnchor="middle" fill="black">JS</text>
    </svg>
  ),
  Angular: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 8l2 12h16l2-12-12-6z" fill="#DD0031" />
      <path d="M12 2v19M7 9h10M9 13h6" stroke="white" strokeWidth="1" />
    </svg>
  ),
  Redux: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#764ABC" />
      <circle cx="12" cy="12" r="2" fill="white" />
      <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  NodeJS: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#68A063" />
      <path d="M12 4v16M8 8v8M16 8v8" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  Express: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="2" fill="black" />
      <text x="12" y="16" fontSize="9" fontWeight="bold" textAnchor="middle" fill="white">EX</text>
    </svg>
  ),
  RestAPI: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FF6B6B" />
      <path d="M8 10h8M8 12h8M8 14h6" stroke="white" strokeWidth="1" />
    </svg>
  ),
  SocketIO: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="black" />
      <circle cx="8" cy="8" r="1.5" fill="white" />
      <circle cx="16" cy="8" r="1.5" fill="white" />
      <circle cx="12" cy="16" r="1.5" fill="white" />
      <path d="M8 8L12 12L16 8M12 12L8 16M12 12L16 16" stroke="white" strokeWidth="0.5" opacity="0.5" />
    </svg>
  ),
  Microservices: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="6" height="6" fill="#FF9800" />
      <rect x="11" y="3" width="6" height="6" fill="#FF9800" />
      <rect x="3" y="11" width="6" height="6" fill="#FF9800" />
      <rect x="11" y="11" width="6" height="6" fill="#FF9800" />
      <line x1="9" y1="6" x2="11" y2="6" stroke="white" strokeWidth="0.5" />
      <line x1="6" y1="9" x2="6" y2="11" stroke="white" strokeWidth="0.5" />
    </svg>
  ),
  MongoDB: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#13AA52" />
      <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" fill="white" opacity="0.3" />
    </svg>
  ),
  MySQL: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#00758F" />
      <circle cx="12" cy="12" r="6" fill="white" opacity="0.2" />
      <path d="M9 11h6M10 9h4M10 15h4" stroke="white" strokeWidth="1" />
    </svg>
  ),
  SQL: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#CC2927" />
      <text x="12" y="16" fontSize="9" fontWeight="bold" textAnchor="middle" fill="white">SQL</text>
    </svg>
  ),
  GitHub: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#181717" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.36.31.68.92.68 1.85v2.75c0 .26.18.57.69.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="white" />
    </svg>
  ),
  Docker: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#2496ED" />
      <path d="M8 9h3v3H8V9zm4 0h3v3h-3V9zm4 0h3v3h-3V9zM8 13h3v3H8v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3z" fill="white" />
    </svg>
  ),
  AWS: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FF9900" />
      <path d="M7 12c0 2.76 2.24 5 5 5s5-2.24 5-5M12 7v10" stroke="white" strokeWidth="1" />
    </svg>
  ),
  GitHubActions: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#2088FF" />
      <path d="M8 9l3 3 5-5M8 13l3 3 5-5" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  Linux: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FCC624" />
      <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="black" />
    </svg>
  ),
  Axios: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#5C60A8" />
      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  Postman: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#FF6C37" />
      <path d="M7 10l4 3 6-6" stroke="white" strokeWidth="1.5" />
    </svg>
  ),
  DataStructures: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="1.5" fill="#7C3AED" />
      <circle cx="17" cy="7" r="1.5" fill="#7C3AED" />
      <circle cx="12" cy="17" r="1.5" fill="#7C3AED" />
      <line x1="7" y1="7" x2="12" y2="17" stroke="#7C3AED" strokeWidth="1" />
      <line x1="17" y1="7" x2="12" y2="17" stroke="#7C3AED" strokeWidth="1" />
    </svg>
  ),
  Algorithms: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12h16M4 8h16M4 16h16" stroke="#EC4899" strokeWidth="2" />
      <circle cx="2" cy="12" r="1" fill="#EC4899" />
      <circle cx="2" cy="8" r="1" fill="#EC4899" />
      <circle cx="2" cy="16" r="1" fill="#EC4899" />
    </svg>
  ),
  Solidity: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4l4 8 4-8M8 12l4 8 4-8" fill="#363636" />
      <path d="M8 4l4 8 4-8M8 12l4 8 4-8" stroke="#363636" strokeWidth="1" fill="none" />
    </svg>
  ),
  Java: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm0 6c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm6-6c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z" fill="#007396" />
    </svg>
  ),
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    color: "#61DAFB",
    accent: "from-cyan-400 to-blue-500",
    gridLayout: "grid-cols-3 md:grid-cols-5 auto-rows-[150px]",
    skills: [
      { name: "React", color: "#61DAFB", description: "UI Library", level: 95, logo: TechLogos.React },
      { name: "Next.js", color: "#FFFFFF", description: "React Framework", level: 95, logo: TechLogos.NextJS },
      { name: "TypeScript", color: "#3178C6", description: "Type Safety", level: 90, logo: TechLogos.TypeScript },
      { name: "Tailwind CSS", color: "#06B6D4", description: "Styling", level: 92, logo: TechLogos.TailwindCSS },
      { name: "HTML", color: "#E34C26", description: "Markup", level: 95, logo: TechLogos.HTML },
      { name: "CSS", color: "#1572B6", description: "Styling", level: 93, logo: TechLogos.CSS },
      { name: "JavaScript", color: "#F7DF1E", description: "Language", level: 95, logo: TechLogos.JavaScript },
      { name: "Angular", color: "#DD0031", description: "Framework", level: 85, logo: TechLogos.Angular },
      { name: "Redux", color: "#764ABC", description: "State Mgmt", level: 88, logo: TechLogos.Redux },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "#68A063",
    accent: "from-green-400 to-emerald-500",
    gridLayout: "grid-cols-4 md:grid-cols-5 auto-rows-[150px]",
    skills: [
      { name: "Node.js", color: "#68A063", description: "Runtime", level: 93, logo: TechLogos.NodeJS },
      { name: "Express.js", color: "#000000", description: "Framework", level: 90, logo: TechLogos.Express },
      { name: "REST API", color: "#FF6B6B", description: "Architecture", level: 92, logo: TechLogos.RestAPI },
      { name: "Socket.IO", color: "#010101", description: "Real-time", level: 85, logo: TechLogos.SocketIO },
      { name: "Microservices", color: "#FF9800", description: "Architecture", level: 88, logo: TechLogos.Microservices },
    ],
  },
  {
    id: "database",
    title: "Databases",
    color: "#13AA52",
    accent: "from-emerald-400 to-teal-500",
    gridLayout: "grid-cols-3 md:grid-cols-4 auto-rows-[150px]",
    skills: [
      { name: "MongoDB", color: "#13AA52", description: "NoSQL DB", level: 90, logo: TechLogos.MongoDB },
      { name: "MySQL", color: "#00758F", description: "SQL DB", level: 88, logo: TechLogos.MySQL },
      { name: "SQL", color: "#CC2927", description: "Query Language", level: 92, logo: TechLogos.SQL },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    color: "#FF9900",
    accent: "from-orange-400 to-red-500",
    gridLayout: "grid-cols-3 md:grid-cols-4 auto-rows-[150px]",
    skills: [
      { name: "Git/GitHub", color: "#181717", description: "Version Control", level: 93, logo: TechLogos.GitHub },
      { name: "Docker", color: "#2496ED", description: "Containerization", level: 85, logo: TechLogos.Docker },
      { name: "AWS", color: "#FF9900", description: "Cloud", level: 82, logo: TechLogos.AWS },
      { name: "GitHub Actions", color: "#2088FF", description: "CI/CD", level: 85, logo: TechLogos.GitHubActions },
      { name: "Linux", color: "#FCC624", description: "OS", level: 88, logo: TechLogos.Linux },
      { name: "Axios", color: "#5C60A8", description: "HTTP Client", level: 90, logo: TechLogos.Axios },
      { name: "Postman", color: "#FF6C37", description: "API Testing", level: 88, logo: TechLogos.Postman },
    ],
  },
  {
    id: "concepts",
    title: "Core Concepts",
    color: "#9C27B0",
    accent: "from-purple-400 to-pink-500",
    gridLayout: "grid-cols-2 md:grid-cols-3 auto-rows-[150px]",
    skills: [
      { name: "Data Structures", color: "#7C3AED", description: "Fundamentals", level: 92, logo: TechLogos.DataStructures },
      { name: "Algorithms", color: "#EC4899", description: "Problem Solving", level: 90, logo: TechLogos.Algorithms },
      { name: "Solidity", color: "#363636", description: "Smart Contracts", level: 80, logo: TechLogos.Solidity },
      { name: "Java", color: "#007396", description: "Language", level: 85, logo: TechLogos.Java },
    ],
  },
]

export function SkillsBento() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("frontend")

  const activeSection = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Organized by category with proficiency levels</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.accent} text-white shadow-lg shadow-cyan-500/50 scale-105`
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Section */}
        {activeSection && (
          <div className="space-y-8">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-1 h-12 rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${activeSection.color}, transparent)`,
                }}
              />
              <div>
                <h3
                  className="text-4xl font-bold text-white mb-2"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${activeSection.color}, ${activeSection.color}cc)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {activeSection.title}
                </h3>
                <p className="text-gray-400">{activeSection.skills.length} skills</p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className={`grid ${activeSection.gridLayout} gap-4`}>
              {activeSection.skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredId(`${activeCategory}-${index}`)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${skill.color}40, ${skill.color}10)`,
                    }}
                  />

                  <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-colors duration-300" />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div className="relative h-full p-5 flex flex-col justify-between">
                    {/* Logo */}
                    <div className="flex justify-center mb-2 group-hover:scale-125 transition-transform duration-300">
                      <div className="text-white drop-shadow-lg">{skill.logo}</div>
                    </div>

                    {/* Skill Info */}
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:translate-y-1 transition-transform duration-300 text-center">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1 text-center">{skill.description}</p>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r transition-all duration-500 rounded-full"
                          style={{
                            width: `${hoveredId === `${activeCategory}-${index}` ? skill.level : 0}%`,
                            backgroundImage: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  {hoveredId === `${activeCategory}-${index}` && (
                    <div
                      className="absolute inset-0 rounded-xl blur-xl opacity-30 transition-opacity duration-300"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-white">{activeSection.skills.length}</p>
                  <p className="text-sm text-gray-400">Skills</p>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {Math.round(
                      activeSection.skills.reduce((acc, skill) => acc + skill.level, 0) / activeSection.skills.length,
                    )}
                    %
                  </p>
                  <p className="text-sm text-gray-400">Avg. Level</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
