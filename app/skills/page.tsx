import React from "react";
import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Mustofa Khoirudin",
  description: "Browse Mustofa Khoirudin's verified programming languages, frameworks, databases, and devops toolsets.",
};

export default function SkillsPage() {
  return <Skills />;
}
