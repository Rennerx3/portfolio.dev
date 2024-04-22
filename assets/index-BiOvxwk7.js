function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BKs57Ko8.js","assets/index-DQ6Vj3yk.js","assets/index-DKqrDkax.css","assets/index-DRgHoeLC.js","assets/index-B0vN9771.js","assets/index--2cXL_L4.js","assets/index-Co82kzQK.js","assets/index-CcXxW0Md.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DQ6Vj3yk.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BKs57Ko8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DRgHoeLC.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B0vN9771.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index--2cXL_L4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Co82kzQK.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CcXxW0Md.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
