(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,o){"use strict";o.r(n);o("TKt4")},TKt4:function(t,n){var o={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},r=null;o.btnStart.addEventListener("click",(function(){r=setInterval((function(){o.body.style.backgroundColor=e[a(0,e.length-1)],o.btnStart.disabled=!0,o.btnStop.disabled=!1,console.log(e[a(0,e.length-1)])}),1e3)})),o.btnStop.addEventListener("click",(function(){clearInterval(r),o.btnStart.disabled=!1,o.btnStop.disabled=!0}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.ba3ca4429d8eea6a53d8.js.map