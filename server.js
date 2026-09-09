const express=require('express');
const app=express();
app.use(express.json());
const PORT=process.env.PORT||3000;
let tasks=[
{id:1,title:"Welcome to ZONERUSH",desc:"Admin se jo Poster banayega yahi dikhega. Isko Delete kar sakta hai.",prize:"500 ZC",img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",link:"#"}
];
app.get('/',(req,res)=>{
res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ZONERUSH</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;background:#050a1a;color:#fff;font-family:Inter;padding-bottom:90px}
.bg{position:fixed;inset:0;z-index:-3;background:radial-gradient(120% 80% at 50% -10%, #1e3a5f 0%, #0a1228 45%, #050a1a 100%)}
#stars{position:fixed;inset:0;z-index:-2}
.header{margin:10px;border-radius:20px;border:1px solid #ffca2c66;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:#ffffff14;backdrop-filter:blur(10px)}
.logo{font-family:Orbitron;font-size:20px;background:linear-gradient(#fff7b0,#ffb700);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero{text-align:center;padding:10px}
.hero h1{font-family:Orbitron;font-size:32px;background:linear-gradient(#fff,#ffcc33);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.btns{display:flex;gap:10px;justify-content:center;margin-top:10px}
.btn{border-radius:20px;padding:10px 18px;font-weight:700;border:1px solid #ffcc33}
.gold{background:linear-gradient(#ffe88a,#ffb700);color:#000;border:none}
.out{background:transparent;color:#ffcc33}
.section{display:none;padding:12px;animation:fade 0.3s} .active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.card{border-radius:16px;overflow:hidden;border:1px solid #ffcc3344;background:#1c2a4e;margin-bottom:12px;position:relative}
.card img{width:100%;height:140px;object-fit:cover}
.cardBody{padding:10px}
.join{position:absolute;right:10px;bottom:10px;background:#ffb700;border:none;padding:6px 16px;border-radius:16px;font-weight:800}
.bottom{position:fixed;bottom:8px;left:8px;right:8px;display:flex;justify-content:space-around;background:#0c132ce6;border:1px solid #ffffff22;border-radius:20px;padding:8px;z-index:99}
.bItem{text-align:center;font-size:11px;opacity:0.5;flex:1} .bItem.act{opacity:1;color:#ffcc33}
.empty{text-align:center;padding:30px;opacity:0.6;border:1px dashed #ffffff30;border-radius:12px;margin-top:10px}
</style></head><body>
<div class="bg"></div><canvas id="stars"></canvas>
<div class="header"><div class="logo">🔥 ZONERUSH</div><div><span onclick="location.href='/admin'">⚙️</span></div></div>

<div id="tab-live" class="section active">
<div class="hero"><h3 style="font-weight:400;opacity:0.8">Find your zone</h3><h1>Own the rush</h1><div class="btns"><button class="btn gold" onclick="showTab('earn')">Earn coins</button><button class="btn out" onclick="alert('How to play - Day 3')">How to play</button></div></div>
<div style="display:flex;justify-content:space-between;color:#ffcc33;font-size:12px;padding:12px 6px"><span>LIVE TOURNAMENTS</span><span onclick="showTab('earn')">See all ></span></div>
<div id="liveList"></div>
</div>

<div id="tab-wallet" class="section"><center><h2>Wallet</h2><div style="font-size:40px;color:#ffcc33" id="coin">0 ZC</div></center></div>
<div id="tab-earn" class="section"><h3>Earn Zone</h3><div id="earnList"></div></div>
<div id="tab-leader" class="section"><center><h2>Leaderboard - Day 3</h2></center></div>
<div id="tab-profile" class="section"><center><h2>Profile</h2><p id="pinfo">Player</p><button class="btn gold" onclick="let n=prompt('Naam?');if(n){localStorage.setItem('name',n);document.getElementById('pinfo').innerText=n}">Edit</button></center></div>

<div class="bottom">
<div class="bItem act" onclick="showTab('live')">⚡<br>Live</div>
<div class="bItem" onclick="showTab('wallet')">💼<br>Wallet</div>
<div class="bItem" onclick="showTab('earn')">⭐<br>Earn Zone</div>
<div class="bItem" onclick="showTab('leader')">🏆<br>Leaderboard</div>
<div class="bItem" onclick="showTab('profile')">👤<br>Profile</div>
</div>

<script>
let coins=parseInt(localStorage.getItem('zc')||'0');document.getElementById('coin').innerText=coins+' ZC';
function showTab(t){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById('tab-'+t).classList.add('active');document.querySelectorAll('.bItem').forEach(b=>b.classList.remove('act'));let m={live:0,wallet:1,earn:2,leader:3,profile:4}[t];document.querySelectorAll('.bItem')[m].classList.add('act');load();}
async function load(){let r=await fetch('/api/tasks');let d=await r.json();let h=d.length==0?'<div class=empty>No Task Yet - Admin se banao</div>':d.map(x=>\`<div class=card><img src="\${x.img}"><div class=cardBody><b>\${x.title}</b><br><small style="opacity:0.7">\${x.desc}</small><br><small>🎁 \${x.prize}</small></div><button class=join onclick="claim()">Join</button></div>\`).join('');document.getElementById('liveList').innerHTML=h;document.getElementById('earnList').innerHTML=h;}
function claim(){coins+=10;localStorage.setItem('zc',coins);document.getElementById('coin').innerText=coins+' ZC';alert('+10 ZC');showTab('wallet');}
load();
const c=document.getElementById('stars'),ctx=c.getContext('2d');function rs(){c.width=innerWidth;c.height=innerHeight}rs();let p=[];for(let i=0;i<80;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5+0.2,d:Math.random()*0.8+0.2});function dr(){ctx.clearRect(0,0,c.width,c.height);p.forEach(o=>{ctx.fillStyle='#ffffff99';ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();o.y+=o.d;if(o.y>c.height){o.y=0;o.x=Math.random()*c.width}});requestAnimationFrame(dr)}dr();
</script></body></html>`);
});
app.get('/api/tasks',(req,res)=>res.json(tasks));
app.get('/admin',(req,res)=>res.send(`<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#0a1228;color:#fff;font-family:sans-serif;padding:16px}input,textarea{width:100%;padding:10px;margin:6px 0;border-radius:8px;background:#101a33;color:#fff;border:1px solid #ffffff33}button{padding:10px 16px;border-radius:8px;background:#ffb700;font-weight:800;border:none;margin:4px}.card{background:#1a274e;padding:10px;border-radius:10px;margin:8px 0;display:flex;gap:10px;align-items:center}img{width:60px;height:60px;border-radius:8px;object-fit:cover}</style></head><body><h2>Admin - ZONERUSH</h2><p>Yahi se Poster banega jo Live pe dikhega - Tera hi Idea</p><input id="title" placeholder="Title"><textarea id="desc" placeholder="Description"></textarea><input id="prize" placeholder="Prize ex: 5000 ZC"><input id="img" placeholder="Poster Image Link https://..."><button onclick="add()">+ Add Task</button><button onclick="location.href='/'">Go Site</button><div id="list"></div><script>async function load(){let r=await fetch('/api/tasks');let d=await r.json();document.getElementById('list').innerHTML=d.map(x=>\`<div class=card><img src="\${x.img}"><div style="flex:1"><b>\${x.title}</b><br><small>\${x.desc}</small></div><button onclick="del(\${x.id})">Del</button></div>\`).join('')}async function add(){let b={title:title.value,desc:desc.value,prize:prize.value||'500 ZC',img:img.value||'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'};await fetch('/api/admin/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});load();title.value='';desc.value='';}async function del(id){await fetch('/api/admin/del/'+id,{method:'DELETE'});load()}load();<\/script></body></html>`));
app.post('/api/admin/add',(req,res)=>{let t={id:Date.now(),...req.body};tasks.unshift(t);res.json(t);});
app.delete('/api/admin/del/:id',(req,res)=>{tasks=tasks.filter(x=>x.id!=req.params.id);res.json({ok:true});});
app.listen(PORT,()=>console.log('LIVE'));
`);
