function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-qgblBpP-.js","assets/index-DPf6yiRA.js","assets/index-0nlDcvY6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DPf6yiRA.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-qgblBpP-.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
