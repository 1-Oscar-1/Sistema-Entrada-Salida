let itemReloj = document.getElementById("tiempo");
setInterval(function reloj(){
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if(horas < 10){
        horas = "0"+horas
    }else if(minutos < 10){
        minutos = "0"+minutos
    }else if(segundos < 10){
        segundos = "0"+segundos
    }

    itemReloj.innerHTML = horas + ":" + minutos + ":" + segundos; 
}, 1000);