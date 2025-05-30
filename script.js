
// Modo claro / oscuro

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


// Validación de formularios de contacto y reserva.

document.addEventListener('DOMContentLoaded', function () {
    // Formulario de contacto
    const formularioContacto = document.getElementById('formulario');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function (e) {
            e.preventDefault();

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

            // Validación del teléfono
            const telefonoRegex = /^[0-9]+$/;
            if (!telefonoRegex.test(telefono)) {
                errores.push('El teléfono debe contener solo números.');
            }

            if (errores.length > 0) {
                alert(errores.join('\n'));
            } else {
                alert('Formulario enviado correctamente');
                formularioContacto.reset();
            }
        });
    }

// Formulario de reservas
const formularioReservas = document.getElementById('formulario-reservas');

if (formularioReservas) {
    formularioReservas.addEventListener('submit', async function (e) {
        e.preventDefault(); // SIEMPRE evitamos el envío por defecto

        const nombre = document.getElementById('nombre-reserva').value.trim();
        const email = document.getElementById('email-reserva').value.trim();
        const telefono = document.getElementById('telefono-reserva').value.trim();
        const habitacion = formularioReservas.querySelector('select[name="habitacion"]').value;
        const fechaIngreso = document.getElementById('fecha-ingreso').value;
        const fechaSalida = document.getElementById('fecha-salida').value;
        const metodoPago = formularioReservas.querySelector('select[name="pago"]').value;

        let errores = [];

        if (nombre === '') errores.push('El nombre es obligatorio.');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) errores.push('El email no es válido.');
        const telefonoRegex = /^[0-9]+$/;
        if (!telefonoRegex.test(telefono)) errores.push('El teléfono debe contener solo números.');

        if (errores.length > 0) {
            alert(errores.join('\n'));
            return;
        }

        // Enviamos el formulario como JSON
        try {
            const response = await fetch("https://formspree.io/f/xovwaelo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    telefono,
                    habitacion,
                    fecha_ingreso: fechaIngreso,
                    fecha_salida: fechaSalida,
                    pago: metodoPago
                })
            });

            if (response.ok) {
                alert("¡Gracias por elegirnos! Tu reserva ha sido confirmada.");
                formularioReservas.reset();
            } else {
                alert("Hubo un error al enviar el formulario. Intentalo de nuevo.");
            }
        } catch (error) {
            console.error(error);
            alert("Error de red al intentar enviar la reserva.");
        }
    });
}




// Scroll reveal, para agregar animacion al abrir página o navegar por secciones.

window.sr = ScrollReveal();

sr.reveal('.container', {
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


// El ancla de inicio sube por completo
document.querySelector('#link-inicio').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

