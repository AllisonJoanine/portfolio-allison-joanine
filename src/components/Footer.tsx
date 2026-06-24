import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Allison Joanine</strong>
        <span>Full Stack, infraestrutura, segurança de TI e inteligência artificial aplicada.</span>
      </div>
      <a href="#home" aria-label="Voltar ao topo">
        Voltar ao topo <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </footer>
  );
}
