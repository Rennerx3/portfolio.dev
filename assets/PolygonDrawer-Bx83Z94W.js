import{P as n}from"./PolygonDrawerBase-BRFjUxpl.js";import"./index-B20UxZ6K.js";const o=3.5,s=2.66,a=3;class g extends n{getCenter(t,e){return{x:-e/(t.sides/o),y:-e/(s/o)}}getSidesData(t,e){const r=t.sides;return{count:{denominator:1,numerator:r},length:e*s/(r/a)}}}export{g as PolygonDrawer};
