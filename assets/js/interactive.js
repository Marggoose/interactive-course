// === АККОРДЕОН ===
// Элемент должен иметь класс .accordion и внутри блок .accordion-content
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((acc) => {
    const header = acc.querySelector(".accordion-header");
    const content = acc.querySelector(".accordion-content");

    if (header && content) {
        content.style.display = "none"; // По умолчанию скрываем

        header.addEventListener("click", () => {
        const isOpen = content.style.display === "block";
        content.style.display = isOpen ? "none" : "block";
        header.classList.toggle("active", !isOpen);
        });
    }
    });
});

  // === ПОДСВЕТКА АКТИВНОГО РАЗДЕЛА В МОДУЛЯХ ===
const moduleLinks = document.querySelectorAll("main ul li a");

moduleLinks.forEach(link => {
    if (link.href === window.location.href) {
    link.classList.add("active-module");
    }
});
