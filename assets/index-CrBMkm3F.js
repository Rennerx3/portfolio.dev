function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BwFQ6-mT.js","assets/index-DQ6Vj3yk.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DQ6Vj3yk.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BwFQ6-mT.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
