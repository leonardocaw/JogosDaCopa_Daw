
            function buscarSelecao() {
            let nomeS = document.getElementById("nomeS").value;
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                console.log("mudou status: " + this.readyState);
                if (this.readyState == 4 && this.status == 200) {
                    let obj = JSON.parse(this.responseText);

                    document.getElementById("nomealtS").value = obj.nomealtS;
                    document.getElementById("tecnicoS").value = obj.tecnicoS;
                    document.getElementById("grupoS").value = obj.grupoS;
                    document.getElementById("pontosS").value = obj.pontosS;

                    let formAlt = document.getElementById("formalterar");
                    formAlt.style.display = "block";
                }
            }

            xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/encontrarSelecao.php?nomeS=" + nomeS);
            xmlHttp.send();

        }
        
function enviarForm() {
            let nomeS = document.getElementById("nomeS").value;
            let nomealtS = document.getElementById("nomealtS").value;
            let tecnicoS = document.getElementById("tecnicoS").value;
            let grupoS = document.getElementById("grupoS").value;
            let pontosS = document.getElementById("pontosS").value;

            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/alterarDadosSelecao.php?nomeS=" + nomeS + "&nomealtS=" + nomealtS + "&tecnicoS=" + tecnicoS
                + "&grupoS=" + grupoS + "&pontosS=" + pontosS);
            xmlHttp.send();

            location.reload();
        }