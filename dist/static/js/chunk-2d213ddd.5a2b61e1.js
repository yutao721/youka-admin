(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ddd"],{af02:function(e,r,t){"use strict";t.r(r);var l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"app-container"},[t("h3",{staticClass:"text-3xl my-10"},[e._v("富文本上传示例")]),t("div",{staticClass:"my-10"},[t("h3",{staticClass:"my-5 text-xl"},[e._v("1.wangeditor单独使用")]),t("wangeditor",{model:{value:e.remark,callback:function(r){e.remark=r},expression:"remark"}})],1),t("div",{staticClass:"my-10"},[t("h3",{staticClass:"my-5 text-xl"},[e._v("2.wangeditor在element表单中使用")]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name",required:""}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(r){e.$set(e.ruleForm,"date1",r)},expression:"ruleForm.date1"}})],1)],1),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.ruleForm.date2,callback:function(r){e.$set(e.ruleForm,"date2",r)},expression:"ruleForm.date2"}})],1)],1)],1),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",{attrs:{label:"活动形式1",prop:"desc1",required:""}},[t("div",[t("wangeditor",{model:{value:e.ruleForm.desc1,callback:function(r){e.$set(e.ruleForm,"desc1",r)},expression:"ruleForm.desc1"}})],1)]),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),t("div",{staticClass:"my-10"},[t("h3",{staticClass:"my-5 text-xl"},[e._v("3.FormRenderer中使用")]),t("form-renderer",{ref:"form",staticClass:"my-10 w-1/2",attrs:{"label-width":"190px",items:e.items,readonly:!1},model:{value:e.form,callback:function(r){e.form=r},expression:"form"}}),t("div",{staticClass:"flex justify-center"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleNextClick}},[e._v("提交认证信息")])],1)],1),t("div",{staticClass:"my-10"},[t("h3",{staticClass:"my-5 text-xl"},[e._v("4.wangeditor单独使用readonly")]),t("wangeditor",{attrs:{readonly:!0},model:{value:e.remark,callback:function(r){e.remark=r},expression:"remark"}})],1)])},a=[],s=t("c7eb"),i=t("1da1"),o=(t("caad"),t("e1bd")),n=t("ab76"),c={components:{wangeditor:o["a"],FormRenderer:n["a"]},data:function(){return{remark:"富文本上传示例",ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",desc2:"",desc1:""},rules:{region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}],desc1:[{required:!0,message:"请填写活动形式1",trigger:"blur"}]},form:{verifyProcess:10,socialCreditCode:"123124",checkboxKey:[],radioKey:"",password:"",confirmPasswordKey:"",remark2:""},items:[{key:"radioKey",label:"radioLabel",type:"radio",list:[{label:"苹果",value:"1"},{label:"香蕉",value:"2"},{label:"菠萝",value:"3"},{label:"哈密瓜",value:"4"}]},{key:"checkboxKey",label:"checkboxLabel",type:"checkbox",list:[{label:"苹果",value:"1"},{label:"香蕉",value:"2"},{label:"菠萝",value:"3"},{label:"哈密瓜",value:"4"}]},{key:"reservationTime",label:"开启预热",type:"datetime",tooltip:"在该时间之前，项目为代开始阶段，用户无法查看项目详情并预约项目。",validator:function(e,r){r.value.startTime&&r.validateField(["startTime"])}},{key:"idOverTime",label:"身份证到期时间",type:"date",placeholder:"请选择到期时间",valueFormat:"yyyyMMdd",disabled:function(e){return!1},disabledDate:function(e){return e<Date.now()}},{key:"time",label:"交易时间",type:"daterange"},{key:"time1",label:"交易时间1",type:"datetimerange"},{key:"businessLicense",label:"营业执照",type:"image",required:!0},{key:"missKey",label:"秘钥",type:"files",required:!0},{key:"linkedAccttype",label:"银行卡类型",type:"radio",list:[{label:"法人银行卡",value:"LEGALREPT_BANK_CARD"},{label:"对公账户",value:"ENTERPRISE_BANK_ACCT"}]},{key:"socialCreditCode",label:"统一社会信用代码",placeholder:"15、18位字母数字",type:"text",required:!0,max:18,validator:function(e){if(!e||"string"!==typeof e||![15,18].includes(e.length))throw new Error("请输入15或18位字母数字")},disabled:function(e){return!1}},{key:"socialCreditOverTime",label:"过期时间",type:"date",valueFormat:"yyyyMMdd",hidden:function(e){},disabled:function(e){return e.noSocialCreditOverTime},disabledDate:function(e){return e<Date.now()}},{key:"businessLicenseName",label:"营业执照名称",type:"text",max:30,disabled:function(e){return 10===e.verifyProcess||20===e.verifyProcess}},{key:"address",label:"详细地址",type:"text",max:50,placeholder:"营业执照上经营场所一栏的完整地址",rules:[{min:4,message:"长度必须大于或等于4个字符",trigger:"blur"}]},{key:"email",label:"邮箱",placeholder:"请输入企业邮箱",type:"email",max:30},{key:"remark2",label:"描述",type:"richText",required:!0}]}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},handleNextClick:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$refs.form.validate();case 3:r.next=8;break;case 5:return r.prev=5,r.t0=r["catch"](0),r.abrupt("return");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},d=c,u=t("2877"),m=Object(u["a"])(d,l,a,!1,null,"0db03b50",null);r["default"]=m.exports}}]);