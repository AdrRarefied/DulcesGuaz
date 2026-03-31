import { Factory, BadgeDollarSign, Truck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Directo de fábrica",
    description: "Producción propia con los más altos estándares de calidad e higiene.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios competitivos",
    description: "Al eliminar intermediarios, ofrecemos los mejores precios de mayoreo.",
  },
  {
    icon: Truck,
    title: "Capacidad de surtido",
    description: "Gran variedad de productos con disponibilidad inmediata para tu negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description: "Todos nuestros dulces cumplen con las normas sanitarias vigentes.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-candy-warm to-secondary/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por qué distribuir <span className="text-primary">Dulces Guaz</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Somos tu aliado confiable para hacer crecer tu negocio de dulces con producto de calidad.
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
