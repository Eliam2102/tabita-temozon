import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CheckCircle2, ArrowRight, Sparkles, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PresaleHook = () => {
    const benefits = [
        "Refrigerador",
        "Carpintería cocina",
        "Combo limpieza",
        "Sofá",
        "Mesa de centro",
        "TV",
        "Mueble para TV",
        "Aire acondicionado",
        "Colchón y box",
        "Y más...",
    ];

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("2026-06-30T23:59:59").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                                <p className="text-3xl font-segoe font-bold">Preventa</p>
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

                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8" staggerDelay={0.1}>
                            {benefits.map((item, index) => (
                                <StaggerItem key={index} className="flex items-center gap-4 group">
                                    <div className="shrink-0 p-1 bg-primary/10 rounded-full group-hover:bg-primary transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="text-base md:text-lg text-foreground font-segoe">{item}</span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Countdown Timer */}
                        <div className="mb-10 p-6 md:p-8 bg-secondary/30 rounded-2xl border border-primary/10 backdrop-blur-md shadow-inner w-full">
                            <div className="flex items-center gap-2 mb-4 text-primary justify-center sm:justify-start">
                                <div className="p-1.5 bg-primary/10 rounded-full animate-pulse">
                                    <Clock className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-[10px] md:text-xs font-segoe font-bold uppercase tracking-[0.2em]">La preventa termina en:</span>
                            </div>

                            <div className="grid grid-cols-4 gap-2 md:gap-3">
                                {[
                                    { label: 'Días', value: timeLeft.days },
                                    { label: 'Hrs', value: timeLeft.hours },
                                    { label: 'Min', value: timeLeft.minutes },
                                    { label: 'Seg', value: timeLeft.seconds },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="relative w-full aspect-square sm:aspect-auto sm:h-20 sm:w-20 bg-background rounded-lg border border-primary/5 flex items-center justify-center overflow-hidden shadow-strong">
                                            <AnimatePresence mode="popLayout">
                                                <motion.div
                                                    key={item.value}
                                                    initial={{ y: -20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: 20, opacity: 0 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 25,
                                                        duration: 0.3
                                                    }}
                                                    className="text-xl md:text-3xl font-segoe font-bold text-primary"
                                                >
                                                    {String(item.value).padStart(2, '0')}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                        <div className="mt-2 text-[8px] md:text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-segoe font-semibold opacity-80">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={scrollToContact}
                            className="group flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-segoe font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-strong hover:-translate-y-1 active:translate-y-0 mt-8"
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
