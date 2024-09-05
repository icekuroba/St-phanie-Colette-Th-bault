// Función para abrir/cerrar el menú lateral en móviles
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var body = document.body;
  sidebar.classList.toggle('open');
  body.classList.toggle('sidebar-open'); // Evita el desplazamiento de la página cuando el menú está abierto
}

// Función para cerrar el menú lateral
function closeSidebar() {
  var sidebar = document.getElementById('sidebar');
  var body = document.body;
  sidebar.classList.remove('open');
  body.classList.remove('sidebar-open');
}

// Evento para cerrar el menú al hacer clic fuera del mismo
document.addEventListener('click', function(event) {
  var sidebar = document.getElementById('sidebar');
  var menuTrigger = document.querySelector('.menu-trigger');
  
  // Cierra el menú si se hace clic fuera de él
  if (!sidebar.contains(event.target) && !menuTrigger.contains(event.target)) {
    closeSidebar();
  }
});

// Evento para el botón de búsqueda (si existe)
document.querySelector('.sidebar button')?.addEventListener('click', function(event) {
  event.preventDefault();
  searchSections();
});

// Función de búsqueda de secciones
function searchSections() {
  var input = document.querySelector('.sidebar input[type="text"]').value.toLowerCase();
  var links = document.querySelectorAll('.widget ul li a');

  links.forEach(function(link) {
    var sectionName = link.innerText.toLowerCase();
    if (sectionName.includes(input) && input !== "") {
      link.scrollIntoView({ behavior: 'smooth' });
      link.style.backgroundColor = '#A8DAB5';
      setTimeout(function() {
        link.style.backgroundColor = 'transparent';
      }, 2000);
    }
  });
}
