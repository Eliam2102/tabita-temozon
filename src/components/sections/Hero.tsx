import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative Line Top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-16 h-px bg-primary-foreground/40 mx-auto mb-12"
          />

          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-light text-primary-foreground leading-none tracking-wide">
              TÁBITA
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground/80 tracking-[0.4em] uppercase mt-4"
          >
            Temozón
          </motion.p>

          {/* Decorative Line Bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="w-16 h-px bg-primary-foreground/40 mx-auto my-12"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto leading-relaxed italic"
          >
            Departamentos diseñados para vivir e invertir
            <br className="hidden sm:block" /> en Temozón Norte
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12"
          >
            <button
              onClick={() => scrollToSection("concepto")}
              className="group px-8 py-4 border border-primary-foreground/30 text-primary-foreground text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-primary-foreground hover:text-primary"
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10"
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
        animate={{ opacity: 1 }}
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
      <div className="absolute top-20 left-6 w-12 h-12 border-l border-t border-primary-foreground/10" />
      <div className="absolute top-20 right-6 w-12 h-12 border-r border-t border-primary-foreground/10" />
      <div className="absolute bottom-32 left-6 w-12 h-12 border-l border-b border-primary-foreground/10" />
      <div className="absolute bottom-32 right-6 w-12 h-12 border-r border-b border-primary-foreground/10" />
    </section>
  );
};

export default Hero;
