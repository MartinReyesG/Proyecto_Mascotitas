let userLocalStorage;
let bandera;

function login() {
  if (localStorage.getItem("bandera") == null) {
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    userLocalStorage = usuario;
    verificarUser(usuario, pass);
  } else {
    document.getElementById("logInicio").innerHTML = "Ya hay una sesion iniciada";
  }
}

function cerrar() {
  localStorage.removeItem("bandera");
  localStorage.removeItem("usuarioLog");
  document.getElementById("userLog").innerHTML = "Iniciar Sesion";
}

window.addEventListener("load", () => {
  if (localStorage.getItem("bandera")) {
    document.getElementById("userLog").innerHTML =
      "Bienvenido " + localStorage.getItem("usuarioLog");
  } else if (!localStorage.getItem("bandera")) {
    document.getElementById("userLog").innerHTML = "Iniciar Sesion";
  }
});

function verificarUser(nombre, pass) {
  if (localStorage.getItem("arreglo") != null) {
    var datos = JSON.parse(localStorage.getItem("arreglo"));
    for (let index = 0; index < datos.length; index++) {
      if (datos[index].user == nombre) {
        if (datos[index].contraseña == pass) {
          document.getElementById("userLog").innerHTML = "Bienvenido " + nombre;
          userLocalStorage = nombre;
          localStorage.setItem("usuarioLog", userLocalStorage);
          bandera = true;
          localStorage.setItem("bandera", bandera);
          document.getElementById("logInicio").innerHTML = "Acceso concedido";
          document.getElementById("user").value = "";
          document.getElementById("password").value = "";
        } else {
          document.getElementById("logInicio").innerHTML =
            "La contraseña es incorrecta";
        }
        break;
      } else {
        document.getElementById("logInicio").innerHTML = "El usuario no existe";
        document.getElementById("userLog").innerHTML = "";
      }
    }
  } else {
    document.getElementById("logInicio").innerHTML = "No hay datos";
  }
}

function registro() {
  var erNombre = new RegExp("^[A-Z][a-z]+( )?[A-Z]*[a-z]*$");
  var erApellido = new RegExp("^[A-Z][a-z]+( )?[A-Z][a-z]*$");
  var erEmail = new RegExp("^[SGEsge][0-9]{8}[@](alumnos.itsur.edu.mx)$");
  var erTel = new RegExp("^[+](52)[-][0-9]{3}[-][0-9]{3}[-][0-9]{4}$");
  var erPass = new RegExp("^[^ ]{8,16}$");

  nombre = document.getElementById("name").value;
  apellido = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  telefono = document.getElementById("telefono").value;
  pass = document.getElementById("passR").value;
  usr = document.getElementById("userR").value;

  validacion = "";

  if (!erNombre.test(nombre)) {
    validacion += "[ No cumple con el NOMBRE ] ";
  }

  if (!erApellido.test(apellido)) {
    validacion += "[ No cumple con el APELLIDO ] ";
  }

  if (!erEmail.test(email)) {
    validacion += "[ No cumple con el CORREO ] ";
  }

  if (!erTel.test(telefono)) {
    validacion += "[ No cumple con el TELEFONO ] ";
  }

  if (!erPass.test(pass)) {
    validacion += "[ No cumple con la CONTRASEÑA ] ";
  }

  if (validacion === "") {
    document.getElementById("log").innerHTML = "DATOS CORRECTOS";

    objUsuario = {
      name: nombre,
      correo: email,
      user: usr,
      contraseña: pass,
      edad: 20,
    };

    insertar(objUsuario);
  } else {
    document.getElementById("log").innerHTML = validacion;
  }
}

function insertar(obj) {
  if (localStorage.getItem("arreglo") == null) {
    localStorage.setItem("arreglo", "[]");
  }
  var datos = JSON.parse(localStorage.getItem("arreglo"));
  datos.push(obj);
  localStorage.setItem("arreglo", JSON.stringify(datos));
}
