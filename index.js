const slideshow = document.querySelector('.slideshow');
const images = document.querySelectorAll('.slideshow img');

// BUTTONS
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// DOTS
const dots = document.querySelectorAll('.dot');

let value = 100;
slideshow.style.transform = `translateX(${-value}%)`;
dots[value / 100 - 1].style.opacity = '1';

nextBtn.addEventListener('click', () => {
    if (value > (images.length - 2) * 100) return;
    value += 100;
    slideshow.style.transition = 'transform .4s ease-in-out';
    slideshow.style.transform = `translateX(${-value}%)`;
});

prevBtn.addEventListener('click', () => {
    if (value < 100) return;
    value -= 100;
    slideshow.style.transition = 'transform .4s ease-in-out';
    slideshow.style.transform = `translateX(${-value}%)`;
});

slideshow.addEventListener('transitionend', () => {
    if (images[value / 100].id === 'first-clone') {
        slideshow.style.transition = 'none';
        value = 100;
        slideshow.style.transform = `translateX(${-value}%)`;
    }
    if (images[value / 100].id === 'last-clone') {
        slideshow.style.transition = 'none';
        value = (images.length - 2) * 100;
        slideshow.style.transform = `translateX(${-value}%)`;
    }

    // DOTS
    dots.forEach((dot) => {dot.style.opacity = '0.4';});
    dots[value / 100 - 1].style.opacity = '1';
});