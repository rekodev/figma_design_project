const menuButton = document.getElementById('menu');
const nav = document.getElementById('header-nav');
const faSolid = document.querySelectorAll('.fa-solid');
const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');
const logo = document.querySelector('.logo');
const logoFooter = document.getElementById('footer-logo');

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

// If clicked outside of menu, the menu will close
window.addEventListener('click', (e) => {
  if (
    !e.target.matches('.button') &&
    !e.target.matches('.fa-solid') &&
    nav.style.display != 'none' &&
    !mediaQueryDesktop.matches
  ) {
    nav.style.display = 'none';
  }
});

// If you click on logo, it will redirect you to the home page
function redirectHome() {
  window.location.href = '../index.html';
}

logo.addEventListener('click', redirectHome);
logoFooter.addEventListener('click', redirectHome);
