
const navBar = document.querySelector('nav');
const linksDaNav = navBar.querySelectorAll('a');

linksDaNav.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.alert('Conteúdo ainda não disponível!');
    });
});