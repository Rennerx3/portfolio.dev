import{j as m,G as c}from"./index-BhS8XrcJ.js";const o=2,s=Math.PI*o,g=0,t={x:0,y:0};function x(r){const{context:i,particle:e,radius:a}=r;e.circleRange||(e.circleRange={min:g,max:s});const n=e.circleRange;i.arc(t.x,t.y,a,n.min,n.max,!1)}const d=12,u=360,l=0;class f{draw(i){x(i)}getSidesCount(){return d}particleInit(i,e){const a=e.shapeData,n=(a==null?void 0:a.angle)??{max:u,min:l};e.circleRange=m(n)?{min:c(n.min),max:c(n.max)}:{min:l,max:c(n)}}}export{f as CircleDrawer};
