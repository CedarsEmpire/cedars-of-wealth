"use client";
import { useState } from "react";

export default function Page() {
  const [net, setNet] = useState("TRC20");
  const EVM = "0x0d4c2B95e8FB7Be3DB9953bAcEf3A4Be643bA77B";
  const TRC20 = "TE26B7zQjMbahYAWcxEsSPC6aZEr2Hcz1u";
  const addr = net === "TRC20" ? TRC20 : EVM;

  return (
    <div style={{background:"#020a06",minHeight:"100vh",padding:"14px",fontFamily:"monospace",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"400px"}}>
        <h1 style={{color:"#f5c542",textAlign:"center",fontWeight:"900",letterSpacing:"2px"}}>CEDARS OF WEALTH</h1>
        <p style={{color:"#00ff88",textAlign:"center",fontSize:"10px"}}>70/30 PROTOCOL • {net}</p>
        
        <div style={{border:"1px solid #f5c542",borderRadius:"12px",padding:"12px",background:"#0a0a0a",marginTop:"12px"}}>
          <div style={{display:"flex",gap:"8px",marginBottom:"10px"}}>
            <button onClick={()=>setNet("TRC20")} style={{flex:1,padding:"10px",borderRadius:"8px",background:net==="TRC20"?"#00ff88":"#222",color:net==="TRC20"?"#000":"#fff",border:"none",fontWeight:"bold",cursor:"pointer"}}>TRC20</button>
            <button onClick={()=>setNet("BEP20")} style={{flex:1,padding:"10px",borderRadius:"8px",background:net==="BEP20"?"#f5c542":"#222",color:net==="BEP20"?"#000":"#fff",border:"none",fontWeight:"bold",cursor:"pointer"}}>BEP20</button>
            <button onClick={()=>setNet("ETH")} style={{flex:1,padding:"10px",borderRadius:"8px",background:net==="ETH"?"#627eea":"#222",color:"#fff",border:"none",fontWeight:"bold",cursor:"pointer"}}>ETH</button>
          </div>
          
          <div style={{background:"#fff",padding:"12px",borderRadius:"8px",wordBreak:"break-all",color:"#000",fontSize:"12px",fontWeight:"bold",textAlign:"center"}}>{addr}</div>
          
          <button onClick={()=>{navigator.clipboard.writeText(addr); alert("Copied: "+addr)}} style={{width:"100%",marginTop:"10px",background:"#00ff88",padding:"14px",borderRadius:"8px",fontWeight:"900",border:"none",cursor:"pointer"}}>COPY {net} ADDRESS</button>
        </div>

        <p style={{color:"#555",textAlign:"center",fontSize:"9px",marginTop:"12px"}}>Built on Arbitrum • 70/30 Split Automated</p>
      </div>
    </div>
  );
}
