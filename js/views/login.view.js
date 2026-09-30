/* ==========================================================
   PIEZA: Vista: Inicio de sesion
   Paso de armado: 7
   Requiere: core/registry.js
   Expone: #view-login
   ========================================================== */

Overlook.views.login = `
<section id="view-login" class="hidden min-h-screen bg-overlook-dark pt-28 pb-12 flex items-center justify-center">
    <div class="max-w-md w-full mx-4 text-center">
        <h2 class="text-3xl font-sans font-semibold text-white mb-2">Inicia sesión o crea una cuenta</h2>
        <p class="text-sm text-gray-300 mb-8">Puedes iniciar sesión con tu cuenta de Overlook.com para acceder a nuestros servicios y ver tus reservas.</p>

        <div class="mb-8">
            <label class="block text-left text-white text-xs font-bold mb-2 uppercase tracking-wide">E-mail</label>
            <input type="email" placeholder="INDICA TU DIRECCION DE EMAIL" class="w-full bg-transparent border-2 border-overlook-pink rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10">
            <button onclick="loginGenerico('manual')" class="w-full mt-4 bg-overlook-pink text-white font-semibold py-3 rounded-full hover:bg-pink-400 transition shadow-lg shadow-pink-500/30">
                CONTINUAR
            </button>
        </div>

        <div class="flex items-center justify-center mb-6">
            <div class="h-px bg-overlook-pink w-1/4"></div>
            <span class="text-overlook-pink px-4 text-sm">usar una de estas opciones</span>
            <div class="h-px bg-overlook-pink w-1/4"></div>
        </div>

        <div class="flex justify-center gap-6">
            <button onclick="loginGenerico('Google')" class="w-16 h-16 bg-overlook-pink rounded-2xl flex items-center justify-center hover:scale-105 transition shadow-lg shadow-pink-500/20">
                <span class="text-white font-bold text-2xl">G</span>
            </button>
            <button onclick="loginGenerico('Apple')" class="w-16 h-16 bg-overlook-pink rounded-2xl flex items-center justify-center hover:scale-105 transition shadow-lg shadow-pink-500/20">
                <span class="text-white font-bold text-2xl"></span>
            </button>
            <button onclick="loginGenerico('Facebook')" class="w-16 h-16 bg-overlook-pink rounded-2xl flex items-center justify-center hover:scale-105 transition shadow-lg shadow-pink-500/20">
                <span class="text-white font-bold text-2xl">f</span>
            </button>
        </div>
    </div>
</section>
`;
