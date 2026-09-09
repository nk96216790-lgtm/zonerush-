const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let tasks=[];
app.use(express.json());
app.get('/',(req,res)=>{
res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ZONE RUSH</title><style>
body{margin:0;background:#0a0a14;color:#fff;font-family:sans-serif;text-align:center}
.top{padding:25px;background:linear-gradient(90deg,#ff3c00,#ffb400);animation:glow 2s infinite alternate}
@keyframes glow{from{filter:brightness(1)}to{filter:brightness(1.3)}}
.card{background:#1a1a2e;margin:14px;padding:16px;border-radius:14px;box-shadow:0 0 12px #ff440044}
.btn{background:#ff3c00;border:none;color:#fff;padding:10px 22px;border-radius:8px;font-weight:bold}
</style></head><body>
<div class="top"><h1>🔥 ZONE RUSH</h1><p>Final Lock - Day 1 Live</p></div>
<div class="card"><h3>💰 Wallet</h3><h2>0 Coins</h2><button class="btn">Refer & Earn</button></div>
<div class="card"><h2>🎯 Earn Zone</h2><p id="t">Loading Tasks...</p></div>
<div class="card"><h3>🏆 Tournament</h3><p>Coming Soon - Day 3</p></div>
<div class="card"><h3>⋯ More Zone</h3><p>Withdraw, History, Settings - Day 4</p></div>
<div class="card"><a href="/admin" style="color:#ffb400;text-decoration:none">Admin Login - Day 2</a></div>
<script>fetch('/api/tasks').then(r=>r.json()).then(d=>{document.getElementById('t').innerHTML=d.length==0?'Abhi Koi Task Nahi Hai - Kal Se Admin Panel Se Tasks Banaoge':'Active Tasks: '+d.length})</script>
</body></html>`);
});
app.get('/api/tasks',(req,res)=>res.json(tasks));
app.get('/admin',(req,res)=>res.send('<h2>Admin Panel Kal Banega Day 2</h2><p>Yahan se Poster+Logo+Video+Button+Ad Gate Banega</p>'));
app.listen(PORT,()=>console.log('Live'));
