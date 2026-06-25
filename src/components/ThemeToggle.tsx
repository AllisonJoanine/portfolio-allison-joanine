import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isLight = theme === "light";

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isLight ? "Ativar modo escuro" : "Ativar modo claro"}
      aria-pressed={isLight}
      onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isLight ? <Sun size={17} /> : <Moon size={17} />}
      </span>
      <span className="theme-toggle__label">{isLight ? "Light" : "Dark"}</span>
    </button>
  );
}
