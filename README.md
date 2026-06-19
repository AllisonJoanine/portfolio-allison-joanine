# Allison Joanine Portfolio

Portfólio premium de Allison Joanine, criado com React, Vite, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Framer Motion e Lucide React.

Site publicado: https://allisonjoanine.github.io/portfolio-allison-joanine/

## Experiência

- Hero comercial com CTAs para projetos, contato e currículo.
- Narrativa por scroll em `ScrollVideoStory`, com vídeo controlado pelo progresso da página.
- Fallback visual para mobile, vídeo indisponível e `prefers-reduced-motion`.
- Seções fortes para About, Stack, Infraestrutura, LogiGuard, BladeWise AI, Projetos, Processo, Impacto e Contato.
- Cards responsivos, menu mobile, botão de voltar ao topo, SEO e metatags Open Graph.

## Estrutura

```txt
src/
  components/
  data/
  hooks/
  styles/
  App.tsx
  main.tsx
public/
  assets/
  videos/
```

O vídeo principal do scrolltelling deve ficar em:

```txt
public/videos/portfolio-scroll.mp4
```

O projeto também usa:

```txt
public/videos/portfolio-scroll-poster.jpg
public/assets/Allison_Joanine_CV.pdf
public/assets/favicon.svg
```

## Rodando localmente

```bash
npm install
npm run dev
```

Por padrão o Vite abre o projeto em um servidor local. Para testar o build final:

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

Depois publica a pasta `dist` no GitHub Pages. Se necessário, em Settings > Pages, selecione `GitHub Actions` como origem da publicação.

## Contato

- WhatsApp: https://wa.me/5515991192202
- LinkedIn: https://www.linkedin.com/in/allison-joanine-ti
- GitHub: https://github.com/allisonjoanine
- E-mail profissional: allisonjoanineofficial@gmail.com
- E-mail LogiCodem: logicodem@gmail.com
