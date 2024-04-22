function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-CpxkedMI.js","assets/index-CV0BxX32.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CV0BxX32.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CpxkedMI.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
