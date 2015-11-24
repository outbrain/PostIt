/*
 * PostIt v0.4.2
 * Copyright 2015 coopersemantics
 * Available under MIT license <https://github.com/outbrain/postit/blob/master/LICENSE>
 * @Date Tue Nov 24 2015 16:04:05 GMT-0500 (EST)
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PostIt=e()}}(function(){return function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var f="function"==typeof require&&require;if(!u&&f)return f(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var a=n[s]={exports:{}};t[s][0].call(a.exports,function(e){var n=t[s][1][e];return i(n?n:e)},a,a.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";var r=e("./postit"),i={},o=t.exports={};o.create=function(e){var t=i[e];return t?t:i[e]=new r(e)},o.destroy=function(e){delete i[e]},o.get=function(e){return i[e]},o.getAll=function(){return i}},{"./postit":4}],2:[function(e,t,n){"use strict";var r=t.exports={};r.serialize=function(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join(", ")},r.shallowMerge=function(e,t){for(var n in t)null!=t[n]&&(e[n]=t[n]);return e},r.openWindow=function(e){var t=this,n=screen||{},r=window,i=document,o=i.documentElement||{},s=r.screenLeft||n.left||0,u=r.screenTop||n.top||0,f=r.innerWidth||o.clientWidth||n.width||0,c=r.innerHeight||o.clientHeight||n.height||0,a=f/2-e.width/2+s,l=c/2-e.height/2+u,d=t.serialize(t.shallowMerge({top:l,left:a},e)),p=r.open(e.url,e.title,d);return r.focus&&p.focus(),p}},{}],3:[function(e,t,n){"use strict";var r=e("./factory"),i=e("./helpers"),o=t.exports={};o.add=function(e){var t=this;return"string"!=typeof e?(console.warn(e+" should be a `String`."),t):(r.create(e),t)},o.remove=function(e){var t=this,n=t.get(e);if(!n)return t;for(var i in n.listeners)n.off(i);return r.destroy(e),t},o.removeAll=function(){var e=this,t=e.getAll();for(var n in t)e.remove(n);return e},o.size=function(){var e=0,t=this.getAll();for(var n in t)e++;return e},o.get=function(e){return r.get(e)||console.warn(e+" does not match any `PostIt` instances.")},o.getAll=function(){return r.getAll()},o.on=function(e,t,n){var r=this,i=r.get(e);return i?(i.on(t,n),r):r},o.off=function(e,t,n){var r=this,i=r.get(e);return i?(i.off(t,n),r):r},o.emit=function(e,t,n,r,i){var o=this,s=o.get(e);return s?(s.emit(t,n,r,i),o):o},o.openWindow=function(e){return i.openWindow(e||{})}},{"./factory":1,"./helpers":2}],4:[function(e,t,n){"use strict";var r=t.exports=function(e){this.id=e,this.token=0,this.listeners={}};r.prototype.on=function(e,t){function n(n){var i=null;if(/__event\s?"/.test(n.data))try{i=n.dataParsed=JSON.parse(n.data)}catch(o){console.error(o)}("*"===e||i&&e===i.__event&&r.id===i.__id&&("null"===n.origin||-1!==i.__origin.indexOf(n.origin)))&&t.call(this,n)}var r=this;return r.listeners[e]=r.listeners[e]||[],t.__token=n.__token=r.token++,window.addEventListener("message",n,!1),r.listeners[e].push(n),r},r.prototype.off=function(e,t){for(var n=this,r=n.listeners[e]||[],i=0;i<r.length;++i)t&&t.__token!==r[i].__token||(window.removeEventListener("message",r[i],!1),r.splice(i,1),--i);return n},r.prototype.emit=function(e,t,n,r){var i=this,o=window.location.href;switch(Object.prototype.toString.call(n)){case"[object Function]":return console.warn(n+" should either be an `Object`, `Array` or `String`."),i;case"[object Object]":n.__id=i.id,n.__event=e,n.__origin=o,n=JSON.stringify(n);break;default:n=JSON.stringify({__value:n,__id:i.id,__event:e,__origin:o})}return t.postMessage(n,r),i}},{}]},{},[3])(3)});
//# sourceMappingURL=postit.js.map
