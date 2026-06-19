import { About } from "./components/About";
import { BladeWiseSection } from "./components/BladeWiseSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ImpactSection } from "./components/ImpactSection";
import { Infrastructure } from "./components/Infrastructure";
import { LogiGuardSection } from "./components/LogiGuardSection";
import { Projects } from "./components/Projects";
import { ScrollVideoStory } from "./components/ScrollVideoStory";
import { TechStack } from "./components/TechStack";
import { WorkProcess } from "./components/WorkProcess";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollVideoStory />
        <About />
        <TechStack />
        <Infrastructure />
        <LogiGuardSection />
        <BladeWiseSection />
        <Projects />
        <WorkProcess />
        <ImpactSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
