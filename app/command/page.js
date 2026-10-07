"use client";
import { useState, useEffect } from "react";
export default function CommandCenter(){
  const [status,setStatus]=useState("CONNECTING...");
  const [logs,setLogs]=useState([]);
  useEffect(()=>{
    setStatus("LIVE ● 360° MONITORING ACTIVE");
    setLogs([
      {time:new Date().toLocaleTimeString(),msg:"Command Center Initialized"},
      {time:new Date().toLocaleTimeString(),msg:"IP Tracking: READY"},
      {time:new Date().toLocaleTimeString(),msg:"Device Monitoring: READY"},
    ]);
  },[]);
  return(
    <div style={{background:"#000",color:"#0f0",minHeight:"100vh",padding:"20px",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"32px",fontWeight:"bold",borderBottom:"2px solid #0f0",paddingBottom:"10px"}}>CEDARS COMMAND CENTER • 360° LIVE</h1>
      <div style={{marginTop:"20px",padding:"10px",border:"1px solid #0f0",display:"inline-block"}}>STATUS: {status}</div>
      <div style={{marginTop:"30px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        <button style={{padding:"20px",background:"#0f0",color:"#000",fontWeight:"bold",border:"none"}}>APPROVE WORKER</button>
        <button style={{padding:"20px",background:"#ff0",color:"#000",fontWeight:"bold",border:"none"}}>SUSPEND WORKER</button>
        <button style={{padding:"20px",background:"#f00",color:"#fff",fontWeight:"bold",border:"none"}}>TERMINATE WORKER</button>
      </div>
      <div style={{marginTop:"40px",border:"1px solid #333",padding:"20px"}}>
        <h3>LIVE WORKER FEED (IP + DEVICE)</h3>
        {logs.map((l,i)=><div key={i} style={{marginTop:"10px",color:"#888"}}>[{l.time}] {l.msg}</div>)}
      </div>
    </div>
  )
}
