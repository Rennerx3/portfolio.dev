function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CvD043A6.js","assets/index-C27bEL5-.js","assets/index-DKqrDkax.css","assets/index-D_hXw4cm.js","assets/index-D3zhgXXc.js","assets/index-DStjOTgf.js","assets/index-CohZsYNS.js","assets/index-qqqvnG2P.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C27bEL5-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CvD043A6.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D_hXw4cm.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D3zhgXXc.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DStjOTgf.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CohZsYNS.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-qqqvnG2P.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
