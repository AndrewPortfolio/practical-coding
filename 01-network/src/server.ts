import { createServer } from 'node:net';

const PORT = 8080;
const HOST = '127.0.0.1';

// One run per TCP connection `socket` is the connection
const server = createServer((socket) => {
    console.log('YOOOO Connection Established');
    
    //Runs every time a byte arrive on this connection
    socket.on('data', (chunks) => {
        // shows the raw request
        console.log(JSON.stringify(chunks.toString()));

        const headers = [
            'HTTP/1.1 200 OK',                          // status line
            'Content-Type: text/plain charset = utf-8',    //headers
            'Content-Length: 5'                 // 5 bytes in body
        ].join('\r\n');
        
        //End header with a new line
        socket.write(headers + '\r\n\r\n');
        socket.write('hello');
    });
});

server.on('error', (err: unknown) => {
    throw err;
}); 

server.listen(PORT, HOST, () => {
    console.log('Connection at', server.address());
});
