(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3736"],{"01dc":function(i,s,l){"use strict";l.r(s);var t=function(){var i=this,s=i.$createElement,l=i._self._c||s;return l("div",{staticClass:"app-container"},[l("h3",{staticClass:"text-3xl my-10"},[i._v("上传文件示例")]),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("1.上传文件(组件默认值)")]),l("FileUpload",{model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("2.上传文件(limit限制1个)")]),l("FileUpload",{attrs:{limit:i.limit},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("3.上传文件(文件大小限制)")]),l("FileUpload",{attrs:{fileSize:i.fileSize},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("4.上传文件(是否显示提示)")]),l("FileUpload",{attrs:{isShowTip:i.isShowTip},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("5.上传文件(是否禁用)")]),l("FileUpload",{attrs:{disabled:i.disabled},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("6.上传文件(是否支持多选文件)")]),l("FileUpload",{attrs:{multiple:i.multiple},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1),l("div",{staticClass:"my-10"},[l("h3",{staticClass:"my-5"},[i._v("7.上传文件(文件类型 仅支持doc)")]),l("FileUpload",{attrs:{fileType:i.fileType},model:{value:i.fileList,callback:function(s){i.fileList=s},expression:"fileList"}})],1)])},e=[],a=l("7838"),c={components:{FileUpload:a["a"]},data:function(){return{fileList:[{name:"1.text",url:"https://zhuoyou-shop-test.oss-cn-hangzhou.aliyuncs.com/upload/images/新建文本文档_1663667207383.txt"}],limit:1,fileSize:.1,isShowTip:!1,disabled:!0,multiple:!0,fileType:["doc"],mark:"sd"}}},o=c,n=l("2877"),d=Object(n["a"])(o,t,e,!1,null,"309dbeaa",null);s["default"]=d.exports}}]);