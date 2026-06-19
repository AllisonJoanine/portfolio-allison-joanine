import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, Code2, Cpu, DatabaseZap, ShieldCheck, Workflow } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    title: "Base em TI real",
    text: "Antes do codigo, veio a rotina corporativa: suporte, usuarios, permissoes, redes, servidores e operacao.",
    icon: Cpu
  },
  {
    title: "Desenvolvimento Full Stack",
    text: "Transformo necessidades em interfaces, APIs, bancos de dados e produtos publicados.",
    icon: Code2
  },
  {
    title: "Infraestrutura e seguranca",
    text: "Crio pensando em ambiente real: VPN, firewall, Microsoft 365, Active Directory e governanca.",
    icon: ShieldCheck
  },
  {
    title: "IA aplicada",
    text: "Uso IA para automatizar, reconhecer padroes, analisar imagens e apoiar decisoes.",
    icon: BrainCircuit
  },
  {
    title: "Produtos reais",
    text: "A entrega precisa funcionar, ser clara para o usuario e gerar impacto concreto.",
    icon: DatabaseZap
  },
  {
    title: "LogiCodem",
    text: "Inteligencia aplicada ao codigo como marca de solucoes digitais sob medida.",
    icon: Workflow
  }
];

export function ScrollVideoStory() {
  const containerRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoSrc = `${import.meta.env.BASE_URL}videos/portfolio-scroll.mp4`;
  const posterSrc = `${import.meta.env.BASE_URL}videos/portfolio-scroll-poster.jpg`;

  const shouldSimplify = prefersReducedMotion || isMobile || !videoAvailable;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const visual = visualRef.current;
    const video = videoRef.current;

    if (!container || !visual || !video || shouldSimplify) {
      return undefined;
    }

    let ctx: gsap.Context | undefined;
    const setup = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (!duration) return;

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: visual,
          pinSpacing: false,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            try {
              video.currentTime = self.progress * Math.max(0, duration - 0.05);
            } catch {
              setVideoAvailable(false);
            }
          }
        });

        gsap.utils.toArray<HTMLElement>(".story-step").forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, y: 44, filter: "blur(14px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 72%",
                end: "bottom 42%",
                scrub: true
              }
            }
          );
        });
      }, container);
    };

    if (video.readyState >= 1) {
      setup();
    } else {
      video.addEventListener("loadedmetadata", setup, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", setup);
      ctx?.revert();
    };
  }, [shouldSimplify]);

  const visualLabel = useMemo(() => {
    if (!videoAvailable) return "Fallback visual ativo";
    if (isMobile) return "Mobile simplificado";
    if (prefersReducedMotion) return "Movimento reduzido";
    return "ScrollTrigger ativo";
  }, [isMobile, prefersReducedMotion, videoAvailable]);

  return (
    <section className={`scroll-story ${shouldSimplify ? "is-simplified" : ""}`} ref={containerRef} aria-labelledby="story-title">
      <div className="story-visual" ref={visualRef} aria-hidden="true">
        {videoAvailable ? (
          <video
            ref={videoRef}
            className="story-video"
            src={videoSrc}
            poster={posterSrc}
            muted
            playsInline
            preload="auto"
            onError={() => setVideoAvailable(false)}
          />
        ) : null}
        <div className="story-fallback" />
        <div className="story-visual-overlay" />
        <div className="story-status">{visualLabel}</div>
      </div>

      <div className="story-copy section-shell">
        <div className="story-intro story-step">
          <p className="eyebrow">Scrolltelling</p>
          <h2 id="story-title">Da base tecnica ao produto inteligente.</h2>
          <p>
            Uma narrativa visual sobre como minha experiencia conecta operacao real, codigo, infraestrutura,
            seguranca e inteligencia artificial.
          </p>
        </div>

        {storySteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="story-step premium-card" key={step.title}>
              <span className="story-index">{String(index + 1).padStart(2, "0")}</span>
              <Icon size={28} aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
