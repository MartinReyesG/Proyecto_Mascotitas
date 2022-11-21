<?php
    require 'conectar.php';
    $dato = $_POST['valor'];

    if(isset($_POST['modifica'])){
        $sql = "UPDATE Usuario set Correo = 'correo@cambiado.com' WHERE Nombre = '".$dato."'";
        $result = mysqli_query ($conexion, $sql);
        if(!$result){
            echo = "La consulta SQL contiene errores";
            exit();
        } else {
            echo 
            '
            <script> alert ("Se actualiza el registro");
            location.href = "admin.php"
            </script>
            ';
        }
    } else if (isset($_POST['elimina'])){
        $sql = "DELETE FROM Usuario WHERE Nombre = '".$dato."'";
        $result = mysqli_query ($conexion, $sql);
        if(!$result){
            echo "La cosulta SQL contiene errores.".mysql_error($conexion);
            exit();
        } else {
            echo 
            '
            <script> alert("Se borro el registro");
            location.href = "admin.php"
            </script>
            ';
        }
    } else if(isset($_POST['nuevo'])){
        echo 
        '
        <script>
        location.href = "registro.html"
        </script>
        ';
    } else {
        mysql_close();
    }
?>