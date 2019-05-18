const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('.nav_links li');


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(links => {
    links.classList.toggle('fade');
  })
});
