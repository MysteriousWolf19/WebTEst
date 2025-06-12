// navbar.js
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  })
  .then(() => {
    const button = document.querySelector('.menu-button');
    const menu = document.querySelector('.dropdown-menu');

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    // Close menu on outside click
    document.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  })
  .catch(err => console.error('Error loading navbar:', err));
