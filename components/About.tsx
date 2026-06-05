import React from "react";
import { ShieldCheck, HardDrive, Cpu, Radio, ChevronRight, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-50/30 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative ambient blur spheres */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            About Me
          </h1>
          <p className="mt-2 text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Enterprise Systems & Industrial Digitalization Specialist
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text & Focus Areas (Left Column) */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="prose prose-slate text-slate-600 space-y-4 text-base leading-relaxed">
              <p className="text-slate-800 font-semibold">
                I am a Software Engineer specializing in enterprise systems and industrial digitalization solutions. My focus is building backend systems, workflow automation platforms, and real-time monitoring applications used in manufacturing and business environments.
              </p>
              <p>
                I enjoy working on system design, backend architecture, and data-driven applications that support operational efficiency and digital transformation. By bridging the gap between traditional operations (OT) and information technology (IT), I help companies unlock value from their assets and automate critical administrative processes.
              </p>
              <p>
                Throughout my career, I have gained hands-on experience in multiple sectors, including manufacturing, energy monitoring, healthcare administration, and corporate business workflows. I focus heavily on writing clean, maintainable code, building robust database models, and ensuring maximum uptime for systems that directly impact daily business operations.
              </p>
            </div>

            {/* Focus Areas Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Core Specialization Areas
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <ShieldCheck size={20} />,
                    title: "Enterprise App Development",
                    desc: "Creating business process tools, multi-level approvals, and tracking systems.",
                  },
                  {
                    icon: <Cpu size={20} />,
                    title: "Industrial Monitoring Systems",
                    desc: "Connecting production floors to web screens, reporting live status and errors.",
                  },
                  {
                    icon: <HardDrive size={20} />,
                    title: "Backend Engineering",
                    desc: "Designing fast databases, optimized query indexes, and secure APIs.",
                  },
                  {
                    icon: <Radio size={20} />,
                    title: "Real-time Data Systems",
                    desc: "Integrating device telemetry over Modbus and MQTT protocol streams.",
                  },
                ].map((area, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-blue-200 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex gap-3.5 group"
                  >
                    <div className="mt-0.5 shrink-0 h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {area.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">{area.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integration Topology Blueprint (Right Column) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/40 space-y-6 animate-fade-in animate-delay-100 animate-pulse-glow">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-700 tracking-wider uppercase flex items-center gap-1.5">
                <Zap size={14} className="text-amber-500 fill-amber-500 animate-pulse" />
                Digitalization Topology Blueprint
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">REF: ARCH-2026</span>
            </div>

            {/* Visual Flow diagram */}
            <div className="space-y-5">
              
              {/* Box 1: Edge Equipment */}
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-blue-200 hover:bg-white hover:scale-[1.01] transition-all duration-300 group">
                <div>
                  <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">
                    Layer 01: OT / Factory Floor
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Industrial PLC, Power Meters, & Sensors
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-[9px] font-bold text-amber-700 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                  Modbus / MQTT
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-3">
                <div className="h-6 w-0.5 bg-linear-to-b from-blue-400 to-blue-600 relative">
                  <ChevronRight size={10} className="absolute -bottom-1 left-[-4px] rotate-90 text-blue-600 animate-bounce" />
                </div>
              </div>

              {/* Box 2: Gateway Node */}
              <div className="bg-blue-600 p-4 rounded-xl text-white flex items-center justify-between shadow-md hover:bg-blue-700 hover:scale-[1.01] transition-all duration-300">
                <div>
                  <span className="text-[9px] text-blue-200 block font-semibold uppercase tracking-wider">
                    Layer 02: Integration Gateway
                  </span>
                  <span className="text-xs font-bold">
                    Backend Middleware (Golang / .NET / Laravel)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/20 text-[9px] font-bold text-white border border-white/10">
                  Data Broker
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-3">
                <div className="h-6 w-0.5 bg-linear-to-b from-blue-600 to-slate-450 relative">
                  <ChevronRight size={10} className="absolute -bottom-1 left-[-4px] rotate-90 text-slate-500 animate-bounce" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              {/* Box 3: Enterprise DB */}
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-blue-200 hover:bg-white hover:scale-[1.01] transition-all duration-300 group">
                <div>
                  <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">
                    Layer 03: Storage & Logic
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Databases (PostgreSQL, MySQL, SQL Server)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[9px] font-bold text-blue-700 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                  Transact-SQL
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-3">
                <div className="h-6 w-0.5 bg-linear-to-b from-slate-450 to-emerald-600 relative">
                  <ChevronRight size={10} className="absolute -bottom-1 left-[-4px] rotate-90 text-emerald-600 animate-bounce" style={{ animationDelay: "2s" }} />
                </div>
              </div>

              {/* Box 4: Client View */}
              <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-emerald-200 hover:bg-white hover:scale-[1.01] transition-all duration-300 group">
                <div>
                  <span className="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">
                    Layer 04: UI / Dashboard
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Real-time Andon Screens & Web Panels
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[9px] font-bold text-emerald-700 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                  Operational
                </span>
              </div>

            </div>

            {/* Explanatory Note */}
            <p className="text-[11px] text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
              <strong>Architectural Note:</strong> By organizing services cleanly into decoupled layers, I ensure that sensor data ingestion does not slow down administrative user requests, keeping databases responsive and reports highly accurate.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
