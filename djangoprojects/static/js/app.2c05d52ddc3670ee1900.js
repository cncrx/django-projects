webpackJsonp([1],{"1uuo":function(t,e){},"50Lv":function(t,e){},"7QVd":function(t,e){},E4C0:function(t,e){},EGbu:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Layout",[o("Header",{staticStyle:{background:"rgba(179, 214, 209, 0.41)"}},[o("router-link",{attrs:{to:"/vue"}},[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"logo-vimeo",size:"20"}}),t._v(" "),o("span",[t._v("关于")])],1),t._v(" "),o("Divider",{attrs:{type:"vertical"}}),t._v(" "),o("router-link",{attrs:{to:"/"}},[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"md-analytics",size:"20"}}),t._v(" "),o("span",[t._v("首页")])],1),t._v(" "),o("Divider",{attrs:{type:"vertical"}}),t._v(" "),o("router-link",{attrs:{to:"/login"}},[o("Icon",{staticStyle:{"padding-right":"10px"},attrs:{type:"md-contact",size:"20"}}),t._v(" "),o("span",[t._v("登录/注册")])],1),t._v(" "),t.username_logged?o("span",{staticStyle:{"margin-left":"25px",padding:"12px","font-size":"18px","border-radius":"10px",background:"#F5F7F9"}},[t._v("你好，"+t._s(t.username_logged)+" 欢迎登录"),o("Divider",{attrs:{type:"vertical"}}),o("span",{staticStyle:{color:"#57A3F3",cursor:"pointer"},on:{click:t.GotoPersonalCenter}},[t._v("个人中心")]),o("Divider",{attrs:{type:"vertical"}}),o("span",{staticStyle:{color:"#57A3F3",cursor:"pointer"},on:{click:t.logout}},[t._v("注销")])],1):t._e()],1),t._v(" "),o("Content",[o("router-view")],1),t._v(" "),o("Footer",[t._v("-- 兼职平台 --")])],1)],1)},staticRenderFns:[]};var r=o("VU/8")({name:"app",data:function(){return{username_logged:this.$cookies.get("username_logged")}},methods:{GotoPersonalCenter:function(){this.$router.replace({name:"PersonalCenter"})},logout:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/logout/").then(function(e){t.$cookies.remove("username_logged"),t.$Message.success("注销成功"),t.username_logged=""}).catch(function(e){t.$Message.error("注销失败，请稍后重试")})}}},s,!1,function(t){o("EGbu")},null,null).exports,i=o("/ocq"),n=o("b3L9"),l=o.n(n),c=(o("7QVd"),o("mtWM")),p=o.n(c),m=o("ppUw"),u=o.n(m),d=o("mw3O"),f=o.n(d);var h={host:"http://120.79.85.160:80"},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._v(" "),o("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),o("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),o("br"),t._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var g=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){o("1uuo")},"data-v-d8ec41bc",null).exports,b={name:"Index",data:function(){return{jobsList:[],jobsCount:0,pageSize:9,showJobsList:[]}},created:function(){this.get_jobs_list(),this.$Notice.info({title:"测试账号",desc:"兼职用户：ptuser101，密码 123456； 公司用户：com01，密码 com01",duration:12})},methods:{get_jobs_list:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/jobs/").then(function(e){t.jobsList=e.data,t.jobsCount=t.jobsList.length,t.jobsCount<t.pageSize?t.showJobsList=t.jobsList:t.showJobsList=t.jobsList.slice(0,t.pageSize)}).catch(function(e){console.log(e),t.$Message.error("获取工作列表失败，请稍后重试")})},GotoJobDetails:function(t){this.$router.push({name:"JobDetails",params:{id:t}})},changePage:function(t){var e=(t-1)*this.pageSize,o=t*this.pageSize;this.showJobsList=this.jobsList.slice(e,o)}}},y={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Index"}},[o("Row",{staticStyle:{"margin-top":"30px"}},t._l(t.showJobsList,function(e,a){return o("div",{key:a,staticClass:"container-jobs-list"},[o("Col",{staticStyle:{"padding-bottom":"50px"},attrs:{span:"5",offset:"2"}},[o("Card",{staticStyle:{width:"400px",height:"230px",padding:"10px"}},[o("p",{staticStyle:{"font-weight":"bold"},attrs:{slot:"title"},slot:"title"},[o("Icon",{attrs:{type:"ios-arrow-forward"}}),t._v("\n          "+t._s(e.JobName)+"\n        ")],1),t._v(" "),o("a",{attrs:{slot:"extra"},on:{click:function(o){return t.GotoJobDetails(e.id)}},slot:"extra"},[o("Icon",{attrs:{type:"ios-loop-strong"}}),t._v("\n          查看\n        ")],1),t._v(" "),o("ul",[o("li",[t._v("城市："+t._s(e.JobCity))]),t._v(" "),o("li",[t._v("位置："+t._s(e.JobLoc))]),t._v(" "),o("li",[t._v("薪酬："+t._s(e.JobSalary)+"元")]),t._v(" "),o("li",[t._v("工作时间："+t._s(e.JobWorkTime))])])])],1)],1)}),0),t._v(" "),o("Row",[o("Col",[o("Page",{attrs:{total:t.jobsCount,"page-size":t.pageSize},on:{"on-change":t.changePage}})],1)],1)],1)},staticRenderFns:[]};var _=o("VU/8")(b,y,!1,function(t){o("50Lv")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-main",attrs:{id:"Login"}},[o("div",{staticClass:"switch-btn",staticStyle:{margin:"35px auto"}},[o("Row",[o("Col",{attrs:{span:"4",offset:"10"}},[o("Button",{attrs:{type:t.showLoginTab?"primary":"default",size:t.buttonSize,icon:"md-contact"},on:{click:function(e){return t.switchTab()}}},[t._v("登录\n      ")]),t._v(" "),o("Divider",{attrs:{type:"vertical"}}),t._v(" "),o("Button",{attrs:{type:t.showRegTab?"primary":"default",size:t.buttonSize,icon:"md-log-in"},on:{click:function(e){return t.switchTab()}}},[t._v("注册\n      ")])],1)],1)],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoginTab,expression:"showLoginTab"}],staticClass:"container-login"},[o("Row",[o("Col",{attrs:{span:"4",offset:"10"}},[o("Form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.ruleLogin}},[o("FormItem",{attrs:{prop:"username"}},[o("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:t.formLogin.username,callback:function(e){t.$set(t.formLogin,"username",e)},expression:"formLogin.username"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),o("FormItem",{attrs:{prop:"password"}},[o("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"default"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)],1)],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showRegTab,expression:"showRegTab"}],staticClass:"container-reg"},[o("Row",[o("Col",{attrs:{span:"4",offset:"10"}},[o("RadioGroup",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"button"},model:{value:t.regType,callback:function(e){t.regType=e},expression:"regType"}},[o("span",{on:{click:t.switchRegType}},[o("Radio",{attrs:{label:"兼职用户"}})],1),t._v(" "),o("span",{on:{click:t.switchRegType}},[o("Radio",{attrs:{label:"公司用户"}})],1)])],1),t._v(" "),o("Col",{directives:[{name:"show",rawName:"v-show",value:t.isPTUser,expression:"isPTUser"}],attrs:{span:"4",offset:"10"}},[o("Form",{ref:"formReg",attrs:{model:t.formReg,"label-position":"left",rules:t.ruleReg,"label-width":80}},[o("FormItem",{attrs:{prop:"username",label:"用户名"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.username,callback:function(e){t.$set(t.formReg,"username",e)},expression:"formReg.username"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"password",label:"密码"}},[o("Input",{attrs:{type:"password"},model:{value:t.formReg.password,callback:function(e){t.$set(t.formReg,"password",e)},expression:"formReg.password"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"avatar",label:"头像"}},[o("Upload",{ref:"upload",attrs:{format:["jpg","jpeg","png"],"max-size":2048,"show-upload-list":!1,"on-success":t.avatarUploadSuccess,"on-format-error":t.avatarFormatError,"on-exceeded-size":t.avatarMaxSize,"on-error":t.avatarUploadError,action:"//127.0.0.1:9000/pt/avatar/upload/"},model:{value:t.formReg.avatar,callback:function(e){t.$set(t.formReg,"avatar",e)},expression:"formReg.avatar"}},[o("Button",{attrs:{icon:"ios-share-outline"}},[t._v("上传头像 (可选)")])],1)],1),t._v(" "),o("FormItem",{attrs:{prop:"city",label:"所在城市"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.city,callback:function(e){t.$set(t.formReg,"city",e)},expression:"formReg.city"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"phone_number",label:"手机号"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.phone_number,callback:function(e){t.$set(t.formReg,"phone_number",e)},expression:"formReg.phone_number"}})],1),t._v(" "),o("FormItem",{attrs:{label:"个人简介",prop:"intro"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"可选，请输入一段个人简介"},model:{value:t.formReg.intro,callback:function(e){t.$set(t.formReg,"intro",e)},expression:"formReg.intro"}})],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"default"},on:{click:t.register}},[t._v("注册")])],1)],1)],1),t._v(" "),o("Col",{directives:[{name:"show",rawName:"v-show",value:!t.isPTUser,expression:"!isPTUser"}],attrs:{span:"4",offset:"10"}},[o("Form",{ref:"formReg",attrs:{model:t.formReg,"label-position":"left",rules:t.ruleReg,"label-width":80}},[o("FormItem",{attrs:{prop:"companyUsername",label:"公司名"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.companyUsername,callback:function(e){t.$set(t.formReg,"companyUsername",e)},expression:"formReg.companyUsername"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"password",label:"密码"}},[o("Input",{attrs:{type:"password"},model:{value:t.formReg.password,callback:function(e){t.$set(t.formReg,"password",e)},expression:"formReg.password"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"avatar",label:"头像"}},[o("Upload",{ref:"upload",attrs:{format:["jpg","jpeg","png"],"max-size":2048,"show-upload-list":!1,"on-success":t.avatarUploadSuccess,"on-format-error":t.avatarFormatError,"on-exceeded-size":t.avatarMaxSize,"on-error":t.avatarUploadError,action:"//120.79.85.160:80/pt/avatar/"},model:{value:t.formReg.avatar,callback:function(e){t.$set(t.formReg,"avatar",e)},expression:"formReg.avatar"}},[o("Button",{attrs:{icon:"ios-share-outline"}},[t._v("上传头像")])],1)],1),t._v(" "),o("FormItem",{attrs:{prop:"city",label:"所在城市"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.city,callback:function(e){t.$set(t.formReg,"city",e)},expression:"formReg.city"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"address",label:"详细地址"}},[o("Input",{attrs:{type:"text"},model:{value:t.formReg.address,callback:function(e){t.$set(t.formReg,"address",e)},expression:"formReg.address"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"intro",label:"公司简介"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"可选，请输入一段简介"},model:{value:t.formReg.intro,callback:function(e){t.$set(t.formReg,"intro",e)},expression:"formReg.intro"}})],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"default"},on:{click:t.register}},[t._v("注册")])],1)],1)],1)],1)],1)])},staticRenderFns:[]};var w=o("VU/8")({name:"Login",data:function(){return{buttonSize:"large",regType:"兼职用户",showLoginTab:!0,showRegTab:!1,isPTUser:!0,formLogin:{username:"",password:""},ruleLogin:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:5,message:"密码长度小于5位",trigger:"blur"}]},formReg:{username:"",password:"",avatar:"",city:"",phone_number:"",intro:"",companyUsername:"",address:"",params:"",regURI:""},ruleReg:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:5,message:"密码长度小于5位",trigger:"blur"}],city:[{required:!0,message:"请输入所在地",trigger:"blur"}],phone_number:[{required:!0,message:"请输入手机号",trigger:"blur"},{type:"string",min:11,max:11,message:"请输入11位手机号",trigger:"blur"}],companyUsername:[{required:!0,message:"请输入公司名",trigger:"blur"}],address:[{required:!0,message:"请输入详细地址",trigger:"blur"}]}}},methods:{switchTab:function(t){this.showLoginTab=!this.showLoginTab,this.showRegTab=!this.showRegTab},switchRegType:function(){this.isPTUser="兼职用户"!==this.regType},login:function(){var t=this;this.formLogin.username,this.formLogin.password,this.$axios.post(this.GLOBAL.host+"/pt/login/",this.$qs.stringify(this.formLogin),{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.$Message.success("登录成功"),t.$cookies.set("username_logged",t.formLogin.username),t.$router.replace({name:"Index"}),t.$router.go(0)}).catch(function(e){t.$Message.error("登录失败，请先注销用户后登录或清空下 Cookies"),t.$cookies.remove("sessionid"),t.$cookies.remove("username_logged"),t.$Message.success("已自动清空 Cookies，请重试")})},register:function(){var t=this;this.isPTUser?(this.formReg.params={username:this.formReg.username,password:this.formReg.password,Avatar:this.formReg.avatar,PhoneNumber:this.formReg.phone_number,City:this.formReg.city,Intro:this.formReg.intro},this.formReg.regURI="/pt/ptu/"):(this.formReg.params={username:this.formReg.companyUsername,password:this.formReg.password,Avatar:this.formReg.avatar,Address:this.formReg.address,City:this.formReg.city,Intro:this.formReg.intro},this.formReg.regURI="/pt/cu/"),this.$axios.post(this.GLOBAL.host+this.formReg.regURI,this.$qs.stringify(this.formReg.params),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.$Message.success("注册成功"),t.$router.replace({name:"Index"}),t.$router.go(0)}).catch(function(e){t.$Message.error("注册失败，请先注销用户后注册或清空下 Cookies"),t.$cookies.remove("sessionid"),t.$cookies.remove("username_logged"),t.$Message.success("已自动清空 Cookies，请重试")})},avatarUploadSuccess:function(t){this.formReg.avatar=t.fp,this.$Message.success("头像上传成功，请继续注册")},avatarFormatError:function(t){this.$Message.warning(t.name+"头像格式不正确，请选择 'jpg','jpeg','png'格式上传")},avatarMaxSize:function(t){this.$Message.warning(t.name+"头像过大，上传限制为2M")},avatarUploadError:function(){this.$Message.error("头像上传失败，请重试")}}},x,!1,function(t){o("il/z")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"JobDetails"}},[o("div",{staticClass:"container-job-details"},[o("ul",[o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[o("li",{staticStyle:{"font-size":"32px","padding-top":"35px"}},[t._v(t._s(t.jobDetails.JobName))])])],1),t._v(" "),o("Row",{staticStyle:{"font-size":"18px"},attrs:{type:"flex",justify:"center"}},[o("Col",[o("li",[t._v(t._s(t.jobDetails.JobCity)+"·"+t._s(t.jobDetails.JobLoc))])]),t._v(" "),o("Divider",{attrs:{type:"vertical"}}),t._v(" "),o("Col",[o("li",[t._v(t._s(t.jobDetails.JobWorkTime)+"工作")])])],1),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",{attrs:{span:""}},[o("li",{staticStyle:{"font-size":"24px"}},[o("span",{staticStyle:{color:"coral"}},[t._v(t._s(t.jobDetails.JobSalary))]),t._v(" 元")])])],1),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",{staticStyle:{width:"550px","font-size":"16px"}},[o("li",[o("span",{staticStyle:{"font-size":"24px"}},[t._v("工作描述：")]),o("br"),o("br"),t._v(t._s(t.jobDetails.JobDetail))])])],1)],1)]),t._v(" "),o("div",{staticClass:"container-btns"},[o("Row",{staticStyle:{"padding-top":"50px"}},[o("Col",{attrs:{offset:"7"}},[o("Button",{attrs:{type:"default",icon:"ios-at"},on:{click:t.GotoCompany}},[t._v("所属公司")])],1)],1),t._v(" "),o("Row",{staticStyle:{"padding-top":"15px"}},[o("Col",{attrs:{offset:"7"}},[o("Button",{attrs:{type:"default",icon:"md-star-outline"},on:{click:t.FavoriteJob}},[t._v("收藏岗位")])],1)],1),t._v(" "),o("Row",{staticStyle:{"padding-top":"15px"}},[o("Col",{attrs:{offset:"7"}},[o("Button",{attrs:{type:"primary",icon:"md-clipboard"},on:{click:t.ApplyJob}},[t._v("应聘申请")])],1)],1)],1)])},staticRenderFns:[]};var R=o("VU/8")({name:"JobDetails",data:function(){return{jobID:"",jobDetails:""}},created:function(){this.getParam(),this.requestJobDetails()},methods:{getParam:function(){this.jobID=this.$route.params.id},requestJobDetails:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/jobs/"+this.jobID).then(function(e){t.jobDetails=e.data,t.$Message.success("获取兼职详情成功")}).catch(function(e){t.$Message.error("获取兼职详情失败，请稍后重试")})},FavoriteJob:function(){var t=this,e={BelongtoJob:this.jobDetails.id,JobName:this.jobDetails.JobName};this.$axios.post(this.GLOBAL.host+"/pt/favoritejobs/",this.$qs.stringify(e),{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.$Message.success("收藏成功")}).catch(function(e){t.$Message.error("收藏失败，不是兼职用户或未登录")})},ApplyJob:function(){var t=this,e={BelongtoJob:this.jobDetails.id,BelongtoCompany:this.jobDetails.BelongtoCompany,JobName:this.jobDetails.JobName};this.$axios.post(this.GLOBAL.host+"/pt/candidates/",this.$qs.stringify(e),{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.$Message.success("应聘提交成功")}).catch(function(e){t.$Message.error("应聘提交失败，不是兼职用户或未登录")})},GotoCompany:function(){this.$router.push({name:"CompanyDetails",params:{id:this.jobDetails.BelongtoCompany}})}}},k,!1,function(t){o("E4C0")},null,null).exports,$={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"CompanyDetails"}},[o("div",{staticClass:"container-company-details"},[o("Row",{staticStyle:{"font-size":"26px","padding-top":"60px"},attrs:{type:"flex",justify:"center"}},[o("Col",{staticStyle:{"padding-right":"50px"}},[o("Avatar",{attrs:{src:t.avatarSrc,shape:"square",size:"180"}})],1),t._v(" "),o("Row",{staticStyle:{"line-height":"60px"}},[o("Col",[t._v(t._s(t.companyDetails.Companyname))]),t._v(" "),o("Col",[t._v(t._s(t.companyDetails.City))]),t._v(" "),o("Col",[t._v(t._s(t.companyDetails.Address))])],1)],1),t._v(" "),o("Row",{staticStyle:{padding:"50px 0"},attrs:{type:"flex",justify:"center"}},[o("Col",{staticStyle:{width:"550px","font-size":"16px"}},[o("span",{staticStyle:{"font-size":"24px"}},[t._v("公司简介：")]),o("br"),o("br"),t._v(t._s(t.companyDetails.Intro)+"\n      ")])],1)],1)])},staticRenderFns:[]};var j=o("VU/8")({name:"CompanyDetails",data:function(){return{companyID:"",avatarSrc:this.GLOBAL.host+"/pt/avatar/?id=",companyDetails:""}},created:function(){this.getParam(),this.requestCompanyDetails()},methods:{getParam:function(){this.companyID=this.$route.params.id,this.avatarSrc=this.avatarSrc+this.$route.params.id},requestCompanyDetails:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/cu/"+this.companyID).then(function(e){t.companyDetails=e.data,t.$Message.success("获取公司详情成功")}).catch(function(e){t.$Message.error("获取公司详情失败，请稍后重试")})}}},$,!1,function(t){o("l233")},null,null).exports,C={name:"PersonalCenter",data:function(){var t=this;return{isPartTimeUser:!1,uid:"",candidateText:"",jobText:"",formUpdate:{avatar:"",phone_number:"",city:"",address:"",intro:""},formJob:{jobName:"",jobLoc:"",jobSalary:"",jobWorkTime:"",jobCity:"",jobDetail:""},partTimeUserColumns:[{title:"岗位",key:"JobName"},{title:"是否录用",key:"isHire"},{title:"操作",key:"action",fixed:"right",width:100,render:function(e,o){return e("div",[e("Button",{props:{type:"text"},on:{click:function(){t.GotoJobDetails(o.index,!0)}}},"浏览")])}}],jobsApplyList:[],CompanyColumns:[{title:"岗位",key:"JobName"},{title:"应聘者",key:"CandidateName"},{title:"是否录用",key:"isHire"},{title:"操作",key:"action",fixed:"right",width:100,render:function(e,o){return e("div",[e("Button",{props:{type:"text"},on:{click:function(){t.candidatePass(o.index)}}},"通过")])}}],candidatesList:[],favjobsColumns:[{title:"岗位",key:"JobName"},{title:"操作",key:"action",fixed:"right",width:100,render:function(e,o){return e("div",[e("Button",{props:{type:"text"},on:{click:function(){t.GotoJobDetails(o.index,!1)}}},"浏览")])}}],favJobsList:[]}},created:function(){setTimeout("",5e3),this.checkUserType()},methods:{checkUserType:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/checkusertype/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.isPartTimeUser="pt"===e.data.user_type,t.uid=e.data.user_id,t.isPartTimeUser?(t.getJobsApplyList(),t.getFavoriteJobs(),t.candidateText="已提交申请岗位",t.jobText="已收藏岗位"):(t.getCandidatesList(),t.candidateText="待处理应聘申请",t.jobText="添加工作")}).catch(function(e){console.log(e),t.$Message.error("请稍后重试")})},avatarUploadSuccess:function(t){this.formUpdate.avatar=t.fp,this.$Message.success("头像上传成功")},avatarFormatError:function(t){this.$Message.warning(t.name+"格式不正确，请选择 'jpg','jpeg','png'格式上传")},avatarMaxSize:function(t){this.$Message.warning(t.name+"过大，上传限制为2M")},avatarUploadError:function(){this.$Message.error("上传失败，请稍后重试")},updateProfile:function(){var t=this;if(this.formUpdate.avatar)var e=this.formUpdate.avatar;if(this.formUpdate.city)var o=this.formUpdate.city;if(this.formUpdate.intro)var a=this.formUpdate.intro;if(this.isPartTimeUser){if(this.formUpdate.phone_number)var s=this.formUpdate.phone_number;var r={Avatar:e,City:o,PhoneNumber:s,Intro:a}}else{if(this.formUpdate.address)var i=this.formUpdate.address;r={Avatar:e,City:o,Address:i,Intro:a}}this.$axios.patch(this.GLOBAL.host+"/pt/profile/",this.$qs.stringify(r),{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.$Message.success("更新成功")}).catch(function(e){t.$Message.error("更新失败，请稍后重试")})},getJobsApplyList:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/candidates/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.jobsApplyList=e.data}).catch(function(e){console.log(e),t.$Message.error("获取已申请岗失败，请稍后重试")})},getFavoriteJobs:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/favoritejobs/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.favJobsList=e.data}).catch(function(e){console.log(e),t.$Message.error("获取收藏岗位失败，请稍后重试")})},GotoJobDetails:function(t,e){if(e)var o=this.jobsApplyList[t].BelongtoJob;else o=this.favJobsList[t].BelongtoJob;this.$router.push({name:"JobDetails",params:{id:o}})},getCandidatesList:function(){var t=this;this.$axios.get(this.GLOBAL.host+"/pt/candidates/",{headers:{"X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){console.log(e),t.candidatesList=e.data}).catch(function(e){console.log(e),t.$Message.error("获取已申请岗失败，请稍后重试")})},candidatePass:function(t){var e=this;this.$axios.patch(this.GLOBAL.host+"/pt/candidates/"+this.candidatesList[t].id,this.$qs.stringify({isHire:!0}),{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(t){e.$Message.success("更新成功")}).catch(function(t){e.$Message.error("更新失败，请稍后重试")})},addJob:function(){var t=this,e={JobName:this.formJob.jobName,JobLoc:this.formJob.jobLoc,JobSalary:this.formJob.jobSalary,JobWorkTime:this.formJob.jobWorkTime,JobCity:this.formJob.jobCity,JobDetail:this.formJob.jobDetail,BelongtoCompany:this.uid};console.log(e),this.$axios.post(this.GLOBAL.host+"/pt/jobs/create/",this.$qs.stringify(e),{headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRFToken":this.$cookies.get("csrftoken")}}).then(function(e){t.$Message.success("添加工作成功")}).catch(function(e){t.$Message.error("添加工作失败，请稍后重试")})}}},L={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"PersonalCenter"}},[o("div",{staticClass:"container-personal-center"},[o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[o("div",{staticClass:"title"},[t._v("\n        修改资料\n      ")])])],1),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[t.isPartTimeUser?o("Form",{attrs:{"label-position":"left","label-width":80}},[o("FormItem",{attrs:{prop:"avatar",label:"头像"}},[o("Upload",{ref:"upload",attrs:{format:["jpg","jpeg","png"],"max-size":2048,"show-upload-list":!1,"on-success":t.avatarUploadSuccess,"on-format-error":t.avatarFormatError,"on-exceeded-size":t.avatarMaxSize,"on-error":t.avatarUploadError,action:"//127.0.0.1:9000/pt/avatar/"},model:{value:t.formUpdate.avatar,callback:function(e){t.$set(t.formUpdate,"avatar",e)},expression:"formUpdate.avatar"}},[o("Button",{attrs:{icon:"ios-share-outline"}},[t._v("更新头像")])],1)],1),t._v(" "),o("FormItem",{attrs:{prop:"city",label:"所在城市"}},[o("Input",{attrs:{type:"text"},model:{value:t.formUpdate.city,callback:function(e){t.$set(t.formUpdate,"city",e)},expression:"formUpdate.city"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"phone_number",label:"手机号"}},[o("Input",{attrs:{type:"text"},model:{value:t.formUpdate.phone_number,callback:function(e){t.$set(t.formUpdate,"phone_number",e)},expression:"formUpdate.phone_number"}})],1),t._v(" "),o("FormItem",{attrs:{label:"个人简介",prop:"intro"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.formUpdate.intro,callback:function(e){t.$set(t.formUpdate,"intro",e)},expression:"formUpdate.intro"}})],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:t.updateProfile}},[t._v("更新资料")])],1)],1):t._e(),t._v(" "),t.isPartTimeUser?t._e():o("Form",{attrs:{"label-position":"left","label-width":80}},[o("FormItem",{attrs:{prop:"avatar",label:"头像"}},[o("Upload",{ref:"upload",attrs:{format:["jpg","jpeg","png"],"max-size":2048,"show-upload-list":!1,"on-success":t.avatarUploadSuccess,"on-format-error":t.avatarFormatError,"on-exceeded-size":t.avatarMaxSize,"on-error":t.avatarUploadError,action:"//127.0.0.1:9000/pt/avatar/"},model:{value:t.formUpdate.avatar,callback:function(e){t.$set(t.formUpdate,"avatar",e)},expression:"formUpdate.avatar"}},[o("Button",{attrs:{icon:"ios-share-outline"}},[t._v("更新头像")])],1)],1),t._v(" "),o("FormItem",{attrs:{prop:"city",label:"所在城市"}},[o("Input",{attrs:{type:"text"},model:{value:t.formUpdate.city,callback:function(e){t.$set(t.formUpdate,"city",e)},expression:"formUpdate.city"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"address",label:"地址"}},[o("Input",{attrs:{type:"text"},model:{value:t.formUpdate.address,callback:function(e){t.$set(t.formUpdate,"address",e)},expression:"formUpdate.address"}})],1),t._v(" "),o("FormItem",{attrs:{label:"公司简介",prop:"intro"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.formUpdate.intro,callback:function(e){t.$set(t.formUpdate,"intro",e)},expression:"formUpdate.intro"}})],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:t.updateProfile}},[t._v("更新资料")])],1)],1)],1)],1),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[o("div",{staticClass:"title"},[t._v("\n        "+t._s(t.candidateText)+"\n      ")])])],1),t._v(" "),t.isPartTimeUser?o("div",{staticStyle:{width:"500px",margin:"0 auto"}},[o("Table",{attrs:{columns:t.partTimeUserColumns,data:t.jobsApplyList}})],1):t._e(),t._v(" "),t.isPartTimeUser?t._e():o("div",{staticStyle:{width:"500px",margin:"0 auto"}},[o("Table",{attrs:{columns:t.CompanyColumns,data:t.candidatesList}})],1),t._v(" "),o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[o("div",{staticClass:"title"},[t._v("\n        "+t._s(t.jobText)+"\n      ")])])],1),t._v(" "),t.isPartTimeUser?o("div",{staticStyle:{width:"500px",margin:"0 auto"}},[o("Table",{attrs:{columns:t.favjobsColumns,data:t.favJobsList}})],1):t._e(),t._v(" "),t.isPartTimeUser?t._e():o("Row",{attrs:{type:"flex",justify:"center"}},[o("Col",[o("div",[o("Form",{attrs:{"label-position":"left","label-width":80}},[o("FormItem",{attrs:{prop:"jobName",label:"岗位名称"}},[o("Input",{attrs:{type:"text"},model:{value:t.formJob.jobName,callback:function(e){t.$set(t.formJob,"jobName",e)},expression:"formJob.jobName"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"city",label:"所在城市"}},[o("Input",{attrs:{type:"text"},model:{value:t.formJob.jobCity,callback:function(e){t.$set(t.formJob,"jobCity",e)},expression:"formJob.jobCity"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"jobLoc",label:"详细地址"}},[o("Input",{attrs:{type:"text"},model:{value:t.formJob.jobLoc,callback:function(e){t.$set(t.formJob,"jobLoc",e)},expression:"formJob.jobLoc"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"jobSalary",label:"工资薪酬"}},[o("Input",{attrs:{type:"text"},model:{value:t.formJob.jobSalary,callback:function(e){t.$set(t.formJob,"jobSalary",e)},expression:"formJob.jobSalary"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"jobWorkTime",label:"工作时间"}},[o("Input",{attrs:{type:"text"},model:{value:t.formJob.jobWorkTime,callback:function(e){t.$set(t.formJob,"jobWorkTime",e)},expression:"formJob.jobWorkTime"}})],1),t._v(" "),o("FormItem",{attrs:{label:"工作详情",prop:"jobDetail"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.formJob.jobDetail,callback:function(e){t.$set(t.formJob,"jobDetail",e)},expression:"formJob.jobDetail"}})],1),t._v(" "),o("FormItem",[o("Button",{attrs:{type:"primary"},on:{click:t.addJob}},[t._v("添加工作")])],1)],1)],1)])],1)],1)])},staticRenderFns:[]};var U=o("VU/8")(C,L,!1,function(t){o("kv3h")},null,null).exports;a.default.config.productionTip=!1,a.default.use(l.a),a.default.use(i.a),a.default.prototype.$axios=p.a,a.default.use(u.a),p.a.defaults.withCredentials=!0,a.default.prototype.$qs=f.a,a.default.prototype.GLOBAL=h;var I=[{path:"/vue",component:g,name:"HelloWorld",meta:{title:"兼职平台 - 欢迎页"}},{path:"/",component:_,name:"Index",meta:{title:"兼职平台 - 首页"}},{path:"/login",component:w,name:"Login",meta:{title:"兼职平台 - 登录/注册"}},{path:"/jobDetails",component:R,name:"JobDetails",meta:{title:"兼职平台 - 兼职详情页"}},{path:"/companyDetails",component:j,name:"CompanyDetails",meta:{title:"兼职平台 - 公司页"}},{path:"/personalCenter",component:U,name:"PersonalCenter",meta:{title:"个人中心"}}],J=new i.a({routes:I});J.beforeEach(function(t,e,o){if(t.meta.title&&(document.title=t.meta.title),"/jobDetails"===t.path){if(!t.params.id)return void alert("无传参");o()}if("/companyDetails"===t.path){if(!t.params.id)return void alert("无传参");o()}o()}),new a.default({el:"#app",template:"<App/>",components:{App:r},router:J}).$mount("#app")},"il/z":function(t,e){},kv3h:function(t,e){},l233:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2c05d52ddc3670ee1900.js.map