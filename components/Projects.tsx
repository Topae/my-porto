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
    id: "clinic-digitalization",
    title: "Digitalization Staff | Klinik Kinasih 2021 – 2022",
    shortDesc: "Assisted in the development and maintenance of internal digital systems to support clinic operations, including patient data management and administrative processes.",
    longDesc: "Supported the digitalization of medical and operational workflows to improve efficiency, accuracy, and service delivery. Collaborated with administrative and medical staff to gather system requirements and ensure application usability in daily operations.",
    tags: ["Clinic Operations", "Data Management", "Digitalization"],
    architecture: ["Code Igniter 3", "PHP", "MySQL", "Tailwind CSS", "AJAX"],
    status: "Completed",
    features: [
      "Assisted in the development and maintenance of internal digital systems.",
      "Supported the digitalization of medical and operational workflows.",
      "Collaborated with administrative and medical staff to gather system requirements.",
      "Handled system troubleshooting, user support, and maintenance.",
      "Contributed to data management and reporting processes.",
      "Helped improve manual processes by implementing simple digital solutions and workflow automation."
    ],
    challenge: "Clinic staff faced delays and errors due to manual, paper-based workflows for patient registration and medical record storage.",
    solution: "Transitioned manual processes into secure digital forms, enabling quick searchability and streamlined queue tracking.",
    protocol: "HTTP / SQL",
    icon: <Server size={20} />,
  },
  {
    id: "tour-travel-software",
    title: "Software Engineer | B&B Tour and Travel JUN 2022 - JULY 2025",
    shortDesc: "Developed and maintained web-based applications to support travel and tourism business operations, including booking management and customer services.",
    longDesc: "Designed and implemented responsive user interfaces using modern web technologies to enhance user experience and operational efficiency. Collaborated with stakeholders to gather business requirements and deliver scalable solutions aligned with organizational objectives.",
    tags: ["Travel & Tourism", "Booking Management", "Web App"],
    architecture: ["Code Igniter 3", "PHP", "MYSQL", "Tailwind CSS", "AJAX", "SSO"],
    status: "Completed",
    features: [
      "Developed and maintained web-based applications for booking and customer services.",
      "Designed and implemented responsive user interfaces using modern web technologies.",
      "Collaborated with stakeholders to gather business requirements and deliver scalable solutions.",
      "Developed and optimized features related to reservation management, customer information, travel packages, and operational reporting.",
      "Conducted system testing, debugging, and maintenance to ensure application reliability and performance."
    ],
    challenge: "Managing booking configurations and customer package reservations dynamically on mobile layout was causing high user dropout rate.",
    solution: "Designed and implemented responsive, lightweight web views with optimized queries and single sign-on authentication.",
    protocol: "HTTP / REST API / SSO",
    icon: <Globe size={20} />,
  },
  {
    id: "she-department",
    title: "Software Engineer - (SHE Department) PT AICC JULY 2025 - DES 2025",
    shortDesc: "Developed and maintained digital solutions to support Safety, Health, and Environment (SHE) operations and compliance requirements.",
    longDesc: "Collaborated with SHE personnel and stakeholders to analyze business processes and translate operational needs into effective software solutions. Designed and implemented web-based applications to improve incident reporting, hazard management, document control, and workplace safety monitoring.",
    tags: ["SHE Operations", "Safety & Health", "Compliance"],
    architecture: ["PHP", "Laravel", "MySQL", "JavaScript", "Linux Server"],
    status: "Deployed",
    features: [
      "Developed and maintained digital solutions to support SHE operations and compliance.",
      "Collaborated with SHE personnel to translate operational needs into effective software solutions.",
      "Designed and implemented web-based applications to improve incident reporting and hazard management.",
      "Participated in full system development lifecycle activities from requirements gathering to deployment.",
      "Optimized application performance and user experience for reliable multi-department usage.",
      "Supported digital transformation by automating manual processes and enhancing data accessibility.",
      "Provided technical support, troubleshooting, and continuous improvements to ensure system stability."
    ],
    challenge: "Safety inspections and compliance reports took days to file manually, making it hard to track active workplace hazards in real-time.",
    solution: "Developed a digital SHE platform allowing safety officers to submit live logs and generate automated PDF audit reports.",
    protocol: "HTTPS / REST API",
    icon: <Layers size={20} />,
  },
  {
    id: "energy-monitoring-gsb",
    title: "Energy Monitoring - PT GS Battery SEPT 2025 - JAN 2026",
    shortDesc: "Monitored and analyzed energy consumption data to support efficiency and cost optimization initiatives.",
    longDesc: "Assisted in developing basic monitoring tools and reports for operational energy usage. Collaborated with the team to identify opportunities for improving energy efficiency.",
    tags: ["Energy Analysis", "Utility Monitoring", "Cost Optimization"],
    architecture: [".NET CORE", "SQL SERVER", "PGADMIN", "C#", "PYTHON", "JAVASCRIPT", "AJAX", "WEB API", "Tailwind CSS"],
    status: "Operational",
    features: [
      "Monitored and analyzed energy consumption data to support efficiency and cost optimization.",
      "Assisted in developing basic monitoring tools and reports for operational energy usage.",
      "Collaborated with the team to identify opportunities for improving energy efficiency."
    ],
    challenge: "Correlating high-voltage machine power spikes with daily utility cost metrics was slow and highly prone to data discrepancies.",
    solution: "Assisted in building basic telemetry parser tools and automated dashboard reports to visualize active power loads.",
    protocol: "Modbus TCP / SQL ADO.NET",
    icon: <Activity size={20} />,
  },
  {
    id: "menara-terus-makmur",
    title: "Digitalization Staff | PT Menara Terus Makmur (Astra Group) MAY 2026 - NOW",
    shortDesc: "Developed and maintained digitalization applications to improve operational efficiency, document management, and workplace safety processes.",
    longDesc: "Contributed to the development of multiple internal systems, including Andon, E-Memo, Predictive Maintenance, Uploading Document, and E-Hazard platforms. Designed and implemented responsive user interfaces using JavaScript and Vue.js.",
    tags: ["Digitalization", "Manufacturing", "Astra Group"],
    architecture: ["Nest.js", "Next.js", "JavaScript", "NodeRed", "PgAdmin", "Tailwind CSS"],
    status: "Active in Production",
    features: [
      "Developed and maintained digitalization applications to improve operational efficiency, document management, and workplace safety processes.",
      "Contributed to the development of multiple internal systems, including Andon, E-Memo, Predictive Maintenance, Uploading Document, and E-Hazard platforms.",
      "Designed and implemented responsive user interfaces using JavaScript and Vue.js, ensuring optimal usability and application performance.",
      "Collaborated with cross-functional teams to gather requirements, analyze business processes, and deliver technology-driven solutions aligned with organizational needs.",
      "Participated in system testing, debugging, deployment, and maintenance activities to ensure reliability and continuous improvement of applications.",
      "Supported digital transformation initiatives by automating manual processes, improving information accessibility, and enhancing operational visibility through web-based solutions.",
      "Assisted in the development of monitoring and reporting features to support decision-making and operational effectiveness."
    ],
    challenge: "Managing fragmented operational tools and manual paper logs across multiple departments slowed down reporting and incident response.",
    solution: "Built unified web portals and data pipelines using Nest.js, Next.js, and NodeRed to streamline status monitoring.",
    protocol: "HTTP / REST API / MQTT",
    icon: <Cpu size={20} />,
  },
  {
    id: "habbit-check",
    title: "Personal Project — Habbit Check (Expert System for Student Assessment)",
    shortDesc: "Developed a web-based expert system application to analyze and evaluate student capabilities and habits using rule-based logic.",
    longDesc: "Designed and implemented the system using CodeIgniter 3, PHP, and MySQL to ensure lightweight, scalable, and efficient performance. Built decision-making logic to assist in identifying student potential and behavioral patterns based on predefined criteria.",
    tags: ["Personal Project", "Expert System", "Assessment"],
    architecture: ["CodeIgniter 3", "PHP", "MySQL", "CSS", "AJAX"],
    status: "Completed",
    features: [
      "Developed a web-based expert system application to analyze and evaluate student capabilities and habits using rule-based logic.",
      "Designed and implemented the system using CodeIgniter 3, PHP, and MySQL to ensure lightweight, scalable, and efficient performance.",
      "Built decision-making logic to assist in identifying student potential and behavioral patterns based on predefined criteria.",
      "Designed database structure to manage student data, assessment rules, and evaluation results effectively.",
      "Created user-friendly interface to support ease of use for students and administrators in inputting and reviewing assessments.",
      "Performed testing and optimization to ensure accuracy of the expert system output and system stability."
    ],
    challenge: "Translating complex behavioral patterns and qualitative assessment criteria into structured database rules and deterministic logic in PHP.",
    solution: "Developed a forward-chaining rule engine in CodeIgniter 3 that evaluates predefined behavioral metrics and flags matching student capability profiles.",
    protocol: "HTTP / SQL",
    icon: <FolderGit2 size={20} />,
  },
  {
    id: "my-padi",
    title: "Personal Project — My Padi (Expert System for Rice Plant Health Diagnosis)",
    shortDesc: "Developed a web-based expert system to identify and analyze rice plant health conditions based on symptom inputs and rule-based logic.",
    longDesc: "Built the application using CodeIgniter 3, PHP, and MySQL to ensure efficient performance and structured data management. Implemented decision-making rules to assist users in diagnosing potential diseases and health issues in rice crops.",
    tags: ["Personal Project", "Expert System", "Agriculture"],
    architecture: ["CodeIgniter 3", "PHP", "MySQL", "CSS", "AJAX"],
    status: "Completed",
    features: [
      "Developed a web-based expert system to identify and analyze rice plant health conditions based on symptoms.",
      "Built the application using CodeIgniter 3, PHP, and MySQL for efficient data management.",
      "Implemented decision-making rules to diagnose potential diseases and health issues in rice crops.",
      "Designed and managed database structure for storing plant symptoms, disease rules, and diagnostic results.",
      "Created a user-friendly interface to support farmers in inputting symptoms and receiving recommendations.",
      "Conducted testing and refinement to improve system accuracy and ensure reliable output."
    ],
    challenge: "Defining clear boundaries and thresholds for agronomic plant symptoms that can vary slightly due to soil or weather anomalies.",
    solution: "Structured a logic mapping ruleset in MySQL that uses certainty factors to score matching disease symptoms, returning ranked suggestions.",
    protocol: "HTTP / SQL",
    icon: <Globe size={20} />,
  },
  {
    id: "oshitime",
    title: "Personal Project — Oshitime (Internal Approval & Workforce Management System)",
    shortDesc: "Developed a web-based internal management system to handle approval workflows and multi-department coordination processes.",
    longDesc: "Built the application using Laravel, MySQL, and Tailwind CSS to ensure scalable architecture, responsive UI, and efficient data management. Designed and implemented role-based access control to support different departments and approval hierarchies within the organization.",
    tags: ["Personal Project", "Workforce Management", "Workflow"],
    architecture: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "AJAX"],
    status: "Completed",
    features: [
      "Developed a web-based internal management system to handle approval workflows and coordination.",
      "Built the application using Laravel, MySQL, and Tailwind CSS for scalable architecture and responsive UI.",
      "Designed and implemented role-based access control to support different departments and hierarchies.",
      "Developed automated approval workflows to streamline internal processes and reduce manual tasks.",
      "Created a responsive and modern user interface using Tailwind CSS to improve usability.",
      "Designed database schema to manage users, departments, requests, and approval status tracking.",
      "Conducted system testing and optimization to ensure performance, reliability, and workflow accuracy."
    ],
    challenge: "Handling complex multi-level approval hierarchies dynamically without hardcoding role dependencies in the database.",
    solution: "Implemented a generic state-machine workflow engine in Laravel that maps custom approval steps dynamically from database configuration files.",
    protocol: "HTTP / REST API",
    icon: <Layers size={20} />,
  },
  {
    id: "sim-klinik-mobile",
    title: "Personal Project — SIM Klinik (Clinic Information Management System Mobile App)",
    shortDesc: "Developed a mobile-based clinic information management system (SIM Klinik) to support healthcare operational processes and patient data management.",
    longDesc: "Built the application using Flutter for cross-platform mobile development and MySQL for backend database management. Designed and implemented features for patient data handling, medical records, and clinic operational workflows.",
    tags: ["Personal Project", "Healthcare", "Mobile App"],
    architecture: ["Flutter", "Dart", "MySQL", "REST API"],
    status: "Completed",
    features: [
      "Developed a mobile-based clinic information management system to support healthcare operations.",
      "Built the application using Flutter for cross-platform mobile development and MySQL for backend database.",
      "Designed and implemented features for patient data handling, medical records, and operational workflows.",
      "Developed a responsive and user-friendly mobile interface to improve accessibility.",
      "Integrated structured database design to ensure efficient data storage, retrieval, and management.",
      "Conducted testing and debugging to ensure application stability across mobile devices."
    ],
    challenge: "Syncing offline patient records with the clinic's central SQL server when mobile connection is unstable on the floor.",
    solution: "Built a local SQLite caching store inside the Flutter app that queues patient logs and syncs them automatically when connection is restored.",
    protocol: "HTTP / JSON API",
    icon: <Server size={20} />,
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
