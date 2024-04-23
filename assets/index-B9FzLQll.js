function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bm7PxrmQ.js","assets/index-DPf6yiRA.js","assets/index-0nlDcvY6.css","assets/index-DWuVLJNm.js","assets/index-B4ELltwv.js","assets/index-CYI2eZfh.js","assets/index-Qh0YZQN7.js","assets/index-Cko_DIeZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DPf6yiRA.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bm7PxrmQ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DWuVLJNm.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B4ELltwv.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CYI2eZfh.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Qh0YZQN7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cko_DIeZ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
