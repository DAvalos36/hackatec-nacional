window.onload = function() {
    window.onscroll = function() {
        myFunction();
    };

    var secciones = document.getElementsByTagName("section");
var fechas = document.getElementsByClassName("fecha");

function myFunction() {
    if(window.scrollY >= secciones[0].offsetTop){
        eliminarClase();
    }

    if(window.scrollY >= secciones[1].offsetTop){
        eliminarClase();
        fechas[0].classList.add("seleccionado");
    }
}

function eliminarClase(){
    for(var i = 0; i < fechas.length; i++){
        fechas[i].classList.remove("seleccionado");
    }
}

    // Resto de tu código aquí
};

