function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-9nHAZus4.js","assets/index-cjoEZ3u2.js","assets/index-CXKfe8yM.css","assets/index-l8WBSQSU.js","assets/index-Ckdl4eCt.js","assets/index-CTPATEI3.js","assets/index-rPdr4cEH.js","assets/index-DG6tjFjd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-cjoEZ3u2.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-9nHAZus4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-l8WBSQSU.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ckdl4eCt.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CTPATEI3.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-rPdr4cEH.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DG6tjFjd.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
