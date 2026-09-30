/* ==========================================================
   PIEZA: Servicio de autenticacion (simulado)
   Paso de armado: 5
   Requiere: router.js, state.js
   Expone: updateAuthUI(), window.loginGenerico(provider), window.logout()
   ========================================================== */

// SISTEMA DE AUTENTICACIÓN
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('overlook_user'));
    const btnAuth = document.getElementById('btn-auth');
    const navLinks = document.getElementById('nav-links');

    const oldResBtn = document.getElementById('btn-mis-reservas');
    if(oldResBtn) oldResBtn.remove();

    if (user) {
        btnAuth.textContent = user.nombre;
        btnAuth.onclick = () => window.navigate('reservations');

        const resBtn = document.createElement('button');
        resBtn.id = 'btn-mis-reservas';
        resBtn.innerText = 'MIS RESERVAS';
        resBtn.className = 'px-4 py-2 border border-white/50 text-white rounded-full hover:bg-white/20 transition backdrop-blur-sm text-sm tracking-wide bg-white/10';
        resBtn.onclick = () => window.navigate('reservations');
        navLinks.insertBefore(resBtn, btnAuth);
    } else {
        btnAuth.textContent = 'INICIAR SESIÓN';
        btnAuth.onclick = () => window.navigate('login');
    }
}

window.loginGenerico = function(provider) {
    let email = 'invitado@overlook.com';
    let nombre = 'Usuario ' + provider;
    if (provider === 'Apple') email = 'invitado@icloud.com';
    else if (provider === 'Google') email = 'invitado@gmail.com';
    else if (provider === 'Facebook') email = 'invitado@facebook.com';

    if (provider === 'manual') {
        const input = document.querySelector('#view-login input[type=email]');
        if (!input.value || !input.reportValidity()) return;
        email = input.value.trim().toLowerCase();
        nombre = email.split('@')[0];
    }
    const user = { email, nombre };
    localStorage.setItem('overlook_user', JSON.stringify(user));
    updateAuthUI();

    if(currentRoomToBook) window.startCheckout(currentRoomToBook.id);
    else window.navigate('rooms');
}

window.logout = function() {
    localStorage.removeItem('overlook_user');
    updateAuthUI();
    window.navigate('home');
}
