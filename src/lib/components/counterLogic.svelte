<script>
	import { onMount, onDestroy } from 'svelte';
	let ftdCounter = "...";
	let ws;

    function connect() {
        const protocol = window.location.protocol === "https:" ? "wss" : "ws";
        const host = window.location.host;
        const wsUrl = `${protocol}://${host.split(':')[0]}:8080`;
        ws = new WebSocket(wsUrl);
        
        ws.addEventListener("open", () => {
            console.log("WS open");
        });
        
        ws.addEventListener("message", event => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.type === "ftd") {
                    // update and format with commas
                    ftdCounter = msg.count.toLocaleString();
                }
            } catch (err) {
                console.error("WS parse error:", err);
            }
        });
        
        ws.addEventListener("close", () => {
            console.log("WS closed, retrying in 1s…");
            setTimeout(connect, 1_000);
        });
        
        ws.addEventListener("error", e => {
            console.error("WS error:", e);
            ws.close();
        });
    }
    
    onMount(() => {
        connect();
    });
    
</script>

{ftdCounter}