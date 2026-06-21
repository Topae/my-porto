/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Code, LayoutGrid, Database, Terminal, CheckCircle, Server, Layers, Factory } from "lucide-react";

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
    icon: <Code size={20} />,
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
      {
        name: "Database Design",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/table-properties.svg?color=%232563eb"
            alt="Database Design"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Query Optimization",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/zap.svg?color=%232563eb"
            alt="Query Optimization"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Stored Procedure",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/binary.svg?color=%232563eb"
            alt="Stored Procedure"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Database Normalization",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/columns-3.svg?color=%2310b981"
            alt="Database Normalization"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Redis",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
            alt="Redis"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "InfluxDB",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/influxdb/influxdb-original.svg"
            alt="InfluxDB"
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
        name: "Git",
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
        name: "GitHub",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub"
            className="w-4 h-4 object-contain dark:invert"
          />
        ),
      },
      {
        name: "GitLab",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
            alt="GitLab"
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
      {
        name: "Nginx",
        level: "Advanced",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
            alt="Nginx"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "CI/CD",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/git-compare.svg?color=%2310b981"
            alt="CI/CD"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Linux Server Administration",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/terminal.svg?color=%232563eb"
            alt="Linux Server Administration"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "VPS Deployment",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/cloud-upload.svg?color=%232563eb"
            alt="VPS Deployment"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Backend & API",
    icon: <Server size={20} />,
    description: "Design and implementation of secure, real-time, and high-performance API services.",
    skills: [
      {
        name: "REST API",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/route.svg?color=%232563eb"
            alt="REST API"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "JWT Authentication",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/key-round.svg?color=%232563eb"
            alt="JWT Authentication"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Swagger / OpenAPI",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/file-json.svg?color=%2310b981"
            alt="Swagger / OpenAPI"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "WebSocket",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/radio.svg?color=%2310b981"
            alt="WebSocket"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Microservices",
        level: "Proficient",
        icon: (
          <img
            src="https://api.iconify.design/lucide/boxes.svg?color=%2364748b"
            alt="Microservices"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Clean Architecture",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/layers.svg?color=%232563eb"
            alt="Clean Architecture"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Design Patterns",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/git-commit.svg?color=%232563eb"
            alt="Design Patterns"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "gRPC",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/cable.svg?color=%2310b981"
            alt="gRPC"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Architecture",
    icon: <Layers size={20} />,
    description: "System planning, software design patterns, and access control governance.",
    skills: [
      {
        name: "System Design",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/network.svg?color=%232563eb"
            alt="System Design"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Software Architecture",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/git-fork.svg?color=%232563eb"
            alt="Software Architecture"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Role-Based Access Control (RBAC)",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/shield-check.svg?color=%232563eb"
            alt="RBAC"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Business Process Automation",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/workflow.svg?color=%232563eb"
            alt="Business Process Automation"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Workflow Management System",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/git-branch.svg?color=%232563eb"
            alt="Workflow Management System"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Manufacturing & Enterprise Solutions",
    icon: <Factory size={20} />,
    description: "Domain expertise in industrial operations, logistics, and production planning.",
    skills: [
      {
        name: "Production Monitoring System",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/activity.svg?color=%232563eb"
            alt="Production Monitoring System"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Work Order Management",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/clipboard-list.svg?color=%232563eb"
            alt="Work Order Management"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "PPIC System",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/calendar-days.svg?color=%232563eb"
            alt="PPIC System"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Inventory Management",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/package.svg?color=%232563eb"
            alt="Inventory Management"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Predictive Maintenance",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/wrench.svg?color=%2310b981"
            alt="Predictive Maintenance"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Business Process Optimization",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/trending-up.svg?color=%232563eb"
            alt="Business Process Optimization"
            className="w-4 h-4 object-contain"
          />
        ),
      },
    ],
  },
  {
    title: "Testing & Quality",
    icon: <CheckCircle size={20} />,
    description: "Software quality assurance, verification systems, and API testing suites.",
    skills: [
      {
        name: "Postman",
        level: "Core",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
            alt="Postman"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "API Testing",
        level: "Core",
        icon: (
          <img
            src="https://api.iconify.design/lucide/test-tube-2.svg?color=%232563eb"
            alt="API Testing"
            className="w-4 h-4 object-contain"
          />
        ),
      },
      {
        name: "Unit Testing",
        level: "Advanced",
        icon: (
          <img
            src="https://api.iconify.design/lucide/check-square-2.svg?color=%2310b981"
            alt="Unit Testing"
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
