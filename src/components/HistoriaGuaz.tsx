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
              30 años creando productos que sí se venden <br/>
              <span className="text-yellow-300 italic">productos que conectan con el cliente y generan ventas.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-white leading-relaxed font-medium">
              <p>
                Durante <span className="font-bold text-yellow-300 underline underline-offset-4">30 años</span>, 
                hemos desarrollado productos con alta rotación, calidad constante y aceptación en el mercado.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Tarjeta Magenta con Glassmorphism */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-[3rem] border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium mb-8 italic">
                "Nuestro enfoque no es solo hacer dulces es ayudarte a vender más"
              </p>
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
                  Dulces Guaz — 30 AÑOS EN EL MERCADO
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CIERRE: Texto inferior en Blanco y Verde/Amarillo flúor */}
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Calidad, rotación y <span className="text-yellow-300">sabor</span> que generan <span className="text-yellow-300">ventas</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoriaGuaz;
