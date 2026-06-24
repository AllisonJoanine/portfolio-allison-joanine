import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import { Timeline } from "./components/Timeline";
import { useButtonChoreography } from "./hooks/useButtonChoreography";
import { useGsapReveal } from "./hooks/useGsapReveal";

export default function App() {
  useGsapReveal();
  useButtonChoreography();

  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
