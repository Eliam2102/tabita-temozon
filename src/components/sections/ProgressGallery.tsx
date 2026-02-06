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
            image: "https://res.cloudinary.com/drvazwldo/image/upload/v1770403553/AVANCE-OBRA-FEBRERO-min_kpa3hy.jpg",
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

                                    <DialogContent className="w-screen h-screen max-w-none m-0 p-0 rounded-none bg-transparent border-none shadow-none ring-0 translate-x-0 translate-y-0 top-0 left-0 flex items-center justify-center data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0 [&>button]:fixed [&>button]:top-6 [&>button]:right-6 [&>button]:w-12 [&>button]:h-12 [&>button]:bg-white/10 [&>button]:backdrop-blur-md [&>button]:border [&>button]:border-white/20 [&>button]:text-white [&>button]:hover:bg-white/20 [&>button]:rounded-full [&>button]:opacity-100 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:transition-all [&>button]:z-[60] focus:outline-none">
                                        <div className="relative flex items-center justify-center w-full h-full p-4 md:p-10 pointer-events-none">
                                            <div className="relative relative group pointer-events-auto">
                                                <img
                                                    src={update.image}
                                                    alt={update.title}
                                                    className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-left">
                                                    <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">
                                                        {update.date}
                                                    </span>
                                                    <h2 className="font-glamore text-white text-xl md:text-2xl mb-1">{update.title}</h2>
                                                    <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
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
