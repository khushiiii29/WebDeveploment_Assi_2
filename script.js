
const links = document.querySelectorAll('.side-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = link.dataset.target;

        sections.forEach(s => {
            s.classList.remove('visible');
            if (s.id === target) s.classList.add('visible');
        });
    });
});

