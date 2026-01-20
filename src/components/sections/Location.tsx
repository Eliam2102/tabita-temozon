import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Building2, ShoppingBag, GraduationCap, Heart } from "lucide-react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nearbyPlaces = [
    { icon: GraduationCap, name: "Universidad Marista", time: "3 min" },
    { icon: ShoppingBag, name: "The Harbor", time: "3 min" },
    { icon: Heart, name: "Hospital Faro del Mayab", time: "7 min" },
    { icon: Building2, name: "Plaza La Isla", time: "10 min" },
  ];

  return (
    <section id="ubicacion" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square bg-primary-foreground/10 rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3!2d-89.6!3d21.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAzJzAwLjAiTiA4OcKwMzYnMDAuMCJX!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              
              {/* Location Pin */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-primary-foreground text-primary p-4 rounded-full shadow-strong">
                  <MapPin className="w-8 h-8" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4 block">
              Temozón Norte
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Ubicación<br />Estratégica
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
              Ubicado a una calle de la carretera Mérida–Progreso y con acceso
              inmediato a la avenida Temozón, Tábita se encuentra en un punto
              estratégico que conecta fácilmente con plazas comerciales,
              servicios, universidades y zonas residenciales premium del norte
              de la ciudad.
            </p>

            {/* Nearby Places */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-4">
                Puntos de interés cercanos
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <motion.div
                    key={place.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10"
                  >
                    <div className="p-2 bg-primary-foreground/10 rounded-lg">
                      <place.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{place.name}</p>
                      <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
                        <Clock className="w-3 h-3" />
                        <span>{place.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
