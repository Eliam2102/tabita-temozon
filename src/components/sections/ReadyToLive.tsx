import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";
import readyToLiveImg from "@/assets/ready-to-live.jpg";

const ReadyToLive = () => {
  const included = [
    "Cocina equipada",
    "Parrilla y campana",
    "Calentador eléctrico",
    "Clósets"
  ];

  return (
    <section id="listos" className="section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal variant="fade-right">
            <span className="text-xl md:text-2xl uppercase font-segoe tracking-[0.1em] mb-4 block">
              Sin esperas
            </span>
            <h2 className="block font-glamore mb-6 lg:mb-5">
              <span className="block font-glamore text-3xl mb-6 md:mb-6 lg:mb-5  ">Espacios Listos para<br /></span>
              <span className="font-fragile text-4xl sm:text-5xl md:text-6xl mb-2 block sm:mb-6 lg:mb-12 ">Habitar</span>
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
              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                {included.map((item) => (
                  <StaggerItem key={item} variant="fade-right" className="flex items-center gap-3">
                    <div className="p-1 bg-primary-foreground/20 rounded-full">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-segoe font-bold">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="fade-left" delay={0.2} className="relative">
            <div className="overflow-hidden rounded-lg shadow-strong">
              <img
                src={readyToLiveImg}
                alt="Departamento listo para habitar"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <ScrollReveal
              variant="scale"
              delay={0.6}
              className="absolute -bottom-6 left-0 right-0 mx-4 md:mx-0 md:-right-6 md:left-auto bg-background text-foreground p-6 rounded-lg shadow-strong text-center md:text-left"
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                Entrega
              </p>
              <p className="text-2xl font-segoe font-bold">Inmediata</p>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ReadyToLive;
