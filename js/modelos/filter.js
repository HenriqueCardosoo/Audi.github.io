export default function initFilter() {}
const filter = document.querySelector('.modelos-container');

filter.addEventListener('click', () => {
  filter.classList.toggle('ativo');
  console.log('foi');
});
