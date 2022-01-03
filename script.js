
window.addEventListener('scroll',function() {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu () {
  const navbar = document.querySelector('.navbar');
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  })
}

toggleMenu();
