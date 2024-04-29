import"./modulepreload-polyfill-B5Qt9EMX.js";const b=()=>document.createElement("p"),x=()=>document.createElement("button"),p=document.querySelector(".windowView"),S=document.querySelector("#ptype"),$=document.querySelector("#skills"),T=document.querySelector("#pyear");function k(i,t,e,s,r,a,n,o){console.log(o);const l=i,d=l.cloneNode(!1);var{top:c,left:h,width:y,height:v}=l.getBoundingClientRect();d.className="cardClone",d.style.position="fixed",d.style.top=c+"px",d.style.left=h+"px",d.style.width=y+"px",d.style.height=v+"px",l.style.opacity="0",l.parentNode.appendChild(d);let m=N(d,l,c,h,y,v);var{top:c,left:h,width:y,height:v}=l.parentNode.getBoundingClientRect();C(d,{top:`${c}px`,left:`${h}px`,width:`${y}px`,height:`${v}px`});const E=L(t,e,s,r,a,n,o);d.style.display="block",d.style.padding="0",d.appendChild(m),d.insertAdjacentHTML("afterbegin",E)}function N(i,t,e,s,r,a){let n=x();return n.innerText="x",n.setAttribute("class","closebtn"),i.appendChild(n),n.addEventListener("click",o=>setTimeout(D(o.target,i,t,e,s,r,a),500)),n}function D(i,t,e,s,r,a,n){i.remove(),t.style.removeProperty("display"),t.style.removeProperty("padding"),[...t.children].forEach(o=>o.style.removeProperty("display")),w(t,"0"),C(t,{top:`${s}px`,left:`${r}px`,width:`${a}px`,height:`${n}px`},300),e.style.removeProperty("opacity"),t.remove(),w(t,"0").then(()=>{[...t.children].forEach(o=>o.style.display="none")})}const C=(i,t,e=350)=>new Promise(s=>{i.animate([{top:t.top,left:t.left,width:t.width,height:t.height}],{duration:e,fill:"forwards",ease:"ease-in"}),setTimeout(s,e)}),w=(i,t,e=300)=>new Promise(s=>{[...i.children].forEach(r=>{requestAnimationFrame(()=>{r.style.transition=`opacity ${e}ms linear`,r.style.opacity=t})}),setTimeout(s,e)}),L=(i,t,e,s,r,a,n)=>`
    <div class="card-content">
      <div class="header">
        <h1>${i}</h1>
        <h2>${a}</h2>
      </div>
      <video autoplay muted controls> 
        <source src= ${t} type="video/mp4">
      </video>
     <div class= "wrapper"> 
        <div class="info ">
          <h3> Keywords </h3>
          <p> ${r} </p>
          <h3> Year </h3>
          <p> ${n} </p>
        </div>
        <div class="info dec">
          <h3> Short Description </h3>
          <p> ${s}</p>
        </div>
      </div>
   
    </div>
  `;class O{constructor(t,e,s,r,a,n,o,l,d,m,c,h){this.id=t,this.title=s,this.titleclass=r,this.classname=e,this.imgUrl=`${a}`,this.tags=n,this.types=o,this.year=l,this.subtitle=d,this.paragraph=m,this.videoUrl=`${c}`,this.bwUrl=`${h}`,this.div=document.createElement("div"),this.div.id=t,this.div.className=e,this.div.dataset.fr=n.join(", "),this.div.dataset.pt=o.join(", "),this.div.dataset.year=l,this.setupCard()}setupCard(){this.createBackground(),this.createTitle(),this.createSubtitle(),this.createKeywords(),this.setupInteractions()}createBackground(){this.div.style.backgroundImage=`url("${this.bwUrl}")`,this.div.style.backgroundSize="cover",this.div.style.backgroundPosition="center"}createTitle(){let t=b();t.textContent=this.title,t.className=`cardText ${this.titleclass}`,t.style.opacity="0",t.style.transition="opacity 0.5s ease",this.div.appendChild(t)}createSubtitle(){let t=b();t.textContent=this.subtitle,t.className="cardText cardSubtitle",t.style.opacity="0",t.style.transition="opacity 0.5s ease",this.div.appendChild(t)}createKeywords(){let t=document.createElement("div");t.className="cardText cardKeywords",t.style.opacity="0",t.style.transition="opacity 0.5s ease",this.tags.forEach(e=>{let s=document.createElement("span");s.textContent=e,s.className="keywordTag",t.appendChild(s)}),this.div.appendChild(t)}setupInteractions(){this.div.addEventListener("mouseenter",this.mouseOver.bind(this)),this.div.addEventListener("mouseleave",this.mouseOut.bind(this)),this.div.addEventListener("click",this.onClick.bind(this))}mouseOver(t){this.div.style.backgroundImage=`url("${this.imgUrl}")`,this.div.style.backgroundColor="rgba(0, 0, 0, 0.85)",this.div.style.backgroundBlendMode="multiply",this.div.querySelectorAll(".cardText").forEach(e=>e.style.opacity="1")}mouseOut(t){this.div.style.backgroundImage=`url("${this.bwUrl}")`,this.div.style.backgroundColor="transparent",this.div.querySelectorAll(".cardText").forEach(e=>e.style.opacity="0")}onClick(t){setTimeout(()=>k(this.div,this.title,this.videoUrl,this.imgUrl,this.paragraph,this.tags.concat(this.types).join(", "),this.subtitle,this.year),500)}}const M=new Set,u=new Set,f=[];async function U(){const t=await(await fetch("../data.json")).json();console.log(t);const[e,s,r,a]=B(t.projects);P(e),console.log(e),q(s,r,a,$,S,T)}function B(i){const t=[],e=new Set,s=new Set,r=new Set;return i.forEach((a,n)=>{const o=new O(`card-${n}`,"card",a.name,"cardTitle",a.img,a.tags,a.type,a.year,a.subtitle,a.description,a.video,a.bwImg);t.push(o),M.add(o),a.tags.forEach(l=>e.add(l)),a.type.forEach(l=>s.add(l)),r.add(a.year)}),console.log(e,s,r),[t,e,s,r]}function P(i){console.log(p,i),p.innerHTML="",i.forEach(t=>{t.div.className="card visible",f.push({card:t,inDOM:!0,div:t.div}),p.appendChild(t.div)})}function q(i,t,e,s,r,a){i.forEach(n=>g(n,s)),t.forEach(n=>g(n,r)),e.forEach(n=>g(n,a))}function g(i,t){const e=document.createElement("button");e.innerText=i,e.className="filterbtn",t.appendChild(e),e.addEventListener("click",()=>{u.has(i)?(u.delete(i),e.classList.remove("active")):(u.add(i),e.classList.add("active")),A()})}function A(){if(u.size===0){f.forEach(i=>{i.inDOM||(p.appendChild(i.div),i.inDOM=!0),i.div.className="card visible"});return}f.forEach(i=>{const{card:t,div:e}=i,s=t.tags,r=t.types,a=t.year.toString();F(s,r,a)?(i.inDOM||(p.appendChild(e),i.inDOM=!0),e.className="card visible"):(e.className="card hidden",e.addEventListener("transitionend",function n(o){o.propertyName==="flex-grow"&&e.classList.contains("hidden")&&(e.removeEventListener("transitionend",n),p.removeChild(e),i.inDOM=!1)},{once:!0}))})}function F(i,t,e){return Array.from(u).every(s=>i.includes(s)||t.includes(s)||s===e)}U();
