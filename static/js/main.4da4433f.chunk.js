(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{22:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),a=n(13),c=n.n(a),o=(n(22),n(14)),i=n(17),l=n(16),d=n(0),j=function(e){var t=function(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}(e.dob);return Object(d.jsxs)("tr",{className:"tr",children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{alt:e.firstName,src:e.icon})}),Object(d.jsxs)("td",{children:[e.lastName," ",e.firstName]}),Object(d.jsx)("td",{children:t}),Object(d.jsxs)("td",{children:[e.phone," "]}),Object(d.jsx)("td",{children:e.address}),Object(d.jsx)("td",{children:e.email})]})},m=function(e){return Object(d.jsx)("div",{className:"d-flex justify-content-center mx-auto",children:Object(d.jsx)("form",{children:Object(d.jsx)("input",{placeholder:"Search",name:"search",type:"text",className:"form-control-lg search-font mx-auto",onChange:function(t){return e.startSort(t)}})})})},u=n(15),h=n.n(u),b={getEmployees:function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us")}},p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],empSort:[],search:"",sorted:!1},e.componentDidMount=function(){b.getEmployees().then((function(t){e.setState({employees:t.data.results})}))},e.sortEmployees=function(){var t=e.state,n=t.employees,s=t.search,r=n.filter((function(e){return e.name.first.toLowerCase().includes(s.toLowerCase())||e.name.last.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())}));e.setState({empSort:r})},e.startSort=function(t){e.setState({search:t.target.value},(function(){e.sortEmployees(),e.setState({sorted:!0})}))},e.render=function(){return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsxs)("div",{className:"jumbotron jumbotron-fluid",children:[Object(d.jsx)("h2",{className:"display-4",children:"Employee Directory"}),Object(d.jsx)("p",{children:" Search employee by name or email."}),Object(d.jsx)(m,{name:"search",startSort:e.startSort,label:"Search"})]}),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("table",{className:"table table-dark table-striped table-hover table-bordered table-condensed",children:[Object(d.jsx)("thead",{className:"thead",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Image"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Date of Birth"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Address"}),Object(d.jsx)("th",{children:"Email"})]})}),Object(d.jsx)("tbody",{children:e.state.sorted?e.state.empSort.map((function(e){return Object(d.jsx)(j,{firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,icon:e.picture.medium,dob:e.dob.date,address:e.location.street.number+e.location.street.name},e.id.value)})):e.state.employees.map((function(e){return Object(d.jsx)(j,{firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,icon:e.picture.medium,dob:e.dob.date,address:e.location.street.number+" "+e.location.street.name+", "+e.location.city+", "+e.location.state+" "+e.location.postcode},e.id.value)}))})]})})]})},e}return n}(s.Component),f=p,x=(n(43),function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{})})}),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};n(44);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.4da4433f.chunk.js.map