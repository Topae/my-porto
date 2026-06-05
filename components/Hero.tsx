"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Activity, Database, FileText, Send, Network } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("telemetry");
  const [pulseCount, setPulseCount] = useState(1048);
  const [systemLoad, setSystemLoad] = useState(14.8);

  // Small live elements to demonstrate real-time mindset
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setSystemLoad((prev) => {
        const diff = (Math.random() - 0.5) * 2;
        const next = prev + diff;
        return parseFloat(Math.min(Math.max(next, 5), 35).toFixed(1));
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-100/60">
      {/* Decorative Blur Spheres (Premium SaaS look) */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-12 right-1/4 translate-x-1/2 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }} />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Main Info (Left) */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/70 border border-blue-100/50 text-xs font-semibold text-blue-700 transition-all hover:bg-blue-50">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Senior Engineering Roles & Enterprise Projects
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
                Mustofa Khoirudin
              </h1>
              <p className="text-lg sm:text-xl font-bold text-blue-600 tracking-tight flex flex-wrap items-center gap-2">
                <span>Software Engineer</span>
                <span className="text-slate-300">|</span>
                <span>Enterprise Systems</span>
                <span className="text-slate-300">|</span>
                <span>Industrial Digitalization</span>
              </p>
            </div>

            <p className="text-lg text-slate-800 font-semibold leading-relaxed max-w-2xl">
              I design and develop enterprise-grade systems and industrial digitalization platforms that connect business processes, manufacturing systems, and real-time data into scalable software solutions.
            </p>

            <p className="text-base text-slate-500 leading-relaxed max-w-2xl">
              Experienced Software Engineer focused on backend architecture, enterprise workflow systems, and real-time industrial applications. I build systems used in manufacturing, energy monitoring, procurement workflows, and healthcare operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group"
              >
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={16} />
                Contact Me
              </Link>

              <a
                href="/CV_Dev_mustofa.pdf"
                download="CV_Dev_mustofa.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Download CV PDF"
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              {[
                { value: "5+", label: "Years Exp" },
                { value: "8+", label: "Prod Systems" },
                { value: "100%", label: "System Uptime" },
                { value: "IoT/REST", label: "Integrations" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1 p-2 rounded-lg hover:bg-slate-50/50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Interactive Industrial operations visualization (Right) */}
          <div className="lg:col-span-5 animate-fade-in animate-delay-150">
            <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-800 overflow-hidden text-slate-300 font-mono text-xs hover:border-slate-700/60 transition-all duration-300 hover:shadow-blue-500/5 hover:shadow-2xl">
              
              {/* Terminal Titlebar */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium ml-2 uppercase tracking-wider">
                    digitalization-gateway-node01
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] text-emerald-500 font-semibold uppercase tracking-wider">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/50">
                {[
                  { id: "telemetry", label: "Realtime Telemetry" },
                  { id: "logs", label: "Gateway Logs" },
                  { id: "stack", label: "System Stack" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 border-r border-slate-800 text-[10px] uppercase font-bold tracking-wider transition-colors ${
                      activeTab === tab.id
                        ? "text-blue-400 bg-slate-900 border-b border-b-blue-500"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Terminal Body */}
              <div className="p-5 min-h-[260px] flex flex-col justify-between">
                {activeTab === "telemetry" && (
                  <div className="space-y-4">
                    {/* Live telemetrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-3 rounded border border-slate-800/60 transition-all hover:border-slate-700">
                        <span className="text-[10px] text-slate-500 block uppercase tracking-wider">
                          MQTT Message Pipeline
                        </span>
                        <span className="text-lg font-bold text-blue-400">{pulseCount} msg</span>
                        <span className="text-[10px] text-slate-400 block mt-1 animate-pulse">
                          ↑ 4.2 msg/sec (active)
                        </span>
                      </div>
                      <div className="bg-slate-950 p-3 rounded border border-slate-800/60 transition-all hover:border-slate-700">
                        <span className="text-[10px] text-slate-500 block uppercase tracking-wider">
                          Gateway CPU Load
                        </span>
                        <span className="text-lg font-bold text-amber-400">{systemLoad}%</span>
                        <div className="w-full bg-slate-800 h-1 rounded overflow-hidden mt-2">
                          <div
                            className="bg-amber-400 h-1 transition-all duration-1000"
                            style={{ width: `${systemLoad}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Node status list */}
                    <div className="space-y-2">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-1">
                        Active Industrial Integrations
                      </div>
                      {[
                        { name: "ANDON_PLC_BROKER", status: "Connected", desc: "Modbus TCP Gateway" },
                        { name: "GSB_POWER_METER_02", status: "Streaming", desc: "Energy telemetry" },
                        { name: "RFQ_APPROVAL_WORKFLOW", status: "Operational", desc: "SAP RFC endpoint" },
                      ].map((node, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px] hover:bg-slate-800/30 p-0.5 rounded transition-colors">
                          <div className="flex items-center gap-2">
                            <Network size={12} className="text-blue-500" />
                            <span className="text-slate-200 font-semibold">{node.name}</span>
                            <span className="text-slate-500 text-[10px]">({node.desc})</span>
                          </div>
                          <span className="text-emerald-500 font-semibold text-[10px]">
                            {node.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "logs" && (
                  <div className="space-y-1.5 text-[11px] leading-relaxed text-slate-400">
                    <div>
                      <span className="text-slate-500">[14:02:11]</span> [INFO] MQTT client initiated
                      connection to broker.astragroup.local
                    </div>
                    <div>
                      <span className="text-slate-500">[14:02:12]</span> [OK] Handshake completed.
                      Topic: <span className="text-blue-400">mtm/andon/status</span>
                    </div>
                    <div>
                      <span className="text-slate-500">[14:02:18]</span> [DB] PostgreSQL pool size:
                      15 active, 0 idle. Response time: 2.1ms
                    </div>
                    <div>
                      <span className="text-slate-500">[14:02:30]</span> [INFO] Energy telemetry
                      payload parsed: {"{ kw_usage: 148.5, phase: A }"}
                    </div>
                    <div>
                      <span className="text-slate-500">[14:02:45]</span> [CRON] Triggered predictive
                      maintenance calculation. Fail rate: <span className="text-emerald-400">0.002%</span>
                    </div>
                    <div className="animate-pulse text-blue-400 mt-2">
                      &gt; Listening for incoming PLC/SCADA sockets...
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                          Core Languages
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["Golang", "PHP", "C#", "SQL", "Python"].map((l) => (
                            <span
                              key={l}
                              className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/50 hover:bg-slate-750 transition-colors"
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                          Core Databases
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["MySQL", "PostgreSQL", "SQL Server", "MongoDB"].map((d) => (
                            <span
                              key={d}
                              className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/50 hover:bg-slate-750 transition-colors"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                        DevOps & Services
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Docker", "Linux OS", "IIS / Nginx", "MQTT", "REST API"].map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700/50 hover:bg-slate-750 transition-colors"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer text */}
                <div className="border-t border-slate-800 pt-3 mt-4 text-[10px] text-slate-500 flex justify-between">
                  <span>SYSTEM: OK</span>
                  <span>NODE: ACTIVE</span>
                  <span>HOST: IP_192.168.1.15</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Key Strengths Cards */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-1">
              Engineering Pillars
            </h2>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              Specialized Competency Profile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Server className="text-blue-600" size={24} />,
                title: "Enterprise Architecture",
                desc: "Designing highly-available systems with strong data consistency, transactional integrity, and automated workflow orchestrations.",
              },
              {
                icon: <Cpu className="text-blue-600" size={24} />,
                title: "Industrial Digitalization",
                desc: "Connecting traditional manufacturing equipment, PLCs, and factory processes with modern database networks and management apps.",
              },
              {
                icon: <Activity className="text-blue-600" size={24} />,
                title: "Real-time Monitoring",
                desc: "Building low-latency telemetry pipelines and analytics dashboards for energy tracking, predictive diagnostics, and issue escalation.",
              },
              {
                icon: <Database className="text-blue-600" size={24} />,
                title: "Backend Development",
                desc: "Highly competent in Golang, C#, and PHP (Laravel), focusing on API optimization, queue managers, and schema designs.",
              },
            ].map((strength, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200/80 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(strength.icon as React.ReactElement<{ className?: string }>, {
                        className: "group-hover:text-white text-blue-600 transition-colors duration-300"
                      })}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
