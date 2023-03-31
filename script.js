const textIngreso = document.querySelector(".ingreso");
const mesage = document.querySelector("#textFinal");
const mono = document.querySelector("#muneco");
const sub = document.querySelector("h2");
const textMensaje = document.querySelector("#textMensaje");
const container = document.querySelector(".mensaje");
const btnCopiar = document.querySelector("#copiarBtn")


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
    container.style = "justify-content: space-between";
    mono.style = "display: none";
    sub.style = "display: none";
    textMensaje.style = "display: none";
    textIngreso.value = "";
    btnCopiar.style = "display: inline-block";
}

function encriptar (stringEncriptado) {
    let matrizCod = [["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++) {
        if (stringEncriptado.includes(matrizCod[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCod[i][0],matrizCod [i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptarBtn () {
    const textoDesencriptado = desencriptar(textIngreso.value);
    mesage.value = textoDesencriptado;
    mesage.style = "display: inline-block";
    container.style = "justify-content: start";
    mono.style = "display: none";
    sub.style = "display: none";
    textMensaje.style = "display: none";
    textIngreso.value = "";
    btnCopiar.style = "display: inline-block";
}

function desencriptar (stringDesencriptado) {
    let matrizCod = [["e", "enter"], ["i", "imes"],["a","ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++) {
        if (stringDesencriptado.includes(matrizCod[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCod[i][1],matrizCod [i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarBtn () {
    let textoCopiado = mesage.value;
    navigator.clipboard.writeText(textoCopiado)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}


