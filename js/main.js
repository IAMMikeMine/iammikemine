// Funciones básicas para el sitio

// Función para manejar la navegación responsive
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes añadir funcionalidades JavaScript cuando estés listo
    // Por ejemplo, navegación responsive, filtros, etc.
    
    console.log('El sitio está cargado y listo para funcionar');
    
    // Ejemplo de función para futuras implementaciones de filtrado
    function filtrarArticulos(categoria) {
        // Implementación futura
        console.log('Filtrando por: ' + categoria);
    }
    
    // Función para detectar enlaces internos y hacer seguimiento
    const enlaces = document.querySelectorAll('a');
    
    enlaces.forEach(enlace => {
        if (enlace.hostname === window.location.hostname) {
            enlace.addEventListener('click', function(e) {
                console.log('Navegando a: ' + this.href);
            });
        }
    });
});

// Función para marcar el enlace activo en la navegación
function marcarEnlaceActivo() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.pathname;
        
        if (currentPage === linkPath || 
            (linkPath !== '/' && currentPage.startsWith(linkPath))) {
            link.classList.add('active');
        }
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', marcarEnlaceActivo);

// Función para agregar una clase CSS para el tema (futuro)
function cambiarTema(tema) {
    document.body.className = tema;
    localStorage.setItem('tema', tema);
}

// Cargar el tema guardado si existe
function cargarTemaGuardado() {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
        cambiarTema(temaGuardado);
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarTemaGuardado);