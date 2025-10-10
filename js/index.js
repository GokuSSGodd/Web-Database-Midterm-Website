const navbar = document.getElementById('navbar');
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

window.addEventListener('resize', function(){
  if (this.window.innerWidth >= 1050){
    CloseNav(); 
  }
});