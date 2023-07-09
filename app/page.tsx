'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      {/* <AnimatePresence initial={false} mode="popLayout"> */}
        <div className="bg-[rgb(36,36,36)] text-white h-screen 
        scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 
        snap-y snap-mandatory overflow-y-scroll oveerflow-x-hidden z-0">

          <Header />

          <section id="hero" className="snap-start scroll-smooth">
            <Hero />
          </section>

          <section id="about" className="snap-center scroll-smooth">
            <About />
          </section>

          <section id="experience" className="snap-center scroll-smooth">
            <ProfessionalExperience />
          </section>

          <section id="skills" className="snap-start scroll-smooth">
            <Skills />
          </section>

          <section id="showcase" className="snap-start scroll-smooth">
            <Showcase />
          </section>

          <section id="contact" className="snap-start scroll-smooth">
            <Contact />
          </section>

        </div>
      {/* </AnimatePresence> */}
    </>
  )
}
