//Componentes
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Cta />
    </main>
  );
}
