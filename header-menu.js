const menuButton = document.getElementById('menu');
const nav = document.getElementById('header-nav');
const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');

function toggleNav() {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}

menuButton.addEventListener('click', toggleNav);
window.addEventListener('resize', () => {
  if (mediaQueryDesktop.matches) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});
