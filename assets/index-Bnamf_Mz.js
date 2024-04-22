function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-IA6QFQCr.js","assets/index-Bt-95oV8.js","assets/index-DlS7W1uB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bt-95oV8.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-IA6QFQCr.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
