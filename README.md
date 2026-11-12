# practical-coding
**Concepts I learned from Hello Interview**

Practice implementing system design concepts and practical coding exercises. 



## Networking Essentials 
### Three that Matter in sys design 
1. Network Layer (3): Handles IP routing and addressing
2. Transport Layer (4): TCP, UDP, and QUIC(no build)
3. Application Layer (7):
    - **HTTP/HTTPS**(Foundation of Web Apps): GET, POST, PUT, PATCH, DELETE
    - **REST (API Design)**: Built upon HTTP/HTTPS, uses URLs as endpoints, bodies are JSON
    - **GraphQL (No build)**: Allows client to specify exactly what it needs. Use over REST when there is over/under fetching for data (flexible fetching)
    - **gRPC (No build)**: Binary encoding, great for very quick/efficient comms between internal services, rarely used externally because of difficulty debugging/not every platform is configured for it
    - **Server-Sent Events (SSE)**: gives real-time push comms, built on top of HTTP and pushes multiple messages to client over one HTTP connection 
    - **WebSockets**: bi-directional real-time comms, built on HTTP handshake, sends binary msgs, allows client and server to comms over 1 connection, used for when you need to send and receive info
    - **WebRTC (No build)**: person to person comms great for audio/video calling
