const express=require('express');
const app=express();
app.use(express.json());
const PORT=process.env.PORT||3000;

let settings={splashType:'fire',splashTime:3,logo:'🔥'};
let tasks=[]; // Khali se shuru - Tu banayega tabhi dikhega - Final Lock C
let users=[];

app.get('/',(req,res)=>{res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ZONERUSH V2 FINAL</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;background:#050a1a;color:#fff;font-family:Inter;padding-bottom:90px;overflow-x:hidden}
.bg{position:fixed;inset:0;z-index:-3;background:radial-gradient(120% at 50% -10%,#1e3a5f,#0a1228 50%,#050a1a)}
#stars{position:fixed;inset:0;z-index:-2}
#splash{position:fixed;inset:0;z-index:999;background:#050a1a;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:0.8s}
.fire{width:80px;height:80px;background:radial-gradient(#ff9,#f80);border-radius:50%;animation:pulse 0.8s infinite;filter:blur(1px);box-shadow:0 0 40px #f80}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
.header{margin:10px;border-radius:20px;border:1px solid #ffca2c66;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:#ffffff14;backdrop-filter:blur(12px)}
.logo{font-family:Orbitron;font-weight:800;background:linear-gradient(#fff7b0,#ffb700);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero{text-align:center;padding:20px 16px}
.hero h1{font-family:Orbitron;font-size:34px;background:linear-gradient(#fff,#ffcc33);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.btn{border-radius:24px;padding:12px 22px;font-weight:800;border:1px solid #ffcc33;cursor:pointer}
.gold{background:linear-gradient(#ffe88a,#ffb700);color:#000;border:none}
.out{background:transparent;color:#ffcc33}
.section{display:none;padding:12px;animation:fade.3s}.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.card{border-radius:18px;overflow:hidden;border:1px solid #ffcc3344;background:linear-gradient(180deg,#1c2a4e,#101a33);margin-bottom:14px;position:relative;transition:.2s}
.card:hover{transform:scale(1.02);box-shadow:0 0 15px #ffcc3344}
.card img{width:100%;height:160px;object-fit:cover}
.logoRound{position:absolute;left:12px;top:110px;width:48px;height:48px;border-radius:50%;border:2px solid #ffcc33;object-fit:cover;background:#000}
.cardBody{padding:16px 12px}
.join{position:absolute;right:12px;bottom:12px;background:linear-gradient(#ffe27a,#ffb700);border:none;padding:8px 18px;border-radius:20px;font-weight:800;cursor:pointer}
.empty{text-align:center;padding:40px;border:1px dashed #ffffff30;border-radius:16px;opacity:.6}
.bottom{position:fixed;bottom:8px;left:8px;right:8px;display:flex;justify-content:space-around;background:#0c132ce6;border:1px solid #ffffff22;border-radius:22px;padding:8px 4px;z-index:99;backdrop-filter:blur(16px)}
.bItem{text-align:center;font-size:11px;opacity:.5;flex:1;cursor:pointer}.bItem.act{opacity:1;color:#ffcc33}
#adGate{position:fixed;inset:0;background:#000e;z-index:1000;display:none;flex-direction:column;align-items:center;justify-content:center}
</style></head><body>
<div class="bg"></div><canvas id="stars"></canvas>
<div id="splash"><div class="fire"></div><h2 style="font-family:Orbitron;margin-top:20px;color:#ffcc33">ZONERUSH</h2><p style="opacity:.6">Loading Rush...</p></div>
<div class="header"><div class="logo">🔥 ZONERUSH</div><div style="display:flex;gap:12px"><span onclick="alert('Notifications')">🔔</span><span onclick="location.href='/admin'">⚙️ ADMIN</span></div></div>

<div id="tab-live" class="section active">
<div class="hero"><h3 style="font-weight:400;opacity:.8">Find your zone</h3><h1>Own the rush</h1><div style="display:flex;gap:10px;justify-content:center;margin-top:12px"><button class="btn gold" onclick="showTab('earn')">💰 Earn coins</button><button class="btn out" onclick="alert('How to Play Video - Admin se link lagega')">▶ How to play</button></div></div>
<div style="display:flex;justify-content:space-between;color:#ffcc33;font-size:12px;padding:12px 6px"><span>LIVE TOURNAMENTS (TU BANAYEGA)</span><span onclick="showTab('earn')">See all ></span></div>
<div id="liveList"></div>
</div>

<div id="tab-wallet" class="section"><center><h2>Wallet - NO ADD MONEY</h2><div style="font-size:48px;color:#ffcc33" id="coin">0 ZC</div><div id="history" style="text-align:left;margin-top:20px;opacity:.8;font-size:13px"></div></center></div>
<div id="tab-earn" class="section"><h3>Earn Zone - Khali se shuru</h3><div id="earnList"></div></div>
<div id="tab-leader" class="section"><center><h2>Leaderboard</h2><p style="opacity:.6">Weekly Auto Rank - Admin se</p></center></div>
<div id="tab-profile" class="section"><center><h2>Profile</h2><img id="av" src="https://i.pravatar.cc/100" style="width:80px;height:80px;border-radius:50%;border:2px solid #ffcc33"><p id="pinfo">Player - Gorakhpur</p><button class="btn gold" onclick="let n=prompt('Naam?');if(n){localStorage.setItem('name',n);document.getElementById('pinfo').innerText=n}">Edit Profile - Avatar Gallery Day 3</button></center></div>

<div class="bottom">
<div class="bItem act" onclick="showTab('live')">⚡<br>Live</div>
<div class="bItem" onclick="showTab('wallet')">💼<br>Wallet</div>
<div class="bItem" onclick="showTab('earn')">⭐<br>Earn Zone</div>
<div class="bItem" onclick="showTab('leader')">🏆<br>Leaderboard</div>
<div class="bItem" onclick="showTab('profile')">👤<br>Profile</div>
</div>

<div id="adGate"><h2 id="adCount">Ad 1/2 - 5 sec</h2><div style="width:80%;height:6px;background:#ffffff22;border-radius:10px;margin:20px"><div id="adBar" style="height:100%;width:0%;background:#ffcc33;border-radius:10px;transition:0.1s"></div></div><button class="btn gold" id="skipBtn" style="display:none" onclick="closeAd()">Continue to Link</button><button class="btn out" style="margin-top:10px" onclick="document.getElementById('adGate').style.display='none'">Close</button></div>

<script>
let coins=parseInt(localStorage.getItem('zc')||'0');
let curTask=null; let adStep=0; let adTimer=null;
document.getElementById('coin').innerText=coins+' ZC';
function showTab(t){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById('tab-'+t).classList.add('active');document.querySelectorAll('.bItem').forEach(b=>b.classList.remove('act'));let m={live:0,wallet:1,earn:2,leader:3,profile:4}[t];document.querySelectorAll('.bItem')[m].classList.add('act');load();}
async function load(){let r=await fetch('/api/tasks');let d=await r.json();let html=d.length==0?'<div class=empty>Admin Task Banayega Tab Dikhega<br><small>/admin pe jaake pehla task bana - Poster, Logo, Title, Desc, Video, Button, Ad 0-5, Coin</small></div>':d.map(x=>\`<div class="card"><img src="\${x.poster}"><img class="logoRound" src="\${x.logo}" onerror="this.style.display='none'"><div class="cardBody"><b>\${x.title}</b><br><small style="opacity:.7">\${x.desc}</small><br><small>🎁 \${x.coins} ZC | \${x.type} | Ad:\${x.ads}</small></div><button class="join" onclick="startTask('\${x.id}')">\${x.btnName||'Join'}</button></div>\`).join('');document.getElementById('liveList').innerHTML=html;document.getElementById('earnList').innerHTML=html;}
function startTask(id){fetch('/api/tasks').then(r=>r.json()).then(d=>{curTask=d.find(x=>x.id==id);if(!curTask)return;if(curTask.ads>0){adStep=0;showAd();}else{openLink();}});}
function showAd(){adStep++;let gate=document.getElementById('adGate');gate.style.display='flex';let count=5;let bar=document.getElementById('adBar');let txt=document.getElementById('adCount');let skip=document.getElementById('skipBtn');skip.style.display='none';bar.style.width='0%';txt.innerText='Ad '+adStep+'/'+curTask.ads+' - '+count+' sec';let iv=setInterval(()=>{count--;bar.style.width=((5-count)/5*100)+'%';txt.innerText='Ad '+adStep+'/'+curTask.ads+' - '+count+' sec';if(count<=0){clearInterval(iv);if(adStep<curTask.ads){showAd();}else{skip.style.display='block';txt.innerText='Ads Complete - Click Continue';}}},1000);}
function closeAd(){document.getElementById('adGate').style.display='none';openLink();}
function openLink(){if(curTask.link)window.open(curTask.link,'_blank');verifying();}
function verifying(){let gate=document.getElementById('adGate');gate.style.display='flex';document.getElementById('adCount').innerText='Verifying 3 sec fire animation...';document.getElementById('adBar').style.width='100%';document.getElementById('skipBtn').style.display='none';setTimeout(()=>{gate.style.display='none';coins+=parseInt(curTask.coins||10);localStorage.setItem('zc',coins);document.getElementById('coin').innerText=coins+' ZC';let h=document.getElementById('history');h.innerHTML='+'+curTask.coins+' ZC - '+curTask.title+'<br>'+h.innerHTML;alert('Coin + '+curTask.coins+' Confetti 20 + Wallet me udega - Final Flow');showTab('wallet');},3000);}
load();
setTimeout(()=>{document.getElementById('splash').style.opacity='0';setTimeout(()=>document.getElementById('splash').style.display='none',800);},3000);
const c=document.getElementById('stars'),ctx=c.getContext('2d');function rs(){c.width=innerWidth;c.height=innerHeight}rs();let p=[];for(let i=0;i<90;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5+0.2,d:Math.random()*0.8+0.2});function dr(){ctx.clearRect(0,0,c.width,c.height);p.forEach(o=>{ctx.fillStyle='#ffffff88';ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();o.y+=o.d;if(o.y>c.height){o.y=0;o.x=Math.random()*c.width}});requestAnimationFrame(dr)}dr();
let nm=localStorage.getItem('name');if(nm)document.getElementById('pinfo').innerText=nm+' - Gorakhpur';
</script></body></html>`);});

app.get('/api/tasks',(req,res)=>res.json(tasks.filter(t=>t.on!==false)));
app.get('/admin',(req,res)=>{res.send(`<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#0a1228;color:#fff;font-family:sans-serif;padding:12px}input,textarea,select{width:100%;padding:10px;margin:5px 0;border-radius:8px;background:#101a33;color:#fff;border:1px solid #ffffff33}label{font-size:12px;color:#ffcc33}button{padding:10px 16px;border-radius:8px;background:#ffb700;font-weight:800;border:none;margin:4px;cursor:pointer}.row{display:flex;gap:8px}.card{background:#1a274e;padding:10px;border-radius:10px;margin:8px 0;display:flex;gap:10px;align-items:center}img{width:60px;height:60px;border-radius:8px;object-fit:cover}</style></head><body>
<h2>ZONERUSH V2 - FINAL ADMIN - PURA ACCESS</h2>
<p>Yahi se tu 50+ Task bina code ke banayega - Final Lock C</p>
<div style="border:1px solid #ffcc33;padding:12px;border-radius:12px">
<label>Poster 16:9 Link</label><input id="poster" placeholder="https://...">
<label>Logo Gol Link</label><input id="logo" placeholder="https://... logo">
<label>Title</label><input id="title" placeholder="Ex: Night Frost Clash">
<label>Kaise Karna Hai Description</label><textarea id="desc" placeholder="Step by step kaise karna hai"></textarea>
<label>Video Link (YouTube)</label><input id="video" placeholder="https://youtube...">
<div class="row"><div style="flex:1"><label>Button Naam</label><input id="btnName" value="Join"></div><div style="flex:1"><label>Button Link</label><input id="link" placeholder="https://..."></div></div>
<div class="row"><div style="flex:1"><label>Kitne Ad 0-5 Slider</label><input id="ads" type="range" min="0" max="5" value="1" oninput="document.getElementById('adsV').innerText=this.value"><span id="adsV">1</span></div><div style="flex:1"><label>Coin Kitna Dena</label><input id="coins" type="number" value="10"></div></div>
<div class="row"><div style="flex:1"><label>Paisa Type</label><select id="type"><option>Ad</option><option>Advertiser Paid</option><option>Affiliate Amazon</option><option>YouTube View</option><option>Survey</option><option>Offerwall</option><option>App Install CPA</option><option>Brand Sponsor</option></select></div><div style="flex:1"><label>Animation</label><select id="anim"><option>Fire</option><option>Snow</option><option>Rain</option><option>Petals</option><option>Coin Rain</option><option>Off</option></select></div></div>
<label>ON/OFF</label><select id="on"><option value="true">ON - Live Dikhega</option><option value="false">OFF - Draft me</option></select>
<button onclick="add()" style="width:100%;margin-top:10px">+ Add Task - Bina Code Ke - Live 1 Sec me</button>
</div>
<button onclick="location.href='/'">Go to User App</button>
<div id="list"></div>
<script>
async function load(){let r=await fetch('/api/tasks/all');let d=await r.json();document.getElementById('list').innerHTML=d.length==0?'<p>No Task - Pehla bana</p>':d.map(x=>\`<div class=card><img src="\${x.poster}"><div style="flex:1"><b>\${x.title}</b> (\${x.on?'LIVE':'DRAFT'})<br><small>\${x.desc.slice(0,60)}</small><br><small>Ad:\${x.ads} Coin:\${x.coins} Type:\${x.type}</small></div><button onclick="del('\${x.id}')">Delete</button></div>\`).join('')}
async function add(){let b={poster:poster.value||'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',logo:logo.value||'https://i.pravatar.cc/100',title:title.value,desc:desc.value,video:video.value,btnName:btnName.value,link:link.value,ads:parseInt(ads.value),coins:parseInt(coins.value),type:type.value,anim:anim.value,on:on.value=='true'};if(!b.title)return alert('Title likh');let r=await fetch('/api/admin/add',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});if(r.ok){alert('Added - 1 sec me Live dikhega + Telegram Alert (Day 5 me jodenge)');load();}else alert('Error')}
async function del(id){if(!confirm('Delete?'))return;await fetch('/api/admin/del/'+id,{method:'DELETE'});load()}
load();
</script></body></html>`);});

app.get('/api/tasks/all',(req,res)=>res.json(tasks));
app.post('/api/admin/add',(req,res)=>{let t={id:Date.now().toString(),...req.body};tasks.unshift(t);res.json(t);});
app.delete('/api/admin/del/:id',(req,res)=>{tasks=tasks.filter(x=>x.id!=req.params.id);res.json({ok:true});});
app.listen(PORT,()=>console.log('ZONERUSH V2 FINAL LOCK LIVE'));
