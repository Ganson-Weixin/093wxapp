(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/techanxinxi/add-or-update"],{"14e0":function(e,t,n){"use strict";(function(e){n("d7f8"),n("921b");i(n("66fd"));var t=i(n("9a65"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6f84":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var c=e[a](u),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function c(e){a(u,i,r,c,s,"next",e)}function s(e){a(u,i,r,c,s,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("9b26"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{techanmingcheng:"",techanleixing:"",tupian:"",shengchanriqi:"",baozhiqi:"",techanxiangqing:"",thumbsupnum:"",crazilynum:"",price:""},techanleixingOptions:[],techanleixingIndex:0,user:{},ro:{techanmingcheng:!1,techanleixing:!1,tupian:!1,shengchanriqi:!1,baozhiqi:!1,techanxiangqing:!1,thumbsupnum:!1,crazilynum:!1,price:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:return a=t.sent,this.user=a.data,t.next=7,this.$api.option("techanleixing","techanleixing",{});case 7:if(a=t.sent,this.techanleixingOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=17;break}return this.ruleForm.id=n.id,t.next=15,this.$api.info("techanxinxi",this.ruleForm.id);case 15:a=t.sent,this.ruleForm=a.data;case 17:if(!n.cross){t.next=60;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 20:if((t.t1=t.t0()).done){t.next=60;break}if(c=t.t1.value,"techanmingcheng"!=c){t.next=26;break}return this.ruleForm.techanmingcheng=u[c],this.ro.techanmingcheng=!0,t.abrupt("continue",20);case 26:if("techanleixing"!=c){t.next=30;break}return this.ruleForm.techanleixing=u[c],this.ro.techanleixing=!0,t.abrupt("continue",20);case 30:if("tupian"!=c){t.next=34;break}return this.ruleForm.tupian=u[c],this.ro.tupian=!0,t.abrupt("continue",20);case 34:if("shengchanriqi"!=c){t.next=38;break}return this.ruleForm.shengchanriqi=u[c],this.ro.shengchanriqi=!0,t.abrupt("continue",20);case 38:if("baozhiqi"!=c){t.next=42;break}return this.ruleForm.baozhiqi=u[c],this.ro.baozhiqi=!0,t.abrupt("continue",20);case 42:if("techanxiangqing"!=c){t.next=46;break}return this.ruleForm.techanxiangqing=u[c],this.ro.techanxiangqing=!0,t.abrupt("continue",20);case 46:if("thumbsupnum"!=c){t.next=50;break}return this.ruleForm.thumbsupnum=u[c],this.ro.thumbsupnum=!0,t.abrupt("continue",20);case 50:if("crazilynum"!=c){t.next=54;break}return this.ruleForm.crazilynum=u[c],this.ro.crazilynum=!0,t.abrupt("continue",20);case 54:if("price"!=c){t.next=58;break}return this.ruleForm.price=u[c],this.ro.price=!0,t.abrupt("continue",20);case 58:t.next=20;break;case 60:this.styleChange();case 61:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shengchanriqiChange:function(e){this.ruleForm.shengchanriqi=e.target.value,this.$forceUpdate()},techanleixingChange:function(e){this.techanleixingIndex=e.target.value,this.ruleForm.techanleixing=this.techanleixingOptions[this.techanleixingIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.techanmingcheng){e.next=3;break}return this.$utils.msg("特产名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.techanleixing){e.next=6;break}return this.$utils.msg("特产类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=9;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=12;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(this.ruleForm.price){e.next=15;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 15:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=18;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("techanxinxi",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("techanxinxi",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},"81dd":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"9a65":function(e,t,n){"use strict";n.r(t);var i=n("81dd"),r=n("d3f7");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("dbc6");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"3d47279a",null,!1,i["a"],u);t["default"]=s.exports},ca39:function(e,t,n){},d3f7:function(e,t,n){"use strict";n.r(t);var i=n("6f84"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},dbc6:function(e,t,n){"use strict";var i=n("ca39"),r=n.n(i);r.a}},[["14e0","common/runtime","common/vendor"]]]);