"use client";
import { useState } from "react";

export default function Page() {
  const [pkg, setPkg] = useState("$300 Package");
  return (
    <div style={{background:"#020a06",minHeight:"100vh",padding:"16px",fontFamily:"sans-serif",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"420px"}}>
        <h1 style={{color:"#f5c542",textAlign:"center",fontWeight:"900",letterSpacing:"1px",margin:"12px 0 4px 0"}}>CEDARS OF WEALTH</h1>
        <p style={{color:"#00ff88",textAlign:"center",fontSize:"11px",margin:"0 0 14px 0"}}>70/30 PROTOCOL • USDT ONLY • *384*CEDARS#</p>

        <div style={{border:"1px solid #f5c542",borderRadius:"14px",padding:"12px",background:"#0a0a0a",boxShadow:"0 0 10px #ffffff10",marginBottom:"14px"}}>
          <input placeholder="Email" style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"14px",color:"#fff",marginBottom:"10px",boxSizing:"border-box"}}/>
          <input placeholder="Password" type="password" style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"14px",color:"#fff",marginBottom:"12px",boxSizing:"border-box"}}/>
          <button style={{width:"100%",background:"linear-gradient(90deg,#00ff88,#aaff00)",border:"none",padding:"16px",borderRadius:"8px",fontWeight:"900",color:"#003300"}}>LOGIN</button>
        </div>

        <div style={{border:"1px solid #f5c542",borderRadius:"14px",padding:"12px",background:"#0a0a0a",marginBottom:"14px"}}>
          <select value={pkg} onChange={e=>setPkg(e.target.value)} style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"14px",color:"#fff",marginBottom:"10px",boxSizing:"border-box"}}>
            <option>$300 Package</option><option>$600 Package</option><option>$1200 Package</option>
          </select>
          <input placeholder="USDT Address (BEP20)" style={{width:"100%",background:"#141414",border:"1px solid #222",borderRadius:"8px",padding:"14px",color:"#fff",marginBottom:"12px",boxSizing:"border-box"}}/>
          <button style={{width:"100%",background:"linear-gradient(90deg,#00ff88,#ffea00)",border:"none",padding:"16px",borderRadius:"8px",fontWeight:"900",color:"#003300"}}>DEPOSIT</button>
        </div>

        <div style={{border:"1px solid #333",borderRadius:"14px",padding:"12px",background:"#0a0a0a"}}>
          <div style={{color:"#00ff88",fontSize:"12px",fontWeight:"bold",marginBottom:"6px"}}>TODAY: Dream Destination</div>
          <label style={{display:"flex",gap:"6px",fontSize:"13px",color:"#ccc",marginBottom:"12px"}}><input type="checkbox"/> Completed 60-sec task</label>
          <button style={{width:"100%",background:"linear-gradient(90deg,#ffaa00,#ffcc00)",border:"none",padding:"16px",borderRadius:"8px",fontWeight:"900",color:"#fff"}}>UNLOCK 2% DAILY</button>
          <div style={{color:"#666",fontSize:"11px",marginTop:"10px"}}>Amount USDT</div>
        </div>

        <div style={{textAlign:"center",color:"#555",fontSize:"10px",marginTop:"16px"}}>CEDARS EMPIRE — Vercel Live Build</div>
      </div>
    </div>
  );
}
