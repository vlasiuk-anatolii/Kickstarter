parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kCVu":[function(require,module,exports) {
"use strict";function e(e){var t=1;function n(){d(t+=1)}var r=document.getElementsByClassName("".concat(e)),l=document.querySelector(".features__var");if(3===r.length){var i=document.querySelector(".features__arrow-next"),c=document.querySelector(".features__arrow-prev");i.addEventListener("click",function(){for(var e=0;e<i.children.length;e++)i.children[e].setAttribute("fill","#333"),c.children[e].setAttribute("fill","#bdbdbd");n(),l.innerHTML="0".concat(t)}),c.addEventListener("click",function(){for(var e=0;e<c.children.length;e++)i.children[e].setAttribute("fill","#bdbdbd"),c.children[e].setAttribute("fill","#333");d(t-=1),l.innerHTML="0".concat(t)})}for(var o=0;o<r.length;o++)r[o].addEventListener("click",function(){n(),3===r.length&&(l.innerHTML="0".concat(t))});function d(e){if(e>r.length&&(t=1),0===e&&(t=r.length),window.visualViewport.width<768){for(var n=0;n<r.length;n++)r[n].style.display="none";r[t-1].style.display="block"}else for(var l=0;l<r.length;l++)r[l].style.display="block"}d(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sliderForItems=e;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./slideritems.js");function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n=document.querySelector(".burger"),i=document.getElementById("menu"),o=document.querySelector(".page");n.addEventListener("click",function(){n.classList.toggle("active"),document.querySelector(".active")?(i.style.transform="translateY(0)",o.style.overflow="hidden"):(i.style.transform="translateY(-300%)",o.style.overflow="visible")});var c=document.getElementById("video");function l(){c.paused?c.play():c.pause()}var a=document.querySelector(".video__circle-button");a.addEventListener("click",function(){l(),c.paused?(a.style.opacity="1",a.setAttribute("title","Press to play")):(a.setAttribute("title","Press to stop"),a.style.opacity="0.1")}),(0,e.sliderForItems)("fitcha");var d=document.querySelector(".arrow-up");d.addEventListener("click",function(){window.scrollTo(0,0)});var u=document.getElementsByClassName("benefit");document.addEventListener("scroll",function(){window.scrollY/window.screenY>10?d.style.display="block":d.style.display="none"});for(var p=document.getElementsByClassName("menu__item"),y=0;y<p.length;y++)p[y].addEventListener("click",function(){n.classList.toggle("active"),i.style.transform="translateY(-300%)",o.style.overflow="visible"});var m=document.querySelector(".header__en"),g=document.querySelector(".header__ua");m.addEventListener("click",function(){m.classList.toggle("header__lg--active"),g.classList.toggle("header__lg--active")}),g.addEventListener("click",function(){g.classList.toggle("header__lg--active"),m.classList.toggle("header__lg--active")});var v=document.querySelector(".technology__image"),f=document.querySelector(".header__speakers-image"),b=r({},document.querySelector(".menu__list")),w=document.querySelector(".header"),_=document.createElement("div");_.classList.add("box_for_menu"),_.style.display="none",_.append(b),w.append(_),window.addEventListener("resize",function(){if(window.visualViewport.width>=768){for(var t=0;t<u.length;t++)u[t].style.display="block";v.setAttribute("src","details-speacker-tablet.png")}else v.setAttribute("src","details-speacker.png"),(0,e.sliderForItems)("benefit");(0,e.sliderForItems)("fitcha"),window.visualViewport.width>=1280?(f.setAttribute("src","speaker-desktop.png"),_.style.display="flex",v.setAttribute("src","details-speacker-desktop.png")):(f.setAttribute("src","product.jpg"),v.setAttribute("src","details-speacker-tablet.png"),_.style.display="none")},!1);
},{"./slideritems.js":"kCVu"}]},{},["KIzB"], null)
//# sourceMappingURL=main.b119a99c.js.map