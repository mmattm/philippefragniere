(this["webpackJsonpphilippe-fragniere"]=this["webpackJsonpphilippe-fragniere"]||[]).push([[0],{11:function(e,t,a){"use strict";function n(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",a=0,n=t.length;a<n;a++)e=e.replace(new RegExp(t.charAt(a),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}a.d(t,"a",(function(){return n}))},14:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(){return i.a.createElement("div",{className:"loader"},i.a.createElement("div",{className:"spinner"}))}},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(12),i=a(13),s=a(16),l=a(15),r=a(0),o=a.n(r),c=a(24),u=a(14),d=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={loaded:!1},e.onLoad=function(){setTimeout((function(){e.setState({loaded:!0})}),50)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.loaded;return o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(u.a,null)},o.a.createElement(c.a,{src:this.props.src,alt:this.props.alt,onLoad:this.onLoad,className:"slide-visual"+(e?" loaded":"")}))}}]),a}(o.a.Component)},30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),l=a.n(s),r=(a(35),a(36),a(27)),o=a(12),c=a(13),u=a(7),d=a(16),m=a(15),h=a(10),f=a(1),p=a(44),b=(a(37),a(23)),g=a.n(b),E=a(21),v=a(11),w={default:9,1100:6,700:3,500:2};var y=function(e){var t=e.slides,a=e.setDirection,n=e.toggleThumbs,s=Object(f.f)(),l=t.map((function(e){return i.a.createElement("div",{className:"grid-item",key:e.id,onClick:function(){return t="/"+Object(v.a)(e.fields.label),a("fade"),s.push({pathname:t,state:{}}),void n();var t}},e.fields.photo?i.a.createElement(E.a,{src:e.fields.photo[0].thumbnails.large.url,alt:e.fields.label}):"No visuals")}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"gallery"},i.a.createElement("div",{className:"gallery-content"},i.a.createElement(g.a,{breakpointCols:w,className:"grid",columnClassName:"grid_column"},l))))};var j=function(e){var t=e.state,a=e.showThumbs,n=e.toggleThumbs,s=e.setDirection,l=Object(f.g)();function r(){return t.routes.find((function(e){return e.path===l.pathname}))}var o="Loading";return r()&&r().slide&&(o=r().slide.fields.withLabel?r().slide.fields.label:""),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a?"white":""},a?i.a.createElement(y,{slides:t.slides,setDirection:s,toggleThumbs:n}):null,i.a.createElement("div",{className:"fixed top-left"},i.a.createElement("h1",null,a?i.a.createElement("a",{href:"#"},"Bookings"):"Philippe Fragni\xe8re")),i.a.createElement("div",{className:"fixed top-right"},i.a.createElement("h2",null,i.a.createElement("span",{onClick:n,className:"clickable"},a?"Close":"More"))),i.a.createElement("div",{className:"fixed bottom-left"},a?null:i.a.createElement("h2",null,o))))},O=a(14),D=i.a.lazy((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,70))})),k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEnter=function(){n.setState({isAnimated:!0,muted:!1})},n.onExited=function(){n.setState({isAnimated:!1,muted:!1})},n.setDirection=function(e){n.setState({slideDirection:e})},n.toggleThumbs=function(){n.setState({showThumbs:!n.state.showThumbs})},n.setSlideDisplayed=function(e){n.setState((function(t){return{list:t.slides.map((function(t){return t===e?e.displayed=!0:null}))}}))},n.state={routes:[],slides:[],isAnimated:!1,slideDirection:"fade",showThumbs:!1,fetched:!1,muted:!0},n.onEnter=n.onEnter.bind(Object(u.a)(n)),n.onExited=n.onExited.bind(Object(u.a)(n)),n.setDirection=n.setDirection.bind(Object(u.a)(n)),n.toggleThumbs=n.toggleThumbs.bind(Object(u.a)(n)),n.setSlideDisplayed=n.setSlideDisplayed.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://boiling-bastion-11005.herokuapp.com/").then((function(e){return e.json()})).then((function(t){t.records.forEach((function(e,t){e.fields.withLabel=!0,void 0===e.fields.label&&(e.fields.label="v-"+e.id,e.fields.withLabel=!1)})),e.setState({slides:t.records});var a,n=Object(r.a)(t.records);try{for(n.s();!(a=n.n()).done;){var i=a.value;e.setState({routes:e.state.routes.concat({path:"/"+Object(v.a)(i.fields.label),slide:i,displayed:!1}),slides:t.records,isAnimated:!1,fetched:!0})}}catch(s){n.e(s)}finally{n.f()}})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.routes,s=t.slideDirection;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{basename:"/philippefragniere"},i.a.createElement(f.b,{exact:!0,path:"/"},a[0]?i.a.createElement(f.a,{push:!0,to:{pathname:a[0].path,state:{}}}):null),i.a.createElement(j,{state:this.state,showThumbs:this.state.showThumbs,toggleThumbs:this.toggleThumbs,setDirection:this.setDirection}),i.a.createElement("div",{className:"slider "+s+"-transition"},a.map((function(t){var a=t.path,s=t.slide;return i.a.createElement(f.b,{key:a,exact:!0,path:a},(function(t){var a=t.match;return i.a.createElement(p.a,{in:null!=a,timeout:{enter:800,exit:800},classNames:"slide",onEnter:e.onEnter,onExited:e.onExited,unmountOnExit:!0},i.a.createElement(n.Suspense,{fallback:i.a.createElement(O.a,null)},i.a.createElement(D,Object.assign({},s,{slides:e.state.slides,isAnimated:e.state.isAnimated,setDirection:e.setDirection,setSlideDisplayed:e.setSlideDisplayed,muted:e.state.muted}))))}))})))))}}]),a}(i.a.Component);var N=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.aec3a348.chunk.js.map