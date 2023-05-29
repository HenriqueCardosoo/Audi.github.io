export default function initPerformace() {
  document.addEventListener('DOMContentLoaded', function () {
    var elementos = document.querySelectorAll('.performace'); // Substitua '.seu-elemento' pelo seletor dos elementos desejados
    function verificarVisibilidade() {
      for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var rect = elemento.getBoundingClientRect();

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
