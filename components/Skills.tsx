/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Code2, LayoutGrid, Database, Terminal, CheckCircle } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    icon: React.ReactNode;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    description: "Multi-paradigm languages used for enterprise backend development and system integration.",
    skills: [
      {
        name: "Golang",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
            alt="Golang"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "PHP",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            alt="PHP"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "C#",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            alt="C#"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Java",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "JavaScript",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Python",
        level: "Proficient",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            alt="Python"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "C++",
        level: "Proficient",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Frameworks & Runtimes",
    icon: <LayoutGrid size={20} />,
    description: "Web application frameworks and backend engines supporting business architectures.",
    skills: [
      {
        name: "Laravel",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            alt="Laravel"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Next.js",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="w-4 h-4 object-contain dark:invert"
          />
        ),
      },
      {
        name: "NestJS",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
            alt="NestJS"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: ".NET",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
            alt=".NET"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Django",
        level: "Proficient",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            alt="Django"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Vue.js",
        level: "Proficient",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            alt="Vue.js"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "CodeIgniter 3 & 4",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg"
            alt="CodeIgniter"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Databases & Storage",
    icon: <Database size={20} />,
    description: "Relational database engines, schemas, and document store clusters.",
    skills: [
      {
        name: "MySQL",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            alt="MySQL"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "PostgreSQL",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "SQL Server",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
            alt="SQL Server"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "MongoDB",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal size={20} />,
    description: "Infrastructure management, containerization platforms, and source control.",
    skills: [
      {
        name: "Git (GitHub, GitLab)",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Docker",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            alt="Docker"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Linux Server",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            alt="Linux Server"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Windows Server",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
            alt="Windows Server"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-50/30 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-12 left-12 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-slate-100 pb-6 text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Technical Competencies
          </h1>
          <p className="mt-2 text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Verified Stack & Toolsets
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/50 flex flex-col justify-between hover:border-blue-300/40 hover:shadow-xl hover:shadow-blue-500/5 hover:scale-[1.01] transition-all duration-300 group/card"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Inventory */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className="space-y-1.5 py-2.5 px-3.5 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-slate-200/80 border border-slate-100/40 hover:translate-x-1 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-650 transition-colors flex items-center gap-2">
                          <span className="shrink-0 flex items-center justify-center">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-all duration-300 ${
                            skill.level === "Core"
                              ? "bg-blue-50 text-blue-700 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white"
                              : skill.level === "Advanced"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white"
                              : "bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-slate-700 group-hover:text-white"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Visual Progress Bar Graphic */}
                      <div className="w-full bg-slate-200/50 h-1.5 rounded-full overflow-hidden p-px">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            skill.level === "Core"
                              ? "bg-linear-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700"
                              : skill.level === "Advanced"
                              ? "bg-linear-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700"
                              : "bg-linear-to-r from-slate-400 to-slate-500 group-hover:from-slate-500 group-hover:to-slate-600"
                          }`}
                          style={{
                            width: skill.level === "Core" ? "95%" : skill.level === "Advanced" ? "80%" : "65%"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle size={12} className="text-blue-500" />
                Active production environment implementation verified.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
