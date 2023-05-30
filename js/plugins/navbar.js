export default function initNavBar() {
  const hamburger = document.querySelector('.hamburger');
  const headerMenu = document.querySelector('.header-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      headerMenu.classList.remove('active');
    })
  );
}
