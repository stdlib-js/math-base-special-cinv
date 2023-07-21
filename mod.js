// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Math.abs(t)}var e=Number.POSITIVE_INFINITY;function r(t){return 0===t&&1/t===e}function n(t){return t!=t}var o=Number,i=o.NEGATIVE_INFINITY;var a="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty,l=Object.prototype,c=l.toString,f=l.__defineGetter__,p=l.__defineSetter__,b=l.__lookupGetter__,y=l.__lookupSetter__;var m=function(){try{return a({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===c.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(b.call(t,e)||y.call(t,e)?(n=t.__proto__,t.__proto__=l,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&f&&f.call(t,e,r.get),a&&p&&p.call(t,e,r.set),t};function v(t,e,r){m(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(t){return"number"==typeof t}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return _&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var E=h()?function(t){var e,r,n,o,i;if(null==t)return g.call(t);r=t[d],i=d,e=null!=(o=t)&&w.call(o,i);try{t[d]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[d]=r:delete t[d],n}:function(t){return g.call(t)},S=o.prototype.toString;var j=h();function T(t){return"object"==typeof t&&(t instanceof o||(j?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object Number]"===E(t)))}function N(t){return s(t)||T(t)}function I(t,e){if(!(this instanceof I))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!s(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return m(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),m(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}v(N,"isPrimitive",s),v(N,"isObject",T),v(I,"BYTES_PER_ELEMENT",8),v(I.prototype,"BYTES_PER_ELEMENT",8),v(I.prototype,"byteLength",16),v(I.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),v(I.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t}));var O=2/4930380657631324e-47;function P(o){var a,u,l,c,f,p;return u=function(t){return t.re}(o),l=function(t){return t.im}(o),a=function(t,o){var a,u,l,c;if(2===(a=arguments.length))return n(t)||n(o)?NaN:t===e||o===e?e:t===o&&0===t?r(t)?t:o:t>o?t:o;for(u=i,c=0;c<a;c++){if(n(l=arguments[c])||l===e)return l;(l>u||l===u&&0===l&&r(l))&&(u=l)}return u}(t(u),t(l)),c=1,a>=8988465674311579e292?(u*=.5,l*=.5,c*=.5):a<=2004168360008973e-307&&(u*=O,l*=O,c*=O),t(l)<=t(u)?(u=p=1/(u+l*(f=l/u)),l=-f*p):(u=(f=u/l)*(p=1/(l+u*f)),l=-p),new I(u*=c,l*=c)}export{P as default};
//# sourceMappingURL=mod.js.map
