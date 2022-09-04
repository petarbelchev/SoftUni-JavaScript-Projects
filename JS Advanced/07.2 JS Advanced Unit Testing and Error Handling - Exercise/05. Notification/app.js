function notify(message) {
  const divElement = document.getElementById('notification');
  divElement.style.display = 'block';
  divElement.textContent = message;
  divElement.addEventListener('click', () => divElement.style.display = 'none');
}