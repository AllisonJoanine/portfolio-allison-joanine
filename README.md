# Allison Joanine Portfolio

Portfólio de Allison Joanine, desenvolvido com React, Vite, TypeScript, Tailwind CSS, GSAP, @gsap/react, Lenis, SplitType, Radix UI e Lucide React.

Site publicado: https://allisonjoanine.github.io/portfolio-allison-joanine/

## Experiência

- Hero autoral com animação de título usando SplitType + GSAP.
- CTAs com formato próprio, cantos recortados e microinterações via @gsap/react.
- Scroll suave com Lenis, respeitando `prefers-reduced-motion`.
- Seções para Sobre, Projetos em destaque, Experiência técnica, Linha do tempo e Contato.
- Projetos apresentados em blocos diferentes para LogiGuard, City Votorantim e Predicta.
- Componentes acessíveis com Radix UI para abas técnicas e tooltips de contato.
- Tema escuro com textura sutil, linhas, microinterações e layout responsivo.

## Estrutura

```txt
src/
  components/
    AnimatedText.tsx
    SmoothScrollProvider.tsx
    SectionHeader.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Timeline.tsx
    Contact.tsx
  data/
  hooks/
  styles/
  App.tsx
  main.tsx
public/
  assets/
```

## Rodando localmente

```bash
npm install
npm run dev
```

Para testar o build final:

```bash
npm run build
npm run preview
```

## GitHub Pages

O Vite está configurado com:

```ts
base: "/portfolio-allison-joanine/"
```

A publicação é feita pelo workflow `.github/workflows/pages.yml`. Ao fazer push na branch `main`, o GitHub Actions roda:

```bash
npm ci
npm run build
```

Depois publica a pasta `dist` no GitHub Pages. Em Settings > Pages, a origem deve continuar como `GitHub Actions`.

## Contato

- WhatsApp: https://wa.me/5515991192202
- LinkedIn: https://www.linkedin.com/in/allison-joanine-ti
- GitHub: https://github.com/allisonjoanine
- E-mail profissional: allisonjoanineofficial@gmail.com
