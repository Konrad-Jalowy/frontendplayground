// http is a core node module
const http = require('http');
//ws is a 3rd party module
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end('I am connected!');
});

const wss = new websocket.WebSocketServer({server});

// wss.on('headers',(headers, req)=>{
//     console.log(headers);
// })

wss.on('connection',(ws,req)=>{
    // console.log(ws);
    ws.send('Welcome to the websocket server!!!');
    ws.on('message',(data)=>{
        console.log(data.toString());
    })
})

server.listen(8000);

//IN CLINENTS HTML:
{/* <script>

let ws = new WebSocket('ws://localhost:8000');
console.log(ws);

ws.onopen = (event)=>{
    console.log(event);
    ws.send("I'm so excited I'm connected to the server. It's like my country just won the World Cup!")
}

ws.onmessage = (message)=>{
    console.log(message.data);
}

</script> */}