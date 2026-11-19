import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  className?: string;
  children: ReactNode;
}

export function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export default function Reveal({ className = '', children }: RevealProps) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`${className} rv${seen ? ' in' : ''}`.trim()}>
      {children}
    </div>
  );
}
