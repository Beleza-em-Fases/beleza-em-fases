//Lógica dos botões - slide (Luiza)
let slideIndex = 0;
const slides = document.querySelectorAll('.grid-item-dicas');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const slidesToShow = 2;

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

    if (slideIndex >= slides.length - 2) {
        slideIndex = slides.length - 2;
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