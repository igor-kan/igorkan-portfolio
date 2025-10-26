import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}