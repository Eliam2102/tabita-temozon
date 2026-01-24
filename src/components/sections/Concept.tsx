import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
// buildingDetail replaced with Cloudinary URL inline

const Concept = () => {
  const features = [
    "Terreno en esquina",
    "Acceso por dos calles",
    "Estacionamiento incluido",
    "Funcionalidad y durabilidad",
  ];

  return (
    <section id="concepto" className="section-padding bg-background bg-pattern overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal variant="fade-right">
            <span className="font-segoe text-xl text-muted-foreground mb-4 block">BIENVENIDO A TU NUEVO HOGAR</span>
            <span className="font-glamore text-3xl text-muted-foreground mb-8 block">
              Un desarrollo pensado para
            </span>
            <h2 className="font-fragile text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
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
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground font-medium">{feature}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-strong">
                <img
                  src="https://res.cloudinary.com/drvazwldo/image/upload/v1769033188/concepto-tabita-min_xztrnu.jpg"
                  alt="Tábita - Proyecto de baja densidad"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <ScrollReveal
                variant="scale"
                delay={0.6}
                className="absolute -bottom-6 left-0 right-0 mx-4 md:mx-0 md:-left-6 md:right-auto bg-primary text-primary-foreground p-6 rounded-lg shadow-strong text-center md:text-left"
              >
                <p className="text-sm uppercase tracking-widest mb-1">Un Proyecto Con</p>
                <p className="text-2xl font-segoe font-bold">Ubicación Estratégica</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Concept;
