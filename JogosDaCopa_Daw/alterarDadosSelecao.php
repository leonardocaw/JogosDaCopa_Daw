<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copa";

    if($_SERVER["REQUEST_METHOD"]=="GET")
    {   
        $nomeS = $_GET["nomeS"];
        $nomeAltS = $_GET["nomeAltS"];
        $tecnicoS = $_GET["tecnicoS"]; 
        $grupoS = $_GET["grupoS"]; 
        $pontosS = $_GET["pontosS"]; 

        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="UPDATE `selecao` SET `nomeS`='$nomeAltS',`grupoS`='$grupoS',`tecnicoS`='$tecnicoS',`pontosS`= $pontosS WHERE `nomeS` = '$nomeS'";
        
        $result=$conn->query($sql);
        echo $sql;
    }
?>