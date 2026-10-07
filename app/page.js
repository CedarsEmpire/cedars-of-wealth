"use client";
import { useState } from "react";
export default function Page() {
  const [network, setNetwork] = useState("TRC20");
  const EVM = "0x0d4c2B95e8FB7Be3DB9953bAcEf3A4Be643bA77B";
  const TRC20 = "TE26B7zQjMbahYAWcxEsSPC6aZEr2Hcz1u";
  const addr = network === "TRC20" ? TRC20 : EVM;
  const copy = () => { navigator.clipboard.writeText(addr); alert("Copied: " + addr); };
  return (
    <div style={{background:"#020a06",minHeight:"100vh",padding:"14px",fontFamily:"monospace",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"400px"}}>
        <h1 style={{color:"#f5c542",textAlign:"center",fontWeight:"900"}}>CEDARS OF WEALTH</h1>
        <p style={{color:"#00ff88",textAlign:"center",fontSize:"10px",marginBottom:"12px"}}>70/30 PROTOCOL • {network}</p>
        <div style={{border:"1px solid #f5c542",borderRadius:"12px",padding:"12px",background:"#0a0a0a"}}>
          <div style={{display:"flex",gap:"8px",marginBottom:"10px"}}>
            <button onClick={()=>setNetwork("TRC20")} style={{flex:1,padding:"10px",borderRadius:"8px",background: network==="TRC20"?"#00ff88":"#222",color: network==="TRC20"?"#000":"#fff",fontWeight:"bold",border:"none"}}>TRC20</button>
            <button onClick={()=>setNetwork("BEP20")} style={{flex:1,padding:"10px",borderRadius:"8px",background: network==="BEP20"?"#f5c542":"#222",color: network==="BEP20"?"#000":"#fff",fontWeight:"bold",border:"none"}}>BEP20</button>
            <button onClick={()=>setNetwork("ETH")} style={{flex:1,padding:"10px",borderRadius:"8px",background: network==="ETH"?"#627eea":"#222",color: network==="ETH"?"#000":"#fff",fontWeight:"bold",border:"none"}}>ETH</button>
          </div>
          <div style={{background:"#fff",padding:"10px",borderRadius:"8px",wordBreak:"break-all",color:"#000",fontSize:"12px",fontWeight:"bold",textAlign:"center"}}>{addr}</div>
          <button onClick={copy} style={{width:"100%",marginTop:"10px",background:"#00ff88",padding:"14px",borderRadius:"8px",fontWeight:"900",border:"none"}}>COPY {network} ADDRESS</button>
        </div>
      </div>
    </div>
  );
}
