import{S as e,i as t,s as a,z as s,m as o,w as r,d as n,e as l,b as c,g as i,k as h,y as d,a as m,t as f,c as u,q as p,f as g,h as w,j as b,l as v,n as k,o as $,p as x,r as y,A as E,B as A}from"./client.d3bff0fd.js";function C(e){let t,a;return{c(){t=l("iframe"),this.h()},l(e){t=c(e,"IFRAME",{title:!0,src:!0,width:!0,height:!0,allowtransparency:!0,frameborder:!0,sandbox:!0,class:!0}),i(t).forEach(n),this.h()},h(){h(t,"title","Join the Don't Panic! Discord"),d(t.src,a="https://discord.com/widget?id=740005650934792193&theme=dark")||h(t,"src","https://discord.com/widget?id=740005650934792193&theme=dark"),h(t,"width","350"),h(t,"height","500"),h(t,"allowtransparency",!0),h(t,"frameborder","0"),h(t,"sandbox","allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"),h(t,"class","svelte-1xrgbb3")},m(e,a){o(e,t,a)},d(e){e&&n(t)}}}function S(e){let t,a;return{c(){t=l("iframe"),this.h()},l(e){t=c(e,"IFRAME",{title:!0,src:!0,width:!0,height:!0,allowtransparency:!0,frameborder:!0,sandbox:!0,class:!0}),i(t).forEach(n),this.h()},h(){h(t,"title","Join the Don't Panic! Discord"),d(t.src,a="https://discord.com/widget?id=740005650934792193&theme=light")||h(t,"src","https://discord.com/widget?id=740005650934792193&theme=light"),h(t,"width","350"),h(t,"height","500"),h(t,"allowtransparency",!0),h(t,"frameborder","0"),h(t,"sandbox","allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"),h(t,"class","svelte-1xrgbb3")},m(e,a){o(e,t,a)},d(e){e&&n(t)}}}function j(e){let t;function a(e,t){return"light"===e[0]?S:"dark"===e[0]?C:void 0}let l=a(e),c=l&&l(e);return{c(){c&&c.c(),t=s()},l(e){c&&c.l(e),t=s()},m(e,a){c&&c.m(e,a),o(e,t,a)},p(e,[s]){l!==(l=a(e))&&(c&&c.d(1),c=l&&l(e),c&&(c.c(),c.m(t.parentNode,t)))},i:r,o:r,d(e){c&&c.d(e),e&&n(t)}}}function P(e,t,a){let{theme:s}=t;return e.$$set=e=>{"theme"in e&&a(0,s=e.theme)},[s]}class q extends e{constructor(e){super(),t(this,e,P,j,a,{theme:0})}}function z(e){let t,a,s,r,d,E,A,C,S,j,P,z,D,J,I,F;return I=new q({props:{theme:e[0]}}),{c(){t=m(),a=l("h1"),s=f("Contact Us"),r=m(),d=l("section"),E=l("p"),A=f("Are you looking for a place with CS folks that like to geek out, learn some\n    CS, make friends, and be in a judgment free zone and a helpful environment?"),C=m(),S=l("p"),j=f("Look no further. Just join our discord below, or "),P=l("a"),z=f("email us"),D=f(" and we'll get back to you ASAP."),J=m(),u(I.$$.fragment),this.h()},l(e){p('[data-svelte="svelte-10zyvt"]',document.head).forEach(n),t=g(e),a=c(e,"H1",{class:!0});var o=i(a);s=w(o,"Contact Us"),o.forEach(n),r=g(e),d=c(e,"SECTION",{class:!0});var l=i(d);E=c(l,"P",{class:!0});var h=i(E);A=w(h,"Are you looking for a place with CS folks that like to geek out, learn some\n    CS, make friends, and be in a judgment free zone and a helpful environment?"),h.forEach(n),C=g(l),S=c(l,"P",{class:!0});var m=i(S);j=w(m,"Look no further. Just join our discord below, or "),P=c(m,"A",{href:!0});var f=i(P);z=w(f,"email us"),f.forEach(n),D=w(m," and we'll get back to you ASAP."),m.forEach(n),l.forEach(n),J=g(e),b(I.$$.fragment,e),this.h()},h(){document.title="Contact",h(a,"class","svelte-1cvqaa1"),h(E,"class","svelte-1cvqaa1"),h(P,"href","mailto:dontpanic.luc@gmail.com"),h(S,"class","svelte-1cvqaa1"),h(d,"class","svelte-1cvqaa1")},m(e,n){o(e,t,n),o(e,a,n),v(a,s),o(e,r,n),o(e,d,n),v(d,E),v(E,A),v(d,C),v(d,S),v(S,j),v(S,P),v(P,z),v(S,D),o(e,J,n),k(I,e,n),F=!0},p(e,[t]){const a={};1&t&&(a.theme=e[0]),I.$set(a)},i(e){F||($(I.$$.fragment,e),F=!0)},o(e){x(I.$$.fragment,e),F=!1},d(e){e&&n(t),e&&n(a),e&&n(r),e&&n(d),e&&n(J),y(I,e)}}}function D(e,t,a){let s,o;const r=E("theme");return A(e,r,(e=>a(2,o=e))),console.log("Theme: "+s),e.$$.update=()=>{4&e.$$.dirty&&a(0,s=o)},[s,r,o]}class J extends e{constructor(e){super(),t(this,e,D,z,a,{})}}export{J as default};
