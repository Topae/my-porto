import React from "react";
import Link from "next/link";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Cpu size={16} />
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Mustofa Khoirudin
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Software Engineer specializing in enterprise systems and industrial digitalization. Designing systems connecting business operations with real-time operational data.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Topae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-115"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mustofa-khoirudin-335a0a341"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-115"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mustofakhoirudin5157@gmail.com"
                className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-115"
                aria-label="Email Address"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Skills", href: "/skills" },
                { label: "Experience", href: "/experience" },
                { label: "Projects", href: "/projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-slate-900 hover:translate-x-0.5 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
              Contact info
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-500">
                Email:{" "}
                <a
                  href="mailto:mustofakhoirudin5157@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  mustofakhoirudin5157@gmail.com
                </a>
              </li>
              <li className="text-sm text-slate-500">Location: Indonesia</li>
              <li className="text-sm text-slate-500">Availability: Full-time / Projects</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Mustofa Khoirudin. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-400">Built with Next.js & Tailwind CSS</span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs text-slate-400">Enterprise Standard UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
