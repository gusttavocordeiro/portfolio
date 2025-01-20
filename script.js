// FAQ | Perguntas frequentes
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        // Alterna a classe "open" para exibir/esconder resposta
        answer.classList.toggle('open');

        // Alterna o ícone entre + e -
        if (answer.classList.contains('open')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        // Fecha outros itens abertos (opcional, para comportamento exclusivo)
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('open')) {
                otherAnswer.classList.remove('open');
                const otherIcon = otherAnswer.previousElementSibling.querySelector('i');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});



// Scroll suave - Lenis
document.addEventListener('DOMContentLoaded', function () {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
});
