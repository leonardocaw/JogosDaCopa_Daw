function enviarForm() {
    let nomeS = document.getElementById("nomeS").value;
    let grupoS = document.getElementById("grupoS").value;
    let tecnicoS = document.getElementById("tecnicoS").value;
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET","http://localhost/JogosDaCopa_Daw/casdastroSelecao.php?nomeS=" + nomeS+
        "&grupoS=" + grupoS + "&tecnicoS=" + tecnicoS);
    xmlHttp.send();

    location.reload();
}




