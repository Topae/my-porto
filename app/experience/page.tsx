import React from "react";
import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Mustofa Khoirudin",
  description: "View the software engineering employment history and industrial project contributions of Mustofa Khoirudin.",
};

export default function ExperiencePage() {
  return <Experience />;
}
