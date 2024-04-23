function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-COFIz_TU.js","assets/index-BhS8XrcJ.js","assets/index-0nlDcvY6.css","assets/index-eKOjf1GM.js","assets/index-DO0ND9Vt.js","assets/index-CY2wlas8.js","assets/index-tWvh1mDu.js","assets/index-BONzeasN.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BhS8XrcJ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-COFIz_TU.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-eKOjf1GM.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DO0ND9Vt.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CY2wlas8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-tWvh1mDu.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BONzeasN.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
