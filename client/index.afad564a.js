import{S as s,i as e,s as t,a as n,e as a,c as r,q as o,d as c,f as i,b as l,g as v,j as $,k as f,m,n as d,l as h,o as p,p as u,r as g}from"./client.48801ac4.js";import{E as j}from"./EventsRoll.77840c1d.js";import"./dayjs.min.ad3747a4.js";function E(s){let e,t,E,w,x,y,z,D;return E=new j({props:{events:s[0]}}),z=new j({props:{events:s[0],isPast:!0,title:"Past Events"}}),{c(){e=n(),t=a("div"),r(E.$$.fragment),w=n(),x=a("div"),y=n(),r(z.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-ynwe2a"]',document.head).forEach(c),e=i(s),t=l(s,"DIV",{id:!0,class:!0});var n=v(t);$(E.$$.fragment,n),w=i(n),x=l(n,"DIV",{id:!0,class:!0}),v(x).forEach(c),y=i(n),$(z.$$.fragment,n),n.forEach(c),this.h()},h(){document.title="Events",f(x,"id","spacer"),f(x,"class","svelte-1n663pz"),f(t,"id","container"),f(t,"class","svelte-1n663pz")},m(s,n){m(s,e,n),m(s,t,n),d(E,t,null),h(t,w),h(t,x),h(t,y),d(z,t,null),D=!0},p(s,[e]){const t={};1&e&&(t.events=s[0]),E.$set(t);const n={};1&e&&(n.events=s[0]),z.$set(n)},i(s){D||(p(E.$$.fragment,s),p(z.$$.fragment,s),D=!0)},o(s){u(E.$$.fragment,s),u(z.$$.fragment,s),D=!1},d(s){s&&c(e),s&&c(t),g(E),g(z)}}}function w(){return this.fetch("events.json").then((s=>s.json())).then((s=>({events:s})))}function x(s,e,t){let{events:n}=e;return s.$$set=s=>{"events"in s&&t(0,n=s.events)},[n]}class y extends s{constructor(s){super(),e(this,s,x,E,t,{events:0})}}export{y as default,w as preload};
