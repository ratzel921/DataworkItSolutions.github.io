(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"40c47b23"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0757":function(t,e,a){},1771:function(t,e,a){var n={"./Hintergrund.jpg":"d325","./Logo_grau_2.png":"1857","./Logo_muster_blau.png":"b881","./Profilbild/Profilbild_dominik.jpeg":"4cad","./Profilbild/Profilbild_marius.jpg":"8c76","./Profilbild/Profilbild_thomas.jpg":"6c13","./hintergrund1.jpg":"755c","./logo.png":"cf05","./logo.svg":"9b19","./network.jpg":"d53e","./versuch1.jpg":"374c"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="1771"},1857:function(t,e,a){t.exports=a.p+"img/Logo_grau_2.f5244a1d.png"},"1aac":function(t,e,a){"use strict";var n=a("6abc"),r=a.n(n);r.a},"374c":function(t,e,a){t.exports=a.p+"img/versuch1.42e46488.jpg"},"4cad":function(t,e,a){t.exports=a.p+"img/Profilbild_dominik.39e4a9aa.jpeg"},"4f04":function(t,e,a){"use strict";var n=a("6ab3"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.mobileVersion?a("NavBarMobile"):t._e(),t.normalVersion?a("NavBar"):t._e(),a("v-main",[a("router-view")],1),a("Foot")],1)},i=[],o=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return"Home"==this.$route.name?a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{fab:"",dark:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-menu")])],1)]}}],null,!1,3616794877)},[a("v-list",{attrs:{dark:""}},[t._l(t.items,(function(e){return a("v-list-item",{key:e.title,on:{click:function(a){return t.sectionScroll(e.section)}}},[a("v-icon",{attrs:{small:"",left:"",color:"blue"}},[t._v(t._s(e.icon))]),a("v-list-item-title",{staticClass:"grey--text text--lighten-1 text-uppercase"},[a("span",[t._v(t._s(e.title)+" ")])])],1)})),a("Contact")],2)],1),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#landing")}}},[a("span",{staticClass:"font-weight-bold"},[t._v("Data")]),a("span",{staticClass:"font-weight-light"},[t._v("Work")])]),a("v-spacer")],1):a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-spacer"),a("v-btn",{attrs:{text:"",to:"/"}},[a("v-icon",{attrs:{color:"blue",large:""}},[t._v("mdi-home")])],1),a("v-spacer")],1)}),s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",{attrs:{color:"blue",small:"",left:""}},[t._v(" mdi-chat-plus ")]),a("span",{staticClass:"grey--text text--lighten-1 "},[t._v("Kontakt")])],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("ValidationObserver",[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("v-card",[a("v-row",{attrs:{justify:"center"}},[a("v-card-title",[a("h1",{staticClass:"headline blue--text text-uppercase"},[t._v("Contact us!")])])],1),a("v-card-text",{staticClass:"pt-0"},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("ValidationProvider",{attrs:{name:"Subject",rules:"required|alpha|max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-autocomplete",{attrs:{items:["Service","Produkt","Kontakt","Information","Support","Anregungen","Feedback"],label:"Betreff",clearable:"","error-messages":n[0]},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})]}}])})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("ValidationProvider",{attrs:{name:"Vorname",rules:"required|alpha|min:3|max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{label:"Vorname*",required:"",counter:"20",clearable:"",solor:"","error-messages":n[0]},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})]}}])})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("ValidationProvider",{attrs:{name:"Nachname",rules:"required|alpha|min:4|max:20"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{label:"Nachname*",counter:"20",clearable:"","error-messages":n[0],required:""},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})]}}])})],1),a("v-col",{attrs:{cols:"12"}},[a("ValidationProvider",{attrs:{name:"Message",rules:"required|min:5"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-textarea",{attrs:{label:"Message*",required:"",dense:"","error-messages":n[0],solo:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})]}}])})],1)],1)],1),a("small",[t._v("*kennzeichnet erforderliche Felder")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),a("v-spacer"),a("v-btn",{staticClass:"blue darken",attrs:{disabled:t.invalid,dark:""},on:{click:function(e){t.dialog=!1},submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v(" Save ")]),a("v-spacer")],1)],1)],1)])],1)],1)},c=[],u={data:function(){return{dialog:!1,form:{firstname:"",lastname:"",subject:"",message:""}}},methods:{onSubmit:function(){alert("Form has been submitted!")}}},d=u,m=(a("7a5a"),a("2877")),p=a("6544"),f=a.n(p),v=a("c6a6"),b=a("8336"),g=a("b0af"),h=a("99d9"),_=a("62ad"),k=a("a523"),x=a("169a"),w=a("132d"),C=a("0fd9"),V=a("2fa4"),y=a("8654"),j=a("a844"),S=Object(m["a"])(d,l,c,!1,null,null,null),P=S.exports;f()(S,{VAutocomplete:v["a"],VBtn:b["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:_["a"],VContainer:k["a"],VDialog:x["a"],VIcon:w["a"],VRow:C["a"],VSpacer:V["a"],VTextField:y["a"],VTextarea:j["a"]});var T={data:function(){return{items:[{title:"Team",icon:"mdi-account-group",section:"#team"},{title:"Produkt",icon:"mdi-laptop-chromebook",section:"#product"},{title:"Service",icon:"mdi-offer",section:"#service"}]}},components:{Contact:P},methods:{sectionScroll:function(t){this.$vuetify.goTo(t)}}},B=T,O=(a("4f04"),a("40dc")),$=a("8860"),M=a("da13"),I=a("5d23"),E=a("e449"),D=Object(m["a"])(B,o,s,!1,null,"f5ce0e18",null),L=D.exports;f()(D,{VAppBar:O["a"],VBtn:b["a"],VIcon:w["a"],VList:$["a"],VListItem:M["a"],VListItemTitle:I["b"],VMenu:E["a"],VSpacer:V["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"Home"==this.$route.name?a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#landing")}}},[a("span",{staticClass:"font-weight-bold"},[t._v("Data")]),a("span",{staticClass:"font-weight-light"},[t._v("Work")])]),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#team")}}},[a("v-icon",{attrs:{color:"blue",small:"",left:""}},[t._v("mdi-account-group")]),a("span",{staticClass:"grey--text text--lighten-1"},[t._v("Team")])],1),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#product")}}},[a("v-icon",{attrs:{left:"",color:"blue",small:""}},[t._v("mdi-laptop-chromebook")]),a("span",{staticClass:"grey--text text--lighten-1"},[t._v("Produkt")])],1),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#service")}}},[a("v-icon",{attrs:{left:"",color:"blue",small:""}},[t._v("mdi-offer")]),a("span",{staticClass:"grey--text text--lighten-1"},[t._v("Service")])],1),a("Contact")],1):a("v-app-bar",{attrs:{app:"",dark:""}},[a("v-spacer"),a("v-btn",{attrs:{text:"",to:"/"}},[a("v-icon",{attrs:{color:"blue",large:""}},[t._v("mdi-home")])],1),a("v-spacer")],1)},z=[],A={components:{Contact:P},methods:{}},F=A,H=Object(m["a"])(F,W,z,!1,null,"d8e3044a",null),N=H.exports;f()(H,{VAppBar:O["a"],VBtn:b["a"],VIcon:w["a"],VSpacer:V["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",color:"black",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return a("v-btn",{key:e.name,staticClass:"my-2 font-weight-light",attrs:{color:"white",text:"",rounded:"",to:e.route}},[t._v(" "+t._s(e.name))])})),a("v-col",{staticClass:"text-center",attrs:{dark:"",cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("DataWorks ")]),a("v-icon",{attrs:{small:""}},[t._v("mdi-copyright")])],1)],2)],1)},K=[],Q={data:function(){return{links:[{name:"Home",route:"/"},{name:"Impressum",route:"/impressum"},{name:"Datenschutz",route:"/datenschutz"},{name:"AGB",route:"/agb"}]}}},R=Q,G=a("553a"),U=Object(m["a"])(R,q,K,!1,null,null,null),J=U.exports;f()(U,{VBtn:b["a"],VCol:_["a"],VFooter:G["a"],VIcon:w["a"],VRow:C["a"]});var Y={name:"App",components:{NavBar:N,NavBarMobile:L,Foot:J},data:function(){return{NavbarMobile:!0}},computed:{mobileVersion:function(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0}},normalVersion:function(){switch(this.$vuetify.breakpoint.name){case"md":return!0;case"lg":return!0;case"xl":return!0}}}},X=Y,Z=(a("034f"),a("7496")),tt=a("f6c4"),et=Object(m["a"])(X,r,i,!1,null,null,null),at=et.exports;f()(et,{VApp:Z["a"],VMain:tt["a"]});a("d3b7");var nt=a("8c4f"),rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Background"),a("Persons"),a("Software"),a("Service")],1)},it=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"landing"}},[n("v-row",{staticClass:"grey lighten-3"},[n("v-col",{attrs:{align:"center"}},[n("v-img",{attrs:{height:t.logoHeigth,width:t.logoWidth,src:a("b881")}}),n("p",{staticClass:"grey--text text--darken-4 pt-5"},[n("span",[t._v(" Durch ")]),n("span",{staticClass:"font-weight-bold"},[t._v(" Begeisterung ")]),n("span",[t._v(" an Technik und Vertrauen in die Medien, "),n("br"),t._v(" verändern wir die Industrie mit digitalen ")]),n("span",{staticClass:"font-weight-bold"},[t._v(" Softwarelösungen! ")])]),n("v-btn",{staticClass:"blue--text animate__animated animate__slideInDown animate__repeat-3",attrs:{outlined:"",fab:"",text:"",border:""},on:{click:function(e){return t.$vuetify.goTo("#team")}}},[n("v-icon",{attrs:{"x-large":""}},[t._v(" mdi-chevron-double-down ")])],1)],1)],1)],1)},st=[],lt={computed:{logoHeigth:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 150;case"sm":return 300;case"md":return 300;case"lg":return 300;case"xl":return 600}},logoWidth:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 250;case"sm":return 500;case"md":return 500;case"lg":return 500;case"xl":return 1e3}}}},ct=lt,ut=(a("6ffa"),a("adda")),dt=Object(m["a"])(ct,ot,st,!1,null,"93e53a12",null),mt=dt.exports;f()(dt,{VBtn:b["a"],VCol:_["a"],VIcon:w["a"],VImg:ut["a"],VRow:C["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"sizeBackground grey lighten-4",attrs:{fluid:"",id:"team"}},[n("h1",{staticClass:"blue--text font-weight-bold pt-1"},[t._v("Gründer und Team")]),n("v-row",{staticClass:"pb-5 pt-5",attrs:{wrap:"",align:"center","no-gutters":""}},t._l(t.leaders,(function(e){return n("v-col",{key:e.name,staticClass:"pa-1",attrs:{cols:"12",xs:"12",sm:"6",md:"3",lg:"3",xl:"3"}},[n("v-hover",{attrs:{"close-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.hover;return[n("v-card",{staticClass:"pa-1 mx-auto",attrs:{dark:"",width:"300px",height:"500px",elevation:i?20:2,align:"center",justify:"center"}},[n("v-card-title",{class:{"blue--text":i}},[t._v(" "+t._s(e.name)+" ")]),n("v-avatar",{attrs:{size:"200"}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:a("1771")("./"+e.bild),alt:e.name}})],1),n("v-card-subtitle",{staticClass:"pb-4",attrs:{align:"center"}},[t._v(" "+t._s(e.skill)+" ")]),n("v-card-text",{staticClass:"white--text",attrs:{align:"left",justify:"left"}},[n("p",[t._v(t._s(e.job)),n("br"),t._v(t._s(e.company))])]),n("v-spacer"),n("v-card-actions",{staticClass:"py-auto"},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"blue",href:e.linkedin,target:"_blank"}},[n("v-icon",{attrs:{left:"",color:""}},[t._v("mdi-linkedin")]),n("span",[t._v("contact")])],1),n("v-spacer")],1)],1)]}}],null,!0)})],1)})),1)],1)},ft=[],vt=a("ade3"),bt=Object(vt["a"])({data:function(){return{leaders:[{name:"Thomas Sindlinger",skill:"Website und Frontend",job:"Bachelor Student, Maschinenbau",company:"Hochschule Esslingen - University of Applied Sciences",bild:"Profilbild/Profilbild_thomas.jpg",linkedin:"https://www.linkedin.com/in/thomas-sindlinger-38b0721b8"},{name:"Michael Sindlinger",skill:"Patentrechte und AGBs",job:"Master Student, Technologie Management",company:"Universität Stuttgart",bild:"hintergrund1.jpg",linkedin:"https://www.linkedin.com/in/michael-sindlinger-3a33a51b9/"},{name:"Marius Walz",skill:"Canvas und Business-Plan",job:"Master Student, Mechanical Engineering",company:"Konstanz - Hochschule für Technik, Wirtschaft und Gestaltung",bild:"Profilbild/Profilbild_marius.jpg",linkedin:"https://www.linkedin.com/in/marius-walz-5980801b4/"},{name:"Dominik Ratzel",skill:"Backend und Frontend",job:"Bachelor Student, Medieninformatik",company:"Hochschule der Medien - Stuttgart",bild:"Profilbild/Profilbild_dominik.jpeg",linkedin:"https://www.linkedin.com/in/dominik-ratzel-19652a1a3/"}]}},methods:{},computed:{getImg:function(t){return a("de6e")(t)}}},"methods",{}),gt=bt,ht=(a("7092"),a("8212")),_t=a("ce87"),kt=Object(m["a"])(gt,pt,ft,!1,null,"0a020830",null),xt=kt.exports;f()(kt,{VAvatar:ht["a"],VBtn:b["a"],VCard:g["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:_["a"],VContainer:k["a"],VHover:_t["a"],VIcon:w["a"],VImg:ut["a"],VRow:C["a"],VSpacer:V["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"grey lighten-3 blue--text",attrs:{fluid:"",id:"product"}},[a("h1",{staticClass:"pt-16"},[t._v("WebTrack")]),a("v-row",{attrs:{wrap:"",align:"center","no-gutters":""}},[a("v-col",{staticClass:"pa-1",attrs:{xs:"12",sm:"12",md:"1",lg:"1",xl:"1"}}),a("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"12",sm:"12",md:"9",lg:"9",xl:"9"}},[a("p",{staticClass:"pt-5"},[a("span",[t._v(" Kommunikation ist ein häufiger Gegner von fehlerfreien Prozessketten. "),a("br"),t._v("Deshalb schaffen wir Kundenbindung durch Klarheit und Durchsicht. "),a("br")]),a("span",[t._v(" Wir bieten ein Werkzeug, welches die Kommunikation auf eine neue Ebene bringt."),a("br"),a("br")]),a("span",[t._v("Dieses Werkzeug nennt sich")]),a("span",{staticClass:"font-weight-bold"},[t._v(" WebTrack "),a("br"),a("br")]),a("span",[t._v("WebTrack bietet Ihnen die Möglichkeit, Ihren Kunden, "),a("br"),t._v(" den Status einer Bestellung in Echtzeit wiederzugeben."),a("br")]),a("span",[t._v("Durch intuitive Bedienung einer Benutzeroberfläche kann"),a("br"),t._v(" WebTrack einfach und schnell in den Bestellvorgang integriert werden."),a("br")]),a("span",[t._v("Sie sind genauso begeistert wie wir, dann erfahren Sie hier mehr davon.")])])]),a("v-col",{staticClass:"pa-1",attrs:{xs:"12",sm:"12",md:"2",lg:"2",xl:"2",align:"start",justify:"center"}},[a("v-btn",{staticClass:"blue animate__animated animate__bounceIn animate__repeat-3",attrs:{large:"",elevation:"4",dark:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-omega")]),a("span",[t._v("WebTrack")])],1)],1)],1)],1)},Ct=[],Vt={},yt=Vt,jt=(a("1aac"),Object(m["a"])(yt,wt,Ct,!1,null,"457924b1",null)),St=jt.exports;f()(jt,{VBtn:b["a"],VCol:_["a"],VContainer:k["a"],VIcon:w["a"],VRow:C["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"blue--text",attrs:{fluid:"",id:"service"}},[a("h1",{staticClass:"pt-16"},[t._v("WebService")]),a("v-row",{attrs:{wrap:"",align:"center","no-gutters":""}},[a("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"12",sm:"12",md:"1",lg:"1",xl:"1"}}),a("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"12",sm:"12",md:"9",lg:"9",xl:"9"}},[a("p",{staticClass:"pt-5"},[a("span",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi! "),a("br"),t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ullam! "),a("br")]),a("span",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!"),a("br"),a("br")]),a("span",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!")]),a("span",{staticClass:"font-weight-bold"},[t._v(" WebService "),a("br"),a("br")]),a("span",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi! "),a("br"),t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!"),a("br")]),a("span",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!"),a("br"),t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!"),a("br")]),a("span",[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, animi!")])])]),a("v-col",{staticClass:"pa-1",attrs:{cols:"12",xs:"12",sm:"12",md:"2",lg:"2",xl:"2",align:"start",justify:"center"}},[a("v-btn",{staticClass:"blue animate__animated animate__bounceIn animate__repeat-3",attrs:{large:"",elevation:"4",dark:""}},[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-information")]),a("span",[t._v("WebService")])],1)],1)],1)],1)},Tt=[],Bt={},Ot=Bt,$t=(a("a577"),Object(m["a"])(Ot,Pt,Tt,!1,null,"4b5b906f",null)),Mt=$t.exports;f()($t,{VBtn:b["a"],VCol:_["a"],VContainer:k["a"],VIcon:w["a"],VRow:C["a"]});var It={components:{Background:mt,Persons:xt,Software:St,Service:Mt}},Et=It,Dt=Object(m["a"])(Et,rt,it,!1,null,"32f00eff",null),Lt=Dt.exports;n["a"].use(nt["a"]);var Wt=[{path:"/",name:"Home",component:Lt},{path:"/impressum",name:"Impressum",component:function(){return a.e("about").then(a.bind(null,"761a"))}},{path:"/datenschutz",name:"Datenschutz",component:function(){return a.e("about").then(a.bind(null,"e1639"))}},{path:"/agb",name:"AGB",component:function(){return a.e("about").then(a.bind(null,"d87a"))}}],zt=new nt["a"]({routes:Wt}),At=zt,Ft=a("2f62");n["a"].use(Ft["a"]);var Ht=new Ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Nt=a("f309");n["a"].use(Nt["a"]);var qt=new Nt["a"]({icons:{iconfont:"mdi"}}),Kt=a("77ed"),Qt=a.n(Kt),Rt=a("6f19");n["a"].component("ValidationProvider",Rt["a"]),n["a"].use(Qt.a),n["a"].config.productionTip=!1,new n["a"]({router:At,store:Ht,vuetify:qt,render:function(t){return t(at)}}).$mount("#app")},"6ab3":function(t,e,a){},"6abc":function(t,e,a){},"6b42":function(t,e,a){},"6c13":function(t,e,a){t.exports=a.p+"img/Profilbild_thomas.590286c5.jpg"},"6ffa":function(t,e,a){"use strict";var n=a("6b42"),r=a.n(n);r.a},7092:function(t,e,a){"use strict";var n=a("7aa7"),r=a.n(n);r.a},"755c":function(t,e,a){t.exports=a.p+"img/hintergrund1.e49fd51d.jpg"},"7a5a":function(t,e,a){"use strict";var n=a("ebf5"),r=a.n(n);r.a},"7aa7":function(t,e,a){},"85ec":function(t,e,a){},"8c76":function(t,e,a){t.exports=a.p+"img/Profilbild_marius.45d88496.jpg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},a577:function(t,e,a){"use strict";var n=a("0757"),r=a.n(n);r.a},b881:function(t,e,a){t.exports=a.p+"img/Logo_muster_blau.9d498de3.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d325:function(t,e,a){t.exports=a.p+"img/Hintergrund.1a89afda.jpg"},d53e:function(t,e,a){t.exports=a.p+"img/network.8d431ec5.jpg"},de6e:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="de6e"},ebf5:function(t,e,a){}});
//# sourceMappingURL=app.6e357038.js.map