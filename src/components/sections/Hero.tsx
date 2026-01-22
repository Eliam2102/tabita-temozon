import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// Image replaced with Cloudinary URL inline

interface HeroProps {
  onLoaded?: (loaded: boolean) => void;
}

const Hero = ({ onLoaded }: HeroProps) => {
  const [loaderPhase, setLoaderPhase] = useState<"loading" | "transitioning" | "done">("loading");
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Different parallax speeds for layered effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const linesY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.95]);

  useEffect(() => {
    // Phase 1: Show loader - wait for fill to complete (2.5s duration + 0.3s delay = 2.8s)
    const transitionTimer = setTimeout(() => {
      setLoaderPhase("transitioning");
    }, 3200);

    // Phase 2: Complete transition
    const doneTimer = setTimeout(() => {
      setLoaderPhase("done");
      if (onLoaded) onLoaded(true);
    }, 3800);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(doneTimer);
    };
  }, [onLoaded]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer - Slowest parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: backgroundY }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: loaderPhase === "done" ? 1 : 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/drvazwldo/image/upload/v1769032644/tabita-apartments_hbtdvf.png"
          alt="Tábita Temozón - Edificio"
          className="w-full h-[120%] object-cover"
        />
      </motion.div>

      {/* Gradient Overlay Layer - Medium parallax with animated opacity */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          y: overlayY,
          opacity: overlayOpacity
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      </motion.div>



      {/* Loader with Filling Typography */}
      <AnimatePresence>
        {loaderPhase === "loading" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Grid para apilar perfectamente las letras */}
            <div className="grid" style={{ gridTemplateAreas: "'stack'" }}>
              {/* Outline Base */}
              <h1
                className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-light leading-none tracking-wider select-none text-center"
                style={{
                  gridArea: "stack",
                  WebkitTextStroke: "1px hsl(var(--primary-foreground) / 0.3)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                TÁBITA
              </h1>

              {/* Filling animation - contenedor más alto para llenado completo */}
              <motion.h1
                className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] font-light leading-none tracking-wider text-primary-foreground/20 -mt-2 md:-mt-4 pt-2 md:pt-4 text-center"
                style={{ gridArea: "stack" }}
                initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                animate={{ clipPath: "polygon(0% -30%, 100% -30%, 100% 100%, 0% 100%)" }}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
              >
                TÁBITA
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content - Only reveals AFTER loader is done */}
      <motion.div
        className="relative z-10 text-center px-6 will-change-transform"
        style={{ y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaderPhase === "done" ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title - Appears AFTER loader exits */}
          <motion.h1
            className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] font-light text-primary-foreground tracking-wider"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: loaderPhase === "done" ? 1 : 0,
              y: loaderPhase === "done" ? 0 : 40
            }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            TÁBITA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: loaderPhase === "done" ? 1 : 0,
              y: loaderPhase === "done" ? 0 : 20
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-segoe text-lg sm:text-xl md:text-2xl text-primary-foreground/70 tracking-[0.5em] uppercase mt-6"
          >
            Temozón
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: loaderPhase === "done" ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-segoe text-lg sm:text-xl text-primary-foreground/60 max-w-md mx-auto mt-12 leading-relaxed"
          >
            Departamentos diseñados para vivir e invertir en Temozón Norte
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: loaderPhase === "done" ? 1 : 0,
              y: loaderPhase === "done" ? 0 : 20
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-20 md:mt-12"
          >
            <button
              onClick={() => scrollToSection("concepto")}
              className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Descubre más
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-8 py-3 bg-primary-foreground text-primary text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-foreground/90"
            >
              Agenda una cita
            </button>
          </motion.div>
        </motion.div>
      </motion.div>



      {/* Bottom Info Bar - Glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: loaderPhase === "done" ? 1 : 0,
          y: loaderPhase === "done" ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden md:block absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10 bg-primary/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-primary-foreground/70 text-xs tracking-widest text-center sm:text-left">
            <span>Mérida, Yucatán</span>
            <span className="hidden sm:inline">|</span>
            <span>11 Departamentos</span>
            <span className="hidden sm:inline">|</span>
            <span>Desde $1.95 MDP</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderPhase === "done" ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-24 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("concepto")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
