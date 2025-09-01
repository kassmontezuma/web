document.addEventListener("DOMContentLoaded", () => {

    // Contacto
    const form = document.getElementById("contacto");
    if(form){
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("¡Gracias! Responderemos pronto.");
            this.reset();
        });
    }

    // Carrusel
    const slide = document.getElementById("carousel-slide");
    const images = slide.querySelectorAll("img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let counter = 0;

    function updateCarousel() {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        counter = (counter + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        counter = (counter - 1 + images.length) % images.length;
        updateCarousel();
    });

    // --- Tabs (Integrantes) ---
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    if(tabBtns.length > 0){
        tabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Desactivar todos
                tabBtns.forEach(b => b.classList.remove("active"));
                tabContents.forEach(c => c.classList.remove("active"));

                // Activar el actual
                btn.classList.add("active");
                document.getElementById(btn.dataset.tab).classList.add("active");
            });
        });
    }
});
