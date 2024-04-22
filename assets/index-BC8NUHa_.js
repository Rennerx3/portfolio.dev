function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DQagkP-j.js","assets/index-Bt-95oV8.js","assets/index-DlS7W1uB.css","assets/index-Dl7hIeYg.js","assets/index-DCzsn1G3.js","assets/index-QaeGgYo4.js","assets/index-MPtAcfg2.js","assets/index-Bnamf_Mz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bt-95oV8.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DQagkP-j.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dl7hIeYg.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DCzsn1G3.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-QaeGgYo4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-MPtAcfg2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bnamf_Mz.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
