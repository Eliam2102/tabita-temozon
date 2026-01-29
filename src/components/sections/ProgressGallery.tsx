import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";

const ProgressGallery = () => {
    const updates = [
        {
            date: "Enero 2026",
            title: "Limpieza y Nivelación",
            description: "Inicio de preparativos en el terreno y delimitación del área de construcción.",
            image: "https://res.cloudinary.com/drvazwldo/image/upload/v1769033188/concepto-tabita-min_xztrnu.jpg",
            locked: false
        },
        {
            date: "Febrero 2026",
            title: "Cimentación",
            description: "Excavación profunda y armado de estructuras base para la cimentación.",
            image: "https://res.cloudinary.com/drvazwldo/image/upload/v1769032644/tabita-apartments_hbtdvf.png",
            locked: true,
            label: "En curso"
        },
        {
            date: "Marzo 2026",
            title: "Estructura Base",
            description: "Levantamiento de los primeros niveles y columnas estructurales.",
            image: "https://res.cloudinary.com/drvazwldo/image/upload/v1769032644/tabita-apartments_hbtdvf.png",
            locked: true,
            label: "Próximamente"
        }
    ];

    return (
        <section id="avance" className="section-padding bg-background overflow-hidden  border-border/50">
            <div className="container-custom">
                <ScrollReveal variant="fade-up" className="text-center mb-16">
                    <span className="text-xl uppercase md:text-2xl font-segoe tracking-[0.1em] text-muted-foreground mb-4 block">
                        Nuestra Evolución
                    </span>
                    <h2 className="">
                        <span className="block font-glamore text-3xl mb-6 md:mb-6 lg:mb-5">Galería de Avance</span>
                        <span className="block font-fragile text-4xl md:text-5xl lg:text-6xl mb-6">de Obra</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Sigue de cerca el proceso de construcción de tu próximo departamento en Temozón Norte.
                    </p>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
                    {updates.map((update, index) => (
                        <StaggerItem key={index}>
                            {update.locked ? (
                                <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/5] shadow-soft border border-border/50 group transition-all duration-500">
                                    <img
                                        src={update.image}
                                        alt={update.date}
                                        className="w-full h-full object-cover blur-[4px] opacity-40 grayscale"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/20 backdrop-blur-[2px]">
                                        <span className="text-sm uppercase tracking-[0.3em] font-bold text-muted-foreground mb-1">
                                            {update.date}
                                        </span>
                                        <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                            {update.label || "Próximamente"}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[4/5] shadow-strong cursor-pointer group">
                                            <motion.img
                                                initial={{ scale: 1.1 }}
                                                whileHover={{ scale: 1 }}
                                                transition={{ duration: 0.6 }}
                                                src={update.image}
                                                alt={update.title}
                                                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                                                <Maximize2 className="w-4 h-4 text-white" />
                                            </div>

                                            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-medium">
                                                <p className="text-[10px] uppercase tracking-widest font-bold">{update.date}</p>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-white font-segoe font-bold text-xl mb-2">
                                                    {update.title}
                                                </h3>
                                                <p className="text-white/70 text-sm line-clamp-2">
                                                    {update.description}
                                                </p>
                                            </div>
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-screen-xl h-[85vh] p-0 overflow-hidden bg-black border-none ring-0">
                                        <div className="relative w-full h-full flex items-center justify-center p-4">
                                            <img
                                                src={update.image}
                                                alt={update.title}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                            <div className="absolute bottom-6 left-6 right-6 text-white text-center md:text-left bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                    <div>
                                                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                                                            {update.date}
                                                        </span>
                                                        <h2 className="font-glamore text-2xl md:text-3xl">{update.title}</h2>
                                                    </div>
                                                    <p className="text-white/60 text-sm max-w-md leading-relaxed">
                                                        {update.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            )}
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <div className="mt-12 text-center px-4">
                    <p className="text-[10px] text-zinc-500 italic pointer-events-none leading-tight uppercase tracking-widest opacity-60">
                        “Las imágenes mostradas representan el avance real de la obra en las fechas indicadas.”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProgressGallery;
