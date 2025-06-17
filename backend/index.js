import { WebSocketServer } from "ws";
import express from "express";
import path from "path";
import multer from "multer";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

let currentCount= 10000;

// Initialize Express app
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const upload = multer({dest: path.join(__dirname, "uploads/")}); 

app.post('/api/apply', upload.single('resume'), (req, res) => {
    const {name, email, telegram, selectedPosition, source, reasons} = req.body;
    const file = req.file;

    console.log("Received application:", {
        name,
        email,
        telegram,
        selectedPosition,
        source,
        reasons,
        file: file ? file.originalname : "No file uploaded"
    });

    res.json({success: true, message: "Application received successfully!"});
});

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//methods
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