(this["webpackJsonpphilippe-fragniere"]=this["webpackJsonpphilippe-fragniere"]||[]).push([[0],{43:function(e,t,a){e.exports=a(87)},48:function(e,t,a){},49:function(e,t,a){},65:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),c=(a(48),a(49),a(10)),o=a(3),s=a(12),u=a(33),m=a.n(u),d=(a(65),a(11)),f=a(34);var p=function(e){return e.placeholder,r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"spinner"}))};function h(e){var t=e.src,a=e.alt,l=Object(n.useState)(!1),i=Object(c.a)(l,2),o=i[0],s=i[1];return r.a.createElement(n.Suspense,{fallback:r.a.createElement(p,null)},r.a.createElement(f.a,{src:t,alt:a,onLoad:function(){setTimeout((function(){s(!0)}),50)},className:"slide-visual"+(o?" loaded":"")}))}var E=a(36),v=a(38),g=a.n(v);var b=function(e){var t=e.id,a=e.fields,n=e.muted;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Philippe Fragniere",a.label?" \u2014 "+function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}(a.label):"")),r.a.createElement("div",{className:"slide"},r.a.createElement("div",{className:"slide-item",key:t},a.video&&r.a.createElement(g.a,{url:a.video[0].url,playing:!0,loop:!0,controls:!1,playsinline:!0,width:"100%",height:"100%",className:"slide-visual loaded video",muted:n,config:{file:{attributes:{autoPlay:!0,playsInline:!0,poster:a.photo&&a.photo[0].thumbnails.large.url}}}}),a.photo&&!a.video&&r.a.createElement(h,{src:a.photo[0].thumbnails.large.url,alt:a.alt}),!a.video&&!a.photo&&"No visuals")))},w=a(39),O=a.n(w),j={default:9,1100:6,700:3,500:2};var N=function(e){var t=e.slides.map((function(t,a){return r.a.createElement("div",{className:"grid-item",key:t.id,onClick:function(){return function(t){e.toggleThumbs(!1),e.dispatch({type:"set",position:t})}(a)}},t.fields.photo?r.a.createElement(h,{src:t.fields.photo[0].thumbnails.large.url,alt:t.fields.label}):"No visuals")}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column column-small"},r.a.createElement("h2",null,"Lives in London and Switzerland",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:contact@philippefragniere.ch"},"Contact"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.instagram.com/philippefragniere/",target:"blank"},"Instagram"))),r.a.createElement("div",{className:"column column-large"},r.a.createElement("h2",null,"Representation in Paris and New-York",r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.quadriga.fr/",target:"blank"},"Quadriga Management")))),r.a.createElement("div",{className:"gallery-content"},r.a.createElement(O.a,{breakpointCols:j,className:"grid",columnClassName:"grid_column"},t))))};var k=function(e){var t=e.slides,a=e.currentSlide,l=e.dispatch,i=e.muted,o=e.setMute,s=Object(n.useState)(!1),u=Object(c.a)(s,2),m=u[0],d=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m?"white":""},m&&r.a.createElement(N,{slides:t,toggleThumbs:d,dispatch:l}),r.a.createElement("div",{className:"fixed top-left"},r.a.createElement("h1",null,m?null:"Philippe Fragni\xe8re")),r.a.createElement("div",{className:"fixed top-right"},r.a.createElement("h2",{onClick:function(){return d(!m)},className:"link"},m?"Close":"Index")),r.a.createElement("div",{className:"fixed bottom-left label",dangerouslySetInnerHTML:{__html:!m&&a.fields.label?"<h2>"+a.fields.label+"</h2>":null}})),i&&a.fields.video&&a.fields.video_sound&&r.a.createElement("div",{className:"fixed bottom-right"},r.a.createElement("h2",{onClick:function(){return o(!i)},className:"link"},i&&"Sound On")))},y=a(90),x=a(89),S=a(40),C=function(e){return{position:e,anim:"fade"}},I=function(e,t){switch(t.type){case"next":return Object(d.a)(Object(d.a)({},e),{},{position:(e.position+1)%t.numItems,anim:"right"});case"prev":return Object(d.a)(Object(d.a)({},e),{},{position:(e.position-1+t.numItems)%t.numItems,anim:"left"});case"set":return Object(d.a)(Object(d.a)({},e),{},{position:t.position,anim:"fade"});case"reset":return C(0);default:throw new Error("Unexpected action")}};var F=function(e){var t=e.res,a=e.initialPos,l=Object(o.e)(),i=Object(o.f)(),u=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],l=a[1];return{value:r,animStart:function(){l(!0)},animEnd:function(){l(!1)}}}(!1),m=Object(S.a)({onSwipedLeft:function(){return L("next")},onSwipedRight:function(){return L("prev")},onSwiping:function(){return h(1)},preventDefaultTouchmoveEvent:!0,trackMouse:!1}),d=Object(n.useState)(0),f=Object(c.a)(d,2),p=f[0],h=f[1],E=Object(n.useState)(!0),v=Object(c.a)(E,2),g=v[0],w=v[1],O=Object(n.useReducer)(I,a,C),j=Object(c.a)(O,2),N=j[0],F=j[1];Object(n.useEffect)((function(){l.push({pathname:t.records[N.position].path})}),[N.position,t,l]),Object(n.useEffect)((function(){var e=function(e){var t=e.keyCode;37===t&&L("prev"),39===t&&L("next")};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));var L=function(e){h(0),g||w(!0),u.value||F({type:e,numItems:t.records.length})},T=t.records.map((function(e,t){return r.a.createElement(s.a,{key:t,exact:!0,path:e.path},r.a.createElement(b,Object.assign({},e,{muted:g})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{slides:t.records,currentSlide:t.records[N.position],dispatch:F,muted:g,setMute:w}),r.a.createElement("div",Object.assign({className:"slider "+N.anim+"-transition"},m,{onClick:function(e){return p?h(0):e.clientX<e.view.innerWidth/2?L("prev"):L("next")}}),r.a.createElement(y.a,null,r.a.createElement(x.a,{key:i.key,timeout:600,classNames:"slide",onEntering:u.animStart,onExited:u.animEnd,unmountOnExit:!0},r.a.createElement(o.b,{location:i,basename:"."},T)))))},L=function(){var e=Object(o.f)(),t=m()("https://boiling-bastion-11005.herokuapp.com/",{method:"GET"}),a=Object(n.useRef)(),l=Object(n.useState)(null),i=Object(c.a)(l,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){if(!a.current){t.records.forEach((function(e,t){void 0===e.fields.title&&(e.fields.title="v-"+e.id),e.path="/"+function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",a=0,n=t.length;a<n;a++)e=e.replace(new RegExp(t.charAt(a),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}(e.fields.title)}));u(function(){if("/"!==e.pathname){var a=t.records.findIndex((function(t){return t.path===e.pathname}));return a>=0?a:0}return 0}()),a.current=!0}}),[e.pathname,t.records]),a.current?r.a.createElement(F,{res:t,initialPos:s}):null},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{basename:"."},r.a.createElement(n.Suspense,{fallback:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"fixed top-left"},r.a.createElement("h1",null,"Philippe Fragni\xe8re")),r.a.createElement(p,null))},r.a.createElement(L,null))))};var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.25398650.chunk.js.map