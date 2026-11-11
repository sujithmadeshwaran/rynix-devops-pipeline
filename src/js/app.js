function updateTerminalClock() {
  const timeEl = document.getElementById('live-time');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateTerminalClock();
  setInterval(updateTerminalClock, 1000);

  // Interactive click to preview stages
  const stages = document.querySelectorAll('.stage');
  stages.forEach(stage => {
    stage.addEventListener('click', () => {
      stages.forEach(s => s.classList.remove('selected'));
      stage.classList.add('selected');
    });
  });
});
