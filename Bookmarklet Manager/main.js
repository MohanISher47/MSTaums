(function () {

console.log("%cMSTaums v3.1 loaded", "font-size:20px;font-weight:bold;color:#8a5cff");
console.log("%cby T.E.D.A", "font-size:15px;font-weight:bold;color:#44aaa4");

if (document.getElementById("mstaums-ui")) return;

const style = document.createElement("style");
style.textContent = `
:root{
  --ms-bg:#1e1e2e;
  --ms-bar:#181825;
  --ms-surface:#313244;
  --ms-hover:#45475a;
  --ms-text:#cdd6f4;
  --ms-accent:#b4befe;
}

#mstaums-ui{
  position:fixed;
  top:80px;
  left:120px;
  width:900px;
  height:520px;
  z-index:999999;
  background:var(--ms-bg);
  border-radius:18px;
  overflow:hidden;
  box-shadow:0 0 40px rgba(180,190,254,.35);
  font-family:"JetBrains Mono", monospace;
  display:flex;
  flex-direction:column;
}

.ms-titlebar{
  height:42px;
  background:var(--ms-bar);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 12px;
  cursor:move;
}

.ms-title{
  color:var(--ms-text);
  font-weight:600;
}

.ms-controls{
  display:flex;
  gap:8px;
}

.ms-btn{
  width:12px;
  height:12px;
  border-radius:50%;
  border:none;
  cursor:pointer;
}

.ms-min{ background:#f9e2af; }
.ms-close{ background:#f38ba8; }

.ms-main{
  flex:1;
  padding:20px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}

.ms-header{
  font-size:18px;
  color:var(--ms-text);
  margin-bottom:16px;
}

.ms-search{
  position:relative;
  margin-bottom:20px;
}

.ms-search input{
  width:100%;
  padding:10px 10px 10px 38px;
  border-radius:8px;
  border:none;
  background:var(--ms-surface);
  color:var(--ms-text);
  font-size:14px;
  outline:none;
}

.ms-search-icon{
  position:absolute;
  left:12px;
  top:50%;
  transform:translateY(-50%);
  width:16px;
  height:16px;
  opacity:.7;
}

#home{
  flex:1;
  display:flex;
  flex-direction:column;
}

.ms-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
  overflow-y:auto;
}

.ms-card{
  background:var(--ms-surface);
  border-radius:14px;
  height:170px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:26px;
  font-weight:700;
  color:var(--ms-text);
  cursor:pointer;
  transition:.2s;
  position:relative;
}

.ms-card:hover{
  transform:scale(1.05);
  box-shadow:0 10px 30px rgba(0,0,0,.6);
}

.ms-card-bar{
  position:absolute;
  bottom:0;
  width:100%;
  background:var(--ms-accent);
  color:var(--ms-bg);
  text-align:center;
  padding:6px;
  border-radius:0 0 14px 14px;
  font-size:14px;
}

.ms-page{
  display:none;
  flex-direction:column;
  gap:10px;
}

.ms-button{
  background:var(--ms-surface);
  border:none;
  color:var(--ms-text);
  padding:12px;
  border-radius:8px;
  cursor:pointer;
}

.ms-button:hover{
  background:var(--ms-hover);
}

.ms-theme-row{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-top:10px;
}

#theme-selector{
  background:var(--ms-surface);
  color:var(--ms-text);
  border:none;
  padding:10px;
  border-radius:8px;
  font-family:"JetBrains Mono", monospace;
  cursor:pointer;
}

.ms-footer{
  text-align:center;
  font-size:11px;
  opacity:.7;
  color:#a6adc8;
  margin-top:auto;
}

#mstaums-mini{
  position:fixed;
  bottom:20px;
  right:20px;
  background:var(--ms-accent);
  color:var(--ms-bg);
  padding:10px 16px;
  border-radius:10px;
  cursor:pointer;
  font-family:"JetBrains Mono", monospace;
  z-index:999999;
  display:none;
}
`;

document.head.appendChild(style);

const ui = document.createElement("div");
ui.id = "mstaums-ui";

ui.innerHTML = `
<link href="https://fonts.googleapis.com/css?family=JetBrains+Mono" rel="stylesheet">

<div class="ms-titlebar">
  <div class="ms-title">MSTaums v3.1</div>
  <div class="ms-controls">
    <button class="ms-btn ms-min"></button>
    <button class="ms-btn ms-close"></button>
  </div>
</div>

<div class="ms-main">

<div id="home">

<div class="ms-header">Modules</div>

<div class="ms-search">
  <img class="ms-search-icon" src="https://cdn-icons-png.flaticon.com/128/15077/15077223.png">
  <input id="ms-search" placeholder="Search modules...">
</div>

<div class="ms-grid">

<div class="ms-card" data-page="utilities">
Utilities
<div class="ms-card-bar">Does Fun Stuff to your Website</div>
</div>

<div class="ms-card" data-page="scripts">
Scripts
<div class="ms-card-bar">Stuff that does Stuff</div>
</div>

<div class="ms-card" data-page="cheats">
Cheats
<div class="ms-card-bar">Extra Features for Websites</div>
</div>

<div class="ms-card" data-page="tools">
Tools
<div class="ms-card-bar">Advanced Dev Stuff</div>
</div>

<div class="ms-card" data-page="settings">
Settings
<div class="ms-card-bar">Customize MSTaums v3.1</div>
</div>

</div>

</div>

<div class="ms-page" id="utilities">
<button class="ms-button ms-back">← Back</button>
<button class="ms-button" id="invert-page">Invert Page Colors</button>
<button class="ms-button" id="show-url">Show Page URL</button>
<button class="ms-button" id="alert-hello">Alert Hello</button>
<button class="ms-button" id="3d-page">3d Pageifer</button>
</div>

<div class="ms-page" id="scripts">
<button class="ms-button ms-back">← Back</button>
<button class="ms-button" id="load-script">IXlambda</button>
</div>

<div class="ms-page" id="cheats">
<button class="ms-button ms-back">← Back</button>
<button class="ms-button" id="exe">Executor</button>
<button class="ms-button" id="bh">Blooket Cheats</button>
<button class="ms-button" id="pc">Prodigy Cheats</button>
<button class="ms-button" id="aclick">Auto Clicker</button>
</div>

<div class="ms-page" id="tools">
<button class="ms-button ms-back">← Back</button>
<button class="ms-button" id="devc">Dev Console</button>
</div>

<div class="ms-page" id="settings">
<button class="ms-button ms-back">← Back</button>

<div class="ms-header">Themes</div>

<div class="ms-theme-row">
<select id="theme-selector">
<option value="mocha">Catppuccin Mocha</option>
<option value="dark">Dark</option>
<option value="light">Light</option>
<option value="hack">Hack</option>
</select>
</div>

</div>

<div class="ms-footer">MSTaums v3.1 by T.E.D.A</div>

</div>
`;

document.body.appendChild(ui);

const mini = document.createElement("div");
mini.id = "mstaums-mini";
mini.textContent = "Open MSTaums v3.1";
document.body.appendChild(mini);

document.querySelector(".ms-close").onclick = () => {
  ui.remove();
  mini.remove();
};

document.querySelector(".ms-min").onclick = () => {
  ui.style.display = "none";
  mini.style.display = "block";
};

mini.onclick = () => {
  ui.style.display = "flex";
  mini.style.display = "none";
};

const home = document.getElementById("home");

document.querySelectorAll(".ms-card").forEach(card => {
  card.onclick = () => {
    const page = card.dataset.page;

    home.style.display = "none";
    document.querySelectorAll(".ms-page").forEach(p => p.style.display = "none");

    document.getElementById(page).style.display = "flex";
  };
});

document.querySelectorAll(".ms-back").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".ms-page").forEach(p => p.style.display = "none");
    home.style.display = "flex";
  };
});

