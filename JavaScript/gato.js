/*
  * modal_container: Ventana flotante del HTML
  * num: Variable aleatoria. decide quien inicia
  * cont: Controla a que jugador le toca 
*/ 

const modal_container = document.getElementById("modal-container");
var num;
var cont = 0;

// TODO: ESTE EVENTO AL MOMENTO DE CARGAR LA PAGINA DE MANERA RANDOM GENERA
// TODO: UN NUMERO, EL CUAL NOS VA A DECIR SI EMPIEZA EL PERRO O EL GATO
window.addEventListener("load", () => {
  num = Math.floor(Math.random() * (10 - 4) + 4);
  if (num % 2 == 0) {
    document.getElementById("texto").innerHTML = "ES EL TURNO DEL GATO";
  } else {
    document.getElementById("texto").innerHTML = "ES EL TURNO DEL PERRO";
  }
});

// TODO: HACE LA MISMA FUNCION QUE EL EVENTO DE ARRIBA, SOLO QUE ESTE LO
// TODO: PUEDES MANDAR A LLAMAR CUANDO LO REQUIERAS
function aleatorio() {
  num = Math.floor(Math.random() * (10 - 4) + 4);
  if (num % 2 == 0) {
    document.getElementById("texto").innerHTML = "ES EL TURNO DEL GATO";
  } else {
    document.getElementById("texto").innerHTML = "ES EL TURNO DEL PERRO";
  }
}

// * MAPEO DE LAS POSICIONES
let matriz = new Array(3);
matriz[0] = new Array(3);
matriz[1] = new Array(3);
matriz[2] = new Array(3);

// TODO: ESTA FUNCION SE ENCARGA DE MAPEAR LOS VALORES EN LA MATRIZ
function cargar(identificador, x, y) {
  if (num % 2 == 0) {
    if (cont < 9) {
      if (matriz[x][y] == null) {
        if (cont % 2 == 0) {
          document.getElementById(identificador).style.background =
            "url(../img/gato.png) no-repeat center center";
          document.getElementById("texto").innerHTML = "ES EL TURNO DEL PERRO";
          matriz[x][y] = 1;
          cont++;
        } else {
          document.getElementById(identificador).style.background =
            "url(../img/pego.png) no-repeat center center";
          document.getElementById("texto").innerHTML = "ES EL TURNO DEL GATO";
          matriz[x][y] = 2;
          cont++;
        }
      }
    }
    ganador();
  } else {
    if (cont < 9) {
      if (matriz[x][y] == null) {
        if (cont % 2 == 0) {
          document.getElementById(identificador).style.background =
            "url(../img/pego.png) no-repeat center center";
          document.getElementById("texto").innerHTML = "ES EL TURNO DEL GATO";
          matriz[x][y] = 2;
          cont++;
        } else {
          document.getElementById(identificador).style.background =
            "url(../img/gato.png) no-repeat center center";
          document.getElementById("texto").innerHTML = "ES EL TURNO DEL PERRO";
          matriz[x][y] = 1;
          cont++;
        }
      }
    }
    ganador();
  }
}

