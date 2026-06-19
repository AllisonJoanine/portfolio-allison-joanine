import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Allison Joanine</strong>
        <span>LogiCodem - Inteligencia aplicada ao codigo.</span>
      </div>
      <a href="#home" aria-label="Voltar ao topo">
        <ArrowUp size={18} /> Voltar ao topo
      </a>
    </footer>
  );
}
