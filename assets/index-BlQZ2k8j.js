function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BE-TJcNS.js","assets/index-DiEwda4I.js","assets/index-DKqrDkax.css","assets/index-D2sCdE1X.js","assets/index-CBPiUoDe.js","assets/index-DubXzP_F.js","assets/index-Cg0AP4PJ.js","assets/index-C6JVW1Rj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DiEwda4I.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BE-TJcNS.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D2sCdE1X.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CBPiUoDe.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DubXzP_F.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Cg0AP4PJ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C6JVW1Rj.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
