function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-yWxdHyKO.js","assets/index-5IKMCIc2.js","assets/index-DKqrDkax.css","assets/index-DA9M4lGn.js","assets/index-DlNBAXJP.js","assets/index-DapWKQvT.js","assets/index-DnJR9IRf.js","assets/index-OlhoUsXG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-5IKMCIc2.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-yWxdHyKO.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DA9M4lGn.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DlNBAXJP.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DapWKQvT.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DnJR9IRf.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-OlhoUsXG.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
