function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-2TrSvEsn.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DEstj4vS.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-2TrSvEsn.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
