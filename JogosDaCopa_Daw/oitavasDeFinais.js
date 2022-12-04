function carregarFinais() {
    let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let objAlunos = this.responseText;
                let obj = JSON.parse(this.responseText);
                let x = 0;
                let vetorSelecao = [];
                let valor = (obj[x].nome).localeCompare("undefined");
                if(valor!=0){
                        for (x=0;x<obj.length;x++) {
                        vetorSelecao[x] = obj[x]; 
                    }
                }
                seePoint(vetorSelecao);
            }
        }
        xmlHttp.open("GET", "http://localhost/JogosDaCopa_Daw/resultadoDeJogo.php");
        xmlHttp.send();
}

function seePoint(vetorSelecao){
    let pointPrim = vetorSelecao[0].point, pointSeg, 
    primeiro = vetorSelecao[0],Agrupo = vetorSelecao[0].grupo, segundo;
    
    let vAprovador = [16];
    let k= 0;

    for(let i=1;i<vetorSelecao.length;i++){
        if(vetorSelecao[i].grupo.localeCompare(Agrupo)== 0 ){
            if(vetorSelecao[i].point>pointPrim){
                
                pointSeg=pointPrim;
                segundo = primeiro;
                
                pointPrim=vetorSelecao[i].point;
                primeiro = vetorSelecao[i];
                
            }
            else if(vetorSelecao[i].point==pointPrim||Agrupo.localeCompare(segundo.grupo)!=0){
                pointSeg=vetorSelecao[i].point;
                segundo = vetorSelecao[i];
            }
        }
        else{
            vAprovador[k]=primeiro;
            vAprovador[k+1]=segundo;
            
            Agrupo = vetorSelecao[i].grupo;
            pointPrim = vetorSelecao[i].point;
            primeiro = vetorSelecao[i];
           
            k= k+2;               
        }
    }
    vAprovador[k]=primeiro;
    vAprovador[k+1]=segundo;
    
    for(let i=3; i<vAprovador.length;i=i+4){
        criarLinhaTabela(vAprovador[i-3], vAprovador[i-2], vAprovador[i-1], vAprovador[i]);
    }        
}

function criarLinhaTabela(Grupo1, Grupo2, Grupo3, Grupo4) {
    let tabela = document.getElementById("tabela");
    let tr = document.createElement("tr");
    
    let tdGrupo1 = document.createElement("td"); 
    textnode = document.createTextNode(Grupo1.nome);
    tdGrupo1.appendChild(textnode);
    
    tr.appendChild(tdGrupo1);

    let tdNome = document.createElement("td");
    tr.appendChild(tdNome); 

    let tdGrupo2 = document.createElement("td");
    textnode = document.createTextNode(Grupo4.nome);
    tdGrupo2.appendChild(textnode);
    tr.appendChild(tdGrupo2);

    tabela.appendChild(tr);
    
    let tr2 = document.createElement("tr");

    let tdGrupo3 = document.createElement("td"); 
    textnode = document.createTextNode(Grupo2.nome);
    tdGrupo3.appendChild(textnode);
    
    tr2.appendChild(tdGrupo3);

    let tdVs2 = document.createElement("td");
    tr2.appendChild(tdVs2); 

    let tdGrupo4 = document.createElement("td");
    textnode = document.createTextNode(Grupo3.nome);
    tdGrupo4.appendChild(textnode);
    tr2.appendChild(tdGrupo4);

    tabela.appendChild(tr2);
}
