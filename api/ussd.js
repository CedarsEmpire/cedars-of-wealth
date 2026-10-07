export default function handler(req,res){
const text=req.body.text||'';const s=text.split('*');let r='';
if(text===''){r='CON Cedars of Wealth\n1.Task\n2.Balance\n3.Withdraw';}
else if(s[0]==='1'&&s.length===1){r='CON Complete Task\n1.Confirm';}
else if(s[0]==='1'){r='END 2% Unlocked';}
else if(s[0]==='2'){r='END Bal $1000 Earn $140 Reserve $300';}
else{r='END Received';}
res.setHeader('Content-Type','text/plain');res.send(r);
}
