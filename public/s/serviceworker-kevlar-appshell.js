'use strict';var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("globalThis",function(a){return a||ca});
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};g[0]===""&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function v(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ha(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){la=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ia:ka;return la.apply(null,arguments)}
function w(a,b){a=a.split(".");for(var c=t,d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ma(a){return a}
function na(a,b){function c(){}
c.prototype=b.prototype;a.Ka=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function oa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
na(oa,Error);oa.prototype.name="CustomError";const pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let qa=globalThis.trustedTypes,ra;function sa(){let a=null;if(!qa)return a;try{const b=c=>c;
a=qa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
;var ta=class{constructor(a){this.h=a}toString(){return this.h+""}};function ua(a,b=`unexpected value ${a}!`){throw Error(b);}
;function va(a,b){Array.prototype.forEach.call(a,b,void 0)}
function wa(a,b){return Array.prototype.map.call(a,b,void 0)}
function xa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);b>=0&&Array.prototype.splice.call(a,b,1)}
function ya(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function za(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Aa(a){var b=v("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};let c,d;var e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(f){d="Not available",e=!0}b=Ba(a);if(!(!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){e=a.message;if(e==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)e=a.constructor.name;else if(e=a.constructor,Ca[e])e=Ca[e];else{e=String(e);if(!Ca[e]){const f=/function\s+([^\(]+)/m.exec(e);Ca[e]=f?f[1]:"[Anonymous]"}e=Ca[e]}e='Unknown Error of type "'+e+'"'}else e="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(e+=": "+a.toString())}return{message:e,name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ba(a,b){b||(b={});b[Da(a)]=!0;let c=a.stack||"";var d=a.cause;d&&!b[Da(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Ba(d,b));a=a.errors;if(Array.isArray(a)){d=1;let e;for(e=0;e<a.length&&!(d>4);e++)b[Da(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Ba(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Da(a){let b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ca={};var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fa(a){return a?decodeURI(a):a}
function Ga(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Ga(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Ha(a){const b=[];for(const c in a)Ga(c,a[c],b);return b.join("&")}
;function Ia(){throw Error("Invalid UTF8");}
function Ja(a,b){b=String.fromCharCode.apply(null,b);return a==null?b:a+b}
let Ka=void 0,La;const Ma=typeof TextDecoder!=="undefined";function Na(a){t.setTimeout(()=>{throw a;},0)}
;var Oa,Pa=v("CLOSURE_FLAGS"),Qa=Pa&&Pa[610401301];Oa=Qa!=null?Qa:!1;function Ra(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Sa;const Ta=t.navigator;Sa=Ta?Ta.userAgentData||null:null;function Ua(a){if(!Oa||!Sa)return!1;for(let b=0;b<Sa.brands.length;b++){const {brand:c}=Sa.brands[b];if(c&&c.indexOf(a)!=-1)return!0}return!1}
function x(a){return Ra().indexOf(a)!=-1}
;function Va(){return Oa?!!Sa&&Sa.brands.length>0:!1}
;var Wa=x("Safari")&&!((Va()?Ua("Chromium"):(x("Chrome")||x("CriOS"))&&(Va()||!x("Edge"))||x("Silk"))||(Va()?0:x("Coast"))||(Va()?0:x("Opera"))||(Va()?0:x("Edge"))||(Va()?Ua("Microsoft Edge"):x("Edg/"))||(Va()?Ua("Opera"):x("OPR"))||x("Firefox")||x("FxiOS")||x("Silk")||x("Android"))&&!(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"));var Xa={},Ya=null;function Za(a,b){b===void 0&&(b=0);$a();b=Xa[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function ab(a){const b=a.length;let c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);const d=new Uint8Array(c);let e=0;bb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function bb(a,b){function c(e){for(;d<a.length;){const f=a.charAt(d++),g=Ya[f];if(g!=null)return g;if(!/^[\s\xa0]*$/.test(f))throw Error("Unknown base64 encoding at char: "+f);}return e}
$a();let d=0;for(;;){const e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function $a(){if(!Ya){Ya={};var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"];for(let c=0;c<5;c++){const d=a.concat(b[c].split(""));Xa[c]=d;for(let e=0;e<d.length;e++){const f=d[e];Ya[f]===void 0&&(Ya[f]=e)}}}}
;var cb=typeof Uint8Array!=="undefined",db=!(Va()?0:x("Trident")||x("MSIE"))&&typeof btoa==="function";const eb=/[-_.]/g,fb={"-":"+",_:"/",".":"="};function gb(a){return fb[a]||""}
function hb(a){if(!db)return ab(a);eb.test(a)&&(a=a.replace(eb,gb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
var ib={};function jb(){return kb||(kb=new lb(null,ib))}
function mb(a){nb(ib);var b=a.h;b=b==null||cb&&b!=null&&b instanceof Uint8Array?b:typeof b==="string"?hb(b):null;return b==null?b:a.h=b}
var lb=class{sizeBytes(){const a=mb(this);return a?a.length:0}constructor(a,b){nb(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}};let kb;function nb(a){if(a!==ib)throw Error("illegal external caller");}
;let ob=void 0;function pb(a){a=Error(a);za(a,"warning");return a}
function qb(a,b){if(a!=null){var c;var d=(c=ob)!=null?c:ob={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),za(a,"incident"),Na(a))}}
;var rb=typeof Symbol==="function"&&typeof Symbol()==="symbol";function sb(a,b,c=!1){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?c&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var tb=sb("jas",void 0,!0),ub=sb(void 0,"1oa"),vb=sb(void 0,Symbol()),wb=sb(void 0,"0actk"),xb=sb("m_m","Eb",!0),yb=sb(void 0,"mrtk");[...Object.values({cb:1,bb:2,ab:4,ib:8,hb:16,gb:32,Qa:64,ob:128,Ya:256,Xa:512,Va:1024,nb:2048,Wa:4096,Ta:8192,Za:16384})];const z=rb?tb:"Ea",zb={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ab=Object.defineProperties;function Bb(a,b){rb||z in a||Ab(a,zb);a[z]|=b}
function A(a,b){rb||z in a||Ab(a,zb);a[z]=b}
function Cb(a,b){a[z]&=~b}
;const Db=typeof xb==="symbol";var Eb={};function B(a){a=a[xb];const b=a===Eb;Db&&a&&!b&&qb(yb,3);return b}
function Fb(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Gb;const Hb=[];A(Hb,55);Gb=Object.freeze(Hb);function Ib(a){if(a&2)throw Error();}
var Jb=Object.freeze({});function Kb(a,b,c){const d=b&512?0:-1,e=a.length;b=b&64?b&256:!!e&&Fb(a[e-1]);const f=e+(b?-1:0);for(let g=0;g<f;g++)c(g-d,a[g]);if(b){a=a[e-1];for(const g in a)!isNaN(g)&&c(+g,a[g])}}
;function Lb(){return typeof BigInt==="function"}
;function Mb(a){a.Ab=!0;return a}
;var Nb=Mb(a=>typeof a==="number"),Ob=Mb(a=>typeof a==="string"),Pb=Mb(a=>typeof a==="boolean"),Qb=Mb(a=>a!=null&&typeof a==="object"&&typeof a.then==="function");var Rb=typeof t.BigInt==="function"&&typeof t.BigInt(0)==="bigint";var Yb=Mb(a=>Rb?a>=Sb&&a<=Tb:a[0]==="-"?Ub(a,Vb):Ub(a,Xb));
const Vb=Number.MIN_SAFE_INTEGER.toString(),Sb=Rb?BigInt(Number.MIN_SAFE_INTEGER):void 0,Xb=Number.MAX_SAFE_INTEGER.toString(),Tb=Rb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ub(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;const Zb=typeof Uint8Array.prototype.slice==="function";let D=0,E=0;function $b(a){const b=a>>>0;D=b;E=(a-b)/4294967296>>>0}
function ac(a){if(a<0){$b(0-a);const [b,c]=bc(D,E);D=b>>>0;E=c>>>0}else $b(a)}
function cc(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Lb()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+dc(c)+dc(a));return c}
function dc(a){a=String(a);return"0000000".slice(a.length)+a}
function bc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;const ec=typeof BigInt==="function"?BigInt.asIntN:void 0,fc=Number.isSafeInteger,gc=Number.isFinite,hc=Math.trunc;function ic(a){return a.displayName||a.name||"unknown type name"}
const jc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function kc(a){switch(typeof a){case "bigint":return!0;case "number":return gc(a);case "string":return jc.test(a);default:return!1}}
function lc(a){if(a!=null){if(!gc(a))throw pb("enum");a|=0}return a}
function mc(a){if(typeof a!=="number")throw pb("int32");if(!gc(a))throw pb("int32");return a|0}
function nc(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return gc(a)?a|0:void 0}
function oc(a){if(!kc(a))throw pb("int64");switch(typeof a){case "string":kc(a);var b=hc(Number(a));if(fc(b))a=String(b);else if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),b=a.length,!(a[0]==="-"?b<20||b===20&&Number(a.substring(0,7))>-922337:b<19||b===19&&Number(a.substring(0,6))<922337)){if(a.length<16)ac(Number(a));else if(Lb())a=BigInt(a),D=Number(a&BigInt(4294967295))>>>0,E=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");E=D=0;var c=a.length;for(let e=0+b,f=(c-b)%6+b;f<=c;e=
f,f+=6){var d=Number(a.slice(e,f));E*=1E6;D=D*1E6+d;D>=4294967296&&(E+=Math.trunc(D/4294967296),E>>>=0,D>>>=0)}if(b){const [e,f]=bc(D,E);D=e;E=f}}a=D;b=E;if(b&2147483648)if(Lb())a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else{const [e,f]=bc(a,b);a="-"+cc(e,f)}else a=cc(a,b)}return a;case "bigint":b=a=ec(64,a);if(Ob(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Nb(b)&&!Number.isSafeInteger(b))throw Error(String(b));Rb?a=BigInt(a):a=Pb(a)?a?"1":"0":Ob(a)?a.trim()||"0":
String(a);return a;default:kc(a);a=hc(a);if(!fc(a)){ac(a);b=D;c=E;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:cc(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}}
function pc(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function qc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${ic(b)} but got ${a&&ic(a.constructor)}`);return a}
function rc(a,b,c){if(a!=null&&typeof a==="object"&&B(a))return a;if(Array.isArray(a)){var d=a[z]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&A(a,e);return new b(a)}}
;function sc(a){return a}
;function tc(a){const b=ma(vb);return b?a[b]:void 0}
function uc(a,b){for(const c in a)!isNaN(c)&&b(a,+c,a[c])}
function vc(a){const b=new wc;uc(a,(c,d,e)=>{b[d]=e.slice()});
b.h=a.h;return b}
var wc=class{};function xc(a,b,c,d,e){const f=d?!!(b&32):void 0;d=[];var g=a.length;let h,k,l,p=!1;if(b&64){if(b&256?(g--,h=a[g],k=g):(k=4294967295,h=void 0),!(e||b&512)){p=!0;var n;l=((n=yc)!=null?n:sc)(h?k- -1:b>>15&1023||536870912,-1,a,h);k=l+-1}}else k=4294967295,b&1||(h=g&&a[g-1],Fb(h)?(g--,k=g,l=0):h=void 0);n=void 0;for(let m=0;m<g;m++){let u=a[m];if(u!=null&&(u=c(u,f))!=null)if(m>=k){var q=void 0;((q=n)!=null?q:n={})[m- -1]=u}else d[m]=u}if(h)for(let m in h)if(q=h[m],q!=null&&(q=c(q,f))!=null)if(g=+m,g<
l)d[g+-1]=q;else{let u;((u=n)!=null?u:n={})[m]=q}n&&(p?d.push(n):d[k]=n);e&&(A(d,b&33522241|(n!=null?290:34)),ma(vb)&&(a=tc(a))&&a instanceof wc&&(d[vb]=vc(a)));return d}
function zc(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Yb(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[z]|0;return a.length===0&&b&1?void 0:xc(a,b,zc,!1,!1)}if(B(a))return Ac(a);if(a instanceof lb){const e=a.h;if(e==null)a="";else if(typeof e==="string")a=e;else{if(db){b="";for(var c=0,d=e.length-10240;c<d;)b+=String.fromCharCode.apply(null,e.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?e.subarray(c):
e);b=btoa(b)}else b=Za(e);a=a.h=b}return a}return}return a}
let yc;function Ac(a){B(a);a=a.o;return xc(a,a[z]|0,zc,void 0,!1)}
;let Bc,Cc;function Dc(a){switch(typeof a){case "boolean":return Bc||(Bc=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Cc||(Cc=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Ec(a,b,c){a=Fc(a,b[0],b[1],c?1:2);b!==Bc&&c&&Bb(a,8192);return a}
function Fc(a,b,c,d){if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=a[z]|0;8192&e||!(64&e)||2&e||Gc();if(e&1024)throw Error("farr");if(e&64)return d!==3||e&16384||A(a,e|16384),a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;var f=c.length;if(f){var g=f-1;const k=c[g];if(Fb(k)){e|=256;b=e&512?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var h in k)f=+h,f<g&&(c[f+b]=k[h],delete k[h]);e=e&-33521665|
(g&1023)<<15;break a}}if(b){h=Math.max(b,f-(e&512?0:-1));if(h>1024)throw Error("spvt");e=e&-33521665|(h&1023)<<15}}}d===3&&(e|=16384);A(a,e);return a}
function Gc(){qb(wb,5)}
;function Hc(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){const d=a[z]|0;if(a.length===0&&d&1)return;if(d&2)return a;var c;if(c=b)c=d===0||!!(d&32)&&!(d&64||!(d&16));return c?(Bb(a,34),d&4&&Object.freeze(a),a):xc(a,d,Hc,b!==void 0,!0)}if(B(a))return B(a),B(a),b=a.o,c=b[z]|0,c&2?a:xc(b,c,Hc,!0,!0);if(a instanceof lb)return a}
function Ic(a){var b=a;B(b);b=b.o;if(!((b[z]|0)&2))return a;b=a=new a.constructor(xc(b,b[z]|0,Hc,!0,!0));B(b);Cb(b.o,2);return a}
;function Jc(a,b){Object.isExtensible(a);B(a);a=a.o;return Kc(a,a[z]|0,b)}
function Kc(a,b,c){if(c===-1)return null;const d=c+(b&512?0:-1),e=a.length-1;if(d>=e&&b&256)a=a[e][c];else if(d<=e)a=a[d];else return;return a}
function F(a,b,c){B(a);var d=a.o;let e=d[z]|0;Ib(e);G(d,e,b,c);return a}
function G(a,b,c,d){const e=b&512?0:-1,f=c+e;var g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(a[g+e]={[c]:d},b|=256,A(a,b)):a[f]=d);return b}
function Lc(a,b,c){a=Kc(a,b,c);return Array.isArray(a)?a:Gb}
function Mc(a,b){a===0&&(a=Nc(a,b));return a|1}
function Oc(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function Pc(a,b,c,d){B(a);var e=a.o;var f=e[z]|0;Ib(f);if(d==null){var g=Qc(e);if(Rc(g,e,f,c)===b)g.set(c,0);else return a}else{c.includes(b);g=Qc(e);const h=Rc(g,e,f,c);h!==b&&(h&&(f=G(e,f,h)),g.set(c,b))}G(e,f,b,d);return a}
function Qc(a){if(rb){var b;return(b=a[ub])!=null?b:a[ub]=new Map}if(ub in a)return a[ub];b=new Map;Object.defineProperty(a,ub,{value:b});return b}
function Rc(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Kc(b,c,g)!=null&&(e!==0&&(c=G(b,c,e)),e=g)}a.set(d,e);return e}
function Sc(a,b,c){let d=a[z]|0;const e=Kc(a,d,c);let f;if(e!=null&&B(e))return b=Ic(e),b!==e&&G(a,d,c,b),B(b),b.o;if(Array.isArray(e)){const g=e[z]|0;g&2?(f=Ec(xc(e,g,Hc,!0,!0),b,!0),Cb(f,2)):g&64?f=e:f=Ec(f,b,!0)}else f=Ec(void 0,b,!0);f!==e&&G(a,d,c,f);return f}
function Tc(a,b,c){B(a);var d=a.o;var e=d[z]|0,f=Kc(d,e,c);b=rc(f,b,e);b!==f&&b!=null&&G(d,e,c,b);d=b;if(d==null)return d;B(a);a=a.o;e=a[z]|0;e&2||(f=Ic(d),f!==d&&(d=f,G(a,e,c,d)));return d}
function Uc(a,b,c,d,e,f,g){B(a);a=a.o;var h=!!(2&b);const k=h?1:e;f=!!f;g&&(g=!h);e=Lc(a,b,d);var l=e[z]|0;h=!!(4&l);if(!h){l=Mc(l,b);var p=e,n=b;const q=!!(2&l);q&&(n|=2);let m=!q,u=!0,C=0,y=0;for(;C<p.length;C++){const H=rc(p[C],c,n);if(H instanceof c){if(!q){B(H);const ja=!!((H.o[z]|0)&2);m&&(m=!ja);u&&(u=ja)}p[y++]=H}}y<C&&(p.length=y);l|=4;l=u?l|16:l&-17;l=m?l|8:l&-9;A(p,l);q&&Object.freeze(p)}if(g&&!(8&l||!e.length&&(k===1||k===4&&32&l))){Oc(l)&&(e=Array.prototype.slice.call(e),l=Nc(l,b),b=
G(a,b,d,e));c=e;g=l;for(p=0;p<c.length;p++)l=c[p],n=Ic(l),l!==n&&(c[p]=n);g|=8;g=c.length?g&-17:g|16;A(c,g);l=g}k===1||k===4&&32&l?Oc(l)||(b=l,l|=!e.length||16&l&&(!h||32&l)?2:1024,l!==b&&A(e,l),Object.freeze(e)):(k===2&&Oc(l)&&(e=Array.prototype.slice.call(e),l=Nc(l,b),l=Vc(l,b,f),A(e,l),b=G(a,b,d,e)),Oc(l)||(d=l,l=Vc(l,b,f),l!==d&&A(e,l)));return e}
function I(a,b,c,d){d!=null?qc(d,b):d=void 0;return F(a,c,d)}
function Nc(a,b){a=(2&b?a|2:a&-3)|32;return a&=-1025}
function Vc(a,b,c){32&b&&c||(a&=-33);return a}
function Wc(a,b,c,d){B(a);const e=a.o[z]|0;Ib(e);a=Uc(a,e,c,b,2,!0);d=d!=null?qc(d,c):new c;a.push(d);c=d;B(c);(c.o[z]|0)&2?Cb(a,8):Cb(a,16)}
function J(a,b){a=Jc(a,b);return a==null||typeof a==="string"?a:void 0}
function Xc(a,b){let c;return(c=J(a,b))!=null?c:""}
function Yc(a,b){var c=Zc;B(a);var d=a.o;c=Rc(Qc(d),d,d[z]|0,c);return J(a,c===b?b:-1)}
function K(a,b,c){return F(a,b,pc(c))}
;function $c(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function ad(){return Error("Failed to read varint, encoding is invalid.")}
function bd(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function cd(a){if(typeof a==="string")return{buffer:hb(a),J:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),J:!1};if(a.constructor===Uint8Array)return{buffer:a,J:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),J:!1};if(a.constructor===lb)return{buffer:mb(a)||new Uint8Array(0),J:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),J:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;function dd(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw ad();ed(a,c);return e}
function ed(a,b){a.h=b;if(b>a.i)throw bd(a.i,b);}
function fd(a,b){if(b<0)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw bd(b,a.i-c);a.h=d;return c}
var gd=class{constructor(a,b,c,d){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,b,c,d)}init(a,b,c,{X:d=!1}={}){this.X=d;a&&(a=cd(a),this.j=a.buffer,this.m=a.J,this.l=b||0,this.i=c!==void 0?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.X=!1}reset(){this.h=this.l}},hd=[];function id(a,b,c,d){if(jd.length){const e=jd.pop();kd(e,d);e.h.init(a,b,c,d);return e}return new ld(a,b,c,d)}
function kd(a,{ha:b=!1}={}){a.ha=b}
function md(a){a.h.clear();a.l=-1;a.i=-1;jd.length<100&&jd.push(a)}
function nd(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=dd(a.h)>>>0;b=c>>>3;c&=7;if(!(c>=0&&c<=5))throw $c(c,a.j);if(b<1)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function od(a){switch(a.i){case 0:if(a.i!=0)od(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if((d[b++]&128)===0){ed(a,b);break a}throw ad();}break;case 1:a=a.h;ed(a,a.h+8);break;case 2:a.i!=2?od(a):(b=dd(a.h)>>>0,a=a.h,ed(a,a.h+b));break;case 5:a=a.h;ed(a,a.h+4);break;case 3:b=a.l;do{if(!nd(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=b)throw Error("Unmatched end-group tag");break}od(a)}while(1);break;default:throw $c(a.i,a.j);}}
function pd(a,b,c){const d=a.h.i,e=dd(a.h)>>>0,f=a.h.h+e;let g=f-d;g<=0&&(a.h.i=f,c(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${e} bytes, instead read ${e-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=d}
var ld=class{constructor(a,b,c,d){if(hd.length){const e=hd.pop();e.init(a,b,c,d);a=e}else a=new gd(a,b,c,d);this.h=a;this.j=this.h.h;this.i=this.l=-1;kd(this,d)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}},jd=[];var L=class{constructor(a,b,c){a=Fc(a,b,c,3);B(this);this.o=a}toJSON(){return Ac(this)}clone(){var a=this;B(a);var b=a;B(b);b=b.o;b=a=new a.constructor(xc(b,b[z]|0,Hc,!0,!0));B(b);Cb(b.o,2);return a}J(){B(this);return!!((this.o[z]|0)&2)}};L.prototype[xb]=Eb;function qd(){const a=class{constructor(){throw Error();}};Object.setPrototypeOf(a,a.prototype);return a}
var rd=qd();var sd=class{constructor(a,b){this.V=a;a=ma(rd);this.h=!!a&&b===a||!1}};const td=new sd(function(a,b,c,d,e){if(a.i!==2)return!1;pd(a,Sc(b,d,c),e);return!0},rd),ud=new sd(function(a,b,c,d,e){if(a.i!==2)return!1;
pd(a,Sc(b,d,c),e);return!0},rd);
var vd=Symbol(),wd=Symbol(),xd=Symbol();let yd,zd;
function Ad(a){var b=Bd,c=Cd,d=a[vd];if(d)return d;d={};d.va=a;d.ba=Dc(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Fa=!0,yd!=null||(yd=e),zd!=null||(zd=a[f+1]),e=a[f+=2]));const g={};for(;e&&Array.isArray(e)&&e.length&&typeof e[0]==="number"&&e[0]>0;){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let p;var k=void 0;e instanceof sd?p=e:(p=td,f--);let n;if((n=p)==null?0:n.h){e=a[++f];
k=a;var l=f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const q=g[h];k?c(d,h,p,k,q):b(d,h,p,q)}}return a[vd]=d}
;function Bd(a,b,c,d){const e=c.V;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function Cd(a,b,c,d,e){const f=c.V;let g,h;a[b]=(k,l,p)=>f(k,l,p,h||(h=Ad(d).ba),g||(g=Dd(d)),e)}
function Dd(a){let b=a[wd];if(b!=null)return b;const c=Ad(a);b=c.Fa?(d,e)=>yd(d,e,c):(d,e)=>{const f=d[z]|0;
for(;nd(e)&&e.i!=4;){var g=e.l,h=c[g];if(h==null){var k=c.extensions;k&&(k=k[g])&&(k=Ed(k),k!=null&&(h=c[g]=k))}if(h==null||!h(e,d,g)){k=e;h=k.j;od(k);if(k.ha)var l=void 0;else{var p=k.h.h-h;k.h.h=h;k=k.h;h=p;if(h==0)l=jb();else{var n=fd(k,h);k.X&&k.m?h=k.j.subarray(n,n+h):(k=k.j,p=n,h=n+h,h=p===h?new Uint8Array(0):Zb?k.slice(p,h):new Uint8Array(k.subarray(p,h)));l=h.length==0?jb():new lb(h,ib)}}p=k=h=void 0;n=d;l&&((h=(k=(p=n[vb])!=null?p:n[vb]=new wc)[g])!=null?h:k[g]=[]).push(l)}}if(e=tc(d))e.h=
c.va[xd];f&8192&&Bb(d,34);return!0};
a[wd]=b;a[xd]=Fd.bind(a);return b}
function Fd(a,b,c){const d=this[vd],e=this[wd],f=Ec(void 0,d.ba,!1),g=tc(a);if(g){var h=!1,k=d.extensions;if(k&&(g==null||uc(g,(l,p,n)=>{if(n.length!==0)if(k[p])for(const q of n){l=id(q);try{h=!0,e(f,l)}finally{md(l)}}else c==null||c(a,p,n)}),h)){let l=a[z]|0;
if(l&2&&l&16384)throw Error();Kb(f,f[z]|0,(p,n)=>{if(Kc(a,l,p)!=null)switch(b==null?void 0:b.Mb){case 1:return;default:throw Error();}l=G(a,l,p,n);delete g[p]})}}}
function Ed(a){a=Array.isArray(a)?a[0]instanceof sd?a:[ud,a]:[a,void 0];const b=a[0].V;if(a=a[1]){const c=Dd(a),d=Ad(a).ba;return(e,f,g)=>b(e,f,g,d,c)}return b}
;var Gd;
Gd=new sd(function(a,b,c){if(a.i!==2)return!1;var d=dd(a.h)>>>0;a=a.h;var e=fd(a,d);a=a.j;if(Ma){var f=a,g;(g=La)||(g=La=new TextDecoder("utf-8",{fatal:!0}));d=e+d;f=e===0&&d===f.length?f:f.subarray(e,d);try{var h=g.decode(f)}catch(l){if(Ka===void 0){try{g.decode(new Uint8Array([128]))}catch(p){}try{g.decode(new Uint8Array([97])),Ka=!0}catch(p){Ka=!1}}!Ka&&(La=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let p;for(;h<d;){var k=a[h++];k<128?e.push(k):k<224?h>=d?Ia():(p=a[h++],k<194||(p&192)!==
128?(h--,Ia()):e.push((k&31)<<6|p&63)):k<240?h>=d-1?Ia():(p=a[h++],(p&192)!==128||k===224&&p<160||k===237&&p>=160||((g=a[h++])&192)!==128?(h--,Ia()):e.push((k&15)<<12|(p&63)<<6|g&63)):k<=244?h>=d-2?Ia():(p=a[h++],(p&192)!==128||(k<<28)+(p-144)>>30!==0||((g=a[h++])&192)!==128||((f=a[h++])&192)!==128?(h--,Ia()):(k=(k&7)<<18|(p&63)<<12|(g&63)<<6|f&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ia();e.length>=8192&&(l=Ja(l,e),e.length=0)}h=Ja(l,e)}G(b,b[z]|0,c,h);return!0},qd());
var Hd=function(a,b,c=rd){return new sd(a,c)}(function(a,b,c,d,e){if(a.i!==2)return!1;
d=Ec(void 0,d,!0);var f=b[z]|0;Ib(f);var g=!!(64&f)||!(8192&f);let h=Lc(b,f,c);const k=h!==Gb;if(g||!k){let l=g=k?h[z]|0:0;if(!k||2&l||Oc(l)||4&l&&!(32&l))h=Array.prototype.slice.call(h),l=Nc(l,f),f=G(b,f,c,h);l=Mc(l,f)&-13;l=Vc(l&-17,f,!0);l!==g&&A(h,l)}h.push(d);pd(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b))for(let l=0;l<b.length;l++){var f=e,g=a,h=g.h;
var k=b[l];k instanceof L?(B(k),k=k.o):k=Array.isArray(k)?Ec(k,d,!1):void 0;h.call(g,c,k,f)}});function Id(){}
;function Jd(a){for(const b in a)return!1;return!0}
function Kd(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=Kd(a[c]);return b}
const Ld="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Md(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<Ld.length;f++)c=Ld[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Nd(a,b){this.h=a===Od&&b||""}
Nd.prototype.toString=function(){return this.h};
var Od={};new Nd(Od,"");function Pd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Qd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var q=g,m=0;m<64;m+=4)q[m/4]=n[m]<<24|n[m+1]<<16|n[m+2]<<8|n[m+3];for(m=16;m<80;m++)n=q[m-3]^q[m-8]^q[m-14]^q[m-16],q[m]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],C=e[2],y=e[3],H=e[4];for(m=0;m<80;m++){if(m<40)if(m<20){var ja=y^u&(C^y);var Wb=1518500249}else ja=u^C^y,Wb=1859775393;else m<60?(ja=u&C|y&(u|C),Wb=2400959708):(ja=u^C^y,Wb=3395469782);ja=((n<<5|n>>>27)&4294967295)+ja+H+Wb+q[m]&4294967295;H=y;y=C;C=(u<<30|u>>>2)&4294967295;u=n;n=ja}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+C&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(n,q){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var m=[],u=0,C=n.length;u<C;++u)m.push(n.charCodeAt(u));n=m}q||(q=n.length);m=0;if(l==0)for(;m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64;for(;m<q;)if(f[l++]=n[m++],p++,l==64)for(l=0,b(f);m+64<q;)b(n.slice(m,m+64)),m+=64,p+=64}
function d(){var n=[],q=p*8;l<56?c(h,56-l):c(h,64-(l-56));for(var m=63;m>=56;m--)f[m]=q&255,q>>>=8;b(f);for(m=q=0;m<5;m++)for(var u=24;u>=0;u-=8)n[q++]=e[m]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,ya:function(){for(var n=d(),q="",m=0;m<n.length;m++)q+="0123456789ABCDEF".charAt(Math.floor(n[m]/16))+"0123456789ABCDEF".charAt(n[m]%16);return q}}}
;function Rd(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Sd(Pd(d),a,c||null)].join(" "):null}
function Sd(a,b,c){var d=[];let e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],va(d,function(h){e.push(h)}),Td(e.join(" "));
const f=[],g=[];va(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];va(d,function(h){e.push(h)});
a=Td(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Td(a){const b=Qd();b.update(a);return b.ya().toLowerCase()}
;function Ud(){this.h=document||{cookie:""}}
Ud.prototype.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ka:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
Ud.prototype.set=function(a,b,c){let d,e,f,g=!1,h;typeof c==="object"&&(h=c.Pb,g=c.Qb||!1,f=c.domain||void 0,e=c.path||void 0,d=c.ka);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');d===void 0&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(d<0?"":d==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+d*1E3)).toUTCString())+(g?";secure":"")+(h!=null?";samesite="+h:"")};
Ud.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=pa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
Ud.prototype.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{ka:0,path:b,domain:c});return d};
Ud.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=pa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};function Vd(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new Ud).get(b));return a?Rd(a,c,d):null}
;var Wd=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function Xd(){this.l=this.l;this.i=this.i}
Xd.prototype.l=!1;Xd.prototype.dispose=function(){this.l||(this.l=!0,this.m())};
Xd.prototype[Symbol.dispose]=function(){this.dispose()};
Xd.prototype.addOnDisposeCallback=function(a,b){this.l?b!==void 0?a.call(b):a():(this.i||(this.i=[]),b&&(a=a.bind(b)),this.i.push(a))};
Xd.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function Yd(a,b){a.l(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class Zd{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class $d{constructor(){this.i=this.h=null}add(a,b){const c=ae.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var ae=new Zd(()=>new be,a=>a.reset());
class be{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let ce,de=!1,ee=new $d,ge=(a,b)=>{ce||fe();de||(ce(),de=!0);ee.add(a,b)},fe=()=>{const a=Promise.resolve(void 0);
ce=()=>{a.then(he)}};
function he(){let a;for(;a=ee.remove();){try{a.h.call(a.scope)}catch(b){Na(b)}Yd(ae,a)}de=!1}
;function M(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Id)try{const b=this;a.call(void 0,function(c){ie(b,2,c)},function(c){ie(b,3,c)})}catch(b){ie(this,3,b)}}
function je(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
je.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var ke=new Zd(function(){return new je},function(a){a.reset()});
function le(a,b,c){const d=ke.get();d.j=a;d.i=b;d.context=c;return d}
function me(a){if(a instanceof M)return a;const b=new M(Id);ie(b,2,a);return b}
M.prototype.then=function(a,b,c){return ne(this,Wd(typeof a==="function"?a:null),Wd(typeof b==="function"?b:null),c)};
M.prototype.$goog_Thenable=!0;M.prototype.C=function(a,b){return ne(this,null,Wd(a),b)};
M.prototype.catch=M.prototype.C;M.prototype.cancel=function(a){if(this.h==0){const b=new oe(a);ge(function(){pe(this,b)},this)}};
function pe(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){var d=0,e=null,f=null;for(let g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?pe(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):qe(c),re(c,e,3,b)))}a.j=null}else ie(a,3,b)}
function se(a,b){a.i||a.h!=2&&a.h!=3||te(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ne(a,b,c,d){const e=le(null,null,null);e.h=new M(function(f,g){e.j=b?function(h){try{const k=b.call(d,h);f(k)}catch(k){g(k)}}:f;
e.i=c?function(h){try{const k=c.call(d,h);k===void 0&&h instanceof oe?g(h):f(k)}catch(k){g(k)}}:g});
e.h.j=a;se(a,e);return e.h}
M.prototype.H=function(a){this.h=0;ie(this,2,a)};
M.prototype.K=function(a){this.h=0;ie(this,3,a)};
function ie(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.H,f=a.K;if(d instanceof M){se(d,le(e||Id,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if(h=="object"&&d!=null||h=="function")try{const k=d.then;if(typeof k==="function"){ue(d,k,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,te(a),b!=3||c instanceof oe||ve(a,c))}}
function ue(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
let h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function te(a){a.s||(a.s=!0,ge(a.B,a))}
function qe(a){let b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
M.prototype.B=function(){let a;for(;a=qe(this);)re(this,a,this.h,this.v);this.s=!1};
function re(a,b,c,d){if(c==3&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,we(b,c,d);else try{b.l?b.j.call(b.context):we(b,c,d)}catch(e){xe.call(null,e)}Yd(ke,b)}
function we(a,b,c){b==2?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function ve(a,b){a.m=!0;ge(function(){a.m&&xe.call(null,b)})}
var xe=Na;function oe(a){oa.call(this,a)}
na(oe,oa);oe.prototype.name="cancel";const ye=self;class ze{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function N(a){Xd.call(this);this.H=1;this.s=[];this.v=0;this.h=[];this.j={};this.W=!!a}
na(N,Xd);N.prototype.K=function(a,b,c){let d=this.j[a];d||(d=this.j[a]=[]);const e=this.H;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.H=e+3;d.push(e);return e};
N.prototype.C=function(a){const b=this.h[a];if(b){const c=this.j[b];this.v!=0?(this.s.push(a),this.h[a+1]=()=>{}):(c&&xa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
N.prototype.B=function(a,b){var c=this.j[a];if(c){const e=Array(arguments.length-1);var d=arguments.length;let f;for(f=1;f<d;f++)e[f-1]=arguments[f];if(this.W)for(f=0;f<c.length;f++)d=c[f],Ae(this.h[d+1],this.h[d+2],e);else{this.v++;try{for(f=0,d=c.length;f<d&&!this.l;f++){const g=c[f];this.h[g+1].apply(this.h[g+2],e)}}finally{if(this.v--,this.s.length>0&&this.v==0)for(;c=this.s.pop();)this.C(c)}}return f!=0}return!1};
function Ae(a,b,c){ge(function(){a.apply(b,c)})}
N.prototype.clear=function(a){if(a){const b=this.j[a];b&&(b.forEach(this.C,this),delete this.j[a])}else this.h.length=0,this.j={}};
N.prototype.m=function(){N.Ka.m.call(this);this.clear();this.s.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let O={};var Be=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Tb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ce={ta:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},De={ta:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){return[].concat.apply([],a)}};
O.Ja=function(){Be?(O.pa=Uint8Array,O.na=Uint16Array,O.oa=Int32Array,O.assign(O,Ce)):(O.pa=Array,O.na=Array,O.oa=Array,O.assign(O,De))};
O.Ja();try{new Uint8Array(1)}catch(a){};function Ee(a){for(var b=a.length;--b>=0;)a[b]=0}
Ee(Array(576));Ee(Array(60));Ee(Array(512));Ee(Array(256));Ee(Array(29));Ee(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Fe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Ge=class{constructor(a){this.name=a}};var He=new Ge("rawColdConfigGroup");var Ie=new Ge("rawHotConfigGroup");var Je=class extends L{constructor(a){super(a)}};var Ke=class extends L{constructor(a){super(a)}};var Le=class extends L{constructor(a){super(a)}};var Me=class extends L{constructor(a){super(a)}getPlayerType(){var a=Jc(this,36);a=a==null?a:gc(a)?a|0:void 0;return a!=null?a:0}setHomeGroupInfo(a){return I(this,Le,81,a)}clearLocationPlayabilityToken(){return F(this,89)}};var Ne=class extends L{constructor(a){super(a)}getKey(){return Xc(this,1)}},Oe=[2,3,4,5,6];var Pe=class extends L{constructor(a){super(a)}setTrackingParams(a){if(a!=null)if(typeof a==="string")a=a?new lb(a,ib):jb();else if(a.constructor!==lb)if(cb&&a!=null&&a instanceof Uint8Array)a=a.length?new lb(new Uint8Array(a),ib):jb();else throw Error();return F(this,1,a)}};var Qe=class extends L{constructor(a){super(a)}};var Re=class extends L{constructor(a){super(a)}};var Se=class extends L{constructor(a){super(a)}};var Te=class extends L{constructor(a){super(a)}setSafetyMode(a){return F(this,5,lc(a))}};var Ue=class extends L{constructor(a){super(a)}j(a){return I(this,Me,1,a)}};var Ve=class extends L{constructor(a){super(a,500)}};var We=class extends L{constructor(a){super(a)}};var Xe=class extends L{constructor(a){super(a)}setVideoId(a){return Pc(this,1,Zc,pc(a))}getPlaylistId(){return Yc(this,2)}},Zc=[1,2];var Ye=class extends L{constructor(a){super(a)}};var Ze=new Ge("recordNotificationInteractionsEndpoint");var $e=["notification/convert_endpoint_to_url"],af=["notification/record_interactions"],bf=["notification_registration/set_registration"];var cf=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var df=["notifications_register","notifications_check_registration"];var ef=class extends Error{constructor(a,...b){super(a);this.args=[...b];Object.setPrototypeOf(this,new.target.prototype)}};let ff=null;function P(a,b){const c={};c.key=a;c.value=b;return gf().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function hf(){return P("IndexedDBCheck","testing IndexedDB").then(()=>jf("IndexedDBCheck")).then(a=>a==="testing IndexedDB"?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function jf(a){const b=new ef("Error accessing DB");return gf().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function gf(){return ff?Promise.resolve(ff):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))ff=d,a(ff);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),gf()};
c.onupgradeneeded=kf})}
function kf(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const lf={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function mf(a){if(a.length===1)return a[0];var b=lf.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(lf).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function nf(a){return`/youtubei/v1/${mf(a)}`}
;var of=class extends L{constructor(a){super(a)}};var pf=class extends L{constructor(a){super(a,0,"yt.sw.adr")}};const qf=t.window;let rf,sf;const tf=(qf==null?void 0:(rf=qf.yt)==null?void 0:rf.config_)||(qf==null?void 0:(sf=qf.ytcfg)==null?void 0:sf.data_)||{};w("yt.config_",tf);function Q(...a){a=arguments;a.length>1?tf[a[0]]=a[1]:a.length===1&&Object.assign(tf,a[0])}
function R(a,b){return a in tf?tf[a]:b}
;const uf=[];function vf(a){uf.forEach(b=>b(a))}
function wf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){xf(b)}}:a}
function xf(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b));vf(a)}
function yf(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),Q("ERRORS",b))}
;const zf=/^[\w.]*$/,Af={q:!0,search_query:!0};function Bf(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Cf(h[0]||""),l=Cf(h[1]||"");if(k in c){const p=c[k];Array.isArray(p)?ya(p,l):c[k]=[p,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Bf);d.args=[{key:e,value:h[1],query:a,method:Df===l?"unchanged":l}];Af.hasOwnProperty(e)||yf(d)}}return c}
const Df=String(Bf);function Ef(a){a.charAt(0)==="?"&&(a=a.substring(1));return Bf(a,"&")}
function Ff(a,b){return Gf(a,b||{},!0)}
function Gf(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ef(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);b=a;a=Ha(e);a?(c=b.indexOf("#"),c<0&&(c=b.length),f=b.indexOf("?"),f<0||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Hf(a){if(!b)var b=window.location.href;const c=a.match(Ea)[1]||null,d=Fa(a.match(Ea)[3]||null);c&&d?(a=a.match(Ea),b=b.match(Ea),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Fa(b.match(Ea)[3]||null)===d&&(Number(b.match(Ea)[4]||null)||null)===(Number(a.match(Ea)[4]||null)||null):!0;return a}
function Cf(a){return a&&a.match(zf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function If(a,b){typeof a==="function"&&(a=wf(a));return window.setTimeout(a,b)}
;var Jf="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),Kf=[...Jf,"client_dev_set_cookie"];function S(a){a=Lf(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=Lf(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Mf(){return R("EXPERIMENTS_TOKEN","")}
function Lf(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Nf(){const a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=R("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;[...Jf];let Of=!1;function Pf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);b.priority&&(c.priority=b.priority);a=Qf(a,b);const d=Rf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=p=>{p=p||{};k?b.onSuccess&&b.onSuccess.call(e,p,h):b.onError&&b.onError.call(e,p,h);b.onFinish&&b.onFinish.call(e,p,h)};
(b.format||"JSON")==="JSON"&&(k||h.status>=400&&h.status<500)?h.json().then(l,()=>{l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&a>0&&(g=If(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function Qf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ff(a,b);return a}
function Rf(a,b){const c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=R("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Fa(a.match(Ea)[3]||null)&&!b.withCredentials&&Fa(a.match(Ea)[3]||null)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&
(e=Ef(e),Md(e,f),e=b.postBodyFormat&&b.postBodyFormat==="JSON"?JSON.stringify(e):Ha(e));f=e||f&&!Jd(f);!Of&&f&&b.method!=="POST"&&(Of=!0,xf(Error("AJAX request with postData should use POST")));return e}
;const Sf=[{aa:a=>`Cannot read property '${a.key}'`,
T:{Error:[{u:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{u:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{u:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{u:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{u:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{u:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{u:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{aa:a=>`Cannot call '${a.key}'`,
T:{TypeError:[{u:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{u:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{u:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{u:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{u:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{u:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{aa:a=>`${a.key} is not defined`,
T:{ReferenceError:[{u:/(.*) is not defined/,groups:["key"]},{u:/Can't find variable: (.*)/,groups:["key"]}]}}];var Uf={F:[],D:[{callback:Tf,weight:500}]};function Tf(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vf(){if(!Wf){var a=Wf=new Xf;a.F.length=0;a.D.length=0;Yf(a,Uf)}return Wf}
function Yf(a,b){b.F&&a.F.push.apply(a.F,b.F);b.D&&a.D.push.apply(a.D,b.D)}
var Xf=class{constructor(){this.D=[];this.F=[]}},Wf;const Zf=new N;function $f(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=ag(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=ag(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=ag(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function ag(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function bg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cg(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=$f(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cg(`${f}.ve`,g,h,k):0;d+=f;d+=cg(e,a[e],b,c);if(d>500)break}}else c[b]=dg(a),d+=c[b].length;else c[b]=dg(a),d+=c[b].length;return d}
function cg(a,b,c,d){c+=`.${a}`;a=dg(b);d[c]=a;return c.length+a.length}
function dg(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function eg(){fg.instance||(fg.instance=new fg);return fg.instance}
function gg(a,b){a={};var c=[];"USER_SESSION_ID"in tf&&c.push({key:"u",value:R("USER_SESSION_ID")});var d=Pd(String(t.location.href));var e=[];var f;(f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__1PSAPISID||t.__OVERRIDE_SID)?f=!0:(typeof document!=="undefined"&&(f=new Ud,f=f.get("SAPISID")||f.get("APISID")||f.get("__Secure-3PAPISID")||f.get("__Secure-1PAPISID")),f=!!f);f&&(f=(d=d.indexOf("https:")==0||d.indexOf("chrome-extension:")==0||d.indexOf("chrome-untrusted://new-tab-page")==0||d.indexOf("moz-extension:")==
0)?t.__SAPISID:t.__APISID,f||typeof document==="undefined"||(f=new Ud,f=f.get(d?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?Rd(f,d?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&((d=Vd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Vd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=e.length==0?null:e.join(" "))a.Authorization=e,e=b=b==null?void 0:b.sessionIndex,e===void 0&&(e=Number(R("SESSION_INDEX",0)),e=isNaN(e)?0:e),S("voice_search_auth_header_removal")||
(a["X-Goog-AuthUser"]=e.toString()),"INNERTUBE_HOST_OVERRIDE"in tf||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in tf&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
var fg=class{constructor(){this.La=!0}};var hg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ig(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;w("ytglobal.prefsUserPrefsPrefs_",v("ytglobal.prefsUserPrefsPrefs_")||{});function jg(){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new ef("Datasync ID not set","unknown");}
;function kg(a,b){return lg(a,0,b)}
function mg(a){const b=v("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var ng=class{h(a){lg(a,1)}};function og(){pg.instance||(pg.instance=new pg);return pg.instance}
function lg(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):If(a,c||0)}
var pg=class extends ng{R(a){if(a===void 0||!Number.isNaN(Number(a))){var b=v("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=v("yt.scheduler.instance.start");a&&a()}},qg=og();const rg=[];let sg,tg=!1;function ug(a){tg||(sg?sg.handleError(a):(rg.push({type:"ERROR",payload:a}),rg.length>10&&rg.shift()))}
function vg(a,b){tg||(sg?sg.S(a,b):(rg.push({type:"EVENT",eventType:a,payload:b}),rg.length>10&&rg.shift()))}
;function wg(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function xg(a){return a.substr(0,a.indexOf(":"))||a}
;const yg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},zg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Ag={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends ef{constructor(a,b={},c=yg[a],d=zg[a],e=Ag[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},Bg=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},yg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Bg.prototype)}},Cg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Cg.prototype)}};const Dg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Eg(a,b,c,d){b=xg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new U("QUOTA_EXCEEDED",a);if(Wa&&e.name==="UnknownError")return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Cg)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Dg.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Fb:e.name})];e.level="WARNING";return e}
function Fg(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Gg(a){if(!a)throw Error();throw a;}
function Hg(a){return a}
var Ig=class{constructor(a){this.h=a}};function Jg(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Kg?Lg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Mg(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Kg?Lg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Lg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Kg?Lg(a,b,f,d,e):d(f)},f=>{e(f)})}
var Kg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Kg(new Ig((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)Kg.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Kg(new Ig((b,c)=>{a instanceof Kg?a.then(b,c):b(a)}))}static reject(a){return new Kg(new Ig((b,c)=>{c(a)}))}then(a,b){const c=a!=null?a:Hg,d=b!=null?b:Gg;
return new Kg(new Ig((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{Jg(this,this,c,e,f)}),this.i.push(()=>{Mg(this,this,d,e,f)})):this.state.status==="FULFILLED"?Jg(this,this,c,e,f):this.state.status==="REJECTED"&&Mg(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Ng(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Og(a){return new Promise((b,c)=>{Ng(a,b,c)})}
function V(a){return new Kg(new Ig((b,c)=>{Ng(a,b,c)}))}
;function Pg(a,b){return new Kg(new Ig((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const Qg=window;var W=Qg.ytcsi&&Qg.ytcsi.now?Qg.ytcsi.now:Qg.performance&&Qg.performance.timing&&Qg.performance.now&&Qg.performance.timing.navigationStart?()=>Qg.performance.timing.navigationStart+Qg.performance.now():()=>(new Date).getTime();function X(a,b,c,d){return r(function*(){const e={mode:"readonly",A:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.A?3:1;let g=0,h;for(;!h;){g++;const p=Math.round(W());try{var k=a.h.transaction(b,e.mode),l=d;const n=new Rg(k),q=yield Sg(n,l),m=Math.round(W());Tg(a,p,m,g,void 0,b.join(),e);return q}catch(n){l=Math.round(W());const q=Eg(n,a.h.name,b.join(),a.h.version);if(q instanceof U&&!q.h||g>=f)Tg(a,p,l,g,q,b.join(),e),h=q}}return Promise.reject(h)})}
function Ug(a,b,c){a=a.h.createObjectStore(b,c);return new Vg(a)}
function Wg(a,b,c,d){return X(a,[b],{mode:"readwrite",A:!0},e=>{e=e.objectStore(b);return V(e.h.put(c,d))})}
function Tg(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&vg("QUOTA_EXCEEDED",{dbName:xg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),vg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xg(a,!1,d,f,b,g.tag),ug(e)):Xg(a,!0,d,f,b,g.tag)}
function Xg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){vg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Yg=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}add(a,b,c){return X(this,[a],{mode:"readwrite",A:!0},d=>d.objectStore(a).add(b,c))}clear(a){return X(this,[a],{mode:"readwrite",
A:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;((a=this.options)==null?0:a.closed)&&this.options.closed()}count(a,b){return X(this,[a],{mode:"readonly",A:!0},c=>c.objectStore(a).count(b))}delete(a,b){return X(this,[a],{mode:"readwrite",
A:!0},c=>c.objectStore(a).delete(b))}get(a,b){return X(this,[a],{mode:"readonly",
A:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return X(this,[a],{mode:"readonly",
A:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Zg(a,b,c){a=a.h.openCursor(b.query,b.direction);return $g(a).then(d=>Pg(d,c))}
function ah(a,b){return Zg(a,{query:b},c=>c.delete().then(()=>bh(c))).then(()=>{})}
function ch(a,b,c){const d=[];return Zg(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),bh(e)}).then(()=>d)}
var Vg=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?ah(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?V(this.h.getAll(a,b)):ch(this,a,b)}index(a){try{return new dh(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Cg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Sg(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Rg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=U;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new U("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Vg(a),this.j.set(a,b));return b}};function eh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return $g(a).then(f=>Pg(f,c))}
function fh(a,b,c){const d=[];return eh(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),bh(e)}).then(()=>d)}
var dh=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return eh(this,{query:a},b=>b.delete().then(()=>bh(b)))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?V(this.h.getAll(a,b)):fh(this,a,b)}getKey(a){return V(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function $g(a){return V(a).then(b=>b?new gh(a,b):null)}
function bh(a){a.cursor.continue(void 0);return $g(a.request)}
function hh(a){a.cursor.advance(5);return $g(a.request)}
var gh=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}update(a){return V(this.cursor.update(a))}};function ih(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.wa,h=c.blocking,k=c.Ma,l=c.upgrade,p=c.closed;let n;const q=()=>{n||(n=new Yg(f.result,{closed:p}));return n};
f.addEventListener("upgradeneeded",m=>{try{if(m.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");m.dataLoss&&m.dataLoss!=="none"&&vg("IDB_DATA_CORRUPTED",{reason:m.dataLossMessage||"unknown reason",dbName:xg(a)});const u=q(),C=new Rg(f.transaction);l&&l(u,y=>m.oldVersion<y&&m.newVersion>=y,C);
C.done.catch(y=>{e(y)})}catch(u){e(u)}});
f.addEventListener("success",()=>{const m=f.result;h&&m.addEventListener("versionchange",()=>{h(q())});
m.addEventListener("close",()=>{vg("IDB_UNEXPECTEDLY_CLOSED",{dbName:xg(a),dbVersion:m.version});k&&k()});
d(q())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function jh(a,b,c={}){return ih(a,b,c)}
function kh(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.wa;d&&c.addEventListener("blocked",()=>{d()});
yield Og(c)}catch(c){throw Eg(c,a,"",-1);}})}
;function lh(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function mh(a,b){if(!b)throw Fg("openWithToken",xg(a.name));return a.open()}
var nh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return jh(a,b,c)}delete(a={}){return kh(this.name,a)}open(){if(!this.j)throw lh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Ma:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=(f=Error().stack)!=null?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const p of Object.keys(h.M)){const {L:n,Kb:q=Number.MAX_VALUE}=h.M[p];!(f.h.version>=n)||f.h.version>=q||f.h.objectStoreNames.contains(p)||l.push(p)}if(l.length!==0){const p=Object.keys(e.options.M),n=k.objectStoreNames();if(e.m<T("ytidb_reopen_db_retries",0))return e.m++,k.close(),ug(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();if(e.l<T("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),ug(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:p,foundObjectStores:n})),d();throw new Bg(n,p);}return k}catch(k){if(k instanceof DOMException?k.name==="VersionError":"DOMError"in self&&k instanceof DOMError?k.name==="VersionError":k instanceof Object&&"message"in k&&k.message==="An attempt was made to open a database using a lower version than the existing version."){g=
yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(e.options.version!==void 0&&h>e.options.version+1)throw g.close(),e.j=!1,lh(e,h);return g}b();k instanceof Error&&!S("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Eg(k,e.name,"",(l=e.options.version)!=null?l:-1);}})};
return this.h=a=d()}};const oh=new nh("YtIdbMeta",{M:{databases:{L:1}},upgrade(a,b){b(1)&&Ug(a,"databases",{keyPath:"actualName"})}});function ph(a,b){return r(function*(){return X(yield mh(oh,b),["databases"],{A:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return V(d.h.put(a,void 0)).then(()=>{})})})})}
function qh(a,b){return r(function*(){if(a)return(yield mh(oh,b)).delete("databases",a)})}
;let rh;const sh=new class{constructor(){}}(new class{constructor(){}});function th(){return r(function*(){return!0})}
function uh(){if(rh!==void 0)return rh;tg=!0;return rh=th().then(a=>{tg=!1;return a})}
function vh(){return v("ytglobal.idbToken_")||void 0}
function wh(){const a=vh();return a?Promise.resolve(a):uh().then(b=>{(b=b?sh:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new ze;function xh(a){try{jg();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID",{dbName:a}),ug(a),a;b=jg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function yh(a,b,c,d){return r(function*(){var e,f=(e=Error().stack)!=null?e:"";e=yield wh();if(!e)throw e=Fg("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),ug(e),e;wg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:xh(a);try{return yield ph(f,e),yield jh(f.actualName,b,d)}catch(g){try{yield qh(f.actualName,e)}catch(h){}throw g;}})}
function zh(a,b,c={}){return yh(a,b,!1,c)}
function Ah(a,b,c={}){return yh(a,b,!0,c)}
function Bh(a,b={}){return r(function*(){const c=yield wh();if(c){wg(a);var d=xh(a);yield kh(d.actualName,b);yield qh(d.actualName,c)}})}
function Ch(a,b={}){return r(function*(){const c=yield wh();c&&(wg(a),yield kh(a,b),yield qh(a,c))})}
;function Dh(a,b){let c;return()=>{c||(c=new Eh(a,b));return c}}
var Eh=class extends nh{constructor(a,b){super(a,b);this.options=b;wg(a)}i(a,b,c={}){return(this.options.shared?Ah:zh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.shared?Ch:Bh)(this.name,a)}};function Fh(a,b){return Dh(a,b)}
;var Gh=Fh("ytGcfConfig",{M:{coldConfigStore:{L:1},hotConfigStore:{L:1}},shared:!1,upgrade(a,b){b(1)&&(Ug(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Ug(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Hh(a){return mh(Gh(),a)}
function Ih(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:W()},e=yield Hh(c);yield e.clear("hotConfigStore");return yield Wg(e,"hotConfigStore",d)})}
function Jh(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:W()},f=yield Hh(d);yield f.clear("coldConfigStore");return yield Wg(f,"coldConfigStore",e)})}
function Kh(a){return r(function*(){let b=void 0;yield X(yield Hh(a),["coldConfigStore"],{mode:"readwrite",A:!0},c=>eh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
function Lh(a){return r(function*(){let b=void 0;yield X(yield Hh(a),["hotConfigStore"],{mode:"readwrite",A:!0},c=>eh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
;var Mh=class extends Xd{constructor(){super();this.j=[];this.h=[];const a=v("yt.gcf.config.hotUpdateCallbacks");a?(this.j=[...a],this.h=a):(this.h=[],w("yt.gcf.config.hotUpdateCallbacks",this.h))}m(){for(const b of this.j){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.j.length=0;super.m()}};function Nh(a,b,c){return r(function*(){if(S("start_client_gcf")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=vh();if(d){if(!c){var e;c=(e=yield Lh(d))==null?void 0:e.config}yield Ih(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function Oh(a,b,c){return r(function*(){if(S("start_client_gcf")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=vh();if(d){if(!c){let e;c=(e=yield Kh(d))==null?void 0:e.config}c&&(yield Jh(c,b,c.configData,d))}}})}
var Ph=class{constructor(){this.h=0;this.i=new Mh}};function Qh(){return"INNERTUBE_API_KEY"in tf&&"INNERTUBE_API_VERSION"in tf}
function Rh(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Y:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ba:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),ja:R("INNERTUBE_CONTEXT_HL"),ia:R("INNERTUBE_CONTEXT_GL"),Ca:R("INNERTUBE_HOST_OVERRIDE")||"",Da:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),zb:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Sh(a){const b={client:{hl:a.ja,gl:a.ia,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Y}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=Mf();c!==""&&(b.client.experimentsToken=c);c=Nf();c.length>0&&(b.request={internalExperimentFlags:c});Th(void 0,b);Uh(a,void 0,b);S("start_client_gcf")&&Vh(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var d;if(S("enable_persistent_device_token")&&(a==null?0:(d=a.client)==null?0:d.rolloutToken)){var e;b.client.rolloutToken=a==null?void 0:(e=a.client)==null?void 0:e.rolloutToken}d=Object;e=d.assign;a=b.client;var f=R("DEVICE","");c={};for(const [g,h]of Object.entries(Ef(f))){f=
g;const k=h;f==="cbrand"?c.deviceMake=k:f==="cmodel"?c.deviceModel=k:f==="cbr"?c.browserName=k:f==="cbrver"?c.browserVersion=k:f==="cos"?c.osName=k:f==="cosver"?c.osVersion=k:f==="cplatform"&&(c.platform=k)}b.client=e.call(d,a,c);return b}
function Th(a,b){const c=v("yt.embedded_player.embed_url");c&&(a?(b=Tc(a,Re,7)||new Re,K(b,4,c),I(a,Re,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Uh(a,b,c){if(a.appInstallData)if(b){let d;c=(d=Tc(b,Ke,62))!=null?d:new Ke;K(c,6,a.appInstallData);I(b,Ke,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Wh(a,b,c={}){let d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.sb||R("AUTHORIZATION");b||(a?b=`Bearer ${v("gapi.auth.getToken")().rb}`:(a=gg(eg()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Vh(a,b){if(!Ph.instance){var c=new Ph;Ph.instance=c}c=Ph.instance;var d=W()-c.h;if(c.h!==0&&d<T("send_config_hash_timer"))c=void 0;else{d=v("yt.gcf.config.coldConfigData");var e=v("yt.gcf.config.hotHashData"),f=v("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=W());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(d=c)if(e=d.coldConfigData,c=d.coldHashData,d=d.hotHashData,a){var g;b=(g=Tc(a,Ke,62))!=null?g:new Ke;g=K(b,1,e);g=K(g,3,c);K(g,5,d);I(a,Ke,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},e&&(b.client.configInfo.coldConfigData=e),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d))}
;typeof TextEncoder!=="undefined"&&new TextEncoder;function Xh(a){this.version=1;this.args=a}
;function Yh(){var a=Zh;this.topic="screen-created";this.h=a}
Yh.prototype.toString=function(){return this.topic};const $h=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.K;N.prototype.unsubscribeByKey=N.prototype.C;N.prototype.publish=N.prototype.B;N.prototype.clear=N.prototype.clear;w("ytPubsub2Pubsub2Instance",$h);const ai=v("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",ai);const bi=v("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",bi);const ci=v("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",ci);
w("ytPubsub2Pubsub2SkipSubKey",null);function di(a,b){const c=ei();c&&c.publish.call(c,a.toString(),a,b)}
function fi(a){var b=gi;const c=ei();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(ai[d])try{if(f&&b instanceof Yh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ma){const m=new h;h.ma=m.version}var l=h.ma}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var p=l.construct;
{var n=k.args;const m=n.length;if(m>0){const u=Array(m);for(k=0;k<m;k++)u[k]=n[k];var q=u}else q=[]}f=p.call(l,h,q)}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}catch(m){throw m.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+m.message,m;}a.call(window,f)}catch(m){xf(m)}},ci[b.toString()]?v("yt.scheduler.instance")?qg.h(g):If(g,0):g())});
ai[d]=!0;bi[b.toString()]||(bi[b.toString()]=[]);bi[b.toString()].push(d);return d}
function hi(){var a=ii;const b=fi(function(c){a.apply(void 0,arguments);ji(b)});
return b}
function ji(a){const b=ei();b&&(typeof a==="number"&&(a=[a]),va(a,c=>{b.unsubscribeByKey(c);delete ai[c]}))}
function ei(){return v("ytPubsub2Pubsub2Instance")}
;let ki=void 0,li=void 0;var mi={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};const ni=["client.name","client.version"];function oi(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?ni.includes(b.key):!1);
return a}
;var pi=Fh("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{L:1}},shared:!0,upgrade:(a,b)=>{b(1)&&Ug(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function qi(a,b){return r(function*(){var c=yield mh(pi(),b),d=R("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=oi(e.clientError));e.interface=d;return Wg(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function ri(a,b,c,d){!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&yf(new ef("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new ef("innertube xhrclient not ready",b,c,d),xf(a),a;c={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(h,k)=>{if(d.onSuccess)d.onSuccess(k)},
onFetchSuccess:h=>{if(d.onSuccess)d.onSuccess(h)},
onError:(h,k)=>{if(d.onError)d.onError(k)},
onFetchError:h=>{if(d.onError)d.onError(h)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};c.headers["Content-Type"]||(c.headers["Content-Type"]="application/json");let e="";var f=a.config_.Ca;f&&(e=f);f=a.config_.Da||!1;const g=Wh(f,e,d);Object.assign(c.headers,g);c.headers.Authorization&&!e&&f&&(c.headers["x-origin"]=window.location.origin);a=Ff(`${e}${`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`}`,{alt:"json"});try{Pf(a,c)}catch(h){if(h.name==="InvalidAccessError")yf(Error("An extension is blocking network request."));
else throw h;}}
var si=class{constructor(a){this.config_=null;a?this.config_=a:Qh()&&(this.config_=Rh())}isReady(){!this.config_&&Qh()&&(this.config_=Rh());return!!this.config_}};let ti=0;w("ytDomDomGetNextId",v("ytDomDomGetNextId")||(()=>++ti));w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});t.ytPubsubPubsubInstance||new N;var ui=Symbol("injectionDeps"),vi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},wi=class{constructor(){this.key=Ph}};function xi(a){var b={ca:yi,la:zi.instance};a.i.set(b.ca,b);const c=a.j.get(b.ca);if(c)try{c.Nb(a.resolve(b.ca))}catch(d){c.Jb(d)}}
function Ai(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.la!==void 0)var e=d.la;else if(d.Oa)e=d[ui]?Bi(a,d[ui],c):[],e=d.Oa(...e);else if(d.Na){e=d.Na;const f=e[ui]?Bi(a,e[ui],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Ub||a.h.set(b,e);return e}
function Bi(a,b,c){return b?b.map(d=>d instanceof wi?Ai(a,d.key,c,!0):Ai(a,d,c)):[]}
var Ci=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof wi?Ai(this,a.key,[],!0):Ai(this,a,[])}};let Di;function Ei(){Di||(Di=new Ci);return Di}
;let Fi=window;function Gi(){let a,b;return"h5vcc"in Fi&&((a=Fi.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Fi.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Fi&&Fi.performance.mark&&Fi.performance.measure?2:0}
function Hi(a){const b=Gi();switch(b){case 1:Fi.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Fi.performance.mark(`${a}-start`);break;case 0:break;default:ua(b,"unknown trace type")}}
function Ii(a){var b=Gi();switch(b){case 1:Fi.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Fi.performance.mark(c);Fi.performance.measure(a,b,c);break;case 0:break;default:ua(b,"unknown trace type")}}
;var Ji=S("web_enable_lifecycle_monitoring")&&Gi()!==0,Ki=S("web_enable_lifecycle_monitoring");function Li(a){let b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Mi(a){let b;return(b=a.priority)!=null?b:0}
function Ni(a){var b=Array.from(a.h.keys()).sort((c,d)=>Mi(a.h[d])-Mi(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.U||(a.scheduler.R(b.jobId),lg(b.Z,10))}
var Oi=class{constructor(a){this.scheduler=og();this.i=new ze;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.Z();this.h[b].U=!0;this.h.every(e=>e.U===!0)&&this.i.resolve()};
const d=lg(a,Mi(c));this.h[b]=Object.assign({},c,{Z:a,jobId:d})}}cancel(){for(const a of this.h)a.jobId===void 0||a.U||this.scheduler.R(a.jobId),a.U=!0;this.i.resolve()}};function Pi(a,b,c){Ki&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function Qi(a,b){const c=b.filter(e=>Ri(a,e)===10),d=b.filter(e=>Ri(a,e)!==10);
return a.l.Sb?(...e)=>r(function*(){yield Si(c,...e);Ti(a,d,...e)}):(...e)=>{Ui(c,...e);
Ti(a,d,...e)}}
function Ri(a,b){let c,d;return(d=(c=a.j)!=null?c:b.priority)!=null?d:0}
function Si(a,...b){return r(function*(){og();for(const c of a){let d;mg(()=>{Vi(c.name);const e=Wi(()=>c.callback(...b));
Qb(e)?d=S("web_lifecycle_error_handling_killswitch")?e.then(()=>{Xi(c.name)}):e.then(()=>{Xi(c.name)},f=>{Li(f);
Xi(c.name)}):Xi(c.name)});
d&&(yield d)}})}
function Ti(a,b,...c){b=b.map(d=>({Z:()=>{Vi(d.name);Wi(()=>d.callback(...c));
Xi(d.name)},
priority:Ri(a,d)}));
b.length&&(a.i=new Oi(b))}
function Ui(a,...b){og();for(const c of a)mg(()=>{Vi(c.name);Wi(()=>c.callback(...b));
Xi(c.name)})}
function Vi(a){Ji&&a&&Hi(a)}
function Xi(a){Ji&&a&&Ii(a)}
var Yi=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};Ji&&Hi(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}transition(a,b){Ji&&Ii(this.state);var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.P===a):d.from===this.state&&d.P===a);
if(c){this.i&&(Ni(this.i),this.i=void 0);Pi(this,a,b);this.state=a;Ji&&Hi(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(Qi(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function Wi(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Li(b)}}
;function Zi(){$i||($i=new aj);return $i}
var aj=class extends Yi{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",P:"application_navigating",action:this.m},{from:"application_navigating",P:"none",action:this.s},{from:"application_navigating",P:"application_navigating",action:()=>{}},
{from:"none",P:"none",action:()=>{}}]}m(a,b){this.h=kg(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b==null?void 0:b.event)}s(a,b){this.h&&(qg.R(this.h),this.h=null);a(b==null?void 0:b.event)}},$i;let bj=[];w("yt.logging.transport.getScrapedGelPayloads",function(){return bj});function cj(a,b){const c=dj(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&dj(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(ej(b.auth,h[0])){var f=b.isJspb;ej(f===void 0?"undefined":f?"true":"false",h[1])&&ej(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),ej(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function ej(a,b){return a===void 0||a==="undefined"?!0:a===b}
var fj=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=dj(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=cj(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=cj(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=cj(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b}};
fj.prototype.getSequenceCount=fj.prototype.getSequenceCount;fj.prototype.extractMatchingEntries=fj.prototype.extractMatchingEntries;fj.prototype.smartExtractMatchingEntries=fj.prototype.smartExtractMatchingEntries;fj.prototype.storePayload=fj.prototype.storePayload;function dj(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function gj(a,b){if(a)return a[b.name]}
;const hj=T("initial_gel_batch_timeout",2E3),ij=T("gel_queue_timeout_max_ms",6E4),jj=T("gel_min_batch_size",5);let kj=void 0;class lj{constructor(){this.l=this.h=this.i=0;this.j=!1}}const mj=new lj,nj=new lj,oj=new lj,pj=new lj;let qj,rj=!0,sj=1;const tj=new Map,uj=t.ytLoggingTransportTokensToCttTargetIds_||{},vj=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let wj={};function xj(){let a=v("yt.logging.ims");a||(a=new fj,w("yt.logging.ims",a));return a}
function yj(a,b){if(a.endpoint==="log_event"){zj();var c=Aj(a),d=Bj(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=mi[d||""];var f,g;if(Ei().resolve(new wi)==null)var h=void 0;else{let k;h=(k=v("yt.gcf.config.hotConfigGroup"))!=null?k:R("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;
f=Cj(e.tier);if(f===400){Dj(a,b);return}}wj[c]=!0;c={cttAuthInfo:c,isJspb:!1,tier:f};xj().storePayload(c,a.payload);Ej(b,c,d==="gelDebuggingEvent")}}
function Ej(a,b,c=!1){a&&(kj=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;const d=W(),e=Fj(!1,b.tier),f=e.l;c&&(e.j=!0);c=0;b&&(c=xj().getSequenceCount(b));c>=1E3?Gj({writeThenSend:!0},!1,b.tier):c>=a?qj||(qj=Hj(()=>{Gj({writeThenSend:!0},!1,b.tier);qj=void 0},0)):d-f>=10&&(Ij(!1,b.tier),e.l=d)}
function Dj(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&xj().storePayload({isJspb:!1},a.payload);zj();var c=Aj(a),d=new Map;d.set(c,[a.payload]);var e=Bj(a.payload)||"";b&&(kj=new b);return new M((f,g)=>{kj&&kj.isReady()?Jj(d,kj,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Aj(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);uj[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Gj(a={},b=!1,c){new M((d,e)=>{const f=Fj(b,c),g=f.j;f.j=!1;Kj(f.i);Kj(f.h);f.h=0;kj&&kj.isReady()?c===void 0&&S("enable_web_tiered_gel")?Lj(d,e,a,b,300,g):Lj(d,e,a,b,c,g):(Ij(b,c),d())})}
function Lj(a,b,c={},d=!1,e=200,f=!1){var g=kj,h=new Map;const k=new Map,l={isJspb:d,cttAuthInfo:void 0,tier:e},p={isJspb:d,cttAuthInfo:void 0};if(d){for(const n of Object.keys(wj))b=S("enable_web_tiered_gel")?xj().smartExtractMatchingEntries({keys:[l,p],sizeLimit:1E3}):xj().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),b.length>0&&h.set(n,b),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete wj[n];Mj(h,g,a,c,f)}else{for(const n of Object.keys(wj))h=S("enable_web_tiered_gel")?
xj().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:e},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):xj().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),h.length>0&&k.set(n,h),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete wj[n];Jj(k,g,a,b,c,!1,f)}}
function Ij(a=!1,b=200){const c=()=>{Gj({writeThenSend:!0},a,b)},d=Fj(a,b);
var e=d===pj||d===oj?5E3:ij;S("web_gel_timeout_cap")&&!d.h&&(e=Hj(()=>{c()},e),d.h=e);
Kj(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&rj&&(e=hj);e=Hj(()=>{T("gel_min_batch_size")>0?xj().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=jj&&c():c()},e);
d.i=e}
function Jj(a,b,c,d,e={},f,g){const h=Math.round(W());let k=a.size;const l=Nj(g);for(const [p,n]of a){a=p;g=n;const q=Kd({context:Sh(b.config_||Rh())});if(!ha(g)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}q.events=g;(g=uj[a])&&Oj(q,a,g);delete uj[a];const m=a==="visitorOnlyApprovedKey";Pj(q,h,m);Qj(e);const u=H=>{S("start_client_gcf")&&qg.h(()=>r(function*(){yield Rj(H)}));
k--;k||c()};
let C=0;const y=()=>{C++;if(e.bypassNetworkless&&C===1)try{ri(b,l,q,Sj({writeThenSend:!0},m,u,y,f)),rj=!1}catch(H){xf(H),d()}k--;k||c()};
try{ri(b,l,q,Sj(e,m,u,y,f)),rj=!1}catch(H){xf(H),d()}}}
function Mj(a,b,c,d={},e){const f=Math.round(W()),g={value:a.size};var h=new Map([...a]);for(const [C]of h){var k=C,l=a.get(k);h=new Ye;var p=b.config_||Rh(),n=new Ue,q=new Me;K(q,1,p.ja);K(q,2,p.ia);F(q,16,lc(p.Ba));K(q,17,p.innertubeContextClientVersion);if(p.Y){var m=p.Y,u=new Ke;m.coldConfigData&&K(u,1,m.coldConfigData);m.appInstallData&&K(u,6,m.appInstallData);m.coldHashData&&K(u,3,m.coldHashData);m.hotHashData&&K(u,5,m.hotHashData);I(q,Ke,62,u)}if((m=t.devicePixelRatio)&&m!=1){if(m!=null&&typeof m!==
"number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);F(q,65,m)}m=Mf();m!==""&&K(q,54,m);m=Nf();if(m.length>0){u=new Qe;for(let y=0;y<m.length;y++){const H=new Ne;K(H,1,m[y].key);Pc(H,2,Oe,pc(m[y].value));Wc(u,15,Ne,H)}I(n,Qe,5,u)}Th(n);Uh(p,q);S("start_client_gcf")&&Vh(q);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(p=new Te,K(p,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&(m=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(u=Tc(n,Te,3)||new Te,p=n,m=K(u,18,m),I(p,Te,3,m));p=q;m=R("DEVICE","");for(const [y,H]of Object.entries(Ef(m)))m=y,u=H,m==="cbrand"?K(p,12,u):m==="cmodel"?K(p,13,u):m==="cbr"?K(p,87,u):m==="cbrver"?K(p,88,u):m==="cos"?K(p,18,u):m==="cosver"?K(p,19,u):m==="cplatform"&&F(p,42,lc(ig(u)));n.j(q);I(h,Ue,1,n);if(q=vj[k])a:{if(Yc(q,1))n=1;else if(q.getPlaylistId())n=2;else break a;I(h,Xe,4,q);q=Tc(h,Ue,1)||new Ue;p=Tc(q,Te,3)||new Te;m=new Se;K(m,2,k);F(m,1,lc(n));Wc(p,12,Se,m);I(q,Te,3,p)}delete vj[k];
k=k==="visitorOnlyApprovedKey";Tj()||F(h,2,f==null?f:oc(f));!k&&(n=R("EVENT_ID"))&&(q=Uj(),p=new We,K(p,1,n),F(p,2,q==null?q:oc(q)),I(h,We,5,p));Qj(d);if(S("jspb_serialize_with_worker")){li||((n=R("WORKER_SERIALIZATION_URL"))?((n=n.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?(ra===void 0&&(ra=sa()),q=ra,n=new ta(q?q.createScriptURL(n):n)):n=null,li=n):li=null);q=li||void 0;if(!ki&&q!==void 0){n=Worker;if(q instanceof ta)q=q.h;else throw Error("");ki=new n(q,void 0)}if((n=ki)&&d.writeThenSend){tj.set(sj,
{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=n;b=a.postMessage;c=Ac(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:l,key:sj});sj++;break}}if(l){n=[];for(q=0;q<l.length;q++)try{n.push(new Ve(l[q]))}catch(y){xf(new ef("Transport failed to deserialize "+String(l[q])))}l=n}else l=[];for(const y of l)Wc(h,3,Ve,y);l={startTime:W(),ticks:{},infos:{}};h=JSON.stringify(Ac(h));l.ticks.geljspc=W();S("log_jspb_serialize_latency")&&
Math.random()<.001&&di("meta_logging_csi_event",{timerName:"gel_jspb_serialize",Vb:l});Vj(h,b,c,d,e,k,g)}}
function Vj(a,b,c,d={},e,f,g={value:0}){e=Nj(e);d=Sj(d,f,h=>{S("start_client_gcf")&&qg.h(()=>r(function*(){yield Rj(h)}));
g.value--;g.value||c()},()=>{g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;ri(b,e,"",d);rj=!1}
function Qj(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function Sj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,ub:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Tj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Pj(a,b,c){Tj()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=Uj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Uj(){let a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);Q("BATCH_CLIENT_COUNTER",a);return a}
function Oj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function zj(){var a;(a=v("yt.logging.transport.enableScrapingForTest"))||(a=Lf("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(bj=[],w("yt.logging.transport.enableScrapingForTest",!0),w("yt.logging.transport.scrapedPayloadsForTesting",bj),w("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
w("yt.logging.transport.scrapeClientEvent",!0))}
function Tj(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Hj(a,b){return S("transport_use_scheduler")===!1?If(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?kg(()=>{Zi().currentState==="none"?a():Zi().install({none:{callback:a}})},b):kg(a,b)}
function Kj(a){S("transport_use_scheduler")?qg.R(a):window.clearTimeout(a)}
function Rj(a){return r(function*(){var b,c=a==null?void 0:(b=a.responseContext)==null?void 0:b.globalConfigGroup;b=gj(c,Ie);const d=c==null?void 0:c.hotHashData,e=gj(c,He);c=c==null?void 0:c.coldHashData;const f=Ei().resolve(new wi);f&&(d&&(b?yield Nh(f,d,b):yield Nh(f,d)),c&&(e?yield Oh(f,c,e):yield Oh(f,c)))})}
function Fj(a,b=200){return a?b===300?pj:nj:b===300?oj:mj}
function Bj(a){a=Object.keys(a);for(const b of a)if(mi[b])return b}
function Cj(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Nj(a=!1){return a&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const Wj=t.ytLoggingGelSequenceIdObj_||{};
function Xj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=v("_lact",window);a=a==null?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Wj[b]=b in Wj?Wj[b]+1:0,a.sequence={index:Wj[b],groupKey:b},d.endOfSequence&&delete Wj[d.sequenceGroup]);(d.sendIsolatedPayload?Dj:yj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Yj(a=!1){Gj(void 0,a)}
;let Zj=[];function Y(a,b,c={}){let d=si;R("ytLoggingEventsDefaultDisabled",!1)&&si===si&&(d=null);Xj(a,b,d,c)}
;var ak=new Set,bk=0,ck=0,dk=0,ek=[];const fk=[],gk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function hk(a){ik(a)}
function jk(a){ik(a,"WARNING")}
function ik(a,b="ERROR"){var c={};c.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");kk(a,c,b)}
function kk(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(S("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(bk>=5)){d=[];for(e of fk)try{e()&&d.push(e())}catch(u){}var e=
d;e=[...ek,...e];var f=Aa(a);d=f.message||"Unknown Error";const q=f.name||"UnknownError";var g=f.stack||a.i||"Not available";if(g.startsWith(`${q}: ${d}`)){var h=g.split("\n");h.shift();g=h.join("\n")}h=f.lineNumber||"Not available";f=f.fileName||"Not available";let m=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0;k<a.args.length&&!(m=bg(a.args[k],`params.${k}`,b,m),m>=500);k++);else if(a.hasOwnProperty("params")&&a.params){const u=a.params;if(typeof a.params==="object")for(k in u){if(!u[k])continue;
const C=`params.${k}`,y=dg(u[k]);b[C]=y;m+=C.length+y.length;if(m>500)break}else b.params=dg(u)}if(e.length)for(k=0;k<e.length&&!(m=bg(e[k],`params.context.${k}`,b,m),m>=500);k++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:q,lineNumber:h,fileName:f,stack:g,params:b,sampleWeight:1};k=Number(a.columnNumber);isNaN(k)||(b.lineNumber=`${b.lineNumber}:${k}`);if(a.level==="IGNORED")var l=0;else a:{a=Vf();for(l of a.F)if(b.message&&b.message.match(l.Ga)){l=
l.weight;break a}for(var p of a.D)if(p.callback(b)){l=p.weight;break a}l=1}b.sampleWeight=l;l=b;for(var n of Sf)if(n.T[l.name]){p=n.T[l.name];for(const u of p)if(p=l.message.match(u.u)){l.params["params.error.original"]=p[0];a=u.groups;b={};for(k=0;k<a.length;k++)b[a[k]]=p[k+1],l.params[`params.error.${a[k]}`]=p[k+1];l.message=n.aa(b);break}}l.params||(l.params={});n=Vf();l.params["params.errorServiceSignature"]=`msg=${n.F.length}&cb=${n.D.length}`;l.params["params.serviceWorker"]="true";t.document&&
t.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Nd(Od,"sample")).constructor!==Nd&&(l.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(l);l.sampleWeight===0||ak.has(l.message)||lk(l,c)}}}
function lk(a,b="ERROR"){if(b==="ERROR"){Zf.B("handleError",a);if(S("record_app_crashed_web")&&dk===0&&a.sampleWeight===1){dk++;var c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Y("appCrashed",c)}ck++}else b==="WARNING"&&Zf.B("handleWarning",a);c={};b:{for(e of gk){var d=Ra();if(d&&d.toLowerCase().indexOf(e.toLowerCase())>=0){var e=!0;break b}}e=!1}if(e)c=void 0;else{d={stackTrace:a.stack};
a.fileName&&(d.filename=a.fileName);e=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];e.length!==0&&(e.length!==1||isNaN(Number(e[0]))?e.length!==2||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(d.lineNumber=Number(e[0]),d.columnNumber=Number(e[1])):d.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};b==="ERROR"?e.level="ERROR_LEVEL_ERROR":b==="WARNING"&&(e.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
c.pageUrl=window.location.href;c.kvPairs=[];R("FEXP_EXPERIMENTS")&&(c.experimentIds=R("FEXP_EXPERIMENTS"));var f=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");const k=tf.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(var g of Object.keys(f))c.kvPairs.push({key:g,value:String(f[g])});if(g=a.params)for(var h of Object.keys(g))c.kvPairs.push({key:`client.${h}`,value:String(g[h])});h=R("SERVER_NAME");g=R("SERVER_VERSION");h&&g&&(c.kvPairs.push({key:"server.name",value:h}),
c.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:c,stackTrace:d,logMessage:e}}if(c&&(Y("clientError",c),b==="ERROR"||S("errors_flush_gel_always_killswitch")))a:{if(S("web_fp_via_jspb")){b=Zj;Zj=[];if(b)for(const k of b)Xj(k.N,k.payload,si,k.options);Yj(!0);if(!S("web_fp_via_jspb_and_json"))break a}Yj()}try{ak.add(a.message)}catch(k){}bk++}
function mk(a,...b){a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push(...b)}
;function nk(a){return r(function*(){var b=yield t.fetch(a.i);if(b.status!==200)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]==="yt.sw.adr"){b=new pf(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function ok(a=!1){const b=pk.instance;return r(function*(){if(a||!b.h)b.h=nk(b).then(b.j).catch(c=>{delete b.h;ik(c)});
return b.h})}
var pk=class{constructor(){this.i=qk("/sw.js_data")}j(a){const b=Tc(a,of,2);if(b){var c=Xc(b,5);c&&(t.__SAPISID=c);J(b,10)!=null?Q("EOM_VISITOR_DATA",Xc(b,10)):J(b,7)!=null&&Q("VISITOR_DATA",Xc(b,7));if(nc(Jc(b,4))!=null){c=String;let e;var d=(e=nc(Jc(b,4)))!=null?e:0;Q("SESSION_INDEX",c(d))}J(b,8)!=null&&Q("DELEGATED_SESSION_ID",Xc(b,8));J(b,12)!=null&&Q("USER_SESSION_ID",Xc(b,12));J(b,11)!=null&&Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",Xc(b,11))}return a}};function rk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string"&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},Number(b.expirationSeconds)*1E3))}
var sk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=((c=b.G.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];let e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];rk(this,a)}}};let tk=Date.now().toString();function uk(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}a=Array(16);for(b=0;b<16;b++){c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(Math.random()*256)}if(tk)for(b=1,c=0;c<tk.length;c++)a[b%16]^=a[(b-1)%16]/4^tk.charCodeAt(c),b++;return a}
;var vk;let wk=t.ytLoggingDocDocumentNonce_;if(!wk){const a=uk(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));wk=b.join("")}vk=wk;var xk={Sa:0,Pa:1,Ra:2,eb:3,Ua:4,qb:5,fb:6,mb:7,kb:8,lb:9,pb:10,jb:11,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH",10:"UNPLUGGED_BROWSE",11:"PICTURE_IN_PICTURE"};let yk=1;function zk(a){return new Ak({trackingParams:a})}
function Bk(a,b,c,d,e,f){const g=yk++;return new Ak({veType:a,veCounter:g,elementIndex:c,dataElement:b,youtubeData:d,jspbYoutubeData:e,loggingDirectives:f})}
var Ak=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new Pe;
if(this.h.trackingParams!==void 0)a.setTrackingParams(this.h.trackingParams);else{if(this.h.veType!==void 0){var b=this.h.veType;F(a,2,b==null?b:mc(b))}this.h.veCounter!==void 0&&(b=this.h.veCounter,F(a,6,b==null?b:mc(b)));this.h.elementIndex!==void 0&&(b=this.h.elementIndex,F(a,3,b==null?b:mc(b)));this.h.isCounterfactual&&F(a,5,!0)}this.h.dataElement!==void 0&&(b=this.h.dataElement.getAsJspb(),I(a,Pe,7,b));this.h.youtubeData!==void 0&&I(a,Je,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function Ck(a=0){return R("client-screen-nonce-store",{})[a]}
function Dk(a,b=0){let c=R("client-screen-nonce-store");c||(c={},Q("client-screen-nonce-store",c));c[b]=a}
function Ek(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Fk(a=0){return R(Ek(a))}
function Gk(a=0){return(a=Fk(a))?new Ak({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Hk(){let a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Ik(){return Object.values(R("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Z(a=0){a=Ck(a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function Jk(a){for(const b of Object.values(xk))if(Z(b)===a)return!0;return!1}
function Kk(a,b,c){const d=Hk();(c=Z(c))&&delete d[c];b&&(d[a]=b)}
function Lk(a){return Hk()[a]}
function Mk(a,b,c=0,d){if(a!==Ck(c)||b!==R(Ek(c)))if(Kk(a,d,c),Dk(a,c),Q(Ek(c),b),b=()=>{setTimeout(()=>{a&&Y("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vk,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;function Nk(){var a=R("INNERTUBE_CONTEXT");if(!a)return ik(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=Kd(a);S("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=Mf();c?b.experimentsToken=c:delete b.experimentsToken;sk.instance||(sk.instance=new sk);b=sk.instance.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);if(e=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function Ok(a){var b=a;if(a=R("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ea);b=d[5];var e=d[6];d=d[7];let f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;function Pk(a){const b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
R("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;var Qk=class{constructor(){this.h={}}get(a){if(Object.prototype.hasOwnProperty.call(this.h,a))return this.h[a]}set(a,b){this.h[a]=b}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new Qk}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=ua(b,void 0)}}return a}};var Rk=class{},Sk=class extends Rk{};const Tk={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends Sk{})};class Zh extends Xh{constructor(a){super(arguments);this.csn=a}}const gi=new Yh,Uk=[];let Wk=Vk,Xk=0;const Yk=new Map,Zk=new Map,$k=new Map;
function al(a,b,c,d,e,f,g,h){const k=Wk(),l=new Ak({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=bl({},k);e&&(f.cttAuthInfo=e);e={csn:k,pageVe:l.getAsJson()};S("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations);c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&jk(new ef("newScreen() parent element does not have a VE - rootVe",
b));d&&(e.cloneCsn=d);a?Xj("screenCreated",e,a,f):Y("screenCreated",e,f);di(gi,new Zh(k));Yk.clear();Zk.clear();$k.clear();return k}
function cl(a,b,c,d,e=!1){dl(a,b,c,[d],e)}
function dl(a,b,c,d,e=!1){const f=bl({cttAuthInfo:Lk(b)||void 0},b);for(const h of d){var g=h.getAsJson();(Jd(g)||!g.trackingParams&&!g.veType)&&jk(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){const k=el(h,b);if(g.veType&&!Zk.has(k)&&!$k.has(k)&&!e){if(!S("il_attach_cache_limit")||Yk.size<1E3){Yk.set(k,[a,b,c,h]);return}S("il_attach_cache_limit")&&Yk.size>1E3&&jk(new ef("IL Attach cache exceeded limit"))}g=el(c,b);Yk.has(g)?fl(c,b):$k.set(g,!0)}}d=d.filter(h=>{h.csn!==
b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:wa(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?gl("visualElementAttached",f,c):a?Xj("visualElementAttached",c,a,f):Y("visualElementAttached",c,f)}
function hl(a,b,c,d,e){il(a,b,c,e)}
function il(a,b,c,d){jl(c,b);const e=bl({cttAuthInfo:Lk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),eventType:1};d&&(c.clientData=d);b==="UNDEFINED_CSN"?gl("visualElementShown",e,c):a?Xj("visualElementShown",c,a,e):Y("visualElementShown",c,e)}
function kl(a,b,c,d=!1){const e=d?16:8;d=bl({cttAuthInfo:Lk(b)||void 0,endOfSequence:d},b);c={csn:b,ve:c.getAsJson(),eventType:e};b==="UNDEFINED_CSN"?gl("visualElementHidden",d,c):a?Xj("visualElementHidden",c,a,d):Y("visualElementHidden",c,d)}
function ll(a,b,c,d){var e=void 0;jl(c,b);e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f=bl({cttAuthInfo:Lk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);b==="UNDEFINED_CSN"?gl("visualElementGestured",f,c):a?Xj("visualElementGestured",c,a,f):Y("visualElementGestured",c,f)}
function Vk(){let a;a=uk();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
function gl(a,b,c){Uk.push({N:a,payload:c,Bb:void 0,options:b});Xk||(Xk=hi())}
function ii(a){if(Uk){for(const b of Uk)b.payload&&(b.payload.csn=a.csn,Y(b.N,b.payload,b.options));Uk.length=0}Xk=0}
function el(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function jl(a,b){if(S("no_client_ve_attach_unless_shown")){var c=el(a,b);Zk.set(c,!0);fl(a,b)}}
function fl(a,b){a=el(a,b);Yk.has(a)&&(b=Yk.get(a)||[],cl(b[0],b[1],b[2],b[3],!0),Yk.delete(a))}
function bl(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;Object.assign({auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",embed_no_video:"LATENCY_ACTION_EMBED_NO_VIDEO",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",
mini_app:"LATENCY_ACTION_MINI_APP_PLAY",notification_settings:"LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",
profile_switcher:"LATENCY_ACTION_LOGIN",projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_KIDS_PRIVACY_POLICY",review:"LATENCY_ACTION_REVIEW",search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",
secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",seek:"LATENCY_ACTION_PLAYER_SEEK",settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",tenx:"LATENCY_ACTION_TENX",video_preview:"LATENCY_ACTION_VIDEO_PREVIEW",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH",
"watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE",attestation_challenge_fetch:"LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH"},{"analytics.explore":"LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",
"artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE","asset.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS","asset.composition":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION","asset.composition_ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP","asset.composition_policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY","asset.embeds":"LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",
"asset.history":"LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY","asset.issues":"LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES","asset.licenses":"LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES","asset.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA","asset.ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP","asset.policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY","asset.references":"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES","asset.shares":"LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES","asset.sound_recordings":"LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",
"asset_group.assets":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS","asset_group.campaigns":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS","asset_group.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS","asset_group.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA","song.analytics":"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",creator_channel_dashboard:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
"channel.content":"LATENCY_ACTION_CREATOR_POST_LIST","channel.content.promotions":"LATENCY_ACTION_CREATOR_PROMOTION_LIST","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.editing":"LATENCY_ACTION_CREATOR_CHANNEL_EDITING","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.music":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC","channel.music_storefront":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT","channel.playlists":"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
"channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS","channel.live_streaming":"LATENCY_ACTION_CREATOR_LIVE_STREAMING","dialog.copyright_strikes":"LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES","dialog.video_copyright":"LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT","dialog.uploads":"LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",owner:"LATENCY_ACTION_CREATOR_CMS_DASHBOARD","owner.allowlist":"LATENCY_ACTION_CREATOR_CMS_ALLOWLIST","owner.analytics":"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",
"owner.art_tracks":"LATENCY_ACTION_CREATOR_CMS_ART_TRACKS","owner.assets":"LATENCY_ACTION_CREATOR_CMS_ASSETS","owner.asset_groups":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS","owner.bulk":"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY","owner.campaigns":"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS","owner.channel_invites":"LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES","owner.channels":"LATENCY_ACTION_CREATOR_CMS_CHANNELS","owner.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS","owner.claims":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
"owner.claims.manual":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.delivery":"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY","owner.delivery_templates":"LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES","owner.issues":"LATENCY_ACTION_CREATOR_CMS_ISSUES","owner.licenses":"LATENCY_ACTION_CREATOR_CMS_LICENSES","owner.pitch_music":"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC","owner.policies":"LATENCY_ACTION_CREATOR_CMS_POLICIES","owner.releases":"LATENCY_ACTION_CREATOR_CMS_RELEASES","owner.reports":"LATENCY_ACTION_CREATOR_CMS_REPORTS",
"owner.videos":"LATENCY_ACTION_CREATOR_CMS_VIDEOS","playlist.videos":"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST","post.comments":"LATENCY_ACTION_CREATOR_POST_COMMENTS","post.edit":"LATENCY_ACTION_CREATOR_POST_EDIT","promotion.edit":"LATENCY_ACTION_CREATOR_PROMOTION_EDIT","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.claims":"LATENCY_ACTION_CREATOR_VIDEO_CLAIMS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.copyright":"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",
"video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.editor":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR","video.editor_async":"LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC","video.live_settings":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS","video.live_streaming":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION","video.policy":"LATENCY_ACTION_CREATOR_VIDEO_POLICY","video.rights_management":"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"});w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const ml=window;class nl{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var ol=ml.performance||ml.mozPerformance||ml.msPerformance||ml.webkitPerformance||new nl;la(ol.clearResourceTimings||ol.webkitClearResourceTimings||ol.mozClearResourceTimings||ol.msClearResourceTimings||ol.oClearResourceTimings||Id,ol);const pl=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ql(a){var b={wb:{}},c=eg();if(zi.instance!==void 0){const d=zi.instance;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new ef("InnerTubeTransportService is already initialized",a);
}else zi.instance=new zi(b,a,c)}
function rl(a,b){return r(function*(){var c;const d=a==null?void 0:(c=a.ea)==null?void 0:c.sessionIndex;c=yield me(gg(0,{sessionIndex:d}));return Promise.resolve(Object.assign({},Pk(b),c))})}
function sl(a,b,c,d=()=>{}){return r(function*(){var e;
if(b==null?0:(e=b.G)==null?0:e.context){e=b.G.context;for(var f of[])yield f.Ib(e)}var g;if((g=a.i)==null?0:g.Rb(b.input,b.G))return yield a.i.Db(b.input,b.G);var h;if((g=(h=b.config)==null?void 0:h.Lb)&&a.h.has(g))var k=a.h.get(g);else{h=JSON.stringify(b.G);let q;f=(q=(k=b.O)==null?void 0:k.headers)!=null?q:{};b.O=Object.assign({},b.O,{headers:Object.assign({},f,c)});k=Object.assign({},b.O);b.O.method==="POST"&&(k=Object.assign({},k,{body:h}));k=a.l.fetch(b.input,k,b.config);g&&a.h.set(g,k)}k=yield k;
var l;let p;if(k&&"error"in k&&((l=k)==null?0:(p=l.error)==null?0:p.details)){l=k.error.details;for(const q of l)(l=q["@type"])&&pl.indexOf(l)>-1&&(delete q["@type"],k=q)}g&&a.h.has(g)&&a.h.delete(g);let n;!k&&((n=a.i)==null?0:n.vb(b.input,b.G))&&(k=yield a.i.Cb(b.input,b.G));d();return k||void 0})}
function tl(a,b,c){var d={ea:{identity:hg}};let e=()=>{};
b.context||(b.context=Nk());return new M(f=>r(function*(){var g=Ok(c);g=Hf(g)?"same-origin":"cors";if(a.j.La){var h,k=d==null?void 0:(h=d.ea)==null?void 0:h.sessionIndex;h=gg(0,{sessionIndex:k});g=Object.assign({},Pk(g),h)}else g=yield rl(d,g);h=Ok(c);k={};S("json_condensed_response")&&(k.prettyPrint="false");h=Gf(h,k||{},!1);k={method:"POST",mode:Hf(h)?"same-origin":"cors",credentials:Hf(h)?"same-origin":"include"};var l={};const p={};for(const n of Object.keys(l))l[n]&&(p[n]=l[n]);Object.keys(p).length>
0&&(k.headers=p);f(sl(a,{input:h,O:k,G:b,config:d},g,e))}))}
var zi=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.da||(a.da={});a.da=Object.assign({},Tk,a.da)}};var yi=new vi;let ul;function vl(){if(!ul){const a=Ei();ql({fetch:(b,c)=>me(fetch(new Request(b,c)))});
xi(a);ul=a.resolve(yi)}return ul}
;function wl(a){return r(function*(){yield xl();jk(a)})}
function yl(a){return r(function*(){yield xl();ik(a)})}
function zl(a){r(function*(){var b=yield wh();b?yield qi(a,b):(yield ok(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{N:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{N:"clientError",payload:a.clientError,options:b}:void 0,b&&Y(b.N,b.payload))})}
function xl(){return r(function*(){try{yield ok()}catch(a){}})}
;var Al=Symbol("trackingData"),Bl=new WeakMap;function Cl(){Dl.instance||(Dl.instance=new Dl);return Dl.instance}
function El(a){const b=Fl(a);let c,d;if(S("il_use_view_model_logging_context")&&(b==null?0:(c=b.context)==null?0:(d=c.loggingContext)==null?0:d.loggingDirectives))return b.context.loggingContext.loggingDirectives.trackingParams||"";let e,f;if(b==null?0:(e=b.rendererContext)==null?0:(f=e.loggingContext)==null?0:f.loggingDirectives)return b.rendererContext.loggingContext.loggingDirectives.trackingParams||"";if(b==null?0:b.loggingDirectives)return b.loggingDirectives.trackingParams||"";let g;return((g=
a.veContainer)==null?0:g.trackingParams)?a.veContainer.trackingParams:(b==null?void 0:b.trackingParams)||""}
function Gl(a,b,c){const d=Z(c);return a.csn===null||d===a.csn||c?d:(a=new ef("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),jk(a),null)}
function Hl(a){let b;return!((b=Fl(a))==null||!b.loggingDirectives)}
function Il(a){a=Fl(a);return Math.floor(Number(a&&a.loggingDirectives&&a.loggingDirectives.visibility&&a.loggingDirectives.visibility.types||""))||1}
function Fl(a){let b,c=a.data||((b=a.props)==null?void 0:b.data);if(a.isWebComponentWrapper){let d;c=(d=Bl.get(a))==null?void 0:d[Al]}return c}
var Dl=class{constructor(){this.l=new Set;this.i=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}m(){this.clear();this.csn=Z()}clear(){this.l.clear();this.i.clear();this.h.clear();this.csn=null}v(a,b,c){var d=El(a),e=a.visualElement?a.visualElement:d;b=this.l.has(e);var f=this.h.get(e);this.l.add(e);this.h.set(e,!0);a.impressionLog&&!b&&a.impressionLog();if(d||a.visualElement)if(c=Gl(this,a,c)){var g=Hl(a);if(Il(a)||g)e=a.visualElement?a.visualElement:zk(d),d=a.interactionLoggingClientData,
g||b?Il(a)&4?f||(a=this.client,jl(e,c),b=bl({cttAuthInfo:Lk(c)||void 0},c),f={csn:c,ve:e.getAsJson(),eventType:4},d&&(f.clientData=d),c==="UNDEFINED_CSN"?gl("visualElementShown",b,f):a?Xj("visualElementShown",f,a,b):Y("visualElementShown",f,b)):Il(a)&1&&!b&&il(this.client,c,e,d):il(this.client,c,e,d)}}s(a,b,c){var d=El(a);const e=a.visualElement?a.visualElement:d;b=this.i.has(e);const f=this.h.get(e);this.i.add(e);this.h.set(e,!1);if(f===!1)return!0;if(!d&&!a.visualElement)return!1;c=Gl(this,a,c);
if(!c||!Il(a)&&Hl(a))return!1;d=a.visualElement?a.visualElement:zk(d);Il(a)&8?kl(this.client,c,d):Il(a)&2&&!b&&(a=this.client,b=bl({cttAuthInfo:Lk(c)||void 0},c),d={csn:c,ve:d.getAsJson(),eventType:2},c==="UNDEFINED_CSN"?gl("visualElementHidden",b,d):a?Xj("visualElementHidden",d,a,b):Y("visualElementHidden",d,b));return!0}};function Jl(){Kl.instance||(Kl.instance=new Kl)}
function Ll(a){Jl();wf(Cl().v).bind(Cl())(a,void 0,8)}
function Ml(a){Jl();wf(Cl().s).bind(Cl())(a,void 0,8)}
var Kl=class{j(a){wf(Cl().j).bind(Cl())(a)}clear(){wf(Cl().clear).bind(Cl())()}};function Nl(){Ol.instance||(Ol.instance=new Ol);return Ol.instance}
function Pl(a,b,c={}){a.i.add(c.layer||0);a.m=()=>{Ql(a,b,c);const d=Gk(c.layer);if(d){for(const e of a.B)Rl(a,e[0],e[1]||d,c.layer);for(const e of a.C)Sl(a,e[0],e[1])}};
Z(c.layer)||a.m();if(c.ga)for(const d of c.ga)Tl(a,d,c.layer);else ik(Error("Delayed screen needs a data promise."))}
function Ql(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=c.Ha!==void 0?c.Ha:c.layer;const e=Z(d);d=Gk(d);let f;d&&(c.parentCsn!==void 0?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&e!=="UNDEFINED_CSN"&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=R("EVENT_ID");e==="UNDEFINED_CSN"&&h&&(g={servletData:{serializedServletEventId:h}});S("combine_ve_grafts")&&e&&Ul(a,e);S("no_client_ve_attach_unless_shown")&&d&&e&&fl(d,e);let k;try{k=al(a.client,b,f,c.fa,c.cttAuthInfo,g,c.yb,c.loggingExpectations)}catch(n){mk(n,
{Ob:b,rootVe:d,Hb:void 0,xb:e,Gb:f,fa:c.fa});ik(n);return}Mk(k,b,c.layer,c.cttAuthInfo);e&&e!=="UNDEFINED_CSN"&&d&&!Jk(e)&&kl(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Jl();wf(Cl().m).bind(Cl())();const l=Gk(c.layer);e&&e!=="UNDEFINED_CSN"&&l&&(S("web_mark_root_visible")||S("music_web_mark_root_visible"))&&wf(hl)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;let p;(p=a.W.get(c.layer))==null||p.forEach((n,q)=>{n?Rl(a,q,n,c.layer):
l&&Rl(a,q,l,c.layer)});
Vl(a)}
function Wl(a){var b=28631,c={layer:8};wf(()=>{[28631].includes(b)||(jk(new ef("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.B=[];a.C=[];c.ga?Pl(a,b,c):Ql(a,b,c)})()}
function Tl(a,b,c=0){wf(()=>{b.then(d=>{a.i.has(c)&&a.m&&a.m();const e=Z(c),f=Gk(c);if(e&&f){var g;(d==null?0:(g=d.response)==null?0:g.trackingParams)&&cl(a.client,e,f,zk(d.response.trackingParams));var h;(d==null?0:(h=d.playerResponse)==null?0:h.trackingParams)&&cl(a.client,e,f,zk(d.playerResponse.trackingParams))}})})()}
function Rl(a,b,c,d=0){return wf(()=>{if(a.i.has(d))return a.B.push([b,c]),!0;const e=Z(d),f=c||Gk(d);if(e&&f){if(S("combine_ve_grafts")){const g=a.l.get(f.toString());g?g.push(b):(a.v.set(f.toString(),f),a.l.set(f.toString(),[b]));a.K||(a.K=kg(()=>{Ul(a,e)},1200))}else cl(a.client,e,f,b);
return!0}return!1})()}
function Xl(a,b){return wf(()=>{const c=zk(b);Rl(a,c,void 0,8);return c})()}
function Ul(a,b){if(b===void 0){const c=Ik();for(let d=0;d<c.length;d++)c[d]!==void 0&&Ul(a,c[d])}else a.l.forEach((c,d)=>{(d=a.v.get(d))&&dl(a.client,b,d,c)}),a.l.clear(),a.v.clear(),a.K=void 0}
function Yl(a,b,c,d=0){if(!b)return!1;d=Z(d);if(!d)return!1;ll(a.client,d,zk(b),c);return!0}
function Sl(a,b,c,d=0){const e=Z(d);b=b||Gk(d);e&&b&&(a=a.client,d=bl({cttAuthInfo:Lk(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?gl("visualElementStateChanged",d,c):a?Xj("visualElementStateChanged",c,a,d):Y("visualElementStateChanged",c,d))}
function Vl(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){ik(d)}}a.s.length=0;for(b=0;b<a.H.length;b++){c=a.H[b];try{c()}catch(d){ik(d)}}}
var Ol=class{constructor(){this.B=[];this.C=[];this.h=[];this.s=[];this.H=[];this.l=new Map;this.v=new Map;this.i=new Set;this.W=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return Yl(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(zk(a),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.i.has(c)?this.C.push([a,b]):Sl(this,a,b,c)}};const Zl={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},$l=RegExp("^(?:[a-z]+:)?//","i");function am(a){var b=a.data;a=b.type;b=b.data;a==="notifications_register"?(P("IDToken",b),bm()):a==="notifications_check_registration"&&cm(b)}
function dm(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function em(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function fm(a){return r(function*(){const b=em(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=nf($e);return gm().then(e=>tl(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?hm(a,g.endpointUrl):Promise.resolve()).catch(g=>{yl(g);
Promise.reject(g)})}))})}
function im(a,b){var c=Z(8);if(c==null||!b)return a;a=$l.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function hm(a,b){a.deviceId&&P("DeviceId",a.deviceId);a.timestampSec&&P("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Nl();Wl(d);var e;const f=(e=c.postedEndpoint)==null?void 0:e.clickTrackingParams;e=c==null?void 0:c.loggingDirectives;const g=c.title,h={body:c.body,icon:c.iconUrl,data:{nav:im(b,e==null?void 0:e.trackingParams),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0,loggingDirectives:e},
tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};return self.registration.showNotification(g,h).then(()=>{var k;((k=h.data)==null?0:k.postedEndpoint)&&jm(h.data.postedEndpoint);let l;if((l=h.data)==null?0:l.loggingDirectives)k=h.data.loggingDirectives,S("enable_client_ve_spec")&&k.clientVeSpec?(k=Bk(k.clientVeSpec.uiType,void 0,k.clientVeSpec.elementIndex,k.clientVeSpec.clientYoutubeData,void 0,k),k=Rl(d,k,void 0,8)?k:null):k=k.trackingParams?Xl(d,k.trackingParams):null,Ll({screenLayer:8,
visualElement:k});km(a.displayCap)}).catch(()=>{})}
function jm(a){if(!gj(a,Ze))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:gj(a,Ze).serializedInteractionsRequest},c=nf(af);return gm().then(d=>tl(d,b,c)).then(d=>d)}
function km(a){a!==-1&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e,f;if((e=b[d].data)==null?0:(f=e.loggingDirectives)==null?0:f.trackingParams){var c=zk(b[d].data.loggingDirectives.trackingParams);const g={screenLayer:8,visualElement:c},h=Bk(82046),k=Nl();Rl(k,h,c,8);Ll({screenLayer:8,visualElement:h});(c=Z(8))&&ll(k.client,c,h);Ml(g)}}})}
function cm(a){const b=[lm(a),jf("RegistrationTimestamp").then(mm),nm(),om(),pm()];Promise.all(b).catch(()=>{P("IDToken",a);bm();return Promise.resolve()})}
function mm(a){return Date.now()-(a||0)<=9E7?Promise.resolve():Promise.reject()}
function lm(a){return jf("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function nm(){return jf("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function om(){return jf("Endpoint").then(a=>qm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function pm(){return jf("application_server_key").then(a=>rm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function sm(){var a=Notification.permission;if(Zl[a])return Zl[a]}
function bm(){P("RegistrationTimestamp",0);Promise.all([qm(),tm(),um(),rm()]).then(([a,b,c,d])=>{b=b?cf(b):null;c=c?cf(c):null;d=d?Za(new Uint8Array(d),4):null;vm(a,b,c,d)}).catch(()=>{vm()})}
function vm(a=null,b=null,c=null,d=null){hf().then(e=>{e&&(P("Endpoint",a),P("P256dhKey",b),P("AuthKey",c),P("application_server_key",d),P("Permission",Notification.permission),Promise.all([jf("DeviceId"),jf("NotificationsDisabled")]).then(([f,g])=>{if(f!=null)var h=f;else{f=[];var k;h=h||Fe.length;for(k=0;k<256;k++)f[k]=Fe[0|Math.random()*h];h=f.join("")}wm(h,a!=null?a:void 0,b!=null?b:void 0,c!=null?c:void 0,d!=null?d:void 0,g!=null?g:void 0)}))})}
function wm(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:sm()}}},h=nf(bf);return gm().then(k=>tl(k,g,h).then(()=>{P("DeviceId",a);P("RegistrationTimestamp",Date.now());P("TimestampLowerBound",Date.now())},l=>{wl(l)}))})}
function qm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function tm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function um(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function rm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function gm(){return r(function*(){try{return yield ok(!0),vl()}catch(a){return yield wl(a),Promise.reject(a)}})}
;let xm=self.location.origin+"/";function qk(a){let b=typeof ServiceWorkerGlobalScope!=="undefined"&&self instanceof ServiceWorkerGlobalScope?ye.registration.scope:xm;b.endsWith("/")&&(b=b.slice(0,-1));return a==="/"?b:b+a}
;let ym=void 0;function zm(a){return r(function*(){ym||(ym=yield a.open("yt-appshell-assets"));return ym})}
function Am(a,b){return r(function*(){const c=yield zm(a),d=b.map(e=>Bm(c,e));
return Promise.all(d)})}
function Cm(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Dm(a,b){return r(function*(){const c=yield zm(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Em(a,b,c){return r(function*(){yield(yield zm(a)).put(b,c)})}
function Fm(a,b){r(function*(){yield(yield zm(a)).delete(b)})}
function Bm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Gm=Fh("yt-serviceworker-metadata",{M:{auth:{L:1},["resource-manifest-assets"]:{L:2}},shared:!0,upgrade(a,b){b(1)&&Ug(a,"resource-manifest-assets");b(2)&&Ug(a,"auth")},version:2});let Hm=null;function Im(a){return mh(Gm(),a)}
function Jm(){return r(function*(){const a=yield wh();if(a)return Km.instance||(Km.instance=new Km(a)),Km.instance})}
function Lm(a,b){return r(function*(){yield X(yield Im(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return V(d.h.put(b,e)).then(()=>{Hm=e;let f=!0;return Zg(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,hh(g)):d.delete(g.getKey()).then(()=>bh(g)))})})})}
function Mm(a,b){return r(function*(){let c=!1,d=0;yield X(yield Im(a.token),["resource-manifest-assets"],"readonly",e=>Zg(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,bh(f)}));
return c?d:-1})}
function Nm(a){return r(function*(){Hm||(yield X(yield Im(a.token),["resource-manifest-assets"],"readonly",b=>Zg(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Hm=c.getKey()})));
return Hm})}
var Km=class{constructor(a){this.token=a}};function Om(){return r(function*(){const a=yield wh();if(a)return Pm.instance||(Pm.instance=new Pm(a)),Pm.instance})}
function Qm(a,b){return r(function*(){yield Wg(yield Im(a.token),"auth",b,"shell_identifier_key")})}
function Rm(a){return r(function*(){return(yield(yield Im(a.token)).get("auth","shell_identifier_key"))||""})}
function Sm(a){return r(function*(){yield(yield Im(a.token)).clear("auth")})}
var Pm=class{constructor(a){this.token=a}};function Tm(){r(function*(){const a=yield Om();a&&(yield Sm(a))})}
;var Um=class extends L{constructor(a){super(a)}hasUrl(){return J(this,1)!=null}};function Vm(a){B(a);const b=a.o[z]|0;return Uc(a,b,Um,1,void 0===Jb?2:4,!1,!(2&b))}
var Wm=function(a,b){return(c,d)=>{c=id(c,void 0,void 0,d);try{const g=new a;B(g);var e=g.o;Dd(b)(e,c);var f=g}finally{md(c)}return f}}(class extends L{constructor(a){super(a)}},[0,
Hd,[0,Gd]]);function Xm(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Ym(b)):Promise.reject(Error("No resource manifest header"))})}
function Ym(a){return Vm(Wm(decodeURIComponent(a))).reduce((b,c)=>{(c=Xc(c,1))&&b.push(c);return b},[])}
;function Zm(a){return r(function*(){const b=yield ok();if(b&&J(b,3)!=null){var c=yield Om();c&&(c=yield Rm(c),J(b,3)!==c&&(Fm(a.caches,a.I),Tm()))}})}
function $m(a){return r(function*(){let b,c;try{c=yield an(a.h),b=yield Xm(c),yield Am(a.caches,b)}catch(d){return Promise.reject(d)}try{yield bn(),yield Em(a.caches,a.I,c)}catch(d){return Promise.reject(d)}if(b)try{yield cn(a,b,a.I)}catch(d){}return Promise.resolve()})}
function an(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function bn(){return r(function*(){var a=yield ok();let b;a&&J(a,3)!=null&&(b=Xc(a,3));return b?(a=yield Om())?Promise.resolve(Qm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function cn(a,b,c){return r(function*(){const d=yield Jm();if(d)try{yield Lm(d,b)}catch(e){yield wl(e)}b.push(c);try{yield Dm(a.caches,b)}catch(e){yield wl(e)}return Promise.resolve()})}
function dn(a,b){return r(function*(){return Cm(a.caches,b)})}
function en(a){return r(function*(){return Cm(a.caches,a.I)})}
var fn=class{constructor(){var a=self.caches;let b;b=qk("/app_shell");S("service_worker_forward_exp_params")&&(b+=self.location.search);var c=qk("/app_shell_home");this.caches=a;this.h=b;this.I=c}initialize(){const a=this;return r(function*(){yield Zm(a);return $m(a)})}};var gn=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function hn(a,b){return r(function*(){const c=b.request,d=yield dn(a.h,c.url);if(d)return a.i&&zl({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:W()}),d;jn(a,c);return kn(b)})}
function ln(a,b){return r(function*(){const c=yield mn(b);if(c.response&&(c.response.ok||c.response.type==="opaqueredirect"||c.response.status===429||c.response.status===303||c.response.status>=300&&c.response.status<400))return c.response;const d=yield en(a.h);if(d)return nn(a),on(d,b);pn(a);return c.response?c.response:Promise.reject(c.error)})}
function qn(a,b){b=new URL(b);if(!a.config.qa.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.sa){if(c.key==="*")return!0;a=b.get(c.key);if(c.value===void 0||a===c.value)if(b.delete(c.key),!b.toString())return!0}return!1}
function rn(a,b){return r(function*(){const c=yield en(a.h);if(!c)return pn(a),kn(b);nn(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(W()-d);break a}d=-1}if(!(d>-1&&d/864E5>=7))return on(c,b);d=yield mn(b);return d.response&&d.response.ok?d.response:on(c,b)})}
function kn(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!sn(b)?b:t.fetch(a.request))}
function jn(a,b){if(a.i){var c={assetPath:b.url,cacheHit:!1};Jm().then(d=>{if(d){var e=Nm(d).then(f=>{f&&(c.currentAppBundleTimestampSec=String(Math.floor(f/1E3)))});
d=Mm(d,b.url).then(f=>{c.appBundleVersionDiffCount=f});
Promise.all([e,d]).catch(f=>{wl(f)}).finally(()=>{zl({appShellAssetLoadReport:c,
timestamp:W()})})}else zl({appShellAssetLoadReport:c,
timestamp:W()})})}}
function nn(a){a.i&&zl({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!0},timestamp:W()})}
function pn(a){a.i&&zl({appShellAssetLoadReport:{assetPath:a.h.I,cacheHit:!1},timestamp:W()})}
function on(a,b){if(!S("sw_nav_preload_pbj"))return a;const c=new gn,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!sn(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function mn(a){return r(function*(){try{return{response:yield kn(a)}}catch(b){return{error:b}}})}
function sn(a){return a.headers.get("x-navigation-preload-response-type")==="pbj"}
var Bn=class{constructor(){var a=tn;var b={xa:un,Ia:vn([wn,/\/signin/,/\/logout/]),qa:["/","/feed/downloads"],sa:xn([{key:"feature",value:"ytca"}]),ra:yn(S("kevlar_sw_app_wide_fallback")?zn:An)};this.h=a;this.config=b;a=T("app_shell_asset_log_fraction");this.i=!0;a&&(this.i=Math.random()<a)}};const Cn=/^\/$/,An=[Cn,/^\/feed\/downloads$/],zn=[Cn,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function yn(a){return new RegExp(a.map(b=>b.source).join("|"))}
const Dn=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function vn(a){a=yn(a);return new RegExp(`${Dn.source}(${a.source})`)}
const En=yn([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/js\//,/\/ytmainappweb\/_\/ss\//]),un=new RegExp(`${Dn.source}(${En.source})`),wn=/purge_shell=1/;function xn(a=[]){const b=[];for(const c of Kf)b.push({key:c});for(const c of a)b.push(c);return b}
vn([wn]);xn();var Gn=class{constructor(){var a=tn,b=Fn,c=self;if(t.URLPattern){var d=[];S("service_worker_static_routing_exclude_embed")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/embed*"})},source:"network"});S("service_worker_static_routing_exclude_innertube")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/youtubei/v1/*"})},source:"network"})}else d=[];this.h=c;this.i=a;this.s=b;this.C=df;this.j=d}init(){this.h.oninstall=this.v.bind(this);this.h.onactivate=this.l.bind(this);this.h.onfetch=
this.m.bind(this);this.h.onmessage=this.B.bind(this)}v(a){this.h.skipWaiting();if(S("service_worker_static_routing_registration")&&this.j.length>0&&a.addRoutes)try{a.addRoutes(this.j)}catch(c){}const b=this.i.initialize().catch(c=>{wl(c);return Promise.resolve()});
a.waitUntil(b)}l(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),S("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}m(a){const b=this;return r(function*(){var c=b.s,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ia.test(e.url))pk.instance&&(delete pk.instance.h,t.__SAPISID=void 0,Q("VISITOR_DATA",void 0),Q("SESSION_INDEX",void 0),Q("DELEGATED_SESSION_ID",
void 0),Q("USER_SESSION_ID",void 0),Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",void 0)),d=a.respondWith,c=c.h,Fm(c.caches,c.I),Tm(),c=kn(a),d.call(a,c);else if(c.config.xa.test(e.url))a.respondWith(hn(c,a));else if(e.mode==="navigate"){const f=new URL(e.url);c.config.ra.test(f.pathname)?a.respondWith(ln(c,a)):qn(c,e.url)?a.respondWith(rn(c,a)):d&&a.respondWith(kn(a))}})}B(a){const b=a.data;
this.C.includes(b.type)?am(a):b.type==="refresh_shell"&&$m(this.i).catch(c=>{wl(c)})}};function Hn(){let a=v("ytglobal.storage_");a||(a=new In,w("ytglobal.storage_",a));return a}
var In=class{estimate(){return r(function*(){const a=navigator;let b;if((b=a.storage)==null?0:b.estimate)return a.storage.estimate();let c;if((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)return Jn()})}};
function Jn(){const a=navigator;return new Promise((b,c)=>{let d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",In);function Kn(a,b){Hn().estimate().then(c=>{c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Ln(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Ln(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class Mn{constructor(){var a=Nn;this.handleError=On;this.h=a;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}S(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Kn(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},
b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function Ln(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;Yf(Vf(),{F:[{Ga:/Failed to fetch/,weight:500}],D:[]});({handleError:On=hk,S:Nn=Y}={handleError:yl,S:function(a,b){return r(function*(){yield xl();Y(a,b)})}});
var Nn,On;for(sg=new Mn;rg.length>0;){const a=rg.shift();switch(a.type){case "ERROR":sg.handleError(a.payload);break;case "EVENT":sg.S(a.eventType,a.payload)}}pk.instance=new pk;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(jm(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data,c;if(b==null?0:(c=b.loggingDirectives)==null?0:c.trackingParams){a=zk(b.loggingDirectives.trackingParams);c={screenLayer:8,visualElement:a};if(b.isDismissed){b=Bk(74726);const d=Nl();Rl(d,b,a,8);Ll({screenLayer:8,visualElement:b});(a=Z(8))&&ll(d.client,a,b)}Ml(c)}};
self.onpush=function(a){a.waitUntil(jf("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return fm(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(dm())};
self.onpushsubscriptionchange=function(){bm()};
const tn=new fn,Fn=new Bn;(new Gn).init();
