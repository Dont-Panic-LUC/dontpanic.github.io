import{S as s,i as e,s as t,a as n,e as a,c as r,q as o,d as c,f as i,b as l,g as v,j as $,k as f,m,n as d,l as h,o as p,p as u,r as g}from"./client.87913079.js";import{E}from"./EventsRoll.36bdcb80.js";function j(s){let e,t,j,b,w,x,z,D;return j=new E({props:{events:s[0]}}),z=new E({props:{events:s[0],isPast:!0,title:"Past Events"}}),{c(){e=n(),t=a("div"),r(j.$$.fragment),b=n(),w=a("div"),x=n(),r(z.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-ynwe2a"]',document.head).forEach(c),e=i(s),t=l(s,"DIV",{id:!0,class:!0});var n=v(t);$(j.$$.fragment,n),b=i(n),w=l(n,"DIV",{id:!0,class:!0}),v(w).forEach(c),x=i(n),$(z.$$.fragment,n),n.forEach(c),this.h()},h(){document.title="Events",f(w,"id","spacer"),f(w,"class","svelte-1n663pz"),f(t,"id","container"),f(t,"class","svelte-1n663pz")},m(s,n){m(s,e,n),m(s,t,n),d(j,t,null),h(t,b),h(t,w),h(t,x),d(z,t,null),D=!0},p(s,[e]){const t={};1&e&&(t.events=s[0]),j.$set(t);const n={};1&e&&(n.events=s[0]),z.$set(n)},i(s){D||(p(j.$$.fragment,s),p(z.$$.fragment,s),D=!0)},o(s){u(j.$$.fragment,s),u(z.$$.fragment,s),D=!1},d(s){s&&c(e),s&&c(t),g(j),g(z)}}}function b(){return this.fetch("events.json").then((s=>s.json())).then((s=>({events:s})))}function w(s,e,t){let{events:n}=e;return s.$$set=s=>{"events"in s&&t(0,n=s.events)},[n]}export default class extends s{constructor(s){super(),e(this,s,w,j,t,{events:0})}}export{b as preload};
