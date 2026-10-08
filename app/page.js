\"use client";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const downloadPDF = async () => {
    setLoading(true);
    // load CDN if not loaded
    if (!window.html2pdf) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
      document.head.appendChild(s);
      await new Promise(r => s.onload = r);
    }
    const element = document.getElementById("receipt");
    const opt = {
      margin: 0.5,
      filename: 'Cedars_Wealth_Statement.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    window.html2pdf().set(opt).from(element).save().then(()=>setLoading(false));
  };

  return (
    <main style={{background:"#020a06",color:"#e8ffe8",minHeight:"100vh",fontFamily:"system-ui, monospace"}}>
      <header style={{borderBottom:"1px solid #0a2a15",padding:"16px 24px",display:"flex",justifyContent:"space-between"}}>
        <strong style={{color:"#f5c542"}}>🌲 CEDARS OF WEALTH</strong>
        <button onClick={downloadPDF} style={{background:"#00ff88",color:"#000",border:"none",padding:"6px 12px",borderRadius:"4px",cursor:"pointer",fontWeight:"bold"}}>
          {loading ? "Generating..." : "Download PDF Statement"}
        </button>
      </header>

      <div id="receipt" style={{padding:"40px 24px",maxWidth:"800px",margin:"0 auto"}}>
        <h1 style={{color:"#f5c542",textAlign:"center"}}>Humanitarian Capital Engine</h1>
        <p style={{textAlign:"center",color:"#a0c0a0",fontSize:"12px"}}>Compliant Escrow Report • No Guaranteed Yield • Variable APY Only</p>
        
        <div style={{background:"#0a1f12",border:"1px solid #123a22",padding:"16px",marginTop:"24px",borderRadius:"6px"}}>
          <p style={{fontSize:"11px",color:"#8ab48a"}}>DEPOSIT ADDRESS (TRC20)</p>
          <p style={{wordBreak:"break-all",color:"#00ff88"}}>TE26B7zQjMbahYAWcxEsSPC6aZEr2Hcz1u</p>
          <p style={{fontSize:"11px",color:"#6a8a6a",marginTop:"10px"}}>This statement was generated client-side using html2pdf.js. All fees are disclosed at checkout. No daily 1.5% guarantee. For audit purposes only.</p>
        </div>

        <div style={{marginTop:"24px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",fontSize:"12px"}}>
          <div style={{background:"#08140c",padding:"12px",border:"1px solid #1a3a24"}}>Service: Escrow Settlement<br/>Fee: Disclosed</div>
          <div style={{background:"#08140c",padding:"12px",border:"1px solid #1a3a24"}}>KYC: Required Before Withdrawal</div>
        </div>

        <p style={{fontSize:"10px",color:"#5a7a5a",marginTop:"30px",textAlign:"center"}}>© 2026 Cedars of Wealth • Generated {new Date().toLocaleDateString()} • This PDF is not a securities offering.</p>
      </div>
    </main>
  );
}
