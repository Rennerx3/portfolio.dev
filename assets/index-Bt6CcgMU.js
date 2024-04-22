function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-Davlp0BX.js","assets/index-DiEwda4I.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DiEwda4I.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-Davlp0BX.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
