import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import materialsImg from "@/assets/materials.jpg";

const Materials = () => {
  const materials = [
    {
      title: "Carpintería en Madera",
      description: "Acabados de alta calidad en cocina y closets",
    },
    {
      title: "Barra de Granito",
      description: "Superficies duraderas y elegantes",
    },
    {
      title: "Pisos de Mármol",
      description: "Mármol Fiorito Puebla de primera calidad",
    },
    {
      title: "Cancelería Premium",
      description: "Ventanas y puertas de alta calidad",
    },
  ];

  return (
    <section id="materiales" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <ScrollReveal variant="fade-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-medium h-48 bg-accent">
                  <img
                    src={materialsImg}
                    alt="Materiales de calidad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-medium h-64 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-display text-2xl text-primary">Mármol</p>
                      <p className="text-sm text-muted-foreground">Fiorito Puebla</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg shadow-medium h-64 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-display text-2xl text-primary">Granito</p>
                      <p className="text-sm text-muted-foreground">Barras de cocina</p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-medium h-48 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-display text-2xl text-primary">Madera</p>
                      <p className="text-sm text-muted-foreground">Carpintería fina</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Calidad que se siente
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Materiales que<br />Elevan la Experiencia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Cada departamento ha sido proyectado con materiales seleccionados
              por su durabilidad, estética y fácil mantenimiento, cuidando cada
              detalle desde la estructura hasta los acabados finales.
            </p>

            {/* Materials Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {materials.map((material) => (
                <StaggerItem
                  key={material.title}
                  className="p-6 bg-secondary rounded-lg border border-border"
                >
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {material.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {material.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Materials;
