// export default function initNavBar() {
//   const hamburger = document.querySelector('.hamburger');
//   const headerMenu = document.querySelector('.header-menu');
//   const ultimoScroll = 0;

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     headerMenu.classList.toggle('active');
//   });

//   document.querySelectorAll('.nav-link').forEach((n) =>
//     n.addEventListener('click', () => {
//       hamburger.classList.remove('active');
//       headerMenu.classList.remove('active');
//     })
//   );

//   window.addEventListener('scroll', function () {
//     var atualScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (atualScroll > ultimoScroll) {
//       if (headerMenu.classList.contains('active')) {
//         headerMenu.classList.remove('active');
//         hamburger.classList.remove('active');
//       }
//     }

//     ultimoScroll = atualScroll;
//   });
// }
