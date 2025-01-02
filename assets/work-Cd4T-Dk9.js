import"./modulepreload-polyfill-B5Qt9EMX.js";const Lt=()=>document.createElement("p"),Mt=()=>document.createElement("h4"),Te=document.querySelector(".windowView"),Ut=document.querySelector("#ptype");document.querySelector("#skills");const Ot=document.querySelector("#pyear");class _t{constructor(e,a,n,l,h,d,m,S,p,k,V,F,g,H){this.id=e,this.title=n,this.titleclass=l,this.classname=a,this.imgUrl=`${h}`,this.tags=d,this.types=m,this.year=S,this.subtitle=p,this.paragraph=k,this.videoUrl=`${V}`,this.bwUrl=`${F}`,this.blogItems=g,this.hasVideo=H,this.div=document.createElement("div"),this.div.id=e,this.div.className=a,this.div.dataset.fr=d.join(", "),this.div.dataset.pt=m.join(", "),this.div.dataset.year=S,this.setupCard()}setupCard(){this.createBackground(),this.createTitle(),this.createCardContent(),this.setupInteractions()}createBackground(){this.div.style.position="relative",this.div.style.background="rgba(255, 255, 255, 1)",this.div.style.transition="background-color 0.2s ease"}createTitle(){let e=Mt();e.textContent=this.title,this.div.appendChild(e)}createCardContent(){const e=Array.isArray(this.blogItems)&&this.blogItems.length>0?this.blogItems.map(l=>`
            <p>${l.text}</p>
            <img src="${l.imgUrl}" alt="Blog Image">
          `).join(""):"",a=this.hasVideo?`<video muted controls><source src="${this.videoUrl}" type="video/mp4"></video>`:`<img src="${this.imgUrl}" alt="Preview">`,n=document.createElement("div");n.className="card-content",n.innerHTML=`
      <div class="header">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
      </div>
      ${a}
      <div class="wrapper">
        <div class="info">
          <h3> Keywords </h3>
          <p>${this.tags.concat(this.types).join(", ")}</p>
          <h3> Year </h3>
          <p>${this.year}</p>
        </div>
        <div class="dec">
          <h3> Short Description </h3>
          <p>${this.paragraph}</p>
          ${e}
        </div>
      </div>
    `,this.div.appendChild(n)}createSubtitle(){let e=Lt();e.textContent=this.subtitle,this.div.appendChild(e)}createKeywords(){let e=document.createElement("div");e.className="cardText cardKeywords",e.style.opacity="0",e.style.transition="opacity 0.5s ease",this.tags.forEach(a=>{let n=document.createElement("span");n.textContent=a,n.className="keywordTag",e.appendChild(n)}),this.div.appendChild(e)}setupInteractions(){this.div.addEventListener("click",this.onClick.bind(this))}mouseOver(e){this.div.style.backgroundImage=`url("${this.imgUrl}")`,this.div.querySelector(".card").style.background="rgba(0, 0, 0, 0.85)",this.div.querySelectorAll(".cardText").forEach(a=>a.style.opacity="1")}mouseOut(e){this.div.style.backgroundImage=`url("${this.bwUrl}")`,this.div.querySelector(".card").style.background="rgba(0, 0, 0, 0)",this.div.querySelectorAll(".cardText").forEach(a=>a.style.opacity="0")}onClick(e){const a=document.querySelectorAll(".panel");this.div.classList.contains("hidden")||(a.forEach(n=>n.classList.remove("expanded")),this.div.classList.add("expanded"),se())}}var j;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})(j||(j={}));var O;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(O||(O={}));function Ht(t){return ie(t)&&typeof t.from=="function"}function ie(t){return typeof t=="object"&&typeof t.to=="function"}function je(t){t.parentElement.removeChild(t)}function we(t){return t!=null}function $e(t){t.preventDefault()}function zt(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Ft(t,e){return Math.round(t/e)*e}function Rt(t,e){var a=t.getBoundingClientRect(),n=t.ownerDocument,l=n.documentElement,h=We(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(h.x=0),e?a.top+h.y-l.clientTop:a.left+h.x-l.clientLeft}function z(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function qe(t,e,a){a>0&&(U(t,e),setTimeout(function(){re(t,e)},a))}function Ne(t){return Math.max(Math.min(t,100),0)}function ae(t){return Array.isArray(t)?t:[t]}function It(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function U(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function re(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Tt(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function We(t){var e=window.pageXOffset!==void 0,a=(t.compatMode||"")==="CSS1Compat",n=e?window.pageXOffset:a?t.documentElement.scrollLeft:t.body.scrollLeft,l=e?window.pageYOffset:a?t.documentElement.scrollTop:t.body.scrollTop;return{x:n,y:l}}function jt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function $t(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function qt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function ye(t,e){return 100/(e-t)}function Ce(t,e,a){return e*100/(t[a+1]-t[a])}function Nt(t,e){return Ce(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function Bt(t,e){return e*(t[1]-t[0])/100+t[0]}function G(t,e){for(var a=1;t>=e[a];)a+=1;return a}function Kt(t,e,a){if(a>=t.slice(-1)[0])return 100;var n=G(a,t),l=t[n-1],h=t[n],d=e[n-1],m=e[n];return d+Nt([l,h],a)/ye(d,m)}function Yt(t,e,a){if(a>=100)return t.slice(-1)[0];var n=G(a,e),l=t[n-1],h=t[n],d=e[n-1],m=e[n];return Bt([l,h],(a-d)*ye(d,m))}function Wt(t,e,a,n){if(n===100)return n;var l=G(n,t),h=t[l-1],d=t[l];return a?n-h>(d-h)/2?d:h:e[l-1]?t[l-1]+Ft(n-t[l-1],e[l-1]):n}var Xe=function(){function t(e,a,n){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=a;var l,h=[];for(Object.keys(e).forEach(function(d){h.push([ae(e[d]),d])}),h.sort(function(d,m){return d[0][0]-m[0][0]}),l=0;l<h.length;l++)this.handleEntryPoint(h[l][1],h[l][0]);for(this.xNumSteps=this.xSteps.slice(0),l=0;l<this.xNumSteps.length;l++)this.handleStepPoint(l,this.xNumSteps[l])}return t.prototype.getDistance=function(e){for(var a=[],n=0;n<this.xNumSteps.length-1;n++)a[n]=Ce(this.xVal,e,n);return a},t.prototype.getAbsoluteDistance=function(e,a,n){var l=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[l+1];)l++;else e===this.xPct[this.xPct.length-1]&&(l=this.xPct.length-2);!n&&e===this.xPct[l+1]&&l++,a===null&&(a=[]);var h,d=1,m=a[l],S=0,p=0,k=0,V=0;for(n?h=(e-this.xPct[l])/(this.xPct[l+1]-this.xPct[l]):h=(this.xPct[l+1]-e)/(this.xPct[l+1]-this.xPct[l]);m>0;)S=this.xPct[l+1+V]-this.xPct[l+V],a[l+V]*d+100-h*100>100?(p=S*h,d=(m-100*h)/a[l+V],h=1):(p=a[l+V]*S/100*d,d=0),n?(k=k-p,this.xPct.length+V>=1&&V--):(k=k+p,this.xPct.length-V>=1&&V++),m=a[l+V]*d;return e+k},t.prototype.toStepping=function(e){return e=Kt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return Yt(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Wt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,a,n){var l=G(e,this.xPct);return(e===100||a&&e===this.xPct[l-1])&&(l=Math.max(l-1,1)),(this.xVal[l]-this.xVal[l-1])/n},t.prototype.getNearbySteps=function(e){var a=G(e,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(It);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,a){var n;if(e==="min"?n=0:e==="max"?n=100:n=parseFloat(e),!z(n)||!z(a[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(a[0]);var l=Number(a[1]);n?this.xSteps.push(isNaN(l)?!1:l):isNaN(l)||(this.xSteps[0]=l),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,a){if(a){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Ce([this.xVal[e],this.xVal[e+1]],a,0)/ye(this.xPct[e],this.xPct[e+1]);var n=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],l=Math.ceil(Number(n.toFixed(3))-1),h=this.xVal[e]+this.xNumSteps[e]*l;this.xHighestCompleteStep[e]=h}},t}(),Be={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},Ge={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},T={tooltips:".__tooltips",aria:".__aria"};function Xt(t,e){if(!z(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function Gt(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function Jt(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Zt(t,e){if(!z(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Qt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Xe(e,t.snap||!1,t.singleStep)}function er(t,e){if(e=ae(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function tr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function rr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function ir(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function Je(t,e){var a=[!1],n;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(n=1;n<t.handles;n++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function sr(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ze(t,e){if(!z(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function ar(t,e){if(!z(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function nr(t,e){var a;if(!z(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||z(e[0])||z(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],a=0;a<t.spectrum.xNumSteps.length-1;a++)if(t.padding[0][a]<0||t.padding[1][a]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],l=t.spectrum.xVal[0],h=t.spectrum.xVal[t.spectrum.xVal.length-1];if(n/(h-l)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function or(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function lr(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var a=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,l=e.indexOf("fixed")>=0,h=e.indexOf("snap")>=0,d=e.indexOf("hover")>=0,m=e.indexOf("unconstrained")>=0,S=e.indexOf("invert-connects")>=0,p=e.indexOf("drag-all")>=0,k=e.indexOf("smooth-steps")>=0;if(l){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ze(t,t.start[1]-t.start[0])}if(S&&t.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(m&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:a||h,drag:n,dragAll:p,smoothSteps:k,fixed:l,snap:h,hover:d,unconstrained:m,invertConnects:S}}function cr(t,e){if(e!==!1)if(e===!0||ie(e)){t.tooltips=[];for(var a=0;a<t.handles;a++)t.tooltips.push(e)}else{if(e=ae(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(n){if(typeof n!="boolean"&&!ie(n))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function ur(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function fr(t,e){if(!ie(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function dr(t,e){if(!Ht(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function hr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function vr(t,e){t.documentElement=e}function pr(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function mr(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(a){t.cssClasses[a]=t.cssPrefix+e[a]})):t.cssClasses=e}function Qe(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Be,format:Be},a={step:{r:!1,t:Xt},keyboardPageMultiplier:{r:!1,t:Gt},keyboardMultiplier:{r:!1,t:Jt},keyboardDefaultStep:{r:!1,t:Zt},start:{r:!0,t:er},connect:{r:!0,t:Je},direction:{r:!0,t:or},snap:{r:!1,t:tr},animate:{r:!1,t:rr},animationDuration:{r:!1,t:ir},range:{r:!0,t:Qt},orientation:{r:!1,t:sr},margin:{r:!1,t:Ze},limit:{r:!1,t:ar},padding:{r:!1,t:nr},behaviour:{r:!0,t:lr},ariaFormat:{r:!1,t:fr},format:{r:!1,t:dr},tooltips:{r:!1,t:cr},keyboardSupport:{r:!0,t:hr},documentElement:{r:!1,t:vr},cssPrefix:{r:!0,t:pr},cssClasses:{r:!0,t:mr},handleAttributes:{r:!1,t:ur}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Ge,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(a).forEach(function(S){if(!we(t[S])&&n[S]===void 0){if(a[S].r)throw new Error("noUiSlider: '"+S+"' is required.");return}a[S].t(e,we(t[S])?t[S]:n[S])}),e.pips=t.pips;var l=document.createElement("div"),h=l.style.msTransform!==void 0,d=l.style.transform!==void 0;e.transformRule=d?"transform":h?"msTransform":"webkitTransform";var m=[["left","top"],["right","bottom"]];return e.style=m[e.dir][e.ort],e}function gr(t,e,a){var n=jt(),l=qt(),h=l&&$t(),d=t,m,S,p,k,V,F,g=e.spectrum,H=[],C=[],_=[],ne=0,R={},Y=!1,B=t.ownerDocument,J=e.documentElement||B.documentElement,Z=B.body,it=B.dir==="rtl"||e.ort===1?0:100;function I(r,i){var s=B.createElement("div");return i&&U(s,i),r.appendChild(s),s}function st(r,i){var s=I(r,e.cssClasses.origin),o=I(s,e.cssClasses.handle);if(I(o,e.cssClasses.touchArea),o.setAttribute("data-handle",String(i)),e.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",function(u){return bt(u,i)})),e.handleAttributes!==void 0){var c=e.handleAttributes[i];Object.keys(c).forEach(function(u){o.setAttribute(u,c[u])})}return o.setAttribute("role","slider"),o.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?U(o,e.cssClasses.handleLower):i===e.handles-1&&U(o,e.cssClasses.handleUpper),s.handle=o,s}function oe(r,i){return i?I(r,e.cssClasses.connect):!1}function at(r,i){S=I(i,e.cssClasses.connects),p=[],k=[],k.push(oe(S,r[0]));for(var s=0;s<e.handles;s++)p.push(st(i,s)),_[s]=s,k.push(oe(S,r[s+1]))}function nt(r){U(r,e.cssClasses.target),e.dir===0?U(r,e.cssClasses.ltr):U(r,e.cssClasses.rtl),e.ort===0?U(r,e.cssClasses.horizontal):U(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?U(r,e.cssClasses.textDirectionRtl):U(r,e.cssClasses.textDirectionLtr),I(r,e.cssClasses.base)}function ot(r,i){return!e.tooltips||!e.tooltips[i]?!1:I(r.firstChild,e.cssClasses.tooltip)}function Ae(){return d.hasAttribute("disabled")}function le(r){var i=p[r];return i.hasAttribute("disabled")}function lt(r){r!=null?(p[r].setAttribute("disabled",""),p[r].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),p.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function ct(r){r!=null?(p[r].removeAttribute("disabled"),p[r].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),p.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function ce(){F&&(W("update"+T.tooltips),F.forEach(function(r){r&&je(r)}),F=null)}function Pe(){ce(),F=p.map(ot),ve("update"+T.tooltips,function(r,i,s){if(!(!F||!e.tooltips)&&F[i]!==!1){var o=r[i];e.tooltips[i]!==!0&&(o=e.tooltips[i].to(s[i])),F[i].innerHTML=o}})}function ut(){W("update"+T.aria),ve("update"+T.aria,function(r,i,s,o,c){_.forEach(function(u){var v=p[u],f=Q(C,u,0,!0,!0,!0),b=Q(C,u,100,!0,!0,!0),w=c[u],E=String(e.ariaFormat.to(s[u]));f=g.fromStepping(f).toFixed(1),b=g.fromStepping(b).toFixed(1),w=g.fromStepping(w).toFixed(1),v.children[0].setAttribute("aria-valuemin",f),v.children[0].setAttribute("aria-valuemax",b),v.children[0].setAttribute("aria-valuenow",w),v.children[0].setAttribute("aria-valuetext",E)})})}function ft(r){if(r.mode===j.Range||r.mode===j.Steps)return g.xVal;if(r.mode===j.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,s=100/i,o=[];i--;)o[i]=i*s;return o.push(100),ke(o,r.stepped)}return r.mode===j.Positions?ke(r.values,r.stepped):r.mode===j.Values?r.stepped?r.values.map(function(c){return g.fromStepping(g.getStep(g.toStepping(c)))}):r.values:[]}function ke(r,i){return r.map(function(s){return g.fromStepping(i?g.getStep(s):s)})}function dt(r){function i(w,E){return Number((w+E).toFixed(7))}var s=ft(r),o={},c=g.xVal[0],u=g.xVal[g.xVal.length-1],v=!1,f=!1,b=0;return s=zt(s.slice().sort(function(w,E){return w-E})),s[0]!==c&&(s.unshift(c),v=!0),s[s.length-1]!==u&&(s.push(u),f=!0),s.forEach(function(w,E){var y,x,P,M=w,D=s[E+1],L,ge,Se,xe,Fe,be,Re,Ie=r.mode===j.Steps;for(Ie&&(y=g.xNumSteps[E]),y||(y=D-M),D===void 0&&(D=M),y=Math.max(y,1e-7),x=M;x<=D;x=i(x,y)){for(L=g.toStepping(x),ge=L-b,Fe=ge/(r.density||1),be=Math.round(Fe),Re=ge/be,P=1;P<=be;P+=1)Se=b+P*Re,o[Se.toFixed(5)]=[g.fromStepping(Se),0];xe=s.indexOf(x)>-1?O.LargeValue:Ie?O.SmallValue:O.NoValue,!E&&v&&x!==D&&(xe=0),x===D&&f||(o[L.toFixed(5)]=[x,xe]),b=L}}),o}function ht(r,i,s){var o,c,u=B.createElement("div"),v=(o={},o[O.None]="",o[O.NoValue]=e.cssClasses.valueNormal,o[O.LargeValue]=e.cssClasses.valueLarge,o[O.SmallValue]=e.cssClasses.valueSub,o),f=(c={},c[O.None]="",c[O.NoValue]=e.cssClasses.markerNormal,c[O.LargeValue]=e.cssClasses.markerLarge,c[O.SmallValue]=e.cssClasses.markerSub,c),b=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],w=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];U(u,e.cssClasses.pips),U(u,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function E(x,P){var M=P===e.cssClasses.value,D=M?b:w,L=M?v:f;return P+" "+D[e.ort]+" "+L[x]}function y(x,P,M){if(M=i?i(P,M):M,M!==O.None){var D=I(u,!1);D.className=E(M,e.cssClasses.marker),D.style[e.style]=x+"%",M>O.NoValue&&(D=I(u,!1),D.className=E(M,e.cssClasses.value),D.setAttribute("data-value",String(P)),D.style[e.style]=x+"%",D.innerHTML=String(s.to(P)))}}return Object.keys(r).forEach(function(x){y(x,r[x][0],r[x][1])}),u}function ue(){V&&(je(V),V=null)}function fe(r){ue();var i=dt(r),s=r.filter,o=r.format||{to:function(c){return String(Math.round(c))}};return V=d.appendChild(ht(i,s,o)),V}function Ve(){var r=m.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||m[i]:r.height||m[i]}function q(r,i,s,o){var c=function(v){var f=vt(v,o.pageOffset,o.target||i);if(!f||Ae()&&!o.doNotReject||Tt(d,e.cssClasses.tap)&&!o.doNotReject||r===n.start&&f.buttons!==void 0&&f.buttons>1||o.hover&&f.buttons)return!1;h||f.preventDefault(),f.calcPoint=f.points[e.ort],s(f,o)},u=[];return r.split(" ").forEach(function(v){i.addEventListener(v,c,h?{passive:!0}:!1),u.push([v,c])}),u}function vt(r,i,s){var o=r.type.indexOf("touch")===0,c=r.type.indexOf("mouse")===0,u=r.type.indexOf("pointer")===0,v=0,f=0;if(r.type.indexOf("MSPointer")===0&&(u=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(o){var b=function(y){var x=y.target;return x===s||s.contains(x)||r.composed&&r.composedPath().shift()===s};if(r.type==="touchstart"){var w=Array.prototype.filter.call(r.touches,b);if(w.length>1)return!1;v=w[0].pageX,f=w[0].pageY}else{var E=Array.prototype.find.call(r.changedTouches,b);if(!E)return!1;v=E.pageX,f=E.pageY}}return i=i||We(B),(c||u)&&(v=r.clientX+i.x,f=r.clientY+i.y),r.pageOffset=i,r.points=[v,f],r.cursor=c||u,r}function De(r){var i=r-Rt(m,e.ort),s=i*100/Ve();return s=Ne(s),e.dir?100-s:s}function pt(r){var i=100,s=!1;return p.forEach(function(o,c){if(!le(c)){var u=C[c],v=Math.abs(u-r),f=v===100&&i===100,b=v<i,w=v<=i&&r>u;(b||w||f)&&(s=c,i=v)}}),s}function mt(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&de(r,i)}function gt(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return de(r,i);var s=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),o=s*100/i.baseSize;Me(s>0,o,i.locations,i.handleNumbers,i.connect)}function de(r,i){i.handle&&(re(i.handle,e.cssClasses.active),ne-=1),i.listeners.forEach(function(s){J.removeEventListener(s[0],s[1])}),ne===0&&(re(d,e.cssClasses.drag),me(),r.cursor&&(Z.style.cursor="",Z.removeEventListener("selectstart",$e))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(s){N(s,C[s],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(s){A("update",s)})),i.handleNumbers.forEach(function(s){A("change",s),A("set",s),A("end",s)})}function he(r,i){if(!i.handleNumbers.some(le)){var s;if(i.handleNumbers.length===1){var o=p[i.handleNumbers[0]];s=o.children[0],ne+=1,U(s,e.cssClasses.active)}r.stopPropagation();var c=[],u=q(n.move,J,gt,{target:r.target,handle:s,connect:i.connect,listeners:c,startCalcPoint:r.calcPoint,baseSize:Ve(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:C.slice()}),v=q(n.end,J,de,{target:r.target,handle:s,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers}),f=q("mouseout",J,mt,{target:r.target,handle:s,listeners:c,doNotReject:!0,handleNumbers:i.handleNumbers});c.push.apply(c,u.concat(v,f)),r.cursor&&(Z.style.cursor=getComputedStyle(r.target).cursor,p.length>1&&U(d,e.cssClasses.drag),Z.addEventListener("selectstart",$e,!1)),i.handleNumbers.forEach(function(b){A("start",b)})}}function St(r){r.stopPropagation();var i=De(r.calcPoint),s=pt(i);s!==!1&&(e.events.snap||qe(d,e.cssClasses.tap,e.animationDuration),N(s,i,!0,!0),me(),A("slide",s,!0),A("update",s,!0),e.events.snap?he(r,{handleNumbers:[s]}):(A("change",s,!0),A("set",s,!0)))}function xt(r){var i=De(r.calcPoint),s=g.getStep(i),o=g.fromStepping(s);Object.keys(R).forEach(function(c){c.split(".")[0]==="hover"&&R[c].forEach(function(u){u.call(te,o)})})}function bt(r,i){if(Ae()||le(i))return!1;var s=["Left","Right"],o=["Down","Up"],c=["PageDown","PageUp"],u=["Home","End"];e.dir&&!e.ort?s.reverse():e.ort&&!e.dir&&(o.reverse(),c.reverse());var v=r.key.replace("Arrow",""),f=v===c[0],b=v===c[1],w=v===o[0]||v===s[0]||f,E=v===o[1]||v===s[1]||b,y=v===u[0],x=v===u[1];if(!w&&!E&&!y&&!x)return!0;r.preventDefault();var P;if(E||w){var M=w?0:1,D=He(i),L=D[M];if(L===null)return!1;L===!1&&(L=g.getDefaultStep(C[i],w,e.keyboardDefaultStep)),b||f?L*=e.keyboardPageMultiplier:L*=e.keyboardMultiplier,L=Math.max(L,1e-7),L=(w?-1:1)*L,P=H[i]+L}else x?P=e.spectrum.xVal[e.spectrum.xVal.length-1]:P=e.spectrum.xVal[0];return N(i,g.toStepping(P),!0,!0),A("slide",i),A("update",i),A("change",i),A("set",i),!1}function Le(r){r.fixed||p.forEach(function(i,s){q(n.start,i.children[0],he,{handleNumbers:[s]})}),r.tap&&q(n.start,m,St,{}),r.hover&&q(n.move,m,xt,{hover:!0}),r.drag&&k.forEach(function(i,s){if(!(i===!1||s===0||s===k.length-1)){var o=p[s-1],c=p[s],u=[i],v=[o,c],f=[s-1,s];U(i,e.cssClasses.draggable),r.fixed&&(u.push(o.children[0]),u.push(c.children[0])),r.dragAll&&(v=p,f=_),u.forEach(function(b){q(n.start,b,he,{handles:v,handleNumbers:f,connect:i})})}})}function ve(r,i){R[r]=R[r]||[],R[r].push(i),r.split(".")[0]==="update"&&p.forEach(function(s,o){A("update",o)})}function wt(r){return r===T.aria||r===T.tooltips}function W(r){var i=r&&r.split(".")[0],s=i?r.substring(i.length):r;Object.keys(R).forEach(function(o){var c=o.split(".")[0],u=o.substring(c.length);(!i||i===c)&&(!s||s===u)&&(!wt(u)||s===u)&&delete R[o]})}function A(r,i,s){Object.keys(R).forEach(function(o){var c=o.split(".")[0];r===c&&R[o].forEach(function(u){u.call(te,H.map(e.format.to),i,H.slice(),s||!1,C.slice(),te)})})}function Q(r,i,s,o,c,u,v){var f;return p.length>1&&!e.events.unconstrained&&(o&&i>0&&(f=g.getAbsoluteDistance(r[i-1],e.margin,!1),s=Math.max(s,f)),c&&i<p.length-1&&(f=g.getAbsoluteDistance(r[i+1],e.margin,!0),s=Math.min(s,f))),p.length>1&&e.limit&&(o&&i>0&&(f=g.getAbsoluteDistance(r[i-1],e.limit,!1),s=Math.min(s,f)),c&&i<p.length-1&&(f=g.getAbsoluteDistance(r[i+1],e.limit,!0),s=Math.max(s,f))),e.padding&&(i===0&&(f=g.getAbsoluteDistance(0,e.padding[0],!1),s=Math.max(s,f)),i===p.length-1&&(f=g.getAbsoluteDistance(100,e.padding[1],!0),s=Math.min(s,f))),v||(s=g.getStep(s)),s=Ne(s),s===r[i]&&!u?!1:s}function pe(r,i){var s=e.ort;return(s?i:r)+", "+(s?r:i)}function Me(r,i,s,o,c){var u=s.slice(),v=o[0],f=e.events.smoothSteps,b=[!r,r],w=[r,!r];o=o.slice(),r&&o.reverse(),o.length>1?o.forEach(function(y,x){var P=Q(u,y,u[y]+i,b[x],w[x],!1,f);P===!1?i=0:(i=P-u[y],u[y]=P)}):b=w=[!0];var E=!1;o.forEach(function(y,x){E=N(y,s[y]+i,b[x],w[x],!1,f)||E}),E&&(o.forEach(function(y){A("update",y),A("slide",y)}),c!=null&&A("drag",v))}function Ue(r,i){return e.dir?100-r-i:r}function Ct(r,i){C[r]=i,H[r]=g.fromStepping(i);var s=Ue(i,0)-it,o="translate("+pe(s+"%","0")+")";if(p[r].style[e.transformRule]=o,e.events.invertConnects&&C.length>1){var c=C.every(function(u,v,f){return v===0||u>=f[v-1]});if(Y!==!c){Vt();return}}X(r),X(r+1),Y&&(X(r-1),X(r+2))}function me(){_.forEach(function(r){var i=C[r]>50?-1:1,s=3+(p.length+i*r);p[r].style.zIndex=String(s)})}function N(r,i,s,o,c,u){return c||(i=Q(C,r,i,s,o,!1,u)),i===!1?!1:(Ct(r,i),!0)}function X(r){if(k[r]){var i=C.slice();Y&&i.sort(function(f,b){return f-b});var s=0,o=100;r!==0&&(s=i[r-1]),r!==k.length-1&&(o=i[r]);var c=o-s,u="translate("+pe(Ue(s,c)+"%","0")+")",v="scale("+pe(c/100,"1")+")";k[r].style[e.transformRule]=u+" "+v}}function Oe(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=g.toStepping(r)),r===!1||isNaN(r))?C[i]:r}function ee(r,i,s){var o=ae(r),c=C[0]===void 0;i=i===void 0?!0:i,e.animate&&!c&&qe(d,e.cssClasses.tap,e.animationDuration),_.forEach(function(f){N(f,Oe(o[f],f),!0,!1,s)});var u=_.length===1?0:1;if(c&&g.hasNoSize()&&(s=!0,C[0]=0,_.length>1)){var v=100/(_.length-1);_.forEach(function(f){C[f]=f*v})}for(;u<_.length;++u)_.forEach(function(f){N(f,C[f],!0,!0,s)});me(),_.forEach(function(f){A("update",f),o[f]!==null&&i&&A("set",f)})}function Et(r){ee(e.start,r)}function yt(r,i,s,o){if(r=Number(r),!(r>=0&&r<_.length))throw new Error("noUiSlider: invalid handle number, got: "+r);N(r,Oe(i,r),!0,!0,o),A("update",r),s&&A("set",r)}function _e(r){if(r===void 0&&(r=!1),r)return H.length===1?H[0]:H.slice(0);var i=H.map(e.format.to);return i.length===1?i[0]:i}function At(){for(W(T.aria),W(T.tooltips),Object.keys(e.cssClasses).forEach(function(r){re(d,e.cssClasses[r])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider}function He(r){var i=C[r],s=g.getNearbySteps(i),o=H[r],c=s.thisStep.step,u=null;if(e.snap)return[o-s.stepBefore.startValue||null,s.stepAfter.startValue-o||null];c!==!1&&o+c>s.stepAfter.startValue&&(c=s.stepAfter.startValue-o),o>s.thisStep.startValue?u=s.thisStep.step:s.stepBefore.step===!1?u=!1:u=o-s.stepBefore.highestStep,i===100?c=null:i===0&&(u=null);var v=g.countStepDecimals();return c!==null&&c!==!1&&(c=Number(c.toFixed(v))),u!==null&&u!==!1&&(u=Number(u.toFixed(v))),[u,c]}function Pt(){return _.map(He)}function kt(r,i){var s=_e(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];o.forEach(function(u){r[u]!==void 0&&(a[u]=r[u])});var c=Qe(a);o.forEach(function(u){r[u]!==void 0&&(e[u]=c[u])}),g=c.spectrum,e.margin=c.margin,e.limit=c.limit,e.padding=c.padding,e.pips?fe(e.pips):ue(),e.tooltips?Pe():ce(),C=[],ee(we(r.start)?r.start:s,i),r.connect&&ze()}function ze(){for(;S.firstChild;)S.removeChild(S.firstChild);for(var r=0;r<=e.handles;r++)k[r]=oe(S,e.connect[r]),X(r);Le({drag:e.events.drag,fixed:!0})}function Vt(){Y=!Y,Je(e,e.connect.map(function(r){return!r})),ze()}function Dt(){m=nt(d),at(e.connect,m),Le(e.events),ee(e.start),e.pips&&fe(e.pips),e.tooltips&&Pe(),ut()}Dt();var te={destroy:At,steps:Pt,on:ve,off:W,get:_e,set:ee,setHandle:yt,reset:Et,disable:lt,enable:ct,__moveHandles:function(r,i,s){Me(r,i,C,s)},options:a,updateOptions:kt,target:d,removePips:ue,removeTooltips:ce,getPositions:function(){return C.slice()},getTooltips:function(){return F},getOrigins:function(){return p},pips:fe};return te}function Sr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var a=Qe(e),n=gr(t,a,e);return t.noUiSlider=n,n}const xr={__spectrum:Xe,cssClasses:Ge,create:Sr};let et=1/0,tt=-1/0,$={min:2020,max:2025};const Ke=2,K=new Set,Ee=[];window.addEventListener("load",()=>{br()});async function br(){const e=await(await fetch("../data.json")).json(),[a,n,l,h]=wr(e.projects);et=l,tt=h,Cr(a),Er(n,Ut),yr(l,h,Ot),console.log("Data loaded + filters created.")}function wr(t){const e=[],a=new Set;let n=1/0,l=-1/0;return t.forEach((h,d)=>{const m=new _t(`card-${d}`,"panel",h.name,"cardTitle",h.img,h.tags,h.type,h.year,h.subtitle,h.description,h.video,h.bwImg,h.blogItems,h.hasVideo);e.push(m),Ee.push({card:m,div:m.div,inDOM:!0}),h.type.forEach(p=>a.add(p));const S=parseInt(h.year,10);S<n&&(n=S),S>l&&(l=S)}),[e,a,n,l]}function Cr(t){Te.innerHTML="",t.forEach(e=>{Te.appendChild(e.div)}),t.length>0&&t[0].div.classList.add("expanded"),t.forEach(e=>e.div.classList.remove("hidden")),se()}function Er(t,e){t.forEach(a=>{const n=document.createElement("button");n.className="type-chip",n.innerHTML=`
        <span class="chip-label">${a}</span>
        <span class="chip-close">
            <i class="fa fa-times fa-fw"></i>
        </span>
      `,e.appendChild(n),n.addEventListener("click",()=>{K.has(a)?(K.delete(a),n.classList.remove("active-chip")):(K.add(a),n.classList.add("active-chip")),rt()})})}function yr(t,e,a){const n=document.createElement("div");n.id="slider",a.appendChild(n),xr.create(n,{start:[t,e],connect:!0,range:{min:t,max:e},format:{to:l=>Math.round(l),from:l=>Number(l)},step:1,tooltips:!0}),n.noUiSlider.on("update",(l,h)=>{const[d,m]=l.map(S=>parseInt(S,10));$.min=d,$.max=m,rt()}),$.min=t,$.max=e}function rt(){const t=K.size===0,e=$.min===et&&$.max===tt;if(t&&e){Ee.forEach(({div:a})=>{a.classList.remove("hidden"),a.classList.remove("expanded")}),Ye(),se();return}Ee.forEach(({card:a,div:n})=>{const l=parseInt(a.year,10),h=a.types,d=Ar(h),m=Pr(l);d&&m?n.classList.remove("hidden"):(n.classList.add("hidden"),n.classList.remove("expanded"))}),Ye(),se()}function Ar(t){return K.size===0?!0:t.some(e=>K.has(e))}function Pr(t){return t>=$.min&&t<=$.max}function Ye(){const t=document.querySelectorAll(".panel"),e=Array.from(t).filter(a=>!a.classList.contains("hidden"));e.length>0&&(t.forEach(a=>a.classList.remove("expanded")),console.log("visible panels:",e,"first one",e[0]),e[0].classList.add("expanded"))}function se(){const t=document.querySelectorAll(".panel"),e=Array.from(t).filter(d=>!d.classList.contains("hidden"));if(e.length===0)return;let a=e.find(d=>d.classList.contains("expanded"));a||(e[0].classList.add("expanded"),a=e[0]);const n=e.filter(d=>d!==a),l=100-n.length*Ke,h=Math.max(0,l);n.forEach(d=>{d.style.flexBasis=`${Ke}%`,d.style.flexGrow=0,d.style.flexShrink=0,d.style.opacity="1"}),a.style.flexBasis=`${h}%`,a.style.flexGrow=0,a.style.flexShrink=0,a.style.opacity="1",t.forEach(d=>{d.classList.contains("hidden")&&(d.style.flexBasis=0,d.style.opacity="0")})}