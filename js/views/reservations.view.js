/* ==========================================================
   PIEZA: Vista: Mis reservas (contenedor)
   Paso de armado: 7
   Requiere: core/registry.js
   Expone: #view-reservations
   ========================================================== */

Overlook.views.reservations = `
<section id="view-reservations" class="hidden min-h-screen bg-overlook-bg pt-28 pb-12">
    <div class="container mx-auto px-6 max-w-4xl">
        <div class="flex justify-between items-center mb-10">
            <h2 class="text-4xl font-serif text-[#0A2E26]">Mis Reservaciones</h2>
            <button onclick="logout()" class="px-4 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 text-sm font-semibold transition">Cerrar Sesión</button>
        </div>
        <div id="reservations-list" class="space-y-6">
            <!-- Se inyecta con JS -->
        </div>
    </div>
</section>
`;
