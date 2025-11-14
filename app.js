export function start(){ 
  const root = document.getElementById('root');
  root.innerHTML = `
    <div style='padding:20px'>
      <h1 style="color:#e6004c">Aviator Pro Analyzer (Mobile)</h1>
      <p>Connect your WS proxy in settings. This is the mobile wrapper build.</p>
      <div id='status' style='margin-top:20px'>Connecting...</div>
    </div>`;
  try{
    const ws = new WebSocket("wss://your-ws-proxy-url");
    ws.onopen=()=>document.getElementById("status").innerText="Connected";
    ws.onmessage=(m)=>console.log("IN:",m.data);
  }catch(e){
    document.getElementById("status").innerText="WS Error (set correct URL)";
  }
}
start();
