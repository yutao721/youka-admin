(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc937d10"],{"0aaf":function(t,e,n){},"81b8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"main-article",attrs:{"element-loading-text":"Efforts to generate PDF"}},[n("div",{staticClass:"article__heading"},[n("div",{staticClass:"article__heading__title"},[t._v(" "+t._s(t.article.title)+" ")])]),t._m(0),n("div",{ref:"content",staticClass:"node-article-content",domProps:{innerHTML:t._s(t.article.content)}})])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{color:"#ccc"}},[t._v(" This article is from Evan You on "),n("a",{attrs:{target:"_blank",href:"https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf"}},[t._v("medium")])])}],c=(n("d3b7"),n("3ca3"),n("ddb0"),{data:function(){return{article:"",fullscreenLoading:!0}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;n.e("chunk-2d2134e7").then(n.bind(null,"abb2")).then((function(e){var n=e.default.title;document.title=n,t.article=e.default,setTimeout((function(){t.fullscreenLoading=!1,t.$nextTick((function(){window.print()}))}),3e3)}))}}}),l=c,o=(n("a324"),n("2877")),r=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=r.exports},a324:function(t,e,n){"use strict";n("0aaf")}}]);