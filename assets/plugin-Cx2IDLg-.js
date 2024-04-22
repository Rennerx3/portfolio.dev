function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-BYsff58Q.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DEstj4vS.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-BYsff58Q.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
