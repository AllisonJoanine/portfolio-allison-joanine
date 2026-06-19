const root = document.documentElement;
root.classList.add("js-enabled");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#mainNav");
const scrollProgress = document.querySelector("#scrollProgress");
const toast = document.querySelector("#toast");
const typewriter = document.querySelector("#typewriter");
const scrollVideos = [...document.querySelectorAll(".scroll-controlled-video")];
const scrollVideo = document.querySelector("#portfolio-scroll-video") || scrollVideos[0];

const typingPhrases = [
  "AI Applied to Real Problems",
  "Full Stack Products",
  "Computer Vision & Automation",
  "Infrastructure + Security Mindset",
  "Web, Mobile, APIs and Deploy"
];

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeToggle.textContent = theme === "dark" ? "Claro" : "Escuro";
}

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme || "dark");

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open", !expanded);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const phrase = typingPhrases[phraseIndex];
  const visible = phrase.slice(0, charIndex);
  typewriter.textContent = visible || " ";

  if (!deleting && charIndex < phrase.length) {
    charIndex += 1;
    setTimeout(typeLoop, 58);
    return;
  }

  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    setTimeout(typeLoop, 1300);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeLoop, 30);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % typingPhrases.length;
  setTimeout(typeLoop, 250);
}

typeLoop();

function initScrollVideoBackground() {
  if (!scrollVideo) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const videoScenes = [...document.querySelectorAll("[data-video-start][data-video-end]")].map((section) => ({
    section,
    start: Number(section.dataset.videoStart),
    end: Number(section.dataset.videoEnd)
  })).filter((scene) => Number.isFinite(scene.start) && Number.isFinite(scene.end));
  const state = {
    duration: 0,
    ready: false,
    ticking: false,
    lastTime: -1,
    disabled: prefersReducedMotion.matches,
    gsapReady: false,
    scrollTrigger: null
  };

  function maxScrollTop() {
    return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  function scrollRatio() {
    return Math.min(1, Math.max(0, window.scrollY / maxScrollTop()));
  }

  function sceneMappedTime() {
    if (!videoScenes.length) {
      return scrollRatio() * state.duration;
    }

    if (window.scrollY <= 2) {
      return 0;
    }

    if (window.scrollY >= maxScrollTop() - 2) {
      return state.duration;
    }

    const anchor = window.scrollY + window.innerHeight * 0.48;
    let activeScene = videoScenes[0];

    for (const scene of videoScenes) {
      if (anchor >= scene.section.offsetTop) {
        activeScene = scene;
      }
    }

    const sectionTop = activeScene.section.offsetTop;
    const sectionHeight = Math.max(1, activeScene.section.offsetHeight);
    const localProgress = Math.min(1, Math.max(0, (anchor - sectionTop) / sectionHeight));
    const sceneTime = activeScene.start + (activeScene.end - activeScene.start) * localProgress;
    const normalizedDuration = state.duration / 10;

    return sceneTime * normalizedDuration;
  }

  function syncVideoToScroll() {
    state.ticking = false;

    if (state.disabled || !state.ready || !Number.isFinite(state.duration) || state.duration <= 0) {
      return;
    }

    const nextTime = sceneMappedTime();

    if (!Number.isFinite(nextTime) || Math.abs(nextTime - state.lastTime) < 0.045) {
      return;
    }

    try {
      const maxTime = Math.max(0, state.duration - 0.02);
      const clampedTime = Math.min(maxTime, Math.max(0, nextTime));
      scrollVideos.forEach((video) => {
        if (video.readyState >= 1) {
          video.currentTime = clampedTime;
        }
      });
      state.lastTime = nextTime;
    } catch {
      document.body.classList.add("video-error");
    }
  }

  function requestVideoSync() {
    if (state.disabled || state.ticking) return;
    state.ticking = true;
    window.requestAnimationFrame(syncVideoToScroll);
  }

  function setReducedMotion(matches) {
    state.disabled = matches;
    document.body.classList.toggle("reduced-motion", matches);
    if (matches) {
      try {
        scrollVideos.forEach((video) => {
          video.pause();
          if (video.readyState >= 1) {
            video.currentTime = 0;
          }
        });
      } catch {
        document.body.classList.add("video-error");
      }
    } else {
      requestVideoSync();
    }
  }

  scrollVideos.forEach((video) => {
    video.muted = true;
    video.playsInline = true;
    video.pause();
  });
  setReducedMotion(prefersReducedMotion.matches);

  function handleLoadedMetadata() {
    state.duration = scrollVideo.duration;
    state.ready = Number.isFinite(state.duration) && state.duration > 0;
    document.body.classList.toggle("video-ready", state.ready);
    initGsapScrollVideo();
    requestVideoSync();
  }

  function initGsapScrollVideo() {
    if (state.gsapReady || state.disabled || !state.ready || !window.gsap || !window.ScrollTrigger) {
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    state.gsapReady = true;
    state.scrollTrigger = window.ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: () => syncVideoToScroll()
    });
  }

  scrollVideos.forEach((video) => {
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", () => {
      document.body.classList.add("video-error");
    });
  });

  if (prefersReducedMotion.addEventListener) {
    prefersReducedMotion.addEventListener("change", (event) => setReducedMotion(event.matches));
  } else if (prefersReducedMotion.addListener) {
    prefersReducedMotion.addListener((event) => setReducedMotion(event.matches));
  }

  window.addEventListener("scroll", requestVideoSync, { passive: true });
  window.addEventListener("resize", requestVideoSync, { passive: true });
  window.addEventListener("orientationchange", requestVideoSync, { passive: true });

  scrollVideos.forEach((video) => video.load());
  if (scrollVideo.readyState >= 1) {
    handleLoadedMetadata();
  }
  requestVideoSync();
}

