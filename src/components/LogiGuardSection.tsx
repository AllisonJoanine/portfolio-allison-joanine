const techs = ["React", "TypeScript", ".NET", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenCV", "InsightFace", "SignalR"];

export function LogiGuardSection() {
  const dashboardImage = `${import.meta.env.BASE_URL}assets/showcase/logiguard-dashboard.png`;
  const landingImage = `${import.meta.env.BASE_URL}assets/showcase/logiguard-landing.png`;

  return (
    <section className="section-shell product-section logiguard-section" id="logiguard">
      <div className="product-copy">
        <p className="eyebrow">Projeto principal de IA</p>
        <h2>LogiGuard transforma cameras comuns em seguranca inteligente.</h2>
        <p>
          LogiGuard e uma plataforma de seguranca com IA criada para transformar cameras comuns em um sistema
          inteligente de identificacao, eventos e alertas em tempo real.
        </p>
        <div className="chip-row">
          {techs.map((tech) => (
            <b key={tech}>{tech}</b>
          ))}
        </div>
        <a className="button primary" href="https://logiguardproduct.com" target="_blank" rel="noreferrer">
          Conhecer LogiGuard
        </a>
      </div>

      <div className="product-gallery premium-card logiguard-gallery" aria-label="Imagens reais do LogiGuard">
        <div className="showcase-label">
          <span>Produto real</span>
          <strong>Dashboard operacional</strong>
        </div>
        <div className="showcase-window is-dashboard">
          <img src={dashboardImage} alt="Dashboard real do LogiGuard com validacao facial e alertas" loading="lazy" />
        </div>
        <div className="showcase-duo">
          <article>
            <img src={landingImage} alt="Landing page comercial do LogiGuard" loading="lazy" />
            <div>
              <strong>Pagina de venda</strong>
              <span>Oferta comercial para demonstracao e contato.</span>
            </div>
          </article>
          <article>
            <strong>IA + seguranca</strong>
            <span>Reconhecimento facial, eventos, cameras e alertas em tempo real em uma experiencia unica.</span>
          </article>
        </div>
      </div>
    </section>
  );
}
