/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, Cpu, Layers, Activity, Globe, X, Check, Server } from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  architecture: string[];
  status: "Active in Production" | "Deployed" | "Completed" | "Operational";
  features: string[];
  challenge: string;
  solution: string;
  protocol?: string;
  icon: React.ReactNode;
}

const projectsList: Project[] = [
  {
    id: "menara-terus-makmur",
    title: "Software Engineer | PT Menara Terus Makmur MAY 2026 - NOW",
    shortDesc: "Developed and maintained enterprise web applications to support business digitalization, operational excellence, and process automation initiatives.",
    longDesc: "Designed and implemented responsive user interfaces using Vue.js and JavaScript, enhancing usability, application performance, and user experience. Collaborated with stakeholders to analyze business requirements and translate them into scalable, maintainable, and efficient software solutions.",
    tags: ["Digitalization", "Manufacturing", "Enterprise"],
    architecture: ["Nest.js", "Next.js", "JavaScript", "Vue.js", "NodeRed", "PgAdmin", "Tailwind CSS"],
    status: "Active in Production",
    features: [
      "Developed and maintained enterprise web applications to support business digitalization, operational excellence, and process automation initiatives.",
      "Designed and implemented responsive user interfaces using Vue.js and JavaScript, enhancing usability, application performance, and user experience.",
      "Collaborated with stakeholders to analyze business requirements and translate them into scalable, maintainable, and efficient software solutions.",
      "Conducted testing, debugging, deployment, and application maintenance activities to ensure system reliability, security, and optimal performance.",
      "Worked closely with cross-functional teams to deliver digital solutions that support continuous improvement and organizational productivity."
    ],
    challenge: "Managing fragmented operational tools and manual paper logs across multiple departments slowed down reporting and incident response.",
    solution: "Built unified web portals and data pipelines using Nest.js, Next.js, and NodeRed to streamline status monitoring.",
    protocol: "HTTP / REST API / MQTT",
    icon: <Cpu size={20} />,
  },
  {
    id: "gs-battery-internship",
    title: "Internship | PT GS Battery Karawang Plant SEPT 2025 - FEB 2026",
    shortDesc: "Developed and maintained enterprise-grade applications using C# (.NET) to support manufacturing operations, production monitoring, and business-critical data management processes.",
    longDesc: "Engineered RESTful APIs and backend services for data processing, system integration, and secure information exchange across internal platforms. Collaborated with frontend developers utilizing Vue.js and JavaScript to deliver responsive, scalable, and user-friendly business applications.",
    tags: ["Manufacturing", "Enterprise", "Internship"],
    architecture: [".NET CORE", "C#", "SQL SERVER", "PGADMIN", "Vue.js", "JavaScript", "WEB API", "Tailwind CSS"],
    status: "Completed",
    features: [
      "Developed and maintained enterprise-grade applications using C# (.NET) to support manufacturing operations, production monitoring, and business-critical data management processes.",
      "Engineered RESTful APIs and backend services for data processing, system integration, and secure information exchange across internal platforms.",
      "Collaborated with frontend developers utilizing Vue.js and JavaScript to deliver responsive, scalable, and user-friendly business applications.",
      "Performed application testing, debugging, performance tuning, and system maintenance to ensure reliability, security, and operational continuity.",
      "Worked closely with stakeholders to analyze business requirements and implement software solutions that enhance productivity and streamline operational workflows.",
      "Contributed throughout the Software Development Life Cycle (SDLC), from requirement analysis and development to deployment and ongoing support."
    ],
    challenge: "Correlating high-voltage machine power spikes with daily utility cost metrics was slow and highly prone to data discrepancies.",
    solution: "Assisted in building basic telemetry parser tools and automated dashboard reports to visualize active power loads.",
    protocol: "Modbus TCP / SQL ADO.NET",
    icon: <Activity size={20} />,
  },
  {
    id: "tour-travel-software",
    title: "Software Engineer | B&B Tour and Travel JUN 2022 - JULY 2025",
    shortDesc: "Developed and enhanced web-based applications supporting booking management, customer relationship processes, and day-to-day business operations.",
    longDesc: "Designed and implemented responsive user interfaces using Vue.js and JavaScript to improve user engagement and operational efficiency. Optimized application performance, usability, and responsiveness through frontend enhancements and continuous improvement initiatives.",
    tags: ["Travel & Tourism", "Booking Management", "Web App"],
    architecture: ["Vue.js", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    status: "Completed",
    features: [
      "Developed and enhanced web-based applications supporting booking management, customer relationship processes, and day-to-day business operations.",
      "Designed and implemented responsive user interfaces using Vue.js and JavaScript to improve user engagement and operational efficiency.",
      "Optimized application performance, usability, and responsiveness through frontend enhancements and continuous improvement initiatives.",
      "Collaborated with cross-functional teams to gather requirements, validate system functionality, and implement software solutions aligned with business objectives.",
      "Performed testing, debugging, troubleshooting, and maintenance activities to ensure application reliability and business continuity.",
      "Contributed throughout the software development lifecycle (SDLC), including development, testing, deployment, and post-deployment support."
    ],
    challenge: "Managing booking configurations and customer package reservations dynamically on mobile layout was causing high user dropout rate.",
    solution: "Designed and implemented responsive, lightweight web views with optimized queries and streamlined user workflows.",
    protocol: "HTTP / REST API",
    icon: <Globe size={20} />,
  },
  {
    id: "she-department",
    title: "PT AICC — SHE Department Internal Workflow & Management System",
    shortDesc: "A web-based application developed to streamline internal operational workflows within the Safety, Health, and Environment (SHE) department.",
    longDesc: "PT AICC SHE Department Internal System centralizes approval processes, department activities, and internal data management to improve efficiency, transparency, and control within the SHE department.",
    tags: ["SHE Operations", "Workflow Management", "Internal System"],
    architecture: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    status: "Deployed",
    features: [
      "Designed and developed a web-based internal system for the SHE Department at PT AICC using Laravel and MySQL.",
      "Implemented Role-Based Access Control (RBAC) to manage user permissions and approval hierarchy within the department.",
      "Developed multi-level approval workflow system to support internal operational processes.",
      "Built responsive and user-friendly interfaces using Tailwind CSS and JavaScript.",
      "Optimized database structure to support scalable and efficient department-level data management.",
      "Collaborated with SHE department stakeholders to translate business requirements into technical solutions.",
      "Conducted testing, debugging, deployment, and maintenance to ensure system stability."
    ],
    challenge: "Safety inspections and compliance reports took days to file manually, making it hard to track active workplace hazards in real-time.",
    solution: "Developed a digital SHE platform with multi-level approval workflow, RBAC, activity tracking, and dashboard for monitoring internal operations.",
    protocol: "HTTPS / REST API",
    icon: <Layers size={20} />,
  },
  {
    id: "my-padi",
    title: "MyPadi — Rice Disease Expert System",
    shortDesc: "A web-based expert system developed to assist farmers in identifying rice plant diseases and obtaining treatment recommendations through a rule-based diagnostic approach.",
    longDesc: "MyPadi aims to improve accessibility to agricultural knowledge and support early disease detection, helping farmers make informed decisions to increase crop productivity and reduce potential losses.",
    tags: ["Expert System", "Agriculture", "Diagnosis"],
    architecture: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    features: [
      "Designed and developed a web-based expert system using Laravel and MySQL to support rice disease diagnosis and treatment recommendations.",
      "Implemented rule-based decision-making mechanisms to simulate expert knowledge and provide accurate diagnostic results.",
      "Developed knowledge base management modules to manage disease information, symptoms, causes, and treatment recommendations.",
      "Designed relational database structures to support consultation history, disease classification, symptom mapping, and recommendation data.",
      "Built responsive user interfaces using Tailwind CSS and JavaScript to ensure accessibility across desktop and mobile devices.",
      "Developed user management functionalities for administrators and end users.",
      "Implemented consultation workflows that guide users through disease identification processes based on selected symptoms.",
      "Conducted system testing, debugging, and validation to ensure diagnostic accuracy, usability, and application reliability.",
      "Optimized application performance and database queries to improve responsiveness and user experience.",
      "Participated in deployment and maintenance activities to ensure long-term system stability."
    ],
    challenge: "Defining clear boundaries and thresholds for agronomic plant symptoms that can vary slightly due to soil or weather anomalies.",
    solution: "Structured a rule-based logic mapping system that uses symptom-based consultation workflows, returning ranked disease diagnosis and treatment recommendations.",
    protocol: "HTTP / SQL",
    icon: <Globe size={20} />,
  },
  {
    id: "sim-klinik-mobile",
    title: "SIM Klinik — Mobile Healthcare Management Application",
    shortDesc: "A mobile healthcare management application designed to support clinic operations by digitizing patient administration, medical records, appointment scheduling, and healthcare service management.",
    longDesc: "SIM Klinik aims to improve operational efficiency, data accessibility, and service quality for healthcare providers and patients through a cross-platform mobile application.",
    tags: ["Healthcare", "Mobile App", "Clinic Management"],
    architecture: ["Flutter", "MySQL", "REST API"],
    status: "Completed",
    features: [
      "Developed a cross-platform mobile application using Flutter to support clinic management and healthcare service operations.",
      "Designed and implemented patient registration modules to manage patient information and healthcare records efficiently.",
      "Developed appointment scheduling functionalities to streamline patient visits and healthcare service coordination.",
      "Integrated RESTful APIs to enable secure communication between mobile applications and backend systems.",
      "Implemented medical record management features to improve accessibility and organization of patient healthcare information.",
      "Designed responsive and intuitive user interfaces to provide a seamless user experience for healthcare staff and patients.",
      "Developed authentication and authorization mechanisms to ensure secure access to sensitive healthcare data.",
      "Participated in database design and API integration processes to support data consistency and application scalability.",
      "Conducted application testing, debugging, and performance optimization to ensure reliability and usability.",
      "Assisted in deployment, maintenance, and continuous improvement initiatives to enhance application functionality."
    ],
    challenge: "Syncing offline patient records with the clinic's central SQL server when mobile connection is unstable on the floor.",
    solution: "Built a local SQLite caching store inside the Flutter app that queues patient logs and syncs them automatically when connection is restored.",
    protocol: "HTTP / REST API",
    icon: <Server size={20} />,
  },
  {
    id: "oshitime",
    title: "OshiTime — Internal Workflow & Approval Management System",
    shortDesc: "An internal business application designed to streamline approval workflows and enhance operational efficiency across multiple departments.",
    longDesc: "OshiTime centralizes approval requests, status tracking, and workflow monitoring into a single integrated platform, improving transparency and process control within the organization.",
    tags: ["Workflow Management", "Approval System", "Enterprise"],
    architecture: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    status: "Completed",
    features: [
      "Designed and developed a web-based workflow management system using Laravel and MySQL.",
      "Implemented Role-Based Access Control (RBAC) to manage user permissions and approval hierarchies across departments.",
      "Developed approval tracking and status monitoring features to improve process visibility, accountability, and traceability.",
      "Built responsive and user-friendly interfaces using Tailwind CSS and JavaScript to enhance user experience.",
      "Optimized database schema and business workflows to improve system performance, scalability, and maintainability.",
      "Collaborated with stakeholders to translate business requirements into technical solutions and system features.",
      "Performed testing, debugging, deployment, and post-deployment maintenance to ensure system stability."
    ],
    challenge: "Handling complex multi-level approval hierarchies dynamically without hardcoding role dependencies in the database.",
    solution: "Implemented a generic state-machine workflow engine in Laravel that maps custom approval steps dynamically from database configuration files.",
    protocol: "HTTP / REST API",
    icon: <Layers size={20} />,
  },
];

function getTechLogo(tech: string): string | null {
  const t = tech.toLowerCase().trim();
  if (t.includes("golang") || t === "go") return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg";
  if (t.includes("php")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg";
  if (t === "c#" || t.includes("csharp")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg";
  if (t.includes("java") && !t.includes("script")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg";
  if (t.includes("javascript") || t === "js") return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
  if (t.includes("python")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
  if (t.includes("c++") || t.includes("cplusplus")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";
  if (t.includes("laravel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg";
  if (t.includes("next.js") || t.includes("nextjs")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
  if (t.includes("nest.js") || t.includes("nestjs")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg";
  if (t.includes("dot-net") || t.includes(".net")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg";
  if (t.includes("django")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg";
  if (t.includes("vue")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg";
  if (t.includes("codeigniter") || t.includes("code igniter")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg";
  if (t.includes("mysql")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg";
  if (t.includes("postgres") || t.includes("pgadmin")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
  if (t.includes("sql server") || t.includes("microsoftsqlserver")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg";
  if (t.includes("mongodb")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg";
  if (t.includes("git")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";
  if (t.includes("docker")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg";
  if (t.includes("linux")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg";
  if (t.includes("windows")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg";
  if (t.includes("tailwind")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
  if (t.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";
  if (t.includes("flutter")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg";
  if (t.includes("dart")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg";
  if (t.includes("nodered") || t.includes("node-red") || t.includes("node red")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodered/nodered-original.svg";
  return null;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-slate-50/50 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-12 right-12 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-slate-100 pb-6 text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Engineering Systems
          </h1>
          <p className="mt-2 text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Industrial Applications & Corporate Portals
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-blue-200/80 hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col justify-between group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="group-hover:scale-115 transition-transform duration-300">
                      {project.icon}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded transition-colors ${
                      project.status === "Active in Production"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : project.status === "Operational"
                        ? "bg-blue-50 text-blue-700 border border-blue-100"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-650 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed min-h-[72px]">
                  {project.shortDesc}
                </p>

                {/* Architecture Pills */}
                <div className="flex flex-wrap gap-1">
                  {project.architecture.map((tech) => {
                    const logo = getTechLogo(tech);
                    return (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/40 text-[11px] font-semibold text-slate-505 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all duration-200 cursor-default flex items-center gap-1"
                      >
                        {logo && <img src={logo} alt={tech} className="w-3 h-3 object-contain shrink-0" />}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-xs font-bold text-slate-700 transition-all duration-200"
                >
                  System Details
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-650 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden animate-fade-in z-10 transition-transform duration-300">
              
              {/* Header */}
              <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">{selectedProject.title}</h2>
                    <span className="text-xs text-blue-300 font-medium">
                      Protocol: {selectedProject.protocol || "HTTP / REST"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    System Overview
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Tech Challenge */}
                <div className="p-4 rounded-lg bg-rose-50/50 border border-rose-100 space-y-1">
                  <h5 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-600" />
                    Engineering Challenge
                  </h5>
                  <p className="text-xs text-rose-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* Technical Solution */}
                <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100 space-y-1">
                  <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Solution / System Architecture
                  </h5>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Key Implementations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, index) => (
                      <div key={index} className="flex gap-2 text-xs text-slate-600">
                        <Check size={14} className="text-blue-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Spec */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Deployment Components
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.architecture.map((item) => {
                      const logo = getTechLogo(item);
                      return (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-650 flex items-center gap-1.5 hover:bg-slate-200 transition-colors"
                        >
                          {logo ? (
                            <img src={logo} alt={item} className="w-3.5 h-3.5 object-contain shrink-0" />
                          ) : (
                            <Server size={10} className="text-slate-400 shrink-0" />
                          )}
                          <span>{item}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-semibold">
                  Status: {selectedProject.status}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors shadow-sm"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
