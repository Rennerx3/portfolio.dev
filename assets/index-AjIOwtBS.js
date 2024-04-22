function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-DTpfYRoJ.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DEstj4vS.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DTpfYRoJ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
