
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.body.classList.remove('sidebar-open');
}

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var menuTrigger = document.querySelector('.menu-trigger');
    
    if (!sidebar.contains(event.target) && !menuTrigger.contains(event.target) && sidebar.classList.contains('open')) {
        closeSidebar();
    }
});
