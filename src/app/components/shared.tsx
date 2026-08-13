import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "motion/react";

// ════════════════════════════════════════════
//  Shared utilities
// ════════════════════════════════════════════

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glassmorphism pill button
export function GlassBtn({
  onClick,
  children,
  className = "",
  type = "button",
  accent = false,
}: {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  accent?: boolean;
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      className={`relative overflow-hidden border border-white/40 rounded-[34px] px-8 py-3 text-lg text-white
        backdrop-blur-md transition-colors duration-200 font-poppins cursor-pointer
        ${accent
          ? "bg-[rgba(7,106,218,0.3)] hover:bg-[rgba(7,106,218,0.5)] shadow-[0_0_24px_rgba(7,106,218,0.3)]"
          : "bg-white/10 hover:bg-white/20 shadow-[0_4px_24px_rgba(255,255,255,0.06)]"}
        ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
