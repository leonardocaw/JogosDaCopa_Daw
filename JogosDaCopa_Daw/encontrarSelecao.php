<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copadomundo";
    $retorno = "";

    if($_SERVER["REQUEST_METHOD"]=="GET")
    {   
        $nomeS = $_GET["nomeS"]; 
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT * FROM `selecao` WHERE `nomeS` = '$nomeS'";
        $result=$conn->query($sql);
        
        $discp = $result->fetch_assoc();
        
        if ($result=true){
            $retorno=json_encode($discp);

        } else {
            $retorno=json_encode("Erro");
        }
    }
echo $retorno;
?>
