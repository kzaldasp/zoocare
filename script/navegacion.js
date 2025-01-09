function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
}

window.onclick = function(event) {
    const menu = document.querySelector('.menu');
    const menuItems = document.getElementById('menuItems');
    if (!menu.contains(event.target) && menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
    }
}