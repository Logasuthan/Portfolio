"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <ProjectsGrid />
      <ContactForm/>
      </main>
    </div>
  );
}
