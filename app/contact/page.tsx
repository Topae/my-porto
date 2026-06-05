import React from "react";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mustofa Khoirudin",
  description: "Send a system integration inquiry or get in touch directly with Mustofa Khoirudin.",
};

export default function ContactPage() {
  return <Contact />;
}
