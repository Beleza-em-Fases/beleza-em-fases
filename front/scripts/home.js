// Maria: Exibir e fechar o menu do usuário
const userIcon = document.getElementById('userIcon');
const userMenu = document.getElementById('userMenu');

userIcon.addEventListener('click', function () {
    if (userMenu.style.display === 'block') {
        userMenu.style.display = 'none';
    } else {
        userMenu.style.display = 'block';
    }
});

const submenus = document.querySelectorAll(".submenu");

        submenus.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options").classList.remove("display-active");
            })
        });

        const submenuOptions = document.querySelectorAll(".submenu-option");

        submenuOptions.forEach(element => {
            element.addEventListener("mouseover", () => {
                element.querySelector(".submenu-options-inner").classList.add("display-active");
            })

            element.addEventListener("mouseout", () => {
                element.querySelector(".submenu-options-inner").classList.remove("display-active");
            })
        });

//Lógica dos botões - slide (Luiza)
let slideIndex = 0;
const slides = document.querySelectorAll('.grid-item-dicas');
const slides1 = document.querySelectorAll('.grid-item-indicacao');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const slidesToShow = 4;

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    if (slideIndex + slidesToShow > slides.length) {
        slideIndex = slides.length - slidesToShow;
    }

    if (slideIndex < 0) {
        slideIndex = 0;
    }

    if (slideIndex >= slides.length - 4) {
        slideIndex = slides.length - 4;
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }

    if (slideIndex <= 0) {
        slideIndex = 0;
        previousButton.style.visibility = 'hidden';
    } else {
        previousButton.style.visibility = 'visible';
    }

    for (let i = slideIndex; i < slideIndex + slidesToShow; i++) {
        slides[i].style.display = 'grid';
    }
}

function nextSlide() {
    slideIndex += 1;
    showSlides();
}

function previousSlide() {
    slideIndex -= 1;
    showSlides();
}

showSlides();
//Lógica dos botões - slide (Luiza)