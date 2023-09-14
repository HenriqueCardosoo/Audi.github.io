export default function initPerformace() {
  document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.performace'); // Substitua '.seu-elemento' pelo seletor dos elementos desejados
    function verificarVisibilidade() {
      for (let i = 0; i < elementos.length; i += 1) {
        const elemento = elementos[i];
        const rect = elemento.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          elemento.classList.add('ativo');
        } else if (elemento.classList.contains('ativo')) {
          elemento.classList.remove('ativo');
        }
      }
    }

    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade();
  });
}
