import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bed, Bath, Car, Maximize } from "lucide-react";
import apartment1Bed from "@/assets/apartment-1bed.jpg";
import apartment2Bed from "@/assets/apartment-2bed.jpg";

const Typologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const apartments = [
    {
      title: "1 Recámara",
      subtitle: "Diseño funcional y confort",
      description:
        "Diseñado para quienes buscan practicidad y confort, este modelo ofrece una distribución eficiente con espacios bien definidos y excelente iluminación natural.",
      image: apartment1Bed,
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
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Opciones para ti
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Tipologías de<br />Departamentos
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {apartments.map((apt, index) => (
            <button
              key={apt.title}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              {apt.title}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-strong">
              <img
                src={apartments[activeTab].image}
                alt={`Departamento de ${apartments[activeTab].title}`}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Area Badge */}
            <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-medium">
              <p className="text-sm text-muted-foreground">Área aproximada</p>
              <p className="text-2xl font-display text-foreground">{apartments[activeTab].area}</p>
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              Departamento de
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              {apartments[activeTab].title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {apartments[activeTab].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {apartments[activeTab].features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Extras List */}
            <div className="border-t border-border pt-6">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Distribución incluye
              </p>
              <div className="flex flex-wrap gap-2">
                {apartments[activeTab].extras.map((extra) => (
                  <span
                    key={extra}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Typologies;
