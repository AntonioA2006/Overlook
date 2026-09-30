/* ==========================================================
   PIEZA: Navegacion entre vistas
   Paso de armado: 4
   Requiere: HTML montado (main.js). Llama a renderRooms() y renderReservations()
   Expone: window.navigate(viewId)
   ========================================================== */

// SISTEMA DE NAVEGACIÓN
window.navigate = async function(viewId) {
    if (!Overlook.views[viewId]) return;
    if (viewId === 'reservations' && !localStorage.getItem('overlook_user')) viewId = 'login';
    document.querySelectorAll('main > section').forEach(el => el.classList.add('hidden'));
    document.getElementById('view-' + viewId).classList.remove('hidden');

    const navbar = document.getElementById('navbar');
    if(viewId === 'home' || viewId === 'about') {
        navbar.classList.remove('bg-[#0A2E26]', 'bg-overlook-pink', 'shadow-md');
        navbar.classList.add('text-white');
    } else if (viewId === 'rooms') {
        navbar.classList.remove('bg-[#0A2E26]', 'text-white');
        navbar.classList.add('bg-overlook-pink', 'shadow-md');
        await renderRooms();
    } else {
        navbar.classList.remove('bg-overlook-pink', 'text-white');
        navbar.classList.add('bg-[#0A2E26]', 'shadow-md');
    }

    if(viewId === 'reservations') await renderReservations();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