// TODO: VERIFICA QUIEN GANO Y LLAMA LA FUNCION PARA ABRIBR EL MODAL
function ganador() {
  if ( // * SI LA SUMA DE LAS POSIBLES CONVINACIONES EN LAS RESPECTIVAS
       // * POSICIONES DA = 3 QUIERE DECIR QUE GANO EL GATO
    matriz[0][0] + matriz[0][1] + matriz[0][2] == 3 ||
    matriz[1][0] + matriz[1][1] + matriz[1][2] == 3 ||
    matriz[2][0] + matriz[2][1] + matriz[2][2] == 3 ||
    matriz[0][0] + matriz[1][0] + matriz[2][0] == 3 ||
    matriz[0][1] + matriz[1][1] + matriz[2][1] == 3 ||
    matriz[0][2] + matriz[1][2] + matriz[2][2] == 3 ||
    matriz[0][0] + matriz[1][1] + matriz[2][2] == 3 ||
    matriz[0][2] + matriz[1][1] + matriz[2][0] == 3
  ) {
    document.getElementById("texto").innerHTML = "WINNER WINNER CHIKEN DINNER";
    document.getElementById("ganador").innerHTML = "YA GANO EL GATO";
    document.getElementById("imagen").style.background =
      "url(../img/gato_bailarin.gif) no-repeat center center";
    modal();
  } else if ( // * SI LA SUMA DE LAS POSIBLES CONVINACIONES EN LAS RESPECTIVAS
              // * POSICIONES DA = 3 QUIERE DECIR QUE GANO EL PERRO
    matriz[0][0] + matriz[0][1] + matriz[0][2] == 6 ||
    matriz[1][0] + matriz[1][1] + matriz[1][2] == 6 ||
    matriz[2][0] + matriz[2][1] + matriz[2][2] == 6 ||
    matriz[0][0] + matriz[1][0] + matriz[2][0] == 6 ||
    matriz[0][1] + matriz[1][1] + matriz[2][1] == 6 ||
    matriz[0][2] + matriz[1][2] + matriz[2][2] == 6 ||
    matriz[0][0] + matriz[1][1] + matriz[2][2] == 6 ||
    matriz[0][2] + matriz[1][1] + matriz[2][0] == 6
  ) {
    document.getElementById("texto").innerHTML = "WINNER WINNER CHIKEN DINNER";
    document.getElementById("ganador").innerHTML = "YA GANO EL PERRO";
    document.getElementById("imagen").style.background =
      "url(../img/perro-bailarin.gif) no-repeat center center";
    modal();
  } else if (
    matriz[0][0] + matriz[0][1] + matriz[0][2] &&
    matriz[1][0] + matriz[1][1] + matriz[1][2] &&
    matriz[2][0] + matriz[2][1] + matriz[2][2] &&
    matriz[0][0] + matriz[1][0] + matriz[2][0] &&
    matriz[0][1] + matriz[1][1] + matriz[2][1] &&
    matriz[0][2] + matriz[1][2] + matriz[2][2] &&
    matriz[0][0] + matriz[1][1] + matriz[2][2] &&
    matriz[0][2] + matriz[1][1] + matriz[2][0] != null
  ) {
    document.getElementById("texto").innerHTML = "DEMACIADO IQ EN LA PANTALLA";
    document.getElementById("ganador").innerHTML = "EMPATE";
    document.getElementById("imagen").style.background =
      "url(../img/empate_movimiento.gif) no-repeat center center";
    modal();
  }
}

// TODO: REINICIA TODOS LOS VALORES A SUS INICIALES PARA QUE SE 
// TODO: DESBLOQUEN LAS CASILLAS Y SE PUEDA SEGUIR JUGANDO
function reiniciar() {
  document.getElementById("i1").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i2").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i3").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i4").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i5").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i6").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i7").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i8").style.background = "rgba(13, 56, 245, 0.3)";
  document.getElementById("i9").style.background = "rgba(13, 56, 245, 0.3)";

  matriz[0] = new Array(3);
  matriz[1] = new Array(3);
  matriz[2] = new Array(3);

  /* document.getElementById("texto").innerHTML = "ES EL TURNO DEL GATO"; */
  aleatorio();
  cont = 0;
}

// TODO: LE DA ESTILO AL ELEMENTO MODAL PARA QUE SE MUESTRE
function modal() {
  document.getElementById("modal-container").style.display = "flex";
  document.getElementById("modal-container").style.animationName = "blob";
  document.getElementById("modal-container").style.animationDuration = "800ms";
  document.getElementById("modal-container").style.animationIterationCount = "1";
  document.getElementById("modal-container").style.animationTimingFunction = "lineal";
}

// TODO: CIERRA EL MODAL Y REINICIA EL JUEGO
function cerrar() {
  document.getElementById("modal-container").style.animationName = "blowjob";
  document.getElementById("modal-container").style.animationDuration = "800ms";
  document.getElementById("modal-container").style.animationIterationCount = "1";
  document.getElementById("modal-container").style.animationTimingFunction = "lineal";
  setTimeout(() => {
    document.getElementById("modal-container").style.display = "none";
  }, 800);
  reiniciar();
}