(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,n,o){"use strict";o.r(n);o("TKt4")},TKt4:function(t,n){var o={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]'),body:document.querySelector("body")},e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],i={isActive:!1,start:function(){this.isActive||(this.isActive=!0,changeColors=setInterval((function(){var t=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}(0,e.length-1);o.body.style.backgroundColor=e[t]}),1e3))},stop:function(){clearInterval(changeColors),this.isActive=!1}};o.btnStart.addEventListener("click",i.start.bind(i)),o.btnStop.addEventListener("click",i.stop.bind(i))}},[["QfWi",1]]]);
//# sourceMappingURL=main.554938e2cdf1102158fe.js.map