import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  ["Sobre", "#about"],
  ["Projetos", "#projects"],
  ["Stack", "#skills"],
  ["Experiência", "#experience"],
  ["Jornada", "#timeline"],
  ["Contato", "#contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="home-link" href="#home" aria-label="Voltar ao início" onClick={() => setOpen(false)}>
          <Home size={23} strokeWidth={2.25} aria-hidden="true" />
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`} id="main-navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-tools">
          <ThemeToggle />
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-controls="main-navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
