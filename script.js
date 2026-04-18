let links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

