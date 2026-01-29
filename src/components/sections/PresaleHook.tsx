import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const PresaleHook = () => {
    const benefits = [
        "Cocina integral",
        "Refrigerador",
        "Parrilla eléctrica",
        "Sofá",
        "Cama Queen",
        "Aire acondicionado",
        "TV",
        "Y más…",
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="section-padding bg-background bg-pattern overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Section - Reflecting the grid style user likes */}
                    <ScrollReveal variant="fade-right">
                        <div className="relative">
                            <div className="overflow-hidden rounded-lg shadow-strong aspect-[4/5] bg-secondary">
                                <img
                                    src="https://res.cloudinary.com/drvazwldo/image/upload/v1769033609/sala-vista_2-min_2_laikk6.jpg"
                                    alt="Inversión en Preventa"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                            </div>

                            {/* Floating Badge */}
                            <ScrollReveal
                                variant="scale"
                                delay={0.6}
                                className="absolute top-8 -right-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-strong hidden md:block"
                            >
                                <p className="text-sm uppercase tracking-widest mb-1 opacity-80">Etapa</p>
                                <p className="text-3xl font-glamore">Preventa</p>
                            </ScrollReveal>
                        </div>
                    </ScrollReveal>

                    {/* Content Section */}
                    <ScrollReveal variant="fade-left" delay={0.2}>
                        <span className="text-xl font-segoe tracking-[0.1em] uppercase text-muted-foreground mb-3 block">
                            Inversión Inteligente
                        </span>

                        <h2 className="block font-glamore text-4xl sm:text-5xl md:text-6xl mb-6 lg:mb-5">
                            <span className="block font-glamore text-3xl mb-6 md:mb-6 lg:mb-5">Compra en Preventa y Obtén</span>
                            <span className="block font-fragile text-4xl md:text-5xl lg:text-6xl mb-8">Todo Esto</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            Aprovecha las ventajas exclusivas de invertir en la etapa inicial.
                            Garantiza el crecimiento de tu patrimonio con beneficios diseñados solo para nuestros primeros inversionistas.
                        </p>

                        <StaggerContainer className="space-y-4 mb-12" staggerDelay={0.1}>
                            {benefits.map((item, index) => (
                                <StaggerItem key={index} className="flex items-center gap-4 group">
                                    <div className="p-1 bg-primary/10 rounded-full group-hover:bg-primary transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-lg text-foreground font-segoe">{item}</span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <button
                            onClick={scrollToContact}
                            className="group flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-segoe font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-strong hover:-translate-y-1 active:translate-y-0"
                        >
                            Quiero más información
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default PresaleHook;
