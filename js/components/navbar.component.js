/* ==========================================================
   PIEZA: Componente: barra de navegacion
   Paso de armado: 6
   Requiere: core/registry.js
   Expone: #navbar, #nav-links, #btn-auth
   ========================================================== */

Overlook.components.navbar = `
<nav class="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
    <div class="container mx-auto px-6 py-4 flex flex-wrap gap-3 justify-between items-center">
        <div class="flex items-center space-x-2 cursor-pointer" onclick="navigate('home')">
            <span class="text-white text-2xl font-serif tracking-widest drop-shadow-md">OVERLOOK</span>
        </div>
        <div class="flex flex-wrap gap-2" id="nav-links">
            <button onclick="navigate('about')" class="px-4 py-2 border border-white/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-sm text-sm tracking-wide">SOBRE NOSOTROS</button>
            <button onclick="navigate('rooms')" class="px-4 py-2 border border-white/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-sm text-sm tracking-wide">HABITACIONES</button>
            <button id="btn-auth" onclick="navigate('login')" class="px-4 py-2 border border-white/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-sm text-sm tracking-wide">INICIAR SESIÓN</button>
        </div>
    </div>
</nav>
`;
