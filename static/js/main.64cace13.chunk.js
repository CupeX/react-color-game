(this["webpackJsonpreact-color"]=this["webpackJsonpreact-color"]||[]).push([[0],{27:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r.n(o),n=r(13),s=r.n(n),a=(r(27),r(11)),l=r(5),i=r(10),u=function(e){for(var t="#",r="abcdef0123456789",o=r.length,c=0;c<e;c++)t+=r.charAt(Math.floor(Math.random()*o));return t},m=function(e){var t=Array.from(Array(e).keys()).map((function(){return u(6)}));return{newColors:t,trueColor:t[Math.floor(Math.random()*t.length)]}},d=Object(i.b)({name:"gameInProgress",initialState:{trueColor:"",colors:[],score:0,attempts:0,activeLevel:"easy",allGenerated:!0,activeLvlBoxCount:3,maxPoints:3},reducers:{setScore:function(e,t){e.score=t.payload},setTrueColor:function(e,t){e.trueColor=t.payload},setColors:function(e,t){e.colors=t.payload},attemptsIncrement:function(e){e.attempts++},attemptsReset:function(e){e.attempts=0},setAllGenerated:function(e,t){e.allGenerated=t.payload},setBoxesNumber:function(e,t){d.caseReducers.startNewGame(e,t.payload),e.activeLvlBoxCount=t.payload,e.maxPoints=t.payload},startNewGame:function(e,t){var r=m(t),o=r.newColors,c=r.trueColor;e.trueColor=c,e.colors=o,e.allGenerated=!0},useHint:function(e){var t=e.colors.filter((function(t){return t!==e.trueColor})),r=Math.floor(t.length/2),o=t.splice(0,r).concat(e.trueColor).sort((function(){return Math.random()>.5?1:-1}));e.attempts=0,e.colors=o,e.maxPoints=r+1}}}),b=d.actions,j=b.setTrueColor,f=b.setScore,v=b.setColors,h=b.setBoxesNumber,x=b.attemptsIncrement,O=b.attemptsReset,p=b.setAllGenerated,C=b.startNewGame,N=b.useHint,g=b.checkForRightColor,y=d.reducer,L=function(){var e=Object(l.c)((function(e){return e.gameInProgress})),t=e.allGenerated,r=e.score,o=e.attempts,c=e.colors,n=e.trueColor,s=e.activeLevel,a=e.maxPoints,i=e.activeLvlBoxCount;return{setBoxesNumber:h,setTrueColor:j,setColors:v,attemptsIncrement:x,setScore:f,attemptsReset:O,setAllGenerated:p,allGenerated:t,score:r,attempts:o,colors:c,trueColor:n,activeLevel:s,startNewGame:C,useHint:N,maxPoints:a,checkForRightColor:g,activeLvlBoxCount:i}},k=function(){var e=Object(l.b)(),t=L(),r=t.score,o=t.attempts,c=t.maxPoints,n=t.trueColor,s=t.activeLvlBoxCount,a=t.colors,i=t.attemptsIncrement,u=t.setColors,m=t.setScore,d=t.attemptsReset,b=t.setBoxesNumber;return{checkColor:function(t){t===n?(alert("Good job! You get it after ".concat(o+1," attempts, and recive ").concat(c-o," points!")),e(m(r+c-o)),e(b(s)),e(d())):(e(i()),e(u(a.filter((function(e){return t!==e})))))}}},B=r(1),S=function(){var e=L().colors,t=k().checkColor;return Object(B.jsx)("div",{className:"d-flex flex-wrap justify-content-center align-items-center overflow-auto col-8 vh-100 p-3",children:Object(B.jsx)("div",{className:"d-flex flex-wrap justify-content-between align-items-center overflow-auto",children:e.map((function(e){return Object(B.jsx)("div",{className:"",children:Object(B.jsx)("button",{className:"p-5 m-1",style:{background:e},onClick:function(){return function(e){t(e)}(e)}})},Object(a.a)())}))})})},w=r(39),G=Object(i.b)({name:"gameSettings",initialState:{activeColorDisplayFormat:"hex",defaultLevels:[{label:"easy",boxesNumber:3},{label:"medium",boxesNumber:6},{label:"hard",boxesNumber:9}],customLevels:[]},reducers:{setActiveColorDisplayFormat:function(e,t){e.activeColorDisplayFormat=t.payload},setCustomLevels:function(e,t){e.customLevels.push(t.payload)},deleteCustomLevels:function(e){e.customLevels=[]}}}),F=G.actions,H=F.setActiveColorDisplayFormat,P=F.setCustomLevels,A=F.deleteCustomLevels,I=G.reducer,M=function(e){return Object(B.jsx)(w.a,{color:e.color,onClick:function(){return e.onClick()},className:e.className,children:e.children})},D=function(e){return Object(B.jsxs)("div",{onChange:function(t){return e.onChange(t.target.value)},children:[Object(B.jsx)("div",{className:"form-check form-check-inline",children:Object(B.jsxs)("label",{className:"form-check-label",htmlFor:"hex",children:["HEX",Object(B.jsx)("input",{className:"form-check-input",id:"hex",type:"radio",value:"hex",name:"color"})]})}),Object(B.jsx)("div",{className:"form-check form-check-inline",children:Object(B.jsxs)("label",{className:"form-check-label",htmlFor:"rgb",children:["RGB",Object(B.jsx)("input",{className:"form-check-input",id:"rgb",type:"radio",value:"rgb",name:"color"})]})}),Object(B.jsx)("div",{className:"form-check form-check-inline",children:Object(B.jsxs)("label",{className:"form-check-label",htmlFor:"hsl",children:["HSL",Object(B.jsx)("input",{className:"form-check-input",id:"hsl",type:"radio",value:"hsl",name:"color"})]})})]})},R=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),r=parseInt(t[1],16),o=parseInt(t[2],16),c=parseInt(t[3],16);r/=255,o/=255,c/=255;var n,s,a=Math.max(r,o,c),l=Math.min(r,o,c),i=(a+l)/2;if(a==l)n=s=0;else{var u=a-l;switch(s=i>.5?u/(2-a-l):u/(a+l),a){case r:n=(o-c)/u+(o<c?6:0);break;case o:n=(c-r)/u+2;break;case c:n=(r-o)/u+4}n/=6}return s*=100,s=Math.round(s),i*=100,i=Math.round(i),(n=Math.round(360*n))+", "+s+"%, "+i+"%"},E=function(e){for(var t=e.substring(1).match(/.{1,2}/g),r=[],o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],c=0;c<t.length;c++){var n=16*o.indexOf(t[c][0])+o.indexOf(t[c][1]);r.push(n)}return r.join(", ")},T=function(e,t){var r,o;return Object(B.jsx)("h2",{style:{display:"inline"},children:(r=e,o=t,"hex"==o?r:"rgb"==o?E(r):"hsl"==o?R(r):void 0)},Object(a.a)())},J=function(){var e=Object(l.c)((function(e){return e.gameSettings})),t=e.defaultLevels,r=e.hintActive,o=e.customLevels,c=e.activeColorDisplayFormat,n=e.initialBoxNumber;return{setCustomLevels:P,deleteCustomLevels:A,defaultLevels:t,hintActive:r,customLevels:o,activeColorDisplayFormat:c,initialBoxNumber:n}},z=r(40),V=r(41),X=r(20),Y=r(42),$=r(17),q=function(){var e=Object(l.b)(),t=J(),r=t.deleteCustomLevels,c=t.setCustomLevels,n=Object(o.useState)(""),s=Object($.a)(n,2),a=s[0],i=s[1],u=Object(o.useState)(""),m=Object($.a)(u,2),d=m[0],b=m[1];return{customLvlName:a,customLvlBoxes:d,setCustomLvlBoxes:b,setCustomLvlName:i,customLvlNameHandler:function(e){i(e)},customLvlBoxesHandler:function(e){b(e)},deleteCustomLvlsHandler:function(){e(r())},formSubmissionHandler:function(t){(t.preventDefault(),""===a&&""===d)?alert("Please, fill all fields!"):(i(""),b(""),e(c({label:a,boxesNumber:+d})))}}},K=function(){var e=q(),t=e.customLvlName,r=e.customLvlBoxes,o=e.customLvlNameHandler,c=e.customLvlBoxesHandler,n=e.deleteCustomLvlsHandler,s=e.formSubmissionHandler;return Object(B.jsxs)("div",{children:[Object(B.jsxs)("form",{onSubmit:function(e){return s(e)},children:[Object(B.jsxs)(z.a,{className:"my-2",children:[Object(B.jsx)(V.a,{addonType:"prepend",children:Object(B.jsx)(X.a,{children:"add custom lvl name:"})}),Object(B.jsx)(Y.a,{type:"text",name:"lvl name",value:t,onChange:function(e){return o(e.target.value)}})]}),Object(B.jsxs)(z.a,{className:"my-2",children:[Object(B.jsx)(V.a,{addonType:"prepend",children:Object(B.jsx)(X.a,{children:"add number of boxes:"})}),Object(B.jsx)(Y.a,{type:"number",name:"lvls",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(B.jsx)(w.a,{type:"submit",color:"success",className:"m-2",children:"add custom lvl"})]}),Object(B.jsx)(w.a,{onClick:function(){return n()},type:"btn",color:"danger",className:"m-2",children:"delete custom levels"})]})},Q=function(){var e=Object(l.b)(),t=J(),r=t.defaultLevels,o=t.customLevels,c=t.activeColorDisplayFormat,n=L(),s=n.setBoxesNumber,i=n.score,u=n.trueColor,m=n.useHint,d=n.setScore,b=n.activeLvlBoxCount,j=function(t){e(s(t))};return Object(B.jsxs)("div",{className:"col-4 vh-100",children:[Object(B.jsxs)("div",{className:"d-flex justify-content-between border-bottom border-dark my-3 pb-3",children:[Object(B.jsxs)("h2",{children:["score: ",i]}),Object(B.jsx)(M,{onClick:function(){e(d(0))},color:"danger",children:"reset score"})]}),Object(B.jsxs)("div",{className:"border-bottom border-dark",children:[Object(B.jsx)("h3",{children:"Guess the color?"}),T(u,c),Object(B.jsx)(D,{onChange:function(t){return function(t){e(H(t))}(t)}})]}),Object(B.jsxs)("div",{className:"border-bottom border-dark my-3",children:[Object(B.jsxs)("div",{className:"d-flex justify-content-between border-bottom border-dark pb-3",children:[r.map((function(e){return Object(B.jsx)(w.a,{onClick:function(){return j(e.boxesNumber)},color:"success",className:"mx-1",children:e.label},Object(a.a)())})),Object(B.jsx)(M,{onClick:function(){return j(b)},color:"danger",children:"RESET LVL"})]}),Object(B.jsxs)("div",{className:"overflow-auto my-3",style:{maxHeight:"20vh"},children:[Object(B.jsx)("h5",{children:"Custom levels:"}),o.map((function(e){return Object(B.jsx)(w.a,{id:Object(a.a)(),onClick:function(){return j(e.boxesNumber)},color:"success",className:"m-2",children:e.label},Object(a.a)())}))]}),Object(B.jsx)(K,{})]}),Object(B.jsx)(w.a,{color:"primary",onClick:function(){e(m())},children:"NEED HELP?"})]})},U=function(){var e=Object(l.b)(),t=L(),r=t.activeLvlBoxCount,c=t.allGenerated,n=t.setBoxesNumber,s=t.colors;return Object(o.useEffect)((function(){0===s.length&&e(n(r))}),[]),Object(B.jsx)("div",{children:c?Object(B.jsxs)("div",{className:"d-flex container",children:[Object(B.jsx)(Q,{}),Object(B.jsx)(S,{})]}):Object(B.jsx)("h1",{children:"Generating data..."})})};var W=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(U,{})})},Z=r(4),_=r(21),ee=r.n(_),te=r(9),re=Object(Z.b)({gameInProgress:y,gameSettings:I}),oe={key:"root",storage:ee.a,version:1},ce=Object(te.g)(oe,re),ne=Object(i.a)({reducer:ce,middleware:Object(i.c)({serializableCheck:{ignoredActions:[te.a,te.f,te.b,te.c,te.d,te.e]}})}),se=Object(te.h)(ne),ae=ne,le=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,43)).then((function(t){var r=t.getCLS,o=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),o(e),c(e),n(e),s(e)}))},ie=r(22);r(36),r(37);s.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(l.a,{store:ae,children:Object(B.jsx)(ie.a,{loading:null,persistor:se,children:Object(B.jsx)(W,{})})})}),document.getElementById("root")),le()}},[[38,1,2]]]);
//# sourceMappingURL=main.64cace13.chunk.js.map