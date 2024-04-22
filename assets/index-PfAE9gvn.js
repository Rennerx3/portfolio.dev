function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-DHaITl4d.js","assets/index-DEstj4vS.js","assets/index-DMMmHo2g.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-DEstj4vS.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-DHaITl4d.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