const search = document.getElementById("ms-search");

search.addEventListener("input", () => {

  const val = search.value.toLowerCase();

  document.querySelectorAll(".ms-card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(val) ? "flex" : "none";
  });

});

document.getElementById("alert-hello").onclick=()=>alert("Hello!");
document.getElementById("show-url").onclick=()=>alert(location.href);
document.getElementById("invert-page").onclick=()=>{
  document.body.style.filter = document.body.style.filter==="invert(1)" ? "" : "invert(1)";
};
document.getElementById("3d-page").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@main/3Dpage.js";
  document.head.appendChild(s);
};
document.getElementById("load-script").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://raw-githack-com.translate.goog/Augtive85YT/PhiPiBeta/main/IXLambda/main.js";
  document.head.appendChild(s);
};
document.getElementById("exe").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Menu@main/menu.js";
  document.head.appendChild(s);
};
document.getElementById("bh").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://gl-githack-com.translate.goog/CidCaribou/x-gui/-/raw/main/x-gui.js?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp";
  document.head.appendChild(s);
};
document.getElementById("pc").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://menu.pxi-fusion.com/pxi-2.0/main.js";
  document.head.appendChild(s);
};
document.getElementById("devc").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/gh/CidCaribou/Executor-Scripts@refs/heads/main/DevConsole.js";
  document.head.appendChild(s);
};
document.getElementById("aclick").onclick=()=>{
  const s=document.createElement("script");
  s.src="https://cdn.jsdelivr.net/gh/MohanIShim47/AutoClickerBookmarklet3@master/AutoClicker.js"
  document.head.appendChild(s);
};

function setTheme(theme) {

  const root = document.documentElement;

  if (theme === "mocha") {
    root.style.setProperty("--ms-bg","#1e1e2e");
    root.style.setProperty("--ms-bar","#181825");
    root.style.setProperty("--ms-surface","#313244");
    root.style.setProperty("--ms-hover","#45475a");
    root.style.setProperty("--ms-text","#cdd6f4");
    root.style.setProperty("--ms-accent","#b4befe");
  }

  if (theme === "dark") {
    root.style.setProperty("--ms-bg","#111");
    root.style.setProperty("--ms-bar","#1a1a1a");
    root.style.setProperty("--ms-surface","#2a2a2a");
    root.style.setProperty("--ms-hover","#3a3a3a");
    root.style.setProperty("--ms-text","#ffffff");
    root.style.setProperty("--ms-accent","#4dabf7");
  }

  if (theme === "light") {
    root.style.setProperty("--ms-bg","#f4f4f4");
    root.style.setProperty("--ms-bar","#e4e4e4");
    root.style.setProperty("--ms-surface","#ffffff");
    root.style.setProperty("--ms-hover","#dcdcdc");
    root.style.setProperty("--ms-text","#222");
    root.style.setProperty("--ms-accent","#5c7cfa");
  }

  if (theme === "hack") {
    root.style.setProperty("--ms-bg","#000");
    root.style.setProperty("--ms-bar","#000");
    root.style.setProperty("--ms-surface","#000");
    root.style.setProperty("--ms-hover","#ff0000");
    root.style.setProperty("--ms-text","#15ff00");
    root.style.setProperty("--ms-accent","#003300");
  }

}

const selector = document.getElementById("theme-selector");

selector.addEventListener("change", () => {

  const theme = selector.value;

  setTheme(theme);

  localStorage.setItem("mstaums-theme", theme);

});

const savedTheme = localStorage.getItem("mstaums-theme");

if (savedTheme) {

  setTheme(savedTheme);

  selector.value = savedTheme;

}

let dragging = false;
let offsetX;
let offsetY;

const titlebar = document.querySelector(".ms-titlebar");

titlebar.addEventListener("mousedown", e => {

  dragging = true;

  offsetX = e.clientX - ui.offsetLeft;
  offsetY = e.clientY - ui.offsetTop;

});

document.addEventListener("mousemove", e => {

  if (!dragging) return;

  ui.style.left = (e.clientX - offsetX) + "px";
  ui.style.top = (e.clientY - offsetY) + "px";

});

document.addEventListener("mouseup", () => {
  dragging = false;
});

})();