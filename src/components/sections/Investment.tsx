import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TrendingUp, Shield, MapPin } from "lucide-react";
import investmentImg from "@/assets/investment.jpg";

const Investment = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Alta Plusvalía",
      description: "Temozón Norte es una de las zonas con mayor crecimiento de Mérida",
    },
    {
      icon: MapPin,
      title: "Ubicación Premium",
      description: "Conectividad estratégica con todo lo que necesitas",
    },
    {
      icon: Shield,
      title: "Inversión Segura",
      description: "Proyecto de baja densidad con materiales de primera",
    },
  ];

  return (
    <section id="inversion" className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <span className="text-xl md:text-2xl font-segoe tracking-[0.1em] text-muted-foreground mb-3 block">
            Protege tu patrimonio
          </span>
          <h2 className="font-glamore text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            <span className="text-glamore mb-2 block sm:mb-6">Una Inversión con Visión a</span>
            <span className="ont-bold font-fragile lg:text-7xl">Futuro</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ubicación, diseño y baja densidad convierten a Tábita Temozón en una
            opción sólida para quienes buscan proteger y hacer crecer su patrimonio.
          </p>
        </ScrollReveal>

        {/* Benefits */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16" staggerDelay={0.15}>
          {benefits.map((benefit) => (
            <StaggerItem
              key={benefit.title}
              variant="fade-up"
              className="text-center p-8 bg-background rounded-lg shadow-soft"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 font-bold text-primary" />
              </div>
              <h3 className="font-segoe italic font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pricing Card */}
        <ScrollReveal variant="scale" delay={0.3}>
          <div className="relative overflow-hidden rounded-2xl shadow-strong">
            <div className="absolute inset-0">
              <img
                src={investmentImg}
                alt="Inversión en Tábita"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-primary-foreground">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4 block">
                    Opciones disponibles
                  </span>
                  <h3 className="font-glamore font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                    Precios Competitivos
                  </h3>
                  <p className="text-primary-foreground/80 text-lg mb-6">
                    El desarrollo cuenta con distintas tipologías y precios según
                    nivel y distribución, pensados para adaptarse a diferentes
                    perfiles de compra.
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    *Sujeto a disponibilidad
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-2">
                    Desde
                  </p>
                  <p className="text-4xl md:text-5xl lg:text-6xl mb-2">
                    $1,950,000
                  </p>
                  <p className="text-primary-foreground/60 text-lg mb-6 font-segoe">MXN</p>

                  <div className="border-t border-primary-foreground/20 pt-6 mt-6">
                    <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-2">
                      Hasta
                    </p>
                    <p className="text-xl text-3xl md:text-4xl">
                      $2,650,000
                    </p>
                    <p className="text-primary-foreground/60 font-segoe">MXN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section >
  );
};

export default Investment;