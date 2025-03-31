import Skills from "@/components/main/Skills";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import Contact from "../components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[800px] gap-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
