(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ab92"],{bd71:function(r,n,e){"use strict";e.r(n),e.d(n,"REGEXP_SIX",(function(){return t})),e.d(n,"REGEXP_PWD",(function(){return o})),e.d(n,"isPhone",(function(){return u})),e.d(n,"updateRules",(function(){return a}));e("ac1f"),e("00b4");var t=/^\d{6}$/,o=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;function u(r){var n=/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;return n.test(r)}var a={phone:[{validator:function(r,n,e){""===n?e(new Error("请输入手机号码")):u(n)?e():e(new Error("请输入正确的手机号码格式"))},trigger:["blur","change"]}],verifyCode:[{validator:function(r,n,e){""===n?e(new Error("请输入验证码")):t.test(n)?e():e(new Error("请输入6位数字验证码"))},trigger:["blur","change"]}],password:[{validator:function(r,n,e){""===n?e(new Error("请输入密码")):o.test(n)?e():e(new Error("密码格式应为8-18位数字、字母、符号的任意两种组合"))},trigger:["blur","change"]}]}}}]);