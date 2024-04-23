function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-b7y6Uck0.js","assets/index-B20UxZ6K.js","assets/index-DzfFJ-CN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B20UxZ6K.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-b7y6Uck0.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
