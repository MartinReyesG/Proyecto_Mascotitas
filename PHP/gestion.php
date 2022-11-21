<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/gestion.css">
</head>
<body>
<header>
    <h1>MASCOTITAS</h1>
    <img src="../img/perro.svg">
    <nav>
        <ul>
        <li><a href="../html/catalogo_mascotas.html">Catálogo de mascotas</a></li>
                <li><a href="../html/catalogo_producto.html">Catálogo de productos</a></li>
                <li><a href="../html/adopcion.html">Adopción</a></li>
                <li><a href="../html/gato.html">Juego del gato y perro</a></li>  
                <li><a href="../html/principal.html">Principal</a></li>
            <li id = "userLog"><a href="#">Iniciar Sesion</a></li> 
        </ul>
    </nav>
</header>

<main class="main">
    <section class="articles">
            <?php
                require '../php/conectar.php'; 

                /* Realizamos la consulta SQL */
                $sql = "SELECT * FROM Usuarios";
                $result = mysqli_query($conexion, $sql) or die(mysql_error());
                if(mysqli_num_rows($result)==0) die("No hay registros para mostrar");

                /* Desplegamos cada uno de los registros dentro de una tabla */  
                echo "<table class = 'tabla'>";

                /*Primero los encabezados*/
                echo "
                    <tr class = 'encabezado' >
                        <th colspan=4> Registro de Usuarios </th>
                        <tr>
                            <th> Nombre </th>
                            <th> Apellido</th>
                            <th> Correo </th>
                            <th> Usuario </th>
                        </tr>   
                    </tr>";

                /*Y ahora todos los registros */
                while($row=mysqli_fetch_array($result))
                {
                    echo "
                        <tr class = 'registros''>         
                            <td class = 'celda'> $row[Nombre] </td>
                            <td class = 'celda'> $row[Apellido] </td>
                            <td class = 'celda'> $row[Correo] </td>	
                            <td class = 'celda'> $row[Usuario] </td>	
                        </tr>";
                }
                    echo "</table>";
            ?>
    </section>

    <section class = 'botones'>
        <aside>
            <form>
                <button type="submit" name='nuevo'>Mostrar</button>
                <button type="submit" name='modifica'>Modificar</button>
                <button type="submit" name='elimina'>Eliminar</button>
            </form>
        </aside>
    </section>
</main>

</body>
</html>