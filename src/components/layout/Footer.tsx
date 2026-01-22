import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="select-text">
            <h3 className="font-display text-3xl tracking-wider mb-1">TÁBITA</h3>
            <p className="text-primary-foreground/60 pl-7 text-sm tracking-widest">
              TEMOZÓN
            </p>
          </div>

          {/* Info */}
          <div className="text-center">
            <p className="text-primary-foreground/80 text-sm">
              Temozón Norte, Mérida, Yucatán
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Diseñado y desarrollado por Búho Solutions
            </p>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Tábita Temozón
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
