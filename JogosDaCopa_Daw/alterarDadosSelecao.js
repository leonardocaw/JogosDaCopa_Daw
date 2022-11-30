
            function buscarSelecao() {
            let nomeS = document.getElementById("nomeS").value;
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                console.log("mudou status: " + this.readyState);
                if (this.readyState == 4 && this.status == 200) {
                    let obj = JSON.parse(this.responseText);

                    document.getElementById("nomeAltS").value = obj.nomeS;
                    document.getElementById("tecnicoAltS").value = obj.tecnicoS;
                    document.getElementById("grupoAltS").value = obj.grupoS;
                    document.getElementById("pontoAltS").value = obj.pontosS;

                    let formAlt = document.getElementById("formalterar");
                    formAlt.style.display = "block";
                }
            }

            xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/alterarDadosSelecao.php?nomeS=" + nomeS);
            xmlHttp.send();

        }
        
function enviarForm() {
            let nomeS = document.getElementById("nomeS").value;
            let nomeAltS = document.getElementById("nomeAltS").value;
            let tecnicoS = document.getElementById("tecnicoAltS").value;
            let grupoS = document.getElementById("grupoAltS").value;
            let pontosS = document.getElementById("pontoAltS").value;

            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/alterarDadosSelecao.php?nomeS=" + nomeS + "&nomeAltS=" + nomeAlt + "&tecnico=" + tecnico
                + "&grupoS=" + grupoS + "&pontosS=" + pontosS);
            xmlHttp.send();

            location.reload();
        }