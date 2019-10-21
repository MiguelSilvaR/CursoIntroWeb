//setTimeout sirve para hacer pausas
/*setTimeout(() => {
    cambiarTexto()
}, 5000);*/
let cambiador = document.getElementById("cambiador")

cambiador.addEventListener("click" , cambiarTexto)

function cambiarTexto(){
    textoArray = document.getElementsByTagName("p")
    for (let i = 0; i < textoArray.length; i++) {
        textoArray[i].innerHTML = "Texto cambiado desde js"
    }
}