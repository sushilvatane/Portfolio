const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const main = document.querySelector('.main');
const portfolio = document.querySelector('.portfolio-parent');
const footer = document.querySelector('.footer');
function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
if (localStorage.getItem('dark-mode') === 'disabled') {
    enableDarkMode();
}
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    main.classList.add('dark-mode');
    portfolio.classList.add('dark-mode')
    footer.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    main.classList.remove('dark-mode');
    portfolio.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
}
document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".card");
    const damping = 0.1;

    document.addEventListener("mousemove", function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        card.style.left = mouseX + "px";
        card.style.top = mouseY + "px";
        card.style.right = mouseX + "px";
        card.style.bottom = mouseY + "px";
    });
});



