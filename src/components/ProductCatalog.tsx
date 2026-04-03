
import { Button } from "@/components/ui/button";
import { Download, ShoppingBag } from "lucide-react";

import CachekangurinChamoi from  "@/assets/CachekangurinChamoi.png";
import CacheKangurin from "@/assets/CacheKangurin.png";
import MegaCacheKangurin from "@/assets/Mega-CacheKangurin.png";
import KanguChara from "@/assets/Kangu-Chara.png";
import Devorasports from "@/assets/DevoraSport.png";
import DevoraGuaz from "@/assets/DeboraGuaz.png";
import Borachitos from "@/assets/BorachitosGuaz.png";
import Unicomeme from "@/assets/UnicomemeGuaz.png";
import Comesaurio from "@/assets/Comesaurio.png";
import VelaChispa from "@/assets/VelaChispa.png";
import Varillazo from "@/assets/varillazoGuaz.png";
import Cuartazo from  "@/assets/CuartazoGuaz.png"; 

const products = [
  { name: "Cachekangurin Chamoy", description: "Paleta de caramelo suave \n🌶️chamoy ", image:CachekangurinChamoi },
  { name: "Cache-Kangurin", description: " paletas de caramelo suave, disponibles en bolsas surtidas con 5 sabores diferentes:, Una mezcla ácida, frutal y tropical:\n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉🍓 Sandía–Fresa\n🥒Pepino\n🌰 Tamarindo ", image: CacheKangurin },
  { name: "MegaK-cheguaz", description: " paletas de caramelo suave, disponibles en bolsas surtidas con 5 sabores diferentes:, Una mezcla ácida, frutal y tropical:\n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉🍓 Sandía–Fresa\n🥒Pepino\n🌰 Tamarindo, \n🍐 Guayaba", image:MegaCacheKangurin },
  { name: "Kangu-Chara", description: "Pulpa de sabores \n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉Sandía\n🥒Pepino \n🍇Uva \n🍬Chicle", image: KanguChara },
  { name: "Devorasports", description: "pulpa suave saborizada,disponible en una caja surtidacon 7 sabores diferentes:Una experiencia frutal, divertida y refrescante:\n🍎 Manzana\n🫐 Mora azul\n🥭 Mango\n🍉 Sandía\n🍑 Durazno\n🍬 Chicle\n🥒 Pepino", image: Devorasports },
  { name: "Devoraguaz", description: "pulpa suave bi sabor,disponible en una caja surtidacon 5 combinaciones distintas: Una mezcla única de sabores dulces, frutales y picantes:\n🍉🥒 Sandía–Pepino\n🌰🍑 Tamarindo–Durazno\n🫐🍓 Mora azul–Chicle fresa\n🥭🌶 Mango–Chamoy", image: DevoraGuaz },
  { name: "Borachitos", description: "-Rompope -Whisky - Fresas con crema \n-Colores -Baileys -Kalua \n-Tequila -Coñac -Capuchino \n Tequila Plata -Tequila Azul -Choco chip \n-Tequila Reposado -Piña Colada -Coco con Ginebra\n Tres Leches -Malteada entre muchos más... ", image:Borachitos },
  { name: "Unicomeme", description: "pulpa suave saborizada, disponible en una caja surtida con 4 sabores diferentes:\n🫐 Mora azul\n🍬 Chicle\n🍈 Guayaba\n🌺 Jamaica", image: Unicomeme },
  { name: "Comesaurio", description: "pulpa suave saborizada, disponible en una caja surtida con 4 sabores diferentes:Una combinación refrescante y tropical:\n🫐 Mora azul\n🥭 Mango\n🍉 Sandía\n🥒 Pepino", image: Comesaurio },
  { name: ":Vela Chispa", description: "Multicolor con 5 colores en una misma chispa \n 10cm - 30seg \n 14cm - 50seg", image:VelaChispa },
  { name: "Varillazo", description: "Pulpa suabe con chile, \n🥭 Mango \n🌰 Tamarindo \n 🌶️Chamoy", image: Varillazo },
  { name: "Cuartazo", description: "Pulpa de futas con chile \n🥭 Mango \n🌰 Tamarindo \n 🌶️Chamoy \n🍓Fresa \n🍐 Guayaba \n🍉Sandía  \n🍍Piña ", image:Cuartazo },
];

const ProductCatalog = () => {
  return (
    <section id="productos" className="py-24 bg-slate-50/30">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Catálogo <span className="text-gradient-candy">Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Selecciona tus favoritos de nuestra línea exclusiva de dulces.
          </p>
        </div>

        {/* Grid de 2 columnas en pantallas grandes (Lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p) => {
            const [intro, saboresRaw] = p.description.split(" : ");
            const listaSabores = saboresRaw ? saboresRaw.split("\n") : [];

            return (
             <div
  key={p.name}
  className="group flex flex-col sm:flex-row bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-500 min-h-[280px]"
>
  {/* LADO IZQUIERDO: Imagen */}
  <div className="w-full sm:w-[35%] bg-white p-6 flex items-center justify-center relative border-b sm:border-b-0 sm:border-r border-slate-50">
    <img
      src={p.image}
      alt={p.name}
      className="w-full h-40 sm:h-full object-contain z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
    />
  </div>

  {/* LADO DERECHO: Texto adaptado */}
  <div className="w-full sm:w-[65%] p-6 flex flex-col justify-center">
    <div className="mb-4">
      <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {p.name}
      </h3>
      {/* Eliminamos 'line-clamp' para que el texto se adapte y crezca según necesite */}
      <p className="text-[13px] text-muted-foreground leading-relaxed italic whitespace-pre-line">
        {intro}
      </p>
    </div>

    {/* Lista de Sabores */}
    {listaSabores.length > 0 && (
      <div className="space-y-3">
        <div className="h-[1px] bg-slate-100 w-full" />
        <div className="flex flex-wrap gap-2">
          {listaSabores.map((sabor, i) => (
            <div 
              key={i} 
              className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg hover:bg-white hover:border-primary/30 transition-all"
            >
              <span className="text-sm">{sabor.trim().split(" ")[0]}</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                 {sabor.trim().split(" ").slice(1).join(" ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Pie de tarjeta simple sin el botón de bolsa */}
    <div className="mt-5">
      <span className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.2em]">
        Guaz México • Calidad Premium
      </span>
    </div>
  </div>
</div>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;