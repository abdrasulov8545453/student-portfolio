// Приветствие в консоли

console.log("Добро пожаловать на моё портфолио!");

// Анимация появления элементов

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

// Запуск анимации

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});