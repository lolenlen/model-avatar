// script.js
const slider = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function slideLeft() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function slideRight() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);