initScrollVideoBackground();

function initGsapStoryAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) {
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("[data-reveal]").forEach((element) => {
    gsap.fromTo(element, {
      autoAlpha: 0,
      y: 34,
      filter: "blur(12px)"
    }, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 82%",
        once: true
      }
    });
  });

  gsap.utils.toArray(".process-timeline article").forEach((item, index) => {
    gsap.fromTo(item, {
      boxShadow: "0 28px 90px rgba(0, 0, 0, 0.34)"
    }, {
      boxShadow: "0 34px 120px rgba(0, 0, 0, 0.44), 0 0 54px rgba(34, 211, 238, 0.18)",
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: `top ${78 - index * 2}%`,
        toggleActions: "play none none reverse"
      }
    });
  });

  const keywordSection = document.querySelector("#keywords");
  const keywordStage = document.querySelector(".keyword-stage");
  const words = gsap.utils.toArray(".keyword-words span");

  if (keywordSection && keywordStage && words.length) {
    gsap.set(words, { autoAlpha: 0, y: 28, scale: 0.96 });
    gsap.set(words[0], { autoAlpha: 1, y: 0, scale: 1 });

    const keywordTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: keywordSection,
        start: "top top",
        end: "+=160%",
        scrub: true,
        pin: keywordStage,
        anticipatePin: 1
      }
    });

    words.forEach((word, index) => {
      keywordTimeline.to(words, {
        autoAlpha: 0,
        y: -20,
        scale: 0.96,
        duration: 0.22,
        ease: "power2.out"
      }, index);
      keywordTimeline.to(word, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.34,
        ease: "power3.out"
      }, index + 0.08);
    });
  }
}

window.addEventListener("load", initGsapStoryAnimations);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll("[data-reveal]").forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll("section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

function updateScrollState() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;

  const current = sections
    .filter((section) => scrollTop >= section.offsetTop - 140)
    .pop();

  navItems.forEach((item) => {
    item.classList.toggle("active", current && item.getAttribute("href") === `#${current.id}`);
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".project-card").forEach((card) => {
      const categories = card.dataset.category || "";
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !show);
    });
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast(`${value} copiado para a área de transferência.`);
    } catch {
      showToast(value);
    }
  });
});
