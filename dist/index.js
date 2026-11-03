"use strict";var S=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}}};var q=S(function(h,l){"use strict";var n=require("@stdlib/math-base-special-abs"),_=require("@stdlib/math-base-special-max"),p=require("@stdlib/constants-float64-max"),H=require("@stdlib/constants-float64-smallest-normal"),E=require("@stdlib/constants-float64-eps"),O=p*.5,F=H*(2/E),c=2/(E*E);function G(r,e,a,L,t){var v,u,s,i;return v=_(n(r),n(e)),u=1,v>=O?(r*=.5,e*=.5,u*=.5):v<=F&&(r*=c,e*=c,u*=c),n(e)<=n(r)?(s=e/r,i=1/(r+e*s),r=i,e=-s*i):(s=r/e,i=1/(e+r*s),r=s*i,e=-i),a[t]=r*u,a[t+L]=e*u,a}l.exports=G});var x=S(function(j,o){"use strict";var P=require("@stdlib/complex-float64-ctor"),b=require("@stdlib/array-float64"),f=require("@stdlib/complex-float64-real"),w=require("@stdlib/complex-float64-imag"),y=q(),d=new b(2);function C(r){return y(f(r),w(r),d,1,0),new P(d[0],d[1])}o.exports=C});var R=S(function(k,A){"use strict";var D=q();function I(r,e,a,L,t,v){return D(r[a],r[a+e],L,t,v)}A.exports=I});var T=require("@stdlib/utils-define-nonenumerable-read-only-property"),g=x(),M=q(),B=R();T(g,"assign",M);T(g,"strided",B);module.exports=g;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
