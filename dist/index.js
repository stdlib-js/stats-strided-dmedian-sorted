"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var d=u(function(g,o){
var p=require('@stdlib/math-base-special-floor/dist');function y(a,r,e,i){var n,t;return a<=0?NaN:(n=a/2,t=p(n),n===t?(r[i+t*e]+r[i+(t-1)*e])/2:r[i+t*e])}o.exports=y
});var v=u(function(h,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),S=d();function l(a,r,e){return S(a,r,e,f(a,e))}s.exports=l
});var m=u(function(j,c){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),O=d();x(q,"ndarray",O);c.exports=q
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
