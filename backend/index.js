import { WebSocketServer } from "ws";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

let currentCount= 10000;

async function fetchFtdCount() {
    return currentCount+1;  
};

function sendCount(ws) {
    ws.send(JSON.stringify({ type: "ftd", count: currentCount }));
};

function broadcastCount() {
    const message = JSON.stringify({ type: "ftd", count: currentCount });
    for (const client of wss.clients) {
            client.send(message);
    }
};

async function refreshCount() {
    try {
        const latest = await fetchFtdCount();
        currentCount = latest;
        broadcastCount();
    } catch (error) {
        console.error("Error refreshing count:", error);
    }
};

wss.on("connection", (ws) => {
    console.log("New client connected");
    
    sendCount(ws);
    
    ws.on("close", () => {
        console.log("Client disconnected");
    });
    }
);

setInterval(refreshCount, 10);

refreshCount();

console.log(`WebSocket server is running on ws://localhost:${PORT}`);