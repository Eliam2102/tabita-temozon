import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import buildingExterior from "@/assets/building-exterior.jpg";

const Hero = () => {
  const [loaderPhase, setLoaderPhase] = useState<"loading" | "transitioning" | "done">("loading");

  useEffect(() => {
    // Phase 1: Show loader
    const transitionTimer = setTimeout(() => {
      setLoaderPhase("transitioning");
    }, 2000);

    // Phase 2: Complete transition
    const doneTimer = setTimeout(() => {
      setLoaderPhase("done");
    }, 3000);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Always present but revealed */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderPhase !== "loading" ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={buildingExterior}
          alt="Tábita Temozón - Edificio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
      </motion.div>

      {/* Loader with Cut-out Typography */}
      <AnimatePresence>
        {loaderPhase === "loading" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cut-out effect using mix-blend-mode */}
            <div className="relative">
              <motion.h1
                className="font-display text-[18vw] md:text-[15vw] font-light leading-none tracking-wider select-none"
                style={{
                  WebkitTextStroke: "1px hsl(var(--primary-foreground) / 0.3)",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                TÁBITA
              </motion.h1>
              
              {/* Animated fill that reveals the text */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1
                  className="font-display text-[18vw] md:text-[15vw] font-light leading-none tracking-wider text-primary-foreground/20"
                >
                  TÁBITA
                </h1>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaderPhase !== "loading" ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title - Seamless transition from loader */}
          <motion.h1
            className="font-display text-[15vw] sm:text-[12vw] md:text-[10vw] font-light text-primary-foreground leading-none tracking-wider"
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: loaderPhase !== "loading" ? 1 : 0, 
              y: loaderPhase !== "loading" ? 0 : 40 
            }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            className="font-display text-lg sm:text-xl md:text-2xl text-primary-foreground/70 tracking-[0.5em] uppercase mt-6"
          >
            Temozón
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: loaderPhase === "done" ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-sm sm:text-base text-primary-foreground/60 max-w-md mx-auto mt-8 leading-relaxed"
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
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
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
      </div>

      {/* Bottom Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: loaderPhase === "done" ? 1 : 0,
          y: loaderPhase === "done" ? 0 : 20
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10 bg-primary/30 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-primary-foreground/50 text-xs tracking-widest">
            <span>Mérida, Yucatán</span>
            <span>11 Departamentos</span>
            <span>Desde $1.95M MXN</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaderPhase === "done" ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 cursor-pointer"
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
