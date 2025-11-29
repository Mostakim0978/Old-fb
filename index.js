// ===============================
//  Mostakim CookState Tool
//  Premium Neon Glass Edition
// ===============================

const express = require("express");
const app = express();

// ---------- HTML BEGIN ----------
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Mostakim — CookState Tool</title>

<style>
body{
  margin:0;
  padding:0;
  background:#050505 url('https://i.ibb.co/0cHLSZ8/neon-bg.gif') center/cover no-repeat fixed;
  font-family:Poppins, sans-serif;
  color:#fff;
}

.header{
  text-align:center;
  padding:40px 20px;
  font-size:32px;
  font-weight:600;
  text-shadow:0 0 20px #00eaff;
}

.container{
  width:90%;
  max-width:500px;
  margin:0 auto;
}

.card{
  background:rgba(255,255,255,0.04);
  border:1px solid rgba(255,255,255,0.2);
  backdrop-filter:blur(15px);
  border-radius:20px;
  padding:25px;
  margin:20px 0;
  box-shadow:0 0 30px #00c8ff55;
}

button{
  width:100%;
  padding:14px;
  margin-top:10px;
  background:#00d0ff;
  border:none;
  border-radius:10px;
  color:#000;
  font-size:17px;
  font-weight:600;
  cursor:pointer;
  transition:0.25s;
  box-shadow:0 0 15px #00eaff;
}
button:hover{
  background:#00a2d4;
  box-shadow:0 0 15px #0088ff;
}

textarea{
  width:100%;
  height:140px;
  background:#000000aa;
  color:#00ff99;
  border:1px solid #00eaff55;
  padding:12px;
  margin-top:10px;
  border-radius:12px;
  font-size:14px;
  outline:none;
  box-shadow:0 0 15px #00d0ff33 inset;
}

.footer{
  text-align:center;
  padding:20px;
  opacity:0.8;
  font-size:14px;
}
</style>

<script>
// ---------- COOKIE ----------
function getCookie(){
  document.getElementById("output").value = document.cookie;
}

// ---------- FBSTATE ----------
function fbState(){
  let cookies = document.cookie.split("; ");
  let obj = {};
  cookies.forEach(c=>{
    let p = c.split("=");
    obj[p[0]] = p[1];
  });
  document.getElementById("output").value = JSON.stringify(obj, null, 2);
}

// ---------- FBSTATE V2 ----------
function fbState2(){
  let out="";
  document.cookie.split("; ").forEach(c=>{
    let p=c.split("=");
    out += p[0]+"="+p[1]+";";
  });
  document.getElementById("output").value = out;
}

// ---------- EAAGNO ----------
function eaagno(){
  document.getElementById("output").value =
    "EAAGNO-XXXX-PREMIUM-DEMO\n(Add private token API)";
}

// ---------- PROFILE GUARD ----------
function profileGuard(){
  alert("Profile Guard only works with private API.\nAdd later.");
}
</script>

</head>
<body>

<div class="header">🍪 Mostakim — CookState Premium</div>

<div class="container">

  <div class="card">
    <button onclick="getCookie()">Extract Cookie</button>
    <button onclick="fbState()">Generate Fbstate (JSON)</button>
    <button onclick="fbState2()">Generate Fbstate v2</button>
    <button onclick="eaagno()">Get EAAGNO Token</button>
    <button onclick="profileGuard()">Enable Profile Guard</button>
    <textarea id="output" placeholder="Result will appear here..."></textarea>
  </div>

</div>

<div class="footer">Made for Mostakim — Private Neon Edition</div>

</body>
</html>
`;

// ---------- ROUTE ----------
app.get("/", (req,res)=> res.send(html));

// ---------- SERVER ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log("Mostakim CookState Running on " + PORT));
