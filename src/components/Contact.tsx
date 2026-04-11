import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  // 1. URL para el botón lateral "Escríbenos ahora"
  const mensajeDirecto = "Hola Dulces Guaz, vengo de la página web y quiero más información.";
  const whatsappUrl = `https://wa.me/523325834986?text=${encodeURIComponent(mensajeDirecto)}`;

  // 2. Validación de solo números y máximo 10 caracteres
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  // 3. Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Por favor, ingresa un número de teléfono válido a 10 dígitos.");
      return;
    }

    const text = encodeURIComponent(
      `Hola, soy ${formData.name}. ${formData.message}. Mi teléfono: ${formData.phone}`
    );
    window.open(`https://wa.me/523325834986?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ¿Listo para hacer crecer tu negocio? Escríbenos y te atendemos de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-background rounded-2xl p-8 border border-border">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Nombre completo</label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Teléfono</label>
              <input
                type="tel"
                required
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="3312345678"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
              {formData.phone.length > 0 && formData.phone.length < 10 && (
                <p className="text-[10px] text-red-500 mt-1 font-medium">Faltan {10 - formData.phone.length} dígitos</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Mensaje</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Me interesa ser distribuidor..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-candy text-primary-foreground rounded-full font-semibold text-base shadow-candy hover:opacity-90"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar por WhatsApp
            </Button>
          </form>

          {/* Información de contacto lateral */}
          <div className="space-y-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-candy-green/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">WhatsApp directo</h3>
                <p className="text-muted-foreground">33 2583 4986</p>
                <span className="text-sm text-accent font-semibold italic">Escríbenos ahora </span>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-background rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Ubicación</h3>
                <p className="text-muted-foreground">Zona Metropolitana de Guadalajara, Jalisco</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-candy-yellow/20 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-candy-orange" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Horario</h3>
                <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Sábado: 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
