const menuButton = document.getElementById('menu');
const nav = document.getElementById('header-nav');
const faSolid = document.querySelectorAll('.fa-solid');
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
