"use strict";var n=function(s,a){return function(){return a||s((a={exports:{}}).exports,a),a.exports}};var E=n(function(O,S){
var q=require('@stdlib/math-base-special-abs/dist'),T=require('@stdlib/math-base-special-max/dist'),_=require('@stdlib/constants-float64-max/dist'),m=require('@stdlib/constants-float64-smallest-normal/dist'),L=require('@stdlib/constants-float64-eps/dist'),A=require('@stdlib/complex-float64-ctor/dist'),R=require('@stdlib/complex-float64-real/dist'),c=require('@stdlib/complex-float64-imag/dist'),f=_*.5,l=m*(2/L),t=2/(L*L);function o(s){var a,r,e,u,i,v;return r=R(s),e=c(s),a=T(q(r),q(e)),u=1,a>=f?(r*=.5,e*=.5,u*=.5):a<=l&&(r*=t,e*=t,u*=t),q(e)<=q(r)?(i=e/r,v=1/(r+e*i),r=v,e=-i*v):(i=r/e,v=1/(e+r*i),r=i*v,e=-v),r*=u,e*=u,new A(r,e)}S.exports=o
});var x=E();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
