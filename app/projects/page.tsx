import React from "react";
import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mustofa Khoirudin",
  description: "Explore the enterprise procurement, real-time monitoring, and industrial IoT systems designed by Mustofa Khoirudin.",
};

export default function ProjectsPage() {
  return <Projects />;
}
