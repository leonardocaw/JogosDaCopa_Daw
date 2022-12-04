<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copa";
    $retorno = "";
    
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $nome = $_GET["nome"];
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT * FROM `confronto` WHERE `selecaoA` = '$nome' OR `selecaoB` = '$nome'";
        
        $result=$conn->query($sql);
        $Jogos[] = array();
        
        $win = 0;
        
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