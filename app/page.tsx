import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Activity, Briefcase, FolderGit2, Globe, Layers } from "lucide-react";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Landing Section */}
      <Hero />

      {/* Highlights / Featured Info */}
      <section className="bg-slate-50/40 py-16 border-b border-slate-100/60 relative overflow-hidden">
        {/* Ambient background blob */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">
                Featured Implementations
              </h2>
              <p className="text-2xl font-bold text-slate-900 tracking-tight">
                Production-Ready Engineering Systems
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              Browse all 9 systems
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu size={18} />,
                title: "PT Menara Terus Makmur",
                desc: "Developed and maintained digitalization applications to improve operational efficiency, document management, and workplace safety processes.",
                tech: ["Nest.js", "Next.js", "JavaScript", "NodeRed"],
              },
              {
                icon: <Activity size={18} />,
                title: "PT GS Battery",
                desc: "Monitored and analyzed energy consumption data to support efficiency and cost optimization initiatives.",
                tech: [".NET CORE", "SQL SERVER", "C#", "PYTHON"],
              },
              {
                icon: <Layers size={18} />,
                title: "PT AICC (SHE Department)",
                desc: "Developed and maintained digital solutions to support Safety, Health, and Environment (SHE) operations and compliance requirements.",
                tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
              },
              {
                icon: <FolderGit2 size={18} />,
                title: "Habbit Check",
                desc: "Developed a web-based expert system application to analyze and evaluate student capabilities and habits using rule-based logic.",
                tech: ["CodeIgniter 3", "PHP", "MySQL", "AJAX"],
              },
              {
                icon: <Globe size={18} />,
                title: "My Padi",
                desc: "Developed a web-based expert system to identify and analyze rice plant health conditions based on symptom inputs and rule-based logic.",
                tech: ["CodeIgniter 3", "PHP", "MySQL", "AJAX"],
              },
              {
                icon: <Layers size={18} />,
                title: "Oshitime",
                desc: "Developed a web-based internal management system to handle approval workflows and multi-department coordination processes.",
                tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
              },
              {
                icon: <Server size={18} />,
                title: "SIM Klinik",
                desc: "Developed a mobile-based clinic information management system (SIM Klinik) to support healthcare operational processes and patient data management.",
                tech: ["Flutter", "Dart", "MySQL", "REST API"],
              },
              {
                icon: <Server size={18} />,
                title: "Klinik Kinasih",
                desc: "Assisted in the development and maintenance of internal digital systems to support clinic operations, including patient data management.",
                tech: ["CodeIgniter 3", "PHP", "MySQL", "Tailwind CSS"],
              },
              {
                icon: <Globe size={18} />,
                title: "B&B Tour and Travel",
                desc: "Developed and maintained web-based applications to support travel and tourism business operations, including booking management.",
                tech: ["CodeIgniter 3", "PHP", "MYSQL", "Tailwind CSS"],
              },
            ].map((proj, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-300/40 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">{proj.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-6 pt-4 border-t border-slate-100/60">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/40 text-[10px] font-semibold text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-650 transition-colors duration-250 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quick History Section */}
      <section className="bg-linear-to-b from-white to-slate-50/50 py-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-12 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                Work Engagements
              </h2>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Enterprise & Industrial Environments
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                I operate in environments requiring absolute reliability, deploying backend codebases and operational panels to coordinate workflows and energy monitoring systems.
              </p>
              <div className="pt-2">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 rounded-lg text-xs font-bold text-slate-700 hover:text-blue-700 transition-all duration-300"
                >
                  View Full Timeline
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  company: "PT Menara Terus Makmur",
                  role: "Fullstack Developer",
                  duration: "MAY 2026 - NOW",
                  desc: "Developed and enhanced web-based applications to support business digitalization and operational excellence initiatives.",
                },
                {
                  company: "PT GS BATTERY KARAWANG PLANT",
                  role: "Internship",
                  duration: "SEPT 2025 - FEB 2026",
                  desc: "Assisted in developing and maintaining internal web-based applications using C# (.NET) to support operational and production data management.",
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-slate-100 bg-white hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/5 hover:scale-[1.01] transition-all duration-300 flex gap-4 items-start group"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Briefcase size={18} />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.role}</h4>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{job.duration}</span>
                    </div>
                    <span className="text-xs text-blue-600 font-bold block">{job.company}</span>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
