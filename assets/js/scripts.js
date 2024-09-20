function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var menuTrigger = document.querySelector('.menu-trigger');

    // Alternar la clase "open" en el menú lateral
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');

    // Cambiar el icono de hamburguesa a "X" o viceversa
    if (sidebar.classList.contains('open')) {
        menuTrigger.textContent = '✖'; // Cambiar a "X" cuando el menú está abierto
    } else {
        menuTrigger.textContent = '☰'; // Cambiar a hamburguesa cuando el menú está cerrado
    }
}

function closeSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var menuTrigger = document.querySelector('.menu-trigger');

    // Remover la clase "open" del menú lateral y restablecer el ícono
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
    menuTrigger.textContent = '☰'; // Volver al icono de hamburguesa
}

// Cerrar el sidebar al hacer clic fuera de él
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var menuTrigger = document.querySelector('.menu-trigger');
    
    if (!sidebar.contains(event.target) && !menuTrigger.contains(event.target) && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});
