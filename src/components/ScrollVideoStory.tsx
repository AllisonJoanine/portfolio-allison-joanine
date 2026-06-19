import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Boxes,
  BrainCircuit,
  Cable,
  CircleCheckBig,
  Code2,
  Cpu,
  DatabaseZap,
  Layers3,
  Rocket,
  ScanFace,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from "lucide-react";
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

const storySignals = [
  { label: "Suporte real", value: "usuarios, incidentes e operacao", icon: Users },
  { label: "Ambiente seguro", value: "VPN, firewall, AD e permissoes", icon: ShieldCheck },
  { label: "Produto publicado", value: "frontend, backend, banco e deploy", icon: Rocket },
  { label: "IA aplicada", value: "visao, automacao e dados", icon: BrainCircuit }
];

const deliveryLayers = [
  { title: "Descoberta", text: "Entendo a dor, o fluxo atual e o que precisa virar sistema.", icon: ScanFace },
  { title: "Arquitetura", text: "Organizo dados, permissoes, APIs, telas e caminho de deploy.", icon: Layers3 },
  { title: "Construcao", text: "Crio a experiencia completa com codigo limpo e foco em uso real.", icon: Code2 },
  { title: "Operacao", text: "Penso em manutencao, seguranca, performance e melhoria continua.", icon: ServerCog }
];

const proofPoints = [
  { value: "Full Stack", label: "interface, API e banco conectados", icon: Boxes },
  { value: "Infra", label: "visao pratica de ambiente corporativo", icon: Cable },
  { value: "Security", label: "acessos, riscos e rastreabilidade", icon: CircleCheckBig },
  { value: "AI", label: "inteligencia onde gera resultado", icon: Sparkles }
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
  const shouldRenderVideo = videoAvailable && !shouldSimplify;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video || shouldSimplify) {
      return undefined;
    }

    let ctx: gsap.Context | undefined;
    const playVideo = () => {
      video.playbackRate = 0.82;
      void video.play().catch(() => setVideoAvailable(false));
    };
    const pauseVideo = () => video.pause();

    const setup = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      if (!duration) return;

      video.currentTime = 0;
      playVideo();

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onEnter: playVideo,
          onEnterBack: playVideo,
          onLeave: pauseVideo,
          onLeaveBack: pauseVideo
        });

        gsap.utils.toArray<HTMLElement>(".story-step").forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, y: 38 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 78%",
                end: "bottom 46%",
                scrub: 0.35
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
      pauseVideo();
      ctx?.revert();
    };
  }, [shouldSimplify]);

  const visualLabel = useMemo(() => {
    if (!videoAvailable) return "Fallback visual ativo";
    if (isMobile) return "Mobile simplificado";
    if (prefersReducedMotion) return "Movimento reduzido";
    return "Video fluido ativo";
  }, [isMobile, prefersReducedMotion, videoAvailable]);

  return (
    <section className={`scroll-story ${shouldSimplify ? "is-simplified" : ""}`} ref={containerRef} aria-labelledby="story-title">
      <div className="story-visual" ref={visualRef} aria-hidden="true">
        {shouldRenderVideo ? (
          <video
            ref={videoRef}
            className="story-video"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
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

        <div className="story-step story-wide story-signal-board premium-card">
          <div>
            <p className="eyebrow">O que aparece no video</p>
            <h3>Um mapa visual da minha forma de construir.</h3>
            <p>
              O fundo deixa de ser apenas decoracao: ele acompanha a evolucao de suporte, infraestrutura,
              desenvolvimento, IA e produto final.
            </p>
          </div>
          <div className="story-signal-grid">
            {storySignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.label}>
                  <Icon size={22} aria-hidden="true" />
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </article>
              );
            })}
          </div>
        </div>

        <div className="story-step story-wide story-layer-flow">
          <div className="story-flow-heading">
            <p className="eyebrow">Pipeline LogiCodem</p>
            <h3>Da conversa inicial ao sistema rodando.</h3>
          </div>
          <div className="story-layer-grid">
            {deliveryLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <article className="premium-card" key={layer.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={23} aria-hidden="true" />
                  <strong>{layer.title}</strong>
                  <p>{layer.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="story-step story-wide story-proof-strip" aria-label="Pontos fortes antes do sobre mim">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
            <article key={point.value}>
              <Icon size={22} aria-hidden="true" />
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
            );
          })}
        </div>

        <article className="story-step story-wide story-handoff premium-card">
          <div>
            <p className="eyebrow">Agora sim</p>
            <h3>Com esse contexto, o Sobre mim entra mais forte.</h3>
            <p>
              A proxima secao explica de onde vem essa combinacao de codigo, infraestrutura, seguranca e IA:
              experiencia real, projetos reais e vontade de transformar problema em produto.
            </p>
          </div>
          <a className="button primary" href="#about">
            Ir para Sobre mim <Zap size={18} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
