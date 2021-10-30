const boton = document.getElementById('btn-menu');
const menu = document.querySelector('.menu');

boton.addEventListener('click', (e) => {
   console.log('hiciste click');
   menu.classList.toggle('show');
});

$(document).ready(function () {
   console.log('jQuery funcionando');
});

// const nombre = document.querySelector('.testimonials-name');
// nombre.textContent = 'Juan Carlos Santiago';

$('.testimonials-name').html('Juan Santiago');

console.log(document.querySelectorAll('li'));

const inputEmail = document.getElementById('email');
inputEmail.focus();
