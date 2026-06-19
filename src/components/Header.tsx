import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Infra", "#infra"],
  ["LogiGuard", "#logiguard"],
  ["BladeWise", "#bladewise"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegacao principal">
        <a className="brand" href="#home" aria-label="Voltar ao inicio" onClick={() => setOpen(false)}>
          <span>AJ</span>
          <strong>Allison Joanine</strong>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`} id="main-navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Contratar
        </a>
      </nav>
    </header>
  );
}
