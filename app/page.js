"use client";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div style={{ background: "#020a06", color: "#e8d48b", minHeight: "100vh", padding: "16px", fontFamily: "monospace", backgroundImage: "radial-gradient(circle at center, #0a2a14 0%, #020a06 100%)" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", border: "1px solid #c8a64a", padding: "15px", background: "linear-gradient(90deg, #000 0%, #1a2f1a 50%, #000 100%)", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "900", letterSpacing: "4px", color: "#f5d76e", textShadow: "0 0 20px #c8a64a" }}>CEDARS EMPIRE</h1>
        <p style={{ color: "#7fcf8f", fontSize: "12px", letterSpacing: "2px" }}>Crypto-Exclusive Economic Ecosystem • Eradicating Poverty</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
        
        {/* SOLAR MICROGRID */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold", marginBottom: "8px" }}>🌱 SOLAR MICROGRID • AFRICA</div>
          <div style={{ background: "#000", height: "140px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #222", color: "#555" }}>Solar Image: Off-Grid Communities</div>
          <div style={{ fontSize: "9px", color: "#7fcf8f", marginTop: "6px", textAlign: "center" }}>Renewable Power • Off-Grid Communities • Sustainable Infrastructure</div>
        </div>

        {/* CENTRAL TREE */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "70px" }}>🌳</div>
          <div style={{ color: "#0f0", fontSize: "10px", marginTop: "10px" }}>● CEDARS TREE • NETWORK ACTIVE</div>
          <div style={{ color: "#c8a64a", fontSize: "9px" }}>Poverty → Prosperity • 360° Live</div>
        </div>

        {/* NEXT.JS DASHBOARD $300 */}
        <div style={{ border: "1px solid #c8a64a", background: "#0f0f0f", padding: "16px" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold", marginBottom: "10px" }}>⚡ NEXT.JS DASHBOARD</div>
          <div style={{ fontSize: "11px", color: "#aaa" }}>CEDARS PORTFOLIO</div>
          <div style={{ fontSize: "12px", color: "#666" }}>Total Portfolio</div>
          <div style={{ fontSize: "28px", color: "#fff", fontWeight: "bold" }}>$300.00</div>
          
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", marginTop: "10px", color: "#aaa" }}>
            <span>ALLOCATION</span><span>70 / 30</span><span>30%</span>
          </div>
          <div style={{ height: "6px", background: "#222", display: "flex", marginTop: "4px" }}>
            <div style={{ width: "70%", background: "#0f0" }}></div>
            <div style={{ width: "30%", background: "#c8a64a" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", marginTop: "6px" }}>
            <span style={{ color: "#666" }}>$210 Active</span><span style={{ color: "#666" }}>$90 Reserve</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "16px" }}>
            <div style={{ border: "1px solid #222", padding: "8px", background: "#000" }}>
              <div style={{ fontSize: "9px", color: "#aaa" }}>ACTIVE FUNDS</div>
              <div style={{ fontSize: "16px", color: "#fff", fontWeight: "bold" }}>$210.00</div>
              <div style={{ fontSize: "9px", color: "#0f0" }}>▲ +2.4% • +2.4%</div>
            </div>
            <div style={{ border: "1px solid #222", padding: "8px", background: "#000" }}>
              <div style={{ fontSize: "9px", color: "#aaa" }}>RESERVE VAULT</div>
              <div style={{ fontSize: "16px", color: "#fff", fontWeight: "bold" }}>$90.00</div>
              <div style={{ fontSize: "9px", color: "#c8a64a" }}>🔒 USDT • USDC • Stable</div>
            </div>
          </div>
        </div>

        {/* GNOSIS SAFE */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold" }}>👥 GNOSIS SAFE • MULTI-SIG VAULT</div>
          <div style={{ fontSize: "12px", color: "#fff", marginTop: "8px" }}>Multi-Signature Vault | 3/5 Signers</div>
          <div style={{ fontSize: "10px", color: "#888", marginTop: "4px" }}>Vault Address: 0xCED...7F91</div>
          <div style={{ fontSize: "9px", background: "#0f2a15", color: "#0f0", padding: "3px 6px", display: "inline-block", marginTop: "6px", border: "1px solid #0f0" }}>🟢 SECURE • ARMORED</div>
          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <div style={{ textAlign: "center" }}><div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#333" }}></div><div style={{ fontSize: "8px", color: "#aaa" }}>Guardian 1</div></div>
            <div style={{ textAlign: "center" }}><div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#333" }}></div><div style={{ fontSize: "8px", color: "#aaa" }}>Guardian 2</div></div>
            <div style={{ textAlign: "center" }}><div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#333" }}></div><div style={{ fontSize: "8px", color: "#aaa" }}>Guardian 3</div></div>
          </div>
          <div style={{ fontSize: "9px", color: "#888", marginTop: "8px" }}>Pending<br/>2/5 Confirmed<br/>Pending<br/>2/5 Confirmed</div>
        </div>

        {/* USSD */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px", textAlign: "center" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold" }}>📟 USSD ACCESS • FEATURE PHONE</div>
          <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "90px", height: "160px", background: "#000", border: "2px solid #444", borderRadius: "12px", padding: "10px" }}>
              <div style={{ fontSize: "7px", color: "#0f0" }}>CEDARS EMPIRE<br/>USSD<br/><br/>*384*CEDARS#</div>
              <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px" }}>
                {[...Array(9)].map((_,i)=><div key={i} style={{ background: "#222", height: "12px", borderRadius: "2px" }}></div>)}
              </div>
            </div>
          </div>
          <div style={{ fontSize: "9px", color: "#aaa", marginTop: "10px" }}>No Internet? No Problem.<br/>Dial *384*CEDARS# now to<br/>send, receive, save —<br/>zero data needed.</div>
        </div>

        {/* COMMUNITY */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold", textAlign: "center" }}>COMMUNITY BONDING</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "12px", textAlign: "center" }}>
            <div><div style={{ fontSize: "18px" }}>🤝</div><div style={{ fontSize: "8px", color: "#aaa" }}>Handshake<br/>Trusted Partnerships</div></div>
            <div><div style={{ fontSize: "18px" }}>🙌</div><div style={{ fontSize: "8px", color: "#aaa" }}>High-Five<br/>Youth Empowerment</div></div>
            <div><div style={{ fontSize: "18px" }}>👨‍👩‍👧</div><div style={{ fontSize: "8px", color: "#aaa" }}>Hug<br/>Family Support</div></div>
          </div>
          <div style={{ marginTop: "16px", borderTop: "1px solid #222", paddingTop: "10px" }}>
            <div style={{ fontSize: "11px", fontWeight: "bold", textAlign: "center", color: "#c8a64a" }}>STABLE PAYMENTS</div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "8px" }}>
              <div style={{ textAlign: "center" }}><div style={{ fontSize: "12px", color: "#fff" }}>🛡️ USDT</div><div style={{ fontSize: "8px", color: "#666" }}>USDT • Tether</div></div>
              <div style={{ textAlign: "center" }}><div style={{ fontSize: "12px", color: "#fff" }}>💠 USDC</div><div style={{ fontSize: "8px", color: "#666" }}>USDC • Circle</div></div>
            </div>
            <div style={{ fontSize: "8px", color: "#666", textAlign: "center", marginTop: "6px" }}>Instant • Low-Fee • Stablecoin Transactions</div>
          </div>
        </div>

        {/* OFF-GRID COMMAND CENTER */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px", gridColumn: "1 / span 2" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold" }}>👥 OFF-GRID COMMAND CENTER • KAMPALA, UGANDA</div>
          <div style={{ background: "#000", height: "120px", marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#555", border: "1px solid #222" }}>Map • HQ Live Monitors • Africa Focus</div>
          <div style={{ fontSize: "8px", color: "#888", marginTop: "6px" }}>HQ: Kampala, Uganda • 00°18'N 32°35'E • 1287 Active Nodes</div>
          <div style={{ marginTop: "8px" }}>
            <a href="/command" style={{ background: "#0f0", color: "#000", padding: "6px 12px", fontSize: "10px", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>→ OPEN 360° COMMAND CENTER</a>
          </div>
        </div>

        {/* 75-YEAR PROJECTION */}
        <div style={{ border: "1px solid #c8a64a", background: "#0a1a0f", padding: "12px" }}>
          <div style={{ color: "#c8a64a", fontSize: "11px", fontWeight: "bold" }}>📈 75-YEAR COMPOUNDING PROJECTION</div>
          <div style={{ background: "#000", height: "100px", marginTop: "8px", border: "1px solid #222", padding: "10px" }}>
            <div style={{ color: "#0f0", fontSize: "10px" }}>Wealth (USD) ↑</div>
            <div style={{ marginTop: "20px", height: "40px", borderLeft: "1px solid #444", borderBottom: "1px solid #444", position: "relative" }}>
              <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", height: "2px", background: "linear-gradient(90deg, #0f0 0%, #ff0 100%)", transform: "skewY(-15deg)" }}></div>
              <div style={{ position: "absolute", top: "-20px", right: "0", color: "#ff0", fontSize: "16px", fontWeight: "bold" }}>$1.2M+</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "7px", color: "#666", marginTop: "4px" }}>
              <span>Year 0</span><span>Year 75</span>
            </div>
          </div>
          <div style={{ fontSize: "8px", color: "#888", marginTop: "6px", textAlign: "center" }}>Annual 7% Compound Growth • Poverty Eradicated • Intergenerational Wealth</div>
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ textAlign: "center", border: "1px solid #c8a64a", padding: "10px", marginTop: "16px", fontSize: "10px", letterSpacing: "1px" }}>
        CEDARS EMPIRE — BUILDING SOVEREIGN FUTURE | CRYPTO EXCLUSIVE | EMPOWERING AFRICA | POVERTY → PROSPERITY
      </div>

    </div>
  );
}
