(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(17),a=n.n(c),i=n(32),s=n(14),o=n(5),u=n(3),l=(n(41),n(42),n(43),n(4)),d=n.n(l),f=n(6),j=n(12),h=n(19),b=n.n(h),p="?apikey=dWRWgogZNXfdk0HgKAeRAkpJ0nnMq5Yf",v="https://dataservice.accuweather.com/locations/v1/cities/autocomplete",O="https://dataservice.accuweather.com/forecasts/v1/daily/5day/",m="http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",y={query:function(e){return x.apply(this,arguments)},getWeather:function(e){return g.apply(this,arguments)},getCityFromGeolocation:function(e,t){return N.apply(this,arguments)}};function x(){return(x=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get(v+p+"&q="+t+"&language=en-us").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get(O+t.Key+p+"&language=en-us&details=true&metric=true").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(f.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get(m+p+"&q="+t+","+n).then((function(e){return e.data.Key})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={query:S,getById:function(e,t){return S(e).then((function(e){return e.find((function(e){return e.id===t}))}))},post:function(e,t){return t.id=k(),S(e).then((function(n){return n.unshift(t),T(e,n),t}))},remove:function(e,t){return S(e).then((function(n){var r=n.findIndex((function(e){return e.id===t}));n.splice(r,1),T(e,n)}))},saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t)||null)},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}};function S(e){var t=JSON.parse(localStorage.getItem(e))||[];return Promise.resolve(t)}function T(e,t){localStorage.setItem(e,JSON.stringify(t))}function k(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var E=function(e){e({type:"TOGGLE_UNIT"})},C=function(e){e({type:"TOGGLE_MODE"})},F=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_CITY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=n(1),L=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.cityList})),c=Object(r.useState)([]),a=Object(j.a)(c,2),i=a[0],s=a[1],o=e.listType;Object(r.useEffect)((function(){t(function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.query("favoriteCities");case 2:return n=e.sent,e.abrupt("return",Promise.resolve(t({type:"GET_FAVORITES",payload:n})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){s(e.payload)}))}),[i.length]);var l=function(e){s([]),t(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(n){var r,c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.query("favoriteCities");case 2:if(c=t.sent,a=c.find((function(t){return t.LocalizedName===e.LocalizedName}))){t.next=10;break}return t.next=7,w.post("favoriteCities",e);case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,w.remove("favoriteCities",a.id);case 12:r=t.sent;case 13:n({type:"SET_FAVORITES",payload:r});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},h=function(t){if("searchOptions"!==o||n!==[]&&n)return t.map((function(t,n){var r=i.find((function(e){return e.Key===t.Key}));return Object(I.jsxs)("div",{className:"item ui ".concat("favorites"===o?"card favorite-item five wide column":null," "),children:[Object(I.jsx)("div",{className:"header",onClick:function(){return e.onSelect(t)},tabIndex:"0",children:"favorites"===o?Object(I.jsxs)(I.Fragment,{children:[" ",Object(I.jsxs)("h3",{children:[Object(I.jsx)("i",{className:"".concat(t.Country.ID.toLowerCase()," flag")}),t.LocalizedName]}),Object(I.jsx)("h5",{children:"See Forecast"})]}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("p",{children:[Object(I.jsx)("i",{className:"".concat(t.Country.ID.toLowerCase()," flag")}),t.LocalizedName]})})},t.Key),Object(I.jsx)("div",{className:"favorites"===o?"ui clearing divider":null}),Object(I.jsxs)("div",{className:"description",onClick:function(){return l(t)},children:[Object(I.jsx)("i",{className:"plus circle icon"}),r?"Remove from Favorites":"Add to Favorites"]},t.LocalizedName)]},n)}))};return Object(I.jsx)("div",{className:"favorites"===o?"ui container":null,children:Object(I.jsxs)("div",{className:"favorites"===o&&i.length?"ui relaxed grid ":"ui divided list",children:["searchOptions"===o&&h(n),"favorites"===o&&h(i),"favorites"===o&&!i.length&&Object(I.jsxs)("div",{className:"favorites-empty-msg",children:[" ",Object(I.jsx)("p",{children:"It seems awfully empty in here! Why not search some cities, and add them to your favorites?"})]})]})})},D=n(33),A=n.n(D),M=function(){var e=Object(u.c)((function(e){return e.dayMode})),t=Object(r.useState)("Click to check the forecast for your location!"),n=Object(j.a)(t,2),c=n[0],a=n[1],i=Object(u.b)(),s=function(e){i(F(e.coords.latitude,e.coords.longtitude))},o=function(e){console.log(e),a("Please allow this app to access your location.")};return Object(I.jsxs)("div",{children:[Object(I.jsxs)("button",{className:e?"ui button labeled icon":"ui button inverted basic labeled violet icon",onClick:function(){navigator.geolocation.getCurrentPosition(s,o)},children:[Object(I.jsx)("i",{class:"location arrow icon"}),"Search My Location"]}),Object(I.jsx)("p",{children:c})]})},G=function(){var e=Object(u.b)(),t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),s=Object(j.a)(i,2),o=s[0],l=s[1],h=Object(r.useRef)(null),b=Object(u.c)((function(e){return e.city.LocalizedName})),p=Object(u.c)((function(e){return e.dayMode}));Object(r.useEffect)((function(){return document.addEventListener("mousedown",v),function(){return document.removeEventListener("mousedown",v)}}),[b]);var v=function(e){var t=h.current;t&&!t.contains(e.target)&&l(!1)},O=function(){var t=Object(f.a)(d.a.mark((function t(n){var r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(r=n.nativeEvent.data)){t.next=6;break}if((i=r.charCodeAt(0))>=65&&i<=90||i>=97&&i<=122){t.next=6;break}return t.abrupt("return");case 6:a(n.target.value),A()((function(){return e((t=c,function(){var e=Object(f.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.query(t);case 3:r=e.sent,n({type:"SEARCH_CITY",payload:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Had an error getting to AccuWeather API.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var t}),850)();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{ref:h,children:[Object(I.jsx)(M,{}),Object(I.jsx)("h3",{children:" Search a City..."}),Object(I.jsx)("input",{type:"text",placeholder:"Type to Search...",onChange:O,value:c,onClick:function(){return l(!o)},className:p?null:"night"}),Object(I.jsx)("div",{className:"options-list",style:o?{transform:"scaleY(1)"}:{transform:"scaleY(0)"},children:Object(I.jsx)(L,{onSelect:function(t){a(t.LocalizedName),e(F(t))},listType:"searchOptions"})})]})})},R=function(){var e,t=Object(u.b)(),n=Object(u.c)((function(e){return e.city})),c=Object(u.c)((function(e){return e.dayMode})),a=Object(u.c)((function(e){return e.unit})),i=Object(u.c)((function(e){return e.weather})),s=Object(r.useState)("Loading..."),o=Object(j.a)(s,2),l=o[0],h=o[1],b=Object(r.useState)("Loading"),p=Object(j.a)(b,2),v=p[0],O=p[1];Object(r.useEffect)((function(){var e;t((e=n,function(){var t=Object(f.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getWeather(e);case 3:r=t.sent,n({type:"GET_WEATHER",payload:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Had an error getting to AccuWeather API.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,n]),i.DailyForecasts?e=c?i.DailyForecasts[0].Day.Icon:i.DailyForecasts[0].Night.Icon:setTimeout((function(){h("We're having some technical difficulties! Please try again later."),O("Error")}),2e3);var m=function(t){if(e){var n=c?i.DailyForecasts[t].Temperature.Maximum.Value:i.DailyForecasts[t].Temperature.Minimum.Value;return a?Math.floor(n):Math.floor(9*n/5+32)}};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{children:!i.DailyForecasts&&Object(I.jsx)("div",{className:"ui card",children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsx)("h4",{children:v}),Object(I.jsx)("p",{children:l})]})})}),i.DailyForecasts&&Object(I.jsx)("div",{children:function(){if(e)return i.DailyForecasts.map((function(t,r){e=c?i.DailyForecasts[r].Day.Icon:i.DailyForecasts[r].Night.Icon;var a=c?i.DailyForecasts[r].Day.ShortPhrase:i.DailyForecasts[r].Night.ShortPhrase;return Object(I.jsx)("div",{className:" ui card",children:Object(I.jsxs)("div",{className:"content",children:[Object(I.jsxs)("h3",{className:"header",children:[n.LocalizedName," ",Object(I.jsx)("span",{children:t.Date.substring(5,10)})]}),Object(I.jsxs)("p",{className:"ui description",children:[e?e<10?Object(I.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/0".concat(e,"-s.png"),alt:"weather icon"}):Object(I.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png"),alt:"weather icon"}):void 0,m(r)," \xb0"]}),Object(I.jsx)("p",{children:a}),Object(I.jsx)("a",{href:i.Headline.Link,children:"See More"})]})},r)}))}()})]})},_=function(){return Object(I.jsxs)("div",{className:"ui container ",children:[Object(I.jsx)(G,{}),Object(I.jsx)(R,{})]})},z=function(){var e=Object(o.e)(),t=Object(u.b)();return Object(I.jsxs)("div",{className:"favorites-page",children:[Object(I.jsx)("p",{children:"Below you'll find your favorites. Clicking a favorite city will show you it's weather forecast."}),Object(I.jsx)("div",{className:"ui horizontal divider",children:"Your Favorites"}),Object(I.jsx)(L,{onSelect:function(n){t(F(n)),e.push("/")},listType:"favorites"})]})},W=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.unit})),n=Object(u.c)((function(e){return e.dayMode})),c=(new Date).getHours();Object(r.useEffect)((function(){c<18&&c<5&&e(C)}),[c]);return Object(I.jsxs)("div",{className:n?"ui secondary pointing menu":"ui secondary pointing menu night",children:[Object(I.jsx)(s.b,{to:"/",className:"item",children:Object(I.jsx)("h3",{children:"Weather"})}),Object(I.jsxs)("div",{className:"right menu",children:[Object(I.jsx)(s.b,{to:"/favorites",className:"item",children:Object(I.jsx)("h3",{children:"Favorites"})}),Object(I.jsxs)("button",{className:n?"ui button":"ui button inverted basic violet",onClick:function(){return e(E)},children:[t?"C":"F","\xb0"]}),Object(I.jsx)("button",{className:n?"ui labeled icon button":"ui button  labeled icon  inverted basic violet",onClick:function(){return e(C)},children:n?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("i",{className:"sun icon"}),"Day Mode"]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("i",{className:"moon icon"}),"Night Mode"]})})]})]})},q=function(){var e=Object(u.c)((function(e){return e.dayMode}));return Object(I.jsx)("div",{className:e?"background-day":"background-night",children:Object(I.jsx)("div",{className:e?"ui  container main-app ":"ui  container main-app night",children:Object(I.jsxs)(s.a,{children:[Object(I.jsx)(W,{}),Object(I.jsxs)("div",{className:"App ui container  app-main ",children:[Object(I.jsx)(o.a,{path:"/favorites",exact:!0,component:z}),Object(I.jsx)(o.a,{path:"/",exact:!0,component:_})]})]})})})},H=n(16),P={Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"},id:"WM8brNU"},Y=Object(f.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:[],n=r.length>1?r[1]:void 0,e.t0=n.type,e.next="SET_FAVORITES"===e.t0?5:"GET_FAVORITES"===e.t0?6:7;break;case 5:case 6:return e.abrupt("return",n.payload);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),J=Object(H.b)({cityList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_CITY":return t.payload;default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER":return t.payload;default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return t.payload;default:return e}},favoriteCities:Y,unit:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_UNIT":return!e;default:return e}},dayMode:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODE":return!e;default:return e}}}),K=Object(H.c)(J,Object(H.a)(i.a));a.a.render(Object(I.jsx)(u.a,{store:K,children:Object(I.jsx)(q,{})}),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0ae0b543.chunk.js.map