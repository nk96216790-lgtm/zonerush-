const express=require('express');
const app=express();
app.use(express.json());
const PORT=process.env.PORT||3000;
let tasks=[
{ id:1, title:"Welcome to ZONERUSH", desc:"Yaha se tumhara Poster + Title + Description dikhega. Admin se hata sakte ho.", prize:"500 ZC", img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400", link:"#" }
];

app.get('/',(req,res)=>{
res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><title>ZONERUSH</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;background:#050a1a;color:#fff;font-family:Inter,sans-serif;padding-bottom:90px;overflow-x:hidden}
.bg{position:fixed;inset:0;z-index:-3;background:radial-gradient(120% 80% at 50% -10%, #1e3a5f 0%, #0a1228 45%, #050a1a 100%)}
#stars{position:fixed;inset:0;z-index:-2}
.header{margin:10px;border-radius:20px;border:1px solid #ffca2c66;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:linear-gradient(180deg,#ffffff14,#00000030);backdrop-filter:blur(12px);box-shadow:0 0 25px #ffca2c33, inset 0 1px 1px #ffffff33}
.logo{font-family:Orbitron;font-size:22px;font-weight:800;letter-spacing:1px;background:linear-gradient(180deg,#fff7b0 10%,#ffb700 60%,#ff8a00 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 8px #ffb700)}
.hero{text-align:center;padding:10px 16px 6px}
.hero h3{margin:8px 0 0;font-size:20px;letter-spacing:1px;font-weight:400;opacity:0.9}
.hero h1{margin:2px 0 16px;font-family:Orbitron;font-size:36px;background:linear-gradient(#fff,#ffcc33);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 0 15px #ffcc33aa);animation:glow 2s infinite alternate}
@keyframes glow{from{filter:drop-shadow(0 0 10px #ffcc33)}to{filter:drop-shadow(0 0 20px #ffcc33)}}
.btns{display:flex;gap:12px;justify-content:center}
.btn{border-radius:30px;padding:12px 20px;font-weight:700;font-size:14px;border:1px solid #ffcc33;cursor:pointer;transition:0.2s}
.btn:active{transform:scale(0.95)}
.gold{background:linear-gradient(180deg,#ffe88a,#ffb700);color:#000;box-shadow:0 4px 15px #ffb70066;border:none}
.out{background:transparent;color:#ffcc33}
.section{display:none;padding:10px 12px;animation:fade 0.3s} .section.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.titleRow{display:flex;justify-content:space-between;align-items:center;padding:12px 6px;color:#ffcc33;font-size:13px;letter-spacing:1px}
.card{position:relative;border-radius:18px;overflow:hidden;border:1px solid #ffcc3344;background:linear-gradient(180deg,#1c2a4e,#101a33);margin-bottom:14px;box-shadow:0 8px 20px #00000060}
.card img{width:100%;height:150px;object-fit:cover}
.cardBody{padding:12px}
.cardBody h4{margin:0 0 6px;font-size:16px}
.cardBody p{margin:0;font-size:12px;opacity:0.7;line-height:1.4}
.meta{display:flex;gap:12px;margin-top:8px;font-size:11px;opacity:0.8}
.meta b{color:#ffcc33}
.join{position:absolute;right:12px;bottom:12px;background:linear-gradient(#ffe27a,#ffb700);border:none;padding:7px 18px;border-radius:20px;font-weight:800;cursor:pointer}
.bottom{position:fixed;bottom:8px;left:8px;right:8px;display:flex;justify-content:space-around;background:#0c132ce6;border:1px solid #ffffff22;border-radius:22px;padding:8px 4px;backdrop-filter:blur(16px);z-index:99}
.bItem{text-align:center;font-size:11px;opacity:0.5;cursor:pointer;flex:1;padding:4px}
.bItem.active{opacity:1;color:#ffcc33;transform:scale(1.1)}
.bItem div{font-size:20px}
.empty{text-align:center;padding:40px 20px;opacity:0.6;border:1px dashed #ffffff30;border-radius:16px;margin-top:20px}
</style></head><body>
<div class="bg"></div><canvas id="stars"></canvas>
<div class="header"><div class="logo">🔥 ZONERUSH</div><div style="display:flex;gap:12px;font-size:18px"><span onclick="alert('Notifications - Day 3')">🔔</span><span onclick="location.href='/admin'">⚙️</span></div></div>

<div id="tab-live" class="section active">
<div class="hero"><h3>Find your zone</h3><h1>Own the rush</h1><div class="btns"><button class="btn gold" onclick="showTab('earn')">💰 Earn coins</button><button class="btn out" onclick="alert('How to Play Video - Day 3 me add karenge')">▶ How to play</button></div></div>
<div class="titleRow"><span>LIVE TOURNAMENTS / TASKS</span><span onclick="showTab('earn')" style="color:#fff;opacity:0.7">See all ></span></div>
<div id="liveList"></div>
</div>

<div id="tab-wallet" class="section"><div style="padding:20px;text-align:center"><h2>💼 Wallet</h2><div style="font-size:42px;color:#ffcc33;margin:20px 0" id="coin">0 ZC</div><p style="opacity:0.7">Earn Zone se task complete karke coin kamao</p></div></div>

<div id="tab-earn" class="section"><div style="padding:10px"><h3>⭐ Earn Zone</h3><p style="opacity:0.7;font-size:13px">Admin se jo Poster / Task banayega yahi dikhega</p><div id="earnList"></div></div></div>

<div id="tab-leader" class="section"><div style="padding:20px;text-align:center"><h2>🏆 Leaderboard</h2><p style="opacity:0.6">Top players yaha ayenge - Day 3</p></div></div>

<div id="tab-profile" class="section"><div style="padding:20px;text-align:center"><h2>👤 Profile</h2><p id="pinfo">Player • Gorakhpur</p><button class="btn gold" style="margin-top:20px" onclick="let n=prompt('Apna naam likho');if(n)localStorage.setItem('name',n),document.getElementById('pinfo').innerText=n+' • Gorakhpur'">Edit Profile</button></div></div>

<div class="bottom">
<div class="bItem active" onclick="showTab('live')"><div>⚡</div>Live</div>
<div class="bItem" onclick="showTab('wallet')"><div>💼</div>Wallet</div>
<div class="bItem" onclick="showTab('earn')"><div>⭐</div>Earn Zone</div>
<div class="bItem" onclick="showTab('leader')"><div>🏆</div>Leaderboard</div>
<div class="bItem" onclick="showTab('profile')"><div>👤</div>Profile</div>
</div>

<script>
let coins=parseInt(localStorage.getItem('zc')||'0');
document.getElementById('coin').innerText=coins+' ZC';
function showTab(t){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
document.getElementById('tab-'+t).classList.add('active');
document.querySelectorAll('.bItem').forEach(b=>b.classList.remove('active'));
let m={live:0,wallet:1,earn:2,leader:3,profile:4}[t];
document.querySelectorAll('.bItem')[m].classList.add('active');
if(t==='live'||t==='earn')load();
}
async function load(){
let r=await fetch('/api/tasks'); let data=await r.json();
let html = data.length==0 ? '<div class=empty>No Task Yet<br><small>Admin Panel se Poster banao to yaha dikhega</small></div>' : data.map(x=>\`
<div class=card>
<img src="\${x.img}" onerror="this.src='https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'">
<div class=cardBody><h4>\${x.title}</h4><p>\${x.desc}</p><div class=meta><span>🎁 <b>\${x.prize}</b></span><span>👁 View</span></div></div>
<button class=join onclick="claim('\${x.id}')">Join</button>
</div>\`).join('');
document.getElementById('liveList').innerHTML=html;
document.getElementById('earnList').innerHTML=html;
}
function claim(id){coins+=10;localStorage.setItem('zc',coins);document.getElementById('coin').innerText=coins+' ZC';alert('Task Completed! +10 ZC');showTab('wallet');}
load();
// snow stars animation
const c=document.getElementById('stars'),ctx=c.getContext('2d');function rs(){c.width=innerWidth;c.height=innerHeight}rs();let p=[];for(let i=0;i<100;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.8+0.2,d:Math.random()*0.8+0.2, o:Math.random()*0.5+0.3});function dr(){ctx.clearRect(0,0,c.width,c.height);p.forEach(o=>{ctx.fillStyle='rgba(255,255,255,'+o.o+')';ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();o.y+=o.d;if(o.y>c.height){o.y=0;o.x=Math.random()*c.width}});requestAnimationFrame(dr)}dr();window.onresize=rs;
let nm=localStorage.getItem('name');if(nm)document.getElementById('pinfo').innerText=nm+' • Gorakhpur';
</script>
</body></html>`);
});

app.get('/api/tasks',(req,res)=>res.json(tasks));

app.get('/admin',(req,res)=>res.send(`
<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#0a1228;color:#fff;font-family:sans-serif;padding:16px}input,textarea{width:100%;padding:10px;margin:6px 0;border-radius:8px;border:1px solid #ffffff33;background:#101a33;color:#fff}button{padding:10px 16px;border-radius:8px;border:none;background:#ffb700;font-weight:800;margin:4px}.card{background:#1a274e;padding:10px;border-radius:10px;margin:8px 0;display:flex;gap:10px;align-items:center}img{width:60px;height:60px;border-radius:8px;object-fit:cover}</style></head><body>
<h2>⚙️ ZONERUSH Admin</h2><p>Poster / Title / Description banao - Wahi Live Site pe dikhega</p>
<input id="title" placeholder="Title - ex: Night Frost Clash">
<textarea id="desc" placeholder="Description"></textarea>
<input id="prize" placeholder="Prize - ex: 5,000 ZC">
<input id="img" placeholder="Poster Image Link (https://...)">
<input id="link" placeholder="Join Link (optional)">
<button onclick="add()">+ Add Task</button>
<button onclick="location.href='/'">Go to Site</button>
<div id="list"></div>
<script>
async function load(){let r=await fetch('/api/tasks');let d=await r.json();document.getElementById('list').innerHTML=d.map(x=>\`<div class=card><img src="\${x.img}"><div style="flex:1"><b>\${x.title}</b><br><small>\${x.desc}</small></div><button onclick="del(\${x.id})">Delete</button></div>\`).join('')}
async function add(){let b={title:title.value,desc:desc.value,prize:prize.value||'500 ZC',img:img.value||'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',link:link.value};let r=await fetch('/api/admin/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});if(r.ok){alert('Added!');load();title.value='';desc.value='';}else alert('Error')}
async function del(id){if(!confirm('Delete karna hai?'))return;await fetch('/api/admin/del/'+id,{method:'DELETE'});load()}
load();
</script></body></html>`));

app.post('/api/admin/add',(req,res)=>{let t={id:Date.now(),...req.body};tasks.unshift(t);res.json(t);});
app.delete('/api/admin/del/:id',(req,res)=>{tasks=tasks.filter(x=>x.id!=req.params.id);res.json({ok:true});});

app.listen(PORT,()=>console.log('ZONERUSH PRO LIVE'));
`);
