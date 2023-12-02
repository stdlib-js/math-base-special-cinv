// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.1.1-esm/index.mjs";var l=.5*e,o=m*(2/i),a=2/(i*i);function j(e){var m,i,j,p,h,v;return i=d(e),j=r(e),p=1,(m=t(s(i),s(j)))>=l?(i*=.5,j*=.5,p*=.5):m<=o&&(i*=a,j*=a,p*=a),s(j)<=s(i)?(i=v=1/(i+j*(h=j/i)),j=-h*v):(i=(h=i/j)*(v=1/(j+i*h)),j=-v),new n(i*=p,j*=p)}export{j as default};
//# sourceMappingURL=index.mjs.map
