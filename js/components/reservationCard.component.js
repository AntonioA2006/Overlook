// Plantilla reutilizable; recibe datos y devuelve HTML.
Overlook.components.reservationCard = function(res) {

return `
        <div class="bg-white p-6 rounded-3xl shadow-md flex justify-between items-center border-l-8 border-overlook-pink">
            <div>
                <p class="text-xs text-gray-500 font-bold mb-1">CÓDIGO: ${res.id}</p>
                <h4 class="text-xl font-serif text-[#0A2E26]">${res.roomName}</h4>
                <p class="text-sm text-gray-600 mt-1">Llegada: <span class="font-semibold">${res.checkin}</span> | Salida: <span class="font-semibold">${res.checkout}</span></p>
                <p class="text-sm text-gray-800 font-bold mt-1">Total: ${res.price} / Noche · ${res.nights} noches · $${res.total} MXN</p>
            </div>
            <button onclick="openCancelModal('${res.id}')" class="px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-50 transition text-sm font-semibold">
                Cancelar
            </button>
        </div>
    `;
};
