(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t){},145:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(71),o=c.n(r),s=(c(57),c(32)),l=c(27),u=c(42),j=c(12),i=c(37),b=c(180),h=c(181),O=c(182),d=c(183),p=c(184),x=c(2);function f(e){return Object(x.jsxs)(b.a,{children:[Object(x.jsx)(h.a,{children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(d.a,{children:"School"}),Object(x.jsx)(d.a,{children:"Subject"}),Object(x.jsx)(d.a,{children:"Course"}),Object(x.jsx)(d.a,{children:"Notes"})]})}),Object(x.jsx)(p.a,{children:e.rows.map((function(e,t){return Object(x.jsxs)(O.a,{children:[Object(x.jsx)(d.a,{children:e.school}),Object(x.jsx)(d.a,{children:e.subject}),Object(x.jsx)(d.a,{children:e.course||"--"}),Object(x.jsx)(d.a,{children:e.notes})]},t)}))})]})}var g=c(75),v=c.n(g),C=c(76),S=c.n(C);function m(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(Object(s.a)().mark((function e(t){var c,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://localhost:3001/get?".concat(S.a.stringify(t)),n={method:"get",url:c,params:{},headers:{}},e.next=4,v()(n).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=c(47),N=c(178);function B(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({}),o=Object(j.a)(r,2),b=o[0],h=o[1],O=Object(n.useState)(!0),d=Object(j.a)(O,2),p=d[0],g=d[1];function v(){return(v=Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,m(b).then((function(e){a(e.rows)})).catch((function(e){return console.log("error getting notes")})).finally((function(){return g(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[b]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{class:"header",children:[Object(x.jsx)("p",{class:"logo",children:" NFF"}),Object(x.jsx)("button",{class:"button",children:" + "})]}),Object(x.jsxs)("div",{class:"body",children:[Object(x.jsx)("h1",{class:"text",children:" Welcome To NoteFinder Free! To start, search up notes on a particular topic (Ex. Trees), and feel free to search by your school if need be!"}),Object(x.jsxs)("div",{class:"Scroll",children:[Object(x.jsx)(w.a,{class:"schoolScroll",label:"School",options:[{value:"CUNY Hunter College",label:"CUNY Hunter College"},{value:"Staten Island College",label:"Staten Island College"},{value:"Kings Borough College",label:"Kings Borough College"}],placeholder:"School",onChange:function(e){var t=e.value,c=t?Object(l.a)(Object(l.a)({},b),{},{school:t}):Object(i.omit)(b,"school");h(c)}}),Object(x.jsx)(w.a,{placeholder:"Subject",label:"Subject",options:[{value:"Data Structures & Algorithms",label:"Data Structures & Algorithms"},{value:"Biology",label:"Biology"},{value:"Computer Science",label:"Computer Science"}],onChange:function(e){var t=e.value,c=t?Object(l.a)(Object(l.a)({},b),{},{subject:t}):Object(i.omit)(b,"subject");h(c)}}),Object(x.jsx)(w.a,{label:"Course",options:[{value:"CSCI 335",label:"CSCI 335"}],placeholder:"Course",onChange:function(e){var t=e.value,c=t?Object(l.a)(Object(l.a)({},b),{},{course:t}):Object(i.omit)(b,"course");h(c)}}),Object(x.jsx)(N.a,{class:"searchBar",fullWidth:!0,placeholder:"Notes",type:"text",onChange:function(e){var t=e.target.value,c=t?Object(l.a)(Object(l.a)({},b),{},{notes:t}):Object(i.omit)(b,"notes");h(c)}})]}),!p&&Object(x.jsx)(f,{rows:c})]})]})}var F=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(B,{})})};o.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}))},57:function(e,t,c){}},[[145,1,2]]]);
//# sourceMappingURL=main.4dbb2a4c.chunk.js.map