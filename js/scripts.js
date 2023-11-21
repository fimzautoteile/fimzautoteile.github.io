document.addEventListener("DOMContentLoaded", () => {
    escribir();
});

var i = 0;
var txt = 'TENEMOS LOS MEJORES PRECIOS';

function escribir(){
    if (i < txt.length) {
        document.getElementById("mensaje").innerHTML += txt.charAt(i);
        i++;
        setTimeout(escribir, 50);
    }else{
        setTimeout(borrar, 5000)
    }
}

function borrar(){
    if (i > 0) {
        var mensaje = document.getElementById("mensaje");
        mensaje = mensaje.innerHTML.slice(0,-1);
        document.getElementById("mensaje").innerHTML = mensaje;
        i--;
        setTimeout(borrar, 50);
    }else{
        setTimeout(escribir, 1000);
    }
}

function mostrarOcultar(nombre) {
    var popup = document.getElementById(nombre);
    popup.classList.toggle("show");
}

function comprar(precio, producto){
    const contenedor = document.getElementById("contenedorCargando");
    let correo = prompt("Va a comprar "+ producto +" con valor de "+ precio+"Bs.\nIngrese su correo", "ejemplo@hotmail.com");
    if (correo == null || correo == "") {
        alert("El correo es requerido o correo invalido, intente denuevo");
    } else {
        contenedor.removeAttribute("hidden");
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/mamanimiguel0607@eugeniaravasco-cbba.org',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                producto: producto + " con valor de " + precio + "Bs.",
                mensaje: "Gracias por su compra"
            },
            success: (data) => exito(),
            error: (err) => error()
        });
    }
}

function exito(){
    const contenedor = document.getElementById("contenedorCargando");
    contenedor.setAttribute("hidden","")
    alert("Gracias por su compra!");
}

function error(){
    const contenedor = document.getElementById("contenedorCargando");
    contenedor.setAttribute("hidden","")
    alert("Ups paso un error, intentelo otra vez.")
}