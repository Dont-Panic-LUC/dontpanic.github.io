import{S as t,i as s,s as e,e as a,a as n,t as r,H as c,b as l,g as i,f as o,h,d as m,u as d,k as f,m as u,l as v,v as p,w as g,x as $,y as E,c as j,q as x,j as D,n as I,o as P,p as V,r as b}from"./client.b9b5805d.js";import{d as w}from"./dayjs.min.ad3747a4.js";function O(t,s,e){const a=t.slice();return a[5]=s[e],a}function H(t){let s,e,n=w(t[5].date).format("MMM DD, hh:mma")+"";return{c(){s=a("p"),e=r(n)},l(t){s=l(t,"P",{});var a=i(s);e=h(a,n),a.forEach(m)},m(t,a){u(t,s,a),v(s,e)},p:g,d(t){t&&m(s)}}}function M(t){let s,e;return{c(){s=a("p"),e=r("Exact Time Forthcoming")},l(t){s=l(t,"P",{});var a=i(s);e=h(a,"Exact Time Forthcoming"),a.forEach(m)},m(t,a){u(t,s,a),v(s,e)},p:g,d(t){t&&m(s)}}}function T(t){let s,e,p,$,j,x,D,I,P,V,b=t[5].title+"",w=t[5].html+"",O=t[5].image&&function(t){let s,e,n,r;return{c(){s=a("div"),e=a("img"),this.h()},l(t){s=l(t,"DIV",{class:!0});var a=i(s);e=l(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(m),this.h()},h(){E(e.src,n=`assets/content/opps/${t[5].image}`)||f(e,"src",n),f(e,"alt",r=`Banner for the event ${t[5].title}`),f(e,"class","svelte-16txmju"),f(s,"class","card-image-container svelte-16txmju")},m(t,a){u(t,s,a),v(s,e)},p:g,d(t){t&&m(s)}}}(t);let T=function(t,s){return"TBD"===t[5].date||"Upcoming"===t[5].date?M:t[5].date?H:void 0}(t),y=T&&T(t);return{c(){s=a("article"),O&&O.c(),e=n(),p=a("div"),$=a("div"),y&&y.c(),j=n(),x=a("h2"),D=r(b),I=n(),P=new c,V=n(),this.h()},l(t){s=l(t,"ARTICLE",{class:!0});var a=i(s);O&&O.l(a),e=o(a),p=l(a,"DIV",{class:!0});var n=i(p);$=l(n,"DIV",{class:!0});var r=i($);y&&y.l(r),j=o(r),x=l(r,"H2",{class:!0});var c=i(x);D=h(c,b),c.forEach(m),r.forEach(m),I=o(n),P=d(n),n.forEach(m),V=o(a),a.forEach(m),this.h()},h(){f(x,"class","svelte-16txmju"),f($,"class","card-top svelte-16txmju"),P.a=null,f(p,"class","card-content svelte-16txmju"),f(s,"class","card svelte-16txmju")},m(t,a){u(t,s,a),O&&O.m(s,null),v(s,e),v(s,p),v(p,$),y&&y.m($,null),v($,j),v($,x),v(x,D),v(p,I),P.m(w,p),v(s,V)},p(t,s){t[5].image&&O.p(t,s),y&&y.p(t,s)},d(t){t&&m(s),O&&O.d(),y&&y.d()}}}function y(t){let s,e,c,d,E,j=t[1],x=[];for(let s=0;s<j.length;s+=1)x[s]=T(O(t,j,s));return{c(){s=a("div"),e=a("h1"),c=r(t[0]),d=n(),E=a("div");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(a){s=l(a,"DIV",{id:!0});var n=i(s);e=l(n,"H1",{class:!0});var r=i(e);c=h(r,t[0]),r.forEach(m),d=o(n),E=l(n,"DIV",{class:!0});var f=i(E);for(let t=0;t<x.length;t+=1)x[t].l(f);f.forEach(m),n.forEach(m),this.h()},h(){f(e,"class","svelte-16txmju"),f(E,"class","card-container"),f(s,"id","container")},m(t,a){u(t,s,a),v(s,e),v(e,c),v(s,d),v(s,E);for(let t=0;t<x.length;t+=1)x[t].m(E,null)},p(t,[s]){if(1&s&&p(c,t[0]),2&s){let e;for(j=t[1],e=0;e<j.length;e+=1){const a=O(t,j,e);x[e]?x[e].p(a,s):(x[e]=T(a),x[e].c(),x[e].m(E,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=j.length}},i:g,o:g,d(t){t&&m(s),$(x,t)}}}function S(t,s,e){let{events:a}=s,{title:n="Upcoming Oppertunities"}=s,{isPast:r=!1}=s;const c=(new Date).toISOString(),l=a.filter((t=>r?t.date<c:t.date>=c)).sort(((t,s)=>t.date<s.date?1:-1));return t.$$set=t=>{"events"in t&&e(2,a=t.events),"title"in t&&e(0,n=t.title),"isPast"in t&&e(3,r=t.isPast)},[n,l,a,r]}class B extends t{constructor(t){super(),s(this,t,S,y,e,{events:2,title:0,isPast:3})}}function F(t){let s,e,c,d,p,g,$,E,w,O,H;return g=new B({props:{events:t[0]}}),O=new B({props:{events:t[0],isPast:!0,title:"Past Oppertunities"}}),{c(){s=a("h1"),e=r("Oppertunities"),c=n(),d=n(),p=a("div"),j(g.$$.fragment),$=n(),E=a("div"),w=n(),j(O.$$.fragment),this.h()},l(t){s=l(t,"H1",{class:!0});var a=i(s);e=h(a,"Oppertunities"),a.forEach(m),c=o(t);x('[data-svelte="svelte-ynwe2a"]',document.head).forEach(m),d=o(t),p=l(t,"DIV",{id:!0,class:!0});var n=i(p);D(g.$$.fragment,n),$=o(n),E=l(n,"DIV",{id:!0,class:!0}),i(E).forEach(m),w=o(n),D(O.$$.fragment,n),n.forEach(m),this.h()},h(){f(s,"class","svelte-b0sc6j"),document.title="Events",f(E,"id","spacer"),f(E,"class","svelte-b0sc6j"),f(p,"id","container"),f(p,"class","svelte-b0sc6j")},m(t,a){u(t,s,a),v(s,e),u(t,c,a),u(t,d,a),u(t,p,a),I(g,p,null),v(p,$),v(p,E),v(p,w),I(O,p,null),H=!0},p(t,[s]){const e={};1&s&&(e.events=t[0]),g.$set(e);const a={};1&s&&(a.events=t[0]),O.$set(a)},i(t){H||(P(g.$$.fragment,t),P(O.$$.fragment,t),H=!0)},o(t){V(g.$$.fragment,t),V(O.$$.fragment,t),H=!1},d(t){t&&m(s),t&&m(c),t&&m(d),t&&m(p),b(g),b(O)}}}function U(){return this.fetch("opps.json").then((t=>t.json())).then((t=>({events:t})))}function k(t,s,e){let{events:a}=s;return t.$$set=t=>{"events"in t&&e(0,a=t.events)},[a]}class q extends t{constructor(t){super(),s(this,t,k,F,e,{events:0})}}export{q as default,U as preload};
