// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).cinv=n()}(this,(function(){"use strict";var e=function(e){return Math.abs(e)},n=Number.POSITIVE_INFINITY,r=n;var t=function(e){return 0===e&&1/e===r};var u=function(e){return e!=e},f=Number.NEGATIVE_INFINITY,i=t,o=u,a=f,c=n;var d=function(e,n){var r,t,u,f;if(2===(r=arguments.length))return o(e)||o(n)?NaN:e===c||n===c?c:e===n&&0===e?i(e)?e:n:e>n?e:n;for(t=a,f=0;f<r;f++){if(o(u=arguments[f])||u===c)return u;(u>t||u===t&&0===u&&i(u))&&(t=u)}return t},l=e,s=d,v=2220446049250313e-31,I=2/(v*v);var N=function(e,n,r){var t,u,f,i;return u=1,(t=s(l(n),l(r)))>=8988465674311579e292?(n*=.5,r*=.5,u*=.5):t<=2004168360008973e-307&&(n*=I,r*=I,u*=I),l(r)<=l(n)?(i=1/(n+r*(f=r/n)),e[0]=i,e[1]=-f*i):(i=1/(r+n*(f=n/r)),e[0]=f*i,e[1]=-i),e[0]*=u,e[1]*=u,e};var b=function(e,n,r){return 2===arguments.length?N([0,0],e,n):N(e,n,r)};return b}));
//# sourceMappingURL=bundle.js.map
