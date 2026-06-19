import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const phrases = [
  "Tecnologia so faz sentido quando resolve problemas reais.",
  "IA aplicada de verdade.",
  "Do suporte a arquitetura.",
  "Da ideia ao sistema publicado.",
  "Codigo, infraestrutura e inteligencia no mesmo fluxo."
];

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".impact-phrase");
      gsap.set(words, { autoAlpha: 0, y: 30, scale: 0.98 });
      gsap.set(words[0], { autoAlpha: 1, y: 0, scale: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: true,
          anticipatePin: 1
        }
      });

      words.forEach((word, index) => {
        timeline.to(words, { autoAlpha: 0, y: -24, scale: 0.96, duration: 0.2 }, index);
        timeline.to(word, { autoAlpha: 1, y: 0, scale: 1, duration: 0.36 }, index + 0.08);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="impact-section" ref={sectionRef} aria-label="Frases de impacto">
      <p className="eyebrow">Impacto</p>
      <div className="impact-stage">
        {phrases.map((phrase) => (
          <span className="impact-phrase" key={phrase}>
            {phrase}
          </span>
        ))}
      </div>
    </section>
  );
}
