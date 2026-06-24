import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(useGSAP);

export function useButtonChoreography() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

      const actions = gsap.utils.toArray<HTMLElement>(".craft-button, .contact-button, .text-link");
      const cleanups: Array<() => void> = [];

      actions.forEach((action) => {
        const mark = action.querySelector<HTMLElement>(".craft-button__mark, .contact-button__icon, .text-link__mark");
        const label = action.querySelector<HTMLElement>(".craft-button__label, .contact-button__label, .text-link__label");

        const move = (event: PointerEvent) => {
          const rect = action.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (event.clientY - rect.top - rect.height / 2) / rect.height;

          gsap.to(action, { x: x * 5, y: y * 4, duration: 0.32, ease: "power3.out", overwrite: "auto" });
          gsap.to(mark, { x: x * 8, y: y * 6, duration: 0.32, ease: "power3.out", overwrite: "auto" });
          gsap.to(label, { x: x * 3, duration: 0.32, ease: "power3.out", overwrite: "auto" });
        };

        const leave = () => {
          gsap.to([action, mark, label], { x: 0, y: 0, duration: 0.42, ease: "power3.out", overwrite: "auto" });
        };

        action.addEventListener("pointermove", move);
        action.addEventListener("pointerleave", leave);
        action.addEventListener("blur", leave);

        cleanups.push(() => {
          action.removeEventListener("pointermove", move);
          action.removeEventListener("pointerleave", leave);
          action.removeEventListener("blur", leave);
        });
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    },
    { dependencies: [prefersReducedMotion] }
  );
}
