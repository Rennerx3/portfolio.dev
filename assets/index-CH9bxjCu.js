function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BKoDjNI3.js","assets/index-DrOchAbc.js","assets/index-D-a3eK7U.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DrOchAbc.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BKoDjNI3.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
