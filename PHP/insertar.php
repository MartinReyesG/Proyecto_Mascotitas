<?php
    include 'conectar.php';

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $celular = $_POST['celular'];
    $contrasenia = $_POST['contra'];
    $usuario = $_POST['usuario'];

    $insertar = "insert into usuarios values 
                ('$nombre','$apellido','$correo','$celular','$contrasenia','$usuario')";

    $query = mysqli_query($conexion, $insertar);

    if($query){
        echo 
        '
        <script> 
            alert("Se ha guardado el usuario"); 
            location.href = "../html/formulario.html" 
        </script>
        '; 
    }else{
        echo '
        <script> 
            alert("No se pudo guardar"); 
            location.href = "../html/formulario.html" 
        </script>
        ';
    }
?>