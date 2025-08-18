

// ACORDEÓN

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active');
  });
});


// MENÚ HAMBURGUESA

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navegar ol');       
const navLinks = document.querySelectorAll('.navegar ol li a'); 


menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active'); 
  menuToggle.classList.toggle('open'); 
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });
});
