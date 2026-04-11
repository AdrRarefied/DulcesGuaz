import { Factory, BadgeDollarSign, Truck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Directo de fábrica",
    description: "Producción propia que te permite obtener mejor precio y mayor margen de ganancia.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios competitivos",
    description: "Precios que sí dejan utilidad. \nDiseñados para que puedas vender y ganar, no solo competir.",
  },
  {
    icon: Truck,
    title: "Capacidad de surtido",
    description: "Surtido constante. \nDisponibilidad continua para que nunca te quedes sin producto.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description: "Calidad que se vende. \nProductos con aceptación comprobada y cumplimiento sanitario.",
  },
];

const ValueProposition = () => {
  return (
        <section className="py-24 bg-gradient-to-b from-[#be107e]/40 to-[#fcfadf]">
      
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir  <span className="text-primary">Dulces Guaz</span> para tu negocio?
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabajamos contigo para que tengas productos que se vendan, roten rápido y generen utilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <b.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
