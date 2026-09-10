import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type PixelRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const PIXEL_ROWS = 14;
const PIXEL_COLUMNS = 20;

export default function PixelReveal({ children, className = "", delay = 0 }: PixelRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const pixels = Array.from({ length: PIXEL_ROWS * PIXEL_COLUMNS }, (_, index) => (
    <span
      key={index}
      className="pixel-cell"
      style={{ "--pixel-index": index } as CSSProperties}
    />
  ));

  return (
    <div
      ref={elementRef}
      className={`pixel-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--pixel-delay": `${delay}ms` } as CSSProperties}
    >
      <span className="pixel-reveal-layer" aria-hidden="true">
        {pixels}
      </span>
      <div className="pixel-reveal-content">{children}</div>
    </div>
  );
}
