function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-UUWW1JBc.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css","assets/index-DViRnBvm.js","assets/index-AjIOwtBS.js","assets/index-B_Lp9OSU.js","assets/index-CcwsW8HO.js","assets/index-JcyX82BQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DEstj4vS.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-UUWW1JBc.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DViRnBvm.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-AjIOwtBS.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B_Lp9OSU.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CcwsW8HO.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-JcyX82BQ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
