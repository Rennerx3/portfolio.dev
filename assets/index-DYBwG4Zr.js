function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-ReX-DWLy.js","assets/index-Bt-95oV8.js","assets/index-DlS7W1uB.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Bt-95oV8.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-ReX-DWLy.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
