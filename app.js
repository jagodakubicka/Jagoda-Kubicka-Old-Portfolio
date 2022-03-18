//scrollReveal
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal('.page-section-title', {
  delay: 100,
  origin: 'left',
  mobile: false,
});
ScrollReveal().reveal(
  '.about-me-container, .project-item-container, .contact-container',
  {
    delay: 200,
    mobile: false,
  }
);

// navbar menu

const toggleBtn = document.querySelector('.toggle-btn');
const menuItems = document.querySelector('.nav-list-container');

toggleBtn.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

// about me section- show more info on button click
const moreInfoBtn = document.querySelector('.about-me-btn');
const moreInfoText = document.querySelector('.about-me-more-info');
const arrow = document.querySelector('.fa-angle-down');

moreInfoBtn.addEventListener('click', () => {
  moreInfoText.classList.toggle('display');
});

arrow.addEventListener('click', () => {
  arrow.classList.toggle('rotate-btn');
});
