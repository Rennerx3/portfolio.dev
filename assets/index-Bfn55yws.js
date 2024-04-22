function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-Ccf0B9Ap.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DEstj4vS.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-Ccf0B9Ap.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
