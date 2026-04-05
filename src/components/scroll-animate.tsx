"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right";

interface ScrollAnimateProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
}

const hiddenStyles: Record<Variant, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "fade-left": "opacity-0 -translate-x-8",
  "fade-right": "opacity-0 translate-x-8",
};

const visibleStyle = "opacity-100 translate-x-0 translate-y-0";

function useReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export function ScrollAnimate({
  children,
  variant = "fade-up",
  delay = 0,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          visibleRef.current = true;
          el.classList.remove(...hiddenStyles[variant].split(" "));
          el.classList.add(...visibleStyle.split(" "));
          el.style.transitionDelay = `${delay}ms`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion, variant, delay]);

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${hiddenStyles[variant]}`}
    >
      {children}
    </div>
  );
}
