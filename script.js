alert('Привет, Мария, ментор Codegirl School!');
const themeToggler = document.getElementById('toggle');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});