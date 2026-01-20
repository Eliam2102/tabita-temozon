import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import buildingDetail from "@/assets/building-detail.jpg";

const Concept = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Terreno en esquina",
    "Acceso por dos calles",
    "Estacionamiento incluido",
    "Funcionalidad y durabilidad",
  ];

  return (
    <section id="concepto" className="section-padding bg-background bg-pattern">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Un desarrollo pensado para
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              La vida actual
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tábita Temozón es un conjunto residencial de{" "}
              <strong className="text-foreground">11 departamentos</strong> ubicado en 
              Temozón Norte, una de las zonas con mayor crecimiento y plusvalía de Mérida.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              El proyecto ha sido diseñado para ofrecer espacios funcionales,
              acabados de calidad y una experiencia de vivienda cómoda, ideal
              tanto para habitar como para invertir.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-strong">
              <img
                src={buildingDetail}
                alt="Tábita - Proyecto de baja densidad"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-strong"
            >
              <p className="text-sm uppercase tracking-widest mb-1">Proyecto</p>
              <p className="text-2xl font-display">Baja Densidad</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
