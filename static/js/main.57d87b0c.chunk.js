(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(18),c=n.n(a),i=n(32),s=n(13),o=n(5),u=n(4),l=n(2),d=n.n(l),f=n(6),j=n(17),h=n.n(j),p="?apikey=dWRWgogZNXfdk0HgKAeRAkpJ0nnMq5Yf",b="https://dataservice.accuweather.com/locations/v1/cities/autocomplete",v="https://dataservice.accuweather.com/forecasts/v1/daily/5day/",O="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",m={query:function(e){return y.apply(this,arguments)},getWeather:function(e){return x.apply(this,arguments)},getCityFromGeolocation:function(e,t){return N.apply(this,arguments)},getWeatherFromKey:function(e){return g.apply(this,arguments)}};function y(){return(y=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.get(b+p+"&q="+t+"&language=en-us").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.get(v+t.Key+p+"&language=en-us&details=true&metric=true").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.get(v+t+p+"&language=en-us&details=true&metric=true").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(f.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.get(O+p+"&q="+t+","+n).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={query:T,getById:function(e,t){return T(e).then((function(e){return e.find((function(e){return e.id===t}))}))},post:function(e,t){return t.id=S(),T(e).then((function(n){return n.unshift(t),k(e,n),t}))},remove:function(e,t){return T(e).then((function(n){var r=n.findIndex((function(e){return e.id===t}));n.splice(r,1),k(e,n)}))},saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t)||null)},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}};function T(e){var t=JSON.parse(localStorage.getItem(e))||[];return Promise.resolve(t)}function k(e,t){localStorage.setItem(e,JSON.stringify(t))}function S(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var F=function(e){e({type:"TOGGLE_UNIT"})},E=function(e){e({type:"TOGGLE_MODE"})},C=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_CITY",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.query("favoriteCities");case 2:return n=e.sent,e.abrupt("return",Promise.resolve(t({type:"GET_FAVORITES",payload:n})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(f.a)(d.a.mark((function t(n){var r,a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.query("favoriteCities");case 2:if(a=t.sent,c=a.find((function(t){return t.LocalizedName===e.LocalizedName}))){t.next=10;break}return t.next=7,w.post("favoriteCities",e);case 7:r=t.sent,t.next=13;break;case 10:return t.next=12,w.remove("favoriteCities",c.id);case 12:r=t.sent;case 13:n({type:"SET_FAVORITES",payload:r});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=(n(60),n(61),n(12)),A=n(1),M=function(e){var t=e.listType,n=e.city,r=e.isInFavorites,a=e.toggleFavoriteCity;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"item ui ".concat("favorites"===t?"card favorite-item five wide column":"search-result"," "),children:[Object(A.jsx)("div",{className:"header",onClick:function(){return e.onSelect(n)},tabIndex:"0",children:"fonselectavorites"===t?Object(A.jsxs)(A.Fragment,{children:[" ",Object(A.jsxs)("h3",{children:[Object(A.jsx)("i",{className:"".concat(n.Country.ID.toLowerCase()," flag")}),n.LocalizedName]}),Object(A.jsx)("h5",{children:"See Forecast"})]}):Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("p",{children:[Object(A.jsx)("i",{className:"".concat(n.Country.ID.toLowerCase()," flag")}),n.LocalizedName]})})}),"favorites"===t&&Object(A.jsx)("div",{className:"ui clearing divider"}),Object(A.jsxs)("div",{className:"description",onClick:function(){return a(n)},children:[Object(A.jsx)("i",{className:"plus circle icon"}),r?"Remove from Favorites":"Add to Favorites"]})]},n.id)})},G=function(e){var t=Object(o.e)(),n=Object(u.b)(),a=Object(u.c)((function(e){return e.cityList})),c=Object(r.useState)([]),i=Object(L.a)(c,2),s=i[0],l=i[1],j=e.listType;Object(r.useEffect)((function(){n(I()).then((function(e){l(e.payload)}))}),[]);var h=function(){var e=Object(f.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(D(t));case 2:return e.next=4,n(I());case 4:r=e.sent,l(r.payload);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){n(C(e)),t.push("/")},b=function(e){if("searchOptions"!==j||a!==[]&&a)return e.map((function(e){var t=s.find((function(t){return t.Key===e.Key}));return Object(A.jsx)(M,{isInFavorites:t,city:e,listType:j,toggleFavoriteCity:h,onSelect:p},e.Key)}))};return Object(A.jsx)("div",{className:"favorites"===j?"ui container":null,children:Object(A.jsxs)("div",{className:"favorites"===j&&s.length?"ui relaxed grid ":"ui divided list",children:["searchOptions"===j&&b(a),"favorites"===j&&b(s),"favorites"===j&&!s.length&&Object(A.jsxs)("div",{className:"favorites-empty-msg",children:[" ",Object(A.jsx)("p",{children:"It seems awfully empty in here! Why not search some cities, and add them to your favorites?"})]})]})})},W=n(33),_=n.n(W),R=function(){var e=Object(u.c)((function(e){return e.dayMode})),t=Object(r.useState)("Click to check the forecast for your location!"),n=Object(L.a)(t,2),a=n[0],c=n[1],i=Object(u.b)(),s=function(e){var t,n;i((t=e.coords.latitude,n=e.coords.longitude,function(){var e=Object(f.a)(d.a.mark((function e(r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getCityFromGeolocation(t,n);case 3:return a=e.sent,e.next=6,m.getWeather(a);case 6:c=e.sent,r({type:"GET_WEATHER",payload:c}),r({type:"SET_CITY",payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()))},o=function(e){console.log(e),c("Please allow this app to access your location.")};return Object(A.jsxs)("div",{children:[Object(A.jsxs)("button",{className:e?"ui button labeled icon":"ui button inverted basic labeled violet icon",onClick:function(){navigator.geolocation.getCurrentPosition(s,o)},children:[Object(A.jsx)("i",{className:"location arrow icon"}),"Search My Location"]}),Object(A.jsx)("p",{children:a})]})},z=function(){var e=Object(u.b)(),t=Object(r.useState)(""),n=Object(L.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(!1),s=Object(L.a)(i,2),o=s[0],l=s[1],j=Object(r.useRef)(null),h=Object(u.c)((function(e){return e.city.LocalizedName})),p=Object(u.c)((function(e){return e.dayMode}));Object(r.useEffect)((function(){return document.addEventListener("mousedown",b),function(){return document.removeEventListener("mousedown",b)}}),[h]);var b=function(e){var t=j.current;t&&!t.contains(e.target)&&l(!1)},v=function(){var t=Object(f.a)(d.a.mark((function t(n){var r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(r=n.nativeEvent.data)){t.next=6;break}if((i=r.charCodeAt(0))>=65&&i<=90||i>=97&&i<=122){t.next=6;break}return t.abrupt("return");case 6:if(c(n.target.value),n.target.value){t.next=9;break}return t.abrupt("return");case 9:_()((function(){return e((t=a,function(){var e=Object(f.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.query(t);case 3:r=e.sent,n({type:"SEARCH_CITY",payload:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Had an error getting to AccuWeather API.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()));var t}),850)();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{ref:j,children:[Object(A.jsx)(R,{}),Object(A.jsx)("h3",{children:" Search a City..."}),Object(A.jsx)("input",{type:"text",placeholder:"Type to Search...",onChange:v,value:a,onClick:function(){return l(!o)},className:p?null:"night"}),Object(A.jsx)("div",{className:"options-list",style:o?{transform:"scaleY(1)"}:{transform:"scaleY(0)"},children:Object(A.jsx)(G,{onSelect:function(t){c(t.LocalizedName),e(C(t))},listType:"searchOptions"})})]})})},H=function(){var e,t=Object(u.b)(),n=Object(u.c)((function(e){return e.city})),a=Object(u.c)((function(e){return e.dayMode})),c=Object(u.c)((function(e){return e.unit})),i=Object(u.c)((function(e){return e.weather})),s=Object(r.useState)("Loading..."),o=Object(L.a)(s,2),l=o[0],j=o[1],h=Object(r.useState)("Loading"),p=Object(L.a)(h,2),b=p[0],v=p[1];Object(r.useEffect)((function(){var e;t((e=n,function(){var t=Object(f.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.getWeather(e);case 3:r=t.sent,n({type:"GET_WEATHER",payload:r}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Had an error getting to AccuWeather API.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,n]),i.DailyForecasts?e=a?i.DailyForecasts[0].Day.Icon:i.DailyForecasts[0].Night.Icon:setTimeout((function(){j("We're having some technical difficulties! Please try again later."),v("Error")}),2e3);var O=function(t){if(e){var n=a?i.DailyForecasts[t].Temperature.Maximum.Value:i.DailyForecasts[t].Temperature.Minimum.Value;return c?Math.floor(n):Math.floor(9*n/5+32)}};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{children:!i.DailyForecasts&&Object(A.jsx)("div",{className:"ui card",children:Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)("h4",{children:b}),Object(A.jsx)("p",{children:l})]})})}),i.DailyForecasts&&Object(A.jsx)("div",{children:function(){if(e)return i.DailyForecasts.map((function(t,r){e=a?i.DailyForecasts[r].Day.Icon:i.DailyForecasts[r].Night.Icon;var c=a?i.DailyForecasts[r].Day.ShortPhrase:i.DailyForecasts[r].Night.ShortPhrase;return Object(A.jsx)("div",{className:a?"ui card":"ui card night",children:Object(A.jsxs)("div",{className:"content",children:[Object(A.jsxs)("h3",{className:"header",children:[n.LocalizedName," ",Object(A.jsx)("span",{children:t.Date.substring(5,10)})]}),Object(A.jsxs)("p",{className:"ui description",children:[e?e<10?Object(A.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/0".concat(e,"-s.png"),alt:"weather icon"}):Object(A.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e,"-s.png"),alt:"weather icon"}):void 0,O(r)," \xb0"]}),Object(A.jsx)("p",{children:c}),Object(A.jsx)("a",{href:i.Headline.Link,children:"See More"})]})},r)}))}()})]})},q=function(){return Object(A.jsxs)("div",{className:"ui container ",children:[Object(A.jsx)(z,{}),Object(A.jsx)(H,{})]})},P=function(){var e=Object(o.e)(),t=Object(u.b)();return Object(A.jsxs)("div",{className:"favorites-page",children:[Object(A.jsx)("p",{children:"Below you'll find your favorites. Clicking a favorite city will show you it's weather forecast."}),Object(A.jsx)("div",{className:"ui horizontal divider",children:"Your Favorites"}),Object(A.jsx)(G,{onSelect:function(n){t(C(n)),e.push("/")},listType:"favorites"})]})},Y=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.unit})),n=Object(u.c)((function(e){return e.dayMode}));return Object(A.jsxs)("div",{className:n?"ui secondary pointing menu":"ui secondary pointing menu night",children:[Object(A.jsx)(s.b,{to:"/",className:"item",children:Object(A.jsx)("h3",{children:"Weather"})}),Object(A.jsxs)("div",{className:"right menu",children:[Object(A.jsx)(s.b,{to:"/favorites",className:"item",children:Object(A.jsx)("h3",{children:"Favorites"})}),Object(A.jsxs)("button",{className:n?"ui button":"ui button inverted basic violet",onClick:function(){return e(F)},children:[t?"C":"F","\xb0"]}),Object(A.jsx)("button",{className:n?"ui labeled icon button":"ui button  labeled icon  inverted basic violet",onClick:function(){return e(E)},children:n?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("i",{className:"sun icon"}),"Day Mode"]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("i",{className:"moon icon"}),"Night Mode"]})})]})]})},J=function(){var e=(new Date).getHours(),t=Object(u.b)();Object(r.useEffect)((function(){e<18&&e<5&&t(E)}),[]);var n=Object(u.c)((function(e){return e.dayMode}));return Object(A.jsx)("div",{className:n?"background-day":"background-night",children:Object(A.jsx)("div",{className:n?"ui  container main-app ":"ui  container main-app night",children:Object(A.jsxs)(s.a,{children:[Object(A.jsx)(Y,{}),Object(A.jsxs)("div",{className:"App ui container  app-main ",children:[Object(A.jsx)(o.a,{path:"/favorites",exact:!0,component:P}),Object(A.jsx)(o.a,{path:"/",exact:!0,component:q})]})]})})})},K=n(16),V={Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"},id:"WM8brNU"},U=Object(f.a)(d.a.mark((function e(){var t,n,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:[],n=r.length>1?r[1]:void 0,e.t0=n.type,e.next="SET_FAVORITES"===e.t0?5:"GET_FAVORITES"===e.t0?6:7;break;case 5:case 6:return e.abrupt("return",n.payload);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),B=Object(K.b)({cityList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_CITY":return t.payload;default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER":return t.payload;default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY":return t.payload;default:return e}},favoriteCities:U,unit:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_UNIT":return!e;default:return e}},dayMode:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODE":return!e;default:return e}}}),X=Object(K.c)(B,Object(K.a)(i.a));c.a.render(Object(A.jsx)(u.a,{store:X,children:Object(A.jsx)(J,{})}),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.57d87b0c.chunk.js.map