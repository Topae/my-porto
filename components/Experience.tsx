/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Briefcase, Calendar, MapPin, Code, Cpu } from "lucide-react";

interface Job {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
  tech: string[];
}

const jobHistory: Job[] = [
  {
    company: "PT Menara Terus Makmur",
    role: "Software Engineer",
    location: "Indonesia",
    duration: "MAY 2026 - NOW",
    description: "Developed and enhanced web-based applications to support business digitalization and operational excellence initiatives.",
    bullets: [
      "Built responsive and user-friendly interfaces using JavaScript and Vue.js, improving application performance and user engagement.",
      "Analyzed business requirements and transformed them into scalable technical solutions aligned with organizational objectives.",
      "Performed application testing, debugging, and maintenance to ensure system stability, security, and functionality.",
      "Collaborated with stakeholders and development teams to deliver efficient digital solutions and support continuous process improvement.",
    ],
    tech: ["Nest.js", "Next.js", "JavaScript", "NodeRed", "PgAdmin", "Tailwind CSS"],
  },
  {
    company: "PT GS BATTERY KARAWANG PLANT",
    role: "Internship",
    location: "Indonesia",
    duration: "SEPT 2025 - FEB 2026",
    description: "Assisted in developing and maintaining internal web-based applications using C# (.NET) to support operational and production data management.",
    bullets: [
      "Developed backend services and RESTful APIs with C# (.NET) for data processing and system integration.",
      "Collaborated on frontend integration using JavaScript/Vue.js to ensure seamless communication with backend services.",
    ],
    tech: [".NET CORE", "SQL SERVER", "PGADMIN", "C#", "PYTHON", "JAVASCRIPT", "AJAX", "WEB API", "Tailwind CSS"],
  },
  {
    company: "B&B TOUR AND TRAVEL",
    role: "Web Developer",
    location: "Indonesia",
    duration: "JUN 2022 - JULY 2025",
    description: "Designed and developed web interfaces using JavaScript and Vue.js to support booking and customer management systems.",
    bullets: [
      "Optimized frontend performance and user experience for faster and more responsive applications.",
      "Collaborated with team members to test, validate, and maintain system functionality.",
    ],
    tech: ["Code Igniter 3", "PHP", "MYSQL", "Tailwind CSS", "AJAX", "SSO"],
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

export default function Experience() {
  return (
    <section className="bg-slate-50/30 py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-slate-100 pb-6 text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Professional Experience
          </h1>
          <p className="mt-2 text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Employment Timeline & Engineering History
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Industry Context (Left Column) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 animate-fade-in">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/50 space-y-5">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <Cpu size={16} className="text-blue-600 animate-pulse" />
                Industry Exposure
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Manufacturing & Assembly",
                    percentage: "45%",
                    icon: (
                      <img
                        src="https://api.iconify.design/lucide/factory.svg?color=%232563eb"
                        alt="Manufacturing"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Energy & Telemetry Analytics",
                    percentage: "25%",
                    icon: (
                      <img
                        src="https://api.iconify.design/lucide/zap.svg?color=%2310b981"
                        alt="Energy"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Corporate Workflow & SHE Systems",
                    percentage: "20%",
                    icon: (
                      <img
                        src="https://api.iconify.design/lucide/workflow.svg?color=%236366f1"
                        alt="Workflow"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    ),
                  },
                  {
                    name: "Healthcare & Travel Platforms",
                    percentage: "10%",
                    icon: (
                      <img
                        src="https://api.iconify.design/lucide/activity.svg?color=%23a855f7"
                        alt="Healthcare"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-1.5 group">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 group-hover:text-blue-650 transition-colors">
                      <span className="flex items-center gap-1.5">
                        {item.icon}
                        {item.name}
                      </span>
                      <span className="text-[11px] font-bold px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-slate-500">{item.percentage}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-px">
                      <div
                        className="bg-linear-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 group-hover:from-blue-600 group-hover:to-blue-700"
                        style={{ width: item.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed space-y-2">
                <p>
                  <strong>Role profile:</strong> Across these projects, I served as the primary system designer or key developer responsible for schema architecture, communication protocol mapping, and database integration.
                </p>
                <p>
                  Specializing in writing server applications that run reliably 24/7 without manual supervision.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline (Right Column) */}
          <div className="lg:col-span-8 relative border-l-2 border-slate-100/80 pl-6 sm:pl-8 ml-3 space-y-12">
            {/* Timeline Line Highlight Gradient Overlay */}
            <div className="absolute left-[-2px] top-4 bottom-4 w-[2px] bg-linear-to-b from-blue-600 via-blue-400 to-slate-200 pointer-events-none" />

            {jobHistory.map((job, index) => (
              <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                
                {/* Timeline Circle Node */}
                <div className="absolute left-[-35px] sm:left-[-43px] top-1.5 h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-md flex items-center justify-center transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
                  <Briefcase size={10} className="text-white" />
                  <span className="absolute inset-0 rounded-full bg-blue-600/30 scale-125 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Job Card */}
                <div className="space-y-3 p-5 rounded-xl border border-transparent hover:border-slate-200/80 hover:bg-slate-50/30 hover:shadow-sm transition-all duration-300">
                  {/* Job Metadata Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h3>
                      <span className="text-sm font-bold text-slate-700">{job.company}</span>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-semibold gap-1">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1 sm:justify-end">
                        <MapPin size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {job.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="list-disc pl-5 text-sm text-slate-500 space-y-1.5 leading-relaxed">
                    {job.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.tech.map((t) => {
                      const logo = getTechLogo(t);
                      return (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-655 text-xs font-semibold hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-all duration-200 cursor-default"
                        >
                          {logo ? (
                            <img src={logo} alt={t} className="w-3 h-3 object-contain shrink-0 mr-1" />
                          ) : (
                            <Code size={10} className="text-slate-450 shrink-0 mr-1" />
                          )}
                          <span>{t}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
