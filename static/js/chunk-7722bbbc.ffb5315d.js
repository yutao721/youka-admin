(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7722bbbc"],{"13a0":function(t,e,r){"use strict";r("daa0")},9429:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"user-info-head",on:{click:function(e){return t.editCropper()}}},[r("img",{staticClass:"img-circle img-lg",attrs:{src:t.options.img,title:"点击上传头像"}})]),r("el-dialog",{attrs:{title:t.title,visible:t.open,width:"800px","append-to-body":""},on:{"update:visible":function(e){t.open=e},opened:t.modalOpened,close:t.closeDialog}},[r("el-row",[r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[t.visible?r("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}}):t._e()],1),r("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[r("div",{staticClass:"avatar-upload-preview"},[r("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),r("br"),r("el-row",[r("el-col",{attrs:{lg:2,md:2}},[r("el-upload",{attrs:{action:"#","http-request":t.requestUpload,"show-file-list":!1,"before-upload":t.beforeUpload}},[r("el-button",{attrs:{size:"small"}},[t._v(" 选择 "),r("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),r("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[r("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(e){return t.changeScale(1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(e){return t.changeScale(-1)}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(e){return t.rotateLeft()}}})],1),r("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[r("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(e){return t.rotateRight()}}})],1),r("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.uploadImg()}}},[t._v("提 交")])],1)],1)],1)],1)},n=[],i=r("4360"),s=r("7e79"),a=r("c0c7"),u={components:{VueCropper:s["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:i["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){this.visible=!0},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},beforeUpload:function(t){var e=this;if(-1==t.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var r=new FileReader;r.readAsDataURL(t),r.onload=function(){e.options.img=r.result}}},uploadImg:function(){var t=this;this.$refs.cropper.getCropBlob((function(e){var r=new FormData;r.append("avatarfile",e),Object(a["m"])(r).then((function(e){t.open=!1,t.options.img="/dev-api"+e.imgUrl,i["a"].commit("SET_AVATAR",t.options.img),t.$modal.msgSuccess("修改成功"),t.visible=!1}))}))},realTime:function(t){this.previews=t},closeDialog:function(){this.options.img=i["a"].getters.avatar,this.visible=!1}}},c=u,l=(r("13a0"),r("2877")),p=Object(l["a"])(c,o,n,!1,null,"05638048",null);e["default"]=p.exports},c0c7:function(t,e,r){"use strict";r.d(e,"g",(function(){return i})),r.d(e,"e",(function(){return s})),r.d(e,"a",(function(){return a})),r.d(e,"j",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"h",(function(){return l})),r.d(e,"b",(function(){return p})),r.d(e,"f",(function(){return d})),r.d(e,"k",(function(){return f})),r.d(e,"l",(function(){return m})),r.d(e,"m",(function(){return h})),r.d(e,"d",(function(){return g})),r.d(e,"i",(function(){return b}));var o=r("b775"),n=r("c38a");function i(t){return Object(o["a"])({url:"/system/user/list",method:"get",params:t})}function s(t){return Object(o["a"])({url:"/system/user/"+Object(n["e"])(t),method:"get"})}function a(t){return Object(o["a"])({url:"/system/user",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/system/user",method:"put",data:t})}function c(t){return Object(o["a"])({url:"/system/user/"+t,method:"delete"})}function l(t,e){var r={userId:t,password:e};return Object(o["a"])({url:"/system/user/resetPwd",method:"put",data:r})}function p(t,e){var r={userId:t,status:e};return Object(o["a"])({url:"/system/user/changeStatus",method:"put",data:r})}function d(){return Object(o["a"])({url:"/system/user/profile",method:"get"})}function f(t){return Object(o["a"])({url:"/system/user/profile",method:"put",data:t})}function m(t,e){var r={oldPassword:t,newPassword:e};return Object(o["a"])({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(t){return Object(o["a"])({url:"/system/user/profile/avatar",method:"post",data:t})}function g(t){return Object(o["a"])({url:"/system/user/authRole/"+t,method:"get"})}function b(t){return Object(o["a"])({url:"/system/user/authRole",method:"put",params:t})}},daa0:function(t,e,r){}}]);