const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

console.log("O servidor de websocket subiu... na porta 8080");

wss.on("connection", function (ws) {
    console.log("A conexão com o websocket deu certo!!");

    ws.on("message", function(data){
        const message = data.toString();
        console.log("Mensagem recebida: ", message);


        wss.clients.forEach(function(client){
            if(client.readyState == WebSocket.OPEN) {
                client.send(message);
            }
        })
    })

    ws.on("close", () => {
        console.log("O cliente se desconectou!")
    })
});