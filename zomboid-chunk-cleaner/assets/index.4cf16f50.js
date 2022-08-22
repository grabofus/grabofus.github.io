import{c as q,r as x,j as w,T as W,a as o,C as Z,B as L,F as B,b as z,d as G,P as J,M as Q,e as V,f as T,R as ee,g as te}from"./vendor.6d3966d9.js";const oe=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&h(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}};oe();let $;async function ne(){$=await window.showDirectoryPicker();const m=[],c=new RegExp(/map_(\d+)_(\d+).bin/);for await(const i of $.keys()){const h=c.exec(i);if(h){const[n,s,r]=h;m.push({x:parseInt(s),y:parseInt(r)})}}return m}function se(m,c,i){const h=m.filter(s=>Y(s,c,i)).map(({x:s,y:r})=>`map_${s}_${r}.bin`),n=new Promise(async s=>{for(const r of h)console.log("Deleting ",r),await $.removeEntry(r);s("")});return[m.filter(s=>!Y(s,c,i)),n]}function Y(m,c,i){const[h,n]=c,s=h.x<=m.x&&m.x<=n.x&&h.y<=m.y&&m.y<=n.y;return!i&&s||i&&!s}const re=q({palette:{mode:"dark",background:{default:"#000"}}}),R=1,I=100,ae={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ie(){const[m,c]=x.exports.useState(!1),[i,h]=x.exports.useState(),[n,s]=x.exports.useState(!1),[r,O]=x.exports.useState([]),[E,j]=x.exports.useState(!0),[_,F]=x.exports.useState(!1),N=x.exports.useRef(null),P=x.exports.useRef(null),p=x.exports.useMemo(()=>{let e=0,t=0,a=2e4,d=2e4;for(const{x:u,y:f}of r)e=Math.max(u,e),t=Math.max(f,t),a=Math.min(u,a),d=Math.min(f,d);e+=I,t+=I,a-=I,d-=I;const M=[];for(let u=Math.floor(d/100);u<=Math.floor(t/100);u++)for(let f=Math.floor(a/100);f<=Math.floor(e/100);f++)M.push(`${f}_${u}`);return{maxX:e,maxY:t,minX:a,minY:d,tiles:M}},[r]);x.exports.useEffect(()=>{const e=N.current,t=P.current;if(!e||!t)return;const a=e.getContext("2d");if(!a)return;const{maxX:d,maxY:M,minX:u,minY:f}=p,S=Math.max(1,(d-u)*R),C=Math.max(1,(M-f)*R);t.width=e.width=S,t.height=e.height=C,a.fillStyle="hsla(0, 0%, 10%, 0)",a.fillRect(0,0,S,C);for(const k of r){const D=i&&Y(k,i,n);a.fillStyle=D?"hsla(0, 100%, 76%, 70%)":"hsla(41, 49%, 76%, 70%)",a.fillRect((k.x-u)*R,(k.y-f)*R,1*R,1*R)}},[r,p,i,n]),x.exports.useEffect(()=>{const e=P.current;if(!e)return;const t=e.getContext("2d");if(!t)return;let a={x:0,y:0},d,M;const{minX:u,minY:f}=p,S=l=>{const y=e.getBoundingClientRect(),b=l.clientX-Math.floor(y.left),g=l.clientY-Math.floor(y.top),v=0<=b&&b<y.width&&0<=g&&g<y.height;return{x:b+u,y:g+f,isOverCanvas:v}},C=()=>{const l=a.x,y=a.y;if(t.clearRect(0,0,e.width,e.height),d){const g=d.x,v=d.y;t.fillStyle="#f664",M?(t.fillRect(0,0,e.width,e.height),t.clearRect(g-u,v-f,l-g,y-v)):t.fillRect(g-u,v-f,l-g,y-v),t.strokeStyle="#f66c",t.strokeRect(g-u,v-f,l-g,y-v)}t.fillStyle="rgba(0,0,0,0.3)";const{width:b}=t.measureText(`X: ${l} Y: ${y}`);t.fillRect(0,0,b+12,18),t.fillStyle="white",t.fillText(`X: ${l} Y: ${y}`,4,12)},k=l=>{a=S(l),C()},D=l=>{!S(l).isOverCanvas||(l.preventDefault(),d=S(l),M=l.ctrlKey,h(void 0),s(M),C())},A=l=>{if(l.preventDefault(),!d)return;const y=a.x,b=a.y,g=d.x,v=d.y,K={x:Math.min(y,g),y:Math.min(b,v)},U={x:Math.max(y,g),y:Math.max(b,v)};d=void 0,C(),h([K,U])};return document.body.addEventListener("mousemove",k),document.body.addEventListener("mousedown",D),document.body.addEventListener("mouseup",A),C(),()=>{document.body.removeEventListener("mousemove",k),document.body.removeEventListener("mousedown",D),document.body.removeEventListener("mouseup",A)}},[p]);const X=x.exports.useMemo(()=>i?r.filter(e=>Y(e,i,n)).length:0,[r,i,n]),H=Math.floor((p.maxX-p.minX)/100)+1;return w(W,{theme:re,children:[o(Z,{}),w("div",{style:{display:"grid",gap:16},children:[w("div",{style:{display:"flex",gap:16,width:800},children:[o(L,{variant:"contained",onClick:()=>{ne().then(e=>{O(e)})},children:"Load map data"}),w(L,{color:"error",variant:"contained",disabled:X===0,onClick:()=>c(!0),children:["Delete ",X," chunks"]}),o("div",{className:"spacer"}),o(B,{control:o(z,{checked:E,onChange:(e,t)=>j(t)}),label:"Overlay Knox Country"}),o(B,{control:o(z,{checked:_,onChange:(e,t)=>F(t)}),label:"Show info"})]}),o(G,{in:_,children:w("ul",{children:[w("li",{children:["Load your save folder, usually: ",o("code",{children:"C:\\Users\\YourName\\Zomboid\\Saves\\Survivor\\21-01-2022_12-36-36"})]}),o("li",{children:"Drag with the mouse to create a selection"}),w("li",{children:["Hold ",o("code",{children:"Ctrl"})," before selecting a region to invert it"]})]})})]}),o("div",{children:w(J,{style:{padding:"1rem",display:r.length>0?"grid":"none",contain:"paint"},children:[E&&o("div",{style:{width:p.maxX-p.minX,height:p.maxY-p.minY,overflow:"hidden",gridArea:"1 / 1",backgroundColor:"rgba(0,0,0,0.2)"},children:o("div",{style:{marginLeft:-(p.minX%100),marginTop:-(p.minY%100),display:"grid",gridTemplateColumns:`repeat(${H}, 100px)`,zIndex:0},children:p.tiles.map(e=>o("img",{className:"tile",src:`./assets/map_${e}.png`,onLoad:t=>{t.currentTarget.classList.add("loaded")}},e))})}),o("canvas",{ref:N,style:{zIndex:1,gridArea:"1 / 1",backgroundColor:E?void 0:"hsla(41, 30%, 61%, 1)"}}),o("canvas",{ref:P,style:{zIndex:2,gridArea:"1 / 1"}})]})}),o("div",{className:"spacer"}),o("div",{className:"coffee",children:o(L,{style:{backgroundColor:"transparent",padding:0,borderRadius:8},href:"https://www.buymeacoffee.com/grabofus",children:o("img",{alt:"Buy me a coffee",width:"200",src:"./assets/coffee.png"})})}),o(Q,{open:m,onClose:()=>c(!1),onMouseDownCapture:e=>{e.nativeEvent.stopImmediatePropagation(),e.nativeEvent.stopPropagation()},onMouseUpCapture:e=>{e.nativeEvent.stopImmediatePropagation(),e.nativeEvent.stopPropagation()},children:w(V,{sx:ae,children:[o(T,{variant:"h6",component:"h2",children:"Delete?"}),w(T,{sx:{mt:2},children:["Are you sure you would like to delete ",X," chunk",X>1?"s":"","?"]}),o(T,{sx:{mt:2},children:"This action is not reversible! Make sure you back up your save folder before proceeding!"}),o(L,{color:"error",variant:"contained",sx:{mt:2},onClick:()=>{if(!i){c(!1),console.error("");return}const[e,t]=se(r,i,n);t.then(a=>{a?console.error("Something went wrong! "+a):O(e)}),c(!1)},children:"Delete forever!"}),o(L,{style:{marginLeft:16},sx:{mt:2},onClick:()=>{c(!1)},children:"Cancel"})]})})]})}ee.render(o(te.StrictMode,{children:o(ie,{})}),document.getElementById("root"));
