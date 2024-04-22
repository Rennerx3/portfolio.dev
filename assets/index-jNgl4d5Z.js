function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D-OFeOk2.js","assets/index-CV0BxX32.js","assets/index-DKqrDkax.css","assets/index-COml3dOu.js","assets/index-BlgjkUv4.js","assets/index-Drn1UWa2.js","assets/index-CrZnAc3t.js","assets/index-CyeSaqku.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CV0BxX32.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D-OFeOk2.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-COml3dOu.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BlgjkUv4.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Drn1UWa2.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CrZnAc3t.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CyeSaqku.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
