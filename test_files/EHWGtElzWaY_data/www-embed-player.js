(function(){var g,aa=aa||{},l=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||l;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){a=a.split(".");b=b||l;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function t(){}
function u(){throw Error("unimplemented abstract method");}
function ba(a){a.getInstance=function(){return a.Y?a.Y:a.Y=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function v(a){return"array"==ca(a)}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function w(a){return"string"==typeof a}
function ea(a){return"number"==typeof a}
function fa(a){return"function"==ca(a)}
function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ha(a){return a[ia]||(a[ia]=++ja)}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return x.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.bf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function na(a){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(na,Error);na.prototype.name="CustomError";var oa;function pa(a){return/^[\s\xa0]*$/.test(a)}
var qa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ra(a){return decodeURIComponent(a.replace(/\+/g," "))}
var sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,ya=/[\x00&<>"']/;function za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Aa,function(a,e){var d=b[a];if(d)return d;"#"==e.charAt(0)&&(e=Number("0"+e.substr(1)),isNaN(e)||(d=String.fromCharCode(e)));d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ba(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:return"#"!=c.charAt(0)||(c=Number("0"+c.substr(1)),isNaN(c))?a:String.fromCharCode(c)}})}
var Aa=/&([^;\s<&]+);?/g,Ca={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Da={"'":"\\'"};
function Ea(a,b){var c=0;a=qa(String(a)).split(".");b=qa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=Fa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||Fa(0==f[2].length,0==h[2].length)||Fa(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c}
function Fa(a,b){return a<b?-1:a>b?1:0}
function Ga(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(w(a))return w(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=w(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];
b.call(c,m,k,a)&&(e[f++]=m)}return e},Ka=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=w(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Ma=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Na(a,b,c){b=Oa(a,b,c);return 0>b?null:w(a)?a.charAt(b):a[b]}
function Oa(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function C(a,b){return 0<=Ha(a,b)}
function Pa(a,b){C(a,b)||a.push(b)}
function Qa(a,b){b=Ha(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Ra(a,b){b=Oa(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function Sa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a,b){return a>b?1:a<b?-1:0}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function $a(a){var b=0,c;for(c in a)b++;return b}
function ab(a,b){return bb(a,b)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function bb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){var b=ca(a);if("object"==b||"array"==b){if(fa(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=kb(a[c]);return b}return a}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;a:{var ob=l.navigator;if(ob){var rb=ob.userAgent;if(rb){nb=rb;break a}}nb=""}function D(a){return-1!=nb.indexOf(a)}
;function sb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
;function tb(){this.b="";this.f=ub}
tb.prototype.Rb=!0;tb.prototype.Mb=function(){return this.b};
function vb(a){if(a instanceof tb&&a.constructor===tb&&a.f===ub)return a.b;ca(a);return"type_error:SafeUrl"}
var wb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function xb(a){if(a instanceof tb)return a;a=a.Rb?a.Mb():String(a);wb.test(a)||(a="about:invalid#zClosurez");return yb(a)}
var ub={};function yb(a){var b=new tb;b.b=a;return b}
yb("about:blank");function zb(){this.b="";this.f=Ab}
zb.prototype.Rb=!0;zb.prototype.Mb=function(){return this.b};
var Ab={};function Bb(){this.b="";this.f=Cb}
Bb.prototype.Rb=!0;Bb.prototype.Mb=function(){return this.b};
function Db(a){if(a instanceof Bb&&a.constructor===Bb&&a.f===Cb)return a.b;ca(a);return"type_error:SafeHtml"}
var Cb={};function Eb(a){var b=new Bb;b.b=a;return b}
Eb("<!DOCTYPE html>");Eb("");Eb("<br>");function Fb(a,b){b=b instanceof tb?b:xb(b);a.href=vb(b)}
function Gb(a,b){a.rel="stylesheet";b instanceof zb&&b.constructor===zb&&b.f===Ab?b=b.b:(ca(b),b="type_error:TrustedResourceUrl");a.href=b}
;function Hb(a,b,c){a&&(a.dataset?a.dataset[Ib(b)]=c:a.setAttribute("data-"+b,c))}
function E(a,b){return a?a.dataset?a.dataset[Ib(b)]:a.getAttribute("data-"+b):null}
function Jb(a,b){a&&(a.dataset?delete a.dataset[Ib(b)]:a.removeAttribute("data-"+b))}
var Kb={};function Ib(a){return Kb[a]||(Kb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Lb(a){l.setTimeout(function(){throw a;},0)}
var Mb;
function Nb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ic;c.ic=null;a()}};
return function(a){d.next={ic:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
;function Ob(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Ob.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Pb(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Qb(){this.f=this.b=null}
var Sb=new Ob(function(){return new Rb},function(a){a.reset()},100);
Qb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Rb(){this.next=this.scope=this.b=null}
Rb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Rb.prototype.reset=function(){this.next=this.scope=this.b=null};function Tb(a,b){Ub||Vb();Wb||(Ub(),Wb=!0);var c=Xb,d=Sb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Ub;function Vb(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Ub=function(){a.then(Yb)}}else Ub=function(){var a=Yb;
!fa(l.setImmediate)||l.Window&&l.Window.prototype&&!D("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Mb||(Mb=Nb()),Mb(a)):l.setImmediate(a)}}
var Wb=!1,Xb=new Qb;function Yb(){for(var a;a=Xb.remove();){try{a.b.call(a.scope)}catch(b){Lb(b)}Pb(Sb,a)}Wb=!1}
;function F(){this.Ka=this.Ka;this.T=this.T}
F.prototype.Ka=!1;F.prototype.D=function(){return this.Ka};
F.prototype.dispose=function(){this.Ka||(this.Ka=!0,this.w())};
function Zb(a,b){$b(a,ma(ac,b))}
function $b(a,b){a.Ka?p(void 0)?b.call(void 0):b():(a.T||(a.T=[]),a.T.push(p(void 0)?x(b,void 0):b))}
F.prototype.w=function(){if(this.T)for(;this.T.length;)this.T.shift()()};
function ac(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?bc.apply(null,d):ac(d)}}
;function G(a){F.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.ha={};this.j=!!a}
z(G,F);g=G.prototype;g.subscribe=function(a,b,c){var d=this.ha[a];d||(d=this.ha[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.ha[a]){var d=this.b;if(a=Na(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.na(a)}return!1};
g.na=function(a){var b=this.b[a];if(b){var c=this.ha[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.A=function(a,b){var c=this.ha[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];cc(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.na(c)}}return 0!=e}return!1};
function cc(a,b,c){Tb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.ha[a];b&&(B(b,this.na,this),delete this.ha[a])}else this.b.length=0,this.ha={}};
g.W=function(a){if(a){var b=this.ha[a];return b?b.length:0}a=0;for(b in this.ha)a+=this.W(b);return a};
g.w=function(){G.C.w.call(this);this.clear();this.f.length=0};var dc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",dc,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var ec=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",ec,void 0);function fc(a){gc(dc,arguments)}
function H(a,b){return a in dc?dc[a]:b}
function I(a,b){fa(a)&&(a=hc(a));return window.setTimeout(a,b)}
function J(a){window.clearTimeout(a)}
function hc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw ic(b),b;}}:a}
function ic(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=H("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),fc("ERRORS",c))}
function gc(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else for(c in b=b[0],b)a[c]=b[c]}
var jc=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},kc="Microsoft Internet Explorer"==navigator.appName;var lc=r("yt.pubsub.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.na;G.prototype.publish=G.prototype.A;G.prototype.clear=G.prototype.clear;q("yt.pubsub.instance_",lc,void 0);var mc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",mc,void 0);var nc=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",nc,void 0);var oc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",oc,void 0);
var pc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",pc,void 0);function qc(a,b,c){var d=rc();if(d){var e=d.subscribe(a,function(){if(!pc||pc!=e){var d=arguments,h;h=function(){mc[e]&&b.apply(c||window,d)};
try{oc[a]?h():I(h,0)}catch(k){ic(k)}}},c);
mc[e]=!0;nc[a]||(nc[a]=[]);nc[a].push(e);return e}return 0}
function sc(a){var b=rc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),B(a,function(a){b.unsubscribeByKey(a);delete mc[a]}))}
function tc(a,b){var c=rc();return c?c.publish.apply(c,arguments):!1}
function uc(a,b){oc[a]=!0;var c=rc();c&&c.publish.apply(c,arguments);oc[a]=!1}
function vc(a){nc[a]&&(a=nc[a],B(a,function(a){mc[a]&&delete mc[a]}),a.length=0)}
function wc(a){var b=rc();if(b)if(b.clear(a),a)vc(a);else for(var c in nc)vc(c)}
function rc(){return r("yt.pubsub.instance_")}
;function xc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(yc,""),c=c.replace(zc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ac(a,b)}
function Ac(a,b){var c=Bc(a),d=document.getElementById(c),e=d&&E(d,"loaded"),f=d&&!e;e?b&&b():(b&&(e=qc(c,b),b=""+ha(b),Cc[b]=e),f||(d=Dc(a,c,function(){E(d,"loaded")||(Hb(d,"loaded","true"),tc(c),I(ma(wc,c),0))})))}
function Dc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ec(a,b){a&&b&&(a=""+ha(b),(a=Cc[a])&&sc(a))}
function Bc(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ga(a)}
var yc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,zc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Cc={};var Fc=null;function Gc(){var a=H("BG_I",null),b=H("BG_IU",null),c=H("BG_P",void 0);b?xc(b,function(){Fc=new botguard.bg(c)}):a&&(eval(a),Fc=new botguard.bg(c))}
function Hc(){return null!=Fc}
function Ic(){return Fc?Fc.invoke():null}
;var Jc="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Kc(){}
Kc.prototype.next=function(){throw Jc;};
Kc.prototype.pa=function(){return this};
function Lc(a){if(a instanceof Kc)return a;if("function"==typeof a.pa)return a.pa(!1);if(da(a)){var b=0,c=new Kc;c.next=function(){for(;;){if(b>=a.length)throw Jc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Mc(a,b,c){if(da(a))try{B(a,b,c)}catch(d){if(d!==Jc)throw d;}else{a=Lc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Jc)throw d;}}}
function Nc(a){if(da(a))return Ta(a);a=Lc(a);var b=[];Mc(a,function(a){b.push(a)});
return b}
;function Oc(a,b){this.f={};this.b=[];this.Aa=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Oc?(c=a.qa(),d=a.X()):(c=db(a),d=cb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Oc.prototype;g.W=function(){return this.g};
g.X=function(){Pc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.qa=function(){Pc(this);return this.b.concat()};
g.$a=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Qc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.W())return!1;b=b||Rc;Pc(this);for(var c,d=0;c=this.b[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Rc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.Aa=this.g=this.b.length=0};
g.remove=function(a){return Qc(this.f,a)?(delete this.f[a],this.g--,this.Aa++,this.b.length>2*this.g&&Pc(this),!0):!1};
function Pc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Qc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Qc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Qc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Qc(this.f,a)||(this.g++,this.b.push(a),this.Aa++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.qa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Oc(this)};
g.pa=function(a){Pc(this);var b=0,c=this.Aa,d=this,e=new Kc;e.next=function(){if(c!=d.Aa)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Jc;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Qc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Sc(a){return a.W&&"function"==typeof a.W?a.W():da(a)||w(a)?a.length:$a(a)}
function Tc(a){if(a.X&&"function"==typeof a.X)return a.X();if(w(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return cb(a)}
function Uc(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(!a.X||"function"!=typeof a.X){if(da(a)||w(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return db(a)}}
function Vc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||w(a))B(a,b,c);else for(var d=Uc(a),e=Tc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Wc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(da(a)||w(a))return Ma(a,b,void 0);for(var c=Uc(a),d=Tc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Xc(a){this.b=new Oc;a&&Yc(this,a)}
function Zc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ha(a):b.substr(0,1)+a}
g=Xc.prototype;g.W=function(){return this.b.W()};
function Yc(a,b){b=Tc(b);for(var c=b.length,d=0;d<c;d++){var e=b[d];a.b.set(Zc(e),e)}}
g.remove=function(a){return this.b.remove(Zc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Zc(a);return Qc(this.b.f,a)};
g.X=function(){return this.b.X()};
g.clone=function(){return new Xc(this)};
g.equals=function(a){return this.W()==Sc(a)&&$c(this,a)};
function $c(a,b){var c=Sc(b);if(a.W()>c)return!1;!(b instanceof Xc)&&5<c&&(b=new Xc(b));return Wc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.$a&&"function"==typeof c.$a?c.$a(a):da(c)||w(c)?C(c,a):bb(c,a)})}
g.pa=function(){return this.b.pa(!1)};function ad(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
;function bd(a){bd[" "](a);return a}
bd[" "]=t;function cd(a,b){var c=dd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var ed=D("Opera"),K=D("Trident")||D("MSIE"),fd=D("Edge"),gd=D("Gecko")&&!(-1!=nb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),hd=-1!=nb.toLowerCase().indexOf("webkit")&&!D("Edge"),id=D("Windows");function jd(){var a=l.document;return a?a.documentMode:void 0}
var kd;a:{var ld="",md=function(){var a=nb;if(gd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fd)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hd)return/WebKit\/(\S+)/.exec(a);if(ed)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
md&&(ld=md?md[1]:"");if(K){var nd=jd();if(null!=nd&&nd>parseFloat(ld)){kd=String(nd);break a}}kd=ld}var od=kd,dd={};function pd(a){return cd(a,function(){return 0<=Ea(od,a)})}
function qd(a){return Number(rd)>=a}
var sd;var td=l.document;sd=td&&K?jd()||("CSS1Compat"==td.compatMode?parseInt(od,10):5):void 0;var rd=sd;function ud(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function vd(a){a=String(a);if(ud(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function wd(a){return eval("("+a+")")}
function L(a){return xd(new yd(void 0),a)}
function yd(a){this.b=a}
function xd(a,b){var c=[];zd(a,b,c);return c.join("")}
function zd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(v(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],zd(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Ad(d,c),c.push(":"),zd(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Ad(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Bd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Cd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ad(a,b){b.push('"',a.replace(Cd,function(a){var b=Bd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Bd[a]=b);return b}),'"')}
;function Dd(a){return H("EXPERIMENT_FLAGS",{})[a]}
;var Ed=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fd(a){return a?decodeURI(a):a}
function Gd(a,b){return b.match(Ed)[a]||null}
function Hd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?ra(f):"")}}}
function Id(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Jd(a,b,c){if(v(b))for(var d=0;d<b.length;d++)Jd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Kd(a,b,c){for(c=c||0;c<b.length;c+=2)Jd(b[c],b[c+1],a);return a}
function Ld(a,b){for(var c in b)Jd(c,b[c],a);return a}
function Md(a){a=Ld([],a);a[0]="";return a.join("")}
function Nd(a,b){return Id(2==arguments.length?Kd([a],arguments[1],0):Kd([a],arguments,1))}
function Od(a,b){return Id(Ld([a],b))}
;function Pd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ra(e[0]||""),e=ra(e[1]||"");f in b?v(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Qd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Pd(d[1]||""),e;for(e in b)d[e]=b[e];return Od(a,d)+c}
;var Rd=null;"undefined"!=typeof XMLHttpRequest?Rd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Rd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Sd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Td(a,b,c,d,e,f,h){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&hc(b)(m)}
var m=Rd&&Rd();if(!("open"in m))return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);f="POST"==c;if(e=Ud(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
function Ud(a,b){b=b||{};var c;c||(c=window.location.href);var d=Gd(1,a),e=Fd(Gd(3,a));d&&e?(d=c,c=a.match(Ed),d=d.match(Ed),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Fd(Gd(3,c))==e&&(Number(Gd(4,c))||null)==(Number(Gd(4,a))||null):!0;for(var f in Vd){if((e=d=H(Vd[f]))&&!(e=c)){var e=f,h=H("CORS_HEADER_WHITELIST")||{},k=Fd(Gd(3,a));e=k?(h=h[k])?C(h,e):!1:!0}e&&(b[f]=d)}return b}
function Wd(a,b){var c=H("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.df&&(!Fd(Gd(3,a))||b.withCredentials||Fd(Gd(3,a))==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.O&&b.O[c])}
function Xd(a,b){var c=b.format||"JSON";b.ef&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=H("XSRF_FIELD_NAME",void 0),e=H("XSRF_TOKEN",void 0),f=b.Xb;f&&(f[d]&&delete f[d],a=Qd(a,f||{}));var h=b.postBody||"",f=b.O;Wd(a,b)&&(f||(f={}),f[d]=e);f&&w(h)&&(d=Pd(h),mb(d,f),h=b.Ic&&"JSON"==b.Ic?JSON.stringify(d):Md(d));var k=!1,m,n=Td(a,function(a){if(!k){k=!0;m&&J(m);var d=Sd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Zd(c,a,b.cf);if(d)a:if(Dd("ajax_204_success")&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||l;d?b.R&&b.R.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ub&&b.Ub.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.ka&&0<b.timeout&&(m=I(function(){k||(k=!0,n.abort(),J(m),b.ka.call(b.context||l,n))},b.timeout));
return n}
function Zd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=wd(a));break;case "XML":if(b=(b=b.responseXML)?$d(b):null)d={},B(b.getElementsByTagName("*"),function(a){d[a.tagName]=ae(a)})}c&&be(d);
return d}
function be(a){if(ga(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Eb(a[b]);a[c]=d}else be(a[b])}}
function $d(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ae(a){var b="";B(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Vd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var ce={},de=0;function ee(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):I(a,b||0)}
;var fe=[],ge=!1;function he(){function a(){ge=!0;"google_ad_status"in window?fc("DCLKSTAT",1):fc("DCLKSTAT",2)}
xc("//static.doubleclick.net/instream/ad_status.js",a);fe.push(ee(function(){ge||"google_ad_status"in window||(Ec("//static.doubleclick.net/instream/ad_status.js",a),fc("DCLKSTAT",3))},5E3))}
function ie(){return parseInt(H("DCLKSTAT",0),10)}
;function je(a,b){this.width=a;this.height=b}
g=je.prototype;g.clone=function(){return new je(this.width,this.height)};
g.ld=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.ld()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ke(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in le||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ke.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ke.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ke.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var le={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function me(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function ne(a,b){return a.classList?a.classList.contains(b):C(me(a),b)}
function oe(a,b){a.classList?a.classList.add(b):ne(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function pe(a,b){a.classList?a.classList.remove(b):ne(a,b)&&(a.className=Ja(me(a),function(a){return a!=b}).join(" "))}
function qe(a,b,c){c?oe(a,b):pe(a,b)}
;var re=y().toString();function se(a,b){this.J=p(a)?a:0;this.K=p(b)?b:0}
g=se.prototype;g.clone=function(){return new se(this.J,this.K)};
g.equals=function(a){return a instanceof se&&(this==a?!0:this&&a?this.J==a.J&&this.K==a.K:!1)};
g.ceil=function(){this.J=Math.ceil(this.J);this.K=Math.ceil(this.K);return this};
g.floor=function(){this.J=Math.floor(this.J);this.K=Math.floor(this.K);return this};
g.round=function(){this.J=Math.round(this.J);this.K=Math.round(this.K);return this};!gd&&!K||K&&qd(9)||gd&&pd("1.9.1");var te=K&&!pd("9");function ue(a){ve();var b=new zb;b.b=a;return b}
var ve=t;function we(a){return a?new xe(ye(a)):oa||(oa=new xe)}
function ze(a){var b=document;return w(a)?b.getElementById(a):a}
function Ae(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Be(a)}
function Be(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var h=b.className;"function"==typeof h.split&&C(h.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function Ce(a){var b=a.scrollingElement?a.scrollingElement:!hd&&De(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&pd("10")&&a.pageYOffset!=b.scrollTop?new se(b.scrollLeft,b.scrollTop):new se(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function De(a){return"CSS1Compat"==a.compatMode}
function Ee(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Fe(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ge(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ye(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function He(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Ee(a),a.appendChild(ye(a).createTextNode(String(b)))}
var Ie={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Je={IMG:" ",BR:"\n"};function Ke(a){if(te&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Le(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");te||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Le(a,b,c){if(!(a.nodeName in Ie))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Je)b.push(Je[a.nodeName]);else for(a=a.firstChild;a;)Le(a,b,c),a=a.nextSibling}
function Me(a){var b=Ne.bd;return b?Oe(a,function(a){return!b||w(a.className)&&C(a.className.split(/\s+/),b)},!0,void 0):null}
function Oe(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function xe(a){this.b=a||l.document||document}
g=xe.prototype;g.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
g.createElement=function(a){return this.b.createElement(String(a))};
g.appendChild=function(a,b){a.appendChild(b)};
g.isElement=function(a){return ga(a)&&1==a.nodeType};
g.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Pe=r("yt.dom.getNextId_");if(!Pe){Pe=function(){return++Qe};
q("yt.dom.getNextId_",Pe,void 0);var Qe=0}function Re(){var a=document,b;La(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;var fb=r("yt.events.listeners_")||{};q("yt.events.listeners_",fb,void 0);var Se=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Se,void 0);function Te(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Te(a,b,c,d);if(e)return e;var e=++Se.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new ke(d);if(!Oe(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ke(b);
b.currentTarget=a;return c.call(a,b)};
h=hc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);fb[e]=[a,b,c,h,d];return e}
function Ue(a){a&&("string"==typeof a&&(a=[a]),B(a,function(a){if(a in fb){var b=fb[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[a]}}))}
;function Ve(){if(null==r("_lact",window)){var a=parseInt(H("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&We();M(document,"keydown",We);M(document,"keyup",We);M(document,"mousedown",We);M(document,"mouseup",We);qc("page-mouse",We);qc("page-scroll",We);qc("page-resize",We)}}
function We(){null==r("_lact",window)&&(Ve(),r("_lact",window));var a=y();q("_lact",a,window);tc("USER_ACTIVE")}
function Xe(){var a=r("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function Ye(){}
Ye.prototype.set=u;Ye.prototype.get=u;Ye.prototype.remove=u;function Ze(){}
z(Ze,Ye);Ze.prototype.W=function(){var a=0;Mc(this.pa(!0),function(){a++});
return a};
Ze.prototype.pa=u;Ze.prototype.clear=function(){var a=Nc(this.pa(!0)),b=this;B(a,function(a){b.remove(a)})};function $e(a){this.b=a}
z($e,Ze);g=$e.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.W=function(){return this.b.length};
g.pa=function(a){var b=0,c=this.b,d=new Kc;d.next=function(){if(b>=c.length)throw Jc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!w(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function af(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(af,$e);function bf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(bf,$e);function cf(a){this.b=a}
cf.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
cf.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return vd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cf.prototype.remove=function(a){this.b.remove(a)};function df(a){this.b=a}
z(df,cf);function ef(a){this.data=a}
function ff(a){return!p(a)||a instanceof ef?a:new ef(a)}
df.prototype.set=function(a,b){df.C.set.call(this,a,ff(b))};
df.prototype.f=function(a){a=df.C.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
df.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gf(a){this.b=a}
z(gf,df);function hf(a){var b=a.creation;a=a.expiration;return!!a&&a<y()||!!b&&b>y()}
gf.prototype.set=function(a,b,c){if(b=ff(b)){if(c){if(c<y()){gf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}gf.C.set.call(this,a,b)};
gf.prototype.f=function(a,b){var c=gf.C.f.call(this,a);if(c)if(!b&&hf(c))gf.prototype.remove.call(this,a);else return c};function jf(a){this.b=a}
z(jf,gf);function kf(a,b){var c=[];Mc(b,function(a){var b;try{b=jf.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?hf(b)&&c.push(a):c.push(a)},a);
return c}
function lf(a,b){b=kf(a,b);B(b,function(a){jf.prototype.remove.call(this,a)},a)}
function mf(){var a=nf;lf(a,a.b.pa(!0))}
;function N(a,b,c){var d=c&&0<c?c:0;c=d?y()+1E3*d:0;if((d=d?nf:of)&&window.JSON){w(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function pf(a){if(!of&&!nf||!window.JSON)return null;var b;try{b=of.get(a)}catch(c){}if(!w(b))try{b=nf.get(a)}catch(c){}if(!w(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function qf(a){of&&of.remove(a);nf&&nf.remove(a)}
var nf,rf=new af;nf=rf.isAvailable()?new jf(rf):null;var of,sf=new bf;of=sf.isAvailable()?new jf(sf):null;var tf=D("Firefox"),uf=ad()||D("iPod"),vf=D("iPad"),wf=D("Android")&&!(sb()||D("Firefox")||D("Opera")||D("Silk")),xf=sb(),yf=D("Safari")&&!(sb()||D("Coast")||D("Opera")||D("Edge")||D("Silk")||D("Android"))&&!(ad()||D("iPad")||D("iPod"));function zf(a){this.b=a;this.f=this.g=void 0}
function Af(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Bf={log_event:"events",log_interaction:"interactions"},Cf={},Df={},Ef=0,Ff=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ff,void 0);function Gf(a,b){Ff[a.endpoint]=Ff[a.endpoint]||[];var c=Ff[a.endpoint];c.push(a.Gc);Df[a.endpoint]=b;20<=c.length?Hf():If()}
function Hf(){J(Ef);if(!gb(Ff)){for(var a in Ff){var b=Cf[a];if(!b){b=Df[a];if(!b)continue;b=new b;Cf[a]=b}var c=b.f();c.requestTimeMs=Math.round(jc());c[Bf[a]]=Ff[a];b.g(a,c,{});delete Ff[a]}gb(Ff)||If()}}
function If(){J(Ef);Ef=I(Hf,H("LOGGING_BATCH_TIMEOUT",1E4))}
;function Jf(a,b){var c=Kf();b=Ka(b,function(a){return Af(a)});
Lf(c,{visibilityUpdate:{csn:a,visualElements:b}})}
function Lf(a,b,c){b.eventTimeMs=Math.round(jc());b.lactMs=Xe();c&&(b.clientData=Mf(c));Gf({endpoint:"log_interaction",Gc:b},a)}
function Mf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Ka(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Nf(){var a=H("client-screen-nonce",void 0);a||(a=H("EVENT_ID",void 0));return a}
;var Of={};function Pf(a){this.b=a||{cookie:""}}
var Qf=/\s*;\s*/;g=Pf.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Qf),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.qa=function(){return Rf(this).keys};
g.X=function(){return Rf(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.W=function(){return this.b.cookie?(this.b.cookie||"").split(Qf).length:0};
g.$a=function(a){for(var b=Rf(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Rf(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Rf(a){a=(a.b.cookie||"").split(Qf);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Sf=new Pf("undefined"==typeof document?null:document);Sf.f=3950;function Tf(a,b,c){Sf.set(""+a,b,c,"/","youtube.com")}
;function Uf(a,b,c){var d=H("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Fd(Gd(3,window.location.href));e&&d.push(e);e=Fd(Gd(3,a));if(C(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(Ed),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))Dd("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||Nf()),d="ST-"+Ga(d).toString(36),e=b?Md(b):"",Tf(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),
b&&d&&d(new zf(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Od(a,{})+"",a=a instanceof tb?a:xb(a),c.href=vb(a));return!0}
;function Vf(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||jb(Wf);this.assets=a.assets||{};this.attrs=a.attrs||jb(Xf);this.params=a.params||jb(Yf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Wf={enablejsapi:1},Xf={},Yf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function $f(a){a instanceof Vf||(a=new Vf(a));return a}
Vf.prototype.clone=function(){var a=new Vf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=jb(c):a[b]=c}return a};function ag(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=ag.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new ag(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof ag?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.J>=this.left&&a.J<=this.right&&a.K>=this.top&&a.K<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function bg(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=bg.prototype;g.clone=function(){return new bg(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof se?a.J>=this.left&&a.J<=this.left+this.width&&a.K>=this.top&&a.K<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function cg(a,b){var c=ye(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}
function dg(a,b){return cg(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function eg(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function fg(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function gg(a){var b=hg;if("none"!=dg(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function hg(a){var b=a.offsetWidth,c=a.offsetHeight,d=hd&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new je(b,c):(a=eg(a),new je(a.right-a.left,a.bottom-a.top))}
function ig(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return b}
function jg(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?ig(a,b):0}
var kg={thin:2,medium:4,thick:6};function lg(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in kg?kg[b]:ig(a,b)}
;function mg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,m,n;if(kc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(A){h=null}else m=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=m.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(A){k=""}m&&n&&m.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(mg);function ng(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function og(a){if(window.spf){var b=a.match(pg);spf.style.load(a,b?b[1]:"",void 0)}else qg(a)}
function qg(a){var b=rg(a),c=document.getElementById(b),d=c&&E(c,"loaded");d||c&&!d||(c=sg(a,b,function(){E(c,"loaded")||(Hb(c,"loaded","true"),tc(b),I(ma(wc,b),0))}))}
function sg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ue(a);Gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function rg(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ga(a)}
var pg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var tg;var ug=nb,ug=ug.toLowerCase();if(-1!=ug.indexOf("android")){var vg=ug.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(vg)tg=Number(vg[1]);else{var wg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},xg=ug.match("("+db(wg).join("|")+")");tg=xg?wg[xg[0]]:0}}else tg=void 0;var yg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],zg=['audio/mp4; codecs="mp4a.40.2"'];function Ag(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=this.f=!1;this.Lc=!0}
Ag.prototype.stopPropagation=function(){this.f=!0};
Ag.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Lc=!1};var Bg=!K||qd(9),Cg=K&&!pd("9");!hd||pd("528");gd&&pd("1.9b")||K&&pd("8")||ed&&pd("9.5")||hd&&pd("528");gd&&!pd("8")||K&&pd("9");function Dg(a,b){Ag.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.charCode=this.keyCode=this.button=this.clientY=this.clientX=0;this.shiftKey=this.altKey=this.ctrlKey=!1;this.g=this.state=null;a&&this.init(a,b)}
z(Dg,Ag);
Dg.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(gd){var e;a:{try{bd(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==
d.clientY?d.clientY:d.pageY);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Dg.prototype.stopPropagation=function(){Dg.C.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Dg.prototype.preventDefault=function(){Dg.C.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Cg)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Eg="closure_listenable_"+(1E6*Math.random()|0),Fg=0;function Gg(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.pb=!!d;this.tb=e;this.key=++Fg;this.Sa=this.nb=!1}
function Hg(a){a.Sa=!0;a.listener=null;a.b=null;a.src=null;a.tb=null}
;function Ig(a){this.src=a;this.b={};this.f=0}
function Jg(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=Kg(b,c,d,e);-1<h?(a=b[h],a.nb=!1):(a=new Gg(c,a.src,f,!!d,e),a.nb=!1,b.push(a));return a}
Ig.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Kg(e,b,c,d);return-1<b?(Hg(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function Lg(a,b){var c=b.type;c in a.b&&Qa(a.b[c],b)&&(Hg(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function Mg(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=Kg(a,c,d,e));return-1<b?a[b]:null}
function Kg(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sa&&f.listener==b&&f.pb==!!c&&f.tb==d)return e}return-1}
;var Ng="closure_lm_"+(1E6*Math.random()|0),Og={},Pg=0;
function Qg(a,b,c,d,e){if(v(b)){for(var f=0;f<b.length;f++)Qg(a,b[f],c,d,e);return null}c=Rg(c);if(a&&a[Eg])a=a.ub(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=Sg(a);h||(a[Ng]=h=new Ig(a));c=Jg(h,b,c,d,e);if(!c.b){d=Tg();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Ug(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Pg++}a=c}return a}
function Tg(){var a=Vg,b=Bg?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Wg(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)Wg(a,b[f],c,d,e);else c=Rg(c),a&&a[Eg]?a.Db(b,c,d,e):a&&(a=Sg(a))&&(b=Mg(a,b,c,!!d,e))&&Xg(b)}
function Xg(a){if(!ea(a)&&a&&!a.Sa){var b=a.src;if(b&&b[Eg])Lg(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.pb):b.detachEvent&&b.detachEvent(Ug(c),d);Pg--;(c=Sg(b))?(Lg(c,a),0==c.f&&(c.src=null,b[Ng]=null)):Hg(a)}}}
function Ug(a){return a in Og?Og[a]:Og[a]="on"+a}
function Yg(a,b,c,d){var e=!0;if(a=Sg(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.pb==c&&!f.Sa&&(f=Zg(f,d),e=e&&!1!==f)}return e}
function Zg(a,b){var c=a.listener,d=a.tb||a.src;a.nb&&Xg(a);return c.call(d,b)}
function Vg(a,b){if(a.Sa)return!0;if(!Bg){var c=b||r("window.event");b=new Dg(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.b;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;!b.f&&0<=e;e--){b.b=c[e];var f=Yg(c[e],a,!0,b),d=d&&f}for(e=0;!b.f&&e<c.length;e++)b.b=c[e],f=Yg(c[e],a,!1,b),d=d&&f}return d}return Zg(a,new Dg(b,this))}
function Sg(a){a=a[Ng];return a instanceof Ig?a:null}
var $g="__closure_events_fn_"+(1E9*Math.random()>>>0);function Rg(a){if(fa(a))return a;a[$g]||(a[$g]=function(b){return a.handleEvent(b)});
return a[$g]}
;function bh(){F.call(this);this.g=new Ig(this);this.va=this;this.aa=null}
z(bh,F);bh.prototype[Eg]=!0;g=bh.prototype;g.addEventListener=function(a,b,c,d){Qg(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){Wg(this,a,b,c,d)};
function ch(a,b){var c,d=a.aa;if(d){c=[];for(var e=1;d;d=d.aa)c.push(d),++e}a=a.va;d=b.type||b;w(b)?b=new Ag(b,a):b instanceof Ag?b.target=b.target||a:(e=b,b=new Ag(d,a),mb(b,e));var e=!0,f;if(c)for(var h=c.length-1;!b.f&&0<=h;h--)f=b.b=c[h],e=dh(f,d,!0,b)&&e;b.f||(f=b.b=a,e=dh(f,d,!0,b)&&e,b.f||(e=dh(f,d,!1,b)&&e));if(c)for(h=0;!b.f&&h<c.length;h++)f=b.b=c[h],e=dh(f,d,!1,b)&&e}
g.w=function(){bh.C.w.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,Hg(d[e]);delete a.b[c];a.f--}}this.aa=null};
g.ub=function(a,b,c,d){return Jg(this.g,String(a),b,c,d)};
g.Db=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function dh(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Sa&&h.pb==c){var k=h.listener,m=h.tb||h.src;h.nb&&Lg(a.g,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.Lc}
;var eh;var fh=nb,gh=fh.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!gh||2>gh.length)eh=void 0;else{var hh=fh.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);eh=hh&&6==hh.length?Number(hh[5].replace("_",".")):0}0<=eh&&0<=nb.search("Safari")&&nb.search("Version");function ih(a){F.call(this);this.b=[];this.f=a||this}
z(ih,F);function jh(a,b,c,d){d=hc(x(d,a.f));d={target:b,name:c,ob:d};b.addEventListener(c,d.ob,void 0);a.b.push(d)}
ih.prototype.Db=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.ob);break}};
function kh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ob)}}
ih.prototype.w=function(){kh(this);ih.C.w.call(this)};function lh(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function mh(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){nh(c,2,a)},function(a){nh(c,3,a)})}catch(d){nh(this,3,d)}}
function oh(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
oh.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var ph=new Ob(function(){return new oh},function(a){a.reset()},100);
function qh(a,b,c){var d=ph.get();d.g=a;d.f=b;d.context=c;return d}
function rh(a){if(a instanceof mh)return a;var b=new mh(t);nh(b,2,a);return b}
function sh(a){return new mh(function(b,c){c(a)})}
mh.prototype.then=function(a,b,c){return th(this,fa(a)?a:null,fa(b)?b:null,c)};
lh(mh);mh.prototype.cancel=function(a){0==this.b&&Tb(function(){var b=new uh(a);vh(this,b)},this)};
function vh(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.i||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?vh(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):wh(c),xh(c,e,3,b)))}a.g=null}else nh(a,3,b)}
function yh(a,b){a.f||2!=a.b&&3!=a.b||zh(a);a.i?a.i.next=b:a.f=b;a.i=b}
function th(a,b,c,d){var e=qh(null,null,null);e.b=new mh(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof uh?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;yh(a,e);return e.b}
mh.prototype.T=function(a){this.b=0;nh(this,2,a)};
mh.prototype.G=function(a){this.b=0;nh(this,3,a)};
function nh(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.T,h=a.G;if(e instanceof mh)yh(e,qh(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ga(e))try{var m=e.then;if(fa(m)){Ah(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,zh(a),3!=b||c instanceof uh||Bh(a,c))}}
function Ah(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(m){f(m)}}
function zh(a){a.o||(a.o=!0,Tb(a.B,a))}
function wh(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
mh.prototype.B=function(){for(var a;a=wh(this);)xh(this,a,this.b,this.l);this.o=!1};
function xh(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Ch(b,c,d);else try{b.i?b.g.call(b.context):Ch(b,c,d)}catch(e){Dh.call(null,e)}Pb(ph,b)}
function Ch(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Bh(a,b){a.j=!0;Tb(function(){a.j&&Dh.call(null,b)})}
var Dh=Lb;function uh(a){na.call(this,a)}
z(uh,na);uh.prototype.name="cancel";function Eh(){return{apiaryHost:H("APIARY_HOST",void 0),fc:H("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:H("GAPI_HINT_OVERRIDE"),gapiHintParams:H("GAPI_HINT_PARAMS",void 0),innertubeApiKey:H("INNERTUBE_API_KEY",void 0),innertubeApiVersion:H("INNERTUBE_API_VERSION",void 0),Cd:H("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ed:H("INNERTUBE_CONTEXT_HL",void 0),Dd:H("INNERTUBE_CONTEXT_GL",void 0),Ee:H("XHR_APIARY_HOST",void 0)}}
function Fh(a){a={client:{hl:a.Ed,gl:a.Dd,clientName:a.Cd,clientVersion:a.innertubeContextClientVersion}};H("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:H("DELEGATED_SESSION_ID")});return a}
;function Gh(){this.b=Eh();Hh||(Hh=Ih(this.b))}
var Hh=null;function Ih(a){return(new mh(function(b){xc(H("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){ic(c)}})})).then(function(){})}
Gh.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;pa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.fc;pa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",H("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Gh.prototype.f=function(){return{context:Fh(this.b)}};
Gh.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=I(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
Jh(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function Jh(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":H("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);Hh.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function Kh(a,b,c){var d={};d.eventTimeMs=Math.round(c||jc());d[a]=b;Gf({endpoint:"log_event",Gc:d},Gh)}
;function Lh(a,b){this.f=this.B=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof Lh?(this.o=p(b)?b:a.o,Mh(this,a.i),this.B=a.B,Nh(this,a.f),Oh(this,a.l),this.b=a.b,Ph(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(Ed))?(this.o=!!b,Mh(this,c[1]||"",!0),this.B=Qh(c[2]||""),Nh(this,c[3]||"",!0),Oh(this,c[4]),this.b=Qh(c[5]||"",!0),Ph(this,c[6]||"",!0),this.j=Qh(c[7]||"")):(this.o=!!b,this.g=new Rh(null,0,this.o))}
Lh.prototype.toString=function(){var a=[],b=this.i;b&&a.push(Sh(b,Th,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.B)&&a.push(Sh(b,Th,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(Sh(c,"/"==c.charAt(0)?Uh:Vh,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",Sh(c,Wh));return a.join("")};
Lh.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?Mh(b,a.i):c=!!a.B;c?b.B=a.B:c=!!a.f;c?Nh(b,a.f):c=null!=a.l;var d=a.b;if(c)Oh(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?Ph(b,Qh(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
Lh.prototype.clone=function(){return new Lh(this)};
function Mh(a,b,c){a.i=c?Qh(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function Nh(a,b,c){a.f=c?Qh(b,!0):b}
function Oh(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function Ph(a,b,c){b instanceof Rh?(a.g=b,Xh(a.g,a.o)):(c||(b=Sh(b,Yh)),a.g=new Rh(b,0,a.o))}
function O(a,b,c){a.g.set(b,c)}
function Zh(a,b,c){v(c)||(c=[String(c)]);$h(a.g,b,c)}
function ai(a){O(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36));return a}
function bi(a){return a instanceof Lh?a.clone():new Lh(a,void 0)}
function ci(a,b,c,d){var e=new Lh(null,void 0);a&&Mh(e,a);b&&Nh(e,b);c&&Oh(e,c);d&&(e.b=d);return e}
function Qh(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Sh(a,b,c){return w(a)?(a=encodeURI(a).replace(b,di),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function di(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Th=/[#\/\?@]/g,Vh=/[\#\?:]/g,Uh=/[\#\?]/g,Yh=/[\#\?@]/g,Wh=/#/g;function Rh(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function ei(a){a.b||(a.b=new Oc,a.f=0,a.g&&Hd(a.g,function(b,c){fi(a,ra(b),c)}))}
g=Rh.prototype;g.W=function(){ei(this);return this.f};
function fi(a,b,c){ei(a);a.g=null;b=gi(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){ei(this);a=gi(this,a);return Qc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){ei(this);return 0==this.f};
function hi(a,b){ei(a);b=gi(a,b);return Qc(a.b.f,b)}
g.$a=function(a){var b=this.X();return C(b,a)};
g.qa=function(){ei(this);for(var a=this.b.X(),b=this.b.qa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.X=function(a){ei(this);var b=[];if(w(a))hi(this,a)&&(b=Sa(b,this.b.get(gi(this,a))));else{a=this.b.X();for(var c=0;c<a.length;c++)b=Sa(b,a[c])}return b};
g.set=function(a,b){ei(this);this.g=null;a=gi(this,a);hi(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){a=a?this.X(a):[];return 0<a.length?String(a[0]):b};
function $h(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set(gi(a,b),Ta(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.qa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new Rh;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function gi(a,b){b=String(b);a.i&&(b=b.toLowerCase());return b}
function Xh(a,b){b&&!a.i&&(ei(a),a.g=null,a.b.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(this.remove(b),$h(this,c,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Vc(arguments[b],function(a,b){fi(this,b,a)},this)};var ii="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),ji="";
function ki(a){return a&&a==ji?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+ii.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(ji=a,!0):!1}
;var li={},mi=0;function ni(a){var b=new Image,c=""+mi++;li[c]=b;b.onload=b.onerror=function(){delete li[c]};
b.src=a}
;function P(a,b){this.version=a;this.args=b}
function oi(a){if(!a.Aa){var b={};a.call(b);a.Aa=b.version}return a.Aa}
function pi(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=oi(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function Q(a,b){this.topic=a;this.b=b}
Q.prototype.toString=function(){return this.topic};var qi=r("yt.pubsub2.instance_")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.na;G.prototype.publish=G.prototype.A;G.prototype.clear=G.prototype.clear;q("yt.pubsub2.instance_",qi,void 0);var ri=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",ri,void 0);var si=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",si,void 0);var ti=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",ti,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function R(a,b){var c=ui();c&&c.publish.call(c,a.toString(),a,b)}
function vi(a,b,c){var d=ui();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(ri[e])try{if(h&&a instanceof Q&&a!=d)try{h=pi(a.b,h)}catch(m){throw m.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+m.message,m;}b.call(c||window,h)}catch(m){ic(m)}};
ti[a.toString()]?r("yt.scheduler.instance")?ee(f,void 0):I(f,0):f()}});
ri[e]=!0;si[a.toString()]||(si[a.toString()]=[]);si[a.toString()].push(e);return e}
function wi(a){var b=ui();b&&(ea(a)&&(a=[a]),B(a,function(a){b.unsubscribeByKey(a);delete ri[a]}))}
function ui(){return r("yt.pubsub2.instance_")}
;var xi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function yi(a){P.call(this,1,arguments)}
z(yi,P);var zi=new Q("timing-sent",yi);var Ai={vc:!0},Bi=/^mark_/i,Ci={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Di=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Ei=x(xi.clearResourceTimings||xi.webkitClearResourceTimings||xi.mozClearResourceTimings||xi.msClearResourceTimings||xi.oClearResourceTimings||t,xi);
function Fi(a){if("_"!=a[0]){var b=a;xi.mark&&(Bi.test(b)||(b="mark_"+b),xi.mark(b))}var b=Gi(),c=jc();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Hi()["tick_"+a]=void 0;Dd("csi_on_gel")?(b=Ii(),"_start"==a?Kh("latencyActionBaselined",{clientActionNonce:b},void 0):Kh("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!Dd("navigation_only_csi_reset"));if(!a&&(b=H("TIMING_ACTION",void 0),a=Gi(),r("yt.timing.ready_")&&b&&a._start&&
Ji())){b=!0;c=H("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Ki()}}
function Li(){var a=Mi().info.yt_lt="hot_bg";Hi().info_yt_lt=a;if(Dd("csi_on_gel"))if("yt_lt"in Ci){var b={},c=Ci.yt_lt;C(Di,c)&&(a=!!a);b[c]=a;a=Ii();b.clientActionNonce=a;Kh("latencyActionInfo",b)}else ic(Error("Unknown label yt_lt logged with GEL CSI."))}
function Ji(){var a=Gi();if(a.aft)return a.aft;for(var b=H("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ki(){var a=Gi(),b=Mi().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&v(a[d])){var e=d.slice(1);if(e in Ai){var f=Ka(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Ni(f,e),Oi(),Ei(),Pi(!1,void 0)}else{var h=H("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:H("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=xi.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var m=window.location.protocol+r("ytplayer.config.assets.js");(m=xi.getEntriesByName?xi.getEntriesByName(m)[0]:
null)?b.h5jse=Math.round(b.h5jse-m.responseEnd):delete b.h5jse}a.aft=Ji();Qi()&&"youtube"==h&&(Li(),h=a.vc,m=a.pbs,delete a.aft,b.aft=Math.round(m-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=jc();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Dd("navigation_only_csi_reset")||(Oi(),Ei(),Pi(!1,void 0));Ni(f,e,void 0);R(zi,new yi(b.aft+(k||0)))}}
function Ni(a,b,c){if(Dd("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&ni(a)}catch(f){a&&ni(a)}else a&&ni(a);Pi(!0,c)}
function Ii(){var a=Mi().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=y();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(re)for(c=1,d=0;d<re.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^re.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Mi().nonce=a}return a}
function Gi(){return Mi().tick}
function Hi(){var a=Mi();"gel"in a||(a.gel={});return a.gel}
function Mi(){return r("ytcsi.data_")||Oi()}
function Oi(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Pi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Qi(){var a=Gi(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Mi().info.yt_pvis}
;var Ri={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Si(a,b){F.call(this);this.o=this.j=a;this.aa=b;this.B=!1;this.f={};this.La=this.$=null;this.da=new G;Zb(this,this.da);this.i={};this.G=this.Ma=this.g=this.Ya=this.b=null;this.oa=!1;this.H=this.l=this.P=this.U=null;this.Na={};this.hd=["onReady"];this.ra=new ih(this);Zb(this,this.ra);this.Gb=null;this.cc=NaN;this.va={};Ti(this);this.sa("onDetailedError",x(this.Sd,this));this.sa("onTabOrderChange",x(this.md,this));this.sa("onTabAnnounce",x(this.dc,this));this.sa("WATCH_LATER_VIDEO_ADDED",x(this.Td,
this));this.sa("WATCH_LATER_VIDEO_REMOVED",x(this.Ud,this));tf||(this.sa("onMouseWheelCapture",x(this.Pd,this)),this.sa("onMouseWheelRelease",x(this.Qd,this)));this.sa("onAdAnnounce",x(this.dc,this));this.L=new ih(this);Zb(this,this.L);this.Xa=!1;this.Wa=null}
z(Si,F);var Ui=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=Si.prototype;g.Zb=function(a,b){this.D()||(Vi(this,a),Wi(this,b),this.B&&Xi(this))};
function Vi(a,b){a.Ya=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.aa,a.b.attrs.id=a.aa);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.aa;a.Ma||(a.Ma=Yi(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;if(b=a.b.attrs.width)a.o.style.width=fg(Number(b)||b,!0);if(b=a.b.attrs.height)a.o.style.height=fg(Number(b)||b,!0)}
g.td=function(){return this.Ya};
function Xi(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Zi(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=ng(mg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function $i(a,b){if((!b||(5!=(Ri[b.errorCode]||5)?0:-1!=Ui.indexOf(b.errorCode)))&&Zi(a)){(b=aj(a))&&b.stopVideo&&b.stopVideo();var c=a.b;b&&b.getUpdatedConfigurationData&&(b=b.getUpdatedConfigurationData(),c=$f(b));c.args.autoplay=1;c.args.html5_unavailable="1";Vi(a,c);Wi(a,"flash")}}
function Wi(a,b){if(!a.D()){if(!b){if(!(b=!a.b.html5&&Zi(a))){if(!p(a.b.disable.html5)){var c;b=!0;void 0!=a.b.args.deviceHasDisplay&&(b=a.b.args.deviceHasDisplay);if(2.2==tg)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("video"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?yg:zg,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=bj(a)||a.b.assets.js);a.b.disable.html5=
!c;c||(a.b.args.html5_unavailable="1")}b=!!a.b.disable.html5}b=b?Zi(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ce:a.De).call(a)}}
function bj(a){var b=!0,c=aj(a);c&&a.b&&(a=a.b,b=E(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.De=function(){if(!this.oa){var a=bj(this);a&&"html5"==cj(this)?(this.G="html5",this.B||this.Ra()):(dj(this),this.G="html5",a&&this.P?(this.j.appendChild(this.P),this.Ra()):(this.b.loaded=!0,this.U=x(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.Ra()},this),this.oa=!0,a?this.U():(xc(this.b.assets.js,this.U),og(this.b.assets.css))))}};
g.Ce=function(){var a=this.b.clone();if(!this.l){var b=aj(this);b&&(this.l=document.createElement("span"),this.l.tabIndex=0,jh(this.ra,this.l,"focus",this.uc),this.H=document.createElement("span"),this.H.tabIndex=0,jh(this.ra,this.H,"focus",this.uc),b.parentNode&&b.parentNode.insertBefore(this.l,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==cj(this))this.G="flash",this.B||this.Ra();else{dj(this);
this.G="flash";this.b.loaded=!0;var b=mg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!ng(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=w(b)?ze(b):b,d=jb(a.attrs);d.tabindex=0;var e=jb(a.params);e.flashvars=Md(a.args);if(kc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.Ra()}};
g.uc=function(){aj(this).focus()};
function aj(a){var b=ze(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.Ra=function(){if(!this.D()){var a=aj(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.oa=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))$i(this);else{Ti(this);this.B=!0;a=aj(this);a.addEventListener&&(this.$=ej(this,a,"addEventListener"));a.removeEventListener&&(this.La=ej(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=ej(this,a,d))}for(var e in this.i)this.$(e,
this.i[e]);Xi(this);this.Ma&&this.Ma(this.f);this.da.A("onReady",this.f)}else this.cc=I(x(this.Ra,this),50)}};
function ej(a,b,c){var d=b[c];return function(){try{return a.Gb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Gb=e,ic(e,"WARNING"))}}}
function Ti(a){a.B=!1;if(a.La)for(var b in a.i)a.La(b,a.i[b]);for(var c in a.va)J(parseInt(c,10));a.va={};a.$=null;a.La=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.sa,a);a.f.removeEventListener=x(a.pe,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.ud,a);a.f.getPlayerType=x(a.vd,a);a.f.getCurrentVideoConfig=x(a.td,a);a.f.loadNewVideoConfig=x(a.Zb,a);a.f.isReady=x(a.Pe,a)}
g.Pe=function(){return this.B};
g.sa=function(a,b){if(!this.D()&&(b=Yi(this,b))){if(!C(this.hd,a)&&!this.i[a]){var c=fj(this,a);this.$&&this.$(a,c)}this.da.subscribe(a,b);"onReady"==a&&this.B&&I(ma(b,this.f),0)}};
g.pe=function(a,b){this.D()||(b=Yi(this,b))&&this.da.unsubscribe(a,b)};
function Yi(a,b){var c=b;if("string"==typeof b){if(a.Na[b])return a.Na[b];c=function(){var a=r(b);a&&a.apply(l,arguments)};
a.Na[b]=c}return c?c:null}
function fj(a,b){var c="ytPlayer"+b+a.aa;a.i[b]=c;l[c]=function(c){var d=I(function(){if(!a.D()){a.da.A(b,c);var e=a.va,h=String(d);h in e&&delete e[h]}},0);
hb(a.va,String(d))};
return c}
g.md=function(a){a=a?Ge:Fe;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.l||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
g.dc=function(a){tc("a11y-announce",a)};
g.Sd=function(a){$i(this,a)};
g.Td=function(a){tc("WATCH_LATER_VIDEO_ADDED",a)};
g.Ud=function(a){tc("WATCH_LATER_VIDEO_REMOVED",a)};
g.Pd=function(){this.Xa||(xf?(this.Wa=Ce(document),jh(this.L,window,"scroll",this.je),jh(this.L,this.j,"touchmove",this.de)):(jh(this.L,this.j,"mousewheel",this.yc),jh(this.L,this.j,"wheel",this.yc)),this.Xa=!0)};
g.Qd=function(){kh(this.L);this.Xa=!1};
g.yc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.je=function(){window.scrollTo(this.Wa.J,this.Wa.K)};
g.de=function(a){a.preventDefault()};
g.vd=function(){return this.G||cj(this)};
g.ud=function(){return this.Gb};
function cj(a){return(a=aj(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function dj(a){Fi("dcp");a.cancel();Ti(a);a.G=null;a.b&&(a.b.loaded=!1);var b=aj(a);"html5"==cj(a)?a.P=b:b&&b.destroy&&b.destroy();Ee(a.j);kh(a.ra);a.l=null;a.H=null}
g.cancel=function(){this.U&&Ec(this.b.assets.js,this.U);J(this.cc);this.oa=!1};
g.w=function(){dj(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){ic(b)}this.Na=null;for(var a in this.i)l[this.i[a]]=null;this.Ya=this.b=this.f=null;delete this.j;delete this.o;Si.C.w.call(this)};var gj={},hj="player_uid_"+(1E9*Math.random()>>>0);function ij(a,b){a=w(a)?ze(a):a;b=$f(b);var c=hj+"_"+ha(a),d=gj[c];if(d)return d.Zb(b),d.f;d=new Si(a,c);gj[c]=d;tc("player-added",d.f);$b(d,ma(jj,d));I(function(){d.Zb(b)},0);
return d.f}
function jj(a){gj[a.aa]=null}
function kj(a){a=ze(a);if(!a)return null;var b=hj+"_"+ha(a),c=gj[b];c||(c=new Si(a,b),gj[b]=c);return c.f}
;var lj=r("yt.abuse.botguardInitialized")||Hc;q("yt.abuse.botguardInitialized",lj,void 0);var mj=r("yt.abuse.invokeBotguard")||Ic;q("yt.abuse.invokeBotguard",mj,void 0);var nj=r("yt.abuse.dclkstatus.checkDclkStatus")||ie;q("yt.abuse.dclkstatus.checkDclkStatus",nj,void 0);var oj=r("yt.player.exports.navigate")||Uf;q("yt.player.exports.navigate",oj,void 0);var pj=r("yt.player.embed")||ij;q("yt.player.embed",pj,void 0);var qj=r("yt.player.getPlayerByElement")||kj;q("yt.player.getPlayerByElement",qj,void 0);
var rj=r("yt.util.activity.init")||Ve;q("yt.util.activity.init",rj,void 0);var sj=r("yt.util.activity.getTimeSinceActive")||Xe;q("yt.util.activity.getTimeSinceActive",sj,void 0);var tj=r("yt.util.activity.setTimestamp")||We;q("yt.util.activity.setTimestamp",tj,void 0);function uj(a){P.call(this,1,arguments);this.b=a}
z(uj,P);function vj(a){P.call(this,1,arguments);this.b=a}
z(vj,P);function wj(a,b,c){P.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
z(wj,P);function xj(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
z(xj,P);function yj(a,b,c){P.call(this,1,arguments);this.b=a;this.subscriptionId=b}
z(yj,P);function zj(a,b,c,d,e,f,h){P.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
z(zj,P);
var Aj=new Q("subscription-batch-subscribe",uj),Bj=new Q("subscription-batch-unsubscribe",uj),Cj=new Q("subscription-subscribe",xj),Dj=new Q("subscription-subscribe-loading",vj),Ej=new Q("subscription-subscribe-loaded",vj),Fj=new Q("subscription-subscribe-success",yj),Gj=new Q("subscription-subscribe-external",xj),Hj=new Q("subscription-unsubscribe",zj),Ij=new Q("subscription-unsubscirbe-loading",vj),Jj=new Q("subscription-unsubscribe-loaded",vj),Kj=new Q("subscription-unsubscribe-success",vj),Lj=
new Q("subscription-external-unsubscribe",zj),Mj=new Q("subscription-enable-ypc",vj),Nj=new Q("subscription-disable-ypc",vj),Oj=new Q("subscription-prefs",wj),Pj=new Q("subscription-prefs-success",wj),Qj=new Q("subscription-prefs-failure",wj);function Rj(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Nd(c,"mode",b));b=Nd("/signin?context=popup","next",c);b=Nd(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0))c=qc("LOGGED_IN",function(b){sc(H("LOGGED_IN_PUBSUB_KEY",void 0));fc("LOGGED_IN",!0);a(b)}),fc("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-375)/2,(screen.height-440)/2)}
q("yt.pubsub.publish",tc,void 0);function Sj(){var a=H("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!H("SESSION_INDEX")&&!H("LOGGED_IN"))}
;function Tj(){var a=Re();return a?a:null}
;function Uj(a,b){(a=ze(a))&&a.style&&(a.style.display=b?"":"none",qe(a,"hid",!b))}
function Vj(a){B(arguments,function(a){!da(a)||a instanceof Element?Uj(a,!0):B(a,function(a){Vj(a)})})}
function Wj(a){B(arguments,function(a){!da(a)||a instanceof Element?Uj(a,!1):B(a,function(a){Wj(a)})})}
;var Xj={},Yj="ontouchstart"in document;function Zj(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Oe(c,function(a){return ne(a,b)},!0,d)}
function ak(a){var b="mouseover"==a.type&&"mouseenter"in Xj||"mouseout"==a.type&&"mouseleave"in Xj,c=a.type in Xj||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Xj[b],d;for(d in c.ha){var e=Zj(b,d,a.target);e&&!Oe(a.relatedTarget,function(a){return a==e},!0)&&c.A(d,e,b,a)}}if(b=Xj[a.type])for(d in b.ha)(e=Zj(a.type,d,a.target))&&b.A(d,e,a.type,a)}}
M(document,"blur",ak,!0);M(document,"change",ak,!0);M(document,"click",ak);M(document,"focus",ak,!0);M(document,"mouseover",ak);M(document,"mouseout",ak);M(document,"mousedown",ak);M(document,"keydown",ak);M(document,"keyup",ak);M(document,"keypress",ak);M(document,"cut",ak);M(document,"paste",ak);Yj&&(M(document,"touchstart",ak),M(document,"touchend",ak),M(document,"touchcancel",ak));function bk(a){this.j=a;this.g={};this.yb=[];this.i=[]}
function S(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
bk.prototype.register=u;bk.prototype.unregister=function(){sc(this.yb);this.yb.length=0;wi(this.i);this.i.length=0};
bk.prototype.init=t;bk.prototype.dispose=t;function ck(a,b,c){a.i.push(vi(b,c,a))}
function dk(a,b,c){var d=S(a,void 0),e=x(c,a);b in Xj||(Xj[b]=new G);Xj[b].subscribe(d,e);a.g[c]=e}
function ek(a,b,c){if(b in Xj){var d=Xj[b];d.unsubscribe(S(a,void 0),a.g[c]);0>=d.W()&&(d.dispose(),delete Xj[b])}delete a.g[c]}
function fk(a,b){Hb(a,"tooltip-text",b)}
;function gk(){bk.call(this,"tooltip");this.b=0;this.f={}}
z(gk,bk);ba(gk);g=gk.prototype;g.register=function(){dk(this,"mouseover",this.vb);dk(this,"mouseout",this.Ia);dk(this,"focus",this.mc);dk(this,"blur",this.hc);dk(this,"click",this.Ia);dk(this,"touchstart",this.Qc);dk(this,"touchend",this.Cb);dk(this,"touchcancel",this.Cb)};
g.unregister=function(){ek(this,"mouseover",this.vb);ek(this,"mouseout",this.Ia);ek(this,"focus",this.mc);ek(this,"blur",this.hc);ek(this,"click",this.Ia);ek(this,"touchstart",this.Qc);ek(this,"touchend",this.Cb);ek(this,"touchcancel",this.Cb);this.dispose();gk.C.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ia(this.f[a]);this.f={}};
g.vb=function(a){if(!(this.b&&1E3>y()-this.b)){var b=parseInt(E(a,"tooltip-hide-timer"),10);b&&(Jb(a,"tooltip-hide-timer"),J(b));var b=x(function(){hk(this,a);Jb(a,"tooltip-show-timer")},this),c=parseInt(E(a,"tooltip-show-delay"),10)||0,b=I(b,c);
Hb(a,"tooltip-show-timer",b.toString());a.title&&(fk(a,ik(a)),a.title="");b=ha(a).toString();this.f[b]=a}};
g.Ia=function(a){var b=parseInt(E(a,"tooltip-show-timer"),10);b&&(J(b),Jb(a,"tooltip-show-timer"));b=x(function(){if(a){var b=ze(jk(this,a));b&&(kk(b),b&&b.parentNode&&b.parentNode.removeChild(b),Jb(a,"content-id"));(b=ze(jk(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Jb(a,"tooltip-hide-timer")},this);
b=I(b,50);Hb(a,"tooltip-hide-timer",b.toString());if(b=E(a,"tooltip-text"))a.title=b;b=ha(a).toString();delete this.f[b]};
g.mc=function(a){this.b=0;this.vb(a)};
g.hc=function(a){this.b=0;this.Ia(a)};
g.Qc=function(a,b,c){c.changedTouches&&(this.b=0,a=Zj(b,S(this),c.changedTouches[0].target),this.vb(a))};
g.Cb=function(a,b,c){c.changedTouches&&(this.b=y(),a=Zj(b,S(this),c.changedTouches[0].target),this.Ia(a))};
function lk(a,b){fk(a,b);a=E(a,"content-id");(a=ze(a))&&He(a,b)}
function ik(a){return E(a,"tooltip-text")||a.title}
function hk(a,b){if(b){var c=ik(b);if(c){var d=ze(jk(a,b));if(!d){d=document.createElement("div");d.id=jk(a,b);d.className=S(a,"tip");var e=document.createElement("div");e.className=S(a,"tip-body");var f=document.createElement("div");f.className=S(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=S(a,"tip-content");var k=mk(a,b),m=jk(a,b,"content");h.id=m;Hb(b,"content-id",m);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var n=
Ke(b),m=jk(a,b,"arialabel"),f=document.createElement("div");oe(f,S(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;He(f,n);b.setAttribute("aria-labelledby",m);m=Tj()||document.body;m.appendChild(f);m.appendChild(d);lk(b,c);(c=parseInt(E(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",oe(h,S(a,"normal-wrap")));h=ne(b,S(a,"reverse"));nk(a,b,d,e,k,h)||nk(a,b,d,e,k,!h);var A=S(a,"tip-visible");
I(function(){oe(d,A)},0)}}}}
function nk(a,b,c,d,e,f){qe(c,S(a,"tip-reverse"),f);var h=0;f&&(h=1);a=gg(b);f=new se((a.width-10)/2,f?a.height:0);var k=ye(b),m=new se(0,0),n;n=k?ye(k):document;n=!K||qd(9)||De(we(n).b)?n.documentElement:n.body;b!=n&&(n=eg(b),k=Ce(we(k).b),m.J=n.left+k.J,m.K=n.top+k.K);f=new se(m.J+f.J,m.K+f.K);f=f.clone();m=(h&8&&"rtl"==dg(c,"direction")?h^4:h)&-9;h=gg(c);k=h.clone();n=f.clone();k=k.clone();0!=m&&(m&4?n.J-=k.width+0:m&2&&(n.J-=k.width/2),m&1&&(n.K-=k.height+0));f=new bg(0,0,0,0);f.left=n.J;f.top=
n.K;f.width=k.width;f.height=k.height;k=new se(f.left,f.top);k instanceof se?(m=k.J,k=k.K):(m=k,k=void 0);c.style.left=fg(m,!1);c.style.top=fg(k,!1);k=new je(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,m=De(we(ye(c)).b),!K||pd("10")||m&&pd("8"))f=c.style,gd?f.MozBoxSizing="border-box":hd?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,m){if(K){m=jg(c,"paddingLeft");k=jg(c,
"paddingRight");n=jg(c,"paddingTop");var A=jg(c,"paddingBottom"),m=new ag(n,k,A,m)}else m=cg(c,"paddingLeft"),k=cg(c,"paddingRight"),n=cg(c,"paddingTop"),A=cg(c,"paddingBottom"),m=new ag(parseFloat(n),parseFloat(k),parseFloat(A),parseFloat(m));if(K&&!qd(9)){k=lg(c,"borderLeft");n=lg(c,"borderRight");var A=lg(c,"borderTop"),ib=lg(c,"borderBottom"),k=new ag(A,n,ib,k)}else k=cg(c,"borderLeftWidth"),n=cg(c,"borderRightWidth"),A=cg(c,"borderTopWidth"),ib=cg(c,"borderBottomWidth"),k=new ag(parseFloat(A),
parseFloat(n),parseFloat(ib),parseFloat(k));f.pixelWidth=h.width-k.left-m.left-m.right-k.right;f.pixelHeight=h.height-k.top-m.top-m.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=De(h)?h.documentElement:h.body;f=new je(h.clientWidth,h.clientHeight);1==c.nodeType?(c=eg(c),k=new se(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new se(c.clientX,c.clientY));c=gg(d);n=Math.floor(c.width/2);h=!!(f.height<k.K+a.height);a=!!(k.K<a.height);m=!!(k.J<n);f=!!(f.width<
k.J+n);k=(c.width+3)/-2- -5;b=E(b,"force-tooltip-direction");if("left"==b||m)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function jk(a,b,c){a=S(a);var d=b.__yt_uid_key;d||(d=Pe(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function mk(a,b){var c=null;id&&ne(b,S(a,"masked"))&&((c=ze("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Vj(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=S(a,"tip-mask")));return c}
function kk(a){var b=ze("yt-uix-tooltip-shared-mask"),c=b&&Oe(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Wj(b),document.body.appendChild(b))}
;function ok(){bk.call(this,"subscription-button")}
z(ok,bk);ba(ok);ok.prototype.register=function(){dk(this,"click",this.Ib);ck(this,Dj,this.xc);ck(this,Ej,this.wc);ck(this,Fj,this.be);ck(this,Ij,this.xc);ck(this,Jj,this.wc);ck(this,Kj,this.he);ck(this,Mj,this.Od);ck(this,Nj,this.Nd)};
ok.prototype.unregister=function(){ek(this,"click",this.Ib);ok.C.unregister.call(this)};
var Ne={$b:"hover-enabled",$c:"yt-uix-button-subscribe",ad:"yt-uix-button-subscribed",Re:"ypc-enabled",bd:"yt-uix-button-subscription-container",cd:"yt-subscription-button-disabled-mask-container"},pk={Se:"channel-external-id",dd:"subscriber-count-show-when-subscribed",ed:"subscriber-count-tooltip",fd:"subscriber-count-title",Ue:"href",ac:"is-subscribed",We:"parent-url",Ye:"clicktracking",gd:"style-type",bc:"subscription-id",af:"target",jd:"ypc-enabled"};g=ok.prototype;
g.Ib=function(a){var b=E(a,"href"),c=Sj();if(b)a=E(a,"target")||"_self",window.open(b,a);else if(c){var b=E(a,"channel-external-id"),c=E(a,"clicktracking"),d;if(E(a,"ypc-enabled")){d=E(a,"ypc-item-type");var e=E(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=E(a,"parent-url");if(E(a,"is-subscribed")){var f=E(a,"subscription-id");R(Hj,new zj(b,f,d,a,c,e))}else R(Cj,new xj(b,d,c,e))}else qk(this,a)};
g.xc=function(a){this.Oa(a.b,this.Nc,!0)};
g.wc=function(a){this.Oa(a.b,this.Nc,!1)};
g.be=function(a){this.Oa(a.b,this.Oc,!0,a.subscriptionId)};
g.he=function(a){this.Oa(a.b,this.Oc,!1)};
g.Od=function(a){this.Oa(a.b,this.qd)};
g.Nd=function(a){this.Oa(a.b,this.pd)};
g.Oc=function(a,b,c){b?(Hb(a,pk.ac,"true"),c&&Hb(a,pk.bc,c)):(Jb(a,pk.ac),Jb(a,pk.bc));rk(a)};
g.Nc=function(a,b){var c;c=Me(a);qe(c,Ne.cd,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function rk(a){var b=E(a,pk.gd),c=!!E(a,"is-subscribed"),b="-"+b,d=Ne.ad+b;qe(a,Ne.$c+b,!c);qe(a,d,c);E(a,pk.ed)&&!E(a,pk.dd)&&(b=S(gk.getInstance()),qe(a,b,!c),a.title=c?"":E(a,pk.fd));c?I(function(){oe(a,Ne.$b)},1E3):pe(a,Ne.$b)}
g.qd=function(a){var b=!!E(a,"ypc-item-type"),c=!!E(a,"ypc-item-id");!E(a,"ypc-enabled")&&b&&c&&(oe(a,"ypc-enabled"),Hb(a,pk.jd,"true"))};
g.pd=function(a){E(a,"ypc-enabled")&&(pe(a,"ypc-enabled"),Jb(a,"ypc-enabled"))};
function sk(a,b){return Ja(Ae(S(a)),function(a){return b==E(a,"channel-external-id")},a)}
g.kd=function(a,b,c){var d=Wa(arguments,2);B(a,function(a){b.apply(this,Sa(a,d))},this)};
g.Oa=function(a,b,c){var d=sk(this,a);this.kd.apply(this,Sa([d],Wa(arguments,1)))};
function qk(a,b){a=x(function(a){a.discoverable_subscriptions&&fc("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Ib(b)},a);
Rj(a,"subscribe")}
;var tk=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",tk,void 0);var uk=window,vk=document,wk=uk.location;function xk(){}
var yk=/\[native code\]/;function T(a,b,c){return a[b]=a[b]||c}
function zk(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ak(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Bk(){var a;if((a=Object.create)&&yk.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ck=T(uk,"gapi",{});var U;U=T(uk,"___jsl",Bk());T(U,"I",0);T(U,"hel",10);function Dk(){var a=wk.href,b;if(U.dpo)b=U.h;else{b=U.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ek(a){var b=T(U,"PQ",[]);U.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Fk(a){return T(T(U,"H",Bk()),a,Bk())}
;var Gk=T(U,"perf",Bk());T(Gk,"g",Bk());var Hk=T(Gk,"i",Bk());T(Gk,"r",[]);Bk();Bk();function Ik(a,b,c){b&&0<b.length&&(b=Jk(b),c&&0<c.length&&(b+="___"+Jk(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=T(Hk,"_p",Bk()),T(b,c,Bk())[a]=(new Date).getTime(),b=Gk.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Jk(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Kk=Bk(),Lk=[];function Mk(a){throw Error("Bad hint"+(a?": "+a:""));}
;Lk.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?U[b]=T(U,b,[]).concat(c):T(U,b,c)}if(b=a.u)a=T(U,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Nk=/^(\/[a-zA-Z0-9_\-]+)+$/,Ok=/^[a-zA-Z0-9\-_\.,!]+$/,Pk=/^gapi\.loaded_[0-9]+$/,Qk=/^[a-zA-Z0-9,._-]+$/;function Rk(a,b,c,d){var e=a.split(";"),f=e.shift(),h=Kk[f],k=null;h?k=h(e,b,c,d):Mk("no hint processor for: "+f);k||Mk("failed to generate load url");b=k;c=b.match(Sk);(d=b.match(Tk))&&1===d.length&&Uk.test(b)&&c&&1===c.length||Mk("failed sanity: "+a);return k}
function Vk(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Wk(a);Pk.test(c)||Mk("invalid_callback");b=Xk(b);d=d&&d.length?Xk(d):null;return[encodeURIComponent(a.le).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ec?"/am="+e(a.ec):"",a.Kc?"/rs="+e(a.Kc):"",a.Zc?"/t="+e(a.Zc):"","/cb=",e(c)].join("")}
function Wk(a){"/"!==a.charAt(0)&&Mk("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Mk("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&h&&k&&(a[h]=a[h]||k)}b="/"+c.join("/");Nk.test(b)||Mk("invalid_prefix");c=Yk(a,"k",!0);d=Yk(a,"am");e=Yk(a,"rs");a=Yk(a,"t");return{le:b,version:c,
ec:d,Kc:e,Zc:a}}
function Xk(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Qk.test(e)&&b.push(e)}return b.join(",")}
function Yk(a,b,c){a=a[b];!a&&c&&Mk("missing: "+b);if(a){if(Ok.test(a))return a;Mk("invalid: "+b)}return null}
var Uk=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Tk=/\/cb=/g,Sk=/\/\//g;function Zk(){var a=Dk();if(!a)throw Error("Bad hint");return a}
Kk.m=function(a,b,c,d){(a=a[0])||Mk("missing_hint");return"https://apis.google.com"+Vk(a,b,c,d)};var $k=decodeURI("%73cript");function al(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>zk.call(b,e)&&c.push(e)}return c}
function bl(a){"loading"!=vk.readyState?cl(a):vk.write("<"+$k+' src="'+encodeURI(a)+'"></'+$k+">")}
function cl(a){var b=vk.createElement($k);b.setAttribute("src",a);b.async="true";(a=vk.getElementsByTagName($k)[0])?a.parentNode.insertBefore(b,a):(vk.head||vk.body||vk.documentElement).appendChild(b)}
function dl(a,b){var c=b&&b._c;if(c)for(var d=0;d<Lk.length;d++){var e=Lk[d][0],f=Lk[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function el(a,b,c){fl(function(){var c;c=b===Dk()?T(Ck,"_",Bk()):Bk();c=T(Fk(b),"_",c);a(c)},c)}
function gl(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);dl(a,c);b=a?a.split(":"):[];var d=c.h||Zk(),e=T(U,"ah",Bk());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var h=f.split("."),h=e[f]||e[h[1]&&"ns:"+h[0]||""]||d,k=a.length&&a[a.length-1]||null,m=k;k&&k.hint==h||(m={hint:h,features:[]},a.push(m));m.features.push(f)}var n=a.length;if(1<n){var A=c.callback;A&&(c.callback=function(){0==--n&&A()})}for(;b=a.shift();)hl(b.features,c,b.hint)}else hl(b||[],c,d)}
function hl(a,b,c){function d(a,b){if(ib)return 0;uk.clearTimeout(A);Zf.push.apply(Zf,Ia);var d=((Ck||{}).config||{}).update;d?d(f):f&&T(U,"cu",[]).push(f);if(b){Ik("me0",a,Yd);try{el(b,c,n)}finally{Ik("me1",a,Yd)}}return 1}
a=Ak(a)||[];var e=b.callback,f=b.config,h=b.timeout,k=b.ontimeout,m=b.onerror,n=void 0;"function"==typeof m&&(n=m);var A=null,ib=!1;if(h&&!k||!h&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=T(Fk(c),"r",[]).sort(),Zf=T(Fk(c),"L",[]).sort(),Yd=[].concat(m);0<h&&(A=uk.setTimeout(function(){ib=!0;k()},h));
var Ia=al(a,Zf);if(Ia.length){var Ia=al(a,m),pb=T(U,"CP",[]),qb=pb.length;pb[qb]=function(a){function b(){var a=pb[qb+1];a&&a()}
function c(b){pb[qb]=null;d(Ia,a)&&Ek(function(){e&&e();b()})}
if(!a)return 0;Ik("ml1",Ia,Yd);0<qb&&pb[qb-1]?pb[qb]=function(){c(b)}:c(b)};
if(Ia.length){var ah="loaded_"+U.I++;Ck[ah]=function(a){pb[qb](a);Ck[ah]=null};
a=Rk(c,Ia,"gapi."+ah,m);m.push.apply(m,Ia);Ik("ml0",Ia,Yd);b.sync||uk.___gapisync?bl(a):cl(a)}else pb[qb](xk)}else d(Ia)&&e&&e()}
;function fl(a,b){if(U.hee&&0<U.hel)try{return a()}catch(c){b&&b(c),U.hel--,gl("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;Ck.load=function(a,b){return fl(function(){return gl(a,b)})};function il(a){this.b=a||Eh();jl||(jl=kl(this.b))}
var jl=null;function kl(a){return(new mh(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=fa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||mb(d,{_c:{jsl:{h:H("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||H("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],h=f.split("?",2);e=Pd(1<h.length?h[1]:h[0])}else e={};var k=e.gapi_jsh;k&&mb(d,{_c:{jsl:{h:k}}})}gl("client",d)}catch(m){ic(m)}})).then(function(){})}
il.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;pa(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.fc;pa(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",H("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
il.prototype.f=function(){return{context:Fh(this.b)}};
il.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=I(function(){e||(e=!0,c.ka&&c.ka())},c.timeout));
ll(this,a,b,function(a){if(!e)if(e=!0,d&&J(d),a)c.R&&c.R(a);else if(c.onError)c.onError()})};
function ll(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":H("VISITOR_DATA")},method:"POST",body:L(c)},f=x(a.i,a);jl.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function ml(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function nl(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;A=n=0}
function b(a){for(var b=h,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],m=e[4],n,A,c=0;80>c;c++)40>c?20>c?(n=k^d&(f^k),A=1518500249):(n=d^f^k,A=1859775393):60>c?(n=d&f|k&(d|f),A=2400959708):(n=d^f^k,A=3395469782),n=((a<<5|a>>>27)&4294967295)+n+m+A+b[c]&4294967295,m=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,h=a.length;e<h;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64;for(;d<c;)if(f[n++]=a[d++],A++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64}
function d(){var a=[],d=8*A;56>n?c(k,56-n):c(k,64-(n-56));for(var h=63;56<=h;h--)f[h]=d&255,d>>>=8;b(f);for(h=d=0;5>h;h++)for(var m=24;0<=m;m-=8)a[d++]=e[h]>>m&255;return a}
for(var e=[],f=[],h=[],k=[128],m=1;64>m;++m)k[m]=0;var n,A;a();return{reset:a,update:c,digest:d,od:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function ol(a,b,c){var d=[],e=[];if(1==(v(c)?2:1))return e=[b,a],B(d,function(a){e.push(a)}),pl(e.join(" "));
var f=[],h=[];B(c,function(a){h.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(a){e.push(a)});
a=pl(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function pl(a){var b=nl();b.update(a);return b.od().toLowerCase()}
;function ql(){this.b=Eh()}
ql.prototype.f=function(){return{context:Fh(this.b)}};
ql.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":H("VISITOR_DATA")},O:b,Ic:"JSON",ka:c.ka,R:c.R,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=ml(String(l.location.href)),e=l.__OVERRIDE_SID;null==e&&(e=(new Pf(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?l.__SAPISID:l.__APISID,null==d&&(d=(new Pf(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(l.location.href);
c=f&&d&&e?[e,ol(ml(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=H("SESSION_INDEX",0));a="//"+this.b.Ee+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey;b.method="POST";b.O||(b.O={});Xd(a,b)};function Kf(){return Dd("enable_youtubei_innertube")?ql:il}
;function rl(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function sl(a,b,c){w(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return tl(a)}
function tl(a,b,c){if(ga(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ul(a,b,c,d){if(ga(a)&&!v(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};w(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function vl(a){var b=a.video_id||a.videoId;if(w(b)){var c=pf("yt-player-two-stage-token")||{},d=pf("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];N("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function wl(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
function xl(a){return document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var yl=xl("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",zl=xl("loadCastFramework");function Al(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Bl=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Cl=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Dl=wl()?Cl.concat(Bl):Bl.concat(Cl);function El(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Fl(a){if(a>=Dl.length)Gl();else{var b=Dl[a],c="chrome-extension://"+b+yl;0<=Bl.indexOf(b)?El(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Hl(c,Gl)):Fl(a+1)}):Hl(c,function(){Fl(a+1)})}}
function Hl(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function Gl(){var a=Al();a&&a(!1,"No cast extension found")}
function Il(){if(zl){var a=2,b=Al(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Hl("//www.gstatic.com/cast/sdk/libs/sender/0.1/cast_framework.js",Gl,c)}}
function Jl(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){Il();a({command:"cast.sender.init"});return}}window.chrome?(Il(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=wl()?"50":"",Hl("//www.gstatic.com/eureka/clank"+a+yl,Gl)):Fl(0)):Gl()}
;var Kl=y(),Ll=null,Ml=Array(50),Nl=-1,Ol=!1;function Pl(){var a=Ql;Rl();Ll.push(a);Sl(Ll)}
function Tl(a,b){Rl();var c=Ll,d=Ul(a,String(b));0==c.length?Vl(d):(Sl(c),B(c,function(a){a(d)}))}
function Rl(){Ll||(Ll=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Ll,void 0))}
function Vl(a){var b=(Nl+1)%50;Nl=b;Ml[b]=a;Ol||(Ol=49==b)}
function Sl(a){var b=Ml;if(b[0]){var c=Nl,d=Ol?c:-1;do{var d=(d+1)%50,e=b[d];B(a,function(a){a(e)})}while(d!=c);
Ml=Array(50);Nl=-1;Ol=!1}}
function Ul(a,b){var c=(y()-Kl)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Wl(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Xl(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Yl(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Zl(a){return new Wl(a)}
function $l(a){return v(a)?Ka(a,Zl):[]}
function am(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function bm(a){return v(a)?"["+Ka(a,am).join(",")+"]":"null"}
;var cm={Qe:"atp",$e:"ska",Xe:"que",Ve:"mus",Ze:"sus"};function dm(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(Gd(4,a))||null||"";b&&(this.i=":"+b);this.g=Fd(Gd(3,a))||"";a=nb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ea(a,"10.0")&&(this.f=!1))}
function em(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Od(e+b,c||{})}
function fm(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,R:ma(a.o,d,!0),onError:ma(a.j,e),ka:ma(a.l,e)};c&&(a.O=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Xd(b,a)}
dm.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
dm.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
dm.prototype.l=function(a){a(Error("request timed out"))};function gm(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function hm(a){return Ka(a,function(a){return{key:a.id,name:a.name}})}
function im(a,b){return Na(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function jm(a,b){return Na(a,function(a){return Xl(a,b)})}
;function V(){F.call(this);this.o=new G;Zb(this,this.o)}
z(V,F);V.prototype.subscribe=function(a,b,c){return this.D()?0:this.o.subscribe(a,b,c)};
V.prototype.unsubscribe=function(a,b,c){return this.D()?!1:this.o.unsubscribe(a,b,c)};
V.prototype.na=function(a){return this.D()?!1:this.o.na(a)};
V.prototype.A=function(a,b){return this.D()?!1:this.o.A.apply(this.o,arguments)};function km(a){V.call(this);this.l=a;this.screens=[]}
z(km,V);g=km.prototype;g.ea=function(){return this.screens};
g.contains=function(a){return!!im(this.screens,a)};
g.get=function(a){return a?jm(this.screens,a):null};
g.start=u;g.mb=u;g.remove=u;g.kb=u;function lm(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0}
function mm(a,b){var c=a.screens.length!=b.length;a.screens=Ja(a.screens,function(a){return!!im(b,a)});
for(var d=0,e=b.length;d<e;d++)c=lm(a,b[d])||c;return c}
function nm(a,b){var c=a.screens.length;a.screens=Ja(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
g.info=function(a){Tl(this.l,a)};function om(a,b,c,d){V.call(this);this.B=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
z(om,V);var pm=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=om.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.Hc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(J(this.f),this.f=NaN)};
g.w=function(){this.stop();om.C.w.call(this)};
g.Hc=function(){this.f=NaN;this.b=Xd(em(this.B,"/pairing/get_screen"),{method:"POST",O:{pairing_code:this.l},timeout:5E3,R:x(this.He,this),onError:x(this.Ge,this),ka:x(this.Ie,this)})};
g.He=function(a,b){this.b=null;a=b.screen||{};a.dialId=this.i;a.name=this.j;this.A("pairingComplete",new Wl(a))};
g.Ge=function(a){this.b=null;a.status&&404==a.status?this.g>=pm.length?this.A("pairingFailed",Error("DIAL polling timed out")):(a=pm[this.g],this.f=I(x(this.Hc,this),a),this.g++):this.A("pairingFailed",Error("Server error "+a.status))};
g.Ie=function(){this.b=null;this.A("pairingFailed",Error("Server not responding"))};function qm(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Xc;this.experiments=new Xc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Yc(this.capabilities,Ja(b.split(","),ma(ab,cm)));a=a.experiments||"";this.experiments.clear();Yc(this.experiments,
a.split(","))}}
qm.prototype.equals=function(a){return a?this.id==a.id:!1};var rm;function sm(){var a=tm(),b=um();if(vm()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Xa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Va(c,-(d+1),0,b)}a=wm(a);if(0==a.length)try{Sf.remove("remote_sid","/","youtube.com")}catch(m){}else try{Tf("remote_sid",a.join(","),-1)}catch(m){}}
function tm(){var a=pf("yt-remote-connected-devices")||[];a.sort(Xa);return a}
function wm(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ka(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function xm(a){N("yt-remote-connected-devices",a,86400)}
function um(){if(ym)return ym;var a=pf("yt-remote-device-id");a||(a=gm(),N("yt-remote-device-id",a,31536E3));for(var b=tm(),c=1,d=a;C(b,d);)c++,d=a+"#"+c;return ym=d}
function zm(){return pf("yt-remote-session-browser-channel")}
function vm(){return pf("yt-remote-session-screen-id")}
function Am(a){5<a.length&&(a=a.slice(a.length-5));var b=Ka(Bm(),function(a){return a.loungeToken}),c=Ka(a,function(a){return a.loungeToken});
Ma(c,function(a){return!C(b,a)})&&Cm();
N("yt-remote-local-screens",a,31536E3)}
function Bm(){return pf("yt-remote-local-screens")||[]}
function Cm(){N("yt-remote-lounge-token-expiration",!0,86400)}
function Dm(a,b){N("yt-remote-session-browser-channel",a);N("yt-remote-session-screen-id",b);a=tm();b=um();C(a,b)||a.push(b);xm(a);sm()}
function Em(a){a||(qf("yt-remote-session-screen-id"),qf("yt-remote-session-video-id"));sm();a=tm();Qa(a,um());xm(a)}
function Fm(){if(!rm){var a;a=new af;(a=a.isAvailable()?a:null)&&(rm=new cf(a))}return rm?!!rm.get("yt-remote-use-staging-server"):!1}
var ym="";function Gm(a){km.call(this,"LocalScreenService");this.f=a;this.b=NaN;Hm(this);this.info("Initializing with "+bm(this.screens))}
z(Gm,km);g=Gm.prototype;g.start=function(){Hm(this)&&this.A("screenChange");!pf("yt-remote-lounge-token-expiration")&&Im(this);J(this.b);this.b=I(x(this.start,this),1E4)};
g.mb=function(a,b){Hm(this);lm(this,a);Jm(this,!1);this.A("screenChange");b(a);a.token||Im(this)};
g.remove=function(a,b){var c=Hm(this);nm(this,a)&&(Jm(this,!1),c=!0);b(a);c&&this.A("screenChange")};
g.kb=function(a,b,c,d){var e=Hm(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Jm(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.A("screenChange")};
g.w=function(){J(this.b);Gm.C.w.call(this)};
function Im(a){if(a.screens.length){var b=Ka(a.screens,function(a){return a.id}),c=em(a.f,"/pairing/get_lounge_token_batch");
fm(a.f,c,{screen_ids:b.join(",")},x(a.zd,a),x(a.yd,a))}}
g.zd=function(a){Hm(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Jm(this,!b);b&&Tl(this.l,"Missed "+b+" lounge tokens.")};
g.yd=function(a){Tl(this.l,"Requesting lounge tokens failed: "+a)};
function Hm(a){var b=$l(Bm()),b=Ja(b,function(a){return!a.uuid});
return mm(a,b)}
function Jm(a,b){Am(Ka(a.screens,Yl));b&&Cm()}
;function Km(a,b){V.call(this);this.l=b;b=(b=pf("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.l(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=C(b,h)}this.b=c;this.j=a;this.g=this.i=NaN;this.f=null;Lm("Initialized with "+L(this.b))}
z(Km,V);g=Km.prototype;g.start=function(){var a=parseInt(pf("yt-remote-fast-check-period")||"0",10);(this.i=y()-144E5<a?0:a)?Mm(this):(this.i=y()+3E5,N("yt-remote-fast-check-period",this.i),this.Vb())};
g.isEmpty=function(){return gb(this.b)};
g.update=function(){Lm("Updating availability on schedule.");var a=this.l(),b=Za(this.b,function(b,d){return b&&!!jm(a,d)},this);
Nm(this,b)};
function Om(a,b,c){var d=em(a.j,"/pairing/get_screen_availability");fm(a.j,d,{lounge_token:b.token},x(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),x(function(){c(!1)},a))}
g.w=function(){J(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Km.C.w.call(this)};
function Nm(a,b){var c;a:if($a(b)!=$a(a.b))c=!1;else{c=db(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(Lm("Updated online screens: "+L(a.b)),a.b=b,a.A("screenChange"));Pm(a)}
function Mm(a){isNaN(a.g)||J(a.g);a.g=I(x(a.Vb,a),0<a.i&&a.i<y()?2E4:1E4)}
g.Vb=function(){J(this.g);this.g=NaN;this.f&&this.f.abort();var a=Qm(this);if($a(a)){var b=em(this.j,"/pairing/get_screen_availability");this.f=fm(this.j,b,{lounge_token:db(a).join(",")},x(this.$d,this,a),x(this.Zd,this))}else Nm(this,{}),Mm(this)};
g.$d=function(a,b){this.f=null;var c;a:{c=db(Qm(this));var d=db(a);if(da(c)&&da(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){b=b.screens||[];c={};d=0;for(e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;Nm(this,c);Mm(this)}else this.N("Changing Screen set during request."),this.Vb()};
g.Zd=function(a){this.N("Screen availability failed: "+a);this.f=null;Mm(this)};
function Lm(a){Tl("OnlineScreenService",a)}
g.N=function(a){Tl("OnlineScreenService",a)};
function Qm(a){var b={};B(a.l(),function(a){a.token?b[a.token]=a.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function Pm(a){a=db(Za(a.b,function(a){return a}));
a.sort(Xa);a.length?N("yt-remote-online-screen-ids",a.join(","),60):qf("yt-remote-online-screen-ids")}
;function W(a){km.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};Rm(this)}
z(W,km);g=W.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.A("screenChange"),this.b.isEmpty()||this.A("onlineScreenChange"))};
g.mb=function(a,b,c){this.f.mb(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.kb=function(a,b,c,d){this.f.contains(a)?this.f.kb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Tl(this.l,a),d(Error(a)))};
g.ea=function(a){return a?this.screens:Sa(this.screens,Ja(this.g,function(a){return!this.contains(a)},this))};
g.Sc=function(){return Ja(this.ea(!0),function(a){return!!this.b.b[a.id]},this)};
function Sm(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.ea();if(h=(c?jm(h,c):null)||jm(h,b)){h.uuid=b;var k=Tm(a,h);Om(a.b,k,function(a){e(a?k:null)})}else c?Um(a,c,x(function(a){var f=Tm(this,new Wl({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Om(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Tc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new om(this.j,a,b,c);f.subscribe("pairingComplete",x(function(a){ac(f);d(Tm(this,a))},this));
f.subscribe("pairingFailed",function(a){ac(f);e(a)});
f.start();return x(f.stop,f)};
function Vm(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.Ke=function(a,b,c,d){Xd(em(this.j,"/pairing/get_screen"),{method:"POST",O:{pairing_code:a},timeout:5E3,R:x(function(a,d){a=new Wl(d.screen||{});if(!a.name||Vm(this,a.name)){a:{d=a.name;for(var e=2,f=b(d,e);Vm(this,f);){e++;if(20<e)break a;f=b(d,e)}d=f}a.name=d}c(Tm(this,a))},this),
onError:x(function(a){d(Error("pairing request failed: "+a.status))},this),
ka:x(function(){d(Error("pairing request timed out."))},this)})};
g.w=function(){ac(this.f);ac(this.b);W.C.w.call(this)};
function Um(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={O:{screen_ids:b},method:"POST",context:a,R:function(a,e){a=e&&e.screens||[];a[0]&&a[0].screenId==b?c(a[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Xd(em(a.j,"/pairing/get_lounge_token_batch"),e)}
function Wm(a){a.screens=a.f.ea();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+bm(a.screens))}
g.Ad=function(){Wm(this);this.A("screenChange");this.b.update()};
function Rm(a){Xm(a);a.f=new Gm(a.j);a.f.subscribe("screenChange",x(a.Ad,a));Wm(a);a.g=$l(pf("yt-remote-automatic-screen-cache")||[]);Xm(a);a.info("Initializing automatic screens: "+bm(a.g));a.b=new Km(a.j,x(a.ea,a,!0));a.b.subscribe("screenChange",x(function(){this.A("onlineScreenChange")},a))}
function Tm(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=jm(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),N("yt-remote-automatic-screen-cache",Ka(a.g,Yl)));Xm(a);a.i[b.uuid]=b.id;N("yt-remote-device-id-map",a.i,31536E3);return b}
function Xm(a){a.i=pf("yt-remote-device-id-map")||{}}
W.prototype.dispose=W.prototype.dispose;function Ym(a,b,c){V.call(this);this.U=c;this.H=a;this.b=b;this.g=null}
z(Ym,V);g=Ym.prototype;g.xb=function(a){this.g=a;this.A("sessionScreen",this.g)};
g.ba=function(a){this.D()||(a&&Zm(this,""+a),this.g=null,this.A("sessionScreen",null))};
g.info=function(a){Tl(this.U,a)};
function Zm(a,b){Tl(a.U,b)}
g.Ha=u;g.Bb=u;g.Vc=function(){return null};
g.stop=u;g.Wb=function(a){var b=this.b;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,x(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),x(function(){Zm(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.w=function(){this.Wb("");Ym.C.w.call(this)};function $m(a,b){Ym.call(this,a,b,"CastSession");this.f=null;this.i=0;this.l=x(this.Le,this);this.j=x(this.ke,this);this.i=I(x(function(){an(this,null)},this),12E4)}
z($m,Ym);g=$m.prototype;g.Bb=function(a){if(this.f){if(this.f==a)return;Zm(this,"Overriding cast sesison with new session object");this.f.removeUpdateListener(this.l);this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.f=a;this.f.addUpdateListener(this.l);this.f.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);bn(this)};
g.Ha=function(a){this.info("launchWithParams no-op for Cast: "+L(a))};
g.stop=function(){this.f?this.f.stop(x(function(){this.ba()},this),x(function(){this.ba(Error("Failed to stop receiver app."))},this)):this.ba(Error("Stopping cast device witout session."))};
g.Wb=t;g.w=function(){this.info("disposeInternal");J(this.i);this.i=0;this.f&&(this.f.removeUpdateListener(this.l),this.f.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.f=null;$m.C.w.call(this)};
function bn(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+L(void 0));var b={type:"getMdxSessionStatus"};a.f?a.f.sendMessage("urn:x-cast:com.google.youtube.mdx",b,t,x(function(){Zm(this,"Failed to send message: getMdxSessionStatus.")},a)):Zm(a,"Sending yt message without session: "+L(b))}
g.ke=function(a,b){if(!this.D())if(b)if(b=wd(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+L(b)),a){case "mdxSessionStatus":an(this,b.screenId);break;default:Zm(this,"Unknown youtube message: "+a)}else Zm(this,"Unable to parse message.");else Zm(this,"No data in message.")};
function an(a,b){J(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=x(a.xb,a),d=x(a.ba,a);a.oc(b,c,d,5)}}else a.ba(Error("Waiting for session status timed out."))}
g.oc=function(a,b,c,d){Sm(this.H,this.b.label,a,this.b.friendlyName,x(function(e){e?b(e):0<=d?(Zm(this,"Screen "+a+" appears to be offline. "+d+" retries left."),I(x(this.oc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Vc=function(){return this.f};
g.Le=function(a){this.D()||a||(Zm(this,"Cast session died."),this.ba())};function cn(a,b){Ym.call(this,a,b,"DialSession");this.i=this.G=null;this.L="";this.j=null;this.B=t;this.l=NaN;this.P=x(this.Oe,this);this.f=t}
z(cn,Ym);g=cn.prototype;g.Bb=function(a){this.i=a;this.i.addUpdateListener(this.P)};
g.Ha=function(a){this.j=a;this.B()};
g.stop=function(){this.f();this.f=t;J(this.l);this.i?this.i.stop(x(this.ba,this,null),x(this.ba,this,"Failed to stop DIAL device.")):this.ba()};
g.w=function(){this.f();this.f=t;J(this.l);this.i&&this.i.removeUpdateListener(this.P);this.i=null;cn.C.w.call(this)};
function dn(a){a.f=a.H.Tc(a.L,a.b.label,a.b.friendlyName,x(function(a){this.f=t;this.xb(a)},a),x(function(a){this.f=t;
this.ba(a)},a))}
g.Oe=function(a){this.D()||a||(Zm(this,"DIAL session died."),this.f(),this.f=t,this.ba())};
function en(a){var b={};b.pairingCode=a.L;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Fm()&&(b.env_useStageMdx=1);return Md(b)}
g.Sb=function(a){this.L=gm();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,en(this));a(b);dn(this)}else this.B=x(function(){J(this.l);this.B=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,en(this));a(b);dn(this)},this),this.l=I(x(function(){this.B()},this),100)};
g.Bd=function(a,b){Sm(this.H,this.G.receiver.label,a,this.b.friendlyName,x(function(a){a&&a.token?(this.xb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Sb(b)},this),x(function(a){Zm(this,"Failed to get DIAL screen: "+a);
this.Sb(b)},this))};function fn(a,b){Ym.call(this,a,b,"ManualSession");this.f=I(x(this.Ha,this,null),150)}
z(fn,Ym);fn.prototype.stop=function(){this.ba()};
fn.prototype.Bb=t;fn.prototype.Ha=function(){J(this.f);this.f=NaN;var a=jm(this.H.ea(),this.b.label);a?this.xb(a):this.ba(Error("No such screen"))};
fn.prototype.w=function(){J(this.f);this.f=NaN;fn.C.w.call(this)};function X(a){V.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=x(this.Xd,this)}
z(X,V);g=X.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,x(this.Bc,this),x(this.Yd,this),d,a);c.customDialLaunchCallback=x(this.Md,this);chrome.cast.initialize(c,x(function(){this.D()||(chrome.cast.addReceiverActionListener(this.i),Pl(),
this.f.subscribe("onlineScreenChange",x(this.Uc,this)),this.g=gn(this),chrome.cast.setCustomReceivers(this.g,t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)),this.A("yt-remote-cast2-availability-change",hn(this)),b(!0))},this),x(function(a){this.N("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ye=function(a,b){jn("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)jn("Unsetting old screen status: "+this.b.b.friendlyName),ac(this.b),this.b=null}if(a&&b){if(!this.b){c=jm(this.f.ea(),a);if(!c){jn("setConnectedScreenStatus: Unknown screen.");return}a=kn(this,c);a||(jn("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(a),chrome.cast.setCustomReceivers(this.g,
t,x(function(a){this.N("Failed to set initial custom receivers: "+L(a))},this)));
jn("setConnectedScreenStatus: new active receiver: "+a.friendlyName);ln(this,new fn(this.f,a),!0)}this.b.Wb(b)}else jn("setConnectedScreenStatus: no screen.")};
function kn(a,b){return b?Na(a.g,function(a){return Xl(b,a.label)},a):null}
g.ze=function(a){this.D()?this.N("Setting connection data on disposed cast v2"):this.b?this.b.Ha(a):this.N("Setting connection data without a session")};
g.Ne=function(){this.D()?this.N("Stopping session on disposed cast v2"):this.b?(this.b.stop(),ac(this.b),this.b=null):jn("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(x(this.Bc,this),x(this.ae,this))};
g.w=function(){this.f.unsubscribe("onlineScreenChange",x(this.Uc,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=Ql,b=r("yt.mdx.remote.debug.handlers_");Qa(b||[],a);ac(this.b);X.C.w.call(this)};
function jn(a){Tl("Controller",a)}
g.N=function(a){Tl("Controller",a)};
function Ql(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function hn(a){return a.j||!!a.g.length||!!a.b}
function ln(a,b,c){ac(a.b);(a.b=b)?(c?a.A("yt-remote-cast2-receiver-resumed",b.b):a.A("yt-remote-cast2-receiver-selected",b.b),b.subscribe("sessionScreen",x(a.Cc,a,b)),b.g?a.A("yt-remote-cast2-session-change",b.g):c&&a.b.Ha(null)):a.A("yt-remote-cast2-session-change",null)}
g.Cc=function(a,b){this.b==a&&(b||ln(this,null),this.A("yt-remote-cast2-session-change",b))};
g.Xd=function(a,b){if(!this.D())if(a)switch(jn("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.b.label!=a.label)jn("onReceiverAction_: Stopping active receiver: "+this.b.b.friendlyName),this.b.stop();else{jn("onReceiverAction_: Casting to active receiver.");this.b.g&&this.A("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:ln(this,new fn(this.f,a));break;case chrome.cast.ReceiverType.DIAL:ln(this,
new cn(this.f,a));break;case chrome.cast.ReceiverType.CAST:ln(this,new $m(this.f,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.b.label==a.label?this.b.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
g.Md=function(a){if(this.D())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.b:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return jn("Reselecting dial screen."),
this.A("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);ln(this,new cn(this.f,b))}b=this.b;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise(x(b.Bd,b,(b.G.extraData||{}).screenId||null)):new Promise(x(b.Sb,b))};
g.Bc=function(a){if(!this.D()){jn("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)jn("Got resumed cast session before resumed mdx connection."),ln(this,new $m(this.f,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.b,d=jm(this.f.ea(),c.label);d&&Xl(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(jn("onSessionEstablished_: manual to cast session change "+b.friendlyName),ac(this.b),this.b=new $m(this.f,b),this.b.subscribe("sessionScreen",x(this.Cc,this,this.b)),this.b.Ha(null));this.b.Bb(a)}}};
g.Me=function(){return this.b?this.b.Vc():null};
g.ae=function(a){this.D()||(this.N("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&ln(this,null))};
g.Yd=function(a){jn("Receiver availability updated: "+a);if(!this.D()){var b=hn(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;hn(this)!=b&&this.A("yt-remote-cast2-availability-change",hn(this))}};
function gn(a){var b=a.f.Sc(),c=a.b&&a.b.b;a=Ka(b,function(a){c&&Xl(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=kn(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new chrome.cast.Receiver(b,a.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Uc=function(){if(!this.D()){var a=hn(this);this.g=gn(this);jn("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,x(function(){this.N("Failed to set custom receivers.")},this));
var b=hn(this);b!=a&&this.A("yt-remote-cast2-availability-change",b)}};
X.prototype.setLaunchParams=X.prototype.ze;X.prototype.setConnectedScreenStatus=X.prototype.ye;X.prototype.stopSession=X.prototype.Ne;X.prototype.getCastSession=X.prototype.Me;X.prototype.requestSession=X.prototype.requestSession;X.prototype.init=X.prototype.init;X.prototype.dispose=X.prototype.dispose;function mn(a,b,c){nn()?pn(a)&&(qn(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?rn(b):(window.__onGCastApiAvailable=function(a,c){a?rn(b):(sn("Failed to load cast API: "+c),tn(!1),qn(!1),qf("yt-remote-cast-available"),qf("yt-remote-cast-receiver"),un(),b(!1))},c?xc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Jl())):on("Cannot initialize because not running Chrome")}
function un(){on("dispose");var a=vn();a&&a.dispose();wn=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);xn(!1);sc(yn);yn.length=0}
function zn(){return!!pf("yt-remote-cast-installed")}
function An(){var a=pf("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in l?za(a):Ba(a):a):a=null;return a}
function Bn(){on("clearCurrentReciever");qf("yt-remote-cast-receiver")}
function Cn(a,b){Dn()?vn().setConnectedScreenStatus(a,b):sn("setConnectedScreenStatus called before ready.")}
var wn=null;function nn(){var a=0<=nb.search(/\ (CrMo|Chrome|CriOS)\//);return xf||a}
function pn(a){var b=!1;if(!wn){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new X(a),c.subscribe("yt-remote-cast2-availability-change",function(a){N("yt-remote-cast-available",a);tc("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){on("onReceiverSelected: "+a.friendlyName);
N("yt-remote-cast-receiver",a);tc("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){on("onReceiverResumed: "+a.friendlyName);
N("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){on("onSessionChange: "+am(a));
a||qf("yt-remote-cast-receiver");tc("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
wn=c}on("cloudview.createSingleton_: "+b);return b}
function vn(){wn||(wn=r("yt.mdx.remote.cloudview.instance_"));return wn}
function rn(a){tn(!0);qn(!1);wn.init(!0,function(b){b?(xn(!0),tc("yt-remote-cast2-api-ready")):(sn("Failed to initialize cast API."),tn(!1),qf("yt-remote-cast-available"),qf("yt-remote-cast-receiver"),un());a(b)})}
function on(a){Tl("cloudview",a)}
function sn(a){Tl("cloudview",a)}
function tn(a){on("setCastInstalled_ "+a);N("yt-remote-cast-installed",a)}
function Dn(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function xn(a){on("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function qn(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var yn=[];function En(a,b){this.action=a;this.params=b||null}
;function Fn(){this.b=y()}
new Fn;Fn.prototype.set=function(a){this.b=a};
Fn.prototype.reset=function(){this.set(y())};
Fn.prototype.get=function(){return this.b};function Gn(a,b){this.f=new yd(a);this.b=b?wd:vd}
Gn.prototype.stringify=function(a){return xd(this.f,a)};
Gn.prototype.parse=function(a){return this.b(a)};function Hn(a,b){bh.call(this);this.f=a||1;this.b=b||l;this.i=x(this.Be,this);this.j=y()}
z(Hn,bh);g=Hn.prototype;g.enabled=!1;g.fa=null;g.Be=function(){if(this.enabled){var a=y()-this.j;0<a&&a<.8*this.f?this.fa=this.b.setTimeout(this.i,this.f-a):(this.fa&&(this.b.clearTimeout(this.fa),this.fa=null),ch(this,"tick"),this.enabled&&(this.fa=this.b.setTimeout(this.i,this.f),this.j=y()))}};
g.start=function(){this.enabled=!0;this.fa||(this.fa=this.b.setTimeout(this.i,this.f),this.j=y())};
g.stop=function(){this.enabled=!1;this.fa&&(this.b.clearTimeout(this.fa),this.fa=null)};
g.w=function(){Hn.C.w.call(this);this.stop();delete this.b};
function In(a,b,c){if(fa(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}
;function Jn(a,b,c){F.call(this);this.i=null!=c?x(a,c):a;this.g=b;this.f=x(this.ce,this);this.b=[]}
z(Jn,F);g=Jn.prototype;g.Ta=!1;g.hb=0;g.Ea=null;g.wd=function(a){this.b=arguments;this.Ea||this.hb?this.Ta=!0:Kn(this)};
g.stop=function(){this.Ea&&(l.clearTimeout(this.Ea),this.Ea=null,this.Ta=!1,this.b=[])};
g.pause=function(){this.hb++};
g.resume=function(){this.hb--;this.hb||!this.Ta||this.Ea||(this.Ta=!1,Kn(this))};
g.w=function(){Jn.C.w.call(this);this.stop()};
g.ce=function(){this.Ea=null;this.Ta&&!this.hb&&(this.Ta=!1,Kn(this))};
function Kn(a){a.Ea=In(a.f,a.g);a.i.apply(null,a.b)}
;function Ln(a){F.call(this);this.f=a;this.b={}}
z(Ln,F);var Mn=[];Ln.prototype.ub=function(a,b,c,d){v(b)||(b&&(Mn[0]=b.toString()),b=Mn);for(var e=0;e<b.length;e++){var f=Qg(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
Ln.prototype.Db=function(a,b,c,d,e){if(v(b))for(var f=0;f<b.length;f++)this.Db(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=Rg(c),d=!!d,b=a&&a[Eg]?Mg(a.g,String(b),c,d,e):a?(a=Sg(a))?Mg(a,b,c,d,e):null:null,b&&(Xg(b),delete this.b[b.key]);return this};
function Nn(a){Ya(a.b,function(a,c){this.b.hasOwnProperty(c)&&Xg(a)},a);
a.b={}}
Ln.prototype.w=function(){Ln.C.w.call(this);Nn(this)};
Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function On(){}
On.prototype.f=null;On.prototype.b=u;function Pn(a){return a.f||(a.f=a.i())}
On.prototype.i=u;var Qn;function Rn(){}
z(Rn,On);Rn.prototype.b=function(){var a=Sn(this);return a?new ActiveXObject(a):new XMLHttpRequest};
Rn.prototype.i=function(){var a={};Sn(this)&&(a[0]=!0,a[1]=!0);return a};
function Sn(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Qn=new Rn;function Tn(a,b,c,d,e){this.b=a;this.g=c;this.B=d;this.l=e||1;this.j=45E3;this.i=new Ln(this);a=this.f=new Hn;a.f=250;a.fa&&a.enabled?(a.stop(),a.start()):a.fa&&a.stop()}
g=Tn.prototype;g.Fa=null;g.la=!1;g.Va=null;g.Yb=null;g.ib=null;g.Ua=null;g.wa=null;g.za=null;g.Ja=null;g.S=null;g.lb=0;g.ma=null;g.Fb=null;g.Ga=null;g.fb=-1;g.Mc=!0;g.Ba=!1;g.Qb=0;g.zb=null;var Un={},Vn={};g=Tn.prototype;g.setTimeout=function(a){this.j=a};
function Wn(a,b,c){a.Ua=1;a.wa=ai(b.clone());a.Ja=c;a.o=!0;Xn(a,null)}
function Yn(a,b,c,d,e){a.Ua=1;a.wa=ai(b.clone());a.Ja=null;a.o=c;e&&(a.Mc=!1);Xn(a,d)}
function Xn(a,b){a.ib=y();Zn(a);a.za=a.wa.clone();Zh(a.za,"t",a.l);a.lb=0;a.S=a.b.Jb(a.b.jb()?b:null);0<a.Qb&&(a.zb=new Jn(x(a.Rc,a,a.S),a.Qb));a.i.ub(a.S,"readystatechange",a.ne);b=a.Fa?jb(a.Fa):{};a.Ja?(a.Fb="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.S.send(a.za,a.Fb,a.Ja,b)):(a.Fb="GET",a.Mc&&!hd&&(b.Connection="close"),a.S.send(a.za,a.Fb,null,b));a.b.ja(1)}
g.ne=function(a){a=a.target;var b=this.zb;b&&3==$n(a)?b.wd():this.Rc(a)};
g.Rc=function(a){try{if(a==this.S)a:{var b=$n(this.S),c=this.S.j,d=this.S.getStatus();if(K&&!qd(10)||hd&&!pd("420+")){if(4>b)break a}else if(3>b||3==b&&!ed&&!ao(this.S))break a;this.Ba||4!=b||7==c||(8==c||0>=d?this.b.ja(3):this.b.ja(2));bo(this);var e=this.S.getStatus();this.fb=e;var f=ao(this.S);(this.la=200==e)?(4==b&&co(this),this.o?(eo(this,b,f),ed&&this.la&&3==b&&(this.i.ub(this.f,"tick",this.me),this.f.start())):fo(this,f),this.la&&!this.Ba&&(4==b?this.b.wb(this):(this.la=!1,Zn(this)))):(this.Ga=
400==e&&0<f.indexOf("Unknown SID")?3:0,Y(),co(this),go(this))}}catch(h){}finally{}};
function eo(a,b,c){for(var d=!0;!a.Ba&&a.lb<c.length;){var e=ho(a,c);if(e==Vn){4==b&&(a.Ga=4,Y(),d=!1);break}else if(e==Un){a.Ga=4;Y();d=!1;break}else fo(a,e)}4==b&&0==c.length&&(a.Ga=1,Y(),d=!1);a.la=a.la&&d;d||(co(a),go(a))}
g.me=function(){var a=$n(this.S),b=ao(this.S);this.lb<b.length&&(bo(this),eo(this,a,b),this.la&&4!=a&&Zn(this))};
function ho(a,b){var c=a.lb,d=b.indexOf("\n",c);if(-1==d)return Vn;c=Number(b.substring(c,d));if(isNaN(c))return Un;d+=1;if(d+c>b.length)return Vn;b=b.substr(d,c);a.lb=d+c;return b}
function io(a,b){a.ib=y();Zn(a);var c=b?window.location.hostname:"";a.za=a.wa.clone();O(a.za,"DOMAIN",c);O(a.za,"t",a.l);try{a.ma=new ActiveXObject("htmlfile")}catch(m){co(a);a.Ga=7;Y();go(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)e+="\\x3c";else if(">"==f)e+="\\x3e";else{if(f in Da)f=Da[f];else if(f in Ca)f=Da[f]=Ca[f];else{var h,k=f.charCodeAt(0);if(31<k&&127>k)h=f;else{if(256>k){if(h="\\x",16>k||256<k)h+="0"}else h="\\u",4096>k&&(h+="0");
h+=k.toString(16).toUpperCase()}f=Da[f]=h}e+=f}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=Eb(d+"</body></html>");a.ma.open();a.ma.write(Db(c));a.ma.close();a.ma.parentWindow.m=x(a.ge,a);a.ma.parentWindow.d=x(a.Fc,a,!0);a.ma.parentWindow.rpcClose=x(a.Fc,a,!1);c=a.ma.createElement("DIV");a.ma.parentWindow.document.body.appendChild(c);d=xb(a.za.toString());d=vb(d);ya.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(sa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ta,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(ua,
"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(va,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(wa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(xa,"&#0;")));d=Eb('<iframe src="'+d+'"></iframe>');c.innerHTML=Db(d);a.b.ja(1)}
g.ge=function(a){jo(x(this.fe,this,a),0)};
g.fe=function(a){this.Ba||(bo(this),fo(this,a),Zn(this))};
g.Fc=function(a){jo(x(this.ee,this,a),0)};
g.ee=function(a){this.Ba||(co(this),this.la=a,this.b.wb(this),this.b.ja(4))};
g.cancel=function(){this.Ba=!0;co(this)};
function Zn(a){a.Yb=y()+a.j;ko(a,a.j)}
function ko(a,b){if(null!=a.Va)throw Error("WatchDog timer not null");a.Va=jo(x(a.ie,a),b)}
function bo(a){a.Va&&(l.clearTimeout(a.Va),a.Va=null)}
g.ie=function(){this.Va=null;var a=y();0<=a-this.Yb?(2!=this.Ua&&this.b.ja(3),co(this),this.Ga=2,Y(),go(this)):ko(this,this.Yb-a)};
function go(a){a.b.sc()||a.Ba||a.b.wb(a)}
function co(a){bo(a);ac(a.zb);a.zb=null;a.f.stop();Nn(a.i);if(a.S){var b=a.S;a.S=null;b.abort();b.dispose()}a.ma&&(a.ma=null)}
function fo(a,b){try{a.b.Ac(a,b),a.b.ja(4)}catch(c){}}
;function lo(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;mo(a,b,function(e){e?c(!0):l.setTimeout(function(){lo(a,b,c,d,f)},f)})}}
function mo(a,b,c){var d=new Image;d.onload=function(){try{no(d),c(!0)}catch(e){}};
d.onerror=function(){try{no(d),c(!1)}catch(e){}};
d.onabort=function(){try{no(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{no(d),c(!1)}catch(e){}};
l.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function no(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function oo(a){this.b=a;this.f=new Gn(null,!0)}
g=oo.prototype;g.Ob=null;g.ca=null;g.Ab=!1;g.Pc=null;g.qb=null;g.Tb=null;g.Pb=null;g.ga=null;g.ua=-1;g.eb=null;g.Za=null;g.connect=function(a){this.Pb=a;a=po(this.b,null,this.Pb);Y();this.Pc=y();var b=this.b.B;null!=b?(this.eb=b[0],(this.Za=b[1])?(this.ga=1,qo(this)):(this.ga=2,ro(this))):(Zh(a,"MODE","init"),this.ca=new Tn(this,0,void 0,void 0,void 0),this.ca.Fa=this.Ob,Yn(this.ca,a,!1,null,!0),this.ga=0)};
function qo(a){var b=po(a.b,a.Za,"/mail/images/cleardot.gif");ai(b);lo(b.toString(),5E3,x(a.nd,a),3,2E3);a.ja(1)}
g.nd=function(a){if(a)this.ga=2,ro(this);else{Y();var b=this.b;b.ia=b.xa.ua;so(b,9)}a&&this.ja(2)};
function ro(a){var b=a.b.T;if(null!=b)Y(),b?(Y(),to(a.b,a,!1)):(Y(),to(a.b,a,!0));else if(a.ca=new Tn(a,0,void 0,void 0,void 0),a.ca.Fa=a.Ob,b=a.b,b=po(b,b.jb()?a.eb:null,a.Pb),Y(),!K||qd(10))Zh(b,"TYPE","xmlhttp"),Yn(a.ca,b,!1,a.eb,!1);else{Zh(b,"TYPE","html");var c=a.ca;a=!!a.eb;c.Ua=3;c.wa=ai(b.clone());io(c,a)}}
g.Jb=function(a){return this.b.Jb(a)};
g.abort=function(){this.ca&&(this.ca.cancel(),this.ca=null);this.ua=-1};
g.sc=function(){return!1};
g.Ac=function(a,b){this.ua=a.fb;if(0==this.ga)if(b){try{var c=this.f.parse(b)}catch(d){a=this.b;a.ia=this.ua;so(a,2);return}this.eb=c[0];this.Za=c[1]}else a=this.b,a.ia=this.ua,so(a,2);else if(2==this.ga)if(this.Ab)Y(),this.Tb=y();else if("11111"==b){if(Y(),this.Ab=!0,this.qb=y(),a=this.qb-this.Pc,!K||qd(10)||500>a)this.ua=200,this.ca.cancel(),Y(),to(this.b,this,!0)}else Y(),this.qb=this.Tb=y(),this.Ab=!1};
g.wb=function(){this.ua=this.ca.fb;if(this.ca.la)0==this.ga?this.Za?(this.ga=1,qo(this)):(this.ga=2,ro(this)):2==this.ga&&((!K||qd(10)?!this.Ab:200>this.Tb-this.qb)?(Y(),to(this.b,this,!1)):(Y(),to(this.b,this,!0)));else{0==this.ga?Y():2==this.ga&&Y();var a=this.b;a.ia=this.ua;so(a,2)}};
g.jb=function(){return this.b.jb()};
g.isActive=function(){return this.b.isActive()};
g.ja=function(a){this.b.ja(a)};function uo(a){bh.call(this);this.headers=new Oc;this.L=a||null;this.f=!1;this.H=this.b=null;this.$="";this.j=0;this.o="";this.i=this.U=this.l=this.P=!1;this.G=0;this.B=null;this.ra="";this.da=this.oa=!1}
z(uo,bh);var vo=/^https?$/i,wo=["POST","PUT"];g=uo.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.$+"; newUri="+a);b=b?b.toUpperCase():"GET";this.$=a;this.o="";this.j=0;this.P=!1;this.f=!0;this.b=this.L?this.L.b():Qn.b();this.H=this.L?Pn(this.L):Pn(Qn);this.b.onreadystatechange=x(this.zc,this);try{this.getStatus(),this.U=!0,this.b.open(b,String(a),!0),this.U=!1}catch(f){this.getStatus();xo(this,f);return}a=c||"";var e=this.headers.clone();d&&Vc(d,function(a,b){e.set(b,a)});
d=Na(e.qa(),yo);c=l.FormData&&a instanceof l.FormData;!C(wo,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.ra&&(this.b.responseType=this.ra);"withCredentials"in this.b&&this.b.withCredentials!==this.oa&&(this.b.withCredentials=this.oa);try{zo(this),0<this.G&&(this.da=Ao(this.b),this.getStatus(),this.da?(this.b.timeout=this.G,this.b.ontimeout=x(this.qc,this)):this.B=In(this.qc,this.G,this)),this.getStatus(),this.l=!0,this.b.send(a),this.l=!1}catch(f){this.getStatus(),xo(this,f)}};
function Ao(a){return K&&pd(9)&&ea(a.timeout)&&p(a.ontimeout)}
function yo(a){return"content-type"==a.toLowerCase()}
g.qc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.G+"ms, aborting",this.j=8,this.getStatus(),ch(this,"timeout"),this.abort(8))};
function xo(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;Bo(a);Co(a)}
function Bo(a){a.P||(a.P=!0,ch(a,"complete"),ch(a,"error"))}
g.abort=function(a){this.b&&this.f&&(this.getStatus(),this.f=!1,this.i=!0,this.b.abort(),this.i=!1,this.j=a||7,ch(this,"complete"),ch(this,"abort"),Co(this))};
g.w=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),Co(this,!0));uo.C.w.call(this)};
g.zc=function(){this.D()||(this.U||this.l||this.i?Do(this):this.Vd())};
g.Vd=function(){Do(this)};
function Do(a){if(a.f&&"undefined"!=typeof aa)if(a.H[1]&&4==$n(a)&&2==a.getStatus())a.getStatus();else if(a.l&&4==$n(a))In(a.zc,0,a);else if(ch(a,"readystatechange"),4==$n(a)){a.getStatus();a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Gd(1,String(a.$));if(!f&&l.self&&l.self.location)var h=l.self.location.protocol,f=h.substr(0,h.length-1);e=!vo.test(f?f.toLowerCase():"")}d=
e}if(d)ch(a,"complete"),ch(a,"success");else{a.j=6;var k;try{k=2<$n(a)?a.b.statusText:""}catch(m){k=""}a.o=k+" ["+a.getStatus()+"]";Bo(a)}}finally{Co(a)}}}
function Co(a,b){if(a.b){zo(a);var c=a.b,d=a.H[0]?t:null;a.b=null;a.H=null;b||ch(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function zo(a){a.b&&a.da&&(a.b.ontimeout=null);ea(a.B)&&(l.clearTimeout(a.B),a.B=null)}
g.isActive=function(){return!!this.b};
function $n(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<$n(this)?this.b.status:-1}catch(a){return-1}};
function ao(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
;function Eo(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new Gn(null,!0);this.B=b||null;this.T=null!=c?c:null}
function Fo(a,b){this.f=a;this.b=b;this.context=null}
g=Eo.prototype;g.ab=null;g.Z=null;g.M=null;g.Nb=null;g.rb=null;g.gc=null;g.sb=null;g.gb=0;g.Gd=0;g.V=null;g.ya=null;g.ta=null;g.Da=null;g.xa=null;g.Eb=null;g.Qa=-1;g.tc=-1;g.ia=-1;g.bb=0;g.Pa=0;g.Ca=8;var Go=new bh;function Ho(a){Ag.call(this,"statevent",a)}
z(Ho,Ag);function Io(a,b){Ag.call(this,"timingevent",a);this.size=b}
z(Io,Ag);function Jo(a){Ag.call(this,"serverreachability",a)}
z(Jo,Ag);g=Eo.prototype;g.connect=function(a,b,c,d,e){Y();this.Nb=b;this.ab=c||{};d&&p(e)&&(this.ab.OSID=d,this.ab.OAID=e);this.xa=new oo(this);this.xa.Ob=null;this.xa.f=this.j;this.xa.connect(a)};
function Ko(a){Lo(a);if(3==a.b){var b=a.gb++,c=a.rb.clone();O(c,"SID",a.g);O(c,"RID",b);O(c,"TYPE","terminate");Mo(a,c);b=new Tn(a,0,a.g,b,void 0);b.Ua=2;b.wa=ai(c.clone());(new Image).src=b.wa;b.ib=y();Zn(b)}No(a)}
function Lo(a){a.xa&&(a.xa.abort(),a.xa=null);a.M&&(a.M.cancel(),a.M=null);a.ta&&(l.clearTimeout(a.ta),a.ta=null);Oo(a);a.Z&&(a.Z.cancel(),a.Z=null);a.ya&&(l.clearTimeout(a.ya),a.ya=null)}
function Po(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new Fo(a.Gd++,b));2!=a.b&&3!=a.b||Qo(a)}
g.sc=function(){return 0==this.b};
function Qo(a){a.Z||a.ya||(a.ya=jo(x(a.Ec,a),0),a.bb=0)}
g.Ec=function(a){this.ya=null;Ro(this,a)};
function Ro(a,b){if(1==a.b){if(!b){a.gb=Math.floor(1E5*Math.random());b=a.gb++;var c=new Tn(a,0,"",b,void 0);c.Fa=null;var d=So(a),e=a.rb.clone();O(e,"RID",b);a.l&&O(e,"CVER",a.l);Mo(a,e);Wn(c,e,d);a.Z=c;a.b=2}}else 3==a.b&&(b?To(a,b):0==a.f.length||a.Z||To(a))}
function To(a,b){var c;b?6<a.Ca?(a.f=a.i.concat(a.f),a.i.length=0,c=a.gb-1,b=So(a)):(c=b.B,b=b.Ja):(c=a.gb++,b=So(a));var d=a.rb.clone();O(d,"SID",a.g);O(d,"RID",c);O(d,"AID",a.Qa);Mo(a,d);c=new Tn(a,0,a.g,c,a.bb+1);c.Fa=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Z=c;Wn(c,d,b)}
function Mo(a,b){a.V&&(a=a.V.nc(a))&&Ya(a,function(a,d){O(b,d,a)})}
function So(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.Ca&&0<b?(d=a.f[0].f,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].f,h=a.f[e].b,f=6>=a.Ca?e:f-d;try{Vc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function Uo(a){a.M||a.ta||(a.o=1,a.ta=jo(x(a.Dc,a),0),a.Pa=0)}
function Vo(a){if(a.M||a.ta||3<=a.Pa)return!1;a.o++;a.ta=jo(x(a.Dc,a),Wo(a,a.Pa));a.Pa++;return!0}
g.Dc=function(){this.ta=null;this.M=new Tn(this,0,this.g,"rpc",this.o);this.M.Fa=null;this.M.Qb=0;var a=this.gc.clone();O(a,"RID","rpc");O(a,"SID",this.g);O(a,"CI",this.Eb?"0":"1");O(a,"AID",this.Qa);Mo(this,a);if(!K||qd(10))O(a,"TYPE","xmlhttp"),Yn(this.M,a,!0,this.sb,!1);else{O(a,"TYPE","html");var b=this.M,c=!!this.sb;b.Ua=3;b.wa=ai(a.clone());io(b,c)}};
function to(a,b,c){a.Eb=c;a.ia=b.ua;a.rd(1,0);a.rb=po(a,null,a.Nb);Qo(a)}
g.Ac=function(a,b){if(0!=this.b&&(this.M==a||this.Z==a))if(this.ia=a.fb,this.Z==a&&3==this.b)if(7<this.Ca){var c;try{c=this.j.parse(b)}catch(d){c=null}if(v(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.ta){if(this.M)if(this.M.ib+3E3<this.Z.ib)Oo(this),this.M.cancel(),this.M=null;else break a;Vo(this);Y()}}else this.tc=a[1],0<this.tc-this.Qa&&37500>a[2]&&this.Eb&&0==this.Pa&&!this.Da&&(this.Da=jo(x(this.Hd,this),6E3));else so(this,11)}else b!=Of.Te.b&&so(this,11);else if(this.M==a&&Oo(this),!pa(b))for(c=
this.j.parse(b),v(c),a=c,b=0;b<a.length;b++)c=a[b],this.Qa=c[0],c=c[1],2==this.b?"c"==c[0]?(this.g=c[1],this.sb=c[2],c=c[3],null!=c?this.Ca=c:this.Ca=6,this.b=3,this.V&&this.V.lc(this),this.gc=po(this,this.jb()?this.sb:null,this.Nb),Uo(this)):"stop"==c[0]&&so(this,7):3==this.b&&("stop"==c[0]?so(this,7):"noop"!=c[0]&&this.V&&this.V.kc(this,c),this.Pa=0)};
g.Hd=function(){null!=this.Da&&(this.Da=null,this.M.cancel(),this.M=null,Vo(this),Y())};
function Oo(a){null!=a.Da&&(l.clearTimeout(a.Da),a.Da=null)}
g.wb=function(a){var b;if(this.M==a)Oo(this),this.M=null,b=2;else if(this.Z==a)this.Z=null,b=1;else return;this.ia=a.fb;if(0!=this.b)if(a.la)1==b?(y(),ch(Go,new Io(Go,a.Ja?a.Ja.length:0)),Qo(this),this.i.length=0):Uo(this);else{var c=a.Ga,d;if(!(d=3==c||7==c||0==c&&0<this.ia)){if(d=1==b)this.Z||this.ya||1==this.b||2<=this.bb?d=!1:(this.ya=jo(x(this.Ec,this,a),Wo(this,this.bb)),this.bb++,d=!0);d=!(d||2==b&&Vo(this))}if(d)switch(c){case 1:so(this,5);break;case 4:so(this,10);break;case 3:so(this,6);
break;case 7:so(this,12);break;default:so(this,2)}}};
function Wo(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.rd=function(a){if(!C(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function so(a,b){if(2==b||9==b){var c=null;a.V&&(c=null);var d=x(a.Ae,a);c||(c=new Lh("//www.google.com/images/cleardot.gif"),ai(c));mo(c.toString(),1E4,d)}else Y();Xo(a,b)}
g.Ae=function(a){a?Y():(Y(),Xo(this,8))};
function Xo(a,b){a.b=0;a.V&&a.V.jc(a,b);No(a);Lo(a)}
function No(a){a.b=0;a.ia=-1;if(a.V)if(0==a.i.length&&0==a.f.length)a.V.Hb(a);else{var b=Ta(a.i),c=Ta(a.f);a.i.length=0;a.f.length=0;a.V.Hb(a,b,c)}}
function po(a,b,c){var d=bi(c);if(""!=d.f)b&&Nh(d,b+"."+d.f),Oh(d,d.l);else var e=window.location,d=ci(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.ab&&Ya(a.ab,function(a,b){O(d,b,a)});
O(d,"VER",a.Ca);Mo(a,d);return d}
g.Jb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new uo;a.oa=!1;return a};
g.isActive=function(){return!!this.V&&this.V.isActive(this)};
function jo(a,b){if(!fa(a))throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},b)}
g.ja=function(){ch(Go,new Jo(Go))};
function Y(){ch(Go,new Ho(Go))}
g.jb=function(){return!(!K||qd(10))};
function Yo(){}
g=Yo.prototype;g.lc=function(){};
g.kc=function(){};
g.jc=function(){};
g.Hb=function(){};
g.nc=function(){return{}};
g.isActive=function(){return!0};function Zo(a,b,c){F.call(this);this.b=a;this.i=b||0;this.f=c;this.g=x(this.pc,this)}
z(Zo,F);g=Zo.prototype;g.cb=0;g.w=function(){Zo.C.w.call(this);this.stop();delete this.b;delete this.f};
g.start=function(a){this.stop();this.cb=In(this.g,p(a)?a:this.i)};
g.stop=function(){this.isActive()&&l.clearTimeout(this.cb);this.cb=0};
g.isActive=function(){return 0!=this.cb};
g.pc=function(){this.cb=0;this.b&&this.b.call(this.f)};function $o(a,b){F.call(this);this.f=new Zo(this.i,0,this);Zb(this,this.f);this.g=this.b=0;if(fa(a))b&&(a=x(a,b));else if(a&&fa(a.handleEvent))a=x(a.handleEvent,a);else throw Error("Invalid listener argument");this.j=a;ap(this)}
z($o,F);$o.prototype.i=function(){500<this.b&&24E4>2*this.b&&(this.b*=2);this.j();this.g&&this.start()};
$o.prototype.start=function(){var a=this.f,b=this.b;a.isActive()||a.start(b);this.g=y()+this.b};
$o.prototype.stop=function(){this.f.stop();this.g=0};
$o.prototype.isActive=function(){return this.f.isActive()};
function ap(a){a.f.stop();a.b=5E3+2E4*Math.random()}
;function bp(a,b){this.H=a;this.o=b;this.g=new G;this.f=new $o(this.Fe,this);this.b=null;this.G=!1;this.j=null;this.T="";this.B=this.i=0;this.l=[]}
z(bp,Yo);g=bp.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.na=function(a){return this.g.na(a)};
g.A=function(a,b){return this.g.A.apply(this.g,arguments)};
g.dispose=function(){this.G||(this.G=!0,ac(this.g),cp(this),ac(this.f),this.f=null)};
g.D=function(){return this.G};
function dp(a){return{firstTestResults:[""],secondTestResults:!a.b.Eb,sessionId:a.b.g,arrayId:a.b.Qa}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.T="";this.f.stop();this.j=a||null;this.i=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new Eo("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.V=null);d.V=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Qa):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function cp(a,b){a.B=b||0;a.f.stop();a.b&&(3==a.b.b&&Ro(a.b),Ko(a.b));a.B=0}
g.sendMessage=function(a,b){a={_sc:a};b&&mb(a,b);this.f.isActive()||2==(this.b?this.b.b:0)?this.l.push(a):ep(this)&&Po(this.b,a)};
g.lc=function(){ap(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)Po(this.b,a[b])}this.A("handlerOpened")};
g.jc=function(a,b){a=2==b&&401==this.b.ia;if(4!=b&&!a){if(6==b||410==this.b.ia)a=this.f,a.f.stop(),a.b=500;this.f.start()}this.A("handlerError",b)};
g.Hb=function(a,b,c){if(!this.f.isActive())this.A("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].b;d&&this.l.push(d)}};
g.nc=function(){var a={v:2};this.T&&(a.gsessionid=this.T);0!=this.i&&(a.ui=""+this.i);0!=this.B&&(a.ui=""+this.B);this.j&&mb(a,this.j);return a};
g.kc=function(a,b){"S"==b[0]?this.T=b[1]:"gracefulReconnect"==b[0]?(ap(this.f),this.f.start(),Ko(this.b)):this.A("handlerMessage",new En(b[0],b[1]))};
function ep(a){return!!a.b&&3==a.b.b}
function fp(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.Fe=function(){this.f.isActive();var a=this.b,b=0;a.M&&b++;a.Z&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function gp(a){this.index=-1;this.videoId=this.listId="";this.volume=this.b=-1;this.j=!1;this.audioTrackId=null;this.i=this.f=0;this.g=null;this.reset(a)}
function hp(a){a.audioTrackId=null;a.g=null;a.b=-1;a.f=0;a.i=y()}
gp.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";hp(this);this.volume=-1;this.j=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.j=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.f=a.playerTime,this.i=a.playerTimeAt)};
function ip(a){switch(a.b){case 1:return(y()-a.i)/1E3+a.f;case -1E3:return 0}return a.f}
function jp(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.j;b.audioTrackId=a.audioTrackId;b.trackData=kb(a.g);b.playerTime=a.f;b.playerTimeAt=a.i;return b}
gp.prototype.clone=function(){return new gp(jp(this))};function Z(a,b,c){V.call(this);this.i=NaN;this.$=!1;this.L=this.H=this.P=this.U=NaN;this.aa=[];this.B=this.G=this.g=this.F=this.b=null;this.Xa=a;this.aa.push(M(window,"beforeunload",x(this.xd,this)));this.f=[];this.F=new gp;this.oa=b.id;this.b=kp(this,c);this.b.subscribe("handlerOpened",this.Ld,this);this.b.subscribe("handlerClosed",this.Id,this);this.b.subscribe("handlerError",this.Jd,this);this.b.subscribe("handlerMessage",this.Kd,this);fp(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.F.videoId;vm()&&N("yt-remote-session-video-id",a)},this)}
z(Z,V);g=Z.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index;b=b.currentTime||0;5>=b&&(b=0);var f={videoId:d,currentTime:b};c&&(f.listId=c);p(e)&&(f.currentIndex=e);c&&(this.F.listId=c);this.F.videoId=d;this.F.index=e||0;this.F.state=3;c=this.F;c.f=b;c.i=y();this.B="UNSUPPORTED";lp("Connecting with setPlaylist and params: "+L(f));this.b.connect({method:"setPlaylist",params:L(f)},a,zm())}else lp("Connecting without params"),this.b.connect({},a,zm());mp(this)};
g.dispose=function(){this.D()||(this.A("beforeDispose"),np(this,3));Z.C.dispose.call(this)};
g.w=function(){op(this);pp(this);qp(this);J(this.H);this.H=NaN;J(this.L);this.L=NaN;this.g=null;Ue(this.aa);this.aa.length=0;this.b.dispose();Z.C.w.call(this);this.B=this.G=this.f=this.F=this.b=null};
function lp(a){Tl("conn",a)}
g.xd=function(){this.j(2)};
function kp(a,b){return new bp(em(a.Xa,"/bc",void 0,!1),b)}
function np(a,b){a.A("proxyStateChange",b)}
function mp(a){a.i=I(x(function(){lp("Connecting timeout");this.j(1)},a),2E4)}
function op(a){J(a.i);a.i=NaN}
function qp(a){J(a.U);a.U=NaN}
function rp(a){pp(a);a.P=I(x(function(){sp(this,"getNowPlaying")},a),2E4)}
function pp(a){J(a.P);a.P=NaN}
g.Ld=function(){lp("Channel opened");this.$&&(this.$=!1,qp(this),this.U=I(x(function(){lp("Timing out waiting for a screen.");this.j(1)},this),15E3));
Dm(dp(this.b),this.oa)};
g.Id=function(){lp("Channel closed");isNaN(this.i)?Em(!0):Em();this.dispose()};
g.Jd=function(a){Em();isNaN(this.l())?(lp("Channel error: "+a+" without reconnection"),this.dispose()):(this.$=!0,lp("Channel error: "+a+" with reconnection in "+this.l()+" ms"),np(this,2))};
function tp(a,b){b&&(op(a),qp(a));b==(ep(a.b)&&isNaN(a.i))?b&&(np(a,1),sp(a,"getSubtitlesTrack")):b?(a.da()&&a.F.reset(),np(a,1),sp(a,"getNowPlaying"),up(a)):a.j(1)}
function vp(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.F.videoId&&(gb(b.params)?a.F.g=null:a.F.g=b.params,a.A("remotePlayerChange"))}
function wp(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.F.listId=b.params.listId||a.F.listId;b=a.F;var e=b.videoId;b.videoId=c;b.index=d;c!=e&&hp(b);a.A("remoteQueueChange")}
function xp(a,b){b.params=b.params||{};wp(a,b);yp(a,b)}
function yp(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.F;d.f=isNaN(c)?0:c;d.i=y();b=parseInt(b.params.state,10);b=isNaN(b)?-1:b;-1==b&&-1E3==a.F.b&&(b=-1E3);a.F.b=b;1==a.F.b?rp(a):pp(a);a.A("remotePlayerChange")}
function zp(a,b){var c="true"==b.params.muted;a.F.volume=parseInt(b.params.volume,10);a.F.j=c;a.A("remotePlayerChange")}
g.Kd=function(a){a.params?lp("Received: action="+a.action+", params="+L(a.params)):lp("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=vd(a.params.devices);this.f=Ka(a,function(a){return new qm(a)});
a=!!Na(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
tp(this,a);break;case "loungeScreenConnected":tp(this,!0);break;case "loungeScreenDisconnected":Ra(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
tp(this,!1);break;case "remoteConnected":var b=new qm(vd(a.params.device));Na(this.f,function(a){return a.equals(b)})||Pa(this.f,b);
break;case "remoteDisconnected":b=new qm(vd(a.params.device));Ra(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":wp(this,a);break;case "nowPlaying":xp(this,a);break;case "onStateChange":yp(this,a);break;case "onVolumeChanged":zp(this,a);break;case "onSubtitlesTrackChanged":vp(this,a);break;case "nowAutoplaying":this.G=a.params.videoId;break;case "autoplayDismissed":break;case "autoplayUpNext":this.G=a.params.videoId;break;case "onAutoplayModeChanged":this.B=a.params.autoplayMode;break;default:lp("Unrecognized action: "+a.action)}};
g.qe=function(){if(this.g){var a=this.g;this.g=null;this.F.videoId!=a&&sp(this,"getNowPlaying")}};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.na;Z.prototype.Ma=function(){var a=3;this.D()||(a=0,isNaN(this.l())?ep(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Z.prototype.getProxyState=Z.prototype.Ma;Z.prototype.j=function(a){lp("Disconnecting with "+a);op(this);this.A("beforeDisconnect",a);1==a&&Em();cp(this.b,a);this.dispose()};
Z.prototype.disconnect=Z.prototype.j;Z.prototype.La=function(){var a=this.F;if(this.g){var b=a=this.F.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&hp(b)}return jp(a)};
Z.prototype.getPlayerContextData=Z.prototype.La;Z.prototype.Wa=function(a){var b=new gp(a);b.videoId&&b.videoId!=this.F.videoId&&(this.g=b.videoId,J(this.H),this.H=I(x(this.qe,this),5E3));var c=[];this.F.listId==b.listId&&this.F.videoId==b.videoId&&this.F.index==b.index||c.push("remoteQueueChange");this.F.b==b.b&&this.F.volume==b.volume&&this.F.j==b.j&&ip(this.F)==ip(b)&&L(this.F.g)==L(b.g)||c.push("remotePlayerChange");this.F.reset(a);B(c,function(a){this.A(a)},this)};
Z.prototype.setPlayerContextData=Z.prototype.Wa;Z.prototype.da=function(){var a=this.b.o.id,b=Na(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Z.prototype.getOtherConnectedRemoteId=Z.prototype.da;Z.prototype.l=function(){var a=this.b;return a.f.isActive()?a.f.g-y():NaN};
Z.prototype.getReconnectTimeout=Z.prototype.l;Z.prototype.ra=function(){return this.B||"UNSUPPORTED"};
Z.prototype.getAutoplayMode=Z.prototype.ra;Z.prototype.va=function(){return this.G||""};
Z.prototype.getAutoplayVideoId=Z.prototype.va;Z.prototype.Ya=function(){if(!isNaN(this.l())){var a=this.b.f,b=a.f;b.stop();b.pc();a.start()}};
Z.prototype.reconnect=Z.prototype.Ya;function up(a){J(a.L);a.L=I(x(a.j,a,1),864E5)}
function sp(a,b,c){c?lp("Sending: action="+b+", params="+L(c)):lp("Sending: action="+b);a.b.sendMessage(b,c)}
Z.prototype.Na=function(a,b){sp(this,a,b);up(this)};
Z.prototype.sendMessage=Z.prototype.Na;function Ap(a){km.call(this,"ScreenServiceProxy");this.Y=a;this.b=[];this.b.push(this.Y.$_s("screenChange",x(this.Je,this)));this.b.push(this.Y.$_s("onlineScreenChange",x(this.Rd,this)))}
z(Ap,km);g=Ap.prototype;g.ea=function(a){return this.Y.$_gs(a)};
g.contains=function(a){return!!this.Y.$_c(a)};
g.get=function(a){return this.Y.$_g(a)};
g.start=function(){this.Y.$_st()};
g.mb=function(a,b,c){this.Y.$_a(a,b,c)};
g.remove=function(a,b,c){this.Y.$_r(a,b,c)};
g.kb=function(a,b,c,d){this.Y.$_un(a,b,c,d)};
g.w=function(){for(var a=0,b=this.b.length;a<b;++a)this.Y.$_ubk(this.b[a]);this.b.length=0;this.Y=null;Ap.C.w.call(this)};
g.Je=function(){this.A("screenChange")};
g.Rd=function(){this.A("onlineScreenChange")};
W.prototype.$_st=W.prototype.start;W.prototype.$_gspc=W.prototype.Ke;W.prototype.$_gsppc=W.prototype.Tc;W.prototype.$_c=W.prototype.contains;W.prototype.$_g=W.prototype.get;W.prototype.$_a=W.prototype.mb;W.prototype.$_un=W.prototype.kb;W.prototype.$_r=W.prototype.remove;W.prototype.$_gs=W.prototype.ea;W.prototype.$_gos=W.prototype.Sc;W.prototype.$_s=W.prototype.subscribe;W.prototype.$_ubk=W.prototype.na;function Bp(){var a={device:"Desktop",app:"youtube-desktop"};nf&&mf();sm();Cp||(Cp=new dm,Fm()&&(Cp.b="/api/loungedev"));Dp||(Dp=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",Dp,void 0));Ep();var b=Fp();if(!b){var c=new W(Cp);q("yt.mdx.remote.screenService_",c,void 0);b=Fp();mn(c,function(a){a?Gp()&&Cn(Gp(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){tc("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
Hp("Initializing: "+L(a));Ip.push(qc("yt-remote-cast2-availability-change",function(){tc("yt-remote-receiver-availability-change")}));
Ip.push(qc("yt-remote-cast2-receiver-selected",function(){Jp();tc("yt-remote-auto-connect","cast-selector-receiver")}));
Ip.push(qc("yt-remote-cast2-session-change",Kp));Ip.push(qc("yt-remote-connection-change",function(a){a?Cn(Gp(),"YouTube TV"):Lp()||(Cn(null,null),Bn())}));
var d=Mp();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;Hp(" -- with channel params: "+L(d));Np(d);b.start();Gp()||Op()}}
function Pp(){sc(Ip);Ip.length=0;ac(Qp);Qp=null;Dp&&(B(Dp,function(a){a(null)}),Dp.length=0,Dp=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
Cp=null}
function Rp(){var a=Sp();zn()&&pf("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a}
function Sp(){var a;a=Fp().Y.$_gos();var b=Tp();b&&Up()&&(im(a,b)||a.push(b));return hm(a)}
function Vp(){var a=Wp();!a&&zn()&&An()&&(a={key:"cast-selector-receiver",name:An()});return a}
function Wp(){var a=Sp(),b=Tp();b||(b=Lp());return Na(a,function(a){return b&&Xl(b,a.key)?!0:!1})}
function Tp(){var a=Gp();if(!a)return null;var b=Fp().ea();return jm(b,a)}
function Kp(a){Hp("remote.onCastSessionChange_: "+am(a));if(a){var b=Tp();b&&b.id==a.id?Cn(b.id,"YouTube TV"):(b&&Xp(),Yp(a,1))}else Xp()}
function Xp(){Dn()?vn().stopSession():sn("stopSession called before API ready.");var a=Up();a?a.disconnect(1):(uc("yt-remote-before-disconnect",1),uc("yt-remote-connection-change",!1));Zp(null)}
function Hp(a){Tl("remote",a)}
function Fp(){if(!Qp){var a=r("yt.mdx.remote.screenService_");Qp=a?new Ap(a):null}return Qp}
function Gp(){return r("yt.mdx.remote.currentScreenId_")}
function $p(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function Jp(){q("yt.mdx.remote.connectData_",null,void 0)}
function Up(){return r("yt.mdx.remote.connection_")}
function Zp(a){var b=Up();Jp();a?Up():$p("");q("yt.mdx.remote.connection_",a,void 0);Dp&&(B(Dp,function(b){b(a)}),Dp.length=0);
b&&!a?uc("yt-remote-connection-change",!1):!b&&a&&tc("yt-remote-connection-change",!0)}
function Lp(){var a=vm();if(!a)return null;var b=Fp().ea();return jm(b,a)}
function Yp(a,b){Gp();$p(a.id);a=new Z(Cp,a,Mp());a.connect(b,r("yt.mdx.remote.connectData_"));a.subscribe("beforeDisconnect",function(a){uc("yt-remote-before-disconnect",a)});
a.subscribe("beforeDispose",function(){Up()&&(Up(),Zp(null))});
Zp(a)}
function Op(){var a=Lp();a?(Hp("Resume connection to: "+am(a)),Yp(a,0)):(Em(),Bn(),Hp("Skipping connecting because no session screen found."))}
var Cp=null,Dp=null,Qp=null;function Ep(){var a=Mp();if(gb(a)){var a=um(),b=pf("yt-remote-session-name")||"",c=pf("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function Mp(){return r("yt.mdx.remote.channelParams_")||{}}
function Np(a){a?(N("yt-remote-session-app",a.app),N("yt-remote-session-name",a.name)):(qf("yt-remote-session-app"),qf("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Ip=[];var aq=null,bq=[];function cq(){dq();if(Vp()){var a=aq;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function dq(){var a=aq;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Rp(),Vp())}
;var eq=null,fq=[];function gq(a){return{externalChannelId:a.externalChannelId,Fd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function hq(a){iq(gq(a))}
function iq(a){Sj()?(R(Cj,new xj(a.externalChannelId,a.Fd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Md({event:"subscribe",source:a.source}))&&ni(a)):jq(a)}
function jq(a){Rj(function(b){b.subscription_ajax&&iq(a)},null)}
function kq(a){a=gq(a);R(Hj,new zj(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Md({event:"unsubscribe",source:a.source}))&&ni(a)}
function lq(a){eq&&eq.channelSubscribed(a.b,a.subscriptionId)}
function mq(a){eq&&eq.channelUnsubscribed(a.b)}
;function nq(a){F.call(this);this.f=a;this.f.subscribe("command",this.Jc,this);this.g={};this.i=!1}
z(nq,F);g=nq.prototype;g.start=function(){this.i||this.D()||(this.i=!0,oq(this.f,"RECEIVING"))};
g.Wc=u;g.addEventListener=u;g.removeEventListener=u;g.Jc=function(a,b){if(this.i&&!this.D()){var c=b||{};switch(a){case "addEventListener":w(c.event)&&(a=c.event,a in this.g||(b=x(this.se,this,a),this.g[a]=b,this.addEventListener(a,b)));break;case "removeEventListener":w(c.event)&&pq(this,c.event);break;default:this.Wc(a,b)}}};
g.se=function(a,b){this.i&&!this.D()&&oq(this.f,a,this.Kb(a,b))};
g.Kb=function(a,b){if(null!=b)return{value:b}};
function pq(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.w=function(){this.f.unsubscribe("command",this.Jc,this);this.f=null;for(var a in this.g)pq(this,a);nq.C.w.call(this)};function qq(a,b){nq.call(this,b);this.b=a;this.start()}
z(qq,nq);g=qq.prototype;g.addEventListener=function(a,b){this.b.addEventListener(a,b)};
g.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
g.Wc=function(a,b){this.b.isReady()&&this.b[a]&&(b=rq(a,b||{}),b=this.b[a].apply(this.b,b),(b=sq(a,b))&&this.i&&!this.D()&&oq(this.f,a,b))};
function rq(a,b){switch(a){case "loadVideoById":return b=tl(b),vl(b),[b];case "cueVideoById":return b=tl(b),vl(b),[b];case "loadVideoByPlayerVars":return vl(b),[b];case "cueVideoByPlayerVars":return vl(b),[b];case "loadPlaylist":return b=ul(b),vl(b),[b];case "cuePlaylist":return b=ul(b),vl(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function sq(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
g.Kb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return qq.C.Kb.call(this,a,b)};
g.w=function(){qq.C.w.call(this);delete this.b};function tq(a,b,c,d){F.call(this);this.b=b||null;this.B="*";this.i=c||null;this.f=null;this.channel=d||null;this.H=!!a;this.G=x(this.L,this);window.addEventListener("message",this.G)}
z(tq,F);tq.prototype.L=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.b&&a.source!=this.b)&&w(a.data)){var b;try{b=vd(a.data)}catch(c){return}null!=b&&(this.H&&(this.f&&this.f!=b.id||this.channel&&this.channel!=b.channel)?window.console&&window.console.warn("Session ID or channel missmatch"):b&&this.l(a,b))}};
tq.prototype.l=u;tq.prototype.sendMessage=function(a){if(this.b){this.f&&(a.id=this.f);this.channel&&(a.channel=this.channel);try{var b=L(a);this.b.postMessage(b,this.B)}catch(c){ic(c,"WARNING")}}};
tq.prototype.w=function(){window.removeEventListener("message",this.G);tq.C.w.call(this)};function uq(a,b,c){tq.call(this,a,b,c||H("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.o=this.g=this.j=null}
z(uq,tq);uq.prototype.l=function(a,b){switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:ic(Error("MessageEvent origin is null"),"WARNING");this.b=a.source;this.f=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.j&&(this.o&&!C(this.o,b.func)||this.j(b.func,b.args))}};function vq(){var a=this.f=new uq(!!H("WIDGET_ID_ENFORCE")),b=x(this.oe,this);a.j=b;a.o=null;this.f.channel="widget";if(a=H("WIDGET_ID"))this.f.P=a;this.i=[];this.o=!1;this.j={}}
g=vq.prototype;g.oe=function(a,b){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,wq(this,a)),this.j[a]=!0)):this.Xc(a,b)};
g.Xc=function(){};
function wq(a,b){return x(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.sd=function(){this.o=!0;this.sendMessage("initialDelivery",this.Lb());this.sendMessage("onReady");B(this.i,this.Yc,this);this.i=[]};
g.Lb=function(){return null};
function xq(a,b){a.sendMessage("infoDelivery",b)}
g.Yc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Yc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function yq(a){vq.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Wd,this));this.addEventListener("onVideoProgress",x(this.we,this));this.addEventListener("onVolumeChange",x(this.xe,this));this.addEventListener("onApiChange",x(this.re,this));this.addEventListener("onPlaybackQualityChange",x(this.te,this));this.addEventListener("onPlaybackRateChange",x(this.ue,this));this.addEventListener("onStateChange",x(this.ve,this))}
z(yq,vq);g=yq.prototype;g.Xc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&rl(a)){var c;c=b;if(ga(c[0])&&!v(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=tl.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=sl.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=ul.apply(window,c)}c=d}vl(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);rl(a)&&xq(this,this.Lb())}};
g.Wd=function(){var a=x(this.sd,this);this.f.g=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Lb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
g.ve=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};
this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());xq(this,a)};
g.te=function(a){xq(this,{playbackQuality:a})};
g.ue=function(a){xq(this,{playbackRate:a})};
g.re=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var m=f[h],n=this.b.getOption(e,m);b[e][m]=n}}this.sendMessage("apiInfoDelivery",b)};
g.xe=function(){xq(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.we=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());xq(this,a)};
g.dispose=function(){yq.C.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function zq(a,b,c){V.call(this);this.b=a;this.f=b;this.g=c}
z(zq,V);function oq(a,b,c){if(!a.D()){var d=a.b;d.D()||a.f!=d.b||(a={id:a.g,command:b},c&&(a.data=c),d.b.postMessage(L(a),d.g))}}
zq.prototype.w=function(){this.f=this.b=null;zq.C.w.call(this)};function Aq(a,b,c){F.call(this);this.b=a;this.g=c;this.i=M(window,"message",x(this.j,this));this.f=new zq(this,a,b);Zb(this,this.f)}
z(Aq,F);Aq.prototype.j=function(a){var b;if(b=!this.D())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,w(a))){try{a=vd(a)}catch(d){return}a.command&&(b=this.f,b.D()||b.A("command",a.command,a.data))}};
Aq.prototype.w=function(){Ue(this.i);this.b=null;Aq.C.w.call(this)};var Bq=!1;function Cq(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Bq=!0,a.description)){Cq(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Bq=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Bq=!(!a||!a.enabledPlugin))){Cq(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Bq=!0;Cq(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Bq=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Bq=!0,Cq(b.GetVariable("$version"))}catch(c){}})();function Dq(a){return(a=a.exec(nb))?a[1]:""}
(function(){if(tf)return Dq(/Firefox\/([0-9.]+)/);if(K||fd||ed)return od;if(xf)return Dq(/Chrome\/([0-9.]+)/);if(yf&&!(ad()||D("iPad")||D("iPod")))return Dq(/Version\/([0-9.]+)/);if(uf||vf){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(nb);if(a)return a[1]+"."+a[2]}else if(wf)return(a=Dq(/Android\s+([0-9.]+)/))?a:Dq(/Version\/([0-9.]+)/);return""})();function Eq(){var a=Fq;return new mh(function(b,c){a.R=function(a){Sd(a)?b(a):c(a)};
a.onError=c;a.ka=c;Xd("//googleads.g.doubleclick.net/pagead/id",a)})}
;function Gq(a,b){this.f=a;this.b=b}
Gq.prototype.then=function(a,b,c){try{if(p(this.f))return a?rh(a.call(c,this.f)):rh(this.f);if(p(this.b)){if(!b)return sh(this.b);var d=b.call(c,this.b);return!p(d)&&this.b instanceof uh?sh(this.b):rh(d)}throw Error("Invalid Result_ state");}catch(e){return sh(e)}};
lh(Gq);var Fq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Hq=null;function Iq(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Jq(""),Hq=new Gq(""),"";a=JSON.parse(a.substr(4)).id;Jq(a);Hq=new Gq(a);Kq(18E5,2);return a}
function Lq(a){var b=Error("Unable to load /pagead/id");Jq("");Hq=new Gq(void 0,b);0<a&&Kq(12E4,a-1);throw b;}
function Kq(a,b){I(function(){var a=x(Lq,l,b),a=Eq().then(Iq,a);th(a,null,t,void 0)},a)}
function Jq(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Mq(){}
;function Nq(){var a;if(a=Sf.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Oq[d]=c.toString())}}}
ba(Nq);var Oq=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Oq,void 0);function Pq(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function Qq(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function Rq(a){a=void 0!==Oq[a]?Oq[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Nq.prototype.get=function(a,b){Qq(a);Pq(a);a=void 0!==Oq[a]?Oq[a].toString():null;return null!=a?a:b?b:""};
Nq.prototype.set=function(a,b){Qq(a);Pq(a);if(null==b)throw"ExpectedNotNull";Oq[a]=b.toString()};
Nq.prototype.remove=function(a){Qq(a);Pq(a);delete Oq[a]};
Nq.prototype.clear=function(){Oq={}};function Sq(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&ni(c)}}
;function Tq(a){P.call(this,1,arguments);this.ob=a}
z(Tq,P);function Uq(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
z(Uq,P);function Vq(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
z(Vq,P);function Wq(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
z(Wq,P);function Xq(a){P.call(this,1,arguments)}
z(Xq,P);var Yq=new Q("ypc-core-load",Tq),Zq=new Q("ypc-guide-sync-success",Uq),$q=new Q("ypc-purchase-success",Vq),ar=new Q("ypc-subscription-cancel",Xq),br=new Q("ypc-subscription-cancel-success",Wq),cr=new Q("ypc-init-subscription",Xq);var dr=!1,er=[],fr=[];function gr(a){a.b?dr?R(Gj,a):R(Yq,new Tq(function(){R(cr,new Xq(a.b))})):hr(a.f,a.i,a.g,a.source)}
function ir(a){a.b?dr?R(Lj,a):R(Yq,new Tq(function(){R(ar,new Xq(a.b))})):jr(a.f,a.subscriptionId,a.i,a.g,a.source)}
function kr(a){lr(Ta(a.b))}
function mr(a){nr(Ta(a.b))}
function or(a){pr(a.g,a.f,a.b)}
function qr(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&R(Fj,new yj(b,c,a.b.channelInfo))}
function rr(a){var b=a.b;Ya(a.f,function(a,d){R(Fj,new yj(d,a,b[d]))})}
function sr(a){R(Kj,new vj(a.f.itemId));a.b&&a.b.length&&(tr(a.b,Kj),tr(a.b,Mj))}
function hr(a,b,c,d){var e=new vj(a);R(Dj,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=H("PLAYBACK_ID"))&&(c.plid=d);(d=H("EVENT_ID"))&&(c.ei=d);b&&ur(b,c);Xd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Xb:f,O:c,R:function(b,c){b=c.response;R(Fj,new yj(a,b.id,b.channel_info));b.show_feed_privacy_dialog&&tc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);b.actions&&Sq(b.actions)},
Ub:function(){R(Ej,e)}})}
function jr(a,b,c,d,e){var f=new vj(a);R(Ij,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=H("PLAYBACK_ID"))&&(d.plid=a);(a=H("EVENT_ID"))&&(d.ei=a);c&&ur(c,d);Xd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Xb:h,O:d,R:function(a,b){a=b.response;R(Kj,f);a.actions&&Sq(a.actions)},
Ub:function(){R(Jj,f)}})}
function pr(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new wj(a,b,c);Xd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",O:d,onError:function(){R(Qj,e)},
R:function(){R(Pj,e)}})}}
function lr(a){if(a.length){var b=Va(a,0,40);R("subscription-batch-subscribe-loading");tr(b,Dj);var c={};c.a=b.join(",");var d=function(){R("subscription-batch-subscribe-loaded");tr(b,Ej)};
Xd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",O:c,R:function(c,f){d();c=f.response;f=c.id;if(v(f)&&f.length==b.length){var e=c.channel_info_map;B(f,function(a,c){c=b[c];R(Fj,new yj(c,a,e[c]))});
a.length?lr(a):R("subscription-batch-subscribe-finished")}},
onError:function(){d();R("subscription-batch-subscribe-failure")}})}}
function nr(a){if(a.length){var b=Va(a,0,40);R("subscription-batch-unsubscribe-loading");tr(b,Ij);var c={};c.c=b.join(",");var d=function(){R("subscription-batch-unsubscribe-loaded");tr(b,Jj)};
Xd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",O:c,R:function(){d();tr(b,Kj);a.length&&nr(a)},
onError:function(){d()}})}}
function tr(a,b){B(a,function(a){R(b,new vj(a))})}
function ur(a,b){a=Pd(a);for(var c in a)b[c]=a[c]}
;var vr=null,wr=null,xr=null,yr=!1;function zr(a){var b=Nf();b&&Lf(Kf(),{click:{csn:b,visualElement:Af(new zf(a))}},void 0)}
function Ar(a){var b=Nf();if(b){for(var c=[],d=0;d<a.length;d++)c.push(new zf(a[d]));Jf(b,c)}}
;q("yt.setConfig",fc,void 0);q("yt.setMsg",function(a){gc(ec,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||H("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=de)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(w(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,m=!1;try{h=a.lineNumber||a.ff||"Not available"}catch(ib){h="Not available",m=!0}try{k=a.fileName||a.filename||a.sourceURL||
l.$googDebugFname||f}catch(ib){k="Not available",m=!0}a=!m&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(ce[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Xb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},O:{url:H("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.O.stack=e);for(var n in c)b.O["client."+n]=c[n];if(n=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var A in n)b.O[A]=n[A];Xd("/error_204",b);ce[a.message]=!0;de++}}},void 0);
q("writeEmbed",function(){var a=H("PLAYER_CONFIG",void 0);if("1"!=a.privembed)try{var b;try{var c=r("yt.www.ads.biscotti.getId_"),d;if(c)d=c();else{if(!Hq){var e=x(Lq,l,2);Hq=Eq().then(Iq,e)}d=Hq}b=d}catch(f){b=sh(f)}th(b,null,Mq,void 0)}catch(f){ic(f)}"gvn-experiment"==a.args.ps&&(document.body.style.backgroundColor="transparent");d=document.referrer;b=H("POST_MESSAGE_ORIGIN");c=!1;Dd("legacy_cast2")&&w(d)&&w(b)&&-1<d.indexOf(b)&&ki(b)&&ki(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=
d);H("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&vl(a.args);vr=d=ij("player",a);d.addEventListener("onLogServerVeClicked",zr);d.addEventListener("onLogServerVesShown",Ar);e=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?xr=new yq(d):H("ENABLE_POST_API")&&w(e)&&w(b)&&(wr=new Aq(window.parent,e,b),xr=new qq(d,wr.f));Dd("legacy_cast2")&&((yr=c&&!H("ENABLE_CAST_API"))?a.args.disableCast="1":(Bp(),aq=d,aq.addEventListener("onReady",cq),bq.push(qc("yt-remote-receiver-availability-change",
dq))));H("BG_P")&&(H("BG_I")||H("BG_IU"))&&Gc();he();eq=d;eq.addEventListener("SUBSCRIBE",hq);eq.addEventListener("UNSUBSCRIBE",kq);fq.push(vi(Fj,lq),vi(Kj,mq))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&ni(a);return!0},void 0);
var Br=hc(function(){Fi("ol");dr=!0;fr.push(vi(Cj,gr),vi(Hj,ir));dr||fr.push(vi(Gj,gr),vi(Lj,ir),vi(Aj,kr),vi(Bj,mr),vi(Oj,or),vi($q,qr),vi(br,sr),vi(Zq,rr));Nq.getInstance();var a=1<window.devicePixelRatio;if(!!((Rq("f"+(Math.floor(119/31)+1))||0)&67108864)!=a){var b="f"+(Math.floor(119/31)+1),c=Rq(b)||0,c=a?c|67108864:c&-67108865;0==c?delete Oq[b]:(a=c.toString(16),Oq[b]=a.toString());var b=[],d;for(d in Oq)b.push(d+"="+escape(Oq[d]));Tf("PREF",b.join("&"),63072E3)}}),Cr=hc(function(){var a=vr;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();H("PL_ATT")&&(Fc=null);for(var a=0,b=fe.length;a<b;a++){var c=fe[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):J(c)}}fe.length=0;a=Bc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))wc(a),b.parentNode.removeChild(b);ge=!1;fc("DCLKSTAT",0);sc(er);er.length=0;wi(fr);fr.length=0;dr=!1;eq&&(eq.removeEventListener("SUBSCRIBE",iq),eq.removeEventListener("UNSUBSCRIBE",kq));eq=null;wi(fq);fq.length=0;
Dd("legacy_cast2")&&!yr&&(sc(bq),bq.length=0,aq&&(aq.removeEventListener("onReady",cq),aq=null),Pp());bc(xr,wr);if(a=vr)a.removeEventListener("onLogServerVeClicked",zr),a.removeEventListener("onLogServerVesShown",Ar),a.destroy()});
window.addEventListener?(window.addEventListener("load",Br),window.addEventListener("unload",Cr)):window.attachEvent&&(window.attachEvent("onload",Br),window.attachEvent("onunload",Cr));var Dr=ok.getInstance(),Er=S(Dr);Er in tk||(Dr.register(),Dr.yb.push(qc("yt-uix-init-"+Er,Dr.init,Dr)),Dr.yb.push(qc("yt-uix-dispose-"+Er,Dr.dispose,Dr)),tk[Er]=Dr);})();
