function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-WwVj42HG.js","assets/index-CV0BxX32.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CV0BxX32.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-WwVj42HG.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
