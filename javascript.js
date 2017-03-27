function vistaPrevia(texto){
        var comentario=texto;
        var vistaprevia = document.getElementById("vistaPrevia");
            vistaprevia.innerHTML = comentario;
}
function tamGrand(){    
    document.getElementById("vistaPrevia").style.fontSize="60px";
    
    }
function tamMed(){
    document.getElementById("vistaPrevia").style.fontSize="30px";
}
function tamChic(){
    document.getElementById("vistaPrevia").style.fontSize="15px";
}
function colorFond(){
    var color=prompt("Inserta el color hexadecimal")
    document.getElementById("vistaPrevia").style.backgroundColor=color;
}
function colorFont(){
    var color=prompt("Inserta el color hexadecimal")
    document.getElementById("vistaPrevia").style.color=color;
    }
function aliniaCentro(){
    document.getElementById("vistaPrevia").style.textAlign = "center";
}
function aliniaDer(){
    document.getElementById("vistaPrevia").style.textAlign = "right";
}
function aliniaIzq(){
    document.getElementById("vistaPrevia").style.textAlign = "left";
}
function subirComentario(){
    var comentario=document.getElementById("vistaPrevia");
    var nuevo=comentario.cloneNode(true);
    nuevo.id=Date.now();
    var lugar= document.getElementById("comentarios");
       lugar.appendChild(nuevo);
  
}


