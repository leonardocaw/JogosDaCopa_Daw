<?php
    $sevidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copa";
    
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $nomeS = $_GET["nomeS"];
        $tecnicoS= $_GET["tecnicoS"];
        $grupoS= $_GET["grupoS"];
        
        $conn = new mysqli ($sevidor, $user, $pass, $banco);
        $sql="INSERT INTO `copa`(`nomeS`, `tecnicoS`, `grupoS`, `pontosS`) VALUES ('$nomeS', '$tecnicoS', '$grupoS',0)";
        $result=$conn->query($sql);
    }
?>