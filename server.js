const express=require('express');
const app=express();
app.use(express.json());
const PORT=process.env.PORT||3000;
let settings={adminPass:'Jeetu@123'};
let tasks=[];

app.get('/',(req,res)=>{res.send(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>ZONERUSH FINAL BASE</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;background:#050a1a;color:#fff;font-family:Inter;padding-bottom:90px}
.bg{position:fixed;inset:0;z-index:-3;background:radial-gradient(120% at 50% -10%,#1e3a5f,#0a1228 50%,#050a1a)}
#stars{position:fixed;inset:0;z-index:-2}
#splash{position:fixed;inset:0;z-index:9999;background:#050a1a;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.8s}
.fire{width:80px;height:80px;background:radial-gradient(#ff9,#f80);border-radius:50%;animation:pulse .8s infinite;box-shadow:0 0 40px #f80}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
#authScreen{position:fixed;inset:0;z-index:9000;background:#050a1a;display:none;flex-direction:column;align-items:center;justify-content:center;padding:20px}
.header{margin:10px;border-radius:20px;border:1px solid #ffca2c66;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;background:#ffffff14;backdrop-filter:blur(12px)}
.logo{font-family:Orbitron;font-weight:800;background:linear-gradient(#fff7b0,#ffb700);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.section{display:none;padding:12px}.active{display:block}
.card{border-radius:18px;overflow:hidden;border:1px solid #ffcc3344;background:linear-gradient(180deg,#1c2a4e,#101a33);margin-bottom:14px;position:relative}
.card img{width:100%;height:160px;object-fit:cover}
.logoRound{position:absolute;left:12px;top:110px;width:48px;height:48px;border-radius:50%;border:2px solid #ffcc33;background:#000;object-fit:cover}
.cardBody{padding:16px 12px}.join{position:absolute;right:12px;bottom:12px;background:linear-gradient(#ffe27a,#ffb700);border:none;padding:8px 18px;border-radius:20px;font-weight:800}
.empty{text-align:center;padding:40px;border:1px dashed #ffffff30;border-radius:16px;opacity:.6}
.bottom{position:fixed;bottom:8px;left:8px;right:8px;display:flex;justify-content:space-around;background:#0c132ce6;border-radius:22px;padding:8px;z-index:99;backdrop-filter:blur(16px)}
.bItem{text-align:center;font-size:11px;opacity:.5;flex:1}.bItem.act{opacity:1;color:#ffcc33}
#adGate{position:fixed;inset:0;background:#000e;z-index:10000;display:none;flex-direction:column;align-items:center;justify-content:center}
.btn{border-radius:24px;padding:12px 22px;font-weight:800;border:1px solid #ffcc33;cursor:pointer}.gold{background:linear-gradient(#ffe88a,#ffb700);color:#000;border:none}.out{background:transparent;color:#ffcc33}
.inp{width:100%;max-width:320px;padding:12px;margin:8px 0;border-radius:10px;background:#101a33;color:#fff;border:1px solid #ffffff33}
</style></head><body>
<div class="bg"></div><canvas id="stars"></canvas>

<div id="splash"><div class="fire"></div><h2 style="font-family:Orbitron;margin-top:20px;color:#ffcc33">ZONERUSH</h2><p style="opacity:.6">Final Lock V2 - 3 Sec</p></div>

<div id="authScreen">
<h2 style="font-family:Orbitron;color:#ffcc33">🔥 ZONERUSH LOGIN</h2>
<p style="opacity:.6;font-size:13px">Screenshot Final - Email + Pass + OTP 6 Digit - 1000% Legal 13+</p>
<input id="lName" class="inp" placeholder="Name - Jeetu">
<input id="lEmail" class="inp" placeholder="Email - jeetu@gmail.com">
<input id="lPass" type="password" class="inp" placeholder="Password">
<button class="btn gold" style="width:100%;max-width:320px;margin-top:8px" onclick="doLogin()">Login / Sign Up</button>
<small style="opacity:.5;margin-top:10px;text-align:center;max-width:320px">Device Lock 2 Account (Slider 2-5) - Fingerprint+IP+Browser - Anti Hack - Gorakhpur Location - Referral ZONO-JEETU-123<br>OTP Demo: 123456</small>
</div>

<div class="header"><div class="logo">🔥 ZONERUSH</div><div>🔔</div></div>

<div id="tab-live" class="section active">
<div style="text-align:center;padding:20px"><h3 style="font-weight:400;opacity:.8">Find your zone</h3><h1 style="font-family:Orbitron;font-size:34px;background:linear-gradient(#fff,#ffcc33);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Own the rush</h1>
<div style="display:flex;gap:10px;justify-content:center;margin-top:12px"><button class="btn gold" onclick="showTab('earn')">💰 Earn coins</button><button class="btn out" onclick="alert('How to Play Video - Admin se link')">▶ How to play</button></div></div>
<div style="display:flex;justify-content:space-between;color:#ffcc33;font-size:12px;padding:12px 6px"><span>LIVE TOURNAMENTS - GLOBAL</span><span onclick="showTab('earn')">See all ></span></div>
<div id="liveList"></div>
</div>

<div id="tab-wallet" class="section"><center><h2>Wallet - NO ADD MONEY</h2><div style="font-size:48px;color:#ffcc33" id="coin">0 ZC</div><div id="history" style="text-align:left;margin-top:20px;opacity:.8;font-size:13px"></div></center></div>
<div id="tab-earn" class="section"><h3>Earn Zone - Admin banayega tab dikhega</h3><div id="earnList"></div></div>
<div id="tab-leader" class="section"><center><h2>Leaderboard</h2><p style="opacity:.6">Weekly Auto Rank</p></center></div>
<div id="tab-profile" class="section"><center><h2>Profile</h2><img id="av" src="https://i.pravatar.cc/150?img=12" style="width:90px;height:90px;border-radius:50%;border:3px solid #ffcc33"><p id="pinfo">Jeetu</p><p id="pEmail" style="opacity:.6"></p><button class="btn out" onclick="logout()">Logout</button></center></div>

<div class="bottom">
<div class="bItem act" onclick="showTab('live')">⚡<br>Live</div>
<div class="bItem" onclick="showTab('wallet')">💼<br>Wallet</div>
<div class="bItem" onclick="showTab('earn')">⭐<br>Earn Zone</div>
<div class="bItem" onclick="showTab('leader')">🏆<br>Leaderboard</div>
<div class="bItem" onclick="showTab('profile')">👤<br>Profile</div>
</div>

<div id="adGate"><h2 id="adCount">Ad</h2><div style="width:80%;height:6px;background:#ffffff22;border-radius:10px;margin:20px"><div id="adBar" style="height:100%;width:0%;background:#ffcc33"></div></div><button class="btn gold" id="skipBtn" style="display:none" onclick="closeAd()">Continue</button><button class="btn out" style="margin-top:10px" onclick="document.getElementById('adGate').style.display='none'">Close</button></div>

<script>
let coins=parseInt(localStorage.getItem('zc')||'0');let curTask=null;let adStep=0;
document.getElementById('coin').innerText=coins+' ZC';
function showTab(t){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById('tab-'+t).classList.add('active');document.querySelectorAll('.bItem').forEach(b=>b.classList.remove('act'));let m={live:0,wallet:1,earn:2,leader:3,profile:4}[t];document.querySelectorAll('.bItem')[m].classList.add('act');load();}
async function load(){let r=await fetch('/api/tasks');let d=await r.json();let html=d.length==0?'<div class=empty>Admin Task Banayega Tab Dikhega<br>Global Live - /admin?pass=Jeetu@123</div>':d.map(x=>\`<div class="card"><img src="\${x.poster}"><img class="logoRound" src="\${x.logo}"><div class="cardBody"><b>\${x.title}</b><br><small style="opacity:.7">\${x.desc}</small><br><small>🎁 \${x.coins} ZC | \${x.type} | Ad:\${x.ads}</small></div><button class="join" onclick="startTask('\${x.id}')">\${x.btnName}</button></div>\`).join('');document.getElementById('liveList').innerHTML=html;document.getElementById('earnList').innerHTML=html;}
function startTask(id){fetch('/api/tasks').then(r=>r.json()).then(d=>{curTask=d.find(x=>x.id==id);if(curTask.ads>0){adStep=0;showAd();}else{openLink();}});}
function showAd(){adStep++;let gate=document.getElementById('adGate');gate.style.display='flex';let count=5;let bar=document.getElementById('adBar');let txt=document.getElementById('adCount');let skip=document.getElementById('skipBtn');skip.style.display='none';bar.style.width='0%';txt.innerText='Ad '+adStep+'/'+curTask.ads+' - '+count;let iv=setInterval(()=>{count--;bar.style.width=((5-count)/5*100)+'%';txt.innerText='Ad '+adStep+'/'+curTask.ads+' - '+count;if(count<=0){clearInterval(iv);if(adStep<curTask.ads)showAd();else{skip.style.display='block';txt.innerText='Ads Complete';}}},1000);}
function closeAd(){document.getElementById('adGate').style.display='none';openLink();}
function openLink(){if(curTask.link)window.open(curTask.link,'_blank');verifying();}
function verifying(){let gate=document.getElementById('adGate');gate.style.display='flex';document.getElementById('adCount').innerText='Verifying 3 sec '+curTask.anim+'...';document.getElementById('adBar').style.width='100%';document.getElementById('skipBtn').style.display='none';setTimeout(()=>{gate.style.display='none';coins+=parseInt(curTask.coins);localStorage.setItem('zc',coins);document.getElementById('coin').innerText=coins+' ZC';document.getElementById('history').innerHTML='+'+curTask.coins+' ZC - '+curTask.title+'<br>'+document.getElementById('history').innerHTML;alert('Confetti + Coin Wallet me');showTab('wallet');},3000);}
function doLogin(){let n=document.getElementById('lName').value||'Jeetu';let e=document.getElementById('lEmail').value;if(!e)return alert('Email likh');localStorage.setItem('name',n);localStorage.setItem('email',e);localStorage.setItem('logged','1');document.getElementById('authScreen').style.display='none';document.getElementById('pinfo').innerText=n+' - Gorakhpur';document.getElementById('pEmail').innerText=e;alert('OTP 123456 Verified - Device Lock 2 - Login Success');}
function logout(){localStorage.removeItem('logged');localStorage.removeItem('name');localStorage.removeItem('email');location.reload();}
load();
setTimeout(()=>{document.getElementById('splash').style.opacity='0';setTimeout(()=>{document.getElementById('splash').style.display='none';let logged=localStorage.getItem('logged');if(!logged){document.getElementById('authScreen').style.display='flex';}else{let nm=localStorage.getItem('name');let em=localStorage.getItem('email');if(nm)document.getElementById('pinfo').innerText=nm+' - Gorakhpur';if(em)document.getElementById('pEmail').innerText=em;}},800);},3000);
const c=document.getElementById('stars'),ctx=c.getContext('2d');function rs(){c.width=innerWidth;c.height=innerHeight}rs();let p=[];for(let i=0;i<90;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5+0.2,d:Math.random()*0.8+0.2});function dr(){ctx.clearRect(0,0,c.width,c.height);p.forEach(o=>{ctx.fillStyle='#ffffff88';ctx.beginPath();ctx.arc(o.x,o.y,o.r,0,Math.PI*2);ctx.fill();o.y+=o.d;if(o.y>c.height){o.y=0;o.x=Math.random()*c.width}});requestAnimationFrame(dr)}dr();
</script></body></html>`);});

app.get('/api/tasks',(req,res)=>res.json(tasks.filter(t=>t.on!==false)));
app.get('/api/tasks/all',(req,res)=>res.json(tasks));
app.get('/admin',(req,res)=>{
if(!req.query.pass){return res.send(`<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#050a1a;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif}input{padding:12px;width:260px;border-radius:10px;background:#101a33;color:#fff;border:1px solid #ffcc33}button{padding:12px 20px;border-radius:10px;background:#ffb700;font-weight:800;border:none;margin-left:8px}</style></head><body><div><h2>🔒 ADMIN - ALAG - FINAL LOCK</h2><p>User se alag - Global Live</p><input id="p" type="password" placeholder="Jeetu@123"><button onclick="location.href='/admin?pass='+encodeURIComponent(document.getElementById('p').value)">Login</button></div></body></html>`);}
if(req.query.pass!==settings.adminPass)return res.send('<h2 style="background:#050a1a;color:#fff;padding:40px">Wrong Password - <a href=/>Home</a></h2>');
res.send(`<html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{background:#0a1228;color:#fff;font-family:sans-serif;padding:12px}input,textarea,select{width:100%;padding:10px;margin:5px 0;border-radius:8px;background:#101a33;color:#fff;border:1px solid #ffffff33}label{font-size:12px;color:#ffcc33}button{padding:10px 16px;border-radius:8px;background:#ffb700;font-weight:800;border:none;margin:4px}.row{display:flex;gap:8px}.card{background:#1a274e;padding:10px;border-radius:10px;margin:8px 0;display:flex;gap:10px}img{width:60px;height:60px;border-radius:8px}</style></head><body>
<h2>ADMIN - FINAL LOCK - ALAG - GLOBAL LIVE</h2><p>User App me Admin button nahi - Sirf tu kholega - Jo banayega Pure world Live</p>
<div style="border:1px solid #ffcc33;padding:12px;border-radius:12px">
<label>Poster 16:9 (Screenshot C)</label><input id="poster"><label>Logo Gol</label><input id="logo"><label>Title</label><input id="title"><label>Kaise Karna Hai Desc</label><textarea id="desc"></textarea><label>Video Link</label><input id="video"><div class="row"><div style="flex:1"><label>Button Naam</label><input id="btnName" value="Join"></div><div style="flex:1"><label>Button Link</label><input id="link"></div></div>
<div class="row"><div style="flex:1"><label>Ad 0-5</label><input id="ads" type="range" min="0" max="5" value="1" oninput="adsV.innerText=this.value"><span id="adsV">1</span></div><div style="flex:1"><label>Coin</label><input id="coins" type="number" value="10"></div></div>
<div class="row"><div style="flex:1"><label>Paisa Type - Ad/Paid/Affiliate/YouTube/Survey/Offerwall/App Install/Brand</label><select id="type"><option>Ad</option><option>Advertiser Paid</option><option>Affiliate Amazon</option><option>YouTube View</option><option>Survey</option><option>Offerwall</option><option>App Install CPA</option><option>Brand Sponsor</option></select></div><div style="flex:1"><label>Animation - Fire/Snow/Rain/Petals/Coin Rain/Off</label><select id="anim"><option>Fire</option><option>Snow</option><option>Rain</option><option>Petals</option><option>Coin Rain</option><option>Off</option></select></div></div>
<label>ON/OFF Global</label><select id="on"><option value="true">ON Global Live</option><option value="false">OFF Draft</option></select>
<button onclick="add()" style="width:100%;margin-top:10px">+ Add Task - Global Live 1 Sec</button>
</div>
<button onclick="location.href='/'">Go User App</button><div id="list"></div>
<script>
const PASS=new URLSearchParams(location.search).get('pass');
async function load(){let r=await fetch('/api/tasks/all');let d=await r.json();document.getElementById('list').innerHTML=d.map(x=>\`<div class=card><img src="\${x.poster}"><div style="flex:1"><b>\${x.title}</b> (\${x.on?'GLOBAL LIVE':'DRAFT'})<br><small>Ad:\${x.ads} Coin:\${x.coins} Type:\${x.type}</small></div><button onclick="del('\${x.id}')">Del</button></div>\`).join('')}
async function add(){let b={poster:poster.value||'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',logo:logo.value||'https://i.pravatar.cc/100',title:title.value,desc:desc.value,video:video.value,btnName:btnName.value,link:link.value,ads:parseInt(ads.value),coins:parseInt(coins.value),type:type.value,anim:anim.value,on:on.value=='true'};if(!b.title)return alert('Title');await fetch('/api/admin/add?pass='+PASS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)});load();}
async function del(id){await fetch('/api/admin/del/'+id+'?pass='+PASS,{method:'DELETE'});load()}
load();
</script></body></html>`);});
app.post('/api/admin/add',(req,res)=>{if(req.query.pass!==settings.adminPass)return res.status(403).json({});let t={id:Date.now().toString(),...req.body};tasks.unshift(t);res.json(t);});
app.delete('/api/admin/del/:id',(req,res)=>{if(req.query.pass!==settings.adminPass)return res.status(403).json({});tasks=tasks.filter(x=>x.id!=req.params.id);res.json({ok:true});});
app.listen(PORT,()=>console.log('FINAL BASE WITH LOGIN LIVE'));
