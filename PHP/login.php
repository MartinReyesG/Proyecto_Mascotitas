<?php
include 'conectar.php';

$usuario=$_POST['name'];
$contra=$_POST['contra'];

if (empty($_POST['name'])||empty($_POST['contra'])) {
    echo
    '
        <script> alert("Ingrese el nombre/contraseña de un usuario");
        location.href = "../html/formulario.html"
        </script>
        ';
}else{
   
$sql = "SELECT * FROM usuarios WHERE Usuario = '$usuario' AND Contra='$contra'";
$result = mysqli_query($conexion, $sql);
if (!$result) {
    echo "La cosulta SQL contiene errores." . mysqli_error($conexion);
    exit();
} else {
    if (mysqli_num_rows($result) == 0){
        echo '
        <script> alert("No se encontro el usuario, verifique su contraseña/usuario");
        location.href = "../html/formulario.html"
        </script>
        ';
    }else{
      //$a=json_encode($usuario);
     
    echo
    '
        <script> 
        alert("Bienvenido '.$usuario.'");
        location.href = "../html/principal.html"
        </script>
        ';
    }
}}

?>