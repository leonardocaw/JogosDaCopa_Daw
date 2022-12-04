<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copa";
    $retorno = "";
    
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $nomeA = $_GET["nomeA"]; 
        $nomeB = $_GET["nomeB"];

        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT * FROM `confronto` WHERE `selecaoA` = '$nomeA' AND `selecaoB` = '$nomeB' OR `selecaoA` = '$nomeB' AND `selecaoB` = '$nomeA'";
        
        $result=$conn->query($sql);
        $Jogos[] = array();
        
        $win= 0;
        
        While ($linha = $result->fetch_assoc()){
            $Jogos[$win] = $linha;
            $win++;
        }

        if ($result=true){
            $retorno=json_encode($Jogos);

        } else {
            $retorno=json_encode("DEU RUIM!😭😭");
        }
    }
echo $retorno;
?>