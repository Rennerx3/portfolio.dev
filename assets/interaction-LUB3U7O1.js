function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-C_420wX9.js","assets/Ranges-DBU2iU3a.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css","assets/index-Clz0uqvj.js","assets/OptionsColor-h3iScw1y.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DEstj4vS.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-C_420wX9.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
