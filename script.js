// VARIABLES
let libro = document.getElementById("libro");
let bolar=document.getElementById("bola");
let calavera= document.getElementById("calavera");
let pocion = document.getElementById("pocion");
let llaves = document.getElementById("llaves");
let espacio1 = document.getElementById("espacio1");
let espacio2 = document.getElementById("espacio2");
let espacio3 = document.getElementById("espacio3");
let espacio4 = document.getElementById("espacio4");

let inventarioLibro = document.getElementById("inventarioLibro");


// FUNCIONES

function cogerLibro(){
    inventarioLibro.appendChild(libro)

}

function activarLibro(){
    if(inventarioLibro.appendChild(libro)){
        inventarioLibro.style.opacity=0.9;
    }
}



function cogerBola(){
   
    inventarioBola.appendChild(bola)
    
}

function activarBola(){
    if(inventarioBola.appendChild(bola)){
        inventarioBola.style.opacity=0.9;
    }
}

function cogerCalavera(){
    
    inventarioCalavera.appendChild(calavera)
    
}

function activarCalavera(){
    if(inventarioCalavera.appendChild(calavera)){
        inventarioCalavera.style.opacity=0.9;
    }
}


function cogerPocion(){
   
    inventarioPocion.appendChild(pocion)
    
}

function activarPocion(){
    if(inventarioPocion.appendChild(pocion)){
        inventarioPocion.style.opacity=0.9;
    }
}


function cogerLlaves(){
    
    inventarioLlaves.appendChild(llaves)
    
}

function activarLlaves(){
    if(inventarioLlaves.appendChild(llaves)){
        inventarioLlaves.style.opacity=0.9;
    }
}



// EVENTOS
libro.addEventListener("click", cogerLibro);
libro.addEventListener("click", activarLibro);
bola.addEventListener("click", cogerBola);
bola.addEventListener("click", activarBola);
calavera.addEventListener("click", cogerCalavera);
calavera.addEventListener("click", activarCalavera);
pocion.addEventListener("click", cogerPocion);
pocion.addEventListener("click", activarPocion);
llaves.addEventListener("click", cogerLlaves);
llaves.addEventListener("click", activarLlaves);

