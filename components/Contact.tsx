"use client";

import React from "react";
import { Mail, Github, Linkedin, MapPin, Clock, Briefcase, Languages, MessageSquareCode, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-slate-50/30 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative backdrop glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-12 border-b border-slate-100 pb-6 text-left">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Contact
          </h1>
          <p className="mt-2 text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Get In Touch & Collaboration Channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/50 space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Direct Channels
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Have an enterprise system requirement, digitalization project, or integration challenge? Get in touch directly.
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Mail size={16} />,
                    title: "Email Address",
                    value: (
                      <a
                        href="mailto:mustofakhoirudin5157@gmail.com"
                        className="text-slate-500 hover:text-blue-600 transition-colors font-medium break-all"
                      >
                        mustofakhoirudin5157@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin size={16} />,
                    title: "Primary Location",
                    value: <span className="text-slate-500 font-medium">Jakarta / Karawang, Indonesia (Remote Friendly)</span>,
                  },
                  {
                    icon: <Briefcase size={16} />,
                    title: "Work Availability",
                    value: <span className="text-slate-500 font-medium">Full-time Roles / Consulting</span>,
                  },
                  {
                    icon: <Languages size={16} />,
                    title: "Languages",
                    value: <span className="text-slate-500 font-medium">Bahasa Indonesia (Native), English (Professional)</span>,
                  },
                  {
                    icon: <Clock size={16} />,
                    title: "Average Response Time",
                    value: <span className="text-slate-500 font-medium">Within 24 Hours</span>,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3.5 text-sm p-2 rounded-lg hover:bg-slate-50/50 transition-all duration-300 border border-transparent hover:border-slate-100 group">
                    <div className="mt-0.5 shrink-0 h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block text-xs uppercase tracking-wider">{item.title}</span>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Professional Networks
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/mustofa-khoirudin-335a0a341"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-semibold group"
                  >
                    <Linkedin size={16} className="text-slate-450 group-hover:text-blue-600 transition-colors" />
                    <span>linkedin.com/in/mustofa-khoirudin-335a0a341</span>
                  </a>
                  <a
                    href="https://github.com/Topae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-semibold group"
                  >
                    <Github size={16} className="text-slate-450 group-hover:text-blue-600 transition-colors" />
                    <span>github.com/Topae</span>
                  </a>
                  <a
                    href="https://www.instagram.com/aku.hobby.mu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-semibold group"
                  >
                    <Instagram size={16} className="text-slate-450 group-hover:text-blue-600 transition-colors" />
                    <span>instagram.com/aku.hobby.mu</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Consultation Profiles (Right Column) */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in animate-delay-100">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-slate-100/50 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Inquiry Guidelines & Scope
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  To ensure a productive discussion, please review the categories below for reaching out regarding recruitment, consulting, or general collaborations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Briefcase size={18} className="text-blue-650" />,
                    title: "Recruitment & Hiring",
                    desc: "Interested in adding me to your engineering team? I am available for senior backend development, enterprise workflow design, and digitalization roles. Please include remote work arrangements or location criteria in your inquiry.",
                  },
                  {
                    icon: <MessageSquareCode size={18} className="text-blue-650" />,
                    title: "Technical Consultations",
                    desc: "Need assistance with industrial IoT networks, database schema optimization, or web dashboard architecture (Nest.js/Next.js/Laravel)? Let's map your operational floor requirements and discuss phased system rollouts.",
                  },
                ].map((profile, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-50/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {profile.icon}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {profile.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {profile.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engagement note */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 leading-relaxed">
                <strong>Preferred Method:</strong> Direct email inquiry is preferred. Please specify project timelines, technology stacks, or operational scopes to help accelerate response coordination.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
