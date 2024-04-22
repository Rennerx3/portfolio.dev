function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-Eg4lFFTx.js","assets/index-5IKMCIc2.js","assets/index-DKqrDkax.css","assets/ImageDrawer-Dzx2t3fg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{g as h,b as m,c as i,_ as u}from"./index-5IKMCIc2.js";const y=0,I=1,b=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function L(r,e,o){const{svgData:t}=r;if(!t)return"";const n=h(e,o);if(t.includes("fill"))return t.replace(b,()=>n);const s=t.indexOf(">");return`${t.substring(y,s)} fill="${n}"${t.substring(s)}`}async function a(r){return new Promise(e=>{r.loading=!0;const o=new Image;r.element=o,o.addEventListener("load",()=>{r.loading=!1,e()}),o.addEventListener("error",()=>{r.element=void 0,r.error=!0,r.loading=!1,m().error(`${i} loading image: ${r.source}`),e()}),o.src=r.source})}async function p(r){if(r.type!=="svg"){await a(r);return}r.loading=!0;const e=await fetch(r.source);e.ok?r.svgData=await e.text():(m().error(`${i} Image not found`),r.error=!0),r.loading=!1}function E(r,e,o,t){var g;const n=L(r,o,((g=t.opacity)==null?void 0:g.value)??I),s={color:o,gif:e.gif,data:{...r,svgData:n},loaded:!1,ratio:e.width/e.height,replaceColor:e.replaceColor,source:e.src};return new Promise(f=>{const _=new Blob([n],{type:"image/svg+xml"}),c=URL||window.URL||window.webkitURL||window,d=c.createObjectURL(_),l=new Image;l.addEventListener("load",()=>{s.loaded=!0,s.element=l,f(s),c.revokeObjectURL(d)});const v=async()=>{c.revokeObjectURL(d);const w={...r,error:!1,loading:!0};await a(w),s.loaded=!0,s.element=w.element,f(s)};l.addEventListener("error",()=>void v()),l.src=d})}const x=Object.freeze(Object.defineProperty({__proto__:null,downloadSvgImage:p,loadImage:a,replaceImageColor:E},Symbol.toStringTag,{value:"Module"})),O=3;function P(r){r.loadImage||(r.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${i} no image source provided`);if(r.images||(r.images=[]),!r.images.find(o=>o.name===e.name||o.source===e.src))try{const o={gif:e.gif??!1,name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-O),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};r.images.push(o);let t;if(e.gif){const{loadGifImage:n}=await u(()=>import("./Utils-Eg4lFFTx.js"),__vite__mapDeps([0,1,2]));t=n}else t=e.replaceColor?p:a;await t(o)}catch{throw new Error(`${i} ${e.name??e.src} not found`)}})}async function R(r,e=!0){P(r);const{ImagePreloaderPlugin:o}=await u(()=>import("./ImagePreloader-wDGOXDcw.js"),[]),{ImageDrawer:t}=await u(()=>import("./ImageDrawer-Dzx2t3fg.js"),__vite__mapDeps([3,0,1,2])),n=new o(r);await r.addPlugin(n,e),await r.addShape(["image","images"],new t(r),e)}const C=Object.freeze(Object.defineProperty({__proto__:null,loadImageShape:R},Symbol.toStringTag,{value:"Module"}));export{x as U,C as i,E as r};
