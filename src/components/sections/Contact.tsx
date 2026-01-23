import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias por tu interés! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "+52 999 XXX XXXX" },
    { icon: Mail, label: "Correo", value: "info@tabita.mx" },
    { icon: MapPin, label: "Ubicación", value: "Temozón Norte, Mérida, Yucatán" },
  ];

  return (
    <section id="contacto" className="section-padding bg-background bg-pattern overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <ScrollReveal variant="fade-right">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Da el primer paso
            </span>
            <h2 className="font-glamore text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              <span className="text-glamore mb-2 block sm:mb-4">Agenda<br /></span>
              <span className="text-glamore">una Cita</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Forma parte de un proyecto diseñado para el presente y el futuro.
              Contáctanos y conoce de primera mano todo lo que Tábita Temozón
              tiene para ofrecerte.
            </p>

            {/* Contact Info */}
            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
              {contactInfo.map((item) => (
                <StaggerItem key={item.label} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-10 rounded-xl shadow-strong border border-border"
            >
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="font-segoe font-bold text-2xl text-foreground">
                  Solicita información
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+52 999 XXX XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="¿Tienes alguna pregunta?"
                  />
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full">
                  Enviar solicitud
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
