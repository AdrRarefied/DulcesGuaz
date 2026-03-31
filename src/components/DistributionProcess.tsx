import { MessageSquare, ClipboardList, Truck, Handshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o llena el formulario de contacto.",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Recibe tu cotización",
    description: "Te enviamos precios de mayoreo y opciones de surtido.",
  },
  {
    icon: Truck,
    step: "3",
    title: "Realiza tu pedido",
    description: "Haz tu primer pedido con un mínimo accesible.",
  },
  {
    icon: Handshake,
    step: "4",
    title: "¡Empieza a vender!",
    description: "Recibe tu mercancía y comienza a generar ganancias.",
  },
];

const DistributionProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/15 via-background to-primary/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sé <span className="text-primary">Distribuidor</span> en 4 pasos
          </h2>
          <p className="text-muted-foreground text-lg">
            Convertirte en distribuidor autorizado de Dulces Guaz es rápido y sencillo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-5 shadow-candy">
                <s.icon className="h-9 w-9 text-primary-foreground" />
              </div>

              <span className="inline-block bg-candy-yellow text-secondary-foreground text-sm font-bold rounded-full px-3 py-0.5 mb-3">
                Paso {s.step}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionProcess;
