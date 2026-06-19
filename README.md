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
public/videos/portfolio-background.mp4
```

O poster/fallback fica em:

```txt
public/videos/portfolio-background-poster.jpg
```

Como o site é publicado em GitHub Pages dentro de um subdiretório, os caminhos no HTML são relativos para funcionar corretamente em `https://allisonjoanine.github.io/portfolio-allison-joanine/`.

O vídeo é sincronizado com as seções principais por atributos `data-video-start` e `data-video-end` no HTML:

- Hero: 0s - 1.5s
- About: 1.5s - 3s
- Tech Stack: 3s - 4.7s
- Infraestrutura e Segurança: 4.7s - 5.5s
- LogiGuard: 5.5s - 6.5s
- BladeWise AI: 6.5s - 7.7s
- Projects: 7.7s - 9.3s
- Contact: 9.3s - 10s

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
