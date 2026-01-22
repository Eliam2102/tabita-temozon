import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Concepto", href: "#concepto" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Departamentos", href: "#tipologias" },
    { label: "Inversión", href: "#inversion" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group select-text"
            >
              <span
                className={`font-display text-2xl lg:text-3xl tracking-[0.15em] transition-colors duration-300 ${isMobileMenuOpen || !isScrolled ? "text-primary-foreground" : "text-foreground"
                  }`}
              >
                TÁBITA
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm tracking-[0.1em] uppercase transition-all duration-300 group ${isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-primary-foreground"
                      }`}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={() => scrollToSection("#contacto")}
              className={`hidden lg:block px-6 py-3 text-sm tracking-[0.1em] uppercase border transition-all duration-300 ${isScrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
            >
              Agenda cita
            </motion.button>

            <button
              className="lg:hidden p-2 -mr-2 relative z-50 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className="w-8 h-8 text-primary-foreground"
                />
              ) : (
                <Menu
                  className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-2xl font-display text-primary-foreground tracking-widest"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={() => scrollToSection("#contacto")}
                  className="mt-6 px-8 py-4 border border-primary-foreground/50 text-primary-foreground text-lg tracking-widest"
                >
                  Agenda cita
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
