import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type AnimatedTextProps = {
  as?: "h1" | "h2" | "span";
  children: string;
  className?: string;
  delay?: number;
};

export function AnimatedText({ as = "span", children, className, delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element || prefersReducedMotion) return;

    const split = new SplitType(element, { types: "words,chars" });
    const chars = split.chars ?? [];

    const tween = gsap.from(chars, {
      yPercent: 110,
      opacity: 0,
      rotateX: -40,
      duration: 0.82,
      delay,
      ease: "power4.out",
      stagger: { amount: 0.38 }
    });

    return () => {
      tween.kill();
      split.revert();
    };
  }, [delay, prefersReducedMotion]);

  const assignRef = (node: HTMLElement | null) => {
    textRef.current = node;
  };

  const props = {
    ref: assignRef,
    className,
    children
  };

  if (as === "h1") return <h1 {...props} />;
  if (as === "h2") return <h2 {...props} />;
  return <span {...props} />;
}
