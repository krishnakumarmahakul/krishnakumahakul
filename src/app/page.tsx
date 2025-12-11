import { Navbar } from "./components/Navbar";
import { SkillsSection } from "./skills/page";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600">Your intro content here</p>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
          {/* Experience content */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          {/* Projects content */}
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Blogs</h2>
          {/* Blogs content */}
        </div>
      </section>
    </>
  );
}
