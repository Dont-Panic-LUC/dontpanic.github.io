import{S as s,i as e,s as t,a,e as n,c as r,q as o,d as i,f as c,b as l,g as v,j as $,k as f,m,n as d,l as h,o as p,p as u,r as g}from"./client.b9b5805d.js";import{E as j}from"./EventsRoll.94a556a7.js";import"./dayjs.min.ad3747a4.js";function E(s){let e,t,E,b,w,x,y,z;return E=new j({props:{events:s[0]}}),y=new j({props:{events:s[0],isPast:!0,title:"Past Events"}}),{c(){e=a(),t=n("div"),r(E.$$.fragment),b=a(),w=n("div"),x=a(),r(y.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-ynwe2a"]',document.head).forEach(i),e=c(s),t=l(s,"DIV",{id:!0,class:!0});var a=v(t);$(E.$$.fragment,a),b=c(a),w=l(a,"DIV",{id:!0,class:!0}),v(w).forEach(i),x=c(a),$(y.$$.fragment,a),a.forEach(i),this.h()},h(){document.title="Events",f(w,"id","spacer"),f(w,"class","svelte-1n663pz"),f(t,"id","container"),f(t,"class","svelte-1n663pz")},m(s,a){m(s,e,a),m(s,t,a),d(E,t,null),h(t,b),h(t,w),h(t,x),d(y,t,null),z=!0},p(s,[e]){const t={};1&e&&(t.events=s[0]),E.$set(t);const a={};1&e&&(a.events=s[0]),y.$set(a)},i(s){z||(p(E.$$.fragment,s),p(y.$$.fragment,s),z=!0)},o(s){u(E.$$.fragment,s),u(y.$$.fragment,s),z=!1},d(s){s&&i(e),s&&i(t),g(E),g(y)}}}function b(){return this.fetch("events.json").then((s=>s.json())).then((s=>({events:s})))}function w(s,e,t){let{events:a}=e;return s.$$set=s=>{"events"in s&&t(0,a=s.events)},[a]}class x extends s{constructor(s){super(),e(this,s,w,E,t,{events:0})}}export{x as default,b as preload};
