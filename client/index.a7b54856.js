import{S as e,i as s,s as t,a as n,e as a,c as r,q as o,d as c,f as i,b as l,g as f,j as v,k as $,m,n as d,l as h,o as p,p as u,r as g}from"./client.e3948bd6.js";import{E}from"./EventsRoll.6e5ffb40.js";function j(e){let s,t,j,b,w,x,z,D;return j=new E({props:{events:e[0]}}),z=new E({props:{events:e[0],isPast:!0,title:"Past Events"}}),{c(){s=n(),t=a("div"),r(j.$$.fragment),b=n(),w=a("div"),x=n(),r(z.$$.fragment),this.h()},l(e){o('[data-svelte="svelte-ynwe2a"]',document.head).forEach(c),s=i(e),t=l(e,"DIV",{id:!0,class:!0});var n=f(t);v(j.$$.fragment,n),b=i(n),w=l(n,"DIV",{id:!0,class:!0}),f(w).forEach(c),x=i(n),v(z.$$.fragment,n),n.forEach(c),this.h()},h(){document.title="Events",$(w,"id","spacer"),$(w,"class","svelte-1n663pz"),$(t,"id","container"),$(t,"class","svelte-1n663pz")},m(e,n){m(e,s,n),m(e,t,n),d(j,t,null),h(t,b),h(t,w),h(t,x),d(z,t,null),D=!0},p(e,[s]){const t={};1&s&&(t.events=e[0]),j.$set(t);const n={};1&s&&(n.events=e[0]),z.$set(n)},i(e){D||(p(j.$$.fragment,e),p(z.$$.fragment,e),D=!0)},o(e){u(j.$$.fragment,e),u(z.$$.fragment,e),D=!1},d(e){e&&c(s),e&&c(t),g(j),g(z)}}}function b(){return this.fetch("events.json").then((e=>e.json())).then((e=>({events:e})))}function w(e,s,t){let{events:n}=s;return e.$$set=e=>{"events"in e&&t(0,n=e.events)},[n]}export default class extends e{constructor(e){super(),s(this,e,w,j,t,{events:0})}}export{b as preload};
