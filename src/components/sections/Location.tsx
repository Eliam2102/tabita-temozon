import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { MapPin, Clock, Building2, ShoppingBag, GraduationCap, Heart } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    { icon: GraduationCap, name: "Universidad Marista", time: "3 min" },
    { icon: ShoppingBag, name: "The Harbor", time: "3 min" },
    { icon: Heart, name: "Hospital Faro del Mayab", time: "7 min" },
    { icon: Building2, name: "Plaza La Isla", time: "10 min" },
  ];

  return (
    <section id="ubicacion" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Map - Redesigned */}
          <ScrollReveal variant="scale" className="relative order-2 lg:order-1 lg:h-full">
            <div className="aspect-[4/5] sm:aspect-video lg:aspect-auto lg:h-full bg-primary-foreground/5 rounded-2xl overflow-hidden relative shadow-strong">
              {/* Google Maps Embed - Temozón Norte, Mérida */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1421.1584039490428!2d-89.63312076517118!3d21.06584813239197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675000cb5ddb1%3A0xf9bcd741910b77a3!2sT%C3%A1bita%20Temoz%C3%B3n%20Norte!5e0!3m2!1ses-419!2smx!4v1769643451204!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolutes"
              />

              {/* Elegant Gradient Overlay */}
              <div className="absolute " />
              <div className="absolute" />

              {/* Location Card - Floating */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs"
              >
                <div className="bg-primary-foreground/95 backdrop-blur-md text-primary p-5 rounded-xl shadow-strong">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-segoe text-lg mb-1">Tábita Temozón</p>
                      <p className="text-sm text-primary/70 leading-relaxed">
                        Calle 28 × 21, Temozón Norte<br />
                        Mérida, Yucatán
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal variant="fade-left" delay={0.2} className="order-1 lg:order-2">
            <span className="text-xl md:text-2xl uppercase font-segoe tracking-[0.1em]  mb-4 block">
              Temozón Norte
            </span>
            <h2 className="">
              <span className="block font-glamore text-3xl uppercase mb-2 sm:mb-6">un lugar que lo tiene todo</span>
              <span className="block font-fragile text-4xl md:text-5xl lg:text-5xl leading-tight mb-6">Ubicación Estratégica</span>
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
              <h3 className="text-sm uppercase tracking-widest font-segoe text-primary-foreground/70 mb-4">
                Puntos de interés cercanos
              </h3>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                {nearbyPlaces.map((place) => (
                  <StaggerItem
                    key={place.name}
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
