function capturar(estadoHtml){
    function Empleado(nombre, estado, hora){
        this.nombre = nombre;
        this.estado = estado;
        this.hora = hora;
    }

    var nombreHtml = document.getElementById("nombre").value;
    var tiempoHtml = document.getElementById("tiempo").innerHTML;
    switch(estadoHtml){
        case 0:
            estadoHtml = "Entrada"
            break;
        case 1:
            estadoHtml = "Salida"
    }

    nuevoRegistro = new Empleado(nombreHtml, estadoHtml, tiempoHtml);
    agregar();
}

var baseDatos = [];

function agregar(){
    baseDatos.push(nuevoRegistro);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoRegistro.nombre+'</td><td>'+nuevoRegistro.estado+'</td><td>'+nuevoRegistro.hora+'</td></tbody>'
}