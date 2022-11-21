<?php
$conexion= new mysqli("localhost","root","","mascotitas");

    if($conexion->connect_errno){
        die("Fallo conexion".connect_errno);
        echo("ERROR EN LA CONEXION");
    }
?>