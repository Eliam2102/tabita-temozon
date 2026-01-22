import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Bed, Bath, Car, Maximize } from "lucide-react";
// apartment1Bed replaced with Cloudinary URL inline
import apartment2Bed from "@/assets/apartment-2bed.jpg";

const Typologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const apartments = [
    {
      title: "1 Recámara",
      subtitle: "Diseño funcional y confort",
      description:
        "Diseñado para quienes buscan practicidad y confort, este modelo ofrece una distribución eficiente con espacios bien definidos y excelente iluminación natural.",
      image: "https://res.cloudinary.com/drvazwldo/image/upload/v1769033401/abita-sala-min_k8gsth.jpg",
      area: "45 m²",
      features: [
        { icon: Bed, label: "1 recámara" },
        { icon: Bath, label: "1 baño completo" },
        { icon: Car, label: "1 estacionamiento" },
        { icon: Maximize, label: "Closet vestidor" },
      ],
      extras: ["Sala y comedor", "Cocina", "Closet vestidor"],
    },
    {
      title: "2 Recámaras",
      subtitle: "Ideal para familias o inversión",
      description:
        "Con dos recámaras independientes y baños completos que garantizan comodidad y privacidad. Un modelo perfecto para familias pequeñas o como inversión.",
      image: apartment2Bed,
      area: "63 m²",
      features: [
        { icon: Bed, label: "2 recámaras" },
        { icon: Bath, label: "2 baños completos" },
        { icon: Car, label: "1 estacionamiento" },
        { icon: Maximize, label: "Espacios amplios" },
      ],
      extras: ["Sala y comedor", "Cocina", "Recámara principal con baño", "Recámara secundaria con baño"],
    },
  ];

  return (
    <section id="tipologias" className="section-padding bg-secondary">
      <div className="container-custom">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-xl md:text-2xl font-display font-bold tracking-[0.1em] text-muted-foreground mb-6 block">
            Opciones para ti
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            <span className="block mb-6 md:mb-6 lg:mb-10  ">Tipologías de</span>
            <span className="block font-bold font-fragile">Departamentos</span>
          </h2>
        </ScrollReveal>

        {/* Tab Buttons - Horizontal Scroll on Mobile */}
        <ScrollReveal variant="fade-up" delay={0.2} className="relative mb-12">
          <div className="flex overflow-x-auto pb-4 gap-4 justify-center no-scrollbar touch-pan-x">
            {apartments.map((apt, index) => (
              <button
                key={apt.title}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 ${activeTab === index
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
              >
                <span className="whitespace-nowrap">{apt.title}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-strong">
                <motion.img
                  key={apartments[activeTab].image}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={apartments[activeTab].image}
                  alt={`Departamento de ${apartments[activeTab].title}`}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Area Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-medium"
              >
                <p className="text-sm text-muted-foreground">Área aproximada</p>
                <p className="font-segoe text-2xl font-bold text-md text-foreground">{apartments[activeTab].area}</p>
              </motion.div>
            </div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                Departamento de
              </span>
              <h3 className="font-display text-4xl md:text-6xl text-foreground mb-4">
                {apartments[activeTab].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {apartments[activeTab].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {apartments[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-background rounded-lg"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-bold font-segoe">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Extras List */}
              <div className="border-t border-border pt-6">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Distribución incluye
                </p>
                <div className="flex flex-wrap gap-2">
                  {apartments[activeTab].extras.map((extra, index) => (
                    <motion.span
                      key={extra}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {extra}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Typologies;
