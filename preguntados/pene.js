var puntos = localStorage.getItem("puntaje");
document.getElementById("puntos").innerHTML = puntos;

function ganar(ubi){
    puntos++;
    localStorage.setItem("puntaje", puntos);
    window.location = ubi;
    alert("Correcto (+1 punto)");
}

function perder(){
    puntos--;
    localStorage.setItem("puntaje", puntos);
    alert("Incorrecto (-1 punto)");
}

function iniciar(){
    localStorage.setItem("puntaje", 0)
    window.location = 'index1.html';
    alert("Juego Iniciado.");
}

function volver(){
    window.location = 'indexInicio.html';
}
