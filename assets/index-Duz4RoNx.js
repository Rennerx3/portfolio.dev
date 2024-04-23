function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-Cx913qn2.js","assets/index-DPf6yiRA.js","assets/index-0nlDcvY6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DPf6yiRA.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-Cx913qn2.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
