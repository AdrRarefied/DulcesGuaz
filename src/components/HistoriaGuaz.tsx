import React from 'react';

const HistoriaGuaz = () => {
  return (
    // CORRECCIÓN: Fondo Magenta sólido como en tu imagen
<section id="sobre-nosotros" className="py-24 bg-gradient-to-br from-[#be107e] via-[#CE1289]/80 to-[#be107e]/60 overflow-hidden">


      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO IZQUIERDO: Texto en Blanco y Amarillo */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full border border-white/30">
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                Nuestra Historia
              </span>
            </div>
            
            {/* CORRECCIÓN: Texto principal en blanco y amarillo */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Más que dulces, llevamos 30 años creando <br/>
              <span className="text-yellow-300 italic">excusas para sonreír.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white leading-relaxed font-medium">
              <p className="italic">
                "En Dulces Guaz creemos que un dulce nunca es solo un dulce. Es una pausa en medio del caos, 
                una sonrisa en medio del día, un gesto pequeño con el poder de conectar a personas de todas las edades."
              </p>
              <p>
                Desde hace más de <span className="font-bold text-yellow-300 underline underline-offset-4">30 años</span>, 
                hemos llevado dulzura a cada rincón de México. No solo a través de sabores únicos —como nuestra emblemática 
                <span className="text-yellow-300 font-bold"> K-cheKangurin</span>— sino a través de momentos compartidos.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Tarjeta Magenta con Glassmorphism */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-[3rem] border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium mb-8 italic">
                "El verdadero valor de lo que hacemos está en lo que ocurre cuando alguien recibe uno de nuestros dulces y sonríe. 
                Regalamos un pedacito de felicidad."
              </p>
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
                  Dulces Guaz — Tres décadas compartiendo alegría
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CIERRE: Texto inferior en Blanco y Verde/Amarillo flúor */}
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Creemos en el poder de lo <span className="text-yellow-300">simple</span>, lo <span className="text-yellow-300">colorido</span> y lo <span className="text-yellow-300">alegre</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoriaGuaz;
