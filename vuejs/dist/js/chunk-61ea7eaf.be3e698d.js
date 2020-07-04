(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ea7eaf"],{"4a6e":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:e.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(s){e.loading=s}}})],1),t("div",{staticClass:"columns is-multiline is-centered is-vcentered"},[t("div",{staticClass:"column has-text-centered is-half"},[t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[e._v("Invite Users")]),t("p",{staticClass:"subtitle is-small has-text-white has-text-weight-bold"},[e._v("Invite Users using Glory to Heaven Mail Service")]),t("p",{staticClass:"subtitle is-small has-text-white"},[e._v("(Please Use Considerably As We Have to Incur Mail Costs.)")]),t("article",{class:e.errorMessage?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Error Proccessing")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.errorMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("article",{class:e.successMessage?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[e._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(s){e.successMessage=!1}}})]),t("div",{staticClass:"message-body"},[e._v(" "+e._s(e.resultmessage)+" ")])]),t("form",{on:{submit:function(s){return s.preventDefault(),e.handleSubmit(s)}}},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input is-rounded",attrs:{placeholder:"Your Name",id:"invitename",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}}),e._m(0),e._m(1)])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-rounded is-focused",attrs:{placeholder:"Email",id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),e._m(2),e._m(3)])]),t("label",{staticClass:"subtitle has-text-white"},[e._v(" Invite for Role")]),t("div",{staticClass:"control mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-success",attrs:{id:"userradio",type:"radio",name:"role",checked:"",value:"user",disabled:e.disabled},domProps:{checked:e._q(e.role,"user")},on:{change:function(s){e.role="user"}}}),t("label",{staticClass:"subtitle has-text-weight-bold has-text-white",attrs:{for:"userradio"}},[e._v("User")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-success",attrs:{id:"adminradio",type:"radio",name:"role",value:"admin",disabled:e.disabled},domProps:{checked:e._q(e.role,"admin")},on:{change:function(s){e.role="admin"}}}),t("label",{staticClass:"subtitle has-text-weight-bold has-text-white",attrs:{for:"adminradio"}},[e._v(" Admin")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"is-checkradio is-small is-success",attrs:{id:"superadminradio",type:"radio",name:"role",value:"superadmin",disabled:e.disabled},domProps:{checked:e._q(e.role,"superadmin")},on:{change:function(s){e.role="superadmin"}}}),t("label",{staticClass:"subtitle has-text-weight-bold has-text-white",attrs:{for:"superadminradio"}},[e._v("Superadmin")])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"textarea is-success is-rounded",attrs:{placeholder:"Message to Him",id:"message",rows:"3",required:""},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}})])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-success is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(s){var t=e.checked,a=s.target,i=!!a.checked;if(Array.isArray(t)){var c=null,l=e._i(t,c);a.checked?l<0&&(e.checked=t.concat([c])):l>-1&&(e.checked=t.slice(0,l).concat(t.slice(l+1)))}else e.checked=i}}}),e._m(4)])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-success is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.codechecked,expression:"codechecked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"code",name:"terms"},domProps:{checked:Array.isArray(e.codechecked)?e._i(e.codechecked,null)>-1:e.codechecked},on:{change:function(s){var t=e.codechecked,a=s.target,i=!!a.checked;if(Array.isArray(t)){var c=null,l=e._i(t,c);a.checked?l<0&&(e.codechecked=t.concat([c])):l>-1&&(e.codechecked=t.slice(0,l).concat(t.slice(l+1)))}else e.codechecked=i}}}),e._m(5)])])]),t("button",{class:e.loading?"button is-loading is-rounded is-success is-medium":"button is-success is-rounded is-medium",attrs:{type:"submit",disabled:e.buttondisabled}},[e._m(6),t("span",[e._v("Invite User")])])])])])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-user"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"terms"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-success",attrs:{href:"https://raw.githubusercontent.com/tks18/gindex-v4/dark-mode-0-1/CONTRIBUTING.md",target:"_blank"}},[e._v("Community Guidelines")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("label",{attrs:{for:"code"}},[t("span",{staticClass:"content has-text-white"},[e._v(" I Accept and Read the "),t("a",{staticClass:"has-text-success",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Code of Conduct")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-user-plus"})])}],c=(t("d81d"),t("b0c0"),t("d3b7"),t("25f0"),t("9062")),l=t.n(c),n=(t("e40d"),{components:{Loading:l.a},props:["nextUrl"],data:function(){return{user:{},admin:!1,superadmin:!1,disabled:!0,role:"",apiurl:"",gds:[],currgd:{},successMessage:!1,errorMessage:!1,name:"",email:"",message:"",checked:"",codechecked:"",buttondisabled:!0,resultmessage:"",loading:!1,fullpage:!0}},methods:{handleSubmit:function(e){var s=this;this.loading=!0,e.preventDefault(),this.checked&&this.codechecked&&this.name.length>0&&this.email.length>0&&this.message.length>0?this.$http.post(this.apiurl,{name:this.name,email:this.email,message:this.message,adminuseremail:this.user.email}).then((function(e){e&&(e.data.auth&&e.data.registered?(s.loading=!1,s.successMessage=!0,s.errorMessage=!1,s.resultmessage=e.data.message):(s.loading=!1,s.successMessage=!1,s.errorMessage=!0,s.resultmessage=e.data.message))})).catch((function(e){s.resultmessage=e,s.successMessage=!1,s.errorMessage=!0})):(this.loading=!1,this.successMessage=!1,this.errorMessage=!0,this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1)},validateData:function(){var e=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;e.test(this.email)&&this.checked&&this.codechecked&&this.name.length>0&&this.email.length>0&&this.message.length>0?this.buttondisabled=!1:this.buttondisabled=!0}},computed:{ismobile:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return!(e>966)}},beforeMount:function(){this.loading=!0;var e=localStorage.getItem("userdata"),s=localStorage.getItem("tokendata");if(e&&s){var t=JSON.parse(this.$hash.AES.decrypt(e,this.$pass).toString(this.$hash.enc.Utf8));this.user=t,this.loading=!1}else this.loading=!1,this.user=null},mounted:function(){this.loading=!0,this.user.admin&&this.user.superadmin?(this.apiurl=window.apiRoutes.inviteUser,this.admin=!0,this.superadmin=!0,this.role="user",this.disabled=!1,this.loading=!1):this.user.admin&&!this.user.superadmin?(this.apiurl=window.apiRoutes.inviteUser,this.admin=!0,this.superadmin=!1,this.role="user",this.disabled=!0,this.loading=!1):(this.loading=!1,this.$router.push({name:"results",params:{id:0,cmd:"result",success:!1,data:"UnAuthorized Route. Not Allowed.",redirectUrl:"/0:home/"}}))},created:function(){if(window.gds&&window.gds.length>0){this.gds=window.gds.map((function(e,s){return{name:e,id:s}}));var e=this.$route.params.id;this.gds&&this.gds.length>=e&&(this.currgd=this.gds[e])}},watch:{role:function(){"user"==this.role?(this.apiurl=window.apiRoutes.inviteUser,this.validateData()):"admin"==this.role?(this.apiurl=window.apiRoutes.inviteAdmin,this.validateData()):"superadmin"==this.role&&(this.validateData(),this.apiurl=window.apiRoutes.inviteSuperAdmin)},name:"validateData",email:"validateData",message:"validateData",checked:"validateData",codechecked:"validateData"}}),r=n,d=t("2877"),o=Object(d["a"])(r,a,i,!1,null,null,null);s["default"]=o.exports},e40d:function(e,s,t){}}]);