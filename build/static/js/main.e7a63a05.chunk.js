(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(45)},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),i=n(8),s=n(7),l=n(16),u=(n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function p(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var d=n(1),h=n(2),m=n(4),f=n(3),v=n(5),E=(n(29),n(31),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Contactlist"),o.a.createElement("p",null,"Hello ",this.props.user,", these are your contacts"))}}]),t}(a.Component)),g=(n(33),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"add",onClick:function(){return e.props.addPopup()}},o.a.createElement("img",{src:"/images/add.svg",alt:"add"}))}}]),t}(a.PureComponent)),C=(n(35),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search"},o.a.createElement("input",{onChange:function(t){return e.props.doSearch(t.target.value)},type:"search",placeholder:"search contacts"}))}}]),t}(a.PureComponent)),b=(n(37),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).updateName=function(e){n.setState({name:e.target.value})},n.updateEmail=function(e){n.setState({email:e.target.value})},n.saveContact=function(){n.props.saveContact({img:"",name:n.state.name,email:n.state.email})},n.state={name:"",email:""},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="none";return!0===this.props.show&&(t="block"),o.a.createElement("div",{className:"add_popup",style:{display:t}},o.a.createElement("div",{className:"add_popup-overlay",onClick:function(){return e.props.closePopup()}}),o.a.createElement("div",{className:"add_popup-popup"},o.a.createElement("div",{className:"add_popup-close",onClick:function(){return e.props.closePopup()}},o.a.createElement("img",{src:"/images/add.svg",alt:"add"})),o.a.createElement("h3",null,"Add a new contact"),o.a.createElement("input",{className:"add_name",onChange:this.updateName,type:"text",placeholder:"name"}),o.a.createElement("input",{className:"add_email",onChange:this.updateEmail,type:"text",placeholder:"email"}),o.a.createElement("div",null,"Upload image"),o.a.createElement("div",{className:"add_button",onClick:function(){e.props.closePopup(),e.saveContact()}},"Save contact")))}}]),t}(a.PureComponent)),y=(n(39),function(e){return o.a.createElement("div",{className:"scrollableContent"},e.children)}),O=(n(41),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e="/images/dinah.jpg",t={filter:this.props.degree};return""!==this.props.img&&(e=this.props.img,t={filter:"none"}),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card_top"},o.a.createElement("img",{alt:"someNiceImg",src:e,style:t})),o.a.createElement("div",{className:"card_bottom"},o.a.createElement("h2",null,this.props.name),o.a.createElement("p",null,this.props.email)))}}]),t}(a.Component));Array.prototype.slice.call(document.querySelectorAll(".card img")).forEach(function(e){var t=360*Math.random();e.style.filter="hue-rotate("+t+"deg)"});n(43);var j=function(e){var t=e.contacts,n=t.map(function(e,n){var a=250+160*Math.random();return o.a.createElement(O,{img:t[n].img,name:t[n].name,email:t[n].email,key:n,degree:"hue-rotate(".concat(a,"deg)")})});return o.a.createElement("div",{className:"cardsContainer"},n)},S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).addPopup=function(){n.setState({showAddPopup:!0})},n.closePopup=function(){n.setState({showAddPopup:!1})},n.state={showAddPopup:!1},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){console.log("app did mount"),this.props.onRequestContacts()}},{key:"render",value:function(){var e=this.state.showAddPopup,t=this.props,n=t.user,a=t.doSearch,c=t.contacts,r=t.isPending,i=t.searchResult,s=c.filter(function(e){return e.name.toLowerCase().includes(i.toLowerCase())});return r?o.a.createElement("div",null,o.a.createElement("p",null,"Doet t niet")):o.a.createElement("div",{className:"app"},o.a.createElement(E,{user:n}),o.a.createElement("div",{className:"menuBar"},o.a.createElement(g,{addPopup:this.addPopup}),o.a.createElement(C,{doSearch:a})),o.a.createElement(b,{saveContact:this.props.onSaveNewContact,closePopup:this.closePopup,show:e}),o.a.createElement(y,null,o.a.createElement(j,{contacts:s})),o.a.createElement("p",{className:"author"},"By Dinah Siebers"))}}]),t}(a.Component),w=Object(i.b)(function(e){return{searchResult:e.searchContacts.searchResult,contacts:e.requestContacts.contacts,inPending:e.requestContacts.inPending,error:e.requestContacts.error}},function(e){return{doSearch:function(t){e({type:"CHANGE_SEARCH_RESULT",payload:t})},onRequestContacts:function(){return e(function(e){console.log("called the request contacts action"),e({type:"REQUEST_CONTACTS_PENDING"}),fetch("http://localhost:3001/contacts").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_CONTACTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_CONTACTS_FAILED",payload:t})})})},onSaveNewContact:function(t){return e(function(e){return function(t){fetch("http://localhost:3001/contacts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return e.json()}).then(function(e){return t({type:"ADD_CONTACT",payload:e})}).catch(function(e){return t({type:"REQUEST_CONTACTS_FAILED",payload:e})})}}(t))}}})(S),N={searchResult:""},A={inPending:!1,contacts:[],error:""},P=Object(s.c)({searchContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t),t.type){case"CHANGE_SEARCH_RESULT":return Object.assign({},e,{searchResult:t.payload});default:return e}},requestContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_CONTACTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_CONTACTS_SUCCESS":return Object.assign({},e,{contacts:t.payload,isPending:!1});case"REQUEST_CONTACTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});case"ADD_CONTACT":var n=e.contacts.concat(t.payload);return Object.assign({},e,{contacts:n});default:return e}}}),T=Object(s.d)(P,Object(s.a)(l.a));r.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(w,{user:"Dinah"})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-app-PWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/React-app-PWA","/service-worker.js");u?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):p(t,e)})}}()}},[[17,2,1]]]);
//# sourceMappingURL=main.e7a63a05.chunk.js.map