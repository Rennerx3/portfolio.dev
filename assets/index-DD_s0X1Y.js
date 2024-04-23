function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BOZ_DHsG.js","assets/index-BhS8XrcJ.js","assets/index-0nlDcvY6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BhS8XrcJ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BOZ_DHsG.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
