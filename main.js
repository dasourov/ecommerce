const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const optionsDiv = item.querySelector('.options-div');
    optionsDiv.classList.toggle('hidden'); 
  });
});
