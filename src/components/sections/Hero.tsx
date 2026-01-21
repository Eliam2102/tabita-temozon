import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import buildingExterior from "@/assets/building-exterior.jpg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Loader duration
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Loader / Mask Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Animated Logo Mask */}
            <div className="relative flex items-center justify-center">
              {/* Glowing background */}
              <motion.div
                className="absolute w-[600px] h-[300px] bg-primary-foreground/5 blur-3xl rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 0.5, 0.3] }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* Logo Text with Mask Effect */}
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="font-display text-[5rem] sm:text-[8rem] md:text-[12rem] font-light text-primary-foreground leading-none tracking-wide"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  TÁBITA
                </motion.h1>
                
                {/* Reveal line animation */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>

              {/* Decorative lines */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>

            {/* Loading indicator */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="w-12 h-px bg-primary-foreground/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={showContent ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={buildingExterior}
            alt="Tábita Temozón - Edificio"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
          {/* Additional vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--primary)/0.4)_100%)]" />
        </motion.div>
      </div>

      {/* Decorative Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 0.1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Line Top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showContent ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-16 h-px bg-primary-foreground/40 mx-auto mb-12"
          />

          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-light text-primary-foreground leading-none tracking-wide drop-shadow-2xl">
              TÁBITA
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground/80 tracking-[0.4em] uppercase mt-4"
          >
            Temozón
          </motion.p>

          {/* Decorative Line Bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showContent ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="w-16 h-px bg-primary-foreground/40 mx-auto my-12"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto leading-relaxed italic"
          >
            Departamentos diseñados para vivir e invertir
            <br className="hidden sm:block" /> en Temozón Norte
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
          >
            <button
              onClick={() => scrollToSection("concepto")}
              className="group px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-px">
                Descubre más
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="group px-8 py-4 bg-primary-foreground text-primary text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-primary-foreground/90"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-px">
                Agenda una cita
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10 backdrop-blur-sm bg-primary/20"
      >
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
            <p className="tracking-widest">Mérida, Yucatán</p>
            <p className="tracking-widest">11 Departamentos</p>
            <p className="tracking-widest">Desde $1.95M MXN</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("concepto")}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-primary-foreground/10" />
        <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-primary-foreground/10" />
        <div className="absolute bottom-32 left-6 w-12 h-12 border-l border-b border-primary-foreground/10" />
        <div className="absolute bottom-32 right-6 w-12 h-12 border-r border-b border-primary-foreground/10" />
      </motion.div>
    </section>
  );
};

export default Hero;
