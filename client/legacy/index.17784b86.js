import{_ as t,a as n,b as e,c as s,i as a,d as r,S as c,s as o,f as i,e as f,g as u,q as l,j as v,k as h,h as $,l as d,n as p,o as m,r as g,u as y,p as j,v as E,w as R,x as w,y as b}from"./client.cd5a0640.js";import{E as x}from"./EventsRoll.ab51b6ae.js";import"./dayjs.min.d9adcc57.js";function P(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=n(t);if(s){var c=n(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return e(this,a)}}function z(t){var n,e,s,a,r,c,o,P;return s=new x({props:{events:t[0]}}),o=new x({props:{events:t[0],isPast:!0,title:"Past Events"}}),{c:function(){n=i(),e=f("div"),u(s.$$.fragment),a=i(),r=f("div"),c=i(),u(o.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-ynwe2a"]',document.head).forEach(v),n=h(t),e=$(t,"DIV",{id:!0,class:!0});var i=d(e);p(s.$$.fragment,i),a=h(i),r=$(i,"DIV",{id:!0,class:!0}),d(r).forEach(v),c=h(i),p(o.$$.fragment,i),i.forEach(v),this.h()},h:function(){document.title="Events",m(r,"id","spacer"),m(r,"class","svelte-1n663pz"),m(e,"id","container"),m(e,"class","svelte-1n663pz")},m:function(t,i){g(t,n,i),g(t,e,i),y(s,e,null),j(e,a),j(e,r),j(e,c),y(o,e,null),P=!0},p:function(t,n){var e=E(n,1)[0],a={};1&e&&(a.events=t[0]),s.$set(a);var r={};1&e&&(r.events=t[0]),o.$set(r)},i:function(t){P||(R(s.$$.fragment,t),R(o.$$.fragment,t),P=!0)},o:function(t){w(s.$$.fragment,t),w(o.$$.fragment,t),P=!1},d:function(t){t&&v(n),t&&v(e),b(s),b(o)}}}function B(){return this.fetch("events.json").then((function(t){return t.json()})).then((function(t){return{events:t}}))}function D(t,n,e){var s=n.events;return t.$$set=function(t){"events"in t&&e(0,s=t.events)},[s]}var I=function(n){t(i,c);var e=P(i);function i(t){var n;return s(this,i),n=e.call(this),a(r(n),t,D,z,o,{events:0}),n}return i}();export{I as default,B as preload};
