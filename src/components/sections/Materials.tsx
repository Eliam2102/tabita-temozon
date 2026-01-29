import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Hammer, Layers, Grid, Maximize } from "lucide-react";
// materialsImg replaced with Cloudinary URL inline

const Materials = () => {
  const materials = [
    {
      title: "Carpintería en Madera",
      description: "Acabados de alta calidad en cocina y closets",
      icon: Hammer,
    },
    {
      title: "Barra de Granito",
      description: "Superficies duraderas y elegantes",
      icon: Layers,
    },
    {
      title: "Cancelería",
      description: "Ventanas y puertas",
      icon: Maximize,
    },
  ];

  return (
    <section id="materiales" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <ScrollReveal variant="fade-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg shadow-medium h-48 bg-accent relative">
                  <img
                    src="https://res.cloudinary.com/drvazwldo/image/upload/v1769033609/sala-vista_2-min_2_laikk6.jpg"
                    alt="Materiales de calidad"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 text-zinc-500 text-[8px] md:text-[10px] italic pointer-events-none leading-tight">
                    “Imagen ilustrativa, no incluye mobiliario”
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-medium h-64 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-glamore text-4xl text-primary">Cancelería</p>
                      <p className="text-sm text-muted-foreground">Ventanas y puertas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-lg shadow-medium h-64 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-glamore text-4xl text-primary">Granito</p>
                      <p className="text-sm text-muted-foreground">Barras de cocina</p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-medium h-48 bg-primary/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="font-glamore text-4xl text-primary">Madera</p>
                      <p className="text-sm text-muted-foreground">Carpintería fina</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <span className="text-xl md:text-1xl font-segoe tracking-[0.1em] uppercase text-muted-foreground mb-3 block">
              Calidad que se siente
            </span>
            <h2 className="block font-glamore text-4xl sm:text-5xl md:text-6xl mb-6 lg:mb-5">
              <span className="block font-glamore text-3xl mb-6 md:mb-6 lg:mb-5">Materiales que Elevan la</span>
              <span className="block font-fragile text-4xl md:text-5xl lg:text-6xl mb-8">Experiencia</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cada departamento ha sido proyectado con materiales seleccionados
              por su durabilidad, estética y fácil mantenimiento, cuidando cada
              detalle desde la estructura hasta los acabados finales.
            </p>

            {/* Materials Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {materials.map((material, index) => (
                <StaggerItem
                  key={material.title}
                  className={`p-6 bg-secondary rounded-lg border border-border ${index === 2 ? "sm:col-span-2 sm:max-w-xs sm:mx-auto w-full" : ""
                    }`}
                >
                  <div className="flex items-center gap-4 sm:block">
                    <material.icon className="w-8 h-8 text-primary shrink-0 block sm:hidden" />
                    <div>
                      <h3 className="font-segoe font-bold text-2xl text-foreground mb-2">
                        {material.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {material.description}
                      </p>
                    </div>
                  </div>
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
