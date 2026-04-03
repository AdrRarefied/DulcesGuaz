import { Phone, ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/Dulces Guaz.png";

const floatingCandies = [
  { emoji: "🍬", className: "top-[10%] left-[5%] animate-float text-4xl md:text-5xl" },
  { emoji: "🍭", className: "top-[15%] right-[8%] animate-float-slow text-3xl md:text-4xl" },
  { emoji: "🍬", className: "bottom-[20%] left-[10%] animate-float-reverse text-3xl md:text-5xl" },
  { emoji: "🍭", className: "bottom-[15%] right-[5%] animate-float text-4xl md:text-6xl" },
  { emoji: "✨", className: "top-[30%] right-[15%] animate-float-slow text-2xl md:text-3xl" },
  { emoji: "🍬", className: "top-[60%] right-[20%] animate-float-reverse text-3xl md:text-4xl" },
];

const Hero = () => {
  const whatsappUrl = "https://wa.me/523325834986?text=Hola%2C%20me%20interesa%20ser%20distribuidor%20de%20Dulces%20Guaz";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dulces mexicanos cachetadas borrachitos y cucharas de tamarindo"
          className="w-full h-full object-cover scale-105 animate-pulse-soft"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-primary/40 to-candy-yellow/20" />
        {/* Extra glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Floating candy emojis */}
      {floatingCandies.map((candy, i) => (
        <span
          key={i}
          className={`absolute opacity-60 pointer-events-none select-none ${candy.className}`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {candy.emoji}
        </span>
      ))}

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          {/* Logo with bounce-in */}
          <img
            src={logo}
            alt="Dulces Guaz Logo"
            className="w-48 sm:w-64 md:w-72 drop-shadow-2xl animate-bounce-in"
          />

          {/* Badge with shimmer */}
          <span
            className="inline-block rounded-full bg-gradient-to-r from-candy-yellow via-candy-yellow/80 to-candy-yellow px-5 py-2 text-sm font-bold text-secondary-foreground shadow-lg animate-slide-up"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              backgroundSize: "200% 100%",
            }}
          >
            <Sparkles className="inline h-4 w-4 mr-1 animate-pulse" />
            Fábrica de Dulces · Guadalajara
          </span>

          {/* Headline with staggered animation */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground">
            <span className="block animate-slide-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              Dulces que
            </span>
            <span
              className="block text-candy-yellow animate-scale-up drop-shadow-[0_0_30px_hsl(var(--candy-yellow)/0.6)]"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              conquistan
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.7s", opacity: 0 }}>
              paladares
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-primary-foreground/85 max-w-lg font-body animate-slide-up"
            style={{ animationDelay: "0.9s", opacity: 0 }}
          >
            Fabricamos dulces de la más alta calidad con precios de mayoreo.
            Conviértete en distribuidor autorizado y haz crecer tu negocio.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-5 pt-6 animate-slide-up"
            style={{ animationDelay: "1.1s", opacity: 0 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-candy-yellow to-candy-orange text-secondary-foreground font-bold text-lg rounded-2xl px-10 py-5 shadow-[0_8px_30px_hsl(var(--candy-yellow)/0.4)] hover:shadow-[0_12px_40px_hsl(var(--candy-yellow)/0.7)] hover:scale-[1.05] active:scale-95 transition-all duration-300"
            >
              <Phone className="h-6 w-6 group-hover:animate-bounce" />
              ¡Quiero ser Distribuidor!
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer" />
            </a>
            <a
              href="#productos"
              className="group inline-flex items-center justify-center gap-3 bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold text-lg rounded-2xl px-10 py-5 border-2 border-primary-foreground/30 shadow-lg hover:bg-candy-yellow hover:text-secondary-foreground hover:border-candy-yellow hover:scale-[1.05] active:scale-95 transition-all duration-300"
            >
              Explorar Catálogo
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform animate-float" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
