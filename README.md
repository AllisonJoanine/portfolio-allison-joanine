# Allison Joanine Portfolio

Portfólio profissional de Allison Joanine de Araujo Ribeiro, desenvolvido como site estático para GitHub Pages.

## Conteúdo

- Página única responsiva
- Modo claro/escuro
- Vídeo de fundo sincronizado com scroll
- Filtros de projetos
- Animações suaves
- Botões funcionais de contato
- Download de currículo em PDF
- Publicação via GitHub Pages

## Vídeo de fundo

O vídeo usado como fundo interativo fica em:

```txt
public/videos/portfolio-scroll.mp4
```

`public/videos/portfolio-background.mp4` foi mantido como cópia original.

O poster/fallback fica em:

```txt
public/videos/portfolio-scroll-poster.jpg
```

Como o site é publicado em GitHub Pages dentro de um subdiretório, os caminhos no HTML são relativos para funcionar corretamente em `https://allisonjoanine.github.io/portfolio-allison-joanine/`.

O vídeo é sincronizado com as seções principais por GSAP + ScrollTrigger quando disponível, com fallback manual via `requestAnimationFrame`. Os tempos ficam nos atributos `data-video-start` e `data-video-end` no HTML:

- Hero: 0s - 1.5s
- About: 1.5s - 3s
- Tech Stack: 3s - 4.7s
- Infraestrutura e Segurança: 4.7s - 5.5s
- LogiGuard: 5.5s - 6.4s
- BladeWise AI: 6.4s - 7.3s
- Projects: 7.3s - 8.5s
- Process: 8.5s - 9.2s
- Keywords: 9.2s - 9.6s
- Contact: 9.6s - 10s

## Links

- Site: https://allisonjoanine.github.io/portfolio-allison-joanine/
- GitHub: https://github.com/allisonjoanine
- LinkedIn: https://www.linkedin.com/in/allison-joanine-de-araujo-ribeiro-404996258
- YouTube: https://www.youtube.com/@ClariCodeSolutions
- E-mail: allisonjoanine@gmail.com

## Rodando localmente

Abra o `index.html` no navegador ou rode um servidor estático simples:

```bash
python -m http.server 5500
```
