/* ==========================================================
   PIEZA: Vista: Sobre nosotros
   Paso de armado: 7
   Requiere: core/registry.js
   Expone: #view-about
   ========================================================== */

Overlook.views.about = `
<section id="view-about" class="hidden min-h-screen bg-hero relative pt-24 pb-12">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 container mx-auto px-6">
        <h2 class="text-5xl md:text-6xl font-serif text-overlook-pink text-center mb-16 drop-shadow-lg mt-10">Sobre Nosotros</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Tarjeta 1 -->
            <div class="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl p-6 text-center flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Nuestra Esencia" class="w-full h-48 object-cover rounded-2xl mb-6">
                <h3 class="text-2xl font-serif text-gray-800 mb-4">Nuestra Esencia</h3>
                <p class="text-gray-700 font-sans text-sm leading-relaxed">Sumérgete en el paraíso. Somos más que un hotel; somos tu refugio de descanso con vistas que reconfortan el alma. Brinda con nosotros por días inolvidables frente al mar.</p>
            </div>
            <!-- Tarjeta 2 -->
            <div class="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl p-6 text-center flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" alt="Confort Integrado" class="w-full h-48 object-cover rounded-2xl mb-6">
                <h3 class="text-2xl font-serif text-gray-800 mb-4">Confort Integrado</h3>
                <p class="text-gray-700 font-sans text-sm leading-relaxed">Imagina despertar cada mañana con la suave brisa del mar y la luz dorada inundando tu habitación. Espacios diseñados para tu máximo confort y tranquilidad absoluta.</p>
            </div>
            <!-- Tarjeta 3 -->
            <div class="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl p-6 text-center flex flex-col items-center">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Gastronomía" class="w-full h-48 object-cover rounded-2xl mb-6">
                <h3 class="text-2xl font-serif text-gray-800 mb-4">Gastronomía a la Orilla</h3>
                <p class="text-gray-700 font-sans text-sm leading-relaxed">Vive experiencias gastronómicas exclusivas. Una cena bajo las estrellas a la orilla de la piscina y a solo unos pasos de la arena. Momentos perfectos para compartir.</p>
            </div>
        </div>
    </div>
</section>
`;
