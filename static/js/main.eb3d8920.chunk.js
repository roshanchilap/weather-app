(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),s=a.n(r),i=(a(12),a(4)),o=a.n(i),u=a(7),d=a(2),h=a(0),l="https://api.openweathermap.org/data/2.5/";var b=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),b=i[0],j=i[1],m=Object(n.useState)("Mumbai"),p=Object(d.a)(m,2),f=p[0],O=p[1];Object(n.useEffect)((function(){v()}),[f]);var v=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"weather?q=").concat(f,"&units=metric&APPID=").concat("e9c23a5ff82c35e0b6de95d3f59c2de4"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a(15).config(),Object(h.jsx)("div",{className:"undefined"!=typeof c.main&&c.main.temp<16?"app":"app warm",children:Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"search-box",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(b),j("")},className:"search-form",children:[Object(h.jsx)("input",{type:"text",className:"search-bar",placeholder:"Weather in your city...",value:b,onChange:function(e){j(e.target.value)}}),Object(h.jsx)("button",{className:"searchButton",type:"submit",children:"Search"})]})}),"undefined"!=typeof c.main?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"location-box",children:[Object(h.jsxs)("div",{className:"location",children:[c.name,", ",c.sys.country]}),Object(h.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(h.jsxs)("div",{className:"weather-box",children:[Object(h.jsxs)("div",{className:"temp",children:[Math.round(c.main.temp),"\xb0c"]}),Object(h.jsx)("div",{className:"weather",children:c.weather[0].main})]})]}):""]})})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),j()}},[[18,1,2]]]);
//# sourceMappingURL=main.eb3d8920.chunk.js.map