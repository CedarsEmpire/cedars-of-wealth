"use client";
export default function Page() {
  return (
    <div style={{background:"#020a06",color:"#e8d48b",minHeight:"100vh",padding:"20px",fontFamily:"monospace",textAlign:"center"}}>
      <h1 style={{fontSize:"32px",color:"#f5d76e",fontWeight:"900"}}>CEDARS EMPIRE</h1>
      <div style={{border:"1px solid #c8a64a",padding:"20px",marginTop:"20px",background:"#0f0f0f"}}>
        <div style={{fontSize:"28px",color:"#fff",fontWeight:"bold"}}>$300.00</div>
        <div style={{marginTop:"20px"}}>
          <a href="/login" style={{background:"#0f0",color:"#000",padding:"12px 20px",fontWeight:"bold",textDecoration:"none"}}>GO TO LOGIN</a>
        </div>
      </div>
    </div>
  );
}
