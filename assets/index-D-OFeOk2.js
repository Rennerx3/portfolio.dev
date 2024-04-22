function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CbWAxG80.js","assets/index-CV0BxX32.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CV0BxX32.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CbWAxG80.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
