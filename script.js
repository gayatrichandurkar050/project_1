const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 12px 30px rgba(61, 103, 74, 0.12)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 5px 12px rgba(77, 65, 34, 0.04)';
  });
});

const addToCartButtons = document.querySelectorAll('.add-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Added';
    button.style.background = '#60744d';
  });
});
