const navbar = document.getElementById('navbar');
const hamburgericon = document.querySelector('.hamburger')
const navlinks = document.querySelectorAll('nav > a');

function ShowNav() {
  console.log(navbar.className);
  if (navbar.className === 'navbar') {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}

function CloseNav() {
  navbar.className = "navbar";
}

navlinks.forEach(link => {
  link.addEventListener('click', CloseNav)
}); 
