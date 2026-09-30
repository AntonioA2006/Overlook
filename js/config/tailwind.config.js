/* ==========================================================
   PIEZA: Configuracion de Tailwind (colores y fuentes)
   Paso de armado: 2
   Requiere: CDN de Tailwind cargado antes
   Expone: tailwind.config
   ========================================================== */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                overlook: {
                    pink: '#FF99D6',
                    dark: '#0A2E26',
                    bg: '#FEEAF5',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            }
        }
    }
}
