import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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
import Varillazo from "@/assets/VarillazoGuaz.png";
import Cuartazo from  "@/assets/CuartazoGuaz.png"; 

const products = [
  { name: "Devoraguaz", description: "Pulpa suave bisabor, disponible en una caja surtidacon 5 combinaciones distintas: Una mezcla única de sabores dulces, frutales y picantes:\n🍉🥒 Sandía–Pepino\n🌰🍑 Tamarindo–Durazno\n🫐🍓 Mora azul–Chicle fresa\n🥭🌶 Mango–Chamoy", image: DevoraGuaz },
  { name: "Cache-Kangurin", description: "Paletas de caramelo suave, disponibles en bolsas surtidas con 5 sabores diferentes:, Una mezcla ácida, frutal y tropical:\n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉🍓 Sandía–Fresa\n🥒Pepino\n🌰 Tamarindo ", image: CacheKangurin },
  { name: "Kangu-Chara", description: "Pulpa de sabores \n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉Sandía\n🥒Pepino \n🍇Uva \n🍬Chicle", image: KanguChara },
  { name: "Borachitos", description: "-Rompope -Whisky - Fresas con crema \n-Colores -Baileys -Kalua \n-Tequila -Coñac -Capuchino \n Tequila Plata -Tequila Azul -Choco chip \n-Tequila Reposado -Piña Colada -Coco con Ginebra\n Tres leches -Malteada entre muchos más... ", image:Borachitos },
];

  {/*Todos los productos  }
    { name: "Cachekangurin Chamoy", description: "Paleta de caramelo suave \n🌶️chamoy ", image:CachekangurinChamoi },
    { name: "MegaK-cheguaz", description: " paletas de caramelo suave, disponibles en bolsas surtidas con 5 sabores diferentes:, Una mezcla ácida, frutal y tropical:\n🍊 Naranja \n🫐 Mora azul\n🥭 Mango\n🍉🍓 Sandía–Fresa\n🥒Pepino\n🌰 Tamarindo, \n🍐 Guayaba", image:MegaCacheKangurin },
    { name: "Unicomeme", description: "pulpa suave saborizada, disponible en una caja surtida con 4 sabores diferentes:\n🫐 Mora azul\n🍬 Chicle\n🍈 Guayaba\n🌺 Jamaica", image: Unicomeme },
    { name: "Comesaurio", description: "pulpa suave saborizada, disponible en una caja surtida con 4 sabores diferentes:Una combinación refrescante y tropical:\n🫐 Mora azul\n🥭 Mango\n🍉 Sandía\n🥒 Pepino", image: Comesaurio },
    { name: "Vela Chispa", description: "Multicolor con 5 colores en una misma chispa \n 10cm - 30seg \n 14cm - 50seg", image:VelaChispa },
    { name: "Varillazo", description: "Pulpa suabe con chile, \n🥭 Mango \n🌰 Tamarindo \n 🌶️Chamoy", image: Varillazo },
    { name: "Cuartazo", description: "Pulpa de futas con chile \n🥭 Mango \n🌰 Tamarindo \n 🌶️Chamoy \n🍓Fresa \n🍐 Guayaba \n🍉Sandía  \n🍍Piña ", image:Cuartazo },
    { name: "Devorasports", description: "pulpa suave saborizada,disponible en una caja surtidacon 7 sabores diferentes:Una experiencia frutal, divertida y refrescante:\n🍎 Manzana\n🫐 Mora azul\n🥭 Mango\n🍉 Sandía\n🍑 Durazno\n🍬 Chicle\n🥒 Pepino", image: Devorasports },
  
    */}

const ProductCatalog = () => {
  // Función para abrir WhatsApp con el nombre del producto
  const handleQuote = (productName: string) => {
    const baseMessage = `Hola Dulces Guaz! Me interesa recibir información y cotización del producto: ${productName}`;
    window.open(`https://wa.me/523325834986?text=${encodeURIComponent(baseMessage)}`, "_blank");
  };

  return (
    <section id="productos" className="py-24 bg-pink-50">
      <div className="container max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Productos más <span className="text-gradient-candy">Vendidos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Selección de productos diseñados para moverse rápido, generar recompra y utilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p) => {
            // Separamos la descripción para manejar los sabores
            const [intro, saboresRaw] = p.description.split(":");
            const listaSabores = saboresRaw ? saboresRaw.trim().split("\n") : [];

            return (
              <div key={p.name} className="group flex flex-col sm:flex-row bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 min-h-[280px]">
                {/* Imagen */}
                <div className="w-full sm:w-[35%] bg-white p-6 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-50">
                  <img src={p.image} alt={p.name} className="w-full h-40 sm:h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Contenido */}
                <div className="w-full sm:w-[65%] p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed italic whitespace-pre-line mb-4">
                      {intro}
                    </p>

                    {listaSabores.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {listaSabores.map((sabor, i) => (
                          <div key={i} className="flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg text-[11px]">
                            {sabor.trim()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Botón Cotizar */}
                  <div className="mt-6">
                    <Button 
                      onClick={() => handleQuote(p.name)}
                      variant="outline"
                      className="w-full sm:w-auto rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest transition-all"
                    >
                      Cotizar este producto
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

          <div className="flex flex-col items-center justify-center w-full py-16 px-4"> 
            <div className="text-center space-y-6 flex flex-col items-center">
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg font-medium">
                ¿Listo para vender?
              </p>

              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group"
              >
                <a 
                  href="/CatalogoDulcesGuaz-2026-.pdf" 
                  download="Catalogo-Dulces-Guaz-2026.pdf" 
                  className="flex items-center gap-3"
                >
                  <Download className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                  <span>Catálogo Completo</span>
                </a>
              </Button>


            </div>
          </div>


       </div>
    </section>
  );
};

export default ProductCatalog;





