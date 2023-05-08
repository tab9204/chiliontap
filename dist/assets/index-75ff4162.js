(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(l){if(l.ep)return;l.ep=!0;const s=i(l);fetch(l.href,s)}})();function F(){}const Ce=e=>e;function $e(e){return e()}function he(){return Object.create(null)}function W(e){e.forEach($e)}function de(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function te(e,t){return V||(V=document.createElement("a")),V.href=t,e===V.href}function ze(e){return Object.keys(e).length===0}const je=typeof window<"u";let Ee=je?()=>window.performance.now():()=>Date.now(),fe=je?e=>requestAnimationFrame(e):F;const N=new Set;function Fe(e){N.forEach(t=>{t.c(e)||(N.delete(t),t.f())}),N.size!==0&&fe(Fe)}function Pe(e){let t;return N.size===0&&fe(Fe),{promise:new Promise(i=>{N.add(t={c:e,f:i})}),abort(){N.delete(t)}}}function m(e,t){e.appendChild(t)}function Te(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function xe(e){const t=y("style");return Se(Te(e),t),t.sheet}function Se(e,t){return m(e.head||e,t),t.sheet}function x(e,t,i){e.insertBefore(t,i||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function Me(e){return document.createTextNode(e)}function C(){return Me(" ")}function E(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function u(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function He(e){return Array.from(e.childNodes)}function D(e,t,i,n){i===null?e.style.removeProperty(t):e.style.setProperty(t,i,n?"important":"")}let Z;function Le(){if(Z===void 0){Z=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{Z=!0}}return Z}function We(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const l=Le();let s;return l?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=E(window,"message",r=>{r.source===n.contentWindow&&t()})):(n.src="about:blank",n.onload=()=>{s=E(n.contentWindow,"resize",t),t()}),m(e,n),()=>{(l||s&&n.contentWindow)&&s(),T(n)}}function Oe(e,t,{bubbles:i=!1,cancelable:n=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,i,n,t),l}const ie=new Map;let ne=0;function Ie(e){let t=5381,i=e.length;for(;i--;)t=(t<<5)-t^e.charCodeAt(i);return t>>>0}function Ne(e,t){const i={stylesheet:xe(t),rules:{}};return ie.set(e,i),i}function ge(e,t,i,n,l,s,r,o=0){const a=16.666/n;let c=`{
`;for(let $=0;$<=1;$+=a){const h=t+(i-t)*s($);c+=$*100+`%{${r(h,1-h)}}
`}const p=c+`100% {${r(i,1-i)}}
}`,d=`__svelte_${Ie(p)}_${o}`,g=Te(e),{stylesheet:f,rules:_}=ie.get(g)||Ne(g,e);_[d]||(_[d]=!0,f.insertRule(`@keyframes ${d} ${p}`,f.cssRules.length));const b=e.style.animation||"";return e.style.animation=`${b?`${b}, `:""}${d} ${n}ms linear ${l}ms 1 both`,ne+=1,d}function De(e,t){const i=(e.style.animation||"").split(", "),n=i.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),l=i.length-n.length;l&&(e.style.animation=n.join(", "),ne-=l,ne||Be())}function Be(){fe(()=>{ne||(ie.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),ie.clear())})}let J;function q(e){J=e}function Re(){if(!J)throw new Error("Function called outside component initialization");return J}function qe(e){Re().$$.on_mount.push(e)}const I=[],ce=[];let B=[];const ae=[],Je=Promise.resolve();let ue=!1;function Xe(){ue||(ue=!0,Je.then(Ae))}function L(e){B.push(e)}function Ge(e){ae.push(e)}const oe=new Set;let O=0;function Ae(){if(O!==0)return;const e=J;do{try{for(;O<I.length;){const t=I[O];O++,q(t),Ke(t.$$)}}catch(t){throw I.length=0,O=0,t}for(q(null),I.length=0,O=0;ce.length;)ce.pop()();for(let t=0;t<B.length;t+=1){const i=B[t];oe.has(i)||(oe.add(i),i())}B.length=0}while(I.length);for(;ae.length;)ae.pop()();ue=!1,oe.clear(),q(e)}function Ke(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(L)}}function Ue(e){const t=[],i=[];B.forEach(n=>e.indexOf(n)===-1?t.push(n):i.push(n)),i.forEach(n=>n()),B=t}let R;function Ye(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function re(e,t,i){e.dispatchEvent(Oe(`${t?"intro":"outro"}${i}`))}const ee=new Set;let P;function me(){P={r:0,c:[],p:P}}function ve(){P.r||W(P.c),P=P.p}function A(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function H(e,t,i,n){if(e&&e.o){if(ee.has(e))return;ee.add(e),P.c.push(()=>{ee.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}else n&&n()}const Qe={duration:0};function _e(e,t,i,n){const l={direction:"both"};let s=t(e,i,l),r=n?0:1,o=null,a=null,c=null;function p(){c&&De(e,c)}function d(f,_){const b=f.b-r;return _*=Math.abs(b),{a:r,b:f.b,d:b,duration:_,start:f.start,end:f.start+_,group:f.group}}function g(f){const{delay:_=0,duration:b=300,easing:$=Ce,tick:h=F,css:M}=s||Qe,z={start:Ee()+_,b:f};f||(z.group=P,P.r+=1),o||a?a=z:(M&&(p(),c=ge(e,r,f,b,_,$,M)),f&&h(0,1),o=d(z,b),L(()=>re(e,f,"start")),Pe(S=>{if(a&&S>a.start&&(o=d(a,b),a=null,re(e,o.b,"start"),M&&(p(),c=ge(e,r,o.b,o.duration,0,$,s.css))),o){if(S>=o.end)h(r=o.b,1-r),re(e,o.b,"end"),a||(o.b?p():--o.group.r||W(o.group.c)),o=null;else if(S>=o.start){const Q=S-o.start;r=o.a+o.d*$(Q/o.duration),h(r,1-r)}}return!!(o||a)}))}return{run(f){de(s)?Ye().then(()=>{s=s(l),g(f)}):g(f)},end(){p(),o=a=null}}}const Ve=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ze(e,t,i){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=i,i(e.$$.ctx[n]))}function se(e){e&&e.c()}function X(e,t,i,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,i),n||L(()=>{const r=e.$$.on_mount.map($e).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...r):W(r),e.$$.on_mount=[]}),s.forEach(L)}function G(e,t){const i=e.$$;i.fragment!==null&&(Ue(i.after_update),W(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(I.push(e),Xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,i,n,l,s,r,o=[-1]){const a=J;q(e);const c=e.$$={fragment:null,ctx:[],props:s,update:F,not_equal:l,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:he(),dirty:o,skip_bound:!1,root:t.target||a.$$.root};r&&r(c.root);let p=!1;if(c.ctx=i?i(e,t.props||{},(d,g,...f)=>{const _=f.length?f[0]:g;return c.ctx&&l(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),p&&et(e,d)),g}):[],c.update(),p=!0,W(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const d=He(t.target);c.fragment&&c.fragment.l(d),d.forEach(T)}else c.fragment&&c.fragment.c();t.intro&&A(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Ae()}q(a)}class Y{$destroy(){G(this,1),this.$destroy=F}$on(t,i){if(!de(i))return F;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const l=n.indexOf(i);l!==-1&&n.splice(l,1)}}$set(t){this.$$set&&!ze(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=e=>{let t=[];return e.forEach(i=>{const n=new Image;n.src=i;const l=new Promise(s=>{n.onload=()=>{s()},n.onerror=()=>{s()}});t.push(l)}),Promise.all(t).then(()=>!0)};function it(e){const t=e-1;return t*t*t+1}function ye(e,{delay:t=0,duration:i=400,easing:n=it,x:l=0,y:s=0,opacity:r=0}={}){const o=getComputedStyle(e),a=+o.opacity,c=o.transform==="none"?"":o.transform,p=a*(1-r);return{delay:t,duration:i,easing:n,css:(d,g)=>`
			transform: ${c} translate(${(1-d)*l}px, ${(1-d)*s}px);
			opacity: ${a-p*g}`}}function nt(e){let t,i,n,l,s,r,o,a,c,p,d,g;return{c(){t=y("header"),i=y("h3"),n=Me("Pull ->"),l=C(),s=y("div"),r=y("div"),o=C(),a=y("div"),u(i,"id","pullText"),u(i,"style",e[1]),u(i,"class","svelte-17o8rs"),u(r,"id","tap_handle"),D(r,"transform","rotate("+e[0]+"deg)"),u(r,"class","svelte-17o8rs"),u(a,"id","tap_base"),u(a,"class","svelte-17o8rs"),u(s,"id","dragContainer"),u(s,"class","svelte-17o8rs"),u(t,"class","svelte-17o8rs")},m(f,_){x(f,t,_),m(t,i),m(i,n),m(t,l),m(t,s),m(s,r),m(s,o),m(s,a),p=!0,d||(g=[E(r,"mousedown",e[6]),E(r,"mouseup",e[7]),E(r,"touchstart",e[8]),E(r,"touchend",e[9]),E(s,"mousemove",e[10]),E(s,"touchmove",e[11])],d=!0)},p(f,[_]){(!p||_&2)&&u(i,"style",f[1]),(!p||_&1)&&D(r,"transform","rotate("+f[0]+"deg)")},i(f){p||(L(()=>{c||(c=_e(t,ye,{y:-200,opacity:1,duration:200},!0)),c.run(1)}),p=!0)},o(f){c||(c=_e(t,ye,{y:-200,opacity:1,duration:200},!1)),c.run(0),p=!1},d(f){f&&T(t),f&&c&&c.end(),d=!1,W(g)}}}function st(e,t,i){let n,{chiliFlowing:l=!1}=t,s=!1,r=0,o=0;const a=h=>{if(s&&h>=r){if(o>=15){i(5,l=!0);return}i(0,o=o+h-r<=15?o+h-r:15),r=h}},c=h=>{r=h,s=!0},p=()=>{s=!1},d=h=>{c(h.clientX)},g=h=>{p()},f=h=>{c(h.touches[0].clientX)},_=h=>{p()},b=h=>{a(h.clientX)},$=h=>{a(h.touches[0].clientX)};return e.$$set=h=>{"chiliFlowing"in h&&i(5,l=h.chiliFlowing)},e.$$.update=()=>{e.$$.dirty&32&&i(1,n=l?"opacity:0;":"opacity:1;")},[o,n,a,c,p,l,d,g,f,_,b,$]}class lt extends Y{constructor(t){super(),U(this,t,st,nt,K,{chiliFlowing:5})}}function ot(e){let t,i,n,l,s,r,o,a,c,p;return{c(){t=y("div"),i=y("img"),l=C(),s=y("img"),a=C(),c=y("div"),p=y("div"),u(i,"class","jake svelte-kezt38"),u(i,"alt","static jake"),te(i.src,n="pixel-jake.png")||u(i,"src",n),D(i,"z-index","2"),u(s,"class","jake svelte-kezt38"),u(s,"alt","animated jake"),te(s.src,r="pixel-jake.gif")||u(s,"src",r),u(s,"style",o="z-index:3; top: -453px;"+e[1]),u(p,"id","chili_stream"),u(p,"style",e[2]),u(p,"class","svelte-kezt38"),u(c,"id","chili_container"),D(c,"height",e[0]+"px"),u(c,"class","svelte-kezt38"),u(t,"id","chili_jake"),u(t,"class","svelte-kezt38")},m(d,g){x(d,t,g),m(t,i),m(t,l),m(t,s),m(t,a),m(t,c),m(c,p)},p(d,[g]){g&2&&o!==(o="z-index:3; top: -453px;"+d[1])&&u(s,"style",o),g&4&&u(p,"style",d[2]),g&1&&D(c,"height",d[0]+"px")},i:F,o:F,d(d){d&&T(t)}}}function rt(e,t,i){let n,l,{chiliFlowing:s=!1}=t,{pageHeight:r}=t;return e.$$set=o=>{"chiliFlowing"in o&&i(3,s=o.chiliFlowing),"pageHeight"in o&&i(0,r=o.pageHeight)},e.$$.update=()=>{e.$$.dirty&8&&i(2,n=s?"animation-play-state: running;":"animation-play-state: paused;"),e.$$.dirty&8&&i(1,l=s?"display:block;":"display:none;")},[r,l,n,s]}class ct extends Y{constructor(t){super(),U(this,t,rt,ot,K,{chiliFlowing:3,pageHeight:0})}}function at(e){let t;return{c(){t=y("div"),t.innerHTML=`<div id="potGroup"><div id="pot" class="svelte-1m0c7g8"><div id="potShading" class="svelte-1m0c7g8"></div> 
            <div id="potReflection" class="svelte-1m0c7g8"></div></div> 
        <div id="handle1" class="potHandle svelte-1m0c7g8"></div> 
        <div id="handle2" class="potHandle svelte-1m0c7g8"></div> 
        <div id="shadow" class="svelte-1m0c7g8"></div> 
        <div id="chiliText" class="svelte-1m0c7g8">Cooking Chili</div></div> 
    <div id="smokeGroup" class="svelte-1m0c7g8"><div class="smoke svelte-1m0c7g8"></div> 
        <div class="smoke svelte-1m0c7g8"></div> 
        <div class="smoke svelte-1m0c7g8"></div> 
        <div class="smoke svelte-1m0c7g8"></div></div>`,u(t,"id","loader"),u(t,"class","svelte-1m0c7g8")},m(i,n){x(i,t,n)},p:F,i:F,o:F,d(i){i&&T(t)}}}class ut extends Y{constructor(t){super(),U(this,t,null,at,K,{})}}function dt(e){let t,i,n,l,s,r;return{c(){t=y("img"),n=C(),l=y("img"),te(t.src,i="./bowl.png")||u(t,"src",i),u(t,"alt","Just a bowl"),D(t,"z-index","2"),u(t,"class","svelte-eip30u"),te(l.src,s="./bowl.gif")||u(l,"src",s),u(l,"alt","Splashing bowl"),u(l,"style",r="z-index:3; "+e[0]),u(l,"class","svelte-eip30u")},m(o,a){x(o,t,a),x(o,n,a),x(o,l,a)},p(o,[a]){a&1&&r!==(r="z-index:3; "+o[0])&&u(l,"style",r)},i:F,o:F,d(o){o&&T(t),o&&T(n),o&&T(l)}}}function ft(e,t,i){let n,{chiliFlowing:l=!1}=t;return e.$$set=s=>{"chiliFlowing"in s&&i(1,l=s.chiliFlowing)},e.$$.update=()=>{e.$$.dirty&2&&i(0,n=l?"display:block;":"display:none;")},[n,l]}class pt extends Y{constructor(t){super(),U(this,t,ft,dt,K,{chiliFlowing:1})}}const{setTimeout:we}=Ve;function ke(e){let t,i,n;return i=new ut({}),{c(){t=y("div"),se(i.$$.fragment),u(t,"id","loadingScreen"),u(t,"class","svelte-10lk16j")},m(l,s){x(l,t,s),X(i,t,null),n=!0},i(l){n||(A(i.$$.fragment,l),n=!0)},o(l){H(i.$$.fragment,l),n=!1},d(l){l&&T(t),G(i)}}}function be(e){let t,i,n;function l(r){e[6](r)}let s={};return e[3]!==void 0&&(s.chiliFlowing=e[3]),t=new lt({props:s}),ce.push(()=>Ze(t,"chiliFlowing",l)),{c(){se(t.$$.fragment)},m(r,o){X(t,r,o),n=!0},p(r,o){const a={};!i&&o&8&&(i=!0,a.chiliFlowing=r[3],Ge(()=>i=!1)),t.$set(a)},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){G(t,r)}}}function ht(e){let t=!1,i=()=>{t=!1},n,l,s,r,o,a,c,p,d,g,f,_,b,$,h,M,z,S,Q;L(e[5]);let k=!e[0]&&ke(),w=e[2]<=200&&be(e);return c=new ct({props:{chiliFlowing:e[3],pageHeight:e[1]}}),M=new pt({props:{chiliFlowing:e[3]}}),{c(){k&&k.c(),l=C(),s=y("div"),w&&w.c(),r=C(),o=y("main"),a=y("section"),se(c.$$.fragment),p=C(),d=y("section"),d.innerHTML=`<div class="dripWave topWave svelte-10lk16j"></div> 
      <h3>Menu</h3> 
      <p>Check out our variety of chilis on tap!</p> 
      <div class="grid svelte-10lk16j"><div class="svelte-10lk16j"><img class="menuItems svelte-10lk16j" alt="Bowl of Chili" src="bowl_of_chili.png"/> 
          <h5 class="svelte-10lk16j">Classic Chili</h5></div> 
        <div class="svelte-10lk16j"><img class="menuItems svelte-10lk16j" alt="Another Bowl of chili" src="./404.png"/> 
          <h5 class="svelte-10lk16j">Supreme Chili</h5></div></div> 
      <div class="dripWave botWave svelte-10lk16j"></div>`,g=C(),f=y("section"),f.innerHTML=`<div class="dripWave topWave svelte-10lk16j"></div> 
      <h3>Testimonials</h3> 
      <p>See our customers rave reviews!</p> 
      <div class="grid svelte-10lk16j"><div class="svelte-10lk16j"><div class="svelte-10lk16j">“I just couldn&#39;t get past the strange concept and subpar chili. I don&#39;t think I&#39;ll be back to Chili on Tap anytime soon.”</div> 
          <div class="svelte-10lk16j">- David L</div></div> 
        <div class="svelte-10lk16j"><div class="svelte-10lk16j">“The fact that there were no other menu options - just chili - made the whole experience even more bizarre.”</div> 
          <div class="svelte-10lk16j">- Jessica K</div></div> 
        <div class="svelte-10lk16j"><div class="svelte-10lk16j">“I mean, you never know what you&#39;re going to get when you come to Chili on Tap.”</div> 
          <div class="svelte-10lk16j">- Samantha J</div></div></div> 
      <div class="dripWave botWave svelte-10lk16j"></div>`,_=C(),b=y("section"),b.innerHTML=`<div class="dripWave topWave svelte-10lk16j"></div> 
      <div class="grid svelte-10lk16j"><div class="svelte-10lk16j"><h4>Contact Us</h4> 
          <p>chili@chiliontap.com</p> 
          <p>(241) 748-4174</p></div> 
        <div class="svelte-10lk16j"><h4>Address</h4> 
          <p>102 Chestnut St, Coudersport, PA 16915</p></div> 
        <div class="svelte-10lk16j"><h4>Hours</h4> 
          <p>Monday: 11 PM - 7 AM</p> 
          <p>Tuesday: 11 PM - 7 AM</p> 
          <p>Wednesday: 11 PM - 7 AM</p> 
          <p>Thursday: 11 PM - 7 AM</p> 
          <p>Friday: 11 PM - 7 AM</p> 
          <p>Saturday: 11 PM - 7 AM</p> 
          <p>Sunday: 11 PM - 7 AM</p></div></div> 
      <div class="dripWave botWave svelte-10lk16j"></div>`,h=C(),se(M.$$.fragment),u(a,"class","svelte-10lk16j"),u(d,"class","bringToFront svelte-10lk16j"),u(f,"class","bringToFront svelte-10lk16j"),u(b,"class","bringToFront svelte-10lk16j"),u(o,"class","container svelte-10lk16j"),L(()=>e[7].call(o)),u(s,"id","contentScreen"),u(s,"style",e[4]),u(s,"class","svelte-10lk16j")},m(v,j){k&&k.m(v,j),x(v,l,j),x(v,s,j),w&&w.m(s,null),m(s,r),m(s,o),m(o,a),X(c,a,null),m(o,p),m(o,d),m(o,g),m(o,f),m(o,_),m(o,b),$=We(o,e[7].bind(o)),m(s,h),X(M,s,null),z=!0,S||(Q=E(window,"scroll",()=>{t=!0,clearTimeout(n),n=we(i,100),e[5]()}),S=!0)},p(v,[j]){j&4&&!t&&(t=!0,clearTimeout(n),scrollTo(window.pageXOffset,v[2]),n=we(i,100)),v[0]?k&&(me(),H(k,1,1,()=>{k=null}),ve()):k?j&1&&A(k,1):(k=ke(),k.c(),A(k,1),k.m(l.parentNode,l)),v[2]<=200?w?(w.p(v,j),j&4&&A(w,1)):(w=be(v),w.c(),A(w,1),w.m(s,r)):w&&(me(),H(w,1,1,()=>{w=null}),ve());const le={};j&8&&(le.chiliFlowing=v[3]),j&2&&(le.pageHeight=v[1]),c.$set(le);const pe={};j&8&&(pe.chiliFlowing=v[3]),M.$set(pe),(!z||j&16)&&u(s,"style",v[4])},i(v){z||(A(k),A(w),A(c.$$.fragment,v),A(M.$$.fragment,v),z=!0)},o(v){H(k),H(w),H(c.$$.fragment,v),H(M.$$.fragment,v),z=!1},d(v){k&&k.d(v),v&&T(l),v&&T(s),w&&w.d(),G(c),$(),G(M),S=!1,Q()}}}function gt(e,t,i){let n,l=0,s=0,r=!1;const o=["./pixel-jake.png","./pixel-jake.gif","./chili_stream.png","./chili_tip.png","./bowl_of_chili.png","./tap_base.png","./tap_handle.png","./wave.png","./bowl.png","./bowl.gif"];let a=!1;qe(async()=>{await tt(o),setTimeout(()=>{setTimeout(()=>{i(0,a=!0)},2e3),console.log("done")},1e3)});function c(){i(2,s=window.pageYOffset)}function p(g){r=g,i(3,r)}function d(){l=this.clientHeight,i(1,l)}return e.$$.update=()=>{e.$$.dirty&1&&i(4,n=a?"display:block":"display:none")},[a,l,s,r,n,c,p,d]}class mt extends Y{constructor(t){super(),U(this,t,gt,ht,K,{})}}new mt({target:document.getElementById("app")});