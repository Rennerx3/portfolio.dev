function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CqyqxGZZ.js","assets/index-BXuLUFPK.js","assets/index-DUZLY7VL.css","assets/index-DPZoo4Wz.js","assets/index-CAv2tAWH.js","assets/index-DqGyHhTW.js","assets/index-vigL4oNy.js","assets/index-Ce24B7Nh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BXuLUFPK.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CqyqxGZZ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DPZoo4Wz.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CAv2tAWH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DqGyHhTW.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-vigL4oNy.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Ce24B7Nh.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
