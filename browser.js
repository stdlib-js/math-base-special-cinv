// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e){return Math.abs(e)}var t=Number.POSITIVE_INFINITY;function r(e){return 0===e&&1/e===t}function n(e){return e!=e}var o=Number,i=o.NEGATIVE_INFINITY,u="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty,l=Object.prototype,c=l.toString,f=l.__defineGetter__,p=l.__defineSetter__,b=l.__lookupGetter__,y=l.__lookupSetter__,m=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?a:function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===c.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===c.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(b.call(e,t)||y.call(e,t)?(n=e.__proto__,e.__proto__=l,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&f&&f.call(e,t,r.get),u&&p&&p.call(e,t,r.set),e};function s(e,t,r){m(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(e){return"number"==typeof e}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString,g=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",E=d()?function(e){var t,r,n,o,i;if(null==e)return h.call(e);r=e[w],i=w,t=null!=(o=e)&&g.call(o,i);try{e[w]=void 0}catch(t){return h.call(e)}return n=h.call(e),t?e[w]=r:delete e[w],n}:function(e){return h.call(e)},S=o.prototype.toString,T=d();function j(e){return"object"==typeof e&&(e instanceof o||(T?function(e){try{return S.call(e),!0}catch(e){return!1}}(e):"[object Number]"===E(e)))}function N(e){return _(e)||j(e)}function I(e,t){if(!(this instanceof I))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!_(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!_(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return m(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),m(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}s(N,"isPrimitive",_),s(N,"isObject",j),s(I,"BYTES_PER_ELEMENT",8),s(I.prototype,"BYTES_PER_ELEMENT",8),s(I.prototype,"byteLength",16),s(I.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),s(I.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var O=2/4930380657631324e-47;return function(o){var u,a,l,c,f,p;return a=function(e){return e.re}(o),l=function(e){return e.im}(o),u=function(e,o){var u,a,l,c;if(2===(u=arguments.length))return n(e)||n(o)?NaN:e===t||o===t?t:e===o&&0===e?r(e)?e:o:e>o?e:o;for(a=i,c=0;c<u;c++){if(n(l=arguments[c])||l===t)return l;(l>a||l===a&&0===l&&r(l))&&(a=l)}return a}(e(a),e(l)),c=1,u>=8988465674311579e292?(a*=.5,l*=.5,c*=.5):u<=2004168360008973e-307&&(a*=O,l*=O,c*=O),e(l)<=e(a)?(a=p=1/(a+l*(f=l/a)),l=-f*p):(a=(f=a/l)*(p=1/(l+a*f)),l=-p),new I(a*=c,l*=c)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).cinv=t();
//# sourceMappingURL=browser.js.map
