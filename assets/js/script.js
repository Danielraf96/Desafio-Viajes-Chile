/* =========================================================
   1) NAVBAR: cambia de transparente a sólido al hacer scroll
   ========================================================= */
const navbar = document.getElementById('mainNav');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});


const iconosConTooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');
iconosConTooltip.forEach(function (icono) {
  new bootstrap.Tooltip(icono);
});


const formulario = document.getElementById('formContacto');
const mensajeFormulario = document.getElementById('mensajeFormulario');

formulario.addEventListener('submit', function (evento) {


  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const asunto = document.getElementById('asunto').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || asunto === '' || mensaje === '') {
    mensajeFormulario.textContent = 'Por favor completa todos los campos.';
    mensajeFormulario.classList.remove('d-none', 'alert-success');
    mensajeFormulario.classList.add('alert-danger');
    return;
  }

  mensajeFormulario.textContent = '¡Gracias ' + nombre + '! Tu mensaje fue enviado.';
  mensajeFormulario.classList.remove('d-none', 'alert-danger');
  mensajeFormulario.classList.add('alert-success');

  formulario.reset();
});

//fin del script
