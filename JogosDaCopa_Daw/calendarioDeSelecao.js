
function carregaJogo() {

    let nome = document.getElementById("nome").value;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let x = 0;

            let valor = (obj[x].local).localeCompare("undefined");
            if (valor != 0) {
                for (x = 0; x < obj.length; x++) {
                    let linha = obj[x];
                    criarLinhaTabela(linha);
                }
            }
        }
    }
    xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/calendarioDeSelecao.php?nome=" + nome);
    xmlHttp.send();

}

function criarLinhaTabela(linha) {
    let tabela = document.getElementById("tabela");
    let tr = document.createElement("tr");

    //Coluna data
    let tdData = document.createElement("td");
    textnode = document.createTextNode(linha.data);
    tdData.appendChild(textnode);
    tr.appendChild(tdData);

    //Coluna hora
    let tdHora = document.createElement("td");
    textnode = document.createTextNode(linha.hora);
    tdHora.appendChild(textnode);
    tr.appendChild(tdHora);

    //Coluna Local
    let tdLocal = document.createElement("td");
    textnode = document.createTextNode(linha.local);
    tdLocal.appendChild(textnode);
    tr.appendChild(tdLocal);

    //Coluna SelecaoA
    let tdSelA = document.createElement("td");
    textnode = document.createTextNode(linha.selecaoA);
    tdSelA.appendChild(textnode);
    tr.appendChild(tdSelA);

    //Coluna golsA
    let tdGolA = document.createElement("td");
    textnode = document.createTextNode(linha.golsA);
    tdGolA.appendChild(textnode);
    tr.appendChild(tdGolA);

    //Coluna SelecaoB
    let tdSelB = document.createElement("td");
    textnode = document.createTextNode(linha.selecaoB);
    tdSelB.appendChild(textnode);
    tr.appendChild(tdSelB);

    //Coluna golsB
    let tdGolB = document.createElement("td");
    textnode = document.createTextNode(linha.golsB);
    tdGolB.appendChild(textnode);
    tr.appendChild(tdGolB);

    tabela.appendChild(tr);
    tabela.style.display = "table";
    let input = document.getElementById("nome");
    input.setAttribute("onclick", "location.reload();");
}
