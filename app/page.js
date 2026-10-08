export default function Page() {
  return (
    <main style={{background:"#020a06",color:"#e8ffe8",minHeight:"100vh",fontFamily:"system-ui, monospace",padding:"0"}}>
      <header style={{borderBottom:"1px solid #0a2a15",padding:"16px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
          <span style={{fontSize:"22px"}}>🌲</span>
          <strong style={{color:"#f5c542",letterSpacing:"1px"}}>CEDARS OF WEALTH</strong>
        </div>
        <span style={{fontSize:"11px",border:"1px solid #00ff88",color:"#00ff88",padding:"4px 8px"}}>AUDITED ESCROW • KYC REQUIRED</span>
      </header>

      <section style={{padding:"60px 24px",textAlign:"center",maxWidth:"900px",margin:"0 auto"}}>
        <h1 style={{fontSize:"32px",color:"#f5c542",lineHeight:"1.2"}}>Humanitarian Capital Engine</h1>
        <p style={{color:"#a0c0a0",marginTop:"12px",fontSize:"15px"}}>
          Corporate humanitarian platform. We route worker capital into verified aid projects via transparent escrow, staking, and FX services. No guaranteed returns. All yields variable and audited.
        </p>
        <div style={{marginTop:"24px",display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
          <div style={{background:"#0a1f12",border:"1px solid #123a22",padding:"12px 16px",borderRadius:"6px"}}>
            <div style={{fontSize:"11px",color:"#8ab48a"}}>24H TREASURY REPORT</div>
            <div style={{fontWeight:"bold"}}>Published Daily</div>
          </div>
          <div style={{background:"#0a1f12",border:"1px solid #123a22",padding:"12px 16px",borderRadius:"6px"}}>
            <div style={{fontSize:"11px",color:"#8ab48a"}}>ESCROW FEE</div>
            <div style={{fontWeight:"bold"}}>Disclosed at Checkout</div>
          </div>
        </div>
        <p style={{fontSize:"11px",color:"#6a8a6a",marginTop:"20px"}}>Deposits: TRC20 TE26B7zQjMbahYAWcxEsSPC6aZEr2Hcz1u • Risk Disclosure: Crypto assets are volatile. Past performance does not guarantee future results.</p>
      </section>

      <section style={{background:"#08140c",padding:"32px 24px"}}>
        <h2 style={{textAlign:"center",color:"#f5c542",fontSize:"18px"}}>20 Transparent Services (Fees Disclosed, No Guaranteed Yield)</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"12px",maxWidth:"1000px",margin:"20px auto"}}>
          {[
            "P2P Escrow Settlement","60s Verification Tasks","Withdrawal Processing","Staking Pool Access (Variable APY)","Locked Treasury Reports (5% Target, Not Guaranteed)","30-Day Liquidity Pools","Referral Program","Aid Matching Escrow","FX & Stablecoin Services","Booster Deposit Packages",
            "Validator Node Hosting","DEX Liquidity Services","Sponsorship Placement","Data API Access","KYC Processing","Micro-Advance Services","Badge Minting","Carbon Credit Facilitation","Auto-Compounding Tool","Dispute Mediation"
          ].map((t,i)=>(
            <div key={i} style={{background:"#0d2214",border:"1px solid #1a3a24",padding:"12px",borderRadius:"6px",fontSize:"12px"}}>
              <span style={{color:"#00ff88"}}>{String(i+1).padStart(2,"0")}</span> {t}
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"32px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h3 style={{color:"#f5c542"}}>Calculator — Realistic Example</h3>
        <div style={{background:"#0a1f12",border:"1px solid #1f3a25",padding:"16px",borderRadius:"6px",marginTop:"12px",fontSize:"13px"}}>
          <p>Deposit: $300</p>
          <p>Illustrative APY: 5% (variable, not guaranteed)</p>
          <p>Estimated Yearly: $15.00 before fees</p>
          <p style={{color:"#8ab48a",fontSize:"11px",marginTop:"8px"}}>This is an educational example only. Actual returns depend on market conditions, fees disclosed at checkout, and project performance. No daily 1.5% guarantee.</p>
        </div>
      </section>

      <footer style={{borderTop:"1px solid #0a2a15",padding:"20px 24px",textAlign:"center",fontSize:"11px",color:"#6a8a6a"}}>
        © 2026 Cedars of Wealth • Compliance: KYC required before withdrawal • All fees shown before confirmation • Privacy | Terms | Security
      </footer>
    </main>
  );
}
