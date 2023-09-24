// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Math.abs(e)}var r=Number.POSITIVE_INFINITY;function t(e){return e!=e}function i(e,i){return t(e)||t(i)?NaN:e===r||i===r?r:e===i&&0===e?function(e){return 0===e&&1/e===r}(e)?e:i:e>i?e:i}var n="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty;function o(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+c(n):c(n)+e,i&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function p(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!o(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,b=String.prototype.replace,y=/e\+(\d)$/,m=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,_=/\.0$/,E=/\.0*e/,S=/(\..*[^0])0*e/;function T(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":g(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=b.call(t,S,"$1e"),t=b.call(t,E,"e"),t=b.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=b.call(t,y,"e+0$1"),t=b.call(t,m,"e-0$1"),e.alternate&&(t=b.call(t,w,"$1."),t=b.call(t,v,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+x(i):x(i)+e}var j=String.fromCharCode,I=isNaN,V=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,i,n,a,o,c,l,u;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,l=0;l<e.length;l++)if(f(i=e[l]))o+=i;else{if(r=void 0!==i.precision,!(i=N(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,I(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,I(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=p(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!I(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=I(a)?String(i.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=T(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=s(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(P(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function C(e){return"string"==typeof e}function R(e){var r,t,i;if(!C(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return O.apply(null,t)}var A=Object.prototype,L=A.toString,Z=A.__defineGetter__,G=A.__defineSetter__,M=A.__lookupGetter__,W=A.__lookupSetter__,Y=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(M.call(e,r)||W.call(e,r)?(i=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};function B(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString,q=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",K=z()?function(e){var r,t,i,n,a;if(null==e)return J.call(e);t=e[H],a=H,r=null!=(n=e)&&q.call(n,a);try{e[H]=void 0}catch(r){return J.call(e)}return i=J.call(e),r?e[H]=t:delete e[H],i}:function(e){return J.call(e)},Q=Number,ee=Q.prototype.toString,re=z();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ie(e){return U(e)||te(e)}function ne(e,r){if(!(this instanceof ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!U(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!U(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}B(ie,"isPrimitive",U),B(ie,"isObject",te),B(ne,"BYTES_PER_ELEMENT",8),B(ne.prototype,"BYTES_PER_ELEMENT",8),B(ne.prototype,"byteLength",16),B(ne.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),B(ne.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ae=2/4930380657631324e-47;return function(r){var t,n,a,o,c,s;return n=function(e){return e.re}(r),a=function(e){return e.im}(r),o=1,(t=i(e(n),e(a)))>=8988465674311579e292?(n*=.5,a*=.5,o*=.5):t<=2004168360008973e-307&&(n*=ae,a*=ae,o*=ae),e(a)<=e(n)?(n=s=1/(n+a*(c=a/n)),a=-c*s):(n=(c=n/a)*(s=1/(a+n*c)),a=-s),new ne(n*=o,a*=o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).cinv=r();
//# sourceMappingURL=index.js.map
