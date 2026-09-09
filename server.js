const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let tasks=[];
app.use(express.json());
app.get('/',(req,res)=>{
res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ZONERUSH</title><style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
body{margin:0;background:#070b18;color:#fff;font-family:sans-serif;overflow-x:hidden}
.bg{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at top,#1a2a4a,#070b18);z-index:-2}
.snow{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;background:transparent}
.header{display:flex;justify-content:space-between;align-items:center;margin:12px;padding:14px 18px;border:1px solid #ffcc33aa;border-radius:18px;background:linear-gradient(180deg,#ffffff10,#00000040);box-shadow:0 0 20px #ffcc3366}
.logo{font-family:'Orbitron';font-size:28px;font-weight:900;background:linear-gradient(#fff8a0,#ffb700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 10px #ffb700)}
.hero{text-align:center;padding:18px}
.hero h2{font-size:26px;margin:5px;letter-spacing:1px}
.hero h1{font-size:42px;margin:0;background:linear-gradient(#fff,#ffcc33);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 12px #ffcc33)}
.btns{display:flex;gap:12px;justify-content:center;margin-top:18px}
.gold{background:linear-gradient(#ffe27a,#ffb700);color:#000;border:none;padding:12px 22px;border-radius:30px;font-weight:bold;box-shadow:0 0 15px #ffb700aa}
.outline{background:transparent;border:1px solid #ffcc33;color:#ffcc33;padding:12px 22px;border-radius:30px;font-weight:bold}
.live{margin:18px;padding:14px;border-radius:16px;background:#ffffff08;border:1px solid #ffffff14}
.card{margin:12px;padding:14px;border-radius:16px;background:linear-gradient(180deg,#1e2a4a,#10182e);border:1px solid #ffcc3344;display:flex;flex-direction:column;gap:10px;animation:float 3s infinite alternate}
@keyframes float{from{transform:translateY(0)}to{transform:translateY(-3px)}}
.toprow{display:flex;justify-content:space-between;align-items:center}
.badge{border:1px solid #ffcc33;padding:4px 12px;border-radius:20px;font-size:12px}
.join{background:linear-gradient(#ffe27a,#ffb700);border:none;padding:8px 20px;border-radius:20px;font-weight:bold}
.bottom{position:fixed;bottom:10px;left:10px;right:10px;display:flex;justify-content:space-around;padding:10px;background:#0c1226ee;border:1px solid #ffffff22;border-radius:22px;backdrop-filter:blur(10px)}
</style></head><body>
<div class="bg"></div>
<canvas class="snow" id="snow"></canvas>
<div class="header"><div class="logo">🔥 ZONERUSH</div><div>🔔 ⚙️</div></div>
<div class="hero"><h2>Find your zone</h2><h1>Own the rush</h1>
<div class="btns"><button class="gold">🪙 Earn coins</button><button class="outline">▶ How to play</button></div></div>
<div class="live"><div style="display:flex;justify-content:space-between"><span style="color:#ffcc33">LIVE TOURNAMENTS</span><span>See all ></span></div>
<div id="tlist"></div>
</div>
<div style="margin:12px;padding:14px;border-radius:16px;background:#1e2a4a;text-align:center" id="earn">🎯 <b>Earn Zone</b><p id="t">Loading...</p></div>
<div class="bottom"><div>⚡<br>Live</div><div>💼<br>Wallet</div><div>⭐<br>Earn Zone</div><div>🏆<br>Leaderboard</div><div>👤<br>Profile</div></div>
<script>
const list=[{name:"Night Frost Clash",prize:"5,000 ZC",players:"128/200",time:"12m 34s",hot:true},{name:"Ocean Frenzy Cup",prize:"2,500 ZC",players:"64/100",time:"05m 10s"},{name:"Glacier Rush 1v1",prize:"1,200 ZC",players:"22/32",time:"02m 45s"}];
document.getElementById('tlist').innerHTML=list.map(l=>\`<div class="card"><div class="toprow"><span>🔥 \${l.name}</span>\${l.hot?'<span class="badge">HOT</span>':''}</div><div style="font-size:12px;opacity:0.8">Prize • \${l.prize} &nbsp; Players • \${l.players} &nbsp; Time • \${l.time}</div><div style="text-align:right"><button class="join">Join</button></div></div>\`).join('');
fetch('/api/tasks').then(r=>r.json()).then(d=>{document.getElementById('t').innerHTML=d.length==0?'Abhi Koi Task Nahi - Kal Admin Se Banega':'Tasks: '+d.length});
const c=document.getElementById('snow'),ctx=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;let p=[];for(let i=0;i<80;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+1,d:Math.random()*1+0.5});function draw(){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#ffffff99";p.forEach(o=>{ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();o.y+=o.d;if(o.y>c.height){o.y=0;o.x=Math.random()*c.width}});requestAnimationFrame(draw)}draw();
</script>
</body></html>`);
});
app.get('/api/tasks',(req,res)=>res.json(tasks));
app.get('/admin',(req,res)=>res.send('Admin Day 2'));
app.listen(PORT,()=>console.log('Live Pro'));
