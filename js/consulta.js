function enviarCorreo(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const fecha = document.getElementById("fecha").value;
    const contenedor = document.getElementById("contenedorCargando");
    if (correo == null || correo == "" || apellido == null || apellido == "" || nombre == null || nombre == "" ) {
        alert("El correo es requerido o correo invalido, intente denuevo");
    } else {
        contenedor.removeAttribute("hidden");
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/mamanimiguel0607@eugeniaravasco-cbba.org',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                mensaje: "Estimado cliente " + nombre +" "+ apellido +" su cita fue registrada para la fecha " + fecha +", gracias por contactarnos"
            },
            success: (data) => exito(),
            error: (err) => error()
        });
    }
}

function exito(){
    const contenedor = document.getElementById("contenedorCargando");
    contenedor.setAttribute("hidden","")
    alert("Gracias por enviar su correo!");
    window.location.reload();
}

function error(){
    const contenedor = document.getElementById("contenedorCargando");
    contenedor.setAttribute("hidden","")
    alert("Ups paso un error, intentelo otra vez.")
}