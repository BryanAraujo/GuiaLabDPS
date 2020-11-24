(this["webpackJsonpguia-9"]=this["webpackJsonpguia-9"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(1),c=n.n(s),r=n(24),o=n.n(r),i=(n(57),n(58),n(20)),d=n(21),l=n(15),j=n(23),h=n(22),u=n(76),b=(n(25),n(43)),O=n(32),x=n.n(O),g=n(44),f=n(77),m=n(71),p=n(72),v=n(47),k=n(75),C=n(73),N=n(74),y=n(33),L=(n(60),function(){return y.a.apps.length||y.a.initializeApp({apiKey:"AIzaSyDi2nxk36O5mi187eFkaJKeyMfPykzeToY",authDomain:"guia-9---react-firebase.firebaseapp.com",databaseURL:"https://guia-9---react-firebase.firebaseio.com",projectId:"guia-9---react-firebase",storageBucket:"guia-9---react-firebase.appspot.com",messagingSenderId:"1091926394419",appId:"1:1091926394419:web:a956cd6645119f21e6c546"}),y.a}()),I=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStudents=Object(g.a)(x.a.mark((function e(){var t,n,s,c,r,o,i,d,l,j,h,u,b,O;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,L.database().ref("/Notes").once("value").then((function(e){return e.val()}));case 3:n=e.sent,e.t0=x.a.keys(n);case 5:if((e.t1=e.t0()).done){e.next=17;break}return s=e.t1.value,c=n[s],r=c.nota1,o=c.nota2,i=c.nota3,d=c.userId,l=c.nota4,j=c.nota5,h=c.avg,e.next=11,L.database().ref("/Student").child(d).once("value").then((function(e){return e.val()}));case 11:u=e.sent,b=u.names,O=u.lastNames,t.push({names:b,lastNames:O,nota1:r,nota2:o,nota3:i,nota4:l,nota5:j,avg:h}),e.next=5;break;case 17:a.setState({studentslist:t});case 18:case"end":return e.stop()}}),e)}))),a.state={studentslist:[],names:"",lastNames:"",userId:"",nota1:0,nota2:0,nota3:0,nota4:0,nota5:0},a.saveData=a.saveData.bind(Object(l.a)(a)),a.saveDataNotes=a.saveDataNotes.bind(Object(l.a)(a)),a.getStudent=a.getStudent.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"createStudent",value:function(e){return L.database().ref("/Student").push(e).getKey()}},{key:"createNotes",value:function(e){return L.database().ref("/Notes").push(e)}},{key:"update",value:function(e,t){return L.database().ref("/Student").child(e).update(t)}},{key:"delete",value:function(e){return L.database().ref("/Student").child(e).remove()}},{key:"saveData",value:function(){var e={names:this.state.names,lastNames:this.state.lastNames},t=this.createStudent(e);this.setState({userId:t})}},{key:"saveDataNotes",value:function(){var e=this.state.userId,t=this.state.nota1,n=this.state.nota2,a=this.state.nota3,s=this.state.nota4,c=this.state.nota5,r=[Number(t),Number(n),Number(a),Number(s),Number(c)],o={userId:e,nota1:t,nota2:n,nota3:a,nota4:s,nota5:c,avg:r.reduce((function(e,t){return t+e}))/r.length};this.createNotes(o).then((function(){console.log("Created new item successfully!")})).catch((function(e){console.log(e)}))}},{key:"getStudent",value:function(){return Object(a.jsx)("input",{type:"button",name:"address",onClick:this.onAddressChanged})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){this.getStudents()}},{key:"render",value:function(){var e=this;return console.log(this.state.studentslist),Object(a.jsxs)("div",{children:[Object(a.jsxs)(f.a,{variant:"success",children:[Object(a.jsxs)(f.a.Heading,{children:["Hey, nice to see you ",this.props.name]}),Object(a.jsx)("hr",{})]}),Object(a.jsx)(m.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(v.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(k.a.Row,{children:[Object(a.jsxs)(k.a.Group,{as:v.a,controlId:"formGridZip",children:[Object(a.jsx)(k.a.Label,{children:"Nombres"}),Object(a.jsx)(k.a.Control,{type:"text",name:"names",placeholder:"Ej. Eduardo",onChange:function(t){e.handleChange(t)}})]}),Object(a.jsxs)(k.a.Group,{as:v.a,controlId:"formGridPassword",children:[Object(a.jsx)(k.a.Label,{children:"Apellidos"}),Object(a.jsx)(k.a.Control,{type:"text",name:"lastNames",placeholder:"Ej. Lopez",onChange:function(t){e.handleChange(t)}})]})]}),Object(a.jsx)(C.a,{onClick:this.saveData,children:"Guardar"})]})})})}),Object(a.jsx)("br",{}),Object(a.jsx)(m.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(v.a,{children:Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(k.a.Row,{children:[Object(a.jsxs)(k.a.Group,{controlId:"formGridAddress1",children:[Object(a.jsx)(k.a.Label,{children:"Nota 1"}),Object(a.jsx)(k.a.Control,{type:"number",name:"nota1",placeholder:"Ej. 8",onChange:function(t){e.handleChange(t)}})]}),Object(a.jsxs)(k.a.Group,{controlId:"formGridAddress1",children:[Object(a.jsx)(k.a.Label,{children:"Nota 2"}),Object(a.jsx)(k.a.Control,{type:"number",name:"nota2",placeholder:"Ej. 8",onChange:function(t){e.handleChange(t)}})]}),Object(a.jsxs)(k.a.Group,{controlId:"formGridAddress1",children:[Object(a.jsx)(k.a.Label,{children:"Nota 3"}),Object(a.jsx)(k.a.Control,{type:"number",name:"nota3",placeholder:"Ej. 8",onChange:function(t){e.handleChange(t)}})]}),Object(a.jsxs)(k.a.Group,{controlId:"formGridAddress1",children:[Object(a.jsx)(k.a.Label,{children:"Nota 4"}),Object(a.jsx)(k.a.Control,{type:"number",name:"nota4",placeholder:"Ej. 8",onChange:function(t){e.handleChange(t)}})]}),Object(a.jsxs)(k.a.Group,{controlId:"formGridAddress1",children:[Object(a.jsx)(k.a.Label,{children:"Nota 5"}),Object(a.jsx)(k.a.Control,{type:"number",name:"nota5",placeholder:"Ej. 8",onChange:function(t){e.handleChange(t)}})]})]}),Object(a.jsx)(C.a,{onClick:this.saveDataNotes,children:"Guardar"})]})})})}),Object(a.jsx)("br",{}),Object(a.jsx)(m.a,{children:Object(a.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"First Name"}),Object(a.jsx)("th",{children:"Last Name"}),Object(a.jsx)("th",{children:"Nota 1"}),Object(a.jsx)("th",{children:"Nota 2"}),Object(a.jsx)("th",{children:"Nota 3"}),Object(a.jsx)("th",{children:"Nota 4"}),Object(a.jsx)("th",{children:"Nota 5"}),Object(a.jsx)("th",{children:"Promedio"})]})}),Object(a.jsx)("tbody",{children:this.state.studentslist.map((function(e,t){return console.log(t),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1}),Object(a.jsx)("td",{children:e.names}),Object(a.jsx)("td",{children:e.lastNames}),Object(a.jsx)("td",{children:e.nota1}),Object(a.jsx)("td",{children:e.nota2}),Object(a.jsx)("td",{children:e.nota3}),Object(a.jsx)("td",{children:e.nota4}),Object(a.jsx)("td",{children:e.nota5}),Object(a.jsx)("td",{children:e.avg})]},t)}))})]})})]})}}]),n}(s.Component),S=n(48),G=n(49),D=n(8),A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={name:""},a.handleLoginClick=a.handleLoginClick.bind(Object(l.a)(a)),a.handleLogoutClick=a.handleLogoutClick.bind(Object(l.a)(a)),a.state={isLoggedIn:!1},a}return Object(d.a)(n,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;this.state.name;t?this.handleLogoutClick:this.handleLoginClick;return Object(a.jsxs)("div",{children:[!t&&Object(a.jsx)(S.GoogleLogin,{clientId:"930160017922-47ok0thbf96dg1b0kkcib8hjeknnk6vh.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){console.log(t.profileObj.name),e.setState({isLoggedIn:!0,name:t.profileObj.name})},onFailure:function(t){e.setState({isLoggedIn:!1})},cookiePolicy:"single_host_origin"}),t&&Object(a.jsx)(G.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{bg:"dark",variant:"dark",children:Object(a.jsx)(u.a.Brand,{href:"#home",children:"Desafio - HOME"})}),Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsx)(D.c,{children:Object(a.jsx)(D.a,{exact:!0,path:["/","/home"],component:I})})})]})})]})}}]),n}(s.Component),E=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.isLoggedIn;return Object(a.jsx)("div",{children:Object(a.jsx)(A,{isLoggedIn:e})})}}]),n}(s.Component);var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(E,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),F()}},[[69,1,2]]]);
//# sourceMappingURL=main.87a0248d.chunk.js.map