const textIngreso = document.querySelector(".ingreso");
const mesage = document.querySelector("#textFinal");
const mono = document.querySelector("#muneco");
const sub = document.querySelector("h2");
const textMensaje = document.querySelector("#textMensaje");
const container = document.querySelector(".mensaje");


/* const btnEncriptar = document.querySelector("#encriptarBtn"); */

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

/* function clickBtnEncriptar () {
    btnEncriptar.addEventListener("click", encriptarBtn);
}
 */
function encriptarBtn () {
    const textoEncriptado = encriptar(textIngreso.value);
    mesage.value = textoEncriptado;
    mesage.style = "display: inline-block";
    container.style = "justify-content: start";
    mono.style = "display: none";
    sub.style = "display: none";
    textMensaje.style = "display: none";
    textIngreso.value = "";
}

function encriptar (stringEncriptado) {
    let matrizCod = [["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++) {
        if (stringEncriptado.includes(matrizCod[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCod[i][0],matrizCod [i][1])
        }
    }
    return stringEncriptado
}
