!function(){"use strict";const e=1693867826977,s=`cache${e}`,t=["/client/client.5a7eb004.js","/client/inject_styles.5607aec6.js","/client/index.8e4c744b.js","/client/EventsRoll.3a553d2d.js","/client/dayjs.min.ad3747a4.js","/client/professors.e692722d.js","/client/contact.f09ce1d5.js","/client/e-board.41b897ee.js","/client/alumni.3caf4493.js","/client/index.666d2c4c.js","/client/about.70d315fd.js","/client/index.a30f97fc.js","/client/[slug].790fbfe4.js","/client/index.3c26c5d7.js"].concat(["/service-worker-index.html","/assets/content/events/2021-01-kickoff-game-night.png","/assets/content/events/2021-02-tips-from-a-hiring-perspective.jpg","/assets/content/events/2021-03-creating-a-portfolio.png","/assets/content/events/2023-03-game-night.jpg","/assets/content/events/Fall.jpg","/assets/content/events/Fall_2021_-_Introduction_to_Web_Development.png","/assets/content/events/Fall_2021_-_Kickoff_Meeting.png","/assets/content/events/Fall_2021_-_Registration_Bonanza.png","/assets/content/events/Spring_2023_eboard-registration.png","/assets/content/events/tbd.png","/assets/e-board/Aaron-2.jpeg","/assets/e-board/Aaron.jpg","/assets/e-board/Eno.jpg","/assets/e-board/Isaiah.JPG","/assets/e-board/Jenna.jpeg","/assets/e-board/Julia.jpg","/assets/e-board/Kenneth.jpg","/assets/e-board/Laila.jpeg","/assets/e-board/Tamanna-2.jpeg","/assets/e-board/Tamanna.jpg","/assets/e-board/Tristian.jpeg","/assets/e-board/Victor-2.jpg","/assets/e-board/alex.jpg","/assets/e-board/anon.png","/assets/e-board/anran.png","/assets/e-board/henry.jpg","/assets/e-board/iqra.jpg","/assets/e-board/jess.jpg","/assets/e-board/makenna.jpg","/assets/e-board/rayyan.jpg","/assets/e-board/tien.jpg","/assets/e-board/victor.jpg","/assets/misc/googlePassport.jpg","/components.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/normalize.css","/robots.txt"]),a=new Set(t);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(t))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url),n=t.protocol.startsWith("http"),o=t.hostname===self.location.hostname&&t.port!==self.location.port,c=t.host===self.location.host&&a.has(t.pathname),i="only-if-cached"===s.request.cache&&!c;!n||o||i||s.respondWith((async()=>c&&await caches.match(s.request)||async function(s){const t=await caches.open(`offline${e}`);try{const e=await fetch(s);return t.put(s,e.clone()),e}catch(e){const a=await t.match(s);if(a)return a;throw e}}(s.request))())}))}();
