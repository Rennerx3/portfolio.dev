function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-CkrMwRwM.js","assets/index-C27bEL5-.js","assets/index-DKqrDkax.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-C27bEL5-.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-CkrMwRwM.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};