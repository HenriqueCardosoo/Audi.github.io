export default function initSongMotor() {
  const meuAudio = document.getElementById('meuAudio');
  const playPause = document.getElementById('playPauseBtn');
  const currentTimeElement = document.getElementById('currentTime');
  const durationElement = document.getElementById('duration');

  playPause.addEventListener('click', () => {
    if (meuAudio.paused) {
      meuAudio.play();
      playPause.src = 'img/RS6/botao-pause.svg';
    } else {
      meuAudio.pause();
      playPause.src = 'img/RS6/botao-play.svg';
    }
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  meuAudio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(meuAudio.currentTime);
    const duration = Math.floor(meuAudio.duration);
    currentTimeElement.textContent = formatTime(currentTime);
    durationElement.textContent = formatTime(duration);
  });
}
