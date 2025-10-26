import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Research from "@/components/Research";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Research />
        <Projects />
        <Blog />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}