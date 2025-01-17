document.addEventListener("DOMContentLoaded", function() {
    const tarjetas = document.querySelectorAll('.s_tarjeta');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});
