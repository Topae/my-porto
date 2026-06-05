import React from "react";
import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mustofa Khoirudin",
  description: "Learn more about Mustofa Khoirudin's specialization in enterprise system design and industrial digitalization solutions.",
};

export default function AboutPage() {
  return <About />;
}
