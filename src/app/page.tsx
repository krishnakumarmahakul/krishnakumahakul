import FrontPage from "@/components/layout/FrontPage";
import Hero from "@/components/layout/Hero";
import Header from "@/components/layout/Header";

import { SkillsBento } from "@/components/layout/SkillsBento";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <div className="min-h-screen">
          <FrontPage />
        </div>
      </section>

      <main>
        <Hero />
      </main>
      <section id="skills" className="min-h-screen ">
        <div className="max-w-full">
          <SkillsBento />
        </div>
      </section>
      
      <section id="experience" className="min-h-screen py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            Academics & Experience
          </h2>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12">
            Contact Me
          </h2>
        </div>
      </section>
    </>
  );
}
