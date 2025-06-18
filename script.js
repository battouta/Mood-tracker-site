function setMood(mood) {
  document.getElementById('mood-display').textContent = mood;
  localStorage.setItem('mood', mood);
}

window.onload = function() {
  const savedMood = localStorage.getItem('mood');
  if (savedMood) {
    document.getElementById('mood-display').textContent = savedMood;
  }
};