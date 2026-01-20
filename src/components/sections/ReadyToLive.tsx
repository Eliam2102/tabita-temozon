import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import readyToLiveImg from "@/assets/ready-to-live.jpg";

const ReadyToLive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const included = [
    "Cocina equipada",
    "Parrilla y campana",
    "Calentador eléctrico",
    "Clósets",
    "Electrodomésticos",
    "Muebles y decoración del departamento muestra",
  ];

  return (
    <section id="listos" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4 block">
              Sin esperas
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Listos para<br />Habitar
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              Tábita Temozón se entrega como un proyecto 100% funcional,
              incluyendo equipamiento y mobiliario que permite habitar o rentar
              desde el primer día.
            </p>

            {/* Included List */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-6">
                Incluye:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1 bg-primary-foreground/20 rounded-full">
                      <Check className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-strong">
              <img
                src={readyToLiveImg}
                alt="Departamento listo para habitar"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-background text-foreground p-6 rounded-lg shadow-strong"
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                Entrega
              </p>
              <p className="text-2xl font-display">Inmediata</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToLive;
