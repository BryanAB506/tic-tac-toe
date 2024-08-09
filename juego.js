
const boton = document.getElementById("boton")
const game = document.querySelectorAll(".game")
const ganesX = document.getElementById("contPX")
const ganesO = document.getElementById("contPO")

let caracter = "X"
let jugador1 = true
let hayGanador = false

for (let i = 0; i < game.length; i++) {
    game[i].addEventListener("click", Tur2)
}


let contadorX = parseInt(localStorage.getItem("contadorX")) || 0;
let contadorO = parseInt(localStorage.getItem("contadorO")) || 0;
ganesX.innerHTML = contadorX;
ganesO.innerHTML = contadorO;


function Tur2(e) {
    if (hayGanador) return;

    let cell = e.target
    let cellvalue = cell.innerHTML

    if (!cellvalue.length && jugador1) {
        cell.innerHTML = "𝕏"
        jugador1 = !jugador1


        setTimeout(turnoCom, 1000)
        check()
        sinGanador()
    }
}




function check() {
    checkline(0, 1, 2)
    checkline(3, 4, 5)
    checkline(6, 7, 8)
    checkline(0, 3, 6)
    checkline(1, 4, 7)
    checkline(2, 5, 8)
    checkline(0, 4, 8)
    checkline(2, 4, 6)
}



function checkline(c1, c2, c3) {
    if (
        game[c1].innerHTML.length &&
        game[c1].innerHTML == game[c2].innerHTML &&
        game[c2].innerHTML == game[c3].innerHTML
    ) {
        muestraElganador(game[c1].innerHTML)
        hayGanador = true;
    }
}


function muestraElganador(jugador1) {
    document.querySelector('.ganadorCont').innerHTML = jugador1 + "ganador";


    if (jugador1 == "𝕏") {
        contadorX++;
        ganesX.innerHTML = contadorX;
        localStorage.setItem("contadorX", JSON.stringify(contadorX));

    } if (jugador1 == "𝓞") {
        contadorO++;
        ganesO.innerHTML = contadorO;
        localStorage.setItem("contadorO", JSON.stringify(contadorO));
    }

}

function empate() {
    let sinGanador = true
    game = sinGanador.innerHTML
    for (let i = 0; i < game.length; i++) {
        game ? game === 0 : sinGanador = "empate"
        sinGanador = false
    }


    if (sinGanador && !document.querySelectorAll(".game").innerHTML) {
        document.querySelectorAll(".game").innerHTML == "empate"
    }

    sinGanador()
}


function turnoCom() {
    if (hayGanador) { return }

    let gamevacio = []
    game.forEach((game, i) => {
        if (!game.innerHTML.length)
            gamevacio.push(i)

    })

    if (gamevacio.length > 0) {
        let aleatorio = Math.floor(Math.random() * gamevacio.length)
        game[gamevacio[aleatorio]].innerHTML = "𝓞"
        jugador1 = !jugador1

        check()
        sinGanador()
    }

}





function reset() {
    document.querySelectorAll(".game").forEach((element) => {
        element.innerHTML = ""
    })
    jugador1 = true
    hayGanador = false
    document.querySelector('.ganadorCont').innerHTML = "";
    hayGanador()
}


