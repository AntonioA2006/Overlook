/* ==========================================================
   PIEZA: Vista: Inicio
   Paso de armado: 7
   Requiere: core/registry.js
   Expone: #view-home
   ========================================================== */

Overlook.views.home = `
<section id="view-home" class="min-h-screen bg-hero relative flex items-center justify-center">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-6xl md:text-8xl font-serif text-overlook-pink mb-4 drop-shadow-lg">OVERLOOK</h1>
        <p class="text-xl md:text-2xl font-serif italic mb-10 drop-shadow-md">Come and stay forever, and ever, and ever...</p>
        <button onclick="navigate('rooms')" class="px-8 py-3 border-2 border-white/50 rounded-full hover:bg-white/20 transition backdrop-blur-md tracking-wider uppercase text-sm font-semibold">
            Buscar Habitaciones
        </button>
    </div>
</section>
`;
