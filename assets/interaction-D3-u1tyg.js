function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-XZ91ZjcU.js","assets/Ranges-TlJV_cgk.js","assets/index-DQ6Vj3yk.js","assets/index-DKqrDkax.css","assets/index-k2pYUqv9.js","assets/OptionsColor-Dt-5ff82.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DQ6Vj3yk.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-XZ91ZjcU.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
