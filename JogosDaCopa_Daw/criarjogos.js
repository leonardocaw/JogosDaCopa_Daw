
        function enviarForm() {
            let selecaoA = document.getElementById("selecaoA").value;
            let selecaoB = document.getElementById("selecaoB").value;
            let golsA = document.getElementById("golsA").value;
            let golsB = document.getElementById("golsB").value;
            let local = document.getElementById("local").value;
            let data = document.getElementById("data").value;
            let hora = document.getElementById("hora").value;
            
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "?data=" + data +
                "&hora=" + hora + "&local=" + local + "&selecaoA=" + selecaoA + "&selecaoB=" + selecaoB + "&golsA=" + golsA + "&golsB=" + golsB);
            xmlHttp.send();
            console.log(xmlHttp.responseText);
            location.reload();
        }
    