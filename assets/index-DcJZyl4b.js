function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-_7ZKr5uo.js","assets/index-vGHx-TQN.js","assets/index-DKqrDkax.css","assets/index-BW7kpaR3.js","assets/index-tyqU9X9l.js","assets/index-CQsp_zYS.js","assets/index-C_PC7hk7.js","assets/index-DHcMBJCj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-vGHx-TQN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-_7ZKr5uo.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BW7kpaR3.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-tyqU9X9l.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CQsp_zYS.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-C_PC7hk7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DHcMBJCj.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
