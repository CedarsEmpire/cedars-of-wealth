"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usdtAddress, setUsdtAddress] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  return (
    <div style={{ background: "#050a05", minHeight: "100vh", padding: "20px", fontFamily: "monospace", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>
        
        <h1 style={{ color: "#ffcc00", textAlign: "center", fontSize: "26px", fontWeight: "900", letterSpacing: "2px" }}>CEDARS OF WEALTH</h1>
        <p style={{ color: "#0f0", textAlign: "center", fontSize: "11px", marginTop: "4px" }}>70/30 PROTOCOL • USDT ONLY • *384*CEDARS#</p>

        {/* LOGIN CARD */}
        <div style={{ border: "1px solid #0f0", borderRadius: "12px", padding: "16px", marginTop: "20px", background: "#0a0f0a", boxShadow: "0 0 15px rgba(0,255,0,0.2)" }}>
          <input 
            placeholder="Email" 
            value={email} onChange={e=>setEmail(e.target.value)}
            style={{ width: "100%", background: "#111", border: "1px solid #222", color: "#fff", padding: "14px", borderRadius: "8px", marginBottom: "10px" }} 
          />
          <input 
            type="password"
            placeholder="Password" 
            value={password} onChange={e=>setPassword(e.target.value)}
            style={{ width: "100%", background: "#111", border: "1px solid #222", color: "#fff", padding: "14px", borderRadius: "8px", marginBottom: "12px" }} 
          />
          <button style={{ width: "100%", background: "linear-gradient(90deg, #0f0, #5f5)", color: "#fff", fontWeight: "900", padding: "14px", borderRadius: "8px", border: "none", letterSpacing: "1px" }}>LOGIN</button>
        </div>

        {/* DEPOSIT CARD */}
        <div style={{ border: "1px solid #444", borderRadius: "12px", padding: "16px", marginTop: "16px", background: "#0f0f0a" }}>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>$300 Package</div>
          <input 
            placeholder="USDT Address (BEP20)" 
            value={usdtAddress} onChange={e=>setUsdtAddress(e.target.value)}
            style={{ width: "100%", background: "#111", border: "1px solid #222", color: "#fff", padding: "14px", borderRadius: "8px", marginBottom: "12px" }} 
          />
          <button style={{ width: "100%", background: "linear-gradient(90deg, #0f0, #ff0)", color: "#fff", fontWeight: "900", padding: "14px", borderRadius: "8px", border: "none" }}>DEPOSIT</button>
        </div>

        {/* DAILY TASK */}
        <div style={{ marginTop: "20px" }}>
          <div style={{ color: "#0f0", fontWeight: "bold", fontSize: "14px" }}>TODAY: Dream Destination</div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
            <input type="checkbox" checked={taskDone} onChange={e=>setTaskDone(e.target.checked)} style={{ width: "18px", height: "18px" }} />
            <span style={{ color: "#aaa", fontSize: "13px" }}>Completed 60-sec task</span>
          </div>
          <button style={{ width: "100%", background: "linear-gradient(90deg, #ffcc00, #ff9900)", color: "#fff", fontWeight: "900", padding: "14px", borderRadius: "8px", border: "none", marginTop: "12px", opacity: taskDone ? 1 : 0.5 }} disabled={!taskDone}>
            UNLOCK 2% DAILY
          </button>
        </div>

        {/* WITHDRAW */}
        <div style={{ border: "1px solid #222", borderRadius: "12px", padding: "16px", marginTop: "16px", background: "#0a0a0a" }}>
          <input placeholder="Amount USDT" style={{ width: "100%", background: "#111", border: "1px solid #222", color: "#fff", padding: "14px", borderRadius: "8px" }} />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="/command" style={{ color: "#0f0", fontSize: "11px", textDecoration: "none", border: "1px solid #0f0", padding: "6px 12px", borderRadius: "20px" }}>→ COMMAND CENTER</a>
          <a href="/" style={{ color: "#c8a64a", fontSize: "11px", textDecoration: "none", border: "1px solid #c8a64a", padding: "6px 12px", borderRadius: "20px", marginLeft: "10px" }}>→ GOLD DASHBOARD</a>
        </div>

      </div>
    </div>
  );
}
