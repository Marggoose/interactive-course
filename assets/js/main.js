// Приветствие в консоли
console.log("Добро пожаловать в Интерактивный курс по мобильной робототехнике!");

// Плавная прокрутка при клике на якорные ссылки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
    targetElement.scrollIntoView({
        behavior: "smooth"
    });
    }
});
});

// Простейшая валидация формы (если есть форма с id="contactForm")
document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Пожалуйста, заполните все поля формы.");
    }
    });
}
});

