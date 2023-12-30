//Componentes
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
