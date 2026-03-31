import { Facebook, Instagram, Music2 } from "lucide-react"; // Music2 se usa comúnmente para TikTok

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container text-center">
        <h3 className="font-display text-2xl font-bold text-candy-yellow mb-2">Dulces Guaz</h3>
        <p className="text-background/60 mb-6">Fábrica de Dulces · Guadalajara, Jalisco</p>
        
        {/* Enlaces de Navegación */}
        <div className="flex justify-center gap-6 text-sm text-background/50 mb-8">
          <a href="#productos" className="hover:text-candy-yellow transition-colors">Productos</a>
          <a href="#contacto" className="hover:text-candy-yellow transition-colors">Contacto</a>
          <a
            href="https://wa.me/523325834986"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-candy-yellow transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="flex justify-center gap-5 mb-8">
          <a href="https://www.facebook.com/FabricadeDulcesGuaz" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-candy-yellow transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/fabricadedulcesguaz/" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-candy-yellow transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@fabricadedulcesguaz" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-candy-yellow transition-colors">
            <Music2 size={24} />
          </a>
        </div>

        <p className="text-background/30 text-sm">
          © {new Date().getFullYear()} Dulces Guaz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
