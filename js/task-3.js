const fieldEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

fieldEl.addEventListener('input', () => {
  const inputValue = fieldEl.value.trim();

  if (inputValue === '') {
    nameOutputEl.textContent = 'Anonymous';
    return;
  }

  nameOutputEl.textContent = inputValue;
});
