'use client'

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* <AnimatePresence initial={false} mode="popLayout"> */}
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">

          <Header />

          <section id="hero" className="snap-start scroll-smooth">
            <Hero />
          </section>

          <section id="about" className="snap-center scroll-smooth">
            <About />
          </section>

        </div>
      {/* </AnimatePresence> */}
    </>
  )
}
