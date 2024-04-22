function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-szziGv2g.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DEstj4vS.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-szziGv2g.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
