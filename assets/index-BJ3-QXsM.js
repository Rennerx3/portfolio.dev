function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CfM9HzKa.js","assets/index-DrOchAbc.js","assets/index-D-a3eK7U.css","assets/index-BAFnpsEd.js","assets/index-fJ_tO1HM.js","assets/index-CZtgrpBy.js","assets/index-BS1KwjLa.js","assets/index-CjRQXTAE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DrOchAbc.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CfM9HzKa.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BAFnpsEd.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-fJ_tO1HM.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CZtgrpBy.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BS1KwjLa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CjRQXTAE.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
