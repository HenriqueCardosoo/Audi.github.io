export default function initFilter() {
  const filter = document.querySelector('.filtro-modelos');
  const filterModelos = document.querySelector('.filtro-bg');

  filter.addEventListener('click', () => {
    filter.classList.toggle('ativo');
    filterModelos.classList.toggle('ativo');

    const texto = filter.querySelector('p');

    if (texto.textContent === 'Abrir Filtro') {
      texto.textContent = 'Fechar Filtro';
    } else {
      texto.textContent = 'Abrir Filtro';
    }
  });

  const labels = document.querySelectorAll('.checkbox-label');

  labels.forEach((label) => {
    label.addEventListener('click', () => {
      label.classList.toggle('selected');
    });
  });
}
