(this["webpackJsonpreact-color"]=this["webpackJsonpreact-color"]||[]).push([[0],{15:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),o=c(7),s=c.n(o),i=(c(15),c(3)),l=c(23),a=c(1),u=function(e){return Object(a.jsx)(l.a,{color:e.color,onClick:function(){return e.onClick()},children:e.children})},j=c(9),b=c(10),f=function(e){var t=e.resetLvl,c=e.background,r=e.boxes,o=Object(n.useState)([]),s=Object(i.a)(o,2),l=s[0],f=s[1],d=Object(n.useState)(1),O=Object(i.a)(d,2),h=O[0],x=O[1],v=Object(n.useState)(0),m=Object(i.a)(v,2),g=m[0],p=m[1],k=e.trueColor;Object(n.useEffect)((function(){f(c)}),[c]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"d-flex justify-content-between my-3",children:[Object(a.jsxs)("h2",{children:["score: ",g]}),Object(a.jsx)(u,{onClick:function(){p(0)},color:"danger",children:"reset score"})]}),Object(a.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:l.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"box p-5 my-3",style:{background:e},onClick:function(){return function(e){var n=c.indexOf(e);if(e===k)alert("Good job! You get it after ".concat(h," attempts, and recive ").concat(r-h+1," points!")),x(1),p(g+r-h+1),t();else{if(n>-1){c.splice(n,1);var o=Object(j.a)(c);f(o)}x(h+1),console.log(h)}}(e)}})},Object(b.a)())}))})]})},d=function(e){for(var t="#",c="abcdef0123456789",n=c.length,r=0;r<e;r++)t+=c.charAt(Math.floor(Math.random()*n));return t},O=function(){var e=Object(n.useState)(3),t=Object(i.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),l=s[0],j=s[1],b=Object(n.useState)(""),O=Object(i.a)(b,2),h=O[0],x=O[1];Object(n.useEffect)((function(){v()}),[c]);var v=function(){for(var e=[],t=0;t<c;t++){var n=d(6);e.push(n)}var r=e[Math.floor(Math.random()*e.length)];x(r),j(e)},m=function(e){r(e)},g=function(){v()};return Object(a.jsxs)("div",{className:"container w-25 d-flex flex-column mt-5",children:[Object(a.jsxs)("h3",{children:["Guess the color: ",h]}),Object(a.jsxs)("div",{className:"d-flex justify-content-between border-bottom border-dark pb-3",children:[Object(a.jsx)(u,{onClick:function(){return m(3)},color:"success",children:"lvl 1"}),Object(a.jsx)(u,{onClick:function(){return m(6)},color:"success",children:"lvl 2"}),Object(a.jsx)(u,{onClick:function(){return m(9)},color:"success",children:"lvl 3"}),Object(a.jsx)(u,{onClick:function(){return g()},color:"danger",children:"RESET LVL"})]}),Object(a.jsx)(f,{resetLvl:function(){return g()},boxes:c,background:l,trueColor:h})]})};var h=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),o(e),s(e)}))};c(19),c(20);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.8a657a6d.chunk.js.map