// Scroll suave ao clicar nos links da navbar
document.querySelectorAll('nav a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if(section) {
      window.scrollTo({
        top: section.offsetTop - 56,
        behavior: 'smooth'
      });
    }
  });
});
