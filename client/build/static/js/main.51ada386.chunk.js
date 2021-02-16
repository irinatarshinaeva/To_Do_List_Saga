(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),r=n.n(a),s=n(21),i=n.n(s),u=(n(43),n(44),n(17)),o=n(7);var l=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(u.b,{activeClassName:"active",className:"navbar-brand",to:"/",children:"Home"}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.b,{className:"nav-link",to:"/redux",children:"Thunk"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.b,{className:"nav-link",to:"/context",children:"Context"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(u.b,{className:"nav-link",to:"/saga",children:"Saga"})})]})})]})})},j=n(10),b=n(6),d=n.n(b),x=n(32),f="ADD",p="EDIT",O="DELETE",h="STATUS",m="STATUS_SAGA",v="DELETE_SAGA",y="ADD_TASK_SAGA",k="ADD_ALL",N="GET_ALL_SAGA",g=function(e){return{type:f,payload:e}},D=function(e){return{type:k,payload:e}},w=function(e){return{type:O,payload:e}},S=function(e){return{type:h,payload:e}},T=n(16);var A=function(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],r=t[1],s=Object(j.useDispatch)();return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),s((t=n,function(){var e=Object(x.a)(d.a.mark((function e(n,c){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})});case 2:if(200!==(a=e.sent).status){e.next=8;break}return e.next=6,a.json();case 6:r=e.sent,n(g(r));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())),r("")},className:"d-flex flex-column",children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)("input",{type:"text",value:n,placeholder:"Task",onChange:function(e){var t=e.target.value;r(t)},className:"form-control"})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},E=n(9),C=n(10).useDispatch;var _=function(e){var t=e.index,n=e.text,a=e._id,r=e.status,s=C();return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(c.jsxs)("span",{className:"d-flex align-items-center tasksText ".concat(r&&"done"),children:[t+1,".\xa0",n]}),Object(c.jsxs)("span",{className:"d-flex",children:[Object(c.jsx)("button",{onClick:function(){var e;s((e=a,function(t,n){fetch("/tasks/".concat(e),{method:"PATCH"}).then((function(e){if(200===e.status)return e.json()})).then((function(n){return n&&t(S(e))}))}))},type:"button",className:"btn btn-".concat(r?"dark":"success"," mx-1"),children:r?"UnDone":"Done"}),Object(c.jsx)("button",{onClick:function(){var e;s((e=a,function(t,n){fetch("/tasks/".concat(e),{method:"DELETE"}).then((function(n){return 200===n.status&&t(w(e))}))}))},type:"button",className:"btn btn-danger mx-1",children:"Delete"})]})]})};var L=function(){var e=Object(j.useSelector)((function(e){return e.tasks}));return Object(c.jsx)("ul",{className:"list-group",children:e.length?e.map((function(e,t){return Object(c.jsx)(_,Object(E.a)({index:t},e),e._id)})):null})};var P,U=function(){var e=Object(j.useDispatch)();return Object(a.useEffect)((function(){e(function(){var e=Object(x.a)(d.a.mark((function e(t,n){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tasks");case 2:return c=e.sent,e.next=5,c.json();case 5:(a=e.sent)&&t(D(a));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)(A,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(L,{})]})},G="ADD",J="DELETE",H="STATUS",I=n(25),M=n(26),R=(P={tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return[].concat(Object(M.a)(e),[t.payload]);case H:return e.map((function(e){return e._id===t.payload?Object(E.a)(Object(E.a)({},e),{},{status:!e.status}):e}));case J:return e.filter((function(e){return e._id!==t.payload}));default:return e}}},function(e,t){return Object.keys(P).reduce((function(e,n){return Object(E.a)(Object(E.a)({},e),{},Object(I.a)({},n,P[n](e[n],t)))}),e)}),W=Object(a.createContext)(),B=Object(a.createContext)(),K={tasks:[]};var q=function(){return Object(a.useContext)(B)},z=function(e){var t=e.children,n=Object(a.useReducer)(R,K),r=Object(T.a)(n,2),s=r[0],i=r[1];return Object(c.jsx)(W.Provider,{value:s,children:Object(c.jsx)(B.Provider,{value:i,children:t})})};function F(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],r=t[1],s=q();return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),s((t=n,{type:G,payload:{_id:Date.now(),text:t,status:!1}})),r("")},className:"d-flex flex-column",children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)("input",{type:"text",value:n,placeholder:"Task",onChange:function(e){var t=e.target.value;r(t)},className:"form-control"})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-danger",children:"Submit"})]})})}var Q=Object(a.memo)(F);var V=function(e){var t=e.index,n=e.text,a=e._id,r=e.status,s=q();return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(c.jsxs)("span",{className:"d-flex align-items-center tasksText ".concat(r&&"done"),children:[t+1,".\xa0",n]}),Object(c.jsxs)("span",{className:"d-flex",children:[Object(c.jsx)("button",{onClick:function(){s({type:H,payload:a})},type:"button",className:"btn btn-".concat(r?"dark":"success"," mx-1"),children:r?"UnDone":"Done"}),Object(c.jsx)("button",{onClick:function(){s({type:J,payload:a})},type:"button",className:"btn btn-danger mx-1",children:"Delete"})]})]})};var X=function(){var e=Object(a.useContext)(W).tasks;return Object(c.jsx)("ul",{className:"list-group",children:e.length?e.map((function(e,t){return Object(c.jsx)(V,Object(E.a)({index:t},e),e._id)})):null})};var Y=function(){return Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)(Q,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(X,{})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],r=t[1],s=Object(j.useDispatch)();return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({type:y,payload:n}),r("")},className:"d-flex flex-column",children:[Object(c.jsx)("div",{className:"mb-3",children:Object(c.jsx)("input",{type:"text",value:n,placeholder:"Task",onChange:function(e){var t=e.target.value;r(t)},className:"form-control"})}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},$=n(10).useDispatch;var ee=function(e){var t=e.index,n=e.text,a=e._id,r=e.status,s=$();return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(c.jsxs)("span",{className:"d-flex align-items-center tasksText ".concat(r&&"done"),children:[t+1,".\xa0",n]}),Object(c.jsxs)("span",{className:"d-flex",children:[Object(c.jsx)("button",{onClick:function(){s({type:m,payload:a})},type:"button",className:"btn btn-".concat(r?"dark":"success"," mx-1"),children:r?"UnDone":"Done"}),Object(c.jsx)("button",{onClick:function(){s({type:v,payload:a})},type:"button",className:"btn btn-danger mx-1",children:"Delete"})]})]})};var te=function(){var e=Object(j.useSelector)((function(e){return e.tasks}));return Object(c.jsx)("ul",{className:"list-group",children:e.length?e.map((function(e,t){return Object(c.jsx)(ee,Object(E.a)({index:t},e),e._id)})):null})};var ne=function(){var e=Object(j.useDispatch)();return Object(a.useEffect)((function(){e({type:N})}),[]),Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)(Z,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(te,{})]})};var ce=function(){return Object(c.jsx)("div",{className:"container py-5",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:"/",children:Object(c.jsx)("h1",{children:"Welcome"})}),Object(c.jsx)(o.b,{exact:!0,path:"/redux",children:Object(c.jsx)(U,{})}),Object(c.jsx)(o.b,{exact:!0,path:"/context",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(o.b,{exact:!0,path:"/saga",children:Object(c.jsx)(ne,{})}),Object(c.jsx)(o.b,{children:Object(c.jsx)(o.a,{to:"/"})})]})]})})},ae=n(15),re=n(35),se=n(36),ie={tasks:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return[].concat(Object(M.a)(e),[t.payload]);case k:return t.payload;case p:return e.map((function(e){return e._id===t.payload.id?Object(E.a)(Object(E.a)({},e),{},{text:t.payload.text}):e}));case h:return e.map((function(e){return e._id===t.payload?Object(E.a)(Object(E.a)({},e),{},{status:!e.status}):e}));case O:return e.filter((function(e){return e._id!==t.payload}));default:return e}},oe=Object(ae.combineReducers)({tasks:ue}),le=n(37),je=n(8),be=d.a.mark(fe),de=d.a.mark(pe);function xe(){return fetch("/tasks").then((function(e){return e.json()}))}function fe(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(je.b)(xe);case 2:return e=t.sent,t.next=5,Object(je.c)(D(e));case 5:case"end":return t.stop()}}),be)}function pe(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.d)(N,fe);case 2:case"end":return e.stop()}}),de)}var Oe=pe,he=d.a.mark(ye),me=d.a.mark(ke);function ve(e){return fetch("/tasks/".concat(e),{method:"PATCH"}).then((function(e){if(200===e.status)return e.json()}))}function ye(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(je.b)(ve,e.payload);case 2:if(!t.sent){t.next=6;break}return t.next=6,Object(je.c)(S(e.payload));case 6:case"end":return t.stop()}}),he)}function ke(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.d)(m,ye);case 2:case"end":return e.stop()}}),me)}var Ne=ke,ge=d.a.mark(Se),De=d.a.mark(Te);function we(e){return fetch("/tasks/".concat(e),{method:"DELETE"}).then((function(e){return 200===e.status}))}function Se(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(je.b)(we,e.payload);case 2:if(!t.sent){t.next=6;break}return t.next=6,Object(je.c)(w(e.payload));case 6:case"end":return t.stop()}}),ge)}function Te(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.d)(v,Se);case 2:case"end":return e.stop()}}),De)}var Ae=Te,Ee=d.a.mark(Le),Ce=d.a.mark(Pe);function _e(e){return fetch("/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e})}).then((function(e){return e.json()}))}function Le(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(je.b)(_e,e.payload);case 2:if(!(t=n.sent)){n.next=6;break}return n.next=6,Object(je.c)(g(t));case 6:case"end":return n.stop()}}),Ee)}function Pe(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.d)(y,Le);case 2:case"end":return e.stop()}}),Ce)}var Ue=Pe,Ge=d.a.mark(Je);function Je(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(je.a)([Oe(),Ne(),Ae(),Ue()]);case 2:case"end":return e.stop()}}),Ge)}var He=Object(le.a)(),Ie=Object(ae.createStore)(oe,ie,Object(re.composeWithDevTools)(Object(ae.applyMiddleware)(se.a,He)));He.run(Je);var Me=Ie;i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j.Provider,{store:Me,children:Object(c.jsx)(z,{children:Object(c.jsx)(ce,{})})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.51ada386.chunk.js.map