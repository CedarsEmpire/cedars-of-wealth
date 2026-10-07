"use client";
import { useState } from "react";

export default function Page() {
  const [network, setNetwork] = useState("TRC20");
  const BEP20 = "0x0d4c2B95e8FB7Be3DB9953bAcEf3A4Be643bA77B";
  const TRC20 = "TE26B7zQjMbahYAWcxEsSPC6aZEr2Hcz1u";
  const addr = network === "TRC20" ? TRC20 : BEP20;
  
  const copyAddr = () => { navigator.clipboard.writeText(addr); alert("Copied: " + addr); };

  return (
    <div style={{background:"#020a06",minHeight:"100vh",padding:"14px",fontFamily:"monospace",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"420px"}}>
        <h1 style={{color:"#f5c542",textAlign:"center",fontWeight:"900",margin:"10px 0 2px 0"}}>CEDARS OF WEALTH</h1>
        <p style={{color:"#00ff88",textAlign:"center",fontSize:"10px",margin:"0 0 12px 0"}}>70/30 PROTOCOL • VERIFIED ADDRESSES</p>

        <div style={{border:"1px solid #f5c542",borderRadius:"12px",padding:"12px",background:"#0a0a0a",marginBottom:"12px"}}>
          <div style={{color:"#aaa",fontSize:"10px",marginBottom:"8px"}}>SELECT NETWORK</div>
          <div style={{display:"flex",gap:"8px",marginBottom:"12px"}}>
            <button onClick={()=>setNetwork("TRC20")} style={{flex:1,padding:"10px",borderRadius:"8px",border:"1px solid",borderColor: network==="TRC20"?"#00ff88":"#222",background: network==="TRC20"?"#00ff8822":"#141414",color: network==="TRC20"?"#00ff88":"#666",fontWeight:"bold"}}>TRC20 (Tron) - Low Fee</button>
            <button onClick={()=>setNetwork("BEP20")} style={{flex:1,padding:"10px",borderRadius:"8px",border:"1px solid",borderColor: network==="BEP20"?"#f5c542":"#222",background: network==="BEP20"?"#f5c54222":"#141414",color: network==="BEP20"?"#f5c542":"#666",fontWeight:"bold"}}>BEP20 (BSC)</button>
          </div>
          
          <div style={{background:"#fff",padding:"8px",borderRadius:"8px",textAlign:"center"}}>
            <div style={{fontSize:"10px",color:"#000",wordBreak:"break-all",fontWeight:"bold",marginBottom:"6px"}}>{addr}</div>
            <div style={{color:"#000",fontSize:"9px"}}>Scan to deposit USDT - {network}</div>
          </div>

          <button onClick={copyAddr} style={{width:"100%",marginTop:"10px",background:"linear-gradient(90deg,#00ff88,#ffea00)",border:"none",padding:"14px",borderRadius:"8px",fontWeight:"900"}}>COPY ADDRESS - DEPOSIT {network}</button>
          
          <div style={{marginTop:"10px",background:"#ff444422",border:"1px solid #ff4444",padding:"8px",borderRadius:"6px",fontSize:"9px",color:"#ff9999"}}>
            ⚠️ Only send USDT {network} to this address. Other assets will be lost forever. This is experimental, not financial advice. 2% daily is target, not guaranteed.
          </div>
        </div>

        <div style={{border:"1px solid #333",borderRadius:"12px",padding:"12px",background:"#0a0a0a",marginBottom:"12px"}}>
          <div style={{color:"#00ff88",fontSize:"12px",fontWeight:"bold"}}>TODAY: Dream Destination</div>
          <label style={{display:"flex",gap:"6px",fontSize:"12px",color:"#ccc",margin:"10px 0"}}><input type="checkbox"/> Completed 60-sec task</label>
          <button style={{width:"100%",background:"#222",border:"1px solid #444",padding:"14px",borderRadius:"8px",fontWeight:"900",color:"#666"}}>UNLOCK 2% - Coming Soon</button>
        </div>

        <div style={{border:"1px solid #333",borderRadius:"12px",padding:"12px",background:"#0a0a0a"}}>
          <div style={{color:"#aaa",fontSize:"10px"}}>Withdrawal Request</div>
          <input placeholder="Amount USDT" style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"12px",color:"#fff",margin:"8px 0",boxSizing:"border-box"}}/>
          <input placeholder="Your USDT Address for payout" style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"12px",color:"#fff",marginBottom:"8px",boxSizing:"border-box"}}/>
          <button style={{width:"100%",background:"linear-gradient(90deg,#00ff88,#00cc88)",border:"none",padding:"14px",borderRadius:"8px",fontWeight:"900"}}>REQUEST WITHDRAW</button>
        </div>

        <div style={{textAlign:"center",color:"#444",fontSize:"9px",marginTop:"14px"}}>BEP20: 0x0d4c...A77B | TRC20: TE26...z1u</div>
      </div>
    </div>
  );
}
