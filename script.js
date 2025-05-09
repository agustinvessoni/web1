const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío si hay errores

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const consulta = document.getElementById('consulta').value.trim();
        const telefono = document.getElementById('telefono').value.trim();

        let errores = [];

        // Validación del nombre
        if (nombre === '') {
            errores.push('El nombre es obligatorio.');
        }

        // Validación del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push('El email no es válido.');
        }

        // Valido que el teléfono tenga números
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono)) {
            errores.push('El teléfono debe contener solo números.');
        }

        if (errores.length > 0) {
            alert(errores.join('\n'));
        } else {
            alert('Formulario enviado correctamente');
            formulario.reset();
        }
    });
});


window.sr = ScrollReveal();
      
sr.reveal('.container',{
duration: 1500,
origin: 'top',
distance: '20px'   
});


// Mostrar/ocultar el botón según el scroll
window.onscroll = function () {
    const btn = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Volver arriba cuando se hace click
  document.getElementById("btnVolverArriba").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
