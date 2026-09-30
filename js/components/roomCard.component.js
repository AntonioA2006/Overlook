// Plantilla reutilizable; recibe datos y devuelve HTML.
Overlook.components.roomCard = function(room) {
const isSoldOut = room.qty <= 0;
return `
            <div class="bg-white rounded-3xl overflow-hidden shadow-xl p-4 flex flex-col transition hover:scale-105">
                <img src="${room.img}" alt="${room.name}" class="w-full h-48 object-cover rounded-2xl mb-4 ${isSoldOut ? 'grayscale' : ''}">
                <div class="text-center flex-grow flex flex-col justify-between">
                    <div>
                        <p class="text-xs tracking-widest text-gray-500 mb-2">${room.pax}</p>
                        <h3 class="text-2xl font-serif text-[#0A2E26] mb-1">${room.name}</h3>
                        <p class="text-sm italic text-gray-600 mb-2">from ${room.price} a night</p>
                        <p class="text-xs font-bold ${isSoldOut ? 'text-red-500' : 'text-green-600'} mb-4">
                            ${isSoldOut ? 'Agotada' : 'Disponibles: ' + room.qty}
                        </p>
                    </div>
                    <button onclick="startCheckout(${room.id})" 
                        ${isSoldOut ? 'disabled' : ''}
                        class="w-full py-2 rounded-full text-sm font-semibold transition ${isSoldOut ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#FF99D6] text-white hover:bg-pink-400 shadow-md'}">
                        ${isSoldOut ? 'Sin disponibilidad' : 'Reservar'}
                    </button>
                </div>
            </div>
        `;
};
