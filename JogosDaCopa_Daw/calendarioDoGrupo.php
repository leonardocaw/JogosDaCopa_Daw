<?php
    $servidor = "localhost";
    $user = "root";
    $pass = "";
    $banco = "copa";
    $retorno = "";
    
    if($_SERVER["REQUEST_METHOD"]=="GET")
    {    
        $selecao = $_GET["selecao"];
        $conn = new mysqli ($servidor, $user, $pass, $banco);
        $sql="SELECT `nome` FROM `selecao` WHERE `selecao` = '$selecao'";
        
        $result=$conn->query($sql);
        $Jogos[] = array();
        
        $win = 0;
        
        
        While ($linha = $result->fetch_assoc()){
            foreach ($linha as $x) {
                $k = 0;
                $sqlJogo= "SELECT * FROM `confronto` WHERE `selecaoA` = '$x' OR `selecaoB` = '$x'";
                $resultJogo= $conn->query($sqlJogo);
                while($linha2 = $resultJogo->fetch_assoc()){
                        $Jogos[$win]=$linha2;
                        $win++;
                        
                    }
                }
                
            }
            $Jogos=array_unique($Jogos, SORT_REGULAR);
        
            $retorno=json_encode(array_values($Jogos));
            echo $retorno;
    }
?>