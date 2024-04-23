function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Bq1XUy-0.js","assets/index-DPf6yiRA.js","assets/index-0nlDcvY6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DPf6yiRA.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Bq1XUy-0.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
