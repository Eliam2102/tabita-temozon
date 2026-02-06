import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "+52 999 365 7830" },
    { icon: Mail, label: "Correo", value: "tabita@grupolamu.com" },
    { icon: MapPin, label: "Ubicación", value: "Temozón Norte, Mérida, Yucatán" },
  ];

  return (
    <section id="contacto" className="section-padding bg-background bg-pattern overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal variant="fade-right">
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
              Da el primer paso
            </span>
            <h2 className="block font-glamore text-3xl mb-6 md:mb-6 lg:mb-5">
              <span className="text-glamore mb-2">Agenda una Cita</span>
              <span className="text-glamore mb-2 block sm:mb-4">y conoce tu nuevo <br /></span>
              <span className="font-fragile text-4xl md:text-5xl lg:text-6xl">Hogar</span>
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

          {/* Odoo Form Iframe */}
          <ScrollReveal variant="fade-left" delay={0.2} className="w-full mt-8 lg:mt-6">
            <div className="bg-card rounded-xl shadow-strong border border-border overflow-hidden">
              <iframe
                src="https://trezco.odoo.com/formulario-tabita"
                style={{ width: '100%', height: '450px', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                title="Formulario de Contacto Odoo"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
