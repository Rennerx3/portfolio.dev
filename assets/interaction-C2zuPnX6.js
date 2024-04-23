function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-BXPFQ0Ks.js","assets/Ranges-CdUaVvgg.js","assets/index-DPf6yiRA.js","assets/index-0nlDcvY6.css","assets/index-CxMjYAEJ.js","assets/OptionsColor-e_tNoZpn.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DPf6yiRA.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-BXPFQ0Ks.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
