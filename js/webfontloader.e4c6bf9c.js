(self["webpackChunkweather_forecast_app"]=self["webpackChunkweather_forecast_app"]||[]).push([[461],{3657:function(t,n,i){var e;i(7658),function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function a(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function s(t,n,i){return s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a,s.apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var f=!!window.FontFace;function h(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function l(t,n,i){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function g(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function d(t){return t.o.location.hostname||t.a.location.hostname}function v(t,n,i){function e(){r&&o&&a&&(r(s),r=null)}n=h(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=i||null;f?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),e()}):setTimeout((function(){o=!0,e()}),0),l(t,"head",n)}function w(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=h(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){s||(s=!0,i&&i(Error("Script load timeout")))}),e||5e3),a}return null}function m(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,_(t)}}function b(t,n){t.c=n,_(t)}function _(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function j(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function k(t){return C(t)+" "+t.f+"00 300px "+T(t.c)}function T(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function S(t){return t.a+t.f}function C(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function A(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function N(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function E(t){t.g&&p(t.f,[t.a.c("wf","loading")]),O(t,"loading")}function I(t){if(t.g){var n=g(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),p(t.f,i,e)}O(t,"inactive")}function O(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,S(i)):t.h[n]())}function P(){this.c={}}function W(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}function B(t,n){this.c=t,this.f=n,this.a=h(this.c,"span",{"aria-hidden":"true"},this.f)}function F(t){l(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(t.c)+";font-style:"+C(t)+";font-weight:"+t.f+"00;"}function D(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function $(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new B(this.c,this.s),this.h=new B(this.c,this.s),this.j=new B(this.c,this.s),this.m=new B(this.c,this.s),t=new j(this.a.c+",serif",S(this.a)),t=L(t),this.g.a.style.cssText=t,t=new j(this.a.c+",sans-serif",S(this.a)),t=L(t),this.h.a.style.cssText=t,t=new j("serif",S(this.a)),t=L(t),this.j.a.style.cssText=t,t=new j("sans-serif",S(this.a)),t=L(t),this.m.a.style.cssText=t,F(this.g),F(this.h),F(this.j),F(this.m)}x.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},D.prototype.start=function(){var t=this.c.o.document,n=this,i=r(),e=new Promise((function(e,o){function a(){r()-i>=n.f?o():t.fonts.load(k(n.a),n.h).then((function(t){1<=t.length?e():setTimeout(a,25)}),(function(){o()}))}a()})),o=null,a=new Promise((function(t,i){o=setTimeout(i,n.f)}));Promise.race([a,e]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var q={D:"serif",C:"sans-serif"},H=null;function M(){if(null===H){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);H=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return H}function z(t,n,i){for(var e in q)if(q.hasOwnProperty(e)&&n===t.f[q[e]]&&i===t.f[q[e]])return!0;return!1}function G(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=M()&&z(t,i,e)),n?r()-t.A>=t.w?M()&&z(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):K(t):R(t,t.v)}function K(t){setTimeout(s((function(){G(this)}),t),50)}function R(t,n){setTimeout(s((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),n(this.a)}),t),0)}function U(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}$.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),G(this)};var V=null;function X(t){0==--t.f&&t.j&&(t.m?(t=t.a,t.g&&p(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),O(t,"active")):I(t.a))}function J(t){this.j=t,this.a=new P,this.h=0,this.f=this.g=!0}function Q(t,n,i,e,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=e||{};if(0===i.length&&a)I(n.a);else{n.f+=i.length,a&&(n.j=a);var c,f=[];for(c=0;c<i.length;c++){var h=i[c],l=r[h.c],u=n.a,g=h;if(u.g&&p(u.f,[u.a.c("wf",g.c,S(g).toString(),"loading")]),O(u,"fontloading",g),u=null,null===V)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);V=g?42<parseInt(g[1],10):!d}else V=!1;u=V?new D(s(n.g,n),s(n.h,n),n.c,h,n.s,l):new $(s(n.g,n),s(n.h,n),n.c,h,n.s,t,l),f.push(u)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function Y(t,n,i){var e=[],o=i.timeout;E(n);e=W(t.a,i,t.c);var a=new U(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load((function(n,i,e){Q(t,a,n,i,e)}))}function Z(t,n){this.c=t,this.a=n}function tt(t,n){this.c=t,this.a=n}function nt(t,n){this.c=t||it,this.a=[],this.f=[],this.g=n||""}U.prototype.g=function(t){var n=this.a;n.g&&p(n.f,[n.a.c("wf",t.c,S(t).toString(),"active")],[n.a.c("wf",t.c,S(t).toString(),"loading"),n.a.c("wf",t.c,S(t).toString(),"inactive")]),O(n,"fontactive",t),this.m=!0,X(this)},U.prototype.h=function(t){var n=this.a;if(n.g){var i=g(n.f,n.a.c("wf",t.c,S(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,S(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,S(t).toString(),"inactive")),p(n.f,e,o)}O(n,"fontinactive",t),X(this)},J.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,Y(this,new N(this.c,t),t)},Z.prototype.load=function(t){function n(){if(a["__mti_fntLst"+e]){var i,o=a["__mti_fntLst"+e](),s=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;void 0!=o[r].fontStyle&&void 0!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,s.push(new j(c,i))):s.push(new j(c))}t(s)}else setTimeout((function(){n()}),50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var a=i.c.o;w(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),(function(o){o?t([]):(a["__MonotypeConfiguration__"+e]=function(){return i.a},n())})).id="__MonotypeAPIScript__"+e}else t([])},tt.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new m;for(n=0,i=e.length;n<i;n++)v(this.c,e[n],y(s));var r=[];for(n=0,i=o.length;n<i;n++)if(e=o[n].split(":"),e[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new j(e[0],c[f]));else r.push(new j(e[0]));b(s,(function(){t(r,a)}))};var it="https://fonts.googleapis.com/css";function et(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function ot(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function at(t){this.f=t,this.a=[],this.c={}}var st={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},rt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ct={i:"i",italic:"i",n:"n",normal:"n"},ft=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function ht(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s,r=e[1];if(s=[],r){r=r.split(",");for(var c=r.length,f=0;f<c;f++){var h;if(h=r[f],h.match(/^[\w-]+$/)){var l=ft.exec(h.toLowerCase());if(null==l)h="";else{if(h=l[2],h=null==h||""==h?"n":ct[h],l=l[1],null==l||""==l)l="4";else{var u=rt[l];l=u||(isNaN(l)?"4":l.substr(0,1))}h=[h,l].join("")}}else h="";h&&s.push(h)}}0<s.length&&(a=s),3==e.length&&(e=e[2],s=[],e=e?e.split(","):s,0<e.length&&(e=st[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=st[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new j(o,a[e]))}}function lt(t,n){this.c=t,this.a=n}var ut={Arimo:!0,Cousine:!0,Tinos:!0};function pt(t,n){this.c=t,this.a=n}function gt(t,n){this.c=t,this.f=n,this.a=[]}lt.prototype.load=function(t){var n=new m,i=this.c,e=new nt(this.a.api,this.a.text),o=this.a.families;et(e,o);var a=new at(o);ht(a),v(i,ot(e),y(n)),b(n,(function(){t(a.a,a.c,ut)}))},pt.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?w(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new j(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(e)}}),2e3):t([])},gt.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new j(s.name,A("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},w(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+d(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var dt=new J(window);dt.a.c.custom=function(t,n){return new tt(n,t)},dt.a.c.fontdeck=function(t,n){return new gt(n,t)},dt.a.c.monotype=function(t,n){return new Z(n,t)},dt.a.c.typekit=function(t,n){return new pt(n,t)},dt.a.c.google=function(t,n){return new lt(n,t)};var vt={load:s(dt.load,dt)};e=function(){return vt}.call(n,i,n,t),void 0===e||(t.exports=e)}()}}]);
//# sourceMappingURL=webfontloader.e4c6bf9c.js.map