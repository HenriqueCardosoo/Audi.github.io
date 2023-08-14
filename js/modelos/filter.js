export default function initFilter() {}
const filter = document.querySelector('.filtro-modelos');

filter.addEventListener('click', () => {
  filter.classList.toggle('ativo');
  console.log('foi');
});
