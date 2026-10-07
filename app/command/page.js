"use client"
import { useEffect, useState } from 'react'

export default function CommandCenter() {
  const [workers] = useState([
    {id:'1', email:'worker@cedarsempire.com', status:'PENDING', ip:'102.89.23.1', device:'Chrome/Win', clockIn: new Date()},
  ])
  const [logs, setLogs] = useState([])

  useEffect(()=>{
    setLogs([{type:'CLOCK_IN', workerId:'worker@cedars...', timestamp:new Date()}])
  },[])

  return (
    <div style={{background:'#000', color:'#fff', padding:'20px', minHeight:'100vh', fontFamily:'monospace'}}>
      <h1 style={{color:'#00ff88'}}>CEDARS COMMAND CENTER • 360° LIVE</h1>
      <p>Project: cedarsempire | Backend: server.js port 5000 | DB: Prisma PostgreSQL</p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'10px', margin:'20px 0'}}>
        <div style={{border:'1px solid #00ff88', padding:'10px'}}>ACTIVE: 0</div>
        <div style={{border:'1px solid yellow', padding:'10px'}}>PENDING: 1</div>
        <div style={{border:'1px solid red', padding:'10px'}}>SUSPENDED: 0</div>
        <div style={{border:'1px solid #00aaff', padding:'10px'}}>LOGS: {logs.length}</div>
      </div>
      <table style={{width:'100%', borderCollapse:'collapse'}} border="1">
        <thead><tr><th>Email</th><th>Status</th><th>IP / Device</th><th>Action</th></tr></thead>
        <tbody>
          {workers.map(w=>(
            <tr key={w.id}>
              <td>{w.email}</td><td>{w.status}</td><td>{w.ip} / {w.device}</td>
              <td>
                <button style={{background:'green', color:'#fff', margin:'2px'}}>APPROVE</button>
                <button style={{background:'red', color:'#fff', margin:'2px'}}>SUSPEND</button>
                <button style={{background:'orange', color:'#fff', margin:'2px'}}>TERMINATE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{marginTop:'20px'}}>Live Socket.io Telemetry</h3>
      <div style={{background:'#111', padding:'10px', height:'200px', overflow:'auto'}}>
        {logs.map((l,i)=><div key={i}>{l.type} - {l.workerId} - {l.timestamp.toLocaleTimeString()}</div>)}
      </div>
    </div>
  )
}
