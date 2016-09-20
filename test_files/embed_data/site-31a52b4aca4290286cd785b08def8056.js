/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*! jQuery UI - v1.11.2 - 2014-12-03
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, sortable.js, autocomplete.js, menu.js, effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return a=!o&&r.length?e.widget.extend.apply(null,[a].concat(r)):a,o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n
})),n?(a.isOver||(a.isOver=1,a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=u-t.height,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.sortable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))
}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)
},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var o="ui-effects-",r=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(r),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(r.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(o+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(o+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects});
//Added for circuits.io
//**************************
var jQuerySvg = {};
//**************************



/* http://keith-wood.name/svg.html
   SVG for jQuery v1.4.5.
   Written by Keith Wood (kbwood{at}iinet.com.au) August 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */


(function($) { // Hide scope, no $ conflict

/* SVG manager.
   Use the singleton instance of this class, $.svg, 
   to interact with the SVG functionality. */
function SVGManager() {
	this._settings = []; // Settings to be remembered per SVG object
	this._extensions = []; // List of SVG extensions added to SVGWrapper
		// for each entry [0] is extension name, [1] is extension class (function)
		// the function takes one parameter - the SVGWrapper instance
	this.regional = []; // Localisations, indexed by language, '' for default (English)
	this.regional[''] = {errorLoadingText: 'Error loading',
		notSupportedText: 'This browser does not support SVG'};
	this.local = this.regional['']; // Current localisation
	this._uuid = new Date().getTime();
	this._renesis = detectActiveX('RenesisX.RenesisCtrl');
}

/* Determine whether a given ActiveX control is available.
   @param  classId  (string) the ID for the ActiveX control
   @return  (boolean) true if found, false if not */
function detectActiveX(classId) {
	try {
		return !!(window.ActiveXObject && new ActiveXObject(classId));
	}
	catch (e) {
		return false;
	}
}

var PROP_NAME = 'svgwrapper';

$.extend(SVGManager.prototype, {
	/* Class name added to elements to indicate already configured with SVG. */
	markerClassName: 'hasSVG',

	/* SVG namespace. */
	svgNS: 'http://www.w3.org/2000/svg',
	/* XLink namespace. */
	xlinkNS: 'http://www.w3.org/1999/xlink',

	/* SVG wrapper class. */
	_wrapperClass: SVGWrapper,

	/* Camel-case versions of attribute names containing dashes or are reserved words. */
	_attrNames: {class_: 'class', in_: 'in',
		alignmentBaseline: 'alignment-baseline', baselineShift: 'baseline-shift',
		clipPath: 'clip-path', clipRule: 'clip-rule',
		colorInterpolation: 'color-interpolation',
		colorInterpolationFilters: 'color-interpolation-filters',
		colorRendering: 'color-rendering', dominantBaseline: 'dominant-baseline',
		enableBackground: 'enable-background', fillOpacity: 'fill-opacity',
		fillRule: 'fill-rule', floodColor: 'flood-color',
		floodOpacity: 'flood-opacity', fontFamily: 'font-family',
		fontSize: 'font-size', fontSizeAdjust: 'font-size-adjust',
		fontStretch: 'font-stretch', fontStyle: 'font-style',
		fontVariant: 'font-variant', fontWeight: 'font-weight',
		glyphOrientationHorizontal: 'glyph-orientation-horizontal',
		glyphOrientationVertical: 'glyph-orientation-vertical',
		horizAdvX: 'horiz-adv-x', horizOriginX: 'horiz-origin-x',
		imageRendering: 'image-rendering', letterSpacing: 'letter-spacing',
		lightingColor: 'lighting-color', markerEnd: 'marker-end',
		markerMid: 'marker-mid', markerStart: 'marker-start',
		stopColor: 'stop-color', stopOpacity: 'stop-opacity',
		strikethroughPosition: 'strikethrough-position',
		strikethroughThickness: 'strikethrough-thickness',
		strokeDashArray: 'stroke-dasharray', strokeDashOffset: 'stroke-dashoffset',
		strokeLineCap: 'stroke-linecap', strokeLineJoin: 'stroke-linejoin',
		strokeMiterLimit: 'stroke-miterlimit', strokeOpacity: 'stroke-opacity',
		strokeWidth: 'stroke-width', textAnchor: 'text-anchor',
		textDecoration: 'text-decoration', textRendering: 'text-rendering',
		underlinePosition: 'underline-position', underlineThickness: 'underline-thickness',
		vertAdvY: 'vert-adv-y', vertOriginY: 'vert-origin-y',
		wordSpacing: 'word-spacing', writingMode: 'writing-mode'},

	/* Add the SVG object to its container. */
	_attachSVG: function(container, settings) {
		var svg = (container.namespaceURI == this.svgNS ? container : null);
		var container = (svg ? null : container);
		if ($(container || svg).hasClass(this.markerClassName)) {
			return;
		}
		if (typeof settings == 'string') {
			settings = {loadURL: settings};
		}
		else if (typeof settings == 'function') {
			settings = {onLoad: settings};
		}
		$(container || svg).addClass(this.markerClassName);
		try {
			if (!svg) {
				svg = document.createElementNS(this.svgNS, 'svg');
				svg.setAttribute('version', '1.1');
				if (container.clientWidth > 0) {
					svg.setAttribute('width', container.clientWidth);
				}
				if (container.clientHeight > 0) {
					svg.setAttribute('height', container.clientHeight);
				}
				container.appendChild(svg);
			}
			this._afterLoad(container, svg, settings || {});
		}
		catch (e) {
			if ($.browser.msie) {
				if (!container.id) {
					container.id = 'svg' + (this._uuid++);
				}
				this._settings[container.id] = settings;
				container.innerHTML = '<embed type="image/svg+xml" width="100%" ' +
					'height="100%" src="' + (settings.initPath || '') + 'blank.svg" ' +
					'pluginspage="http://www.adobe.com/svg/viewer/install/main.html"/>';
			}
			else {
				container.innerHTML = '<p class="svg_error">' +
					this.local.notSupportedText + '</p>';
			}
		}
	},

	/* SVG callback after loading - register SVG root. */
	_registerSVG: function() {
		for (var i = 0; i < document.embeds.length; i++) { // Check all
			var container = document.embeds[i].parentNode;
			if (!$(container).hasClass($.svg.markerClassName) || // Not SVG
					$.data(container, PROP_NAME)) { // Already done
				continue;
			}
			var svg = null;
			try {
				svg = document.embeds[i].getSVGDocument();
			}
			catch(e) {
				setTimeout($.svg._registerSVG, 250); // Renesis takes longer to load
				return;
			}
			svg = (svg ? svg.documentElement : null);
			if (svg) {
				$.svg._afterLoad(container, svg);
			}
		}
	},

	/* Post-processing once loaded. */
	_afterLoad: function(container, svg, settings) {
		var settings = settings || this._settings[container.id];
		this._settings[container ? container.id : ''] = null;
		var wrapper = new this._wrapperClass(svg, container);
		$.data(container || svg, PROP_NAME, wrapper);
		try {
			if (settings.loadURL) { // Load URL
				wrapper.load(settings.loadURL, settings);
			}
			if (settings.settings) { // Additional settings
				wrapper.configure(settings.settings);
			}
			if (settings.onLoad && !settings.loadURL) { // Onload callback
				settings.onLoad.apply(container || svg, [wrapper]);
			}
		}
		catch (e) {
			alert(e);
		}
	},

	/* Return the SVG wrapper created for a given container.
	   @param  container  (string) selector for the container or
	                      (element) the container for the SVG object or
	                      jQuery collection - first entry is the container
	   @return  (SVGWrapper) the corresponding SVG wrapper element, or null if not attached */
	_getSVG: function(container) {
		container = (typeof container == 'string' ? $(container)[0] :
			(container.jquery ? container[0] : container));
		return $.data(container, PROP_NAME);
	},

	/* Remove the SVG functionality from a div.
	   @param  container  (element) the container for the SVG object */
	_destroySVG: function(container) {
		var $container = $(container);
		if (!$container.hasClass(this.markerClassName)) {
			return;
		}
		$container.removeClass(this.markerClassName);
		if (container.namespaceURI != this.svgNS) {
			$container.empty();
		}
		$.removeData(container, PROP_NAME);
	},

	/* Extend the SVGWrapper object with an embedded class.
	   The constructor function must take a single parameter that is
	   a reference to the owning SVG root object. This allows the 
	   extension to access the basic SVG functionality.
	   @param  name      (string) the name of the SVGWrapper attribute to access the new class
	   @param  extClass  (function) the extension class constructor */
	addExtension: function(name, extClass) {
		this._extensions.push([name, extClass]);
	},

	/* Does this node belong to SVG?
	   @param  node  (element) the node to be tested
	   @return  (boolean) true if an SVG node, false if not */
	isSVGElem: function(node) {
		return (node.nodeType == 1 && node.namespaceURI == $.svg.svgNS);
	}
});

/* The main SVG interface, which encapsulates the SVG element.
   Obtain a reference from $().svg('get') */
function SVGWrapper(svg, container) {
	this._svg = svg; // The SVG root node
	this._container = container; // The containing div
	for (var i = 0; i < $.svg._extensions.length; i++) {
		var extension = $.svg._extensions[i];
		this[extension[0]] = new extension[1](this);
	}
}

$.extend(SVGWrapper.prototype, {

	/* Retrieve the width of the SVG object. */
	_width: function() {
		return (this._container ? this._container.clientWidth : this._svg.width);
	},

	/* Retrieve the height of the SVG object. */
	_height: function() {
		return (this._container ? this._container.clientHeight : this._svg.height);
	},

	/* Retrieve the root SVG element.
	   @return  the top-level SVG element */
	root: function() {
		return this._svg;
	},

	/* Configure a SVG node.
	   @param  node      (element, optional) the node to configure
	   @param  settings  (object) additional settings for the root
	   @param  clear     (boolean) true to remove existing attributes first,
	                     false to add to what is already there (optional)
	   @return  (SVGWrapper) this root */
	configure: function(node, settings, clear) {
		if (!node.nodeName) {
			clear = settings;
			settings = node;
			node = this._svg;
		}
		if (clear) {
			for (var i = node.attributes.length - 1; i >= 0; i--) {
				var attr = node.attributes.item(i);
				if (!(attr.nodeName == 'onload' || attr.nodeName == 'version' || 
						attr.nodeName.substring(0, 5) == 'xmlns')) {
					node.attributes.removeNamedItem(attr.nodeName);
				}
			}
		}
		for (var attrName in settings) {
			node.setAttribute($.svg._attrNames[attrName] || attrName, settings[attrName]);
		}
		return this;
	},

	/* Locate a specific element in the SVG document.
	   @param  id  (string) the element's identifier
	   @return  (element) the element reference, or null if not found */
	getElementById: function(id) {
		return this._svg.ownerDocument.getElementById(id);
	},

	/* Change the attributes for a SVG node.
	   @param  element   (SVG element) the node to change
	   @param  settings  (object) the new settings
	   @return  (SVGWrapper) this root */
	change: function(element, settings) {
		if (element) {
			for (var name in settings) {
				if (settings[name] == null) {
					element.removeAttribute($.svg._attrNames[name] || name);
				}
				else {
					element.setAttribute($.svg._attrNames[name] || name, settings[name]);
				}
			}
		}
		return this;
	},

	/* Check for parent being absent and adjust arguments accordingly. */
	_args: function(values, names, optSettings) {
		names.splice(0, 0, 'parent');
		names.splice(names.length, 0, 'settings');
		var args = {};
		var offset = 0;
		if (values[0] != null && values[0].jquery) {
			values[0] = values[0][0];
		}
		if (values[0] != null && !(typeof values[0] == 'object' && values[0].nodeName)) {
			args['parent'] = null;
			offset = 1;
		}
		for (var i = 0; i < values.length; i++) {
			args[names[i + offset]] = values[i];
		}
		if (optSettings) {
			$.each(optSettings, function(i, value) {
				if (typeof args[value] == 'object') {
					args.settings = args[value];
					args[value] = null;
				}
			});
		}
		return args;
	},

	/* Add a title.
	   @param  parent    (element or jQuery) the parent node for the new title (optional)
	   @param  text      (string) the text of the title
	   @param  settings  (object) additional settings for the title (optional)
	   @return  (element) the new title node */
	title: function(parent, text, settings) {
		var args = this._args(arguments, ['text']);
		var node = this._makeNode(args.parent, 'title', args.settings || {});
		node.appendChild(this._svg.ownerDocument.createTextNode(args.text));
		return node;
	},

	/* Add a description.
	   @param  parent    (element or jQuery) the parent node for the new description (optional)
	   @param  text      (string) the text of the description
	   @param  settings  (object) additional settings for the description (optional)
	   @return  (element) the new description node */
	describe: function(parent, text, settings) {
		var args = this._args(arguments, ['text']);
		var node = this._makeNode(args.parent, 'desc', args.settings || {});
		node.appendChild(this._svg.ownerDocument.createTextNode(args.text));
		return node;
	},

	/* Add a definitions node.
	   @param  parent    (element or jQuery) the parent node for the new definitions (optional)
	   @param  id        (string) the ID of this definitions (optional)
	   @param  settings  (object) additional settings for the definitions (optional)
	   @return  (element) the new definitions node */
	defs: function(parent, id, settings) {
		var args = this._args(arguments, ['id'], ['id']);
		return this._makeNode(args.parent, 'defs', $.extend(
			(args.id ? {id: args.id} : {}), args.settings || {}));
	},

	/* Add a symbol definition.
	   @param  parent    (element or jQuery) the parent node for the new symbol (optional)
	   @param  id        (string) the ID of this symbol
	   @param  x1        (number) the left coordinate for this symbol
	   @param  y1        (number) the top coordinate for this symbol
	   @param  width     (number) the width of this symbol
	   @param  height    (number) the height of this symbol
	   @param  settings  (object) additional settings for the symbol (optional)
	   @return  (element) the new symbol node */
	symbol: function(parent, id, x1, y1, width, height, settings) {
		var args = this._args(arguments, ['id', 'x1', 'y1', 'width', 'height']);
		return this._makeNode(args.parent, 'symbol', $.extend({id: args.id,
			viewBox: args.x1 + ' ' + args.y1 + ' ' + args.width + ' ' + args.height},
			args.settings || {}));
	},

	/* Add a marker definition.
	   @param  parent    (element or jQuery) the parent node for the new marker (optional)
	   @param  id        (string) the ID of this marker
	   @param  refX      (number) the x-coordinate for the reference point
	   @param  refY      (number) the y-coordinate for the reference point
	   @param  mWidth    (number) the marker viewport width
	   @param  mHeight   (number) the marker viewport height
	   @param  orient    (string or int) 'auto' or angle (degrees) (optional)
	   @param  settings  (object) additional settings for the marker (optional)
	   @return  (element) the new marker node */
	marker: function(parent, id, refX, refY, mWidth, mHeight, orient, settings) {
		var args = this._args(arguments, ['id', 'refX', 'refY',
			'mWidth', 'mHeight', 'orient'], ['orient']);
		return this._makeNode(args.parent, 'marker', $.extend(
			{id: args.id, refX: args.refX, refY: args.refY, markerWidth: args.mWidth, 
			markerHeight: args.mHeight, orient: args.orient || 'auto'}, args.settings || {}));
	},

	/* Add a style node.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  styles    (string) the CSS styles
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new style node */
	style: function(parent, styles, settings) {
		var args = this._args(arguments, ['styles']);
		var node = this._makeNode(args.parent, 'style', $.extend(
			{type: 'text/css'}, args.settings || {}));
		node.appendChild(this._svg.ownerDocument.createTextNode(args.styles));
		if ($.browser.opera) {
			$('head').append('<style type="text/css">' + args.styles + '</style>');
		}
		return node;
	},

	/* Add a script node.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  script    (string) the JavaScript code
	   @param  type      (string) the MIME type for the code (optional, default 'text/javascript')
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new script node */
	script: function(parent, script, type, settings) {
		var args = this._args(arguments, ['script', 'type'], ['type']);
		var node = this._makeNode(args.parent, 'script', $.extend(
			{type: args.type || 'text/javascript'}, args.settings || {}));
		node.appendChild(this._svg.ownerDocument.createTextNode(args.script));
		if (!$.browser.mozilla) {
			$.globalEval(args.script);
		}
		return node;
	},

	/* Add a linear gradient definition.
	   Specify all of x1, y1, x2, y2 or none of them.
	   @param  parent    (element or jQuery) the parent node for the new gradient (optional)
	   @param  id        (string) the ID for this gradient
	   @param  stops     (string[][]) the gradient stops, each entry is
	                     [0] is offset (0.0-1.0 or 0%-100%), [1] is colour, 
						 [2] is opacity (optional)
	   @param  x1        (number) the x-coordinate of the gradient start (optional)
	   @param  y1        (number) the y-coordinate of the gradient start (optional)
	   @param  x2        (number) the x-coordinate of the gradient end (optional)
	   @param  y2        (number) the y-coordinate of the gradient end (optional)
	   @param  settings  (object) additional settings for the gradient (optional)
	   @return  (element) the new gradient node */
	linearGradient: function(parent, id, stops, x1, y1, x2, y2, settings) {
		var args = this._args(arguments,
			['id', 'stops', 'x1', 'y1', 'x2', 'y2'], ['x1']);
		var sets = $.extend({id: args.id}, 
			(args.x1 != null ? {x1: args.x1, y1: args.y1, x2: args.x2, y2: args.y2} : {}));
		return this._gradient(args.parent, 'linearGradient', 
			$.extend(sets, args.settings || {}), args.stops);
	},

	/* Add a radial gradient definition.
	   Specify all of cx, cy, r, fx, fy or none of them.
	   @param  parent    (element or jQuery) the parent node for the new gradient (optional)
	   @param  id        (string) the ID for this gradient
	   @param  stops     (string[][]) the gradient stops, each entry
	                     [0] is offset, [1] is colour, [2] is opacity (optional)
	   @param  cx        (number) the x-coordinate of the largest circle centre (optional)
	   @param  cy        (number) the y-coordinate of the largest circle centre (optional)
	   @param  r         (number) the radius of the largest circle (optional)
	   @param  fx        (number) the x-coordinate of the gradient focus (optional)
	   @param  fy        (number) the y-coordinate of the gradient focus (optional)
	   @param  settings  (object) additional settings for the gradient (optional)
	   @return  (element) the new gradient node */
	radialGradient: function(parent, id, stops, cx, cy, r, fx, fy, settings) {
		var args = this._args(arguments,
			['id', 'stops', 'cx', 'cy', 'r', 'fx', 'fy'], ['cx']);
		var sets = $.extend({id: args.id}, (args.cx != null ?
			{cx: args.cx, cy: args.cy, r: args.r, fx: args.fx, fy: args.fy} : {}));
		return this._gradient(args.parent, 'radialGradient', 
			$.extend(sets, args.settings || {}), args.stops);
	},

	/* Add a gradient node. */
	_gradient: function(parent, name, settings, stops) {
		var node = this._makeNode(parent, name, settings);
		for (var i = 0; i < stops.length; i++) {
			var stop = stops[i];
			this._makeNode(node, 'stop', $.extend(
				{offset: stop[0], stopColor: stop[1]}, 
				(stop[2] != null ? {stopOpacity: stop[2]} : {})));
		}
		return node;
	},

	/* Add a pattern definition.
	   Specify all of vx, vy, xwidth, vheight or none of them.
	   @param  parent    (element or jQuery) the parent node for the new pattern (optional)
	   @param  id        (string) the ID for this pattern
	   @param  x         (number) the x-coordinate for the left edge of the pattern
	   @param  y         (number) the y-coordinate for the top edge of the pattern
	   @param  width     (number) the width of the pattern
	   @param  height    (number) the height of the pattern
	   @param  vx        (number) the minimum x-coordinate for view box (optional)
	   @param  vy        (number) the minimum y-coordinate for the view box (optional)
	   @param  vwidth    (number) the width of the view box (optional)
	   @param  vheight   (number) the height of the view box (optional)
	   @param  settings  (object) additional settings for the pattern (optional)
	   @return  (element) the new pattern node */
	pattern: function(parent, id, x, y, width, height, vx, vy, vwidth, vheight, settings) {
		var args = this._args(arguments, ['id', 'x', 'y', 'width', 'height',
			'vx', 'vy', 'vwidth', 'vheight'], ['vx']);
		var sets = $.extend({id: args.id, x: args.x, y: args.y,
			width: args.width, height: args.height}, (args.vx != null ?
			{viewBox: args.vx + ' ' + args.vy + ' ' + args.vwidth + ' ' + args.vheight} : {}));
		return this._makeNode(args.parent, 'pattern', $.extend(sets, args.settings || {}));
	},

	/* Add a clip path definition.
	   @param  parent  (element) the parent node for the new element (optional)
	   @param  id      (string) the ID for this path
	   @param  units   (string) either 'userSpaceOnUse' (default) or 'objectBoundingBox' (optional)
	   @return  (element) the new clipPath node */
	clipPath: function(parent, id, units, settings) {
		var args = this._args(arguments, ['id', 'units']);
		args.units = args.units || 'userSpaceOnUse';
		return this._makeNode(args.parent, 'clipPath', $.extend(
			{id: args.id, clipPathUnits: args.units}, args.settings || {}));
	},

	/* Add a mask definition.
	   @param  parent    (element or jQuery) the parent node for the new mask (optional)
	   @param  id        (string) the ID for this mask
	   @param  x         (number) the x-coordinate for the left edge of the mask
	   @param  y         (number) the y-coordinate for the top edge of the mask
	   @param  width     (number) the width of the mask
	   @param  height    (number) the height of the mask
	   @param  settings  (object) additional settings for the mask (optional)
	   @return  (element) the new mask node */
	mask: function(parent, id, x, y, width, height, settings) {
		var args = this._args(arguments, ['id', 'x', 'y', 'width', 'height']);
		return this._makeNode(args.parent, 'mask', $.extend(
			{id: args.id, x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
	},

	/* Create a new path object.
	   @return  (SVGPath) a new path object */
	createPath: function() {
		return new SVGPath();
	},

	/* Create a new text object.
	   @return  (SVGText) a new text object */
	createText: function() {
		return new SVGText();
	},

	/* Add an embedded SVG element.
	   Specify all of vx, vy, vwidth, vheight or none of them.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  x         (number) the x-coordinate for the left edge of the node
	   @param  y         (number) the y-coordinate for the top edge of the node
	   @param  width     (number) the width of the node
	   @param  height    (number) the height of the node
	   @param  vx        (number) the minimum x-coordinate for view box (optional)
	   @param  vy        (number) the minimum y-coordinate for the view box (optional)
	   @param  vwidth    (number) the width of the view box (optional)
	   @param  vheight   (number) the height of the view box (optional)
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new node */
	svg: function(parent, x, y, width, height, vx, vy, vwidth, vheight, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height',
			'vx', 'vy', 'vwidth', 'vheight'], ['vx']);
		var sets = $.extend({x: args.x, y: args.y, width: args.width, height: args.height}, 
			(args.vx != null ? {viewBox: args.vx + ' ' + args.vy + ' ' +
			args.vwidth + ' ' + args.vheight} : {}));
		return this._makeNode(args.parent, 'svg', $.extend(sets, args.settings || {}));
	},

	/* Create a group.
	   @param  parent    (element or jQuery) the parent node for the new group (optional)
	   @param  id        (string) the ID of this group (optional)
	   @param  settings  (object) additional settings for the group (optional)
	   @return  (element) the new group node */
	group: function(parent, id, settings) {
		var args = this._args(arguments, ['id'], ['id']);
		return this._makeNode(args.parent, 'g', $.extend({id: args.id}, args.settings || {}));
	},

	/* Add a usage reference.
	   Specify all of x, y, width, height or none of them.
	   @param  parent    (element or jQuery) the parent node for the new node (optional)
	   @param  x         (number) the x-coordinate for the left edge of the node (optional)
	   @param  y         (number) the y-coordinate for the top edge of the node (optional)
	   @param  width     (number) the width of the node (optional)
	   @param  height    (number) the height of the node (optional)
	   @param  ref       (string) the ID of the definition node
	   @param  settings  (object) additional settings for the node (optional)
	   @return  (element) the new node */
	use: function(parent, x, y, width, height, ref, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'ref']);
		if (typeof args.x == 'string') {
			args.ref = args.x;
			args.settings = args.y;
			args.x = args.y = args.width = args.height = null;
		}
		var node = this._makeNode(args.parent, 'use', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Add a link, which applies to all child elements.
	   @param  parent    (element or jQuery) the parent node for the new link (optional)
	   @param  ref       (string) the target URL
	   @param  settings  (object) additional settings for the link (optional)
	   @return  (element) the new link node */
	link: function(parent, ref, settings) {
		var args = this._args(arguments, ['ref']);
		var node = this._makeNode(args.parent, 'a', args.settings);
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Add an image.
	   @param  parent    (element or jQuery) the parent node for the new image (optional)
	   @param  x         (number) the x-coordinate for the left edge of the image
	   @param  y         (number) the y-coordinate for the top edge of the image
	   @param  width     (number) the width of the image
	   @param  height    (number) the height of the image
	   @param  ref       (string) the path to the image
	   @param  settings  (object) additional settings for the image (optional)
	   @return  (element) the new image node */
	image: function(parent, x, y, width, height, ref, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'ref']);
		var node = this._makeNode(args.parent, 'image', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			args.settings || {}));
		node.setAttributeNS($.svg.xlinkNS, 'href', args.ref);
		return node;
	},

	/* Draw a path.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  path      (string or SVGPath) the path to draw
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	path: function(parent, path, settings) {
		var args = this._args(arguments, ['path']);
		return this._makeNode(args.parent, 'path', $.extend(
			{d: (args.path.path ? args.path.path() : args.path)}, args.settings || {}));
	},

	/* Draw a rectangle.
	   Specify both of rx and ry or neither.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  x         (number) the x-coordinate for the left edge of the rectangle
	   @param  y         (number) the y-coordinate for the top edge of the rectangle
	   @param  width     (number) the width of the rectangle
	   @param  height    (number) the height of the rectangle
	   @param  rx        (number) the x-radius of the ellipse for the rounded corners (optional)
	   @param  ry        (number) the y-radius of the ellipse for the rounded corners (optional)
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	rect: function(parent, x, y, width, height, rx, ry, settings) {
		var args = this._args(arguments, ['x', 'y', 'width', 'height', 'rx', 'ry'], ['rx']);
		return this._makeNode(args.parent, 'rect', $.extend(
			{x: args.x, y: args.y, width: args.width, height: args.height},
			(args.rx ? {rx: args.rx, ry: args.ry} : {}), args.settings || {}));
	},

	/* Draw a circle.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  cx        (number) the x-coordinate for the centre of the circle
	   @param  cy        (number) the y-coordinate for the centre of the circle
	   @param  r         (number) the radius of the circle
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	circle: function(parent, cx, cy, r, settings) {
		var args = this._args(arguments, ['cx', 'cy', 'r']);
		return this._makeNode(args.parent, 'circle', $.extend(
			{cx: args.cx, cy: args.cy, r: args.r}, args.settings || {}));
	},

	/* Draw an ellipse.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  cx        (number) the x-coordinate for the centre of the ellipse
	   @param  cy        (number) the y-coordinate for the centre of the ellipse
	   @param  rx        (number) the x-radius of the ellipse
	   @param  ry        (number) the y-radius of the ellipse
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	ellipse: function(parent, cx, cy, rx, ry, settings) {
		var args = this._args(arguments, ['cx', 'cy', 'rx', 'ry']);
		return this._makeNode(args.parent, 'ellipse', $.extend(
			{cx: args.cx, cy: args.cy, rx: args.rx, ry: args.ry}, args.settings || {}));
	},

	/* Draw a line.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  x1        (number) the x-coordinate for the start of the line
	   @param  y1        (number) the y-coordinate for the start of the line
	   @param  x2        (number) the x-coordinate for the end of the line
	   @param  y2        (number) the y-coordinate for the end of the line
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	line: function(parent, x1, y1, x2, y2, settings) {
		var args = this._args(arguments, ['x1', 'y1', 'x2', 'y2']);
		return this._makeNode(args.parent, 'line', $.extend(
			{x1: args.x1, y1: args.y1, x2: args.x2, y2: args.y2}, args.settings || {}));
	},

	/* Draw a polygonal line.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  points    (number[][]) the x-/y-coordinates for the points on the line
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	polyline: function(parent, points, settings) {
		var args = this._args(arguments, ['points']);
		return this._poly(args.parent, 'polyline', args.points, args.settings);
	},

	/* Draw a polygonal shape.
	   @param  parent    (element or jQuery) the parent node for the new shape (optional)
	   @param  points    (number[][]) the x-/y-coordinates for the points on the shape
	   @param  settings  (object) additional settings for the shape (optional)
	   @return  (element) the new shape node */
	polygon: function(parent, points, settings) {
		var args = this._args(arguments, ['points']);
		return this._poly(args.parent, 'polygon', args.points, args.settings);
	},

	/* Draw a polygonal line or shape. */
	_poly: function(parent, name, points, settings) {
		var ps = '';
		for (var i = 0; i < points.length; i++) {
			ps += points[i].join() + ' ';
		}
		return this._makeNode(parent, name, $.extend(
			{points: $.trim(ps)}, settings || {}));
	},

	/* Draw text.
	   Specify both of x and y or neither of them.
	   @param  parent    (element or jQuery) the parent node for the text (optional)
	   @param  x         (number or number[]) the x-coordinate(s) for the text (optional)
	   @param  y         (number or number[]) the y-coordinate(s) for the text (optional)
	   @param  value     (string) the text content or
	                     (SVGText) text with spans and references
	   @param  settings  (object) additional settings for the text (optional)
	   @return  (element) the new text node */
	text: function(parent, x, y, value, settings) {
		var args = this._args(arguments, ['x', 'y', 'value']);
		if (typeof args.x == 'string' && arguments.length < 4) {
			args.value = args.x;
			args.settings = args.y;
			args.x = args.y = null;
		}
		return this._text(args.parent, 'text', args.value, $.extend(
			{x: (args.x && isArray(args.x) ? args.x.join(' ') : args.x),
			y: (args.y && isArray(args.y) ? args.y.join(' ') : args.y)}, 
			args.settings || {}));
	},

	/* Draw text along a path.
	   @param  parent    (element or jQuery) the parent node for the text (optional)
	   @param  path      (string) the ID of the path
	   @param  value     (string) the text content or
	                     (SVGText) text with spans and references
	   @param  settings  (object) additional settings for the text (optional)
	   @return  (element) the new text node */
	textpath: function(parent, path, value, settings) {
		var args = this._args(arguments, ['path', 'value']);
		var node = this._text(args.parent, 'textPath', args.value, args.settings || {});
		node.setAttributeNS($.svg.xlinkNS, 'href', args.path);
		return node;
	},

	/* Draw text. */
	_text: function(parent, name, value, settings) {
		var node = this._makeNode(parent, name, settings);
		if (typeof value == 'string') {
			node.appendChild(node.ownerDocument.createTextNode(value));
		}
		else {
			for (var i = 0; i < value._parts.length; i++) {
				var part = value._parts[i];
				if (part[0] == 'tspan') {
					var child = this._makeNode(node, part[0], part[2]);
					child.appendChild(node.ownerDocument.createTextNode(part[1]));
					node.appendChild(child);
				}
				else if (part[0] == 'tref') {
					var child = this._makeNode(node, part[0], part[2]);
					child.setAttributeNS($.svg.xlinkNS, 'href', part[1]);
					node.appendChild(child);
				}
				else if (part[0] == 'textpath') {
					var set = $.extend({}, part[2]);
					set.href = null;
					var child = this._makeNode(node, part[0], set);
					child.setAttributeNS($.svg.xlinkNS, 'href', part[2].href);
					child.appendChild(node.ownerDocument.createTextNode(part[1]));
					node.appendChild(child);
				}
				else { // straight text
					node.appendChild(node.ownerDocument.createTextNode(part[1]));
				}
			}
		}
		return node;
	},

	/* Add a custom SVG element.
	   @param  parent    (element or jQuery) the parent node for the new element (optional)
	   @param  name      (string) the name of the element
	   @param  settings  (object) additional settings for the element (optional)
	   @return  (element) the new custom node */
	other: function(parent, name, settings) {
		var args = this._args(arguments, ['name']);
		return this._makeNode(args.parent, args.name, args.settings || {});
	},

	/* Create a shape node with the given settings. */
	_makeNode: function(parent, name, settings) {
		parent = parent || this._svg;
		var node = this._svg.ownerDocument.createElementNS($.svg.svgNS, name);
		for (var name in settings) {
			var value = settings[name];
			if (value != null && value != null && 
					(typeof value != 'string' || value != '')) {
				node.setAttribute($.svg._attrNames[name] || name, value);
			}
		}
		parent.appendChild(node);
		return node;
	},

	/* Add an existing SVG node to the diagram.
	   @param  parent  (element or jQuery) the parent node for the new node (optional)
	   @param  node    (element) the new node to add or
	                   (string) the jQuery selector for the node or
	                   (jQuery collection) set of nodes to add
	   @return  (SVGWrapper) this wrapper */
	add: function(parent, node) {
		var args = this._args((arguments.length == 1 ? [null, parent] : arguments), ['node']);
		var svg = this;
		args.parent = args.parent || this._svg;
		args.node = (args.node.jquery ? args.node : $(args.node));
		try {
			if ($.svg._renesis) {
				throw 'Force traversal';
			}
			args.parent.appendChild(args.node.cloneNode(true));
		}
		catch (e) {
			args.node.each(function() {
				var child = svg._cloneAsSVG(this);
				if (child) {
					args.parent.appendChild(child);
				}
			});
		}
		return this;
	},

	/* Clone an existing SVG node and add it to the diagram.
	   @param  parent  (element or jQuery) the parent node for the new node (optional)
	   @param  node    (element) the new node to add or
	                   (string) the jQuery selector for the node or
	                   (jQuery collection) set of nodes to add
	   @return  (element[]) collection of new nodes */
	clone: function(parent, node) {
		var svg = this;
		var args = this._args((arguments.length == 1 ? [null, parent] : arguments), ['node']);
		args.parent = args.parent || this._svg;
		args.node = (args.node.jquery ? args.node : $(args.node));
		var newNodes = [];
		args.node.each(function() {
			var child = svg._cloneAsSVG(this);
			if (child) {
				child.id = '';
				args.parent.appendChild(child);
				newNodes.push(child);
			}
		});
		return newNodes;
	},

	/* SVG nodes must belong to the SVG namespace, so clone and ensure this is so.
	   @param  node  (element) the SVG node to clone
	   @return  (element) the cloned node */
	_cloneAsSVG: function(node) {
		var newNode = null;
		if (node.nodeType == 1) { // element
			newNode = this._svg.ownerDocument.createElementNS(
				$.svg.svgNS, this._checkName(node.nodeName));
			for (var i = 0; i < node.attributes.length; i++) {
				var attr = node.attributes.item(i);
				if (attr.nodeName != 'xmlns' && attr.nodeValue) {
					if (attr.prefix == 'xlink') {
						newNode.setAttributeNS($.svg.xlinkNS,
							attr.localName || attr.baseName, attr.nodeValue);
					}
					else {
						newNode.setAttribute(this._checkName(attr.nodeName), attr.nodeValue);
					}
				}
			}
			for (var i = 0; i < node.childNodes.length; i++) {
				var child = this._cloneAsSVG(node.childNodes[i]);
				if (child) {
					newNode.appendChild(child);
				}
			}
		}
		else if (node.nodeType == 3) { // text
			if ($.trim(node.nodeValue)) {
				newNode = this._svg.ownerDocument.createTextNode(node.nodeValue);
			}
		}
		else if (node.nodeType == 4) { // CDATA
			if ($.trim(node.nodeValue)) {
				try {
					newNode = this._svg.ownerDocument.createCDATASection(node.nodeValue);
				}
				catch (e) {
					newNode = this._svg.ownerDocument.createTextNode(
						node.nodeValue.replace(/&/g, '&amp;').
						replace(/</g, '&lt;').replace(/>/g, '&gt;'));
				}
			}
		}
		return newNode;
	},

	/* Node names must be lower case and without SVG namespace prefix. */
	_checkName: function(name) {
		name = (name.substring(0, 1) >= 'A' && name.substring(0, 1) <= 'Z' ?
			name.toLowerCase() : name);
		return (name.substring(0, 4) == 'svg:' ? name.substring(4) : name);
	},

	/* Load an external SVG document.
	   @param  url       (string) the location of the SVG document or
	                     the actual SVG content
	   @param  settings  (boolean) see addTo below or
	                     (function) see onLoad below or
	                     (object) additional settings for the load with attributes below:
	                       addTo       (boolean) true to add to what's already there,
	                                   or false to clear the canvas first
						   changeSize  (boolean) true to allow the canvas size to change,
	                                   or false to retain the original
	                       onLoad      (function) callback after the document has loaded,
	                                   'this' is the container, receives SVG object and
	                                   optional error message as a parameter
	                       parent      (string or element or jQuery) the parent to load
	                                   into, defaults to top-level svg element
	   @return  (SVGWrapper) this root */
	load: function(url, settings) {
		settings = (typeof settings == 'boolean' ? {addTo: settings} :
			(typeof settings == 'function' ? {onLoad: settings} :
			(typeof settings == 'string' ? {parent: settings} : 
			(typeof settings == 'object' && settings.nodeName ? {parent: settings} :
			(typeof settings == 'object' && settings.jquery ? {parent: settings} :
			settings || {})))));
		if (!settings.parent && !settings.addTo) {
			this.clear(false);
		}
		var size = [this._svg.getAttribute('width'), this._svg.getAttribute('height')];
		var wrapper = this;
		// Report a problem with the load
		var reportError = function(message) {
			message = $.svg.local.errorLoadingText + ': ' + message;
			if (settings.onLoad) {
				settings.onLoad.apply(wrapper._container || wrapper._svg, [wrapper, message]);
			}
			else {
				wrapper.text(null, 10, 20, message);
			}
		};
		// Create a DOM from SVG content
		var loadXML4IE = function(data) {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.validateOnParse = false;
			xml.resolveExternals = false;
			xml.async = false;
			xml.loadXML(data);
			if (xml.parseError.errorCode != 0) {
				reportError(xml.parseError.reason);
				return null;
			}
			return xml;
		};
		// Load the SVG DOM
		var loadSVG = function(data) {
			if (!data) {
				return;
			}
			if (data.documentElement.nodeName != 'svg') {
				var errors = data.getElementsByTagName('parsererror');
				var messages = (errors.length ? errors[0].getElementsByTagName('div') : []); // Safari
				reportError(!errors.length ? '???' :
					(messages.length ? messages[0] : errors[0]).firstChild.nodeValue);
				return;
			}
			var parent = (settings.parent ? $(settings.parent)[0] : wrapper._svg);
			var attrs = {};
			for (var i = 0; i < data.documentElement.attributes.length; i++) {
				var attr = data.documentElement.attributes.item(i);
				if (!(attr.nodeName == 'version' || attr.nodeName.substring(0, 5) == 'xmlns')) {
					attrs[attr.nodeName] = attr.nodeValue;
				}
			}
			wrapper.configure(parent, attrs, !settings.parent);
			var nodes = data.documentElement.childNodes;
			for (var i = 0; i < nodes.length; i++) {
				try {
					if ($.svg._renesis) {
						throw 'Force traversal';
					}
					parent.appendChild(wrapper._svg.ownerDocument.importNode(nodes[i], true));
					if (nodes[i].nodeName == 'script') {
						$.globalEval(nodes[i].textContent);
					}
				}
				catch (e) {
					wrapper.add(parent, nodes[i]);
				}
			}
			if (!settings.changeSize) {
				wrapper.configure(parent, {width: size[0], height: size[1]});
			}
			if (settings.onLoad) {
				settings.onLoad.apply(wrapper._container || wrapper._svg, [wrapper]);
			}
		};
		if (url.match('<svg')) { // Inline SVG
			loadSVG($.browser.msie ? loadXML4IE(url) :
				new DOMParser().parseFromString(url, 'text/xml'));
		}
		else { // Remote SVG
			$.ajax({url: url, dataType: ($.browser.msie ? 'text' : 'xml'),
				success: function(xml) {
					loadSVG($.browser.msie ? loadXML4IE(xml) : xml);
				}, error: function(http, message, exc) {
					reportError(message + (exc ? ' ' + exc.message : ''));
				}});
		}
		return this;
	},

	/* Delete a specified node.
	   @param  node  (element or jQuery) the drawing node to remove
	   @return  (SVGWrapper) this root */
	remove: function(node) {
		node = (node.jquery ? node[0] : node);
		node.parentNode.removeChild(node);
		return this;
	},

	/* Delete everything in the current document.
	   @param  attrsToo  (boolean) true to clear any root attributes as well,
	                     false to leave them (optional)
	   @return  (SVGWrapper) this root */
	clear: function(attrsToo) {
		if (attrsToo) {
			this.configure({}, true);
		}
		while (this._svg.firstChild) {
			this._svg.removeChild(this._svg.firstChild);
		}
		return this;
	},

	/* Serialise the current diagram into an SVG text document.
	   @param  node  (SVG element) the starting node (optional)
	   @return  (string) the SVG as text */
	toSVG: function(node) {
		node = node || this._svg;
		return (typeof XMLSerializer == 'undefined' ? this._toSVG(node) :
			new XMLSerializer().serializeToString(node));
	},

	/* Serialise one node in the SVG hierarchy. */
	_toSVG: function(node) {
		var svgDoc = '';
		if (!node) {
			return svgDoc;
		}
		if (node.nodeType == 3) { // Text
			svgDoc = node.nodeValue;
		}
		else if (node.nodeType == 4) { // CDATA
			svgDoc = '<![CDATA[' + node.nodeValue + ']]>';
		}
		else { // Element
			svgDoc = '<' + node.nodeName;
			if (node.attributes) {
				for (var i = 0; i < node.attributes.length; i++) {
					var attr = node.attributes.item(i);
					if (!($.trim(attr.nodeValue) == '' || attr.nodeValue.match(/^\[object/) ||
							attr.nodeValue.match(/^function/))) {
						svgDoc += ' ' + (attr.namespaceURI == $.svg.xlinkNS ? 'xlink:' : '') + 
							attr.nodeName + '="' + attr.nodeValue + '"';
					}
				}
			}	
			if (node.firstChild) {
				svgDoc += '>';
				var child = node.firstChild;
				while (child) {
					svgDoc += this._toSVG(child);
					child = child.nextSibling;
				}
				svgDoc += '</' + node.nodeName + '>';
			}
				else {
				svgDoc += '/>';
			}
		}
		return svgDoc;
	}
});

/* Helper to generate an SVG path.
   Obtain an instance from the SVGWrapper object.
   String calls together to generate the path and use its value:
   var path = root.createPath();
   root.path(null, path.move(100, 100).line(300, 100).line(200, 300).close(), {fill: 'red'});
   or
   root.path(null, path.move(100, 100).line([[300, 100], [200, 300]]).close(), {fill: 'red'}); */
function SVGPath() {
	this._path = '';
}

//Added for circuits.io
//**************************
jQuerySvg.SVGPath = SVGPath;
//**************************

$.extend(SVGPath.prototype, {
	/* Prepare to create a new path.
	   @return  (SVGPath) this path */
	reset: function() {
		this._path = '';
		return this;
	},

	/* Move the pointer to a position.
	   @param  x         (number) x-coordinate to move to or
	                     (number[][]) x-/y-coordinates to move to
	   @param  y         (number) y-coordinate to move to (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	move: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 'm' : 'M'), x, y);
	},

	/* Draw a line to a position.
	   @param  x         (number) x-coordinate to move to or
	                     (number[][]) x-/y-coordinates to move to
	   @param  y         (number) y-coordinate to move to (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	line: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 'l' : 'L'), x, y);
	},

	/* Draw a horizontal line to a position.
	   @param  x         (number) x-coordinate to draw to or
	                     (number[]) x-coordinates to draw to
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	horiz: function(x, relative) {
		this._path += (relative ? 'h' : 'H') + (isArray(x) ? x.join(' ') : x);
		return this;
	},

	/* Draw a vertical line to a position.
	   @param  y         (number) y-coordinate to draw to or
	                     (number[]) y-coordinates to draw to
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	vert: function(y, relative) {
		this._path += (relative ? 'v' : 'V') + (isArray(y) ? y.join(' ') : y);
		return this;
	},

	/* Draw a cubic Bézier curve.
	   @param  x1        (number) x-coordinate of beginning control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y1        (number) y-coordinate of beginning control point (omitted if x1 is array)
	   @param  x2        (number) x-coordinate of ending control point (omitted if x1 is array)
	   @param  y2        (number) y-coordinate of ending control point (omitted if x1 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x1 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x1 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	curveC: function(x1, y1, x2, y2, x, y, relative) {
		relative = (isArray(x1) ? y1 : relative);
		return this._coords((relative ? 'c' : 'C'), x1, y1, x2, y2, x, y);
	},

	/* Continue a cubic Bézier curve.
	   Starting control point is the reflection of the previous end control point.
	   @param  x2        (number) x-coordinate of ending control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y2        (number) y-coordinate of ending control point (omitted if x2 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x2 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x2 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	smoothC: function(x2, y2, x, y, relative) {
		relative = (isArray(x2) ? y2 : relative);
		return this._coords((relative ? 's' : 'S'), x2, y2, x, y);
	},

	/* Draw a quadratic Bézier curve.
	   @param  x1        (number) x-coordinate of control point or
	                     (number[][]) x-/y-coordinates of control and end points to draw to
	   @param  y1        (number) y-coordinate of control point (omitted if x1 is array)
	   @param  x         (number) x-coordinate of curve end (omitted if x1 is array)
	   @param  y         (number) y-coordinate of curve end (omitted if x1 is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	curveQ: function(x1, y1, x, y, relative) {
		relative = (isArray(x1) ? y1 : relative);
		return this._coords((relative ? 'q' : 'Q'), x1, y1, x, y);
	},

	/* Continue a quadratic Bézier curve.
	   Control point is the reflection of the previous control point.
	   @param  x         (number) x-coordinate of curve end or
	                     (number[][]) x-/y-coordinates of points to draw to
	   @param  y         (number) y-coordinate of curve end (omitted if x is array)
	   @param  relative  (boolean) true for coordinates relative to the current point,
	                     false for coordinates being absolute
	   @return  (SVGPath) this path */
	smoothQ: function(x, y, relative) {
		relative = (isArray(x) ? y : relative);
		return this._coords((relative ? 't' : 'T'), x, y);
	},

	/* Generate a path command with (a list of) coordinates. */
	_coords: function(cmd, x1, y1, x2, y2, x3, y3) {
		if (isArray(x1)) {
			for (var i = 0; i < x1.length; i++) {
				var cs = x1[i];
				this._path += (i == 0 ? cmd : ' ') + cs[0] + ',' + cs[1] +
					(cs.length < 4 ? '' : ' ' + cs[2] + ',' + cs[3] +
					(cs.length < 6 ? '': ' ' + cs[4] + ',' + cs[5]));
			}
		}
		else {
			this._path += cmd + x1 + ',' + y1 + 
				(x2 == null ? '' : ' ' + x2 + ',' + y2 +
				(x3 == null ? '' : ' ' + x3 + ',' + y3));
		}
		return this;
	},

	/* Draw an arc to a position.
	   @param  rx         (number) x-radius of arc or
	                      (number/boolean[][]) x-/y-coordinates and flags for points to draw to
	   @param  ry         (number) y-radius of arc (omitted if rx is array)
	   @param  xRotate    (number) x-axis rotation (degrees, clockwise) (omitted if rx is array)
	   @param  large      (boolean) true to draw the large part of the arc,
	                      false to draw the small part (omitted if rx is array)
	   @param  clockwise  (boolean) true to draw the clockwise arc,
	                      false to draw the anti-clockwise arc (omitted if rx is array)
	   @param  x          (number) x-coordinate of arc end (omitted if rx is array)
	   @param  y          (number) y-coordinate of arc end (omitted if rx is array)
	   @param  relative   (boolean) true for coordinates relative to the current point,
	                      false for coordinates being absolute
	   @return  (SVGPath) this path */
	arc: function(rx, ry, xRotate, large, clockwise, x, y, relative) {
		relative = (isArray(rx) ? ry : relative);
		this._path += (relative ? 'a' : 'A');
		if (isArray(rx)) {
			for (var i = 0; i < rx.length; i++) {
				var cs = rx[i];
				this._path += (i == 0 ? '' : ' ') + cs[0] + ',' + cs[1] + ' ' +
					cs[2] + ' ' + (cs[3] ? '1' : '0') + ',' +
					(cs[4] ? '1' : '0') + ' ' + cs[5] + ',' + cs[6];
			}
		}
		else {
			this._path += rx + ',' + ry + ' ' + xRotate + ' ' +
				(large ? '1' : '0') + ',' + (clockwise ? '1' : '0') + ' ' + x + ',' + y;
		}
		return this;
	},

	/* Close the current path.
	   @return  (SVGPath) this path */
	close: function() {
		this._path += 'z';
		return this;
	},

	/* Return the string rendering of the specified path.
	   @return  (string) stringified path */
	path: function() {
		return this._path;
	}
});

SVGPath.prototype.moveTo = SVGPath.prototype.move;
SVGPath.prototype.lineTo = SVGPath.prototype.line;
SVGPath.prototype.horizTo = SVGPath.prototype.horiz;
SVGPath.prototype.vertTo = SVGPath.prototype.vert;
SVGPath.prototype.curveCTo = SVGPath.prototype.curveC;
SVGPath.prototype.smoothCTo = SVGPath.prototype.smoothC;
SVGPath.prototype.curveQTo = SVGPath.prototype.curveQ;
SVGPath.prototype.smoothQTo = SVGPath.prototype.smoothQ;
SVGPath.prototype.arcTo = SVGPath.prototype.arc;

/* Helper to generate an SVG text object.
   Obtain an instance from the SVGWrapper object.
   String calls together to generate the text and use its value:
   var text = root.createText();
   root.text(null, x, y, text.string('This is ').
     span('red', {fill: 'red'}).string('!'), {fill: 'blue'}); */
function SVGText() {
	this._parts = []; // The components of the text object
}

$.extend(SVGText.prototype, {
	/* Prepare to create a new text object.
	   @return  (SVGText) this text */
	reset: function() {
		this._parts = [];
		return this;
	},

	/* Add a straight string value.
	   @param  value  (string) the actual text
	   @return  (SVGText) this text object */
	string: function(value) {
		this._parts[this._parts.length] = ['text', value];
		return this;
	},

	/* Add a separate text span that has its own settings.
	   @param  value     (string) the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	span: function(value, settings) {
		this._parts[this._parts.length] = ['tspan', value, settings];
		return this;
	},

	/* Add a reference to a previously defined text string.
	   @param  id        (string) the ID of the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	ref: function(id, settings) {
		this._parts[this._parts.length] = ['tref', id, settings];
		return this;
	},

	/* Add text drawn along a path.
	   @param  id        (string) the ID of the path
	   @param  value     (string) the actual text
	   @param  settings  (object) the settings for this text
	   @return  (SVGText) this text object */
	path: function(id, value, settings) {
		this._parts[this._parts.length] = ['textpath', value, 
			$.extend({href: id}, settings || {})];
		return this;
	}
});

/* Attach the SVG functionality to a jQuery selection.
   @param  command  (string) the command to run (optional, default 'attach')
   @param  options  (object) the new settings to use for these SVG instances
   @return jQuery (object) for chaining further calls */
$.fn.svg = function(options) {
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && options == 'get') {
		return $.svg['_' + options + 'SVG'].apply($.svg, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		if (typeof options == 'string') {
			$.svg['_' + options + 'SVG'].apply($.svg, [this].concat(otherArgs));
		}
		else {
			$.svg._attachSVG(this, options || {});
		} 
	});
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && a.constructor == Array);
}

// Singleton primary SVG interface
$.svg = new SVGManager();

})(jQuery);
(function(a){var b=new Array;var c=new Array;a.fn.doAutosize=function(b){var c=a(this).data("minwidth"),d=a(this).data("maxwidth"),e="",f=a(this),g=a("#"+a(this).data("tester_id"));if(e===(e=f.val())){return}var h=e.replace(/&/g,"&").replace(/\s/g," ").replace(/</g,"<").replace(/>/g,">");g.html(h);var i=g.width(),j=i+b.comfortZone>=c?i+b.comfortZone:c,k=f.width(),l=j<k&&j>=c||j>c&&j<d;if(l){f.width(j)}};a.fn.resetAutosize=function(b){var c=a(this).data("minwidth")||b.minInputWidth||a(this).width(),d=a(this).data("maxwidth")||b.maxInputWidth||a(this).closest(".tagsinput").width()-b.inputPadding,e="",f=a(this),g=a("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:f.css("fontSize"),fontFamily:f.css("fontFamily"),fontWeight:f.css("fontWeight"),letterSpacing:f.css("letterSpacing"),whiteSpace:"nowrap"}),h=a(this).attr("id")+"_autosize_tester";if(!a("#"+h).length>0){g.attr("id",h);g.appendTo("body")}f.data("minwidth",c);f.data("maxwidth",d);f.data("tester_id",h);f.css("width",c)};a.fn.addTag=function(d,e){e=jQuery.extend({focus:false,callback:true},e);this.each(function(){var f=a(this).attr("id");var g=a(this).val().split(b[f]);if(g[0]==""){g=new Array}d=jQuery.trim(d);if(e.unique){var h=a(g).tagExist(d);if(h==true){a("#"+f+"_tag").addClass("not_valid")}}else{var h=false}if(d!=""&&h!=true){a("<span>").addClass("tag").append(a("<span>").text(d).append("  "),a("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return a("#"+f).removeTag(escape(d))})).insertBefore("#"+f+"_addTag");g.push(d);a("#"+f+"_tag").val("");if(e.focus){a("#"+f+"_tag").focus()}else{a("#"+f+"_tag").blur()}a.fn.tagsInput.updateTagsField(this,g);if(e.callback&&c[f]&&c[f]["onAddTag"]){var i=c[f]["onAddTag"];i.call(this,d)}if(c[f]&&c[f]["onChange"]){var j=g.length;var i=c[f]["onChange"];i.call(this,a(this),g[j-1])}}});return false};a.fn.removeTag=function(d){d=unescape(d);this.each(function(){var e=a(this).attr("id");var f=a(this).val().split(b[e]);a("#"+e+"_tagsinput .tag").remove();str="";for(i=0;i<f.length;i++){if(f[i]!=d){str=str+b[e]+f[i]}}a.fn.tagsInput.importTags(this,str);if(c[e]&&c[e]["onRemoveTag"]){var g=c[e]["onRemoveTag"];g.call(this,d)}});return false};a.fn.tagExist=function(b){return jQuery.inArray(b,a(this))>=0};a.fn.importTags=function(b){id=a(this).attr("id");a("#"+id+"_tagsinput .tag").remove();a.fn.tagsInput.importTags(this,b)};a.fn.tagsInput=function(d){var e=jQuery.extend({interactive:true,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:false},hide:true,delimiter:",",unique:true,removeWithBackspace:true,placeholderColor:"#666666",autosize:true,comfortZone:20,inputPadding:6*2},d);this.each(function(){if(e.hide){a(this).hide()}var d=a(this).attr("id");if(!d||b[a(this).attr("id")]){d=a(this).attr("id","tags"+(new Date).getTime()).attr("id")}var f=jQuery.extend({pid:d,real_input:"#"+d,holder:"#"+d+"_tagsinput",input_wrapper:"#"+d+"_addTag",fake_input:"#"+d+"_tag"},e);b[d]=f.delimiter;if(e.onAddTag||e.onRemoveTag||e.onChange){c[d]=new Array;c[d]["onAddTag"]=e.onAddTag;c[d]["onRemoveTag"]=e.onRemoveTag;c[d]["onChange"]=e.onChange}var g='<div id="'+d+'_tagsinput" class="tagsinput"><div id="'+d+'_addTag">';if(e.interactive){g=g+'<input id="'+d+'_tag" value="" data-default="'+e.defaultText+'" />'}g=g+'</div><div class="tags_clear"></div></div>';a(g).insertAfter(this);a(f.holder).css("width",e.width);a(f.holder).css("height",e.height);if(a(f.real_input).val()!=""){a.fn.tagsInput.importTags(a(f.real_input),a(f.real_input).val())}if(e.interactive){a(f.fake_input).val(a(f.fake_input).attr("data-default"));a(f.fake_input).css("color",e.placeholderColor);a(f.fake_input).resetAutosize(e);a(f.holder).bind("click",f,function(b){a(b.data.fake_input).focus()});a(f.fake_input).bind("focus",f,function(b){if(a(b.data.fake_input).val()==a(b.data.fake_input).attr("data-default")){a(b.data.fake_input).val("")}a(b.data.fake_input).css("color","#000000")});if(e.autocomplete_url!=undefined){autocomplete_options={source:e.autocomplete_url};for(attrname in e.autocomplete){autocomplete_options[attrname]=e.autocomplete[attrname]}if(jQuery.Autocompleter!==undefined){a(f.fake_input).autocomplete(e.autocomplete_url,e.autocomplete);a(f.fake_input).bind("result",f,function(b,c,f){if(c){a("#"+d).addTag(c[0]+"",{focus:true,unique:e.unique})}})}else if(jQuery.ui.autocomplete!==undefined){a(f.fake_input).autocomplete(autocomplete_options);a(f.fake_input).bind("autocompleteselect",f,function(b,c){a(b.data.real_input).addTag(c.item.value,{focus:true,unique:e.unique});return false})}}else{a(f.fake_input).bind("blur",f,function(b){var c=a(this).attr("data-default");if(a(b.data.fake_input).val()!=""&&a(b.data.fake_input).val()!=c){if(b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length))a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:true,unique:e.unique})}else{a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default"));a(b.data.fake_input).css("color",e.placeholderColor)}return false})}a(f.fake_input).bind("keypress",f,function(b){if(b.which==b.data.delimiter.charCodeAt(0)||b.which==13){b.preventDefault();if(b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length))a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:true,unique:e.unique});a(b.data.fake_input).resetAutosize(e);return false}else if(b.data.autosize){a(b.data.fake_input).doAutosize(e)}});f.removeWithBackspace&&a(f.fake_input).bind("keydown",function(b){if(b.keyCode==8&&a(this).val()==""){b.preventDefault();var c=a(this).closest(".tagsinput").find(".tag:last").text();var d=a(this).attr("id").replace(/_tag$/,"");c=c.replace(/[\s]+x$/,"");a("#"+d).removeTag(escape(c));a(this).trigger("focus")}});a(f.fake_input).blur();if(f.unique){a(f.fake_input).keydown(function(b){if(b.keyCode==8||String.fromCharCode(b.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)){a(this).removeClass("not_valid")}})}}});return this};a.fn.tagsInput.updateTagsField=function(c,d){var e=a(c).attr("id");a(c).val(d.join(b[e]))};a.fn.tagsInput.importTags=function(d,e){a(d).val("");var f=a(d).attr("id");var g=e.split(b[f]);for(i=0;i<g.length;i++){a(d).addTag(g[i],{focus:false,callback:false})}if(c[f]&&c[f]["onChange"]){var h=c[f]["onChange"];h.call(d,d,g[i])}}})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.11.2
* @docs http://VelocityJS.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/

!function(e){"function"==typeof define&&define.amd?window.Velocity?define(e):define(["jquery"],e):e("object"==typeof exports?window.Velocity?void 0:require("jquery"):window.jQuery)}(function(e){return function(t,r,a,o){function i(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function n(e){var t=$.data(e,p);return null===t?o:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,t){var r=e;return y.isString(e)?v.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):y.isArray(e)&&4===e.length?S.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:f),r}function u(e){if(e)for(var t=(new Date).getTime(),r=0,a=v.State.calls.length;a>r;r++)if(v.State.calls[r]){var i=v.State.calls[r],s=i[0],l=i[2],p=i[3];p||(p=v.State.calls[r][3]=t-16);for(var d=Math.min((t-p)/l.duration,1),f=0,g=s.length;g>f;f++){var m=s[f],S=m.element;if(n(S)){var x=!1;l.display&&"none"!==l.display&&b.setPropertyValue(S,"display",l.display),l.visibility&&"hidden"!==l.visibility&&b.setPropertyValue(S,"visibility",l.visibility);for(var V in m)if("element"!==V){var P=m[V],w,C=y.isString(P.easing)?v.Easings[P.easing]:P.easing;if(w=1===d?P.endValue:P.startValue+(P.endValue-P.startValue)*C(d),P.currentValue=w,b.Hooks.registered[V]){var T=b.Hooks.getRoot(V),k=n(S).rootPropertyValueCache[T];k&&(P.rootPropertyValue=k)}var E=b.setPropertyValue(S,V,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);b.Hooks.registered[V]&&(n(S).rootPropertyValueCache[T]=b.Normalizations.registered[T]?b.Normalizations.registered[T]("extract",null,E[1]):E[1]),"transform"===E[0]&&(x=!0)}l.mobileHA&&n(S).transformCache.translate3d===o&&(n(S).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&b.flushTransformCache(S)}}l.display&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(i[1],i[1],d,Math.max(0,p+l.duration-t),p),1===d&&c(r)}v.State.isTicking&&(v.mock?u(!0):h(u))}function c(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],a=v.State.calls[e][1],i=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||i.loop||("none"===i.display&&b.setPropertyValue(p,"display",i.display),"hidden"===i.visibility&&b.setPropertyValue(p,"visibility",i.visibility)),($.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&n(p)){n(p).isAnimating=!1,n(p).rootPropertyValueCache={};var d=!1;$.each(n(p).transformCache,function(e,t){var r=/^scale/.test(e)?1:0;new RegExp("^\\("+r+"[^.]").test(t)&&(d=!0,delete n(p).transformCache[e])}),i.mobileHA&&(d=!0,delete n(p).transformCache.translate3d),d&&b.flushTransformCache(p),b.Values.removeClass(p,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(a,a)}catch(f){setTimeout(function(){throw f},1)}s&&i.loop!==!0&&s(a),i.loop!==!0||t||v.animate(p,"reverse",{loop:!0,delay:i.delay}),i.queue!==!1&&$.dequeue(p,i.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var p="velocity",d=400,f="swing",g=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return o}(),m=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),h=r.requestAnimationFrame||m,y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn!==o?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==o&&t.Velocity.Utilities==o)throw new Error("Velocity: Namespace is occupied.");if(7>=g){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===g&&!e)throw new Error("Velocity: For IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:d,easing:f,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,p,{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:function(){},hook:function(e,t,r){var a=o;return y.isWrapped(e)&&(e=[].slice.call(e)),$.each(y.isNode(e)?[e]:e,function(e,i){if(n(i)===o&&v.init(i),r===o)a===o&&(a=v.CSS.getPropertyValue(i,t));else{var s=v.CSS.setPropertyValue(i,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(i),a=s}}),a},mock:!1,version:{major:0,minor:11,patch:2},debug:!1};r.pageYOffset!==o?(v.State.scrollAnchor=r,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var S=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,i){return((e(o,i)*a+t(o,i))*a+r(o))*a}function o(a,o,i){return 3*e(o,i)*a*a+2*t(o,i)*a+r(o)}return function(e,t,r,i){function n(t){for(var i=t,n=0;8>n;++n){var s=o(i,e,r);if(0===s)return i;var l=a(i,e,r)-t;i-=l/s}return i}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(o){return e===t&&r===i?o:a(n(o),t,i)}}}(),x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var i={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,d;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,i.tension=e,i.friction=t,c=null!==o,c?(s=a(e,t),p=s/o*u):p=u;;)if(d=r(d||i,p),n.push(1+d.x),s+=16,!(Math.abs(d.x)>l&&Math.abs(d.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=S(.25,.1,.25,1),v.Easings["ease-in"]=S(.42,0,1,1),v.Easings["ease-out"]=S(0,0,.58,1),v.Easings["ease-in-out"]=S(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var b=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<b.Lists.colors.length;e++)b.Hooks.templates[b.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(g)for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");var o=r[1].match(b.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),b.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var i=t+a[e],n=e;b.Hooks.registered[i]=[t,n]}}},getRoot:function(e){var t=b.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return b.RegEx.valueUnwrap.test(t)&&(t=t.match(b.Hooks.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(t)&&(t=b.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=b.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=b.Hooks.cleanRootPropertyValue(a,t),t.toString().match(b.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=b.Hooks.registered[e];if(a){var o=a[0],i=a[1],n,s;return r=b.Hooks.cleanRootPropertyValue(o,r),n=r.toString().match(b.RegEx.valueSplit),n[i]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return b.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(b.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=g)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=g||v.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var e=0;e<b.Lists.transformsBase.length;e++)!function(){var t=b.Lists.transformsBase[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return n(r)===o||n(r).transformCache[t]===o?/^scale/i.test(t)?1:0:n(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":v.State.isAndroid&&n(r).transformCache[t]===o&&1>a&&(a=1),i=!/(\d)$/i.test(a);break;case"skew":i=!/(deg|\d)$/i.test(a);break;case"rotate":i=!/(deg|\d)$/i.test(a)}return i||(n(r).transformCache[t]="("+a+")"),n(r).transformCache[t]}}}();for(var e=0;e<b.Lists.colors.length;e++)!function(){var t=b.Lists.colors[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var i;if(b.RegEx.wrappedValueAlreadyExtracted.test(a))i=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==o?s[a]:s.black:b.RegEx.isHex.test(a)?n="rgb("+b.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),i=(n||a).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=g||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=g?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=g?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(g||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(v.State.prefixElement.style[o]))return v.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,i){function s(e,t){function a(){u&&b.setPropertyValue(e,"display","none")}var l=0;if(8>=g)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===b.getPropertyValue(e,"display")&&(u=!0,b.setPropertyValue(e,"display",b.Values.getDisplayType(e))),!i){if("height"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(b.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(b.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var d;d=n(e)===o?r.getComputedStyle(e,null):n(e).computedStyle?n(e).computedStyle:n(e).computedStyle=r.getComputedStyle(e,null),(g||v.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===g&&"filter"===t?d.getPropertyValue(t):d[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(b.Hooks.registered[t]){var u=t,c=b.Hooks.getRoot(u);a===o&&(a=b.getPropertyValue(e,b.Names.prefixCheck(c)[0])),b.Normalizations.registered[c]&&(a=b.Normalizations.registered[c]("extract",e,a)),l=b.Hooks.extractValue(u,a)}else if(b.Normalizations.registered[t]){var p,d;p=b.Normalizations.registered[t]("name",e),"transform"!==p&&(d=s(e,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(d)&&b.Hooks.templates[t]&&(d=b.Hooks.templates[t][1])),l=b.Normalizations.registered[t]("extract",e,d)}return/^[\d-]/.test(l)||(l=n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):s(e,b.Names.prefixCheck(t)[0])),b.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,o,i){var s=t;if("scroll"===t)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?r.scrollTo(a,i.alternateValue):r.scrollTo(i.alternateValue,a);else if(b.Normalizations.registered[t]&&"transform"===b.Normalizations.registered[t]("name",e))b.Normalizations.registered[t]("inject",e,a),s="transform",a=n(e).transformCache[t];else{if(b.Hooks.registered[t]){var l=t,u=b.Hooks.getRoot(t);o=o||b.getPropertyValue(e,u),a=b.Hooks.injectValue(l,a,o),t=u}if(b.Normalizations.registered[t]&&(a=b.Normalizations.registered[t]("inject",e,a),t=b.Normalizations.registered[t]("name",e)),s=b.Names.prefixCheck(t)[0],8>=g)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else n(e)&&n(e).isSVG&&b.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[s]=a;v.debug>=2&&console.log("Set "+t+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(b.getPropertyValue(e,t))}var r="";if((g||v.State.isAndroid&&!v.State.isChrome)&&n(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(n(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;$.each(n(e).transformCache,function(t){return o=n(e).transformCache[t],"transformPerspective"===t?(i=o,!0):(9===g&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),i&&(r="perspective"+i+" "+r)}b.setPropertyValue(e,"transform",r)}};b.Hooks.register(),b.Normalizations.register(),v.animate=function(){function e(){return p?C.promise||null:f}function t(){function e(e){function d(e,r){var a=o,i=o,n=o;return y.isArray(e)?(a=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||b.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!b.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(i=r?e[1]:l(e[1],s.duration),e[2]!==o&&(n=e[2]))):a=e,r||(i=i||s.easing),y.isFunction(a)&&(a=a.call(t,V,x)),y.isFunction(n)&&(n=n.call(t,V,x)),[a||0,i,n]}function f(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=b.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:t.parentNode||a.body,position:b.getPropertyValue(t,"position"),fontSize:b.getPropertyValue(t,"fontSize")},o=e.position===N.lastPosition&&e.myParent===N.lastParent,i=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(i&&o)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=n(t).isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div");v.init(u),e.myParent.appendChild(u),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"overflow","hidden"),v.CSS.setPropertyValue(u,"overflowX","hidden"),v.CSS.setPropertyValue(u,"overflowY","hidden"),v.CSS.setPropertyValue(u,"boxSizing","content-box"),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),v.CSS.setPropertyValue(u,"minWidth",s+"%"),v.CSS.setPropertyValue(u,"maxWidth",s+"%"),v.CSS.setPropertyValue(u,"width",s+"%"),v.CSS.setPropertyValue(u,"minHeight",s+"%"),v.CSS.setPropertyValue(u,"maxHeight",s+"%"),v.CSS.setPropertyValue(u,"height",s+"%"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(b.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(b.getPropertyValue(a.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(r.innerWidth)/100,N.vhToPx=parseFloat(r.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(s.begin&&0===V)try{s.begin.call(m,m)}catch(P){setTimeout(function(){throw P},1)}if("scroll"===T){var w=/^x$/i.test(s.axis)?"Left":"Top",k=parseFloat(s.offset)||0,E,F,A;s.container?y.isWrapped(s.container)||y.isNode(s.container)?(s.container=s.container[0]||s.container,E=s.container["scroll"+w],A=E+$(t).position()[w.toLowerCase()]+k):s.container=null:(E=v.State.scrollAnchor[v.State["scrollProperty"+w]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===w?"Top":"Left")]],A=$(t).offset()[w.toLowerCase()]+k),c={scroll:{rootPropertyValue:!1,startValue:E,currentValue:E,endValue:A,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:w,alternateValue:F}},element:t},v.debug&&console.log("tweensContainer (scroll): ",c.scroll,t)}else if("reverse"===T){if(!n(t).tweensContainer)return void $.dequeue(t,s.queue);"none"===n(t).opts.display&&(n(t).opts.display="block"),"hidden"===n(t).opts.visibility&&(n(t).opts.visibility="visible"),n(t).opts.loop=!1,n(t).opts.begin=null,n(t).opts.complete=null,S.easing||delete s.easing,S.duration||delete s.duration,s=$.extend({},n(t).opts,s);var j=$.extend(!0,{},n(t).tweensContainer);for(var L in j)if("element"!==L){var z=j[L].startValue;j[L].startValue=j[L].currentValue=j[L].endValue,j[L].endValue=z,y.isEmptyObject(S)||(j[L].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(j[L]),t)}c=j}else if("start"===T){var j;n(t).tweensContainer&&n(t).isAnimating===!0&&(j=n(t).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(e)){var r=d(t,!0),a=r[0],i=r[1],n=r[2];if(b.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(a),u=n?b.Values.hexToRgb(n):o,c=0;c<s.length;c++)h[e+s[c]]=[l[c],i,u?u[c]:u];delete h[e]}}});for(var M in h){var R=d(h[M]),q=R[0],B=R[1],O=R[2];M=b.Names.camelCase(M);var W=b.Hooks.getRoot(M),X=!1;if(n(t).isSVG||b.Names.prefixCheck(W)[1]!==!1||b.Normalizations.registered[W]!==o){(s.display&&"none"!==s.display||s.visibility&&"hidden"!==s.visibility)&&/opacity|filter/.test(M)&&!O&&0!==q&&(O=0),s._cacheValues&&j&&j[M]?(O===o&&(O=j[M].endValue+j[M].unitType),X=n(t).rootPropertyValueCache[W]):b.Hooks.registered[M]?O===o?(X=b.getPropertyValue(t,W),O=b.getPropertyValue(t,M,X)):X=b.Hooks.templates[W][1]:O===o&&(O=b.getPropertyValue(t,M));var Y,G,I,U=!1;if(Y=f(M,O),O=Y[0],I=Y[1],Y=f(M,q),q=Y[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),G=Y[1],O=parseFloat(O)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(M)?(q/=100,G="em"):/^scale/.test(M)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(M)&&(q=q/100*255,G="")),/[\/*]/.test(U))G=I;else if(I!==G&&0!==O)if(0===q)G=I;else{p=p||g();var D=/margin|padding|left|right|width|text|word|letter/i.test(M)||/X$/.test(M)?"x":"y";switch(I){case"%":O*="x"===D?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:O*=p[I+"ToPx"]}switch(G){case"%":O*=1/("x"===D?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:O*=1/p[G+"ToPx"]}}switch(U){case"+":q=O+q;break;case"-":q=O-q;break;case"*":q=O*q;break;case"/":q=O/q}c[M]={rootPropertyValue:X,startValue:O,currentValue:O,endValue:q,unitType:G,easing:B},v.debug&&console.log("tweensContainer ("+M+"): "+JSON.stringify(c[M]),t)}else v.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}c.element=t}c.element&&(b.Values.addClass(t,"velocity-animating"),H.push(c),n(t).tweensContainer=c,n(t).opts=s,n(t).isAnimating=!0,V===x-1?(v.State.calls.length>1e4&&(v.State.calls=i(v.State.calls)),v.State.calls.push([H,m,s,null,C.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,u())):V++)}var t=this,s=$.extend({},v.defaults,S),c={},p;if(n(t)===o&&v.init(t),parseFloat(s.delay)&&s.queue!==!1&&$.queue(t,s.queue,function(e){v.velocityQueueEntryFlag=!0,n(t).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),v.mock===!0)s.duration=1;else switch(s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=d;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}s.easing=l(s.easing,s.duration),s.begin&&!y.isFunction(s.begin)&&(s.begin=null),s.progress&&!y.isFunction(s.progress)&&(s.progress=null),s.complete&&!y.isFunction(s.complete)&&(s.complete=null),s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(t))),s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(t,s.queue,function(t,r){return r===!0?(C.promise&&C.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var s=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties)),p,f,g,m,h,S;if(y.isWrapped(this)?(p=!1,g=0,m=this,f=this):(p=!0,g=1,m=s?arguments[0].elements:arguments[0]),m=y.isWrapped(m)?[].slice.call(m):m){s?(h=arguments[0].properties,S=arguments[0].options):(h=arguments[g],S=arguments[g+1]);var x=y.isArray(m)||y.isNodeList(m)?m.length:1,V=0;if("stop"!==h&&!$.isPlainObject(S)){var P=g+1;S={};for(var w=P;w<arguments.length;w++)!y.isArray(arguments[w])&&/^\d/.test(arguments[w])?S.duration=parseFloat(arguments[w]):y.isString(arguments[w])||y.isArray(arguments[w])?S.easing=arguments[w]:y.isFunction(arguments[w])&&(S.complete=arguments[w])}var C={promise:null,resolver:null,rejecter:null};p&&v.Promise&&(C.promise=new v.Promise(function(e,t){C.resolver=e,C.rejecter=t}));var T;switch(h){case"scroll":T="scroll";break;case"reverse":T="reverse";break;case"stop":$.each(y.isNode(m)?[m]:m,function(e,t){n(t)&&n(t).delayTimer&&(clearTimeout(n(t).delayTimer.setTimeout),n(t).delayTimer.next&&n(t).delayTimer.next(),delete n(t).delayTimer)});var k=[];return $.each(v.State.calls,function(e,t){t&&$.each(y.isNode(t[1])?[t[1]]:t[1],function(t,r){$.each(y.isNode(m)?[m]:m,function(t,a){if(a===r){if(n(a)&&$.each(n(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),S===!0||y.isString(S)){var o=y.isString(S)?S:"";$.each($.queue(a,o),function(e,t){y.isFunction(t)&&t(null,!0)}),$.queue(a,o,[])}k.push(e)}})})}),$.each(k,function(e,t){c(t,!0)}),C.promise&&C.resolver(m),e();default:if(!$.isPlainObject(h)||y.isEmptyObject(h)){if(y.isString(h)&&v.Sequences[h]){var E=S.duration,F=S.delay||0;return S.backwards===!0&&(m=(y.isWrapped(m)?[].slice.call(m):m).reverse()),$.each(m,function(e,t){parseFloat(S.stagger)?S.delay=F+parseFloat(S.stagger)*e:y.isFunction(S.stagger)&&(S.delay=F+S.stagger.call(t,e,x)),S.drag&&(S.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:d),S.duration=Math.max(S.duration*(S.backwards?1-e/x:(e+1)/x),.75*S.duration,200)),v.Sequences[h].call(t,t,S||{},e,x,m,C.promise?C:o)}),e()}var A="Velocity: First argument ("+h+") was not a property map, a known action, or a registered sequence. Aborting.";return C.promise?C.rejecter(new Error(A)):console.log(A),e()}T="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},H=[];$.each(y.isNode(m)?[m]:m,function(e,r){y.isNode(r)&&t.call(r)});var j=$.extend({},v.defaults,S),L;if(j.loop=parseInt(j.loop),L=2*j.loop-1,j.loop)for(var z=0;L>z;z++){var M={delay:j.delay};z===L-1&&(M.display=j.display,M.visibility=j.visibility,M.complete=j.complete),v.animate(m,"reverse",M)}return e()}},v.State.isMobile||a.hidden===o||a.addEventListener("visibilitychange",function(){a.hidden?(h=function(e){return setTimeout(function(){e(!0)},16)},u()):h=r.requestAnimationFrame||m});var V;return e&&e.fn?V=e:r.Zepto&&(V=r.Zepto),(V||r).Velocity=v,V&&(V.fn.velocity=v.animate,V.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),v.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[o,0]}}else{r();for(var a in l){var o=v.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[0,o]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(i||e)},v.animate(e,l,s)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==o-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(i||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),v.animate(this,l,s)}}),v}(e||window,window,document)});
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/

!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Sticky Element Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/

!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass).unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));
/*!
 * Copyright 2012, Chris Wanstrath
 * Released under the MIT License
 * https://github.com/defunkt/jquery-pjax
 */


(function($){

// When called on a container with a selector, fetches the href with
// ajax into the container or with the data-pjax attribute on the link
// itself.
//
// Tries to make sure the back button and ctrl+click work the way
// you'd expect.
//
// Exported as $.fn.pjax
//
// Accepts a jQuery ajax options object that may include these
// pjax specific options:
//
//
// container - Where to stick the response body. Usually a String selector.
//             $(container).html(xhr.responseBody)
//             (default: current jquery context)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// For convenience the second parameter can be either the container or
// the options object.
//
// Returns the jQuery object
function fnPjax(selector, container, options) {
  var context = this
  return this.on('click.pjax', selector, function(event) {
    var opts = $.extend({}, optionsFor(container, options))
    if (!opts.container)
      opts.container = $(this).attr('data-pjax') || context
    handleClick(event, opts)
  })
}

// Public: pjax on click handler
//
// Exported as $.pjax.click.
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//   $(document).on('click', 'a', $.pjax.click)
//   // is the same as
//   $(document).pjax('a')
//
//  $(document).on('click', 'a', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.click(event, container)
//  })
//
// Returns nothing.
function handleClick(event, container, options) {
  options = optionsFor(container, options)

  var link = event.currentTarget

  if (link.tagName.toUpperCase() !== 'A')
    throw "$.fn.pjax or $.pjax.click requires an anchor element"

  // Middle click, cmd click, and ctrl click should open
  // links in a new tab as normal.
  if ( event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey )
    return

  // Ignore cross origin links
  if ( location.protocol !== link.protocol || location.hostname !== link.hostname )
    return

  // Ignore case when a hash is being tacked on the current URL
  if ( link.href.indexOf('#') > -1 && stripHash(link) == stripHash(location) )
    return

  // Ignore event with default prevented
  if (event.isDefaultPrevented())
    return

  var defaults = {
    url: link.href,
    container: $(link).attr('data-pjax'),
    target: link
  }

  var opts = $.extend({}, defaults, options)
  var clickEvent = $.Event('pjax:click')
  $(link).trigger(clickEvent, [opts])

  if (!clickEvent.isDefaultPrevented()) {
    pjax(opts)
    event.preventDefault()
    $(link).trigger('pjax:clicked', [opts])
  }
}

// Public: pjax on form submit handler
//
// Exported as $.pjax.submit
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//  $(document).on('submit', 'form', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.submit(event, container)
//  })
//
// Returns nothing.
function handleSubmit(event, container, options) {
  options = optionsFor(container, options)

  var form = event.currentTarget

  if (form.tagName.toUpperCase() !== 'FORM')
    throw "$.pjax.submit requires a form element"

  var defaults = {
    type: form.method.toUpperCase(),
    url: form.action,
    container: $(form).attr('data-pjax'),
    target: form
  }

  if (defaults.type !== 'GET' && window.FormData !== undefined) {
    defaults.data = new FormData(form);
    defaults.processData = false;
    defaults.contentType = false;
  } else {
    // Can't handle file uploads, exit
    if ($(form).find(':file').length) {
      return;
    }

    // Fallback to manually serializing the fields
    defaults.data = $(form).serializeArray();
  }

  pjax($.extend({}, defaults, options))

  event.preventDefault()
}

// Loads a URL with ajax, puts the response body inside a container,
// then pushState()'s the loaded URL.
//
// Works just like $.ajax in that it accepts a jQuery ajax
// settings object (with keys like url, type, data, etc).
//
// Accepts these extra keys:
//
// container - Where to stick the response body.
//             $(container).html(xhr.responseBody)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// Use it just like $.ajax:
//
//   var xhr = $.pjax({ url: this.href, container: '#main' })
//   console.log( xhr.readyState )
//
// Returns whatever $.ajax returns.
function pjax(options) {
  options = $.extend(true, {}, $.ajaxSettings, pjax.defaults, options)

  if ($.isFunction(options.url)) {
    options.url = options.url()
  }

  var target = options.target

  var hash = parseURL(options.url).hash

  var context = options.context = findContainerFor(options.container)

  // We want the browser to maintain two separate internal caches: one
  // for pjax'd partial page loads and one for normal page loads.
  // Without adding this secret parameter, some browsers will often
  // confuse the two.
  if (!options.data) options.data = {}
  if ($.isArray(options.data)) {
    options.data.push({name: '_pjax', value: context.selector})
  } else {
    options.data._pjax = context.selector
  }

  function fire(type, args, props) {
    if (!props) props = {}
    props.relatedTarget = target
    var event = $.Event(type, props)
    context.trigger(event, args)
    return !event.isDefaultPrevented()
  }

  var timeoutTimer

  options.beforeSend = function(xhr, settings) {
    // No timeout for non-GET requests
    // Its not safe to request the resource again with a fallback method.
    if (settings.type !== 'GET') {
      settings.timeout = 0
    }

    xhr.setRequestHeader('X-PJAX', 'true')
    xhr.setRequestHeader('X-PJAX-Container', context.selector)

    if (!fire('pjax:beforeSend', [xhr, settings]))
      return false

    if (settings.timeout > 0) {
      timeoutTimer = setTimeout(function() {
        if (fire('pjax:timeout', [xhr, options]))
          xhr.abort('timeout')
      }, settings.timeout)

      // Clear timeout setting so jquerys internal timeout isn't invoked
      settings.timeout = 0
    }

    options.requestUrl = parseURL(settings.url).href
  }

  options.complete = function(xhr, textStatus) {
    if (timeoutTimer)
      clearTimeout(timeoutTimer)

    fire('pjax:complete', [xhr, textStatus, options])

    fire('pjax:end', [xhr, options])
  }

  options.error = function(xhr, textStatus, errorThrown) {
    var container = extractContainer("", xhr, options)

    var allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options])
    if (options.type == 'GET' && textStatus !== 'abort' && allowed) {
      locationReplace(container.url)
    }
  }

  options.success = function(data, status, xhr) {
    var previousState = pjax.state;

    // If $.pjax.defaults.version is a function, invoke it first.
    // Otherwise it can be a static string.
    var currentVersion = (typeof $.pjax.defaults.version === 'function') ?
      $.pjax.defaults.version() :
      $.pjax.defaults.version

    var latestVersion = xhr.getResponseHeader('X-PJAX-Version')

    var container = extractContainer(data, xhr, options)

    // If there is a layout version mismatch, hard load the new url
    if (currentVersion && latestVersion && currentVersion !== latestVersion) {
      locationReplace(container.url)
      return
    }

    // If the new response is missing a body, hard load the page
    if (!container.contents) {
      locationReplace(container.url)
      return
    }

    pjax.state = {
      id: options.id || uniqueId(),
      url: container.url,
      title: container.title,
      container: context.selector,
      fragment: options.fragment,
      timeout: options.timeout
    }

    if (options.push || options.replace) {
      window.history.replaceState(pjax.state, container.title, container.url)
    }

    // Clear out any focused controls before inserting new page contents.
    try {
      document.activeElement.blur()
    } catch (e) { }

    if (container.title) document.title = container.title

    fire('pjax:beforeReplace', [container.contents, options], {
      state: pjax.state,
      previousState: previousState
    })
    context.html(container.contents)

    // FF bug: Won't autofocus fields that are inserted via JS.
    // This behavior is incorrect. So if theres no current focus, autofocus
    // the last field.
    //
    // http://www.w3.org/html/wg/drafts/html/master/forms.html
    var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0]
    if (autofocusEl && document.activeElement !== autofocusEl) {
      autofocusEl.focus();
    }

    executeScriptTags(container.scripts)

    // Scroll to top by default
    if (typeof options.scrollTo === 'number')
      $(window).scrollTop(options.scrollTo)

    // If the URL has a hash in it, make sure the browser
    // knows to navigate to the hash.
    if ( hash !== '' ) {
      // Avoid using simple hash set here. Will add another history
      // entry. Replace the url with replaceState and scroll to target
      // by hand.
      //
      //   window.location.hash = hash
      var url = parseURL(container.url)
      url.hash = hash

      pjax.state.url = url.href
      window.history.replaceState(pjax.state, container.title, url.href)

      var target = document.getElementById(url.hash.slice(1))
      if (target) $(window).scrollTop($(target).offset().top)
    }

    fire('pjax:success', [data, status, xhr, options])
  }


  // Initialize pjax.state for the initial page load. Assume we're
  // using the container and options of the link we're loading for the
  // back button to the initial page. This ensures good back button
  // behavior.
  if (!pjax.state) {
    pjax.state = {
      id: uniqueId(),
      url: window.location.href,
      title: document.title,
      container: context.selector,
      fragment: options.fragment,
      timeout: options.timeout
    }
    window.history.replaceState(pjax.state, document.title)
  }

  // Cancel the current request if we're already pjaxing
  var xhr = pjax.xhr
  if ( xhr && xhr.readyState < 4) {
    xhr.onreadystatechange = $.noop
    xhr.abort()
  }

  pjax.options = options
  var xhr = pjax.xhr = $.ajax(options)

  if (xhr.readyState > 0) {
    if (options.push && !options.replace) {
      // Cache current container element before replacing it
      cachePush(pjax.state.id, context.clone().contents())

      window.history.pushState(null, "", stripPjaxParam(options.requestUrl))
    }

    fire('pjax:start', [xhr, options])
    fire('pjax:send', [xhr, options])
  }

  return pjax.xhr
}

// Public: Reload current page with pjax.
//
// Returns whatever $.pjax returns.
function pjaxReload(container, options) {
  var defaults = {
    url: window.location.href,
    push: false,
    replace: true,
    scrollTo: false
  }

  return pjax($.extend(defaults, optionsFor(container, options)))
}

// Internal: Hard replace current state with url.
//
// Work for around WebKit
//   https://bugs.webkit.org/show_bug.cgi?id=93506
//
// Returns nothing.
function locationReplace(url) {
  window.history.replaceState(null, "", pjax.state.url)
  window.location.replace(url)
}


var initialPop = true
var initialURL = window.location.href
var initialState = window.history.state

// Initialize $.pjax.state if possible
// Happens when reloading a page and coming forward from a different
// session history.
if (initialState && initialState.container) {
  pjax.state = initialState
}

// Non-webkit browsers don't fire an initial popstate event
if ('state' in window.history) {
  initialPop = false
}

// popstate handler takes care of the back and forward buttons
//
// You probably shouldn't use pjax on pages with other pushState
// stuff yet.
function onPjaxPopstate(event) {
  var previousState = pjax.state;
  var state = event.state

  if (state && state.container) {
    // When coming forward from a separate history session, will get an
    // initial pop with a state we are already at. Skip reloading the current
    // page.
    if (initialPop && initialURL == state.url) return

    // If popping back to the same state, just skip.
    // Could be clicking back from hashchange rather than a pushState.
    if (pjax.state && pjax.state.id === state.id) return

    var container = $(state.container)
    if (container.length) {
      var direction, contents = cacheMapping[state.id]

      if (pjax.state) {
        // Since state ids always increase, we can deduce the history
        // direction from the previous state.
        direction = pjax.state.id < state.id ? 'forward' : 'back'

        // Cache current container before replacement and inform the
        // cache which direction the history shifted.
        cachePop(direction, pjax.state.id, container.clone().contents())
      }

      var popstateEvent = $.Event('pjax:popstate', {
        state: state,
        direction: direction
      })
      container.trigger(popstateEvent)

      var options = {
        id: state.id,
        url: state.url,
        container: container,
        push: false,
        fragment: state.fragment,
        timeout: state.timeout,
        scrollTo: false
      }

      if (contents) {
        container.trigger('pjax:start', [null, options])

        pjax.state = state
        if (state.title) document.title = state.title
        var beforeReplaceEvent = $.Event('pjax:beforeReplace', {
          state: state,
          previousState: previousState
        })
        container.trigger(beforeReplaceEvent, [contents, options])
        container.html(contents)

        container.trigger('pjax:end', [null, options])
      } else {
        pjax(options)
      }

      // Force reflow/relayout before the browser tries to restore the
      // scroll position.
      container[0].offsetHeight
    } else {
      locationReplace(location.href)
    }
  }
  initialPop = false
}

// Fallback version of main pjax function for browsers that don't
// support pushState.
//
// Returns nothing since it retriggers a hard form submission.
function fallbackPjax(options) {
  var url = $.isFunction(options.url) ? options.url() : options.url,
      method = options.type ? options.type.toUpperCase() : 'GET'

  var form = $('<form>', {
    method: method === 'GET' ? 'GET' : 'POST',
    action: url,
    style: 'display:none'
  })

  if (method !== 'GET' && method !== 'POST') {
    form.append($('<input>', {
      type: 'hidden',
      name: '_method',
      value: method.toLowerCase()
    }))
  }

  var data = options.data
  if (typeof data === 'string') {
    $.each(data.split('&'), function(index, value) {
      var pair = value.split('=')
      form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
    })
  } else if (typeof data === 'object') {
    for (key in data)
      form.append($('<input>', {type: 'hidden', name: key, value: data[key]}))
  }

  $(document.body).append(form)
  form.submit()
}

// Internal: Generate unique id for state object.
//
// Use a timestamp instead of a counter since ids should still be
// unique across page loads.
//
// Returns Number.
function uniqueId() {
  return (new Date).getTime()
}

// Internal: Strips _pjax param from url
//
// url - String
//
// Returns String.
function stripPjaxParam(url) {
  return url
    .replace(/\?_pjax=[^&]+&?/, '?')
    .replace(/_pjax=[^&]+&?/, '')
    .replace(/[\?&]$/, '')
}

// Internal: Parse URL components and returns a Locationish object.
//
// url - String URL
//
// Returns HTMLAnchorElement that acts like Location.
function parseURL(url) {
  var a = document.createElement('a')
  a.href = url
  return a
}

// Internal: Return the `href` component of given URL object with the hash
// portion removed.
//
// location - Location or HTMLAnchorElement
//
// Returns String
function stripHash(location) {
  return location.href.replace(/#.*/, '')
}

// Internal: Build options Object for arguments.
//
// For convenience the first parameter can be either the container or
// the options object.
//
// Examples
//
//   optionsFor('#container')
//   // => {container: '#container'}
//
//   optionsFor('#container', {push: true})
//   // => {container: '#container', push: true}
//
//   optionsFor({container: '#container', push: true})
//   // => {container: '#container', push: true}
//
// Returns options Object.
function optionsFor(container, options) {
  // Both container and options
  if ( container && options )
    options.container = container

  // First argument is options Object
  else if ( $.isPlainObject(container) )
    options = container

  // Only container
  else
    options = {container: container}

  // Find and validate container
  if (options.container)
    options.container = findContainerFor(options.container)

  return options
}

// Internal: Find container element for a variety of inputs.
//
// Because we can't persist elements using the history API, we must be
// able to find a String selector that will consistently find the Element.
//
// container - A selector String, jQuery object, or DOM Element.
//
// Returns a jQuery object whose context is `document` and has a selector.
function findContainerFor(container) {
  container = $(container)

  if ( !container.length ) {
    throw "no pjax container for " + container.selector
  } else if ( container.selector !== '' && container.context === document ) {
    return container
  } else if ( container.attr('id') ) {
    return $('#' + container.attr('id'))
  } else {
    throw "cant get selector for pjax container!"
  }
}

// Internal: Filter and find all elements matching the selector.
//
// Where $.fn.find only matches descendants, findAll will test all the
// top level elements in the jQuery object as well.
//
// elems    - jQuery object of Elements
// selector - String selector to match
//
// Returns a jQuery object.
function findAll(elems, selector) {
  return elems.filter(selector).add(elems.find(selector));
}

function parseHTML(html) {
  return $.parseHTML(html, document, true)
}

// Internal: Extracts container and metadata from response.
//
// 1. Extracts X-PJAX-URL header if set
// 2. Extracts inline <title> tags
// 3. Builds response Element and extracts fragment if set
//
// data    - String response data
// xhr     - XHR response
// options - pjax options Object
//
// Returns an Object with url, title, and contents keys.
function extractContainer(data, xhr, options) {
  var obj = {}, fullDocument = /<html/i.test(data)

  // Prefer X-PJAX-URL header if it was set, otherwise fallback to
  // using the original requested url.
  obj.url = stripPjaxParam(xhr.getResponseHeader('X-PJAX-URL') || options.requestUrl)

  // Attempt to parse response html into elements
  if (fullDocument) {
    var $head = $(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
    var $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
  } else {
    var $head = $body = $(parseHTML(data))
  }

  // If response data is empty, return fast
  if ($body.length === 0)
    return obj

  // If there's a <title> tag in the header, use it as
  // the page's title.
  obj.title = findAll($head, 'title').last().text()

  if (options.fragment) {
    // If they specified a fragment, look for it in the response
    // and pull it out.
    if (options.fragment === 'body') {
      var $fragment = $body
    } else {
      var $fragment = findAll($body, options.fragment).first()
    }

    if ($fragment.length) {
      obj.contents = options.fragment === 'body' ? $fragment : $fragment.contents()

      // If there's no title, look for data-title and title attributes
      // on the fragment
      if (!obj.title)
        obj.title = $fragment.attr('title') || $fragment.data('title')
    }

  } else if (!fullDocument) {
    obj.contents = $body
  }

  // Clean up any <title> tags
  if (obj.contents) {
    // Remove any parent title elements
    obj.contents = obj.contents.not(function() { return $(this).is('title') })

    // Then scrub any titles from their descendants
    obj.contents.find('title').remove()

    // Gather all script[src] elements
    obj.scripts = findAll(obj.contents, 'script[src]').remove()
    obj.contents = obj.contents.not(obj.scripts)
  }

  // Trim any whitespace off the title
  if (obj.title) obj.title = $.trim(obj.title)

  return obj
}

// Load an execute scripts using standard script request.
//
// Avoids jQuery's traditional $.getScript which does a XHR request and
// globalEval.
//
// scripts - jQuery object of script Elements
//
// Returns nothing.
function executeScriptTags(scripts) {
  if (!scripts) return

  var existingScripts = $('script[src]')

  scripts.each(function() {
    var src = this.src
    var matchedScripts = existingScripts.filter(function() {
      return this.src === src
    })
    if (matchedScripts.length) return

    var script = document.createElement('script')
    var type = $(this).attr('type')
    if (type) script.type = type
    script.src = $(this).attr('src')
    document.head.appendChild(script)
  })
}

// Internal: History DOM caching class.
var cacheMapping      = {}
var cacheForwardStack = []
var cacheBackStack    = []

// Push previous state id and container contents into the history
// cache. Should be called in conjunction with `pushState` to save the
// previous container contents.
//
// id    - State ID Number
// value - DOM Element to cache
//
// Returns nothing.
function cachePush(id, value) {
  cacheMapping[id] = value
  cacheBackStack.push(id)

  // Remove all entries in forward history stack after pushing a new page.
  trimCacheStack(cacheForwardStack, 0)

  // Trim back history stack to max cache length.
  trimCacheStack(cacheBackStack, pjax.defaults.maxCacheLength)
}

// Shifts cache from directional history cache. Should be
// called on `popstate` with the previous state id and container
// contents.
//
// direction - "forward" or "back" String
// id        - State ID Number
// value     - DOM Element to cache
//
// Returns nothing.
function cachePop(direction, id, value) {
  var pushStack, popStack
  cacheMapping[id] = value

  if (direction === 'forward') {
    pushStack = cacheBackStack
    popStack  = cacheForwardStack
  } else {
    pushStack = cacheForwardStack
    popStack  = cacheBackStack
  }

  pushStack.push(id)
  if (id = popStack.pop())
    delete cacheMapping[id]

  // Trim whichever stack we just pushed to to max cache length.
  trimCacheStack(pushStack, pjax.defaults.maxCacheLength)
}

// Trim a cache stack (either cacheBackStack or cacheForwardStack) to be no
// longer than the specified length, deleting cached DOM elements as necessary.
//
// stack  - Array of state IDs
// length - Maximum length to trim to
//
// Returns nothing.
function trimCacheStack(stack, length) {
  while (stack.length > length)
    delete cacheMapping[stack.shift()]
}

// Public: Find version identifier for the initial page load.
//
// Returns String version or undefined.
function findVersion() {
  return $('meta').filter(function() {
    var name = $(this).attr('http-equiv')
    return name && name.toUpperCase() === 'X-PJAX-VERSION'
  }).attr('content')
}

// Install pjax functions on $.pjax to enable pushState behavior.
//
// Does nothing if already enabled.
//
// Examples
//
//     $.pjax.enable()
//
// Returns nothing.
function enable() {
  $.fn.pjax = fnPjax
  $.pjax = pjax
  $.pjax.enable = $.noop
  $.pjax.disable = disable
  $.pjax.click = handleClick
  $.pjax.submit = handleSubmit
  $.pjax.reload = pjaxReload
  $.pjax.defaults = {
    timeout: 650,
    push: true,
    replace: false,
    type: 'GET',
    dataType: 'html',
    scrollTo: 0,
    maxCacheLength: 20,
    version: findVersion
  }
  $(window).on('popstate.pjax', onPjaxPopstate)
}

// Disable pushState behavior.
//
// This is the case when a browser doesn't support pushState. It is
// sometimes useful to disable pushState for debugging on a modern
// browser.
//
// Examples
//
//     $.pjax.disable()
//
// Returns nothing.
function disable() {
  $.fn.pjax = function() { return this }
  $.pjax = fallbackPjax
  $.pjax.enable = enable
  $.pjax.disable = $.noop
  $.pjax.click = $.noop
  $.pjax.submit = $.noop
  $.pjax.reload = function() { window.location.reload() }

  $(window).off('popstate.pjax', onPjaxPopstate)
}


// Add the state property to jQuery's event object so we can use it in
// $(window).bind('popstate')
if ( $.inArray('state', $.event.props) < 0 )
  $.event.props.push('state')

// Is pjax supported by this browser?
$.support.pjax =
  window.history && window.history.pushState && window.history.replaceState &&
  // pushState isn't reliable on iOS until 5.
  !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)

$.support.pjax ? enable() : disable()

})(jQuery);
/*! jQuery UI - v1.11.1+CommonJS - 2014-09-17
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if (typeof exports === "object") {
		// Node/CommonJS:
		factory(require("jquery"));

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));
/*
 * jQuery Iframe Transport Plugin 1.8.3
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */


(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
/*
 * jQuery File Upload Plugin 5.42.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */


(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                clone = $(this.element[0].cloneNode(false)),
                data = clone.data();
            // Avoid memory leaks:
            clone.remove();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                data,
                function (key, value) {
                    var dataAttributeName = 'data-' +
                        // Convert camelCase to hyphen-ated key:
                        key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (clone.attr(dataAttributeName)) {
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
/* jquery.panzoom.min.js 3.1.1 (c) Timmy Willison - MIT License */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a,b){for(var c=a.length;--c;)if(Math.round(+a[c])!==Math.round(+b[c]))return!1;return!0}function d(a){var c={range:!0,animate:!0};return"boolean"==typeof a?c.animate=a:b.extend(c,a),c}function e(a,c,d,e,f,g,h,i,j){"array"===b.type(a)?this.elements=[+a[0],+a[2],+a[4],+a[1],+a[3],+a[5],0,0,1]:this.elements=[a,c,d,e,f,g,h||0,i||0,j||1]}function f(a,b,c){this.elements=[a,b,c]}function g(a,c){if(!(this instanceof g))return new g(a,c);1!==a.nodeType&&b.error("Panzoom called on non-Element node"),b.contains(h,a)||b.error("Panzoom element must be attached to the document");var d=b.data(a,i);if(d)return d;this.options=c=b.extend({},g.defaults,c),this.elem=a;var e=this.$elem=b(a);this.$set=c.$set&&c.$set.length?c.$set:e,this.$doc=b(a.ownerDocument||h),this.$parent=e.parent(),this.isSVG=n.test(a.namespaceURI)&&"svg"!==a.nodeName.toLowerCase(),this.panning=!1,this._buildTransform(),this._transform=b.cssProps.transform.replace(m,"-$1").toLowerCase(),this._buildTransition(),this.resetDimensions();var f=b(),j=this;b.each(["$zoomIn","$zoomOut","$zoomRange","$reset"],function(a,b){j[b]=c[b]||f}),this.enable(),this.scale=this.getMatrix()[0],this._checkPanWhenZoomed(),b.data(a,i,this)}var h=a.document,i="__pz__",j=Array.prototype.slice,k=/trident\/7./i,l=function(){if(k.test(navigator.userAgent))return!1;var a=h.createElement("input");return a.setAttribute("oninput","return"),"function"==typeof a.oninput}(),m=/([A-Z])/g,n=/^http:[\w\.\/]+svg$/,o="(\\-?\\d[\\d\\.e-]*)",p="\\,?\\s*",q=new RegExp("^matrix\\("+o+p+o+p+o+p+o+p+o+p+o+"\\)$");return e.prototype={x:function(a){var b=a instanceof f,c=this.elements,d=a.elements;return b&&3===d.length?new f(c[0]*d[0]+c[1]*d[1]+c[2]*d[2],c[3]*d[0]+c[4]*d[1]+c[5]*d[2],c[6]*d[0]+c[7]*d[1]+c[8]*d[2]):d.length===c.length&&new e(c[0]*d[0]+c[1]*d[3]+c[2]*d[6],c[0]*d[1]+c[1]*d[4]+c[2]*d[7],c[0]*d[2]+c[1]*d[5]+c[2]*d[8],c[3]*d[0]+c[4]*d[3]+c[5]*d[6],c[3]*d[1]+c[4]*d[4]+c[5]*d[7],c[3]*d[2]+c[4]*d[5]+c[5]*d[8],c[6]*d[0]+c[7]*d[3]+c[8]*d[6],c[6]*d[1]+c[7]*d[4]+c[8]*d[7],c[6]*d[2]+c[7]*d[5]+c[8]*d[8])},inverse:function(){var a=1/this.determinant(),b=this.elements;return new e(a*(b[8]*b[4]-b[7]*b[5]),a*-(b[8]*b[1]-b[7]*b[2]),a*(b[5]*b[1]-b[4]*b[2]),a*-(b[8]*b[3]-b[6]*b[5]),a*(b[8]*b[0]-b[6]*b[2]),a*-(b[5]*b[0]-b[3]*b[2]),a*(b[7]*b[3]-b[6]*b[4]),a*-(b[7]*b[0]-b[6]*b[1]),a*(b[4]*b[0]-b[3]*b[1]))},determinant:function(){var a=this.elements;return a[0]*(a[8]*a[4]-a[7]*a[5])-a[3]*(a[8]*a[1]-a[7]*a[2])+a[6]*(a[5]*a[1]-a[4]*a[2])}},f.prototype.e=e.prototype.e=function(a){return this.elements[a]},g.rmatrix=q,g.defaults={eventNamespace:".panzoom",transition:!0,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,which:1,increment:.3,exponential:!0,panOnlyWhenZoomed:!1,minScale:.3,maxScale:6,rangeStep:.05,duration:200,easing:"ease-in-out",contain:!1},g.prototype={constructor:g,instance:function(){return this},enable:function(){this._initStyle(),this._bind(),this.disabled=!1},disable:function(){this.disabled=!0,this._resetStyle(),this._unbind()},isDisabled:function(){return this.disabled},destroy:function(){this.disable(),b.removeData(this.elem,i)},resetDimensions:function(){this.container=this.$parent[0].getBoundingClientRect();var a=this.elem,c=a.getBoundingClientRect(),d=Math.abs(this.scale);this.dimensions={width:c.width,height:c.height,left:b.css(a,"left",!0)||0,top:b.css(a,"top",!0)||0,border:{top:b.css(a,"borderTopWidth",!0)*d||0,bottom:b.css(a,"borderBottomWidth",!0)*d||0,left:b.css(a,"borderLeftWidth",!0)*d||0,right:b.css(a,"borderRightWidth",!0)*d||0},margin:{top:b.css(a,"marginTop",!0)*d||0,left:b.css(a,"marginLeft",!0)*d||0}}},reset:function(a){a=d(a);var b=this.setMatrix(this._origTransform,a);a.silent||this._trigger("reset",b)},resetZoom:function(a){a=d(a);var b=this.getMatrix(this._origTransform);a.dValue=b[3],this.zoom(b[0],a)},resetPan:function(a){var b=this.getMatrix(this._origTransform);this.pan(b[4],b[5],d(a))},setTransform:function(a){for(var c=this.$set,d=c.length;d--;)b.style(c[d],"transform",a),this.isSVG&&c[d].setAttribute("transform",a)},getTransform:function(a){var c=this.$set,d=c[0];return a?this.setTransform(a):(a=b.style(d,"transform"),!this.isSVG||a&&"none"!==a||(a=b.attr(d,"transform")||"none")),"none"===a||q.test(a)||this.setTransform(a=b.css(d,"transform")),a||"none"},getMatrix:function(a){var b=q.exec(a||this.getTransform());return b&&b.shift(),b||[1,0,0,1,0,0]},setMatrix:function(a,b){if(!this.disabled){b||(b={}),"string"==typeof a&&(a=this.getMatrix(a));var c=+a[0],d="undefined"!=typeof b.contain?b.contain:this.options.contain;if(d){var e=b.dims;e||(this.resetDimensions(),e=this.dimensions);var f=this.container,g=e.width,h=e.height,i=f.width,j=f.height,k=i/g,l=j/h,m=(g-i)/2,n=(h-j)/2;"invert"===d||"automatic"===d&&k<1.01?a[4]=Math.max(Math.min(a[4],m),-m):a[4]=Math.min(Math.max(a[4],m),-m),"invert"===d||"automatic"===d&&l<1.01?a[5]=Math.max(Math.min(a[5],n),-n):a[5]=Math.min(Math.max(a[5],n),-n)}if("skip"!==b.animate&&this.transition(!b.animate),b.range&&this.$zoomRange.val(c),this.options.disableXAxis||this.options.disableYAxis){var o=this.getMatrix();this.options.disableXAxis&&(a[4]=o[4]),this.options.disableYAxis&&(a[5]=o[5])}return this.setTransform("matrix("+a.join(",")+")"),this.scale=c,this._checkPanWhenZoomed(c),b.silent||this._trigger("change",a),a}},isPanning:function(){return this.panning},transition:function(a){if(this._transition)for(var c=a||!this.options.transition?"none":this._transition,d=this.$set,e=d.length;e--;)b.style(d[e],"transition")!==c&&b.style(d[e],"transition",c)},pan:function(a,b,c){if(!this.options.disablePan){c||(c={});var d=c.matrix;d||(d=this.getMatrix()),c.relative&&(a+=+d[4],b+=+d[5]),d[4]=a,d[5]=b,this.setMatrix(d,c),c.silent||this._trigger("pan",d[4],d[5])}},zoom:function(a,c){"object"==typeof a?(c=a,a=null):c||(c={});var d=b.extend({},this.options,c);if(!d.disableZoom){var g=!1,h=d.matrix||this.getMatrix(),i=+h[0];"number"!=typeof a&&(a=d.exponential&&i-d.increment>=1?Math[a?"sqrt":"pow"](i,2):i+d.increment*(a?-1:1),g=!0),a>d.maxScale?a=d.maxScale:a<d.minScale&&(a=d.minScale);var j=d.focal;if(j&&!d.disablePan){this.resetDimensions();var k=d.dims=this.dimensions,l=j.clientX,m=j.clientY;this.isSVG||(l-=k.width/i/2,m-=k.height/i/2);var n=new f(l,m,1),o=new e(h),p=this.parentOffset||this.$parent.offset(),q=new e(1,0,p.left-this.$doc.scrollLeft(),0,1,p.top-this.$doc.scrollTop()),r=o.inverse().x(q.inverse().x(n)),s=a/h[0];o=o.x(new e([s,0,0,s,0,0])),n=q.x(o.x(r)),h[4]=+h[4]+(l-n.e(0)),h[5]=+h[5]+(m-n.e(1))}h[0]=a,h[3]="number"==typeof d.dValue?d.dValue:a,this.setMatrix(h,{animate:"boolean"==typeof d.animate?d.animate:g,range:!d.noSetRange}),d.silent||this._trigger("zoom",h[0],d)}},option:function(a,c){var d;if(!a)return b.extend({},this.options);if("string"==typeof a){if(1===arguments.length)return void 0!==this.options[a]?this.options[a]:null;d={},d[a]=c}else d=a;this._setOptions(d)},_setOptions:function(a){b.each(a,b.proxy(function(a,c){switch(a){case"disablePan":this._resetStyle();case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._unbind()}switch(this.options[a]=c,a){case"disablePan":this._initStyle();case"$zoomIn":case"$zoomOut":case"$zoomRange":case"$reset":this[a]=c;case"disableZoom":case"onStart":case"onChange":case"onZoom":case"onPan":case"onEnd":case"onReset":case"eventNamespace":this._bind();break;case"cursor":b.style(this.elem,"cursor",c);break;case"minScale":this.$zoomRange.attr("min",c);break;case"maxScale":this.$zoomRange.attr("max",c);break;case"rangeStep":this.$zoomRange.attr("step",c);break;case"startTransform":this._buildTransform();break;case"duration":case"easing":this._buildTransition();case"transition":this.transition();break;case"panOnlyWhenZoomed":this._checkPanWhenZoomed();break;case"$set":c instanceof b&&c.length&&(this.$set=c,this._initStyle(),this._buildTransform())}},this))},_checkPanWhenZoomed:function(a){a||(a=this.getMatrix()[0]);var b=this.options;if(b.panOnlyWhenZoomed){var c=a===b.minScale;b.disablePan!==c&&this.option("disablePan",c)}},_initStyle:function(){var a={"transform-origin":this.isSVG?"0 0":"50% 50%"};this.options.disablePan||(a.cursor=this.options.cursor),this.$set.css(a);var c=this.$parent;c.length&&!b.nodeName(c[0],"body")&&(a={overflow:"hidden"},"static"===c.css("position")&&(a.position="relative"),c.css(a))},_resetStyle:function(){this.$elem.css({cursor:"",transition:""}),this.$parent.css({overflow:"",position:""})},_bind:function(){var a=this,c=this.options,d=c.eventNamespace,e="touchstart"+d+" mousedown"+d,f="touchend"+d+" click"+d,h={},i=this.$reset,j=this.$zoomRange;if(b.each(["Start","Change","Zoom","Pan","End","Reset"],function(){var a=c["on"+this];b.isFunction(a)&&(h["panzoom"+this.toLowerCase()+d]=a)}),c.disablePan&&c.disableZoom||(h[e]=function(b){var d;("touchstart"===b.type?!(d=b.touches||b.originalEvent.touches)||(1!==d.length||c.disablePan)&&2!==d.length:c.disablePan||b.which!==c.which)||(b.preventDefault(),b.stopPropagation(),a._startMove(b,d))},3===c.which&&(h.contextmenu=!1)),this.$elem.on(h),i.length&&i.on(f,function(b){b.preventDefault(),a.reset()}),j.length&&j.attr({step:c.rangeStep===g.defaults.rangeStep&&j.attr("step")||c.rangeStep,min:c.minScale,max:c.maxScale}).prop({value:this.getMatrix()[0]}),!c.disableZoom){var k=this.$zoomIn,m=this.$zoomOut;k.length&&m.length&&(k.on(f,function(b){b.preventDefault(),a.zoom()}),m.on(f,function(b){b.preventDefault(),a.zoom(!0)})),j.length&&(h={},h["mousedown"+d]=function(){a.transition(!0)},h[(l?"input":"change")+d]=function(){a.zoom(+this.value,{noSetRange:!0})},j.on(h))}},_unbind:function(){this.$elem.add(this.$zoomIn).add(this.$zoomOut).add(this.$reset).off(this.options.eventNamespace)},_buildTransform:function(){return this._origTransform=this.getTransform(this.options.startTransform)},_buildTransition:function(){if(this._transform){var a=this.options;this._transition=this._transform+" "+a.duration+"ms "+a.easing}},_getDistance:function(a){var b=a[0],c=a[1];return Math.sqrt(Math.pow(Math.abs(c.clientX-b.clientX),2)+Math.pow(Math.abs(c.clientY-b.clientY),2))},_getMiddle:function(a){var b=a[0],c=a[1];return{clientX:(c.clientX-b.clientX)/2+b.clientX,clientY:(c.clientY-b.clientY)/2+b.clientY}},_trigger:function(a){"string"==typeof a&&(a="panzoom"+a),this.$elem.triggerHandler(a,[this].concat(j.call(arguments,1)))},_startMove:function(a,d){var e,f,g,i,j,k,l,m,n,o=this,p=this.options,q=p.eventNamespace,r=this.getMatrix(),s=r.slice(0),t=+s[4],u=+s[5],v={matrix:r,animate:"skip"};"touchstart"===a.type?(f="touchmove",g="touchend"):(f="mousemove",g="mouseup"),f+=q,g+=q,this.transition(!0),this.panning=!0,this._trigger("start",a,d),d&&2===d.length?(i=this._getDistance(d),j=+r[0],k=this._getMiddle(d),e=function(a){a.preventDefault(),d=a.touches||a.originalEvent.touches;var b=o._getMiddle(d),c=o._getDistance(d)-i;o.zoom(c*(p.increment/100)+j,{focal:b,matrix:r,animate:!1}),o.pan(+r[4]+b.clientX-k.clientX,+r[5]+b.clientY-k.clientY,v),k=b}):(d&&(n=d[0])?(l=n.pageX,m=n.pageY):(l=a.pageX,m=a.pageY),e=function(a){a.preventDefault(),d=a.touches||a.originalEvent.touches;var b;b=d?d[0]||{pageX:0,pageY:0}:a,o.pan(t+b.pageX-l,u+b.pageY-m,v)}),b(h).off(q).on(f,e).on(g,function(a){a.preventDefault(),b(this).off(q),o.panning=!1,a.type="panzoomend",o._trigger(a,r,!c(r,s))})}},b.Panzoom=g,b.fn.panzoom=function(a){var c,d,e,f;return"string"==typeof a?(f=[],d=j.call(arguments,1),this.each(function(){c=b.data(this,i),c?"_"!==a.charAt(0)&&"function"==typeof(e=c[a])&&void 0!==(e=e.apply(c,d))&&f.push(e):f.push(void 0)}),f.length?1===f.length?f[0]:f:this):this.each(function(){new g(this,a)})},g});
/*
  javascript.util is a port of selected parts of java.util to JavaScript which
  main purpose is to ease porting Java code to JavaScript.
  
  The MIT License (MIT)

  Copyright (C) 2011,2012 by The Authors

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
*/

(function(){var e=function(t,n){var r=e.resolve(t,n||"/"),i=e.modules[r];if(!i)throw new Error("Failed to resolve module "+t+", tried "+r);var s=e.cache[r],o=s?s.exports:i();return o};e.paths=[],e.modules={},e.cache={},e.extensions=[".js",".coffee",".json"],e._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},e.resolve=function(){return function(t,n){function u(t){t=r.normalize(t);if(e.modules[t])return t;for(var n=0;n<e.extensions.length;n++){var i=e.extensions[n];if(e.modules[t+i])return t+i}}function a(t){t=t.replace(/\/+$/,"");var n=r.normalize(t+"/package.json");if(e.modules[n]){var i=e.modules[n](),s=i.browserify;if(typeof s=="object"&&s.main){var o=u(r.resolve(t,s.main));if(o)return o}else if(typeof s=="string"){var o=u(r.resolve(t,s));if(o)return o}else if(i.main){var o=u(r.resolve(t,i.main));if(o)return o}}return u(t+"/index")}function f(e,t){var n=l(t);for(var r=0;r<n.length;r++){var i=n[r],s=u(i+"/"+e);if(s)return s;var o=a(i+"/"+e);if(o)return o}var s=u(e);if(s)return s}function l(e){var t;e==="/"?t=[""]:t=r.normalize(e).split("/");var n=[];for(var i=t.length-1;i>=0;i--){if(t[i]==="node_modules")continue;var s=t.slice(0,i+1).join("/")+"/node_modules";n.push(s)}return n}n||(n="/");if(e._core[t])return t;var r=e.modules.path();n=r.resolve("/",n);var i=n||"/";if(t.match(/^(?:\.\.?\/|\/)/)){var s=u(r.resolve(i,t))||a(r.resolve(i,t));if(s)return s}var o=f(t,i);if(o)return o;throw new Error("Cannot find module '"+t+"'")}}(),e.alias=function(t,n){var r=e.modules.path(),i=null;try{i=e.resolve(t+"/package.json","/")}catch(s){i=e.resolve(t,"/")}var o=r.dirname(i),u=(Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t})(e.modules);for(var a=0;a<u.length;a++){var f=u[a];if(f.slice(0,o.length+1)===o+"/"){var l=f.slice(o.length);e.modules[n+l]=e.modules[o+l]}else f===o&&(e.modules[n]=e.modules[o])}},function(){var t={},n=typeof window!="undefined"?window:{},r=!1;e.define=function(i,s){!r&&e.modules.__browserify_process&&(t=e.modules.__browserify_process(),r=!0);var o=e._core[i]?"":e.modules.path().dirname(i),u=function(t){var n=e(t,o),r=e.cache[e.resolve(t,o)];return r&&r.parent===null&&(r.parent=a),n};u.resolve=function(t){return e.resolve(t,o)},u.modules=e.modules,u.define=e.define,u.cache=e.cache;var a={id:i,filename:i,exports:{},loaded:!1,parent:null};e.modules[i]=function(){return e.cache[i]=a,s.call(a.exports,u,a,a.exports,o,i,t,n),a.loaded=!0,a.exports}}}(),e.define("path",function(e,t,n,r,i,s,o){function u(e,t){var n=[];for(var r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}function a(e,t){var n=0;for(var r=e.length;r>=0;r--){var i=e[r];i=="."?e.splice(r,1):i===".."?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var f=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;n.resolve=function(){var e="",t=!1;for(var n=arguments.length;n>=-1&&!t;n--){var r=n>=0?arguments[n]:s.cwd();if(typeof r!="string"||!r)continue;e=r+"/"+e,t=r.charAt(0)==="/"}return e=a(u(e.split("/"),function(e){return!!e}),!t).join("/"),(t?"/":"")+e||"."},n.normalize=function(e){var t=e.charAt(0)==="/",n=e.slice(-1)==="/";return e=a(u(e.split("/"),function(e){return!!e}),!t).join("/"),!e&&!t&&(e="."),e&&n&&(e+="/"),(t?"/":"")+e},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(u(e,function(e,t){return e&&typeof e=="string"}).join("/"))},n.dirname=function(e){var t=f.exec(e)[1]||"",n=!1;return t?t.length===1||n&&t.length<=3&&t.charAt(1)===":"?t:t.substring(0,t.length-1):"."},n.basename=function(e,t){var n=f.exec(e)[2]||"";return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return f.exec(e)[3]||""}}),e.define("__browserify_process",function(e,t,n,r,i,s,o){var s=t.exports={};s.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return window.setImmediate;if(t){var n=[];return window.addEventListener("message",function(e){if(e.source===window&&e.data==="browserify-tick"){e.stopPropagation();if(n.length>0){var t=n.shift();t()}}},!0),function(t){n.push(t),window.postMessage("browserify-tick","*")}}return function(t){setTimeout(t,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.binding=function(t){if(t==="evals")return e("vm");throw new Error("No such module. (Possibly not yet loaded)")},function(){var t="/",n;s.cwd=function(){return t},s.chdir=function(r){n||(n=e("path")),t=n.resolve(r,t)}}()}),e.define("/ArrayList.js",function(e,t,n,r,i,s,o){function h(){this.array=[],arguments[0]instanceof u&&this.addAll(arguments[0])}var u=e("./Collection"),a=e("./List"),f=e("./IndexOutOfBoundsException"),l=e("./NoSuchElementException"),c=e("./OperationNotSupported");h.prototype=new a,h.prototype.array=null,h.prototype.add=function(e){return this.array.push(e),!0},h.prototype.addAll=function(e){for(var t=e.iterator();t.hasNext();)this.add(t.next());return!0},h.prototype.set=function(e,t){var n=this.array[e];return this.array[e]=t,n},h.prototype.iterator=function(){return new h.Iterator(this)},h.prototype.get=function(e){if(e<0||e>=this.size())throw new f;return this.array[e]},h.prototype.isEmpty=function(){return this.array.length===0},h.prototype.size=function(){return this.array.length},h.prototype.toArray=function(){var e=[];for(var t=0,n=this.array.length;t<n;t++)e.push(this.array[t]);return e},h.prototype.remove=function(e){var t=!1;for(var n=0,r=this.array.length;n<r;n++)if(this.array[n]===e){this.array.splice(n,1),t=!0;break}return t},h.Iterator=function(e){this.arrayList=e},h.Iterator.prototype.arrayList=null,h.Iterator.prototype.position=0,h.Iterator.prototype.next=function(){if(this.position===this.arrayList.size())throw new l;return this.arrayList.get(this.position++)},h.Iterator.prototype.hasNext=function(){return this.position<this.arrayList.size()?!0:!1},h.Iterator.prototype.remove=function(){throw new c},t.exports=h}),e.define("/Collection.js",function(e,t,n,r,i,s,o){function a(){}var u=e("./Iterator");a.prototype.add=function(e){},a.prototype.addAll=function(e){},a.prototype.isEmpty=function(){},a.prototype.iterator=function(){},a.prototype.size=function(){},a.prototype.toArray=function(){},a.prototype.remove=function(e){},t.exports=a}),e.define("/Iterator.js",function(e,t,n,r,i,s,o){function u(){}u.prototype.hasNext=function(){},u.prototype.next=function(){},u.prototype.remove=function(){},t.exports=u}),e.define("/List.js",function(e,t,n,r,i,s,o){function a(){}var u=e("./Collection");a.prototype=new u,a.prototype.get=function(e){},a.prototype.set=function(e,t){},a.prototype.isEmpty=function(){},t.exports=a}),e.define("/IndexOutOfBoundsException.js",function(e,t,n,r,i,s,o){function u(e){this.message=e||""}u.prototype=new Error,u.prototype.name="IndexOutOfBoundsException",t.exports=u}),e.define("/NoSuchElementException.js",function(e,t,n,r,i,s,o){function u(e){this.message=e||""}u.prototype=new Error,u.prototype.name="NoSuchElementException",t.exports=u}),e.define("/OperationNotSupported.js",function(e,t,n,r,i,s,o){function u(e){this.message=e||""}u.prototype=new Error,u.prototype.name="OperationNotSupported",t.exports=u}),e.define("/Arrays.js",function(e,t,n,r,i,s,o){function u(){}u.sort=function(){var e=arguments[0],t,n,r,i;if(arguments.length===1){e.sort();return}if(arguments.length===2)r=arguments[1],i=function(e,t){return r.compare(e,t)},e.sort(i);else{if(arguments.length===3){n=e.slice(arguments[1],arguments[2]),n.sort();var s=e.slice(0,arguments[1]).concat(n,e.slice(arguments[2],e.length));e.splice(0,e.length);for(t=0;t<s.length;t++)e.push(s[t]);return}if(arguments.length===4){n=e.slice(arguments[1],arguments[2]),r=arguments[3],i=function(e,t){return r.compare(e,t)},n.sort(i),s=e.slice(0,arguments[1]).concat(n,e.slice(arguments[2],e.length)),e.splice(0,e.length);for(t=0;t<s.length;t++)e.push(s[t]);return}}},u.asList=function(e){var t=new javascript.util.ArrayList;for(var n=0,r=e.length;n<r;n++)t.add(e[n]);return t},t.exports=u}),e.define("/EmptyStackException.js",function(e,t,n,r,i,s,o){function u(e){this.message=e||""}u.prototype=new Error,u.prototype.name="EmptyStackException",t.exports=u}),e.define("/HashMap.js",function(e,t,n,r,i,s,o){function f(){this.object={}}var u=e("./Map"),a=e("./ArrayList");f.prototype=new u,f.prototype.object=null,f.prototype.get=function(e){return this.object[e]||null},f.prototype.put=function(e,t){return this.object[e]=t,t},f.prototype.values=function(){var e=new javascript.util.ArrayList;for(var t in this.object)this.object.hasOwnProperty(t)&&e.add(this.object[t]);return e},f.prototype.size=function(){return this.values().size()},t.exports=f}),e.define("/Map.js",function(e,t,n,r,i,s,o){function u(){}u.prototype.get=function(e){},u.prototype.put=function(e,t){},u.prototype.size=function(){},u.prototype.values=function(){},t.exports=u}),e.define("/Set.js",function(e,t,n,r,i,s,o){function a(){}var u=e("./Collection");a.prototype=new u,a.prototype.contains=function(e){},t.exports=a}),e.define("/HashSet.js",function(e,t,n,r,i,s,o){function c(){this.array=[],arguments[0]instanceof u&&this.addAll(arguments[0])}var u=e("./Collection"),a=e("./Set"),f=e("./OperationNotSupported"),l=e("./NoSuchElementException");c.prototype=new a,c.prototype.array=null,c.prototype.contains=function(e){for(var t=0,n=this.array.length;t<n;t++){var r=this.array[t];if(r===e)return!0}return!1},c.prototype.add=function(e){return this.contains(e)?!1:(this.array.push(e),!0)},c.prototype.addAll=function(e){for(var t=e.iterator();t.hasNext();)this.add(t.next());return!0},c.prototype.remove=function(e){throw new f},c.prototype.size=function(){return this.array.length},c.prototype.isEmpty=function(){return this.array.length===0},c.prototype.toArray=function(){var e=[];for(var t=0,n=this.array.length;t<n;t++)e.push(this.array[t]);return e},c.prototype.iterator=function(){return new c.Iterator(this)},c.Iterator=function(e){this.hashSet=e},c.Iterator.prototype.hashSet=null,c.Iterator.prototype.position=0,c.Iterator.prototype.next=function(){if(this.position===this.hashSet.size())throw new l;return this.hashSet.array[this.position++]},c.Iterator.prototype.hasNext=function(){return this.position<this.hashSet.size()?!0:!1},c.Iterator.prototype.remove=function(){throw new javascript.util.OperationNotSupported},t.exports=c}),e.define("/SortedMap.js",function(e,t,n,r,i,s,o){function a(){}var u=e("./Map");a.prototype=new u,t.exports=a}),e.define("/SortedSet.js",function(e,t,n,r,i,s,o){function a(){}var u=e("./Set");a.prototype=new u,t.exports=a}),e.define("/Stack.js",function(e,t,n,r,i,s,o){function f(){this.array=[]}var u=e("./List"),a=e("./EmptyStackException");f.prototype=new u,f.prototype.array=null,f.prototype.push=function(e){return this.array.push(e),e},f.prototype.pop=function(e){if(this.array.length===0)throw new a;return this.array.pop()},f.prototype.peek=function(){if(this.array.length===0)throw new a;return this.array[this.array.length-1]},f.prototype.empty=function(e){return this.array.length===0?!0:!1},f.prototype.isEmpty=function(){return this.empty()},f.prototype.search=function(e){return this.array.indexOf(e)},f.prototype.size=function(){return this.array.length},f.prototype.toArray=function(){var e=[];for(var t=0,n=this.array.length;t<n;t++)e.push(this.array[t]);return e},t.exports=f}),e.define("/TreeMap.js",function(e,t,n,r,i,s,o){function l(){this.array=[]}var u=e("./Map"),a=e("./SortedMap"),f=e("./ArrayList");l.prototype=new u,l.prototype.array=null,l.prototype.get=function(e){for(var t=0,n=this.array.length;t<n;t++){var r=this.array[t];if(r.key.compareTo(e)===0)return r.value}return null},l.prototype.put=function(e,t){var n=this.get(e);if(n){var r=n.value;return n.value=t,r}var i={key:e,value:t};for(var s=0,o=this.array.length;s<o;s++){n=this.array[s];if(n.key.compareTo(e)===1)return this.array.splice(s,0,i),null}return this.array.push({key:e,value:t}),null},l.prototype.values=function(){var e=new javascript.util.ArrayList;for(var t=0,n=this.array.length;t<n;t++)e.add(this.array[t].value);return e},l.prototype.size=function(){return this.values().size()},t.exports=l}),e.define("/TreeSet.js",function(e,t,n,r,i,s,o){function c(){this.array=[],arguments[0]instanceof u&&this.addAll(arguments[0])}var u=e("./Collection"),a=e("./SortedSet"),f=e("./OperationNotSupported"),l=e("./NoSuchElementException");c.prototype=new a,c.prototype.array=null,c.prototype.contains=function(e){for(var t=0,n=this.array.length;t<n;t++){var r=this.array[t];if(r.compareTo(e)===0)return!0}return!1},c.prototype.add=function(e){if(this.contains(e))return!1;for(var t=0,n=this.array.length;t<n;t++){var r=this.array[t];if(r.compareTo(e)===1)return this.array.splice(t,0,e),!0}return this.array.push(e),!0},c.prototype.addAll=function(e){for(var t=e.iterator();t.hasNext();)this.add(t.next());return!0},c.prototype.remove=function(e){throw new f},c.prototype.size=function(){return this.array.length},c.prototype.isEmpty=function(){return this.array.length===0},c.prototype.toArray=function(){var e=[];for(var t=0,n=this.array.length;t<n;t++)e.push(this.array[t]);return e},c.prototype.iterator=function(){return new c.Iterator(this)},c.Iterator=function(e){this.treeSet=e},c.Iterator.prototype.treeSet=null,c.Iterator.prototype.position=0,c.Iterator.prototype.next=function(){if(this.position===this.treeSet.size())throw new l;return this.treeSet.array[this.position++]},c.Iterator.prototype.hasNext=function(){return this.position<this.treeSet.size()?!0:!1},c.Iterator.prototype.remove=function(){throw new javascript.util.OperationNotSupported},t.exports=c}),e.define("/javascript.util.js",function(e,t,n,r,i,s,o){var u={};u.util={},u.util.version="0.10.0",u.util.ArrayList=e("./ArrayList"),u.util.Arrays=e("./Arrays"),u.util.Collection=e("./Collection"),u.util.EmptyStackException=e("./EmptyStackException"),u.util.HashMap=e("./HashMap"),u.util.IndexOutOfBoundsException=e("./IndexOutOfBoundsException"),u.util.Iterator=e("./Iterator"),u.util.List=e("./List"),u.util.Map=e("./Map"),u.util.NoSuchElementException=e("./NoSuchElementException"),u.util.OperationNotSupported=e("./OperationNotSupported"),u.util.Set=e("./Set"),u.util.HashSet=e("./HashSet"),u.util.SortedMap=e("./SortedMap"),u.util.SortedSet=e("./SortedSet"),u.util.Stack=e("./Stack"),u.util.TreeMap=e("./TreeMap"),u.util.TreeSet=e("./TreeSet"),this.javascript=u;var a;typeof window!="undefined"?a=window:a=o,a.javascript=u}),e("/javascript.util.js")})();
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#modals
 * =========================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */



!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-hashchange-webworkers-svg-svgclippaths-shiv-testprop-testallprops-hasevent-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(prefixes.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.7.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t=s.slice,u,v=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=A(e[d],"function"),A(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.hashchange=function(){return v("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},p.cssanimations=function(){return E("animationName")},p.webworkers=function(){return!!a.Worker},p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect},p.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(k.call(b.createElementNS(o.svg,"clipPath")))};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.hasEvent=v,e.testProp=function(a){return C([a])},e.testAllProps=E,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.0.0 - 2014
author:     Burocratik
website:    http://www.burocratik.com
-----------------------------------------------------------------------*/

var outdatedBrowser = function(options) {

    //Variable definition
    var outdated = document.getElementById("outdated");
    var btnClose = document.getElementById("btnClose");
    var btnUpdate = document.getElementById("btnUpdate");

    // Default settings
    this.defaultOpts = {
        bgColor: '#F25648',
        color: '#FFF',
        lowerThan: 'IE10'
    }

    if (options) {
        this.defaultOpts.bgColor = options.bgColor,
        this.defaultOpts.color = options.color;

        //assign css3 property to IE browser version
        if(options.lowerThan == 'IE8' || options.lowerThan == 'borderSpacing') {
            options.lowerThan = 'borderSpacing';
        } else if (options.lowerThan == 'IE9' || options.lowerThan == 'boxShadow') {
            options.lowerThan = 'boxShadow';
        } else if (options.lowerThan == 'IE10' || options.lowerThan == 'transform' || options.lowerThan == '' || typeof options.lowerThan === "undefined") {
            options.lowerThan = 'transform';
        } else if (options.lowerThan == 'IE11' || options.lowerThan == 'borderImage') {
            options.lowerThan = 'borderImage';
        }

        this.defaultOpts.lowerThan = options.lowerThan;

        bkgColor = this.defaultOpts.bgColor;
        txtColor = this.defaultOpts.color;
        cssProp = this.defaultOpts.lowerThan;
    } else {
        bkgColor = this.defaultOpts.bgColor;
        txtColor = this.defaultOpts.color;
        cssProp = this.defaultOpts.lowerThan;
    }

    //Define opacity and fadeIn/fadeOut functions
    var done = true;

    function function_opacity(opacity_value) {
        outdated.style.opacity = opacity_value / 100;
        outdated.style.filter = 'alpha(opacity=' + opacity_value + ')';
    }

    function function_fade_out(opacity_value) {
        function_opacity(opacity_value);
        if (opacity_value == 1) {
            outdated.style.display = 'none';
            done = true;
        }
    }

    function function_fade_in(opacity_value) {
        function_opacity(opacity_value);
        if (opacity_value == 1) {
            outdated.style.display = 'block';
        }
        if (opacity_value == 100) {
            done = true;
        }
    }

    //check if element has a particular class
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    var supports = (function() {
       var div = document.createElement('div'),
          vendors = 'Khtml Ms O Moz Webkit'.split(' '),
          len = vendors.length;

       return function(prop) {
          if ( prop in div.style ) return true;

          prop = prop.replace(/^[a-z]/, function(val) {
             return val.toUpperCase();
          });

          while(len--) {
             if ( vendors[len] + prop in div.style ) {
                return true;
             }
          }
          return false;
       };
    })();

    //check for css3 property support (transform=default)
    if ( !supports(''+ cssProp +'') ) {
        if (done && outdated.style.opacity !== '1') {
            done = false;
            for (var i = 1; i <= 100; i++) {
                setTimeout((function (x) {
                    return function () {
                        function_fade_in(x)
                    };
                })(i), i * 10);
            }
        }
        //close button
        btnClose.onmousedown = function() {
            outdated.style.display = 'none';
            return false;
        };
    }


    //check settings attributes
    outdated.style.backgroundColor = bkgColor;
    outdated.style.color = txtColor;

    //check settings attributes
    btnUpdate.style.color = txtColor;
    btnUpdate.style.borderColor = txtColor;

    //Override the update button color to match the background color
    btnUpdate.onmouseover = function() {
        this.style.color = bkgColor;
        this.style.backgroundColor = txtColor;
    };
    btnUpdate.onmouseout = function() {
        this.style.color = txtColor;
        this.style.backgroundColor = bkgColor;
    };

}//end of function
;
/*! iFrame Resizer (iframeSizer.min.js ) - v3.5.5 - 2016-06-16
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2016 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */


!function(a){"use strict";function b(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function c(b,c,d){"removeEventListener"in a?b.removeEventListener(c,d,!1):"detachEvent"in a&&b.detachEvent("on"+c,d)}function d(){var b,c=["moz","webkit","o","ms"];for(b=0;b<c.length&&!N;b+=1)N=a[c[b]+"RequestAnimationFrame"];N||h("setup","RequestAnimationFrame not supported")}function e(b){var c="Host page: "+b;return a.top!==a.self&&(c=a.parentIFrame&&a.parentIFrame.getId?a.parentIFrame.getId()+": "+b:"Nested host page: "+b),c}function f(a){return K+"["+e(a)+"]"}function g(a){return P[a]?P[a].log:G}function h(a,b){k("log",a,b,g(a))}function i(a,b){k("info",a,b,g(a))}function j(a,b){k("warn",a,b,!0)}function k(b,c,d,e){!0===e&&"object"==typeof a.console&&console[b](f(c),d)}function l(d){function e(){function a(){s(V),p(W)}g("Height"),g("Width"),t(a,V,"init")}function f(){var a=U.substr(L).split(":");return{iframe:P[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function g(a){var b=Number(P[W]["max"+a]),c=Number(P[W]["min"+a]),d=a.toLowerCase(),e=Number(V[d]);h(W,"Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,h(W,"Set "+d+" to min value")),e>b&&(e=b,h(W,"Set "+d+" to max value")),V[d]=""+e}function k(){function a(){function a(){var a=0,d=!1;for(h(W,"Checking connection is from allowed list of origins: "+c);a<c.length;a++)if(c[a]===b){d=!0;break}return d}function d(){var a=P[W].remoteHost;return h(W,"Checking connection is from: "+a),b===a}return c.constructor===Array?a():d()}var b=d.origin,c=P[W].checkOrigin;if(c&&""+b!="null"&&!a())throw new Error("Unexpected message received from: "+b+" for "+V.iframe.id+". Message was: "+d.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function l(){return K===(""+U).substr(0,L)&&U.substr(L).split(":")[0]in P}function w(){var a=V.type in{"true":1,"false":1,undefined:1};return a&&h(W,"Ignoring init message from meta parent page"),a}function y(a){return U.substr(U.indexOf(":")+J+a)}function z(a){h(W,"MessageCallback passed: {iframe: "+V.iframe.id+", message: "+a+"}"),N("messageCallback",{iframe:V.iframe,message:JSON.parse(a)}),h(W,"--")}function A(){var b=document.body.getBoundingClientRect(),c=V.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:c.height,iframeWidth:c.width,clientHeight:Math.max(document.documentElement.clientHeight,a.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,a.innerWidth||0),offsetTop:parseInt(c.top-b.top,10),offsetLeft:parseInt(c.left-b.left,10),scrollTop:a.pageYOffset,scrollLeft:a.pageXOffset})}function B(a,b){function c(){u("Send Page Info","pageInfo:"+A(),a,b)}x(c,32)}function C(){function d(b,c){function d(){P[g]?B(P[g].iframe,g):e()}["scroll","resize"].forEach(function(e){h(g,b+e+" listener for sendPageInfo"),c(a,e,d)})}function e(){d("Remove ",c)}function f(){d("Add ",b)}var g=W;f(),P[g].stopPageInfo=e}function D(){P[W]&&P[W].stopPageInfo&&(P[W].stopPageInfo(),delete P[W].stopPageInfo)}function E(){var a=!0;return null===V.iframe&&(j(W,"IFrame ("+V.id+") not found"),a=!1),a}function F(a){var b=a.getBoundingClientRect();return o(W),{x:Math.floor(Number(b.left)+Number(M.x)),y:Math.floor(Number(b.top)+Number(M.y))}}function G(b){function c(){M=g,H(),h(W,"--")}function d(){return{x:Number(V.width)+f.x,y:Number(V.height)+f.y}}function e(){a.parentIFrame?a.parentIFrame["scrollTo"+(b?"Offset":"")](g.x,g.y):j(W,"Unable to scroll to requested position, window.parentIFrame not found")}var f=b?F(V.iframe):{x:0,y:0},g=d();h(W,"Reposition requested from iFrame (offset x:"+f.x+" y:"+f.y+")"),a.top!==a.self?e():c()}function H(){!1!==N("scrollCallback",M)?p(W):q()}function I(b){function c(){var a=F(g);h(W,"Moving to in page link (#"+e+") at x: "+a.x+" y: "+a.y),M={x:a.x,y:a.y},H(),h(W,"--")}function d(){a.parentIFrame?a.parentIFrame.moveToAnchor(e):h(W,"In page link #"+e+" not found and window.parentIFrame not found")}var e=b.split("#")[1]||"",f=decodeURIComponent(e),g=document.getElementById(f)||document.getElementsByName(f)[0];g?c():a.top!==a.self?d():h(W,"In page link #"+e+" not found")}function N(a,b){return m(W,a,b)}function O(){switch(P[W].firstRun&&T(),V.type){case"close":n(V.iframe);break;case"message":z(y(6));break;case"scrollTo":G(!1);break;case"scrollToOffset":G(!0);break;case"pageInfo":B(P[W].iframe,W),C();break;case"pageInfoStop":D();break;case"inPageLink":I(y(9));break;case"reset":r(V);break;case"init":e(),N("initCallback",V.iframe),N("resizedCallback",V);break;default:e(),N("resizedCallback",V)}}function Q(a){var b=!0;return P[a]||(b=!1,j(V.type+" No settings for "+a+". Message was: "+U)),b}function S(){for(var a in P)u("iFrame requested init",v(a),document.getElementById(a),a)}function T(){P[W].firstRun=!1}var U=d.data,V={},W=null;"[iFrameResizerChild]Ready"===U?S():l()?(V=f(),W=R=V.id,!w()&&Q(W)&&(h(W,"Received: "+U),E()&&k()&&O())):i(W,"Ignored: "+U)}function m(a,b,c){var d=null,e=null;if(P[a]){if(d=P[a][b],"function"!=typeof d)throw new TypeError(b+" on iFrame["+a+"] is not a function");e=d(c)}return e}function n(a){var b=a.id;h(b,"Removing iFrame: "+b),a.parentNode.removeChild(a),m(b,"closedCallback",b),h(b,"--"),delete P[b]}function o(b){null===M&&(M={x:void 0!==a.pageXOffset?a.pageXOffset:document.documentElement.scrollLeft,y:void 0!==a.pageYOffset?a.pageYOffset:document.documentElement.scrollTop},h(b,"Get page position: "+M.x+","+M.y))}function p(b){null!==M&&(a.scrollTo(M.x,M.y),h(b,"Set page position: "+M.x+","+M.y),q())}function q(){M=null}function r(a){function b(){s(a),u("reset","reset",a.iframe,a.id)}h(a.id,"Size reset requested by "+("init"===a.type?"host page":"iFrame")),o(a.id),t(b,a,"reset")}function s(a){function b(b){a.iframe.style[b]=a[b]+"px",h(a.id,"IFrame ("+e+") "+b+" set to "+a[b]+"px")}function c(b){H||"0"!==a[b]||(H=!0,h(e,"Hidden iFrame detected, creating visibility listener"),y())}function d(a){b(a),c(a)}var e=a.iframe.id;P[e]&&(P[e].sizeHeight&&d("height"),P[e].sizeWidth&&d("width"))}function t(a,b,c){c!==b.type&&N?(h(b.id,"Requesting animation frame"),N(a)):a()}function u(a,b,c,d){function e(){var e=P[d].targetOrigin;h(d,"["+a+"] Sending msg to iframe["+d+"] ("+b+") targetOrigin: "+e),c.contentWindow.postMessage(K+b,e)}function f(){i(d,"["+a+"] IFrame("+d+") not found"),P[d]&&delete P[d]}function g(){c&&"contentWindow"in c&&null!==c.contentWindow?e():f()}d=d||c.id,P[d]&&g()}function v(a){return a+":"+P[a].bodyMarginV1+":"+P[a].sizeWidth+":"+P[a].log+":"+P[a].interval+":"+P[a].enablePublicMethods+":"+P[a].autoResize+":"+P[a].bodyMargin+":"+P[a].heightCalculationMethod+":"+P[a].bodyBackground+":"+P[a].bodyPadding+":"+P[a].tolerance+":"+P[a].inPageLinks+":"+P[a].resizeFrom+":"+P[a].widthCalculationMethod}function w(a,c){function d(){function b(b){1/0!==P[w][b]&&0!==P[w][b]&&(a.style[b]=P[w][b]+"px",h(w,"Set "+b+" = "+P[w][b]+"px"))}function c(a){if(P[w]["min"+a]>P[w]["max"+a])throw new Error("Value for min"+a+" can not be greater than max"+a)}c("Height"),c("Width"),b("maxHeight"),b("minHeight"),b("maxWidth"),b("minWidth")}function e(){var a=c&&c.id||S.id+F++;return null!==document.getElementById(a)&&(a+=F++),a}function f(b){return R=b,""===b&&(a.id=b=e(),G=(c||{}).log,R=b,h(b,"Added missing iframe ID: "+b+" ("+a.src+")")),b}function g(){h(w,"IFrame scrolling "+(P[w].scrolling?"enabled":"disabled")+" for "+w),a.style.overflow=!1===P[w].scrolling?"hidden":"auto",a.scrolling=!1===P[w].scrolling?"no":"yes"}function i(){("number"==typeof P[w].bodyMargin||"0"===P[w].bodyMargin)&&(P[w].bodyMarginV1=P[w].bodyMargin,P[w].bodyMargin=""+P[w].bodyMargin+"px")}function k(){var b=P[w].firstRun,c=P[w].heightCalculationMethod in O;!b&&c&&r({iframe:a,height:0,width:0,type:"init"})}function l(){Function.prototype.bind&&(P[w].iframe.iFrameResizer={close:n.bind(null,P[w].iframe),resize:u.bind(null,"Window resize","resize",P[w].iframe),moveToAnchor:function(a){u("Move to anchor","moveToAnchor:"+a,P[w].iframe,w)},sendMessage:function(a){a=JSON.stringify(a),u("Send Message","message:"+a,P[w].iframe,w)}})}function m(c){function d(){u("iFrame.onload",c,a),k()}b(a,"load",d),u("init",c,a)}function o(a){if("object"!=typeof a)throw new TypeError("Options is not an object")}function p(a){for(var b in S)S.hasOwnProperty(b)&&(P[w][b]=a.hasOwnProperty(b)?a[b]:S[b])}function q(a){return""===a||"file://"===a?"*":a}function s(b){b=b||{},P[w]={firstRun:!0,iframe:a,remoteHost:a.src.split("/").slice(0,3).join("/")},o(b),p(b),P[w].targetOrigin=!0===P[w].checkOrigin?q(P[w].remoteHost):"*"}function t(){return w in P&&"iFrameResizer"in a}var w=f(a.id);t()?j(w,"Ignored iFrame, already setup."):(s(c),g(),d(),i(),m(v(w)),l())}function x(a,b){null===Q&&(Q=setTimeout(function(){Q=null,a()},b))}function y(){function b(){function a(a){function b(b){return"0px"===P[a].iframe.style[b]}function c(a){return null!==a.offsetParent}c(P[a].iframe)&&(b("height")||b("width"))&&u("Visibility change","resize",P[a].iframe,a)}for(var b in P)a(b)}function c(a){h("window","Mutation observed: "+a[0].target+" "+a[0].type),x(b,16)}function d(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},d=new e(c);d.observe(a,b)}var e=a.MutationObserver||a.WebKitMutationObserver;e&&d()}function z(a){function b(){B("Window "+a,"resize")}h("window","Trigger event: "+a),x(b,16)}function A(){function a(){B("Tab Visable","resize")}"hidden"!==document.visibilityState&&(h("document","Trigger event: Visiblity change"),x(a,16))}function B(a,b){function c(a){return"parent"===P[a].resizeFrom&&P[a].autoResize&&!P[a].firstRun}for(var d in P)c(d)&&u(a,b,document.getElementById(d),d)}function C(){b(a,"message",l),b(a,"resize",function(){z("resize")}),b(document,"visibilitychange",A),b(document,"-webkit-visibilitychange",A),b(a,"focusin",function(){z("focus")}),b(a,"focus",function(){z("focus")})}function D(){function a(a,c){function d(){if(!c.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==c.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+c.tagName+">")}c&&(d(),w(c,a),b.push(c))}var b;return d(),C(),function(c,d){switch(b=[],typeof d){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a.bind(void 0,c));break;case"object":a(c,d);break;default:throw new TypeError("Unexpected data type ("+typeof d+")")}return b}}function E(a){a.fn?a.fn.iFrameResize=function(a){function b(b,c){w(c,a)}return this.filter("iframe").each(b).end()}:i("","Unable to bind to jQuery, it is not fully loaded.")}var F=0,G=!1,H=!1,I="message",J=I.length,K="[iFrameSizer]",L=K.length,M=null,N=a.requestAnimationFrame,O={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},P={},Q=null,R="Host Page",S={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){j("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};a.jQuery&&E(jQuery),"function"==typeof define&&define.amd?define([],D):"object"==typeof module&&"object"==typeof module.exports?module.exports=D():a.iFrameResize=a.iFrameResize||D()}(window||{});
//# sourceMappingURL=iframeResizer.map
;
/*!
 * CanJS - 1.1.6
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Sat, 06 Jul 2013 14:06:51 GMT
 * Licensed MIT
 * Includes: can/construct/construct.js,can/observe/observe.js,can/observe/compute/compute.js,can/model/model.js,can/view/view.js,can/view/ejs/ejs.js,can/control/control.js,can/route/route.js,can/control/route/route.js,can/view/mustache/mustache.js,can/util/string/string.js
 * Download from: http://bitbuilder.herokuapp.com/can.custom.js?configuration=jquery&plugins=can%2Fconstruct%2Fconstruct.js&plugins=can%2Fobserve%2Fobserve.js&plugins=can%2Fobserve%2Fcompute%2Fcompute.js&plugins=can%2Fmodel%2Fmodel.js&plugins=can%2Fview%2Fview.js&plugins=can%2Fview%2Fejs%2Fejs.js&plugins=can%2Fcontrol%2Fcontrol.js&plugins=can%2Froute%2Froute.js&plugins=can%2Fcontrol%2Froute%2Froute.js&plugins=can%2Fview%2Fmustache%2Fmustache.js&plugins=can%2Futil%2Fstring%2Fstring.js
 */

(function(undefined) {

    // ## can/util/can.js
    var __m5 = (function() {
        var can = window.can || {};
        if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
            window.can = can;
        }

        can.isDeferred = function(obj) {
            var isFunction = this.isFunction;
            // Returns `true` if something looks like a deferred.
            return obj && isFunction(obj.then) && isFunction(obj.pipe);
        };

        var cid = 0;
        can.cid = function(object, name) {
            if (object._cid) {
                return object._cid
            } else {
                return object._cid = (name || "") + (++cid)
            }
        }
        can.VERSION = '@EDGE';
        return can;
    })();

    // ## can/util/array/each.js
    var __m6 = (function(can) {
        can.each = function(elements, callback, context) {
            var i = 0,
                key;
            if (elements) {
                if (typeof elements.length === 'number' && elements.pop) {
                    if (elements.attr) {
                        elements.attr('length');
                    }
                    for (key = elements.length; i < key; i++) {
                        if (callback.call(context || elements[i], elements[i], i, elements) === false) {
                            break;
                        }
                    }
                } else if (elements.hasOwnProperty) {
                    for (key in elements) {
                        if (elements.hasOwnProperty(key)) {
                            if (callback.call(context || elements[key], elements[key], key, elements) === false) {
                                break;
                            }
                        }
                    }
                }
            }
            return elements;
        };

        return can;
    })(__m5);

    // ## can/util/jquery/jquery.js
    var __m3 = (function($, can) {
        // _jQuery node list._
        $.extend(can, $, {
                trigger: function(obj, event, args) {
                    if (obj.trigger) {
                        obj.trigger(event, args);
                    } else {
                        $.event.trigger(event, args, obj, true);
                    }
                },
                addEvent: function(ev, cb) {
                    $([this]).bind(ev, cb);
                    return this;
                },
                removeEvent: function(ev, cb) {
                    $([this]).unbind(ev, cb);
                    return this;
                },
                // jquery caches fragments, we always needs a new one
                buildFragment: function(elems, context) {
                    var oldFragment = $.buildFragment,
                        ret;

                    elems = [elems];
                    // Set context per 1.8 logic
                    context = context || document;
                    context = !context.nodeType && context[0] || context;
                    context = context.ownerDocument || context;

                    ret = oldFragment.call(jQuery, elems, context);

                    return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
                },
                $: $,
                each: can.each
            });

        // Wrap binding functions.
        $.each(['bind', 'unbind', 'undelegate', 'delegate'], function(i, func) {
            can[func] = function() {
                var t = this[func] ? this : $([this]);
                t[func].apply(t, arguments);
                return this;
            };
        });

        // Wrap modifier functions.
        $.each(["append", "filter", "addClass", "remove", "data", "get"], function(i, name) {
            can[name] = function(wrapped) {
                return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
            };
        });

        // Memory safe destruction.
        var oldClean = $.cleanData;

        $.cleanData = function(elems) {
            $.each(elems, function(i, elem) {
                if (elem) {
                    can.trigger(elem, "destroyed", [], false);
                }
            });
            oldClean(elems);
        };

        return can;
    })(jQuery, __m5, __m6);

    // ## can/util/string/string.js
    var __m2 = (function(can) {
        // ##string.js
        // _Miscellaneous string utility functions._  

        // Several of the methods in this plugin use code adapated from Prototype
        // Prototype JavaScript framework, version 1.6.0.1.
        // © 2005-2007 Sam Stephenson
        var strUndHash = /_|-/,
            strColons = /\=\=/,
            strWords = /([A-Z]+)([A-Z][a-z])/g,
            strLowUp = /([a-z\d])([A-Z])/g,
            strDash = /([a-z\d])([A-Z])/g,
            strReplacer = /\{([^\}]+)\}/g,
            strQuote = /"/g,
            strSingleQuote = /'/g,

            // Returns the `prop` property from `obj`.
            // If `add` is true and `prop` doesn't exist in `obj`, create it as an
            // empty object.
            getNext = function(obj, prop, add) {
                var result = obj[prop];

                if (result === undefined && add === true) {
                    result = obj[prop] = {}
                }
                return result
            },

            // Returns `true` if the object can have properties (no `null`s).
            isContainer = function(current) {
                return (/^f|^o/).test(typeof current);
            };

        can.extend(can, {
                // Escapes strings for HTML.

                esc: function(content) {
                    // Convert bad values into empty strings
                    var isInvalid = content === null || content === undefined || (isNaN(content) && ("" + content === 'NaN'));
                    return ("" + (isInvalid ? '' : content))
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(strQuote, '&#34;')
                        .replace(strSingleQuote, "&#39;");
                },


                getObject: function(name, roots, add) {

                    // The parts of the name we are looking up
                    // `['App','Models','Recipe']`
                    var parts = name ? name.split('.') : [],
                        length = parts.length,
                        current,
                        r = 0,
                        i, container, rootsLength;

                    // Make sure roots is an `array`.
                    roots = can.isArray(roots) ? roots : [roots || window];

                    rootsLength = roots.length

                    if (!length) {
                        return roots[0];
                    }

                    // For each root, mark it as current.
                    for (r; r < rootsLength; r++) {
                        current = roots[r];
                        container = undefined;

                        // Walk current to the 2nd to last object or until there
                        // is not a container.
                        for (i = 0; i < length && isContainer(current); i++) {
                            container = current;
                            current = getNext(container, parts[i]);
                        }

                        // If we found property break cycle
                        if (container !== undefined && current !== undefined) {
                            break
                        }
                    }

                    // Remove property from found container
                    if (add === false && current !== undefined) {
                        delete container[parts[i - 1]]
                    }

                    // When adding property add it to the first root
                    if (add === true && current === undefined) {
                        current = roots[0]

                        for (i = 0; i < length && isContainer(current); i++) {
                            current = getNext(current, parts[i], true);
                        }
                    }

                    return current;
                },
                // Capitalizes a string.

                capitalize: function(s, cache) {
                    // Used to make newId.
                    return s.charAt(0).toUpperCase() + s.slice(1);
                },

                // Underscores a string.

                underscore: function(s) {
                    return s
                        .replace(strColons, '/')
                        .replace(strWords, '$1_$2')
                        .replace(strLowUp, '$1_$2')
                        .replace(strDash, '_')
                        .toLowerCase();
                },
                // Micro-templating.

                sub: function(str, data, remove) {
                    var obs = [];

                    str = str || '';

                    obs.push(str.replace(strReplacer, function(whole, inside) {

                                // Convert inside to type.
                                var ob = can.getObject(inside, data, remove === true ? false : undefined);

                                if (ob === undefined) {
                                    obs = null;
                                    return "";
                                }

                                // If a container, push into objs (which will return objects found).
                                if (isContainer(ob) && obs) {
                                    obs.push(ob);
                                    return "";
                                }

                                return "" + ob;
                            }));

                    return obs === null ? obs : (obs.length <= 1 ? obs[0] : obs);
                },

                // These regex's are used throughout the rest of can, so let's make
                // them available.
                replacer: strReplacer,
                undHash: strUndHash
            });
        return can;
    })(__m3);

    // ## can/construct/construct.js
    var __m1 = (function(can) {

        // ## construct.js
        // `can.Construct`  
        // _This is a modified version of
        // [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).  
        // It provides class level inheritance and callbacks._

        // A private flag used to initialize a new class instance without
        // initializing it's bindings.
        var initializing = 0;


        can.Construct = function() {
            if (arguments.length) {
                return can.Construct.extend.apply(can.Construct, arguments);
            }
        };


        can.extend(can.Construct, {

                newInstance: function() {
                    // Get a raw instance object (`init` is not called).
                    var inst = this.instance(),
                        arg = arguments,
                        args;

                    // Call `setup` if there is a `setup`
                    if (inst.setup) {
                        args = inst.setup.apply(inst, arguments);
                    }

                    // Call `init` if there is an `init`  
                    // If `setup` returned `args`, use those as the arguments
                    if (inst.init) {
                        inst.init.apply(inst, args || arguments);
                    }

                    return inst;
                },
                // Overwrites an object with methods. Used in the `super` plugin.
                // `newProps` - New properties to add.  
                // `oldProps` - Where the old properties might be (used with `super`).  
                // `addTo` - What we are adding to.
                _inherit: function(newProps, oldProps, addTo) {
                    can.extend(addTo || newProps, newProps || {})
                },
                // used for overwriting a single property.
                // this should be used for patching other objects
                // the super plugin overwrites this
                _overwrite: function(what, oldProps, propName, val) {
                    what[propName] = val;
                },
                // Set `defaults` as the merger of the parent `defaults` and this 
                // object's `defaults`. If you overwrite this method, make sure to
                // include option merging logic.

                setup: function(base, fullName) {
                    this.defaults = can.extend(true, {}, base.defaults, this.defaults);
                },
                // Create's a new `class` instance without initializing by setting the
                // `initializing` flag.
                instance: function() {

                    // Prevents running `init`.
                    initializing = 1;

                    var inst = new this();

                    // Allow running `init`.
                    initializing = 0;

                    return inst;
                },
                // Extends classes.

                extend: function(fullName, klass, proto) {
                    // Figure out what was passed and normalize it.
                    if (typeof fullName != 'string') {
                        proto = klass;
                        klass = fullName;
                        fullName = null;
                    }

                    if (!proto) {
                        proto = klass;
                        klass = null;
                    }
                    proto = proto || {};

                    var _super_class = this,
                        _super = this.prototype,
                        name, shortName, namespace, prototype;

                    // Instantiate a base class (but only create the instance,
                    // don't run the init constructor).
                    prototype = this.instance();

                    // Copy the properties over onto the new prototype.
                    can.Construct._inherit(proto, _super, prototype);

                    // The dummy class constructor.

                    function Constructor() {
                        // All construction is actually done in the init method.
                        if (!initializing) {
                            return this.constructor !== Constructor && arguments.length ?
                            // We are being called without `new` or we are extending.
                            arguments.callee.extend.apply(arguments.callee, arguments) :
                            // We are being called with `new`.
                            this.constructor.newInstance.apply(this.constructor, arguments);
                        }
                    }

                    // Copy old stuff onto class (can probably be merged w/ inherit)
                    for (name in _super_class) {
                        if (_super_class.hasOwnProperty(name)) {
                            Constructor[name] = _super_class[name];
                        }
                    }

                    // Copy new static properties on class.
                    can.Construct._inherit(klass, _super_class, Constructor);

                    // Setup namespaces.
                    if (fullName) {

                        var parts = fullName.split('.'),
                            shortName = parts.pop(),
                            current = can.getObject(parts.join('.'), window, true),
                            namespace = current,
                            _fullName = can.underscore(fullName.replace(/\./g, "_")),
                            _shortName = can.underscore(shortName);



                        current[shortName] = Constructor;
                    }

                    // Set things that shouldn't be overwritten.
                    can.extend(Constructor, {
                            constructor: Constructor,
                            prototype: prototype,

                            namespace: namespace,

                            _shortName: _shortName,

                            fullName: fullName,
                            _fullName: _fullName
                        });

                    // Dojo and YUI extend undefined
                    if (shortName !== undefined) {
                        Constructor.shortName = shortName;
                    }

                    // Make sure our prototype looks nice.
                    Constructor.prototype.constructor = Constructor;


                    // Call the class `setup` and `init`
                    var t = [_super_class].concat(can.makeArray(arguments)),
                        args = Constructor.setup.apply(Constructor, t);

                    if (Constructor.init) {
                        Constructor.init.apply(Constructor, args || t);
                    }


                    return Constructor;

                }

            });
        return can.Construct;
    })(__m2);

    // ## can/util/bind/bind.js
    var __m8 = (function(can) {


        // ## Bind helpers
        can.bindAndSetup = function() {
            // Add the event to this object
            can.addEvent.apply(this, arguments);
            // If not initializing, and the first binding
            // call bindsetup if the function exists.
            if (!this._init) {
                if (!this._bindings) {
                    this._bindings = 1;
                    // setup live-binding
                    this._bindsetup && this._bindsetup();

                } else {
                    this._bindings++;
                }

            }

            return this;
        };

        can.unbindAndTeardown = function(ev, handler) {
            // Remove the event handler
            can.removeEvent.apply(this, arguments);

            this._bindings--;
            // If there are no longer any bindings and
            // there is a bindteardown method, call it.
            if (!this._bindings) {
                this._bindteardown && this._bindteardown();
            }
            return this;
        }

        return can;

    })(__m3);

    // ## can/observe/observe.js
    var __m7 = (function(can, bind) {
        // ## observe.js  
        // `can.Observe`  
        // _Provides the observable pattern for JavaScript Objects._  
        // Returns `true` if something is an object with properties of its own.
        var canMakeObserve = function(obj) {
            return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject(obj) || (obj instanceof can.Observe));
        },

            // Removes all listeners.
            unhookup = function(items, namespace) {
                return can.each(items, function(item) {
                    if (item && item.unbind) {
                        item.unbind("change" + namespace);
                    }
                });
            },
            // Listens to changes on `child` and "bubbles" the event up.  
            // `child` - The object to listen for changes on.  
            // `prop` - The property name is at on.  
            // `parent` - The parent object of prop.
            // `ob` - (optional) The Observe object constructor
            // `list` - (optional) The observable list constructor
            hookupBubble = function(child, prop, parent, Ob, List) {
                Ob = Ob || Observe;
                List = List || Observe.List;

                // If it's an `array` make a list, otherwise a child.
                if (child instanceof Observe) {
                    // We have an `observe` already...
                    // Make sure it is not listening to this already
                    // It's only listening if it has bindings already.
                    parent._bindings && unhookup([child], parent._cid);
                } else if (can.isArray(child)) {
                    child = new List(child);
                } else {
                    child = new Ob(child);
                }
                // only listen if something is listening to you
                if (parent._bindings) {
                    // Listen to all changes and `batchTrigger` upwards.
                    bindToChildAndBubbleToParent(child, prop, parent)
                }


                return child;
            },
            bindToChildAndBubbleToParent = function(child, prop, parent) {
                child.bind("change" + parent._cid, function() {
                    // `batchTrigger` the type on this...
                    var args = can.makeArray(arguments),
                        ev = args.shift();
                    args[0] = (prop === "*" ? [parent.indexOf(child), args[0]] : [prop, args[0]]).join(".");

                    // track objects dispatched on this observe		
                    ev.triggeredNS = ev.triggeredNS || {};

                    // if it has already been dispatched exit
                    if (ev.triggeredNS[parent._cid]) {
                        return;
                    }

                    ev.triggeredNS[parent._cid] = true;
                    // send change event with modified attr to parent	
                    can.trigger(parent, ev, args);
                    // send modified attr event to parent
                    //can.trigger(parent, args[0], args);
                });
            }
            // An `id` to track events for a given observe.
        observeId = 0,
        // A helper used to serialize an `Observe` or `Observe.List`.  
        // `observe` - The observable.  
        // `how` - To serialize with `attr` or `serialize`.  
        // `where` - To put properties, in an `{}` or `[]`.
        serialize = function(observe, how, where) {
            // Go through each property.
            observe.each(function(val, name) {
                // If the value is an `object`, and has an `attrs` or `serialize` function.
                where[name] = canMakeObserve(val) && can.isFunction(val[how]) ?
                // Call `attrs` or `serialize` to get the original data back.
                val[how]() :
                // Otherwise return the value.
                val;
            });
            return where;
        },
        attrParts = function(attr, keepKey) {
            if (keepKey) {
                return [attr];
            }
            return can.isArray(attr) ? attr : ("" + attr).split(".");
        },
        // Which batch of events this is for -- might not want to send multiple
        // messages on the same batch.  This is mostly for event delegation.
        batchNum = 1,
        // how many times has start been called without a stop
        transactions = 0,
        // an array of events within a transaction
        batchEvents = [],
        stopCallbacks = [],
        makeBindSetup = function(wildcard) {
            return function() {
                var parent = this;
                this._each(function(child, prop) {
                    if (child && child.bind) {
                        bindToChildAndBubbleToParent(child, wildcard || prop, parent)
                    }
                })
            };
        };


        var Observe = can.Map = can.Observe = can.Construct({

                // keep so it can be overwritten
                bind: can.bindAndSetup,
                unbind: can.unbindAndTeardown,
                id: "id",
                canMakeObserve: canMakeObserve,
                // starts collecting events
                // takes a callback for after they are updated
                // how could you hook into after ejs

                startBatch: function(batchStopHandler) {
                    transactions++;
                    batchStopHandler && stopCallbacks.push(batchStopHandler);
                },

                stopBatch: function(force, callStart) {
                    if (force) {
                        transactions = 0;
                    } else {
                        transactions--;
                    }

                    if (transactions == 0) {
                        var items = batchEvents.slice(0),
                            callbacks = stopCallbacks.slice(0);
                        batchEvents = [];
                        stopCallbacks = [];
                        batchNum++;
                        callStart && this.startBatch();
                        can.each(items, function(args) {
                            can.trigger.apply(can, args);
                        });
                        can.each(callbacks, function(cb) {
                            cb();
                        });
                    }
                },

                triggerBatch: function(item, event, args) {
                    // Don't send events if initalizing.
                    if (!item._init) {
                        if (transactions == 0) {
                            return can.trigger(item, event, args);
                        } else {
                            event = typeof event === "string" ? {
                                type: event
                            } :
                                event;
                            event.batchNum = batchNum;
                            batchEvents.push([
                                    item,
                                    event,
                                    args
                                ]);
                        }
                    }
                },

                keys: function(observe) {
                    var keys = [];
                    Observe.__reading && Observe.__reading(observe, '__keys');
                    for (var keyName in observe._data) {
                        keys.push(keyName);
                    }
                    return keys;
                }
            },

            {
                setup: function(obj) {
                    // `_data` is where we keep the properties.
                    this._data = {};

                    // The namespace this `object` uses to listen to events.
                    can.cid(this, ".observe");
                    // Sets all `attrs`.
                    this._init = 1;
                    this.attr(obj);
                    this.bind('change' + this._cid, can.proxy(this._changes, this));
                    delete this._init;
                },
                _bindsetup: makeBindSetup(),
                _bindteardown: function() {
                    var cid = this._cid;
                    this._each(function(child) {
                        unhookup([child], cid)
                    })
                },
                _changes: function(ev, attr, how, newVal, oldVal) {
                    Observe.triggerBatch(this, {
                            type: attr,
                            batchNum: ev.batchNum
                        }, [newVal, oldVal]);
                },
                _triggerChange: function(attr, how, newVal, oldVal) {
                    Observe.triggerBatch(this, "change", can.makeArray(arguments))
                },
                // no live binding iterator
                _each: function(callback) {
                    var data = this.__get();
                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            callback(data[prop], prop)
                        }
                    }
                },

                attr: function(attr, val) {
                    // This is super obfuscated for space -- basically, we're checking
                    // if the type of the attribute is not a `number` or a `string`.
                    var type = typeof attr;
                    if (type !== "string" && type !== "number") {
                        return this._attrs(attr, val)
                    } else if (arguments.length === 1) { // If we are getting a value.
                        // Let people know we are reading.
                        Observe.__reading && Observe.__reading(this, attr)
                        return this._get(attr)
                    } else {
                        // Otherwise we are setting.
                        this._set(attr, val);
                        return this;
                    }
                },

                each: function() {
                    Observe.__reading && Observe.__reading(this, '__keys');
                    return can.each.apply(undefined, [this.__get()].concat(can.makeArray(arguments)))
                },

                removeAttr: function(attr) {
                    // Info if this is List or not
                    var isList = this instanceof can.Observe.List,
                        // Convert the `attr` into parts (if nested).
                        parts = attrParts(attr),
                        // The actual property to remove.
                        prop = parts.shift(),
                        // The current value.
                        current = isList ? this[prop] : this._data[prop];

                    // If we have more parts, call `removeAttr` on that part.
                    if (parts.length) {
                        return current.removeAttr(parts)
                    } else {
                        if (isList) {
                            this.splice(prop, 1)
                        } else if (prop in this._data) {
                            // Otherwise, `delete`.
                            delete this._data[prop];
                            // Create the event.
                            if (!(prop in this.constructor.prototype)) {
                                delete this[prop]
                            }
                            // Let others know the number of keys have changed
                            Observe.triggerBatch(this, "__keys");
                            this._triggerChange(prop, "remove", undefined, current);

                        }
                        return current;
                    }
                },
                // Reads a property from the `object`.
                _get: function(attr) {
                    var value = typeof attr === 'string' && !! ~attr.indexOf('.') && this.__get(attr);
                    if (value) {
                        return value;
                    }

                    // break up the attr (`"foo.bar"`) into `["foo","bar"]`
                    var parts = attrParts(attr),
                        // get the value of the first attr name (`"foo"`)
                        current = this.__get(parts.shift());
                    // if there are other attributes to read
                    return parts.length ?
                    // and current has a value
                    current ?
                    // lookup the remaining attrs on current
                    current._get(parts) :
                    // or if there's no current, return undefined
                    undefined :
                    // if there are no more parts, return current
                    current;
                },
                // Reads a property directly if an `attr` is provided, otherwise
                // returns the "real" data object itself.
                __get: function(attr) {
                    return attr ? this._data[attr] : this._data;
                },
                // Sets `attr` prop as value on this object where.
                // `attr` - Is a string of properties or an array  of property values.
                // `value` - The raw value to set.
                _set: function(attr, value, keepKey) {
                    // Convert `attr` to attr parts (if it isn't already).
                    var parts = attrParts(attr, keepKey),
                        // The immediate prop we are setting.
                        prop = parts.shift(),
                        // The current value.
                        current = this.__get(prop);

                    // If we have an `object` and remaining parts.
                    if (canMakeObserve(current) && parts.length) {
                        // That `object` should set it (this might need to call attr).
                        current._set(parts, value)
                    } else if (!parts.length) {
                        // We're in "real" set territory.
                        if (this.__convert) {
                            value = this.__convert(prop, value)
                        }
                        this.__set(prop, value, current)
                    } else {
                        throw "can.Observe: Object does not exist"
                    }
                },
                __set: function(prop, value, current) {

                    // Otherwise, we are setting it on this `object`.
                    // TODO: Check if value is object and transform
                    // are we changing the value.
                    if (value !== current) {
                        // Check if we are adding this for the first time --
                        // if we are, we need to create an `add` event.
                        var changeType = this.__get().hasOwnProperty(prop) ? "set" : "add";

                        // Set the value on data.
                        this.___set(prop,

                            // If we are getting an object.
                            canMakeObserve(value) ?

                            // Hook it up to send event.
                            hookupBubble(value, prop, this) :
                            // Value is normal.
                            value);

                        if (changeType == "add") {
                            // If there is no current value, let others know that
                            // the the number of keys have changed

                            Observe.triggerBatch(this, "__keys", undefined);

                        }
                        // `batchTrigger` the change event.
                        this._triggerChange(prop, changeType, value, current);

                        //Observe.triggerBatch(this, prop, [value, current]);
                        // If we can stop listening to our old value, do it.
                        current && unhookup([current], this._cid);
                    }

                },
                // Directly sets a property on this `object`.
                ___set: function(prop, val) {
                    this._data[prop] = val;
                    // Add property directly for easy writing.
                    // Check if its on the `prototype` so we don't overwrite methods like `attrs`.
                    if (!(prop in this.constructor.prototype)) {
                        this[prop] = val
                    }
                },


                bind: can.bindAndSetup,

                unbind: can.unbindAndTeardown,

                serialize: function() {
                    return serialize(this, 'serialize', {});
                },

                _attrs: function(props, remove) {

                    if (props === undefined) {
                        return serialize(this, 'attr', {})
                    }

                    props = can.extend({}, props);
                    var prop,
                        self = this,
                        newVal;
                    Observe.startBatch();
                    this.each(function(curVal, prop) {
                        newVal = props[prop];

                        // If we are merging...
                        if (newVal === undefined) {
                            remove && self.removeAttr(prop);
                            return;
                        }

                        if (self.__convert) {
                            newVal = self.__convert(prop, newVal)
                        }

                        // if we're dealing with models, want to call _set to let converter run
                        if (newVal instanceof can.Observe) {
                            self.__set(prop, newVal, curVal)
                            // if its an object, let attr merge
                        } else if (canMakeObserve(curVal) && canMakeObserve(newVal) && curVal.attr) {
                            curVal.attr(newVal, remove)
                            // otherwise just set
                        } else if (curVal != newVal) {
                            self.__set(prop, newVal, curVal)
                        }

                        delete props[prop];
                    })
                    // Add remaining props.
                    for (var prop in props) {
                        newVal = props[prop];
                        this._set(prop, newVal, true)
                    }
                    Observe.stopBatch()
                    return this;
                },


                compute: function(prop) {
                    return can.compute(this, prop);
                }
            });
        // Helpers for `observable` lists.
        var splice = [].splice,

            list = Observe(

                {
                    setup: function(instances, options) {
                        this.length = 0;
                        can.cid(this, ".observe")
                        this._init = 1;
                        if (can.isDeferred(instances)) {
                            this.replace(instances)
                        } else {
                            this.push.apply(this, can.makeArray(instances || []));
                        }
                        // this change needs to be ignored
                        this.bind('change' + this._cid, can.proxy(this._changes, this));
                        can.extend(this, options);
                        delete this._init;
                    },
                    _triggerChange: function(attr, how, newVal, oldVal) {

                        Observe.prototype._triggerChange.apply(this, arguments)
                        // `batchTrigger` direct add and remove events...
                        if (!~attr.indexOf('.')) {

                            if (how === 'add') {
                                Observe.triggerBatch(this, how, [newVal, +attr]);
                                Observe.triggerBatch(this, 'length', [this.length]);
                            } else if (how === 'remove') {
                                Observe.triggerBatch(this, how, [oldVal, +attr]);
                                Observe.triggerBatch(this, 'length', [this.length]);
                            } else {
                                Observe.triggerBatch(this, how, [newVal, +attr])
                            }

                        }

                    },
                    __get: function(attr) {
                        return attr ? this[attr] : this;
                    },
                    ___set: function(attr, val) {
                        this[attr] = val;
                        if (+attr >= this.length) {
                            this.length = (+attr + 1)
                        }
                    },
                    _each: function(callback) {
                        var data = this.__get();
                        for (var i = 0; i < data.length; i++) {
                            callback(data[i], i)
                        }
                    },
                    _bindsetup: makeBindSetup("*"),
                    // Returns the serialized form of this list.

                    serialize: function() {
                        return serialize(this, 'serialize', []);
                    },

                    splice: function(index, howMany) {
                        var args = can.makeArray(arguments),
                            i;

                        for (i = 2; i < args.length; i++) {
                            var val = args[i];
                            if (canMakeObserve(val)) {
                                args[i] = hookupBubble(val, "*", this, this.constructor.Observe, this.constructor)
                            }
                        }
                        if (howMany === undefined) {
                            howMany = args[1] = this.length - index;
                        }
                        var removed = splice.apply(this, args);
                        can.Observe.startBatch();
                        if (howMany > 0) {
                            this._triggerChange("" + index, "remove", undefined, removed);
                            unhookup(removed, this._cid);
                        }
                        if (args.length > 2) {
                            this._triggerChange("" + index, "add", args.slice(2), removed);
                        }
                        can.Observe.stopBatch();
                        return removed;
                    },

                    _attrs: function(items, remove) {
                        if (items === undefined) {
                            return serialize(this, 'attr', []);
                        }

                        // Create a copy.
                        items = can.makeArray(items);

                        Observe.startBatch();
                        this._updateAttrs(items, remove);
                        Observe.stopBatch()
                    },

                    _updateAttrs: function(items, remove) {
                        var len = Math.min(items.length, this.length);

                        for (var prop = 0; prop < len; prop++) {
                            var curVal = this[prop],
                                newVal = items[prop];

                            if (canMakeObserve(curVal) && canMakeObserve(newVal)) {
                                curVal.attr(newVal, remove)
                            } else if (curVal != newVal) {
                                this._set(prop, newVal)
                            } else {

                            }
                        }
                        if (items.length > this.length) {
                            // Add in the remaining props.
                            this.push.apply(this, items.slice(this.length));
                        } else if (items.length < this.length && remove) {
                            this.splice(items.length)
                        }
                    }
                }),

            // Converts to an `array` of arguments.
            getArgs = function(args) {
                return args[0] && can.isArray(args[0]) ?
                    args[0] :
                    can.makeArray(args);
            };
        // Create `push`, `pop`, `shift`, and `unshift`
        can.each({

                push: "length",

                unshift: 0
            },
            // Adds a method
            // `name` - The method name.
            // `where` - Where items in the `array` should be added.

            function(where, name) {
                var orig = [][name]
                list.prototype[name] = function() {
                    // Get the items being added.
                    var args = [],
                        // Where we are going to add items.
                        len = where ? this.length : 0,
                        i = arguments.length,
                        res,
                        val,
                        constructor = this.constructor;

                    // Go through and convert anything to an `observe` that needs to be converted.
                    while (i--) {
                        val = arguments[i];
                        args[i] = canMakeObserve(val) ?
                            hookupBubble(val, "*", this, this.constructor.Observe, this.constructor) :
                            val;
                    }

                    // Call the original method.
                    res = orig.apply(this, args);

                    if (!this.comparator || args.length) {

                        this._triggerChange("" + len, "add", args, undefined);
                    }

                    return res;
                }
            });

        can.each({

                pop: "length",

                shift: 0
            },
            // Creates a `remove` type method

            function(where, name) {
                list.prototype[name] = function() {

                    var args = getArgs(arguments),
                        len = where && this.length ? this.length - 1 : 0;

                    var res = [][name].apply(this, args)

                    // Create a change where the args are
                    // `len` - Where these items were removed.
                    // `remove` - Items removed.
                    // `undefined` - The new values (there are none).
                    // `res` - The old, removed values (should these be unbound).
                    this._triggerChange("" + len, "remove", undefined, [res])

                    if (res && res.unbind) {
                        res.unbind("change" + this._cid)
                    }
                    return res;
                }
            });

        can.extend(list.prototype, {

                indexOf: function(item) {
                    this.attr('length')
                    return can.inArray(item, this)
                },


                join: [].join,


                reverse: [].reverse,


                slice: function() {
                    var temp = Array.prototype.slice.apply(this, arguments);
                    return new this.constructor(temp);
                },


                concat: function() {
                    var args = [];
                    can.each(can.makeArray(arguments), function(arg, i) {
                        args[i] = arg instanceof can.Observe.List ? arg.serialize() : arg;
                    });
                    return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
                },


                forEach: function(cb, thisarg) {
                    can.each(this, cb, thisarg || this);
                },


                replace: function(newList) {
                    if (can.isDeferred(newList)) {
                        newList.then(can.proxy(this.replace, this));
                    } else {
                        this.splice.apply(this, [0, this.length].concat(can.makeArray(newList || [])));
                    }

                    return this;
                }
            });

        can.List = Observe.List = list;
        Observe.setup = function() {
            can.Construct.setup.apply(this, arguments);
            // I would prefer not to do it this way. It should
            // be using the attributes plugin to do this type of conversion.
            this.List = Observe.List({
                    Observe: this
                }, {});
        }
        return Observe;
    })(__m3, __m8, __m1);

    // ## can/observe/compute/compute.js
    var __m9 = (function(can, bind) {

        // returns the
        // - observes and attr methods are called by func
        // - the value returned by func
        // ex: `{value: 100, observed: [{obs: o, attr: "completed"}]}`
        var getValueAndObserved = function(func, self) {

            var oldReading;
            if (can.Observe) {
                // Set a callback on can.Observe to know
                // when an attr is read.
                // Keep a reference to the old reader
                // if there is one.  This is used
                // for nested live binding.
                oldReading = can.Observe.__reading;
                can.Observe.__reading = function(obj, attr) {
                    // Add the observe and attr that was read
                    // to `observed`
                    observed.push({
                            obj: obj,
                            attr: attr + ""
                        });
                };
            }

            var observed = [],
                // Call the "wrapping" function to get the value. `observed`
                // will have the observe/attribute pairs that were read.
                value = func.call(self);

            // Set back so we are no longer reading.
            if (can.Observe) {
                can.Observe.__reading = oldReading;
            }
            return {
                value: value,
                observed: observed
            };
        },
            // Calls `callback(newVal, oldVal)` everytime an observed property
            // called within `getterSetter` is changed and creates a new result of `getterSetter`.
            // Also returns an object that can teardown all event handlers.
            computeBinder = function(getterSetter, context, callback, computeState) {
                // track what we are observing
                var observing = {},
                    // a flag indicating if this observe/attr pair is already bound
                    matched = true,
                    // the data to return 
                    data = {
                        // we will maintain the value while live-binding is taking place
                        value: undefined,
                        // a teardown method that stops listening
                        teardown: function() {
                            for (var name in observing) {
                                var ob = observing[name];
                                ob.observe.obj.unbind(ob.observe.attr, onchanged);
                                delete observing[name];
                            }
                        }
                    },
                    batchNum;

                // when a property value is changed
                var onchanged = function(ev) {
                    // If the compute is no longer bound (because the same change event led to an unbind)
                    // then do not call getValueAndBind, or we will leak bindings.
                    if (computeState && !computeState.bound) {
                        return;
                    }
                    if (ev.batchNum === undefined || ev.batchNum !== batchNum) {
                        // store the old value
                        var oldValue = data.value,
                            // get the new value
                            newvalue = getValueAndBind();

                        // update the value reference (in case someone reads)
                        data.value = newvalue;
                        // if a change happened
                        if (newvalue !== oldValue) {
                            callback(newvalue, oldValue);
                        }
                        batchNum = batchNum = ev.batchNum;
                    }


                };

                // gets the value returned by `getterSetter` and also binds to any attributes
                // read by the call
                var getValueAndBind = function() {
                    var info = getValueAndObserved(getterSetter, context),
                        newObserveSet = info.observed;

                    var value = info.value;
                    matched = !matched;

                    // go through every attribute read by this observe
                    can.each(newObserveSet, function(ob) {
                        // if the observe/attribute pair is being observed
                        if (observing[ob.obj._cid + "|" + ob.attr]) {
                            // mark at as observed
                            observing[ob.obj._cid + "|" + ob.attr].matched = matched;
                        } else {
                            // otherwise, set the observe/attribute on oldObserved, marking it as being observed
                            observing[ob.obj._cid + "|" + ob.attr] = {
                                matched: matched,
                                observe: ob
                            };
                            ob.obj.bind(ob.attr, onchanged);
                        }
                    });

                    // Iterate through oldObserved, looking for observe/attributes
                    // that are no longer being bound and unbind them
                    for (var name in observing) {
                        var ob = observing[name];
                        if (ob.matched !== matched) {
                            ob.observe.obj.unbind(ob.observe.attr, onchanged);
                            delete observing[name];
                        }
                    }
                    return value;
                };
                // set the initial value
                data.value = getValueAndBind();

                data.isListening = !can.isEmptyObject(observing);
                return data;
            }

            // if no one is listening ... we can not calculate every time

        can.compute = function(getterSetter, context, eventName) {
            if (getterSetter && getterSetter.isComputed) {
                return getterSetter;
            }
            // stores the result of computeBinder
            var computedData,
                // how many listeners to this this compute
                bindings = 0,
                // the computed object
                computed,
                // an object that keeps track if the computed is bound
                // onchanged needs to know this. It's possible a change happens and results in
                // something that unbinds the compute, it needs to not to try to recalculate who it
                // is listening to
                computeState = {
                    bound: false,
                    // true if this compute is calculated from other computes and observes
                    hasDependencies: false
                },
                // The following functions are overwritten depending on how compute() is called
                // a method to setup listening
                on = function() {},
                // a method to teardown listening
                off = function() {},
                // the current cached value (only valid if bound = true)
                value,
                // how to read the value
                get = function() {
                    return value
                },
                // sets the value
                set = function(newVal) {
                    value = newVal;
                },
                // this compute can be a dependency of other computes
                canReadForChangeEvent = true;

            computed = function(newVal) {
                // setting ...
                if (arguments.length) {
                    // save a reference to the old value
                    var old = value;

                    // setter may return a value if 
                    // setter is for a value maintained exclusively by this compute
                    var setVal = set.call(context, newVal, old);

                    // if this has dependencies return the current value
                    if (computed.hasDependencies) {
                        return get.call(context);
                    }

                    if (setVal === undefined) {
                        // it's possible, like with the DOM, setting does not
                        // fire a change event, so we must read
                        value = get.call(context);
                    } else {
                        value = setVal;
                    }
                    // fire the change
                    if (old !== value) {
                        can.Observe.triggerBatch(computed, "change", [value, old]);
                    }
                    return value;
                } else {
                    // Let others know to listen to changes in this compute
                    if (can.Observe.__reading && canReadForChangeEvent) {
                        can.Observe.__reading(computed, 'change');
                    }
                    // if we are bound, use the cached value
                    if (computeState.bound) {
                        return value;
                    } else {
                        return get.call(context);
                    }
                }
            }
            if (typeof getterSetter === "function") {
                set = getterSetter;
                get = getterSetter;
                canReadForChangeEvent = eventName === false ? false : true;
                computed.hasDependencies = false;
                on = function(update) {
                    computedData = computeBinder(getterSetter, context || this, update, computeState);
                    computed.hasDependencies = computedData.isListening
                    value = computedData.value;
                }
                off = function() {
                    computedData && computedData.teardown();
                }
            } else if (context) {

                if (typeof context == "string") {
                    // `can.compute(obj, "propertyName", [eventName])`

                    var propertyName = context,
                        isObserve = getterSetter instanceof can.Observe;
                    if (isObserve) {
                        computed.hasDependencies = true;
                    }
                    get = function() {
                        if (isObserve) {
                            return getterSetter.attr(propertyName);
                        } else {
                            return getterSetter[propertyName];
                        }
                    }
                    set = function(newValue) {
                        if (isObserve) {
                            getterSetter.attr(propertyName, newValue)
                        } else {
                            getterSetter[propertyName] = newValue;
                        }
                    }
                    var handler;
                    on = function(update) {
                        handler = function() {
                            update(get(), value)
                        };
                        can.bind.call(getterSetter, eventName || propertyName, handler)

                        // use getValueAndObserved because
                        // we should not be indicating that some parent
                        // reads this property if it happens to be binding on it
                        value = getValueAndObserved(get).value
                    }
                    off = function() {
                        can.unbind.call(getterSetter, eventName || propertyName, handler)
                    }

                } else {
                    // `can.compute(initialValue, setter)`
                    if (typeof context === "function") {
                        value = getterSetter;
                        set = context;
                    } else {
                        // `can.compute(initialValue,{get:, set:, on:, off:})`
                        value = getterSetter;
                        var options = context;
                        get = options.get || get;
                        set = options.set || set;
                        on = options.on || on;
                        off = options.off || off;
                    }

                }



            } else {
                // `can.compute(5)`
                value = getterSetter;
            }

            computed.isComputed = true;

            can.cid(computed, "compute")

            var updater = function(newValue, oldValue) {
                value = newValue;
                // might need a way to look up new and oldVal
                can.Observe.triggerBatch(computed, "change", [newValue, oldValue])
            }

            return can.extend(computed, {
                    _bindsetup: function() {
                        computeState.bound = true;
                        // setup live-binding
                        on.call(this, updater)
                    },
                    _bindteardown: function() {
                        off.call(this, updater)
                        computeState.bound = false;
                    },

                    bind: can.bindAndSetup,

                    unbind: can.unbindAndTeardown
                });
        };
        can.compute.binder = computeBinder;
        return can.compute;
    })(__m3, __m8);

    // ## can/model/model.js
    var __m10 = (function(can) {

        // ## model.js  
        // `can.Model`  
        // _A `can.Observe` that connects to a RESTful interface._
        // Generic deferred piping function

        var pipe = function(def, model, func) {
            var d = new can.Deferred();
            def.then(function() {
                var args = can.makeArray(arguments);
                args[0] = model[func](args[0]);
                d.resolveWith(d, args);
            }, function() {
                d.rejectWith(this, arguments);
            });

            if (typeof def.abort === 'function') {
                d.abort = function() {
                    return def.abort();
                }
            }

            return d;
        },
            modelNum = 0,
            ignoreHookup = /change.observe\d+/,
            getId = function(inst) {
                // Instead of using attr, use __get for performance.
                // Need to set reading
                can.Observe.__reading && can.Observe.__reading(inst, inst.constructor.id)
                return inst.__get(inst.constructor.id);
            },
            // Ajax `options` generator function
            ajax = function(ajaxOb, data, type, dataType, success, error) {

                var params = {};

                // If we get a string, handle it.
                if (typeof ajaxOb == "string") {
                    // If there's a space, it's probably the type.
                    var parts = ajaxOb.split(/\s+/);
                    params.url = parts.pop();
                    if (parts.length) {
                        params.type = parts.pop();
                    }
                } else {
                    can.extend(params, ajaxOb);
                }

                // If we are a non-array object, copy to a new attrs.
                params.data = typeof data == "object" && !can.isArray(data) ?
                    can.extend(params.data || {}, data) : data;

                // Get the url with any templated values filled out.
                params.url = can.sub(params.url, params.data, true);

                return can.ajax(can.extend({
                            type: type || "post",
                            dataType: dataType || "json",
                            success: success,
                            error: error
                        }, params));
            },
            makeRequest = function(self, type, success, error, method) {
                var args;
                // if we pass an array as `self` it it means we are coming from
                // the queued request, and we're passing already serialized data
                // self's signature will be: [self, serializedData]
                if (can.isArray(self)) {
                    args = self[1];
                    self = self[0];
                } else {
                    args = self.serialize();
                }
                args = [args];
                var deferred,
                    // The model.
                    model = self.constructor,
                    jqXHR;

                // `destroy` does not need data.
                if (type == 'destroy') {
                    args.shift();
                }
                // `update` and `destroy` need the `id`.
                if (type !== 'create') {
                    args.unshift(getId(self));
                }


                jqXHR = model[type].apply(model, args);

                deferred = jqXHR.pipe(function(data) {
                    self[method || type + "d"](data, jqXHR);
                    return self;
                });

                // Hook up `abort`
                if (jqXHR.abort) {
                    deferred.abort = function() {
                        jqXHR.abort();
                    };
                }

                deferred.then(success, error);
                return deferred;
            },

            // This object describes how to make an ajax request for each ajax method.  
            // The available properties are:
            //		`url` - The default url to use as indicated as a property on the model.
            //		`type` - The default http request type
            //		`data` - A method that takes the `arguments` and returns `data` used for ajax.

            ajaxMethods = {

                create: {
                    url: "_shortName",
                    type: "post"
                },

                update: {
                    data: function(id, attrs) {
                        attrs = attrs || {};
                        var identity = this.id;
                        if (attrs[identity] && attrs[identity] !== id) {
                            attrs["new" + can.capitalize(id)] = attrs[identity];
                            delete attrs[identity];
                        }
                        attrs[identity] = id;
                        return attrs;
                    },
                    type: "put"
                },

                destroy: {
                    type: "delete",
                    data: function(id) {
                        var args = {};
                        args.id = args[this.id] = id;
                        return args;
                    }
                },

                findAll: {
                    url: "_shortName"
                },

                findOne: {}
            },
            // Makes an ajax request `function` from a string.
            //		`ajaxMethod` - The `ajaxMethod` object defined above.
            //		`str` - The string the user provided. Ex: `findAll: "/recipes.json"`.
            ajaxMaker = function(ajaxMethod, str) {
                // Return a `function` that serves as the ajax method.
                return function(data) {
                    // If the ajax method has it's own way of getting `data`, use that.
                    data = ajaxMethod.data ?
                        ajaxMethod.data.apply(this, arguments) :
                    // Otherwise use the data passed in.
                    data;
                    // Return the ajax method with `data` and the `type` provided.
                    return ajax(str || this[ajaxMethod.url || "_url"], data, ajaxMethod.type || "get")
                }
            }



        can.Model = can.Observe({
                fullName: "can.Model",
                _reqs: 0,
                setup: function(base) {
                    // create store here if someone wants to use model without inheriting from it
                    this.store = {};
                    can.Observe.setup.apply(this, arguments);
                    // Set default list as model list
                    if (!can.Model) {
                        return;
                    }
                    this.List = ML({
                            Observe: this
                        }, {});
                    var self = this,
                        clean = can.proxy(this._clean, self);


                    // go through ajax methods and set them up
                    can.each(ajaxMethods, function(method, name) {
                        // if an ajax method is not a function, it's either
                        // a string url like findAll: "/recipes" or an
                        // ajax options object like {url: "/recipes"}
                        if (!can.isFunction(self[name])) {
                            // use ajaxMaker to convert that into a function
                            // that returns a deferred with the data
                            self[name] = ajaxMaker(method, self[name]);
                        }
                        // check if there's a make function like makeFindAll
                        // these take deferred function and can do special
                        // behavior with it (like look up data in a store)
                        if (self["make" + can.capitalize(name)]) {
                            // pass the deferred method to the make method to get back
                            // the "findAll" method.
                            var newMethod = self["make" + can.capitalize(name)](self[name]);
                            can.Construct._overwrite(self, base, name, function() {
                                // increment the numer of requests
                                can.Model._reqs++;
                                var def = newMethod.apply(this, arguments);
                                var then = def.then(clean, clean);
                                then.abort = def.abort;

                                // attach abort to our then and return it
                                return then;
                            })
                        }
                    });

                    if (self.fullName == "can.Model" || !self.fullName) {
                        self.fullName = "Model" + (++modelNum);
                    }
                    // Add ajax converters.
                    can.Model._reqs = 0;
                    this._url = this._shortName + "/{" + this.id + "}"
                },
                _ajax: ajaxMaker,
                _makeRequest: makeRequest,
                _clean: function() {
                    can.Model._reqs--;
                    if (!can.Model._reqs) {
                        for (var id in this.store) {
                            if (!this.store[id]._bindings) {
                                delete this.store[id];
                            }
                        }
                    }
                    return arguments[0];
                },

                models: function(instancesRawData, oldList) {
                    // until "end of turn", increment reqs counter so instances will be added to the store
                    can.Model._reqs++;
                    if (!instancesRawData) {
                        return;
                    }

                    if (instancesRawData instanceof this.List) {
                        return instancesRawData;
                    }

                    // Get the list type.
                    var self = this,
                        tmp = [],
                        res = oldList instanceof can.Observe.List ? oldList : new(self.List || ML),
                        // Did we get an `array`?
                        arr = can.isArray(instancesRawData),

                        // Did we get a model list?
                        ml = (instancesRawData instanceof ML),

                        // Get the raw `array` of objects.
                        raw = arr ?

                        // If an `array`, return the `array`.
                        instancesRawData :

                        // Otherwise if a model list.
                        (ml ?

                            // Get the raw objects from the list.
                            instancesRawData.serialize() :

                            // Get the object's data.
                            instancesRawData.data),
                        i = 0;



                    if (res.length) {
                        res.splice(0);
                    }

                    can.each(raw, function(rawPart) {
                        tmp.push(self.model(rawPart));
                    });

                    // We only want one change event so push everything at once
                    res.push.apply(res, tmp);

                    if (!arr) { // Push other stuff onto `array`.
                        can.each(instancesRawData, function(val, prop) {
                            if (prop !== 'data') {
                                res.attr(prop, val);
                            }
                        })
                    }
                    // at "end of turn", clean up the store
                    setTimeout(can.proxy(this._clean, this), 1);
                    return res;
                },

                model: function(attributes) {
                    if (!attributes) {
                        return;
                    }
                    if (attributes instanceof this) {
                        attributes = attributes.serialize();
                    }
                    var id = attributes[this.id],
                        model = (id || id === 0) && this.store[id] ?
                            this.store[id].attr(attributes, this.removeAttr || false) : new this(attributes);
                    if (can.Model._reqs) {
                        this.store[attributes[this.id]] = model;
                    }
                    return model;
                }
            },


            {

                isNew: function() {
                    var id = getId(this);
                    return !(id || id === 0); // If `null` or `undefined`
                },

                save: function(success, error) {
                    return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
                },

                destroy: function(success, error) {
                    if (this.isNew()) {
                        var self = this;
                        var def = can.Deferred();
                        def.then(success, error);
                        return def.done(function(data) {
                            self.destroyed(data)
                        }).resolve(self);
                    }
                    return makeRequest(this, 'destroy', success, error, 'destroyed');
                },

                _bindsetup: function() {
                    this.constructor.store[this.__get(this.constructor.id)] = this;
                    return can.Observe.prototype._bindsetup.apply(this, arguments);
                },

                _bindteardown: function() {
                    delete this.constructor.store[getId(this)];
                    return can.Observe.prototype._bindteardown.apply(this, arguments)
                },
                // Change `id`.
                ___set: function(prop, val) {
                    can.Observe.prototype.___set.call(this, prop, val)
                    // If we add an `id`, move it to the store.
                    if (prop === this.constructor.id && this._bindings) {
                        this.constructor.store[getId(this)] = this;
                    }
                }
            });

        can.each({
                makeFindAll: "models",
                makeFindOne: "model",
                makeCreate: "model",
                makeUpdate: "model"
            }, function(method, name) {
                can.Model[name] = function(oldMethod) {
                    return function() {
                        var args = can.makeArray(arguments),
                            oldArgs = can.isFunction(args[1]) ? args.splice(0, 1) : args.splice(0, 2),
                            def = pipe(oldMethod.apply(this, oldArgs), this, method);
                        def.then(args[0], args[1]);
                        // return the original promise
                        return def;
                    };
                };
            });

        can.each([

                "created",

                "updated",

                "destroyed"
            ], function(funcName) {
                can.Model.prototype[funcName] = function(attrs) {
                    var stub,
                        constructor = this.constructor;

                    // Update attributes if attributes have been passed
                    stub = attrs && typeof attrs == 'object' && this.attr(attrs.attr ? attrs.attr() : attrs);

                    // triggers change event that bubble's like
                    // handler( 'change','1.destroyed' ). This is used
                    // to remove items on destroyed from Model Lists.
                    // but there should be a better way.
                    can.trigger(this, "change", funcName)


                    // Call event on the instance's Class
                    can.trigger(constructor, funcName, this);
                };
            });

        // Model lists are just like `Observe.List` except that when their items are 
        // destroyed, it automatically gets removed from the list.

        var ML = can.Model.List = can.Observe.List({
                setup: function(params) {
                    if (can.isPlainObject(params) && !can.isArray(params)) {
                        can.Observe.List.prototype.setup.apply(this);
                        this.replace(this.constructor.Observe.findAll(params))
                    } else {
                        can.Observe.List.prototype.setup.apply(this, arguments);
                    }
                },
                _changes: function(ev, attr) {
                    can.Observe.List.prototype._changes.apply(this, arguments);
                    if (/\w+\.destroyed/.test(attr)) {
                        var index = this.indexOf(ev.target);
                        if (index != -1) {
                            this.splice(index, 1);
                        }
                    }
                }
            })

        return can.Model;
    })(__m3, __m7);

    // ## can/view/view.js
    var __m11 = (function(can) {
        // ## view.js
        // `can.view`  
        // _Templating abstraction._

        var isFunction = can.isFunction,
            makeArray = can.makeArray,
            // Used for hookup `id`s.
            hookupId = 1,

            $view = can.view = can.template = function(view, data, helpers, callback) {
                // If helpers is a `function`, it is actually a callback.
                if (isFunction(helpers)) {
                    callback = helpers;
                    helpers = undefined;
                }

                var pipe = function(result) {
                    return $view.frag(result);
                },
                    // In case we got a callback, we need to convert the can.view.render
                    // result to a document fragment
                    wrapCallback = isFunction(callback) ? function(frag) {
                        callback(pipe(frag));
                    } : null,
                    // Get the result.
                    result = $view.render(view, data, helpers, wrapCallback),
                    deferred = can.Deferred();

                if (isFunction(result)) {
                    return result;
                }

                if (can.isDeferred(result)) {
                    result.then(function(result, data) {
                        deferred.resolve.call(deferred, pipe(result), data);
                    }, function() {
                        deferred.fail.apply(deferred, arguments);
                    });
                    return deferred;
                }

                // Convert it into a dom frag.
                return pipe(result);
            };

        can.extend($view, {
                // creates a frag and hooks it up all at once
                frag: function(result, parentNode) {
                    return $view.hookup($view.fragment(result), parentNode);
                },

                // simply creates a frag
                // this is used internally to create a frag
                // insert it
                // then hook it up
                fragment: function(result) {
                    var frag = can.buildFragment(result, document.body);
                    // If we have an empty frag...
                    if (!frag.childNodes.length) {
                        frag.appendChild(document.createTextNode(''));
                    }
                    return frag;
                },

                // Convert a path like string into something that's ok for an `element` ID.
                toId: function(src) {
                    return can.map(src.toString().split(/\/|\./g), function(part) {
                        // Dont include empty strings in toId functions
                        if (part) {
                            return part;
                        }
                    }).join("_");
                },

                hookup: function(fragment, parentNode) {
                    var hookupEls = [],
                        id,
                        func;

                    // Get all `childNodes`.
                    can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function(node) {
                        if (node.nodeType === 1) {
                            hookupEls.push(node);
                            hookupEls.push.apply(hookupEls, can.makeArray(node.getElementsByTagName('*')));
                        }
                    });

                    // Filter by `data-view-id` attribute.
                    can.each(hookupEls, function(el) {
                        if (el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id])) {
                            func(el, parentNode, id);
                            delete $view.hookups[id];
                            el.removeAttribute('data-view-id');
                        }
                    });

                    return fragment;
                },


                hookups: {},


                hook: function(cb) {
                    $view.hookups[++hookupId] = cb;
                    return " data-view-id='" + hookupId + "'";
                },


                cached: {},

                cachedRenderers: {},


                cache: true,


                register: function(info) {
                    this.types["." + info.suffix] = info;
                },

                types: {},


                ext: ".ejs",


                registerScript: function() {},


                preload: function() {},


                render: function(view, data, helpers, callback) {
                    // If helpers is a `function`, it is actually a callback.
                    if (isFunction(helpers)) {
                        callback = helpers;
                        helpers = undefined;
                    }

                    // See if we got passed any deferreds.
                    var deferreds = getDeferreds(data);

                    if (deferreds.length) { // Does data contain any deferreds?
                        // The deferred that resolves into the rendered content...
                        var deferred = new can.Deferred(),
                            dataCopy = can.extend({}, data);

                        // Add the view request to the list of deferreds.
                        deferreds.push(get(view, true))

                        // Wait for the view and all deferreds to finish...
                        can.when.apply(can, deferreds).then(function(resolved) {
                            // Get all the resolved deferreds.
                            var objs = makeArray(arguments),
                                // Renderer is the last index of the data.
                                renderer = objs.pop(),
                                // The result of the template rendering with data.
                                result;

                            // Make data look like the resolved deferreds.
                            if (can.isDeferred(data)) {
                                dataCopy = usefulPart(resolved);
                            } else {
                                // Go through each prop in data again and
                                // replace the defferreds with what they resolved to.
                                for (var prop in data) {
                                    if (can.isDeferred(data[prop])) {
                                        dataCopy[prop] = usefulPart(objs.shift());
                                    }
                                }
                            }

                            // Get the rendered result.
                            result = renderer(dataCopy, helpers);

                            // Resolve with the rendered view.
                            deferred.resolve(result, dataCopy);

                            // If there's a `callback`, call it back with the result.
                            callback && callback(result, dataCopy);
                        }, function() {
                            deferred.reject.apply(deferred, arguments)
                        });
                        // Return the deferred...
                        return deferred;
                    } else {
                        // No deferreds! Render this bad boy.
                        var response,
                            // If there's a `callback` function
                            async = isFunction(callback),
                            // Get the `view` type
                            deferred = get(view, async);

                        // If we are `async`...
                        if (async) {
                            // Return the deferred
                            response = deferred;
                            // And fire callback with the rendered result.
                            deferred.then(function(renderer) {
                                callback(data ? renderer(data, helpers) : renderer);
                            })
                        } else {
                            // if the deferred is resolved, call the cached renderer instead
                            // this is because it's possible, with recursive deferreds to
                            // need to render a view while its deferred is _resolving_.  A _resolving_ deferred
                            // is a deferred that was just resolved and is calling back it's success callbacks.
                            // If a new success handler is called while resoliving, it does not get fired by
                            // jQuery's deferred system.  So instead of adding a new callback
                            // we use the cached renderer.
                            // We also add __view_id on the deferred so we can look up it's cached renderer.
                            // In the future, we might simply store either a deferred or the cached result.
                            if (deferred.state() === "resolved" && deferred.__view_id) {
                                var currentRenderer = $view.cachedRenderers[deferred.__view_id];
                                return data ? currentRenderer(data, helpers) : currentRenderer;
                            } else {
                                // Otherwise, the deferred is complete, so
                                // set response to the result of the rendering.
                                deferred.then(function(renderer) {
                                    response = data ? renderer(data, helpers) : renderer;
                                });
                            }
                        }

                        return response;
                    }
                },


                registerView: function(id, text, type, def) {
                    // Get the renderer function.
                    var func = (type || $view.types[$view.ext]).renderer(id, text);
                    def = def || new can.Deferred();

                    // Cache if we are caching.
                    if ($view.cache) {
                        $view.cached[id] = def;
                        def.__view_id = id;
                        $view.cachedRenderers[id] = func;
                    }

                    // Return the objects for the response's `dataTypes`
                    // (in this case view).
                    return def.resolve(func);
                }
            });

        // Makes sure there's a template, if not, have `steal` provide a warning.
        var checkText = function(text, url) {
            if (!text.length) {

                throw "can.view: No template or empty template:" + url;
            }
        },
            // `Returns a `view` renderer deferred.  
            // `url` - The url to the template.  
            // `async` - If the ajax request should be asynchronous.  
            // Returns a deferred.
            get = function(url, async) {
                var suffix = url.match(/\.[\w\d]+$/),
                    type,
                    // If we are reading a script element for the content of the template,
                    // `el` will be set to that script element.
                    el,
                    // A unique identifier for the view (used for caching).
                    // This is typically derived from the element id or
                    // the url for the template.
                    id,
                    // The ajax request used to retrieve the template content.
                    jqXHR;

                //If the url has a #, we assume we want to use an inline template
                //from a script element and not current page's HTML
                if (url.match(/^#/)) {
                    url = url.substr(1);
                }
                // If we have an inline template, derive the suffix from the `text/???` part.
                // This only supports `<script>` tags.
                if (el = document.getElementById(url)) {
                    suffix = "." + el.type.match(/\/(x\-)?(.+)/)[2];
                }

                // If there is no suffix, add one.
                if (!suffix && !$view.cached[url]) {
                    url += (suffix = $view.ext);
                }

                if (can.isArray(suffix)) {
                    suffix = suffix[0]
                }

                // Convert to a unique and valid id.
                id = $view.toId(url);

                // If an absolute path, use `steal` to get it.
                // You should only be using `//` if you are using `steal`.
                if (url.match(/^\/\//)) {
                    var sub = url.substr(2);
                    url = !window.steal ?
                        sub :
                        steal.config().root.mapJoin("" + steal.id(sub));
                }

                // Set the template engine type.
                type = $view.types[suffix];

                // If it is cached, 
                if ($view.cached[id]) {
                    // Return the cached deferred renderer.
                    return $view.cached[id];

                    // Otherwise if we are getting this from a `<script>` element.
                } else if (el) {
                    // Resolve immediately with the element's `innerHTML`.
                    return $view.registerView(id, el.innerHTML, type);
                } else {
                    // Make an ajax request for text.
                    var d = new can.Deferred();
                    can.ajax({
                            async: async,
                            url: url,
                            dataType: "text",
                            error: function(jqXHR) {
                                checkText("", url);
                                d.reject(jqXHR);
                            },
                            success: function(text) {
                                // Make sure we got some text back.
                                checkText(text, url);
                                $view.registerView(id, text, type, d)
                            }
                        });
                    return d;
                }
            },
            // Gets an `array` of deferreds from an `object`.
            // This only goes one level deep.
            getDeferreds = function(data) {
                var deferreds = [];

                // pull out deferreds
                if (can.isDeferred(data)) {
                    return [data]
                } else {
                    for (var prop in data) {
                        if (can.isDeferred(data[prop])) {
                            deferreds.push(data[prop]);
                        }
                    }
                }
                return deferreds;
            },
            // Gets the useful part of a resolved deferred.
            // This is for `model`s and `can.ajax` that resolve to an `array`.
            usefulPart = function(resolved) {
                return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved
            };

        //!steal-pluginify-remove-start
        if (window.steal) {
            steal.type("view js", function(options, success, error) {
                var type = $view.types["." + options.type],
                    id = $view.toId(options.id);

                options.text = "steal('" + (type.plugin || "can/view/" + options.type) + "',function(can){return " + "can.view.preload('" + id + "'," + options.text + ");\n})";
                success();
            })
        }
        //!steal-pluginify-remove-end

        can.extend($view, {
                register: function(info) {
                    this.types["." + info.suffix] = info;

                    //!steal-pluginify-remove-start
                    if (window.steal) {
                        steal.type(info.suffix + " view js", function(options, success, error) {
                            var type = $view.types["." + options.type],
                                id = $view.toId(options.id + '');

                            options.text = type.script(id, options.text)
                            success();
                        })
                    };
                    //!steal-pluginify-remove-end

                    $view[info.suffix] = function(id, text) {
                        if (!text) {
                            // Return a nameless renderer
                            var renderer = function() {
                                return $view.frag(renderer.render.apply(this, arguments));
                            }
                            renderer.render = function() {
                                var renderer = info.renderer(null, id);
                                return renderer.apply(renderer, arguments);
                            }
                            return renderer;
                        }

                        $view.preload(id, info.renderer(id, text));
                        return can.view(id);
                    }
                },
                registerScript: function(type, id, src) {
                    return "can.view.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
                },
                preload: function(id, renderer) {
                    $view.cached[id] = new can.Deferred().resolve(function(data, helpers) {
                        return renderer.call(data, data, helpers);
                    });

                    function frag() {
                        return $view.frag(renderer.apply(this, arguments));
                    }
                    // expose the renderer for mustache
                    frag.render = renderer;
                    return frag;
                }

            });

        return can;
    })(__m3);

    // ## can/view/elements.js
    var __m14 = (function() {

        var elements = {
            tagToContentPropMap: {
                option: "textContent" in document.createElement("option") ? "textContent" : "innerText",
                textarea: "value"
            },

            attrMap: {
                "class": "className",
                "value": "value",
                "innerText": "innerText",
                "textContent": "textContent",
                "checked": true,
                "disabled": true,
                "readonly": true,
                "required": true
            },
            // elements whos default value we should set
            defaultValue: ["input", "textarea"],
            // a map of parent element to child elements
            tagMap: {
                "": "span",
                table: "tbody",
                tr: "td",
                ol: "li",
                ul: "li",
                tbody: "tr",
                thead: "tr",
                tfoot: "tr",
                select: "option",
                optgroup: "option"
            },
            // a tag's parent element
            reverseTagMap: {
                tr: "tbody",
                option: "select",
                td: "tr",
                th: "tr",
                li: "ul"
            },

            getParentNode: function(el, defaultParentNode) {
                return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
            },
            // set an attribute on an element
            setAttr: function(el, attrName, val) {
                var tagName = el.nodeName.toString().toLowerCase(),
                    prop = elements.attrMap[attrName];
                // if this is a special property
                if (prop === true) {
                    el[attrName] = true;
                } else if (prop) {
                    // set the value as true / false
                    el[prop] = val;
                    if (prop === "value" && can.inArray(tagName, elements.defaultValue) >= 0) {
                        el.defaultValue = val;
                    }
                } else {
                    el.setAttribute(attrName, val);
                }
            },
            // gets the value of an attribute
            getAttr: function(el, attrName) {
                // Default to a blank string for IE7/8
                return (elements.attrMap[attrName] && el[elements.attrMap[attrName]] ?
                    el[elements.attrMap[attrName]] :
                    el.getAttribute(attrName)) || '';
            },
            // removes the attribute
            removeAttr: function(el, attrName) {
                if (elements.attrMap[attrName] === true) {
                    el[attrName] = false;
                } else {
                    el.removeAttribute(attrName);
                }
            },
            contentText: function(text) {
                if (typeof text == 'string') {
                    return text;
                }
                // If has no value, return an empty string.
                if (!text && text !== 0) {
                    return '';
                }
                return "" + text;
            }
        };

        return elements;
    })();

    // ## can/view/scanner.js
    var __m13 = (function(can, elements) {

        var newLine = /(\r|\n)+/g,
            // Escapes characters starting with `\`.
            clean = function(content) {
                return content
                    .split('\\').join("\\\\")
                    .split("\n").join("\\n")
                    .split('"').join('\\"')
                    .split("\t").join("\\t");
            },
            // Returns a tagName to use as a temporary placeholder for live content
            // looks forward ... could be slow, but we only do it when necessary
            getTag = function(tagName, tokens, i) {
                // if a tagName is provided, use that
                if (tagName) {
                    return tagName;
                } else {
                    // otherwise go searching for the next two tokens like "<",TAG
                    while (i < tokens.length) {
                        if (tokens[i] == "<" && elements.reverseTagMap[tokens[i + 1]]) {
                            return elements.reverseTagMap[tokens[i + 1]];
                        }
                        i++;
                    }
                }
                return '';
            },
            bracketNum = function(content) {
                return (--content.split("{").length) - (--content.split("}").length);
            },
            myEval = function(script) {
                eval(script);
            },
            attrReg = /([^\s]+)[\s]*=[\s]*$/,
            // Commands for caching.
            startTxt = 'var ___v1ew = [];',
            finishTxt = "return ___v1ew.join('')",
            put_cmd = "___v1ew.push(",
            insert_cmd = put_cmd,
            // Global controls (used by other functions to know where we are).
            // Are we inside a tag?
            htmlTag = null,
            // Are we within a quote within a tag?
            quote = null,
            // What was the text before the current quote? (used to get the `attr` name)
            beforeQuote = null,
            // Whether a rescan is in progress
            rescan = null,
            // Used to mark where the element is.
            status = function() {
                // `t` - `1`.
                // `h` - `0`.
                // `q` - String `beforeQuote`.
                return quote ? "'" + beforeQuote.match(attrReg)[1] + "'" : (htmlTag ? 1 : 0);
            };

        can.view.Scanner = Scanner = function(options) {
            // Set options on self
            can.extend(this, {
                    text: {},
                    tokens: []
                }, options);

            // Cache a token lookup
            this.tokenReg = [];
            this.tokenSimple = {
                "<": "<",
                ">": ">",
                '"': '"',
                "'": "'"
            };
            this.tokenComplex = [];
            this.tokenMap = {};
            for (var i = 0, token; token = this.tokens[i]; i++) {


                // Save complex mappings (custom regexp)
                if (token[2]) {
                    this.tokenReg.push(token[2]);
                    this.tokenComplex.push({
                            abbr: token[1],
                            re: new RegExp(token[2]),
                            rescan: token[3]
                        });
                }
                // Save simple mappings (string only, no regexp)
                else {
                    this.tokenReg.push(token[1]);
                    this.tokenSimple[token[1]] = token[0];
                }
                this.tokenMap[token[0]] = token[1];
            }

            // Cache the token registry.
            this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")", "g");
        };

        Scanner.prototype = {

            helpers: [

                {
                    name: /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                    fn: function(content) {
                        var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
                            parts = content.match(quickFunc);

                        return "can.proxy(function(__){var " + parts[1] + "=can.$(__);" + parts[2] + "}, this);";
                    }
                }
            ],

            scan: function(source, name) {
                var tokens = [],
                    last = 0,
                    simple = this.tokenSimple,
                    complex = this.tokenComplex;

                source = source.replace(newLine, "\n");
                if (this.transform) {
                    source = this.transform(source);
                }
                source.replace(this.tokenReg, function(whole, part) {
                    // offset is the second to last argument
                    var offset = arguments[arguments.length - 2];

                    // if the next token starts after the last token ends
                    // push what's in between
                    if (offset > last) {
                        tokens.push(source.substring(last, offset));
                    }

                    // push the simple token (if there is one)
                    if (simple[whole]) {
                        tokens.push(whole);
                    }
                    // otherwise lookup complex tokens
                    else {
                        for (var i = 0, token; token = complex[i]; i++) {
                            if (token.re.test(whole)) {
                                tokens.push(token.abbr);
                                // Push a rescan function if one exists
                                if (token.rescan) {
                                    tokens.push(token.rescan(part));
                                }
                                break;
                            }
                        }
                    }

                    // update the position of the last part of the last token
                    last = offset + part.length;
                });

                // if there's something at the end, add it
                if (last < source.length) {
                    tokens.push(source.substr(last));
                }

                var content = '',
                    buff = [startTxt + (this.text.start || '')],
                    // Helper `function` for putting stuff in the view concat.
                    put = function(content, bonus) {
                        buff.push(put_cmd, '"', clean(content), '"' + (bonus || '') + ');');
                    },
                    // A stack used to keep track of how we should end a bracket
                    // `}`.  
                    // Once we have a `<%= %>` with a `leftBracket`,
                    // we store how the file should end here (either `))` or `;`).
                    endStack = [],
                    // The last token, used to remember which tag we are in.
                    lastToken,
                    // The corresponding magic tag.
                    startTag = null,
                    // Was there a magic tag inside an html tag?
                    magicInTag = false,
                    // The current tag name.
                    tagName = '',
                    // stack of tagNames
                    tagNames = [],
                    // Pop from tagNames?
                    popTagName = false,
                    // Declared here.
                    bracketCount,
                    i = 0,
                    token,
                    tmap = this.tokenMap;

                // Reinitialize the tag state goodness.
                htmlTag = quote = beforeQuote = null;

                for (;
                    (token = tokens[i++]) !== undefined;) {
                    if (startTag === null) {
                        switch (token) {
                            case tmap.left:
                            case tmap.escapeLeft:
                            case tmap.returnLeft:
                                magicInTag = htmlTag && 1;
                            case tmap.commentLeft:
                                // A new line -- just add whatever content within a clean.  
                                // Reset everything.
                                startTag = token;
                                if (content.length) {
                                    put(content);
                                }
                                content = '';
                                break;
                            case tmap.escapeFull:
                                // This is a full line escape (a line that contains only whitespace and escaped logic)
                                // Break it up into escape left and right
                                magicInTag = htmlTag && 1;
                                rescan = 1;
                                startTag = tmap.escapeLeft;
                                if (content.length) {
                                    put(content);
                                }
                                rescan = tokens[i++];
                                content = rescan.content || rescan;
                                if (rescan.before) {
                                    put(rescan.before);
                                }
                                tokens.splice(i, 0, tmap.right);
                                break;
                            case tmap.commentFull:
                                // Ignore full line comments.
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            case '<':
                                // Make sure we are not in a comment.
                                if (tokens[i].indexOf("!--") !== 0) {
                                    htmlTag = 1;
                                    magicInTag = 0;
                                }
                                content += token;
                                break;
                            case '>':
                                htmlTag = 0;
                                // content.substr(-1) doesn't work in IE7/8
                                var emptyElement = content.substr(content.length - 1) == "/" || content.substr(content.length - 2) == "--";
                                // if there was a magic tag
                                // or it's an element that has text content between its tags, 
                                // but content is not other tags add a hookup
                                // TODO: we should only add `can.EJS.pending()` if there's a magic tag 
                                // within the html tags.
                                if (magicInTag || !popTagName && elements.tagToContentPropMap[tagNames[tagNames.length - 1]]) {
                                    // make sure / of /> is on the left of pending
                                    if (emptyElement) {
                                        put(content.substr(0, content.length - 1), ",can.view.pending(),\"/>\"");
                                    } else {
                                        put(content, ",can.view.pending(),\">\"");
                                    }
                                    content = '';
                                    magicInTag = 0;
                                } else {
                                    content += token;
                                }
                                // if it's a tag like <input/>
                                if (emptyElement || popTagName) {
                                    // remove the current tag in the stack
                                    tagNames.pop();
                                    // set the current tag to the previous parent
                                    tagName = tagNames[tagNames.length - 1];
                                    // Don't pop next time
                                    popTagName = false;
                                }
                                break;
                            case "'":
                            case '"':
                                // If we are in an html tag, finding matching quotes.
                                if (htmlTag) {
                                    // We have a quote and it matches.
                                    if (quote && quote === token) {
                                        // We are exiting the quote.
                                        quote = null;
                                        // Otherwise we are creating a quote.
                                        // TODO: does this handle `\`?
                                    } else if (quote === null) {
                                        quote = token;
                                        beforeQuote = lastToken;
                                    }
                                }
                            default:
                                // Track the current tag
                                if (lastToken === '<') {
                                    tagName = token.split(/\s/)[0];
                                    if (tagName.indexOf("/") === 0 && tagNames[tagNames.length - 1] === tagName.substr(1)) {
                                        // set tagName to the last tagName
                                        // if there are no more tagNames, we'll rely on getTag.
                                        tagName = tagNames[tagNames.length - 1];
                                        popTagName = true;
                                    } else {
                                        tagNames.push(tagName);
                                    }
                                }
                                content += token;
                                break;
                        }
                    } else {
                        // We have a start tag.
                        switch (token) {
                            case tmap.right:
                            case tmap.returnRight:
                                switch (startTag) {
                                    case tmap.left:
                                        // Get the number of `{ minus }`
                                        bracketCount = bracketNum(content);

                                        // We are ending a block.
                                        if (bracketCount == 1) {

                                            // We are starting on.
                                            buff.push(insert_cmd, "can.view.txt(0,'" + getTag(tagName, tokens, i) + "'," + status() + ",this,function(){", startTxt, content);

                                            endStack.push({
                                                    before: "",
                                                    after: finishTxt + "}));\n"
                                                });
                                        } else {

                                            // How are we ending this statement?
                                            last = // If the stack has value and we are ending a block...
                                            endStack.length && bracketCount == -1 ? // Use the last item in the block stack.
                                            endStack.pop() : // Or use the default ending.
                                            {
                                                after: ";"
                                            };

                                            // If we are ending a returning block, 
                                            // add the finish text which returns the result of the
                                            // block.
                                            if (last.before) {
                                                buff.push(last.before);
                                            }
                                            // Add the remaining content.
                                            buff.push(content, ";", last.after);
                                        }
                                        break;
                                    case tmap.escapeLeft:
                                    case tmap.returnLeft:
                                        // We have an extra `{` -> `block`.
                                        // Get the number of `{ minus }`.
                                        bracketCount = bracketNum(content);
                                        // If we have more `{`, it means there is a block.
                                        if (bracketCount) {
                                            // When we return to the same # of `{` vs `}` end with a `doubleParent`.
                                            endStack.push({
                                                    before: finishTxt,
                                                    after: "}));"
                                                });
                                        }

                                        var escaped = startTag === tmap.escapeLeft ? 1 : 0,
                                            commands = {
                                                insert: insert_cmd,
                                                tagName: getTag(tagName, tokens, i),
                                                status: status()
                                            };

                                        for (var ii = 0; ii < this.helpers.length; ii++) {
                                            // Match the helper based on helper
                                            // regex name value
                                            var helper = this.helpers[ii];
                                            if (helper.name.test(content)) {
                                                content = helper.fn(content, commands);

                                                // dont escape partials
                                                if (helper.name.source == /^>[\s]*\w*/.source) {
                                                    escaped = 0;
                                                }
                                                break;
                                            }
                                        }

                                        // Handle special cases
                                        if (typeof content == 'object') {
                                            if (content.raw) {
                                                buff.push(content.raw);
                                            }
                                        } else {
                                            // If we have `<%== a(function(){ %>` then we want
                                            // `can.EJS.text(0,this, function(){ return a(function(){ var _v1ew = [];`.
                                            buff.push(insert_cmd, "can.view.txt(" + escaped + ",'" + tagName + "'," + status() + ",this,function(){ " + (this.text.escape || '') + "return ", content,
                                                // If we have a block.
                                                bracketCount ?
                                                // Start with startTxt `"var _v1ew = [];"`.
                                                startTxt :
                                                // If not, add `doubleParent` to close push and text.
                                                "}));");
                                        }

                                        if (rescan && rescan.after && rescan.after.length) {
                                            put(rescan.after.length);
                                            rescan = null;
                                        }
                                        break;
                                }
                                startTag = null;
                                content = '';
                                break;
                            case tmap.templateLeft:
                                content += tmap.left;
                                break;
                            default:
                                content += token;
                                break;
                        }
                    }
                    lastToken = token;
                }

                // Put it together...
                if (content.length) {
                    // Should be `content.dump` in Ruby.
                    put(content);
                }
                buff.push(";");

                var template = buff.join(''),
                    out = {
                        out: 'with(_VIEW) { with (_CONTEXT) {' + template + " " + finishTxt + "}}"
                    };
                // Use `eval` instead of creating a function, because it is easier to debug.
                myEval.call(out, 'this.fn = (function(_CONTEXT,_VIEW){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");

                return out;
            }
        };

        return Scanner;
    })(__m11, __m14);

    // ## can/view/node_lists.js
    var __m17 = (function(can) {

        // text node expando test
        var canExpando = true;
        try {
            document.createTextNode('')._ = 0;
        } catch (ex) {
            canExpando = false;
        }

        // a mapping of element ids to nodeList ids
        var nodeMap = {},
            // a mapping of ids to text nodes
            textNodeMap = {},
            // a mapping of nodeList ids to nodeList
            nodeListMap = {},
            expando = "ejs_" + Math.random(),
            _id = 0,
            id = function(node) {
                if (canExpando || node.nodeType !== 3) {
                    if (node[expando]) {
                        return node[expando];
                    } else {
                        return node[expando] = (node.nodeName ? "element_" : "obj_") + (++_id);
                    }
                } else {
                    for (var textNodeID in textNodeMap) {
                        if (textNodeMap[textNodeID] === node) {
                            return textNodeID;
                        }
                    }

                    textNodeMap["text_" + (++_id)] = node;
                    return "text_" + _id;
                }
            },
            // removes a nodeListId from a node's nodeListIds
            removeNodeListId = function(node, nodeListId) {
                var nodeListIds = nodeMap[id(node)];
                if (nodeListIds) {
                    var index = can.inArray(nodeListId, nodeListIds);

                    if (index >= 0) {
                        nodeListIds.splice(index, 1);
                    }
                    if (!nodeListIds.length) {
                        delete nodeMap[id(node)];
                    }
                }
            },
            addNodeListId = function(node, nodeListId) {
                var nodeListIds = nodeMap[id(node)];
                if (!nodeListIds) {
                    nodeListIds = nodeMap[id(node)] = [];
                }
                nodeListIds.push(nodeListId);
            };

        var nodeLists = {
            id: id,
            // replaces the contents of one node list with the nodes in another list
            replace: function(oldNodeList, newNodes) {
                // for each node in the node list
                oldNodeList = can.makeArray(oldNodeList);

                // try every set
                //can.each( oldNodeList, function(node){
                var node = oldNodeList[0]
                // for each nodeList the node is in
                can.each(can.makeArray(nodeMap[id(node)]), function(nodeListId) {

                    // if startNode to endNode is 
                    // within list, replace that list
                    // I think the problem is not the WHOLE part is being 
                    // matched
                    var nodeList = nodeListMap[nodeListId],
                        startIndex = can.inArray(node, nodeList),
                        endIndex = can.inArray(oldNodeList[oldNodeList.length - 1], nodeList);


                    // remove this nodeListId from each node
                    if (startIndex >= 0 && endIndex >= 0) {
                        for (var i = startIndex; i <= endIndex; i++) {
                            var n = nodeList[i];
                            removeNodeListId(n, nodeListId);
                        }
                        // swap in new nodes into the nodeLIst
                        nodeList.splice.apply(nodeList, [startIndex, endIndex - startIndex + 1].concat(newNodes));

                        // tell these new nodes they belong to the nodeList
                        can.each(newNodes, function(node) {
                            addNodeListId(node, nodeListId);
                        });
                    } else {
                        nodeLists.unregister(nodeList);
                    }
                });
                //});
            },
            // registers a list of nodes
            register: function(nodeList) {
                var nLId = id(nodeList);
                nodeListMap[nLId] = nodeList;

                can.each(nodeList, function(node) {
                    addNodeListId(node, nLId);
                });

            },
            // removes mappings
            unregister: function(nodeList) {
                var nLId = id(nodeList);
                can.each(nodeList, function(node) {
                    removeNodeListId(node, nLId);
                });
                delete nodeListMap[nLId];
            },
            nodeMap: nodeMap,
            nodeListMap: nodeListMap
        }
        var ids = function(nodeList) {
            return nodeList.map(function(n) {
                return id(n) + ":" + (n.innerHTML || n.nodeValue)
            })
        }
        return nodeLists;

    })(__m3);

    // ## can/view/live.js
    var __m16 = (function(can, elements, view, nodeLists) {
        // ## live.js
        // The live module provides live binding for computes
        // and can.Observe.List.
        // Currently, it's API is designed for `can/view/render`, but
        // it could easily be used for other purposes.

        // ### Helper methods
        // #### setup
        // `setup(HTMLElement, bind(data), unbind(data)) -> data`
        // Calls bind right away, but will call unbind
        // if the element is "destroyed" (removed from the DOM).
        var setup = function(el, bind, unbind) {
            var teardown = function() {
                unbind(data)
                can.unbind.call(el, 'destroyed', teardown);
            },
                data = {
                    teardownCheck: function(parent) {
                        if (!parent) {
                            teardown();
                        }
                    }
                }

            can.bind.call(el, 'destroyed', teardown);
            bind(data)
            return data;
        },
            // #### listen
            // Calls setup, but presets bind and unbind to 
            // operate on a compute
            listen = function(el, compute, change) {
                return setup(el, function() {
                    compute.bind("change", change);
                }, function(data) {
                    compute.unbind("change", change);
                    if (data.nodeList) {
                        nodeLists.unregister(data.nodeList);
                    }
                });
            },
            // #### getAttributeParts
            // Breaks up a string like foo='bar' into ["foo","'bar'""]
            getAttributeParts = function(newVal) {
                return (newVal || "").replace(/['"]/g, '').split('=')
            }
            // #### insertElementsAfter
            // Appends elements after the last item in oldElements.
        insertElementsAfter = function(oldElements, newFrag) {
            var last = oldElements[oldElements.length - 1];

            // Insert it in the `document` or `documentFragment`
            if (last.nextSibling) {
                last.parentNode.insertBefore(newFrag, last.nextSibling);
            } else {
                last.parentNode.appendChild(newFrag);
            }
        };

        var live = {
            nodeLists: nodeLists,
            list: function(el, list, func, context, parentNode) {
                // A mapping of the index to an array
                // of elements that represent the item.
                // Each array is registered so child or parent
                // live structures can update the elements
                var nodesMap = [],

                    add = function(ev, items, index) {

                        // Collect new html and mappings
                        var frag = document.createDocumentFragment(),
                            newMappings = [];
                        can.each(items, function(item) {
                            var itemHTML = func.call(context, item),
                                itemFrag = can.view.frag(itemHTML, parentNode);

                            newMappings.push(can.makeArray(itemFrag.childNodes));
                            frag.appendChild(itemFrag);
                        })

                        // Inserting at the end of the list
                        if (!nodesMap[index]) {
                            insertElementsAfter(
                                index == 0 ? [text] :
                                nodesMap[index - 1], frag)
                        } else {
                            var el = nodesMap[index][0];
                            el.parentNode.insertBefore(frag, el)
                        }
                        // register each item
                        can.each(newMappings, function(nodeList) {
                            nodeLists.register(nodeList)
                        });
                        [].splice.apply(nodesMap, [index, 0].concat(newMappings));
                    },
                    remove = function(ev, items, index) {
                        var removedMappings = nodesMap.splice(index, items.length),
                            itemsToRemove = [];

                        can.each(removedMappings, function(nodeList) {
                            // add items that we will remove all at once
                            [].push.apply(itemsToRemove, nodeList)
                            // Update any parent lists to remove these items
                            nodeLists.replace(nodeList, []);
                            // unregister the list
                            nodeLists.unregister(nodeList);

                        });
                        can.remove(can.$(itemsToRemove));
                    },
                    parentNode = elements.getParentNode(el, parentNode),
                    text = document.createTextNode("");

                // Setup binding and teardown to add and remove events
                setup(parentNode, function() {
                    list.bind("add", add).bind("remove", remove)
                }, function() {
                    list.unbind("add", add).unbind("remove", remove);
                    can.each(nodesMap, function(nodeList) {
                        nodeLists.unregister(nodeList);
                    })
                })

                insertElementsAfter([el], text);
                can.remove(can.$(el));
                add({}, list, 0);

            },
            html: function(el, compute, parentNode) {
                var parentNode = elements.getParentNode(el, parentNode),

                    data = listen(parentNode, compute, function(ev, newVal, oldVal) {
                        var attached = nodes[0].parentNode;
                        // update the nodes in the DOM with the new rendered value
                        if (attached) {
                            makeAndPut(newVal);
                        }
                        data.teardownCheck(nodes[0].parentNode);
                    });

                var nodes,
                    makeAndPut = function(val) {
                        // create the fragment, but don't hook it up
                        // we need to insert it into the document first
                        var frag = can.view.frag(val, parentNode),
                            // keep a reference to each node
                            newNodes = can.makeArray(frag.childNodes);
                        // Insert it in the `document` or `documentFragment`
                        insertElementsAfter(nodes || [el], frag)
                        // nodes hasn't been set yet
                        if (!nodes) {
                            can.remove(can.$(el));
                            nodes = newNodes;
                            // set the teardown nodeList
                            data.nodeList = nodes;
                            nodeLists.register(nodes);
                        } else {
                            // Update node Array's to point to new nodes
                            // and then remove the old nodes.
                            // It has to be in this order for Mootools
                            // and IE because somehow, after an element
                            // is removed from the DOM, it loses its
                            // expando values.
                            var nodesToRemove = can.makeArray(nodes);
                            nodeLists.replace(nodes, newNodes);
                            can.remove(can.$(nodesToRemove));
                        }
                    };
                makeAndPut(compute(), [el]);

            },
            text: function(el, compute, parentNode) {
                var parent = elements.getParentNode(el, parentNode);

                // setup listening right away so we don't have to re-calculate value
                var data = listen(el.parentNode !== parent ? el.parentNode : parent, compute, function(ev, newVal, oldVal) {
                    // Sometimes this is 'unknown' in IE and will throw an exception if it is
                    if (typeof node.nodeValue != 'unknown') {
                        node.nodeValue = "" + newVal;
                    }
                    data.teardownCheck(node.parentNode);
                });

                var node = document.createTextNode(compute());

                if (el.parentNode !== parent) {
                    parent = el.parentNode;
                    parent.insertBefore(node, el);
                    parent.removeChild(el);
                } else {
                    parent.insertBefore(node, el);
                    parent.removeChild(el);
                }
            },
            attributes: function(el, compute, currentValue) {
                var setAttrs = function(newVal) {
                    var parts = getAttributeParts(newVal),
                        newAttrName = parts.shift();

                    // Remove if we have a change and used to have an `attrName`.
                    if ((newAttrName != attrName) && attrName) {
                        elements.removeAttr(el, attrName);
                    }
                    // Set if we have a new `attrName`.
                    if (newAttrName) {
                        elements.setAttr(el, newAttrName, parts.join('='));
                        attrName = newAttrName;
                    }
                }

                listen(el, compute, function(ev, newVal) {
                    setAttrs(newVal)
                })
                // current value has been set
                if (arguments.length >= 3) {
                    var attrName = getAttributeParts(currentValue)[0]
                } else {
                    setAttrs(compute())
                }
            },
            attributePlaceholder: '__!!__',
            attributeReplace: /__!!__/g,
            attribute: function(el, attributeName, compute) {
                listen(el, compute, function(ev, newVal) {
                    elements.setAttr(el, attributeName, hook.render());
                })

                var wrapped = can.$(el),
                    hooks;

                // Get the list of hookups or create one for this element.
                // Hooks is a map of attribute names to hookup `data`s.
                // Each hookup data has:
                // `render` - A `function` to render the value of the attribute.
                // `funcs` - A list of hookup `function`s on that attribute.
                // `batchNum` - The last event `batchNum`, used for performance.
                hooks = can.data(wrapped, 'hooks');
                if (!hooks) {
                    can.data(wrapped, 'hooks', hooks = {});
                }

                // Get the attribute value.
                var attr = elements.getAttr(el, attributeName),
                    // Split the attribute value by the template.
                    // Only split out the first __!!__ so if we have multiple hookups in the same attribute, 
                    // they will be put in the right spot on first render
                    parts = attr.split(live.attributePlaceholder),
                    goodParts = [],
                    hook;
                goodParts.push(parts.shift(),
                    parts.join(live.attributePlaceholder));

                // If we already had a hookup for this attribute...
                if (hooks[attributeName]) {
                    // Just add to that attribute's list of `function`s.
                    hooks[attributeName].computes.push(compute);
                } else {
                    // Create the hookup data.
                    hooks[attributeName] = {
                        render: function() {
                            var i = 0,
                                // attr doesn't have a value in IE
                                newAttr = attr ? attr.replace(live.attributeReplace, function() {
                                    return elements.contentText(hook.computes[i++]());
                                }) : elements.contentText(hook.computes[i++]());
                            return newAttr;
                        },
                        computes: [compute],
                        batchNum: undefined
                    };
                }

                // Save the hook for slightly faster performance.
                hook = hooks[attributeName];

                // Insert the value in parts.
                goodParts.splice(1, 0, compute());

                // Set the attribute.
                elements.setAttr(el, attributeName, goodParts.join(""));

            }
        }
        return live;

    })(__m3, __m14, __m11, __m17);

    // ## can/view/render.js
    var __m15 = (function(can, elements, live) {

        var pendingHookups = [],
            tagChildren = function(tagName) {
                var newTag = elements.tagMap[tagName] || "span";
                if (newTag === "span") {
                    //innerHTML in IE doesn't honor leading whitespace after empty elements
                    return "@@!!@@";
                }
                return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";
            },
            contentText = function(input, tag) {

                // If it's a string, return.
                if (typeof input == 'string') {
                    return input;
                }
                // If has no value, return an empty string.
                if (!input && input !== 0) {
                    return '';
                }

                // If it's an object, and it has a hookup method.
                var hook = (input.hookup &&

                    // Make a function call the hookup method.

                    function(el, id) {
                        input.hookup.call(input, el, id);
                    }) ||

                // Or if it's a `function`, just use the input.
                (typeof input == 'function' && input);

                // Finally, if there is a `function` to hookup on some dom,
                // add it to pending hookups.
                if (hook) {
                    if (tag) {
                        return "<" + tag + " " + can.view.hook(hook) + "></" + tag + ">"
                    } else {
                        pendingHookups.push(hook);
                    }

                    return '';
                }

                // Finally, if all else is `false`, `toString()` it.
                return "" + input;
            },
            // Returns escaped/sanatized content for anything other than a live-binding
            contentEscape = function(txt) {
                return (typeof txt == 'string' || typeof txt == 'number') ?
                    can.esc(txt) :
                    contentText(txt);
            };

        var current;

        can.extend(can.view, {
                live: live,
                setupLists: function() {

                    var old = can.view.lists,
                        data;

                    can.view.lists = function(list, renderer) {
                        data = {
                            list: list,
                            renderer: renderer
                        }
                    }
                    return function() {
                        can.view.lists = old;
                        return data;
                    }
                },
                pending: function() {
                    // TODO, make this only run for the right tagName
                    var hooks = pendingHookups.slice(0);
                    lastHookups = hooks;
                    pendingHookups = [];
                    return can.view.hook(function(el) {
                        can.each(hooks, function(fn) {
                            fn(el);
                        });
                    });
                },


                txt: function(escape, tagName, status, self, func) {
                    var listTeardown = can.view.setupLists(),
                        emptyHandler = function() {},
                        unbind = function() {
                            compute.unbind("change", emptyHandler)
                        };

                    var compute = can.compute(func, self, false);
                    // bind to get and temporarily cache the value
                    compute.bind("change", emptyHandler);
                    // call the "wrapping" function and get the binding information
                    var tag = (elements.tagMap[tagName] || "span"),
                        listData = listTeardown(),
                        value = compute();


                    if (listData) {
                        return "<" + tag + can.view.hook(function(el, parentNode) {
                            live.list(el, listData.list, listData.renderer, self, parentNode);
                        }) + "></" + tag + ">";
                    }

                    // If we had no observes just return the value returned by func.
                    if (!compute.hasDependencies) {
                        unbind();
                        return (escape || status !== 0 ? contentEscape : contentText)(value, status === 0 && tag);
                    }

                    // the property (instead of innerHTML elements) to adjust. For
                    // example options should use textContent
                    var contentProp = elements.tagToContentPropMap[tagName];


                    // The magic tag is outside or between tags.
                    if (status === 0 && !contentProp) {
                        // Return an element tag with a hookup in place of the content
                        return "<" + tag + can.view.hook(
                            escape ?
                            // If we are escaping, replace the parentNode with 
                            // a text node who's value is `func`'s return value.

                            function(el, parentNode) {
                                live.text(el, compute, parentNode);
                                unbind();
                            } :
                            // If we are not escaping, replace the parentNode with a
                            // documentFragment created as with `func`'s return value.

                            function(el, parentNode) {
                                live.html(el, compute, parentNode);
                                unbind();
                                //children have to be properly nested HTML for buildFragment to work properly
                            }) + ">" + tagChildren(tag) + "</" + tag + ">";
                        // In a tag, but not in an attribute
                    } else if (status === 1) {
                        // remember the old attr name
                        pendingHookups.push(function(el) {
                            live.attributes(el, compute, compute());
                            unbind();
                        });
                        return compute();
                    } else { // In an attribute...
                        var attributeName = status === 0 ? contentProp : status;
                        // if the magic tag is inside the element, like `<option><% TAG %></option>`,
                        // we add this hookup to the last element (ex: `option`'s) hookups.
                        // Otherwise, the magic tag is in an attribute, just add to the current element's
                        // hookups.
                        (status === 0 ? lastHookups : pendingHookups).push(function(el) {
                            live.attribute(el, attributeName, compute);
                            unbind();
                        });
                        return live.attributePlaceholder;
                    }
                }
            });

        return can;
    })(__m11, __m14, __m16, __m2);

    // ## can/view/ejs/ejs.js
    var __m12 = (function(can) {
        // ## ejs.js
        // `can.EJS`  
        // _Embedded JavaScript Templates._

        // Helper methods.
        var extend = can.extend,
            EJS = function(options) {
                // Supports calling EJS without the constructor
                // This returns a function that renders the template.
                if (this.constructor != EJS) {
                    var ejs = new EJS(options);
                    return function(data, helpers) {
                        return ejs.render(data, helpers);
                    };
                }
                // If we get a `function` directly, it probably is coming from
                // a `steal`-packaged view.
                if (typeof options == "function") {
                    this.template = {
                        fn: options
                    };
                    return;
                }
                // Set options on self.
                extend(this, options);
                this.template = this.scanner.scan(this.text, this.name);
            };

        can.EJS = EJS;


        EJS.prototype.

        render = function(object, extraHelpers) {
            object = object || {};
            return this.template.fn.call(object, object, new EJS.Helpers(object, extraHelpers || {}));
        };

        extend(EJS.prototype, {

                scanner: new can.view.Scanner({

                        tokens: [
                            ["templateLeft", "<%%"], // Template
                            ["templateRight", "%>"], // Right Template
                            ["returnLeft", "<%=="], // Return Unescaped
                            ["escapeLeft", "<%="], // Return Escaped
                            ["commentLeft", "<%#"], // Comment
                            ["left", "<%"], // Run --- this is hack for now
                            ["right", "%>"], // Right -> All have same FOR Mustache ...
                            ["returnRight", "%>"]
                        ],


                        transform: function(source) {
                            return source.replace(/<%([\s\S]+?)%>/gm, function(whole, part) {
                                var brackets = [],
                                    foundBracketPair,
                                    i;

                                // Look for brackets (for removing self-contained blocks)
                                part.replace(/[{}]/gm, function(bracket, offset) {
                                    brackets.push([bracket, offset]);
                                });

                                // Remove bracket pairs from the list of replacements
                                do {
                                    foundBracketPair = false;
                                    for (i = brackets.length - 2; i >= 0; i--) {
                                        if (brackets[i][0] == '{' && brackets[i + 1][0] == '}') {
                                            brackets.splice(i, 2);
                                            foundBracketPair = true;
                                            break;
                                        }
                                    }
                                } while (foundBracketPair);

                                // Unmatched brackets found, inject EJS tags
                                if (brackets.length >= 2) {
                                    var result = ['<%'],
                                        bracket,
                                        last = 0;
                                    for (i = 0; bracket = brackets[i]; i++) {
                                        result.push(part.substring(last, last = bracket[1]));
                                        if ((bracket[0] == '{' && i < brackets.length - 1) || (bracket[0] == '}' && i > 0)) {
                                            result.push(bracket[0] == '{' ? '{ %><% ' : ' %><% }');
                                        } else {
                                            result.push(bracket[0]);
                                        }
                                        ++last;
                                    }
                                    result.push(part.substring(last), '%>');
                                    return result.join('');
                                }
                                // Otherwise return the original
                                else {
                                    return '<%' + part + '%>';
                                }
                            });
                        }
                    })
            });

        EJS.Helpers = function(data, extras) {
            this._data = data;
            this._extras = extras;
            extend(this, extras);
        };


        EJS.Helpers.prototype = {
            // TODO Deprecated!!
            list: function(list, cb) {

                can.each(list, function(item, i) {
                    cb(item, i, list)
                })
            },
            each: function(list, cb) {
                // Normal arrays don't get live updated
                if (can.isArray(list)) {
                    this.list(list, cb);
                } else {
                    can.view.lists(list, cb);
                }
            }
        };

        // Options for `steal`'s build.
        can.view.register({
                suffix: "ejs",
                // returns a `function` that renders the view.
                script: function(id, src) {
                    return "can.EJS(function(_CONTEXT,_VIEW) { " + new EJS({
                            text: src,
                            name: id
                        }).template.out + " })";
                },
                renderer: function(id, text) {
                    return EJS({
                            text: text,
                            name: id
                        });
                }
            });

        return can;
    })(__m3, __m11, __m2, __m9, __m13, __m15);

    // ## can/control/control.js
    var __m18 = (function(can) {
        // ## control.js
        // `can.Control`  
        // _Controller_

        // Binds an element, returns a function that unbinds.
        var bind = function(el, ev, callback) {

            can.bind.call(el, ev, callback);

            return function() {
                can.unbind.call(el, ev, callback);
            };
        },
            isFunction = can.isFunction,
            extend = can.extend,
            each = can.each,
            slice = [].slice,
            paramReplacer = /\{([^\}]+)\}/g,
            special = can.getObject("$.event.special", [can]) || {},

            // Binds an element, returns a function that unbinds.
            delegate = function(el, selector, ev, callback) {
                can.delegate.call(el, selector, ev, callback);
                return function() {
                    can.undelegate.call(el, selector, ev, callback);
                };
            },

            // Calls bind or unbind depending if there is a selector.
            binder = function(el, ev, callback, selector) {
                return selector ?
                    delegate(el, can.trim(selector), ev, callback) :
                    bind(el, ev, callback);
            },

            basicProcessor;

        var Control = can.Control = can.Construct(

            {
                // Setup pre-processes which methods are event listeners.

                setup: function() {

                    // Allow contollers to inherit "defaults" from super-classes as it 
                    // done in `can.Construct`
                    can.Construct.setup.apply(this, arguments);

                    // If you didn't provide a name, or are `control`, don't do anything.
                    if (can.Control) {

                        // Cache the underscored names.
                        var control = this,
                            funcName;

                        // Calculate and cache actions.
                        control.actions = {};
                        for (funcName in control.prototype) {
                            if (control._isAction(funcName)) {
                                control.actions[funcName] = control._action(funcName);
                            }
                        }
                    }
                },

                // Moves `this` to the first argument, wraps it with `jQuery` if it's an element
                _shifter: function(context, name) {

                    var method = typeof name == "string" ? context[name] : name;

                    if (!isFunction(method)) {
                        method = context[method];
                    }

                    return function() {
                        context.called = name;
                        return method.apply(context, [this.nodeName ? can.$(this) : this].concat(slice.call(arguments, 0)));
                    };
                },

                // Return `true` if is an action.

                _isAction: function(methodName) {

                    var val = this.prototype[methodName],
                        type = typeof val;
                    // if not the constructor
                    return (methodName !== 'constructor') &&
                    // and is a function or links to a function
                    (type == "function" || (type == "string" && isFunction(this.prototype[val]))) &&
                    // and is in special, a processor, or has a funny character
                    !! (special[methodName] || processors[methodName] || /[^\w]/.test(methodName));
                },
                // Takes a method name and the options passed to a control
                // and tries to return the data necessary to pass to a processor
                // (something that binds things).

                _action: function(methodName, options) {

                    // If we don't have options (a `control` instance), we'll run this 
                    // later.  
                    paramReplacer.lastIndex = 0;
                    if (options || !paramReplacer.test(methodName)) {
                        // If we have options, run sub to replace templates `{}` with a
                        // value from the options or the window
                        var convertedName = options ? can.sub(methodName, [options, window]) : methodName;
                        if (!convertedName) {
                            return null;
                        }
                        // If a `{}` template resolves to an object, `convertedName` will be
                        // an array
                        var arr = can.isArray(convertedName),

                            // Get the name
                            name = arr ? convertedName[1] : convertedName,

                            // Grab the event off the end
                            parts = name.split(/\s+/g),
                            event = parts.pop();

                        return {
                            processor: processors[event] || basicProcessor,
                            parts: [name, parts.join(" "), event],
                            delegate: arr ? convertedName[0] : undefined
                        };
                    }
                },
                // An object of `{eventName : function}` pairs that Control uses to 
                // hook up events auto-magically.

                processors: {},
                // A object of name-value pairs that act as default values for a 
                // control instance
                defaults: {}

            }, {

                // Sets `this.element`, saves the control in `data, binds event
                // handlers.

                setup: function(element, options) {

                    var cls = this.constructor,
                        pluginname = cls.pluginName || cls._fullName,
                        arr;

                    // Want the raw element here.
                    this.element = can.$(element)

                    if (pluginname && pluginname !== 'can_control') {
                        // Set element and `className` on element.
                        this.element.addClass(pluginname);
                    }

                    (arr = can.data(this.element, "controls")) || can.data(this.element, "controls", arr = []);
                    arr.push(this);

                    // Option merging.

                    this.options = extend({}, cls.defaults, options);

                    // Bind all event handlers.
                    this.on();

                    // Gets passed into `init`.

                    return [this.element, this.options];
                },

                on: function(el, selector, eventName, func) {
                    if (!el) {

                        // Adds bindings.
                        this.off();

                        // Go through the cached list of actions and use the processor 
                        // to bind
                        var cls = this.constructor,
                            bindings = this._bindings,
                            actions = cls.actions,
                            element = this.element,
                            destroyCB = can.Control._shifter(this, "destroy"),
                            funcName, ready;

                        for (funcName in actions) {
                            // Only push if we have the action and no option is `undefined`
                            if (actions.hasOwnProperty(funcName) &&
                                (ready = actions[funcName] || cls._action(funcName, this.options))) {
                                bindings.push(ready.processor(ready.delegate || element,
                                        ready.parts[2], ready.parts[1], funcName, this));
                            }
                        }


                        // Setup to be destroyed...  
                        // don't bind because we don't want to remove it.
                        can.bind.call(element, "destroyed", destroyCB);
                        bindings.push(function(el) {
                            can.unbind.call(el, "destroyed", destroyCB);
                        });
                        return bindings.length;
                    }

                    if (typeof el == 'string') {
                        func = eventName;
                        eventName = selector;
                        selector = el;
                        el = this.element;
                    }

                    if (func === undefined) {
                        func = eventName;
                        eventName = selector;
                        selector = null;
                    }

                    if (typeof func == 'string') {
                        func = can.Control._shifter(this, func);
                    }

                    this._bindings.push(binder(el, eventName, func, selector));

                    return this._bindings.length;
                },
                // Unbinds all event handlers on the controller.

                off: function() {
                    var el = this.element[0]
                    each(this._bindings || [], function(value) {
                        value(el);
                    });
                    // Adds bindings.
                    this._bindings = [];
                },
                // Prepares a `control` for garbage collection

                destroy: function() {
                    //Control already destroyed
                    if (this.element === null) {

                        return;
                    }
                    var Class = this.constructor,
                        pluginName = Class.pluginName || Class._fullName,
                        controls;

                    // Unbind bindings.
                    this.off();

                    if (pluginName && pluginName !== 'can_control') {
                        // Remove the `className`.
                        this.element.removeClass(pluginName);
                    }

                    // Remove from `data`.
                    controls = can.data(this.element, "controls");
                    controls.splice(can.inArray(this, controls), 1);

                    can.trigger(this, "destroyed"); // In case we want to know if the `control` is removed.

                    this.element = null;
                }
            });

        var processors = can.Control.processors,
            // Processors do the binding.
            // They return a function that unbinds when called.  
            // The basic processor that binds events.
            basicProcessor = function(el, event, selector, methodName, control) {
                return binder(el, event, can.Control._shifter(control, methodName), selector);
            };

        // Set common events to be processed as a `basicProcessor`
        each(["change", "click", "contextmenu", "dblclick", "keydown", "keyup",
                "keypress", "mousedown", "mousemove", "mouseout", "mouseover",
                "mouseup", "reset", "resize", "scroll", "select", "submit", "focusin",
                "focusout", "mouseenter", "mouseleave",
                // #104 - Add touch events as default processors
                // TOOD feature detect?
                "touchstart", "touchmove", "touchcancel", "touchend", "touchleave"
            ], function(v) {
                processors[v] = basicProcessor;
            });

        return Control;
    })(__m3, __m1);

    // ## can/util/string/deparam/deparam.js
    var __m20 = (function(can) {

        // ## deparam.js  
        // `can.deparam`  
        // _Takes a string of name value pairs and returns a Object literal that represents those params._
        var digitTest = /^\d+$/,
            keyBreaker = /([^\[\]]+)|(\[\])/g,
            paramTest = /([^?#]*)(#.*)?$/,
            prep = function(str) {
                return decodeURIComponent(str.replace(/\+/g, " "));
            };


        can.extend(can, {

                deparam: function(params) {

                    var data = {},
                        pairs, lastPart;

                    if (params && paramTest.test(params)) {

                        pairs = params.split('&'),

                        can.each(pairs, function(pair) {

                            var parts = pair.split('='),
                                key = prep(parts.shift()),
                                value = prep(parts.join("=")),
                                current = data;

                            if (key) {
                                parts = key.match(keyBreaker);

                                for (var j = 0, l = parts.length - 1; j < l; j++) {
                                    if (!current[parts[j]]) {
                                        // If what we are pointing to looks like an `array`
                                        current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] == "[]" ? [] : {};
                                    }
                                    current = current[parts[j]];
                                }
                                lastPart = parts.pop();
                                if (lastPart == "[]") {
                                    current.push(value);
                                } else {
                                    current[lastPart] = value;
                                }
                            }
                        });
                    }
                    return data;
                }
            });
        return can;
    })(__m3, __m2);

    // ## can/route/route.js
    var __m19 = (function(can) {

        // ## route.js  
        // `can.route`  
        // _Helps manage browser history (and client state) by synchronizing the 
        // `window.location.hash` with a `can.Observe`._  
        // Helper methods used for matching routes.
        var
        // `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,
            // Regular expression for identifying &amp;key=value lists.
            paramsMatcher = /^(?:&[^=]+=[^&]*)+/,
            // Converts a JS Object into a list of parameters that can be 
            // inserted into an html element tag.
            makeProps = function(props) {
                var tags = [];
                can.each(props, function(val, name) {
                    tags.push((name === 'className' ? 'class' : name) + '="' +
                        (name === "href" ? val : can.esc(val)) + '"');
                });
                return tags.join(" ");
            },
            // Checks if a route matches the data provided. If any route variable
            // is not present in the data, the route does not match. If all route
            // variables are present in the data, the number of matches is returned 
            // to allow discerning between general and more specific routes. 
            matchesData = function(route, data) {
                var count = 0,
                    i = 0,
                    defaults = {};
                // look at default values, if they match ...
                for (var name in route.defaults) {
                    if (route.defaults[name] === data[name]) {
                        // mark as matched
                        defaults[name] = 1;
                        count++;
                    }
                }
                for (; i < route.names.length; i++) {
                    if (!data.hasOwnProperty(route.names[i])) {
                        return -1;
                    }
                    if (!defaults[route.names[i]]) {
                        count++;
                    }

                }

                return count;
            },
            onready = !0,
            location = window.location,
            wrapQuote = function(str) {
                return (str + '').replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
            },
            each = can.each,
            extend = can.extend;

        can.route = function(url, defaults) {
            defaults = defaults || {};
            // Extract the variable names and replace with `RegExp` that will match
            // an atual URL with values.
            var names = [],
                test = url.replace(matcher, function(whole, name, i) {
                    names.push(name);
                    var next = "\\" + (url.substr(i + whole.length, 1) || can.route._querySeparator);
                    // a name without a default value HAS to have a value
                    // a name that has a default value can be empty
                    // The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
                    return "([^" + next + "]" + (defaults[name] ? "*" : "+") + ")";
                });

            // Add route in a form that can be easily figured out.
            can.route.routes[url] = {
                // A regular expression that will match the route when variable values 
                // are present; i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
                // will match for any value of `:page` and `:type` (word chars or period).
                test: new RegExp("^" + test + "($|" + wrapQuote(can.route._querySeparator) + ")"),
                // The original URL, same as the index for this entry in routes.
                route: url,
                // An `array` of all the variable names in this route.
                names: names,
                // Default values provided for the variables.
                defaults: defaults,
                // The number of parts in the URL separated by `/`.
                length: url.split('/').length
            };
            return can.route;
        };


        extend(can.route, {

                _querySeparator: '&',
                _paramsMatcher: paramsMatcher,


                param: function(data, _setRoute) {
                    // Check if the provided data keys match the names in any routes;
                    // Get the one with the most matches.
                    var route,
                        // Need to have at least 1 match.
                        matches = 0,
                        matchCount,
                        routeName = data.route,
                        propCount = 0;

                    delete data.route;

                    each(data, function() {
                        propCount++;
                    });
                    // Otherwise find route.
                    each(can.route.routes, function(temp, name) {
                        // best route is the first with all defaults matching


                        matchCount = matchesData(temp, data);
                        if (matchCount > matches) {
                            route = temp;
                            matches = matchCount;
                        }
                        if (matchCount >= propCount) {
                            return false;
                        }
                    });
                    // If we have a route name in our `can.route` data, and it's
                    // just as good as what currently matches, use that
                    if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data) === matches) {
                        route = can.route.routes[routeName];
                    }
                    // If this is match...
                    if (route) {
                        var cpy = extend({}, data),
                            // Create the url by replacing the var names with the provided data.
                            // If the default value is found an empty string is inserted.
                            res = route.route.replace(matcher, function(whole, name) {
                                delete cpy[name];
                                return data[name] === route.defaults[name] ? "" : encodeURIComponent(data[name]);
                            }),
                            after;
                        // Remove matching default values
                        each(route.defaults, function(val, name) {
                            if (cpy[name] === val) {
                                delete cpy[name];
                            }
                        });

                        // The remaining elements of data are added as 
                        // `&amp;` separated parameters to the url.
                        after = can.param(cpy);
                        // if we are paraming for setting the hash
                        // we also want to make sure the route value is updated
                        if (_setRoute) {
                            can.route.attr('route', route.route);
                        }
                        return res + (after ? can.route._querySeparator + after : "");
                    }
                    // If no route was found, there is no hash URL, only paramters.
                    return can.isEmptyObject(data) ? "" : can.route._querySeparator + can.param(data);
                },

                deparam: function(url) {
                    // See if the url matches any routes by testing it against the `route.test` `RegExp`.
                    // By comparing the URL length the most specialized route that matches is used.
                    var route = {
                        length: -1
                    };
                    each(can.route.routes, function(temp, name) {
                        if (temp.test.test(url) && temp.length > route.length) {
                            route = temp;
                        }
                    });
                    // If a route was matched.
                    if (route.length > -1) {

                        var // Since `RegExp` backreferences are used in `route.test` (parens)
                        // the parts will contain the full matched string and each variable (back-referenced) value.
                        parts = url.match(route.test),
                            // Start will contain the full matched string; parts contain the variable values.
                            start = parts.shift(),
                            // The remainder will be the `&amp;key=value` list at the end of the URL.
                            remainder = url.substr(start.length - (parts[parts.length - 1] === can.route._querySeparator ? 1 : 0)),
                            // If there is a remainder and it contains a `&amp;key=value` list deparam it.
                            obj = (remainder && can.route._paramsMatcher.test(remainder)) ? can.deparam(remainder.slice(1)) : {};

                        // Add the default values for this route.
                        obj = extend(true, {}, route.defaults, obj);
                        // Overwrite each of the default values in `obj` with those in 
                        // parts if that part is not empty.
                        each(parts, function(part, i) {
                            if (part && part !== can.route._querySeparator) {
                                obj[route.names[i]] = decodeURIComponent(part);
                            }
                        });
                        obj.route = route.route;
                        return obj;
                    }
                    // If no route was matched, it is parsed as a `&amp;key=value` list.
                    if (url.charAt(0) !== can.route._querySeparator) {
                        url = can.route._querySeparator + url;
                    }
                    return can.route._paramsMatcher.test(url) ? can.deparam(url.slice(1)) : {};
                },

                data: new can.Observe({}),

                routes: {},

                ready: function(val) {
                    if (val === false) {
                        onready = val;
                    }
                    if (val === true || onready === true) {
                        can.route._setup();
                        setState();
                    }
                    return can.route;
                },

                url: function(options, merge) {
                    if (merge) {
                        options = extend({}, curParams, options)
                    }
                    return "#!" + can.route.param(options);
                },

                link: function(name, options, props, merge) {
                    return "<a " + makeProps(
                        extend({
                                href: can.route.url(options, merge)
                            }, props)) + ">" + name + "</a>";
                },

                current: function(options) {
                    return location.hash == "#!" + can.route.param(options)
                },
                _setup: function() {
                    // If the hash changes, update the `can.route.data`.
                    can.bind.call(window, 'hashchange', setState);
                },
                _getHash: function() {
                    return location.href.split(/#!?/)[1] || "";
                },
                _setHash: function(serialized) {
                    var path = (can.route.param(serialized, true));
                    location.hash = "#!" + path;
                    return path;
                }
            });


        // The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
        // instead act on the `can.route.data` observe.
        each(['bind', 'unbind', 'delegate', 'undelegate', 'attr', 'removeAttr'], function(name) {
            can.route[name] = function() {
                // `delegate` and `undelegate` require
                // the `can/observe/delegate` plugin
                if (!can.route.data[name]) {
                    return;
                }

                return can.route.data[name].apply(can.route.data, arguments);
            }
        })

        var // A ~~throttled~~ debounced function called multiple times will only fire once the
        // timer runs down. Each call resets the timer.
        timer,
            // Intermediate storage for `can.route.data`.
            curParams,
            // Deparameterizes the portion of the hash of interest and assign the
            // values to the `can.route.data` removing existing values no longer in the hash.
            // setState is called typically by hashchange which fires asynchronously
            // So it's possible that someone started changing the data before the 
            // hashchange event fired.  For this reason, it will not set the route data
            // if the data is changing or the hash already matches the hash that was set.
            setState = can.route.setState = function() {
                var hash = can.route._getHash();
                curParams = can.route.deparam(hash);

                // if the hash data is currently changing, or
                // the hash is what we set it to anyway, do NOT change the hash
                if (!changingData || hash !== lastHash) {
                    can.route.attr(curParams, true);
                }
            },
            // The last hash caused by a data change
            lastHash,
            // Are data changes pending that haven't yet updated the hash
            changingData;

        // If the `can.route.data` changes, update the hash.
        // Using `.serialize()` retrieves the raw data contained in the `observable`.
        // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
        // This might be able to use batchNum and avoid this.
        can.route.bind("change", function(ev, attr) {
            // indicate that data is changing
            changingData = 1;
            clearTimeout(timer);
            timer = setTimeout(function() {
                // indicate that the hash is set to look like the data
                changingData = 0;
                var serialized = can.route.data.serialize();

                lastHash = can.route._setHash(serialized);
            }, 1);
        });
        // `onready` event...
        can.bind.call(document, "ready", can.route.ready);

        // Libraries other than jQuery don't execute the document `ready` listener
        // if we are already DOM ready
        if ((document.readyState === 'complete' || document.readyState === "interactive") && onready) {
            can.route.ready();
        }

        // extend route to have a similar property 
        // that is often checked in mustache to determine
        // an object's observability
        can.route.constructor.canMakeObserve = can.Observe.canMakeObserve;

        return can.route;
    })(__m3, __m7, __m20);

    // ## can/control/route/route.js
    var __m21 = (function(can) {

        // ## control/route.js  
        // _Controller route integration._

        can.Control.processors.route = function(el, event, selector, funcName, controller) {
            selector = selector || "";
            can.route(selector);
            var batchNum,
                check = function(ev, attr, how) {
                    if (can.route.attr('route') === (selector) &&
                        (ev.batchNum === undefined || ev.batchNum !== batchNum)) {

                        batchNum = ev.batchNum;

                        var d = can.route.attr();
                        delete d.route;
                        if (can.isFunction(controller[funcName])) {
                            controller[funcName](d);
                        } else {
                            controller[controller[funcName]](d);
                        }

                    }
                };
            can.route.bind('change', check);
            return function() {
                can.route.unbind('change', check);
            };
        };

        return can;
    })(__m3, __m19, __m18);

    // ## can/view/mustache/mustache.js
    var __m22 = (function(can) {

        // # mustache.js
        // `can.Mustache`: The Mustache templating engine.
        // See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation 
        // of the runtime render code design. The majority of the Mustache engine implementation 
        // occurs within the *Transformation* scanning helper.

        // ## Initialization
        // Define the view extension.
        can.view.ext = ".mustache";

        // ### Setup internal helper variables and functions.
        // An alias for the context variable used for tracking a stack of contexts.
        // This is also used for passing to helper functions to maintain proper context.
        var CONTEXT = '___c0nt3xt',
            // An alias for the variable used for the hash object that can be passed
            // to helpers via `options.hash`.
            HASH = '___h4sh',
            // An alias for the function that adds a new context to the context stack.
            STACK = '___st4ck',
            STACKED = '___st4ck3d',
            // An alias for the most used context stacking call.
            CONTEXT_STACK = STACK + '(' + CONTEXT + ',this)',
            CONTEXT_OBJ = '{context:' + CONTEXT_STACK + ',options:options}',


            isObserve = function(obj) {
                return obj !== null && can.isFunction(obj.attr) && obj.constructor && !! obj.constructor.canMakeObserve;
            },


            isArrayLike = function(obj) {
                return obj && obj.splice && typeof obj.length == 'number';
            },

            // ## Mustache

            Mustache = function(options, helpers) {
                // Support calling Mustache without the constructor.
                // This returns a function that renders the template.
                if (this.constructor != Mustache) {
                    var mustache = new Mustache(options);
                    return function(data, options) {
                        return mustache.render(data, options);
                    };
                }

                // If we get a `function` directly, it probably is coming from
                // a `steal`-packaged view.
                if (typeof options == "function") {
                    this.template = {
                        fn: options
                    };
                    return;
                }

                // Set options on self.
                can.extend(this, options);
                this.template = this.scanner.scan(this.text, this.name);
            };


        // Put Mustache on the `can` object.
        can.Mustache = window.Mustache = Mustache;


        Mustache.prototype.

        render = function(object, options) {
            object = object || {};
            options = options || {};
            if (!options.helpers && !options.partials) {
                options.helpers = options;
            }
            return this.template.fn.call(object, object, {
                    _data: object,
                    options: options
                });
        };

        can.extend(Mustache.prototype, {
                // Share a singleton scanner for parsing templates.
                scanner: new can.view.Scanner({
                        // A hash of strings for the scanner to inject at certain points.
                        text: {
                            // This is the logic to inject at the beginning of a rendered template. 
                            // This includes initializing the `context` stack.
                            start: 'var ' + CONTEXT + ' = this && this.' + STACKED + ' ? this : [];' + CONTEXT + '.' + STACKED + ' = true;' + 'var ' + STACK + ' = function(context, self) {' + 'var s;' + 'if (arguments.length == 1 && context) {' + 's = !context.' + STACKED + ' ? [context] : context;' +
                            // Handle helpers with custom contexts (#228)
                            '} else if (!context.' + STACKED + ') {' + 's = [self, context];' + '} else if (context && context === self && context.' + STACKED + ') {' + 's = context.slice(0);' + '} else {' + 's = context && context.' + STACKED + ' ? context.concat([self]) : ' + STACK + '(context).concat([self]);' + '}' + 'return (s.' + STACKED + ' = true) && s;' + '};'
                        },

                        // An ordered token registry for the scanner.
                        // This needs to be ordered by priority to prevent token parsing errors.
                        // Each token follows the following structure:
                        //		[
                        //			// Which key in the token map to match.
                        //			"tokenMapName",
                        //			// A simple token to match, like "{{".
                        //			"token",
                        //			// Optional. A complex (regexp) token to match that 
                        //			// overrides the simple token.
                        //			"[\\s\\t]*{{",
                        //			// Optional. A function that executes advanced 
                        //			// manipulation of the matched content. This is 
                        //			// rarely used.
                        //			function(content){   
                        //				return content;
                        //			}
                        //		]
                        tokens: [
                            // Return unescaped
                            ["returnLeft", "{{{", "{{[{&]"],
                            // Full line comments
                            ["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],
                            // Inline comments
                            ["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],
                            // Full line escapes
                            // This is used for detecting lines with only whitespace and an escaped tag
                            ["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)",
                                function(content) {
                                    return {
                                        before: /^\n.+?\n$/.test(content) ? '\n' : '',
                                        content: content.match(/\{\{(.+?)\}\}/)[1] || ''
                                    };
                                }
                            ],
                            // Return escaped
                            ["escapeLeft", "{{"],
                            // Close return unescaped
                            ["returnRight", "}}}"],
                            // Close tag
                            ["right", "}}"]
                        ],

                        // ## Scanning Helpers
                        // This is an array of helpers that transform content that is within escaped tags like `{{token}}`. These helpers are solely for the scanning phase; they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:
                        //		{
                        //			// The content pattern to match in order to execute.
                        //			// Only the first matching helper is executed.
                        //			name: /pattern to match/,
                        //			// The function to transform the content with.
                        //			// @param {String} content   The content to transform.
                        //			// @param {Object} cmd       Scanner helper data.
                        //			//                           {
                        //			//                             insert: "insert command",
                        //			//                             tagName: "div",
                        //			//                             status: 0
                        //			//                           }
                        //			fn: function(content, cmd) {
                        //				return 'for text injection' || 
                        //					{ raw: 'to bypass text injection' };
                        //			}
                        //		}
                        helpers: [
                            // ### Partials
                            // Partials begin with a greater than sign, like {{> box}}.
                            // Partials are rendered at runtime (as opposed to compile time), 
                            // so recursive partials are possible. Just avoid infinite loops.
                            // For example, this template and partial:
                            // 		base.mustache:
                            // 			<h2>Names</h2>
                            // 			{{#names}}
                            // 				{{> user}}
                            // 			{{/names}}
                            // 		user.mustache:
                            // 			<strong>{{name}}</strong>
                            {
                                name: /^>[\s]*\w*/,
                                fn: function(content, cmd) {
                                    // Get the template name and call back into the render method,
                                    // passing the name and the current context.
                                    var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, "");
                                    return "options.partials && options.partials['" + templateName + "'] ? can.Mustache.renderPartial(options.partials['" + templateName + "']," +
                                        CONTEXT_STACK + ",options) : can.Mustache.render('" + templateName + "', " + CONTEXT_STACK + ")";
                                }
                            },

                            // ### Data Hookup
                            // This will attach the data property of `this` to the element
                            // its found on using the first argument as the data attribute
                            // key.
                            // For example:
                            //		<li id="nameli" {{ data 'name' }}></li>
                            // then later you can access it like:
                            //		can.$('#nameli').data('name');
                            {
                                name: /^\s*data\s/,
                                fn: function(content, cmd) {
                                    var attr = content.match(/["|'](.*)["|']/)[1];
                                    // return a function which calls `can.data` on the element
                                    // with the attribute name with the current context.
                                    return "can.proxy(function(__){" +
                                    // "var context = this[this.length-1];" +
                                    // "context = context." + STACKED + " ? context[context.length-2] : context;" +
                                    "can.data(can.$(__),'" + attr + "', this.pop()); }, " + CONTEXT_STACK + ")";
                                }
                            },

                            // ### Transformation (default)
                            // This transforms all content to its interpolated equivalent,
                            // including calls to the corresponding helpers as applicable. 
                            // This outputs the render code for almost all cases.
                            // #### Definitions
                            // * `context` - This is the object that the current rendering context operates within. 
                            //		Each nested template adds a new `context` to the context stack.
                            // * `stack` - Mustache supports nested sections, 
                            //		each of which add their own context to a stack of contexts.
                            //		Whenever a token gets interpolated, it will check for a match against the 
                            //		last context in the stack, then iterate through the rest of the stack checking for matches.
                            //		The first match is the one that gets returned.
                            // * `Mustache.txt` - This serializes a collection of logic, optionally contained within a section.
                            //		If this is a simple interpolation, only the interpolation lookup will be passed.
                            //		If this is a section, then an `options` object populated by the truthy (`options.fn`) and 
                            //		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling 
                            //		exists to support the runtime context nesting that Mustache supports.
                            // * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
                            // * `options` - An object containing methods for executing the inner contents of sections or helpers.  
                            //		`options.fn` - Contains the inner template logic for a truthy section.  
                            //		`options.inverse` - Contains the inner template logic for a falsey section.  
                            //		`options.hash` - Contains the merged hash object argument for custom helpers.
                            // #### Design
                            // This covers the design of the render code that the transformation helper generates.
                            // ##### Pseudocode
                            // A detailed explanation is provided in the following sections, but here is some brief pseudocode
                            // that gives a high level overview of what the generated render code does (with a template similar to  
                            // `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`).
                            // *Initialize the render code.*
                            // 		view = []
                            // 		context = []
                            // 		stack = fn { context.concat([this]) }
                            // *Render the root section.*
                            // 		view.push( "string" )
                            // 		view.push( can.view.txt(
                            // *Render the nested section with `can.Mustache.txt`.*
                            // 			txt( 
                            // *Add the current context to the stack.*
                            // 				stack(), 
                            // *Flag this for truthy section mode.*
                            // 				"#",
                            // *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
                            // 				get( "a", stack() ),
                            // *Include the nested section's inner logic.
                            // The stack argument is usually the parent section's copy of the stack, 
                            // but it can be an override context that was passed by a custom helper.
                            // Sections can nest `0..n` times -- **NESTCEPTION**.*
                            // 				{ fn: fn(stack) {
                            // *Render the nested section (everything between the `{{#a}}` and `{{/a}}` tokens).*
                            // 					view = []
                            // 					view.push( "string" )
                            // 					view.push(
                            // *Add the current context to the stack.*
                            // 						stack(),
                            // *Flag this as interpolation-only mode.*
                            // 						null,
                            // *Interpolate the `b.c.d.e.name` variable using the stack.*
                            // 						get( "b.c.d.e.name", stack() ),
                            // 					)
                            // 					view.push( "string" )
                            // *Return the result for the nested section.*
                            // 					return view.join()
                            // 				}}
                            // 			)
                            // 		))
                            // 		view.push( "string" )
                            // *Return the result for the root section, which includes all nested sections.*
                            // 		return view.join()
                            // ##### Initialization
                            // Each rendered template is started with the following initialization code:
                            // 		var ___v1ew = [];
                            // 		var ___c0nt3xt = [];
                            // 		___c0nt3xt.___st4ck = true;
                            // 		var ___st4ck = function(context, self) {
                            // 			var s;
                            // 			if (arguments.length == 1 && context) {
                            // 				s = !context.___st4ck ? [context] : context;
                            // 			} else {
                            // 				s = context && context.___st4ck 
                            //					? context.concat([self]) 
                            //					: ___st4ck(context).concat([self]);
                            // 			}
                            // 			return (s.___st4ck = true) && s;
                            // 		};
                            // The `___v1ew` is the the array used to serialize the view.
                            // The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
                            // The `___st4ck` function is used to more easily update the context stack in certain situations.
                            // Usually, the stack function simply adds a new context (`self`/`this`) to a context stack. 
                            // However, custom helpers will occasionally pass override contexts that need their own context stack.
                            // ##### Sections
                            // Each section, `{{#section}} content {{/section}}`, within a Mustache template generates a section 
                            // context in the resulting render code. The template itself is treated like a root section, with the 
                            // same execution logic as any others. Each section can have `0..n` nested sections within it.
                            // Here's an example of a template without any descendent sections.  
                            // Given the template: `"{{a.b.c.d.e.name}}" == "Phil"`  
                            // Would output the following render code:
                            //		___v1ew.push("\"");
                            //		___v1ew.push(can.view.txt(1, '', 0, this, function() {
                            // 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), null, 
                            //				can.Mustache.get("a.b.c.d.e.name", 
                            //					___st4ck(___c0nt3xt, this))
                            //			);
                            //		}));
                            //		___v1ew.push("\" == \"Phil\"");
                            // The simple strings will get appended to the view. Any interpolated references (like `{{a.b.c.d.e.name}}`) 
                            // will be pushed onto the view via `can.view.txt` in order to support live binding.
                            // The function passed to `can.view.txt` will call `can.Mustache.txt`, which serializes the object data by doing 
                            // a context lookup with `can.Mustache.get`.
                            // `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
                            // This stack will grow larger as sections nest.
                            // The second argument is for the section type. This will be `"#"` for truthy sections, `"^"` for falsey, 
                            // or `null` if it is an interpolation instead of a section.
                            // The third argument is the interpolated value retrieved with `can.Mustache.get`, which will perform the 
                            // context lookup and return the approriate string or object.
                            // Any additional arguments, if they exist, are used for passing arguments to custom helpers.
                            // For nested sections, the last argument is an `options` object that contains the nested section's logic.
                            // Here's an example of a template with a single nested section.  
                            // Given the template: `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`  
                            // Would output the following render code:
                            //		___v1ew.push("\"");
                            // 		___v1ew.push(can.view.txt(0, '', 0, this, function() {
                            // 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), "#", 
                            //				can.Mustache.get("a", ___st4ck(___c0nt3xt, this)), 
                            //					[{
                            // 					_: function() {
                            // 						return ___v1ew.join("");
                            // 					}
                            // 				}, {
                            // 					fn: function(___c0nt3xt) {
                            // 						var ___v1ew = [];
                            // 						___v1ew.push(can.view.txt(1, '', 0, this, 
                            //								function() {
                            //  								return can.Mustache.txt(
                            // 									___st4ck(___c0nt3xt, this), 
                            // 									null, 
                            // 									can.Mustache.get("b.c.d.e.name", 
                            // 										___st4ck(___c0nt3xt, this))
                            // 								);
                            // 							}
                            // 						));
                            // 						return ___v1ew.join("");
                            // 					}
                            // 				}]
                            //			)
                            // 		}));
                            //		___v1ew.push("\" == \"Phil\"");
                            // This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
                            // These act similarly to custom helpers: `options.fn` will be called for truthy sections, `options.inverse` will be called for falsey sections.
                            // The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`, `inverse`,
                            // or both, but there isn't any way to determine that at compilation time).
                            // Within the `fn` function is the section's render context, which in this case will render anything between the `{{#a}}` and `{{/a}}` tokens.
                            // This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
                            // aren't used, `___c0nt3xt` will be equivalent to the `___st4ck(___c0nt3xt, this)` stack created by its parent section. The `inverse` function
                            // works similarly, except that it is added when `{{^a}}` and `{{else}}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to 
                            // ensure that live binding in nested sections works properly.
                            // All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
                            // #### Implementation
                            {
                                name: /^.*$/,
                                fn: function(content, cmd) {
                                    var mode = false,
                                        result = [];

                                    // Trim the content so we don't have any trailing whitespace.
                                    content = can.trim(content);

                                    // Determine what the active mode is.
                                    // * `#` - Truthy section
                                    // * `^` - Falsey section
                                    // * `/` - Close the prior section
                                    // * `else` - Inverted section (only exists within a truthy/falsey section)
                                    if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
                                        mode = mode[0];
                                        switch (mode) {
                                            // Open a new section.
                                            case '#':
                                            case '^':
                                                result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function(){ return ');
                                                break;
                                                // Close the prior section.
                                            case '/':
                                                return {
                                                    raw: 'return ___v1ew.join("");}}])}));'
                                                };
                                                break;
                                        }

                                        // Trim the mode off of the content.
                                        content = content.substring(1);
                                    }

                                    // `else` helpers are special and should be skipped since they don't 
                                    // have any logic aside from kicking off an `inverse` function.
                                    if (mode != 'else') {
                                        var args = [],
                                            i = 0,
                                            hashing = false,
                                            arg, split, m;

                                        // Parse the helper arguments.
                                        // This needs uses this method instead of a split(/\s/) so that 
                                        // strings with spaces can be correctly parsed.
                                        (can.trim(content) + ' ').replace(/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g, function(whole, part) {
                                            args.push(part);
                                        });

                                        // Start the content render block.
                                        result.push('can.Mustache.txt(' + CONTEXT_OBJ + ',' + (mode ? '"' + mode + '"' : 'null') + ',');

                                        // Iterate through the helper arguments, if there are any.
                                        for (; arg = args[i]; i++) {
                                            i && result.push(',');

                                            // Check for special helper arguments (string/number/boolean/hashes).
                                            if (i && (m = arg.match(/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/))) {
                                                // Found a native type like string/number/boolean.
                                                if (m[2]) {
                                                    result.push(m[0]);
                                                }
                                                // Found a hash object.
                                                else {
                                                    // Open the hash object.
                                                    if (!hashing) {
                                                        hashing = true;
                                                        result.push('{' + HASH + ':{');
                                                    }

                                                    // Add the key/value.
                                                    result.push(m[4], ':', m[6] ? m[6] : 'can.Mustache.get("' + m[5].replace(/"/g, '\\"') + '",' + CONTEXT_OBJ + ')');

                                                    // Close the hash if this was the last argument.
                                                    if (i == args.length - 1) {
                                                        result.push('}}');
                                                    }
                                                }
                                            }
                                            // Otherwise output a normal interpolation reference.
                                            else {
                                                result.push('can.Mustache.get("' +
                                                    // Include the reference name.
                                                    arg.replace(/"/g, '\\"') + '",' +
                                                    // Then the stack of context.
                                                    CONTEXT_OBJ +
                                                    // Flag as a helper method to aid performance, 
                                                    // if it is a known helper (anything with > 0 arguments).
                                                    (i == 0 && args.length > 1 ? ',true' : ',false') +
                                                    (i > 0 ? ',true' : ',false') +
                                                    ')');
                                            }
                                        }
                                    }

                                    // Create an option object for sections of code.
                                    mode && mode != 'else' && result.push(',[{_:function(){');
                                    switch (mode) {
                                        // Truthy section
                                        case '#':
                                            result.push('return ___v1ew.join("");}},{fn:function(' + CONTEXT + '){var ___v1ew = [];');
                                            break;
                                            // If/else section
                                            // Falsey section
                                        case 'else':
                                        case '^':
                                            result.push('return ___v1ew.join("");}},{inverse:function(' + CONTEXT + '){var ___v1ew = [];');
                                            break;
                                            // Not a section
                                        default:
                                            result.push(');');
                                            break;
                                    }

                                    // Return a raw result if there was a section, otherwise return the default string.
                                    result = result.join('');
                                    return mode ? {
                                        raw: result
                                    } : result;
                                }
                            }
                        ]
                    })
            });

        // Add in default scanner helpers first.
        // We could probably do this differently if we didn't 'break' on every match.
        var helpers = can.view.Scanner.prototype.helpers;
        for (var i = 0; i < helpers.length; i++) {
            Mustache.prototype.scanner.helpers.unshift(helpers[i]);
        };


        Mustache.txt = function(context, mode, name) {
            // Grab the extra arguments to pass to helpers.
            var args = Array.prototype.slice.call(arguments, 3),
                // Create a default `options` object to pass to the helper.
                options = can.extend.apply(can, [{
                            fn: function() {},
                            inverse: function() {}
                        }
                    ].concat(mode ? args.pop() : []));


            var extra = {};
            if (context.context) {
                extra = context.options;
                context = context.context;
            }

            // Check for a registered helper or a helper-like function.
            if (helper = (Mustache.getHelper(name, extra) || (can.isFunction(name) && !name.isComputed && {
                            fn: name
                        }))) {
                // Use the most recent context as `this` for the helper.
                var stack = context[STACKED] && context,
                    context = (stack && context[context.length - 1]) || context,
                    // Update the options with a function/inverse (the inner templates of a section).
                    opts = {
                        fn: can.proxy(options.fn, context),
                        inverse: can.proxy(options.inverse, context)
                    },
                    lastArg = args[args.length - 1];

                // Store the context stack in the options if one exists
                if (stack) {
                    opts.contexts = stack;
                }
                // Add the hash to `options` if one exists
                if (lastArg && lastArg[HASH]) {
                    opts.hash = args.pop()[HASH];
                }
                args.push(opts);

                // Call the helper.
                return helper.fn.apply(context, args) || '';
            }

            // if a compute, get the value
            if (can.isFunction(name) && name.isComputed) {
                name = name();
            }

            // An array of arguments to check for truthyness when evaluating sections.
            var validArgs = args.length ? args : [name],
                // Whether the arguments meet the condition of the section.
                valid = true,
                result = [],
                i, helper, argIsObserve, arg;
            // Validate the arguments based on the section mode.
            if (mode) {
                for (i = 0; i < validArgs.length; i++) {
                    arg = validArgs[i];
                    argIsObserve = typeof arg !== 'undefined' && isObserve(arg);
                    // Array-like objects are falsey if their length = 0.
                    if (isArrayLike(arg)) {
                        // Use .attr to trigger binding on empty lists returned from function
                        if (mode == '#') {
                            valid = valid && !! (argIsObserve ? arg.attr('length') : arg.length);
                        } else if (mode == '^') {
                            valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
                        }
                    }
                    // Otherwise just check if it is truthy or not.
                    else {
                        valid = mode == '#' ? valid && !! arg : mode == '^' ? valid && !arg : valid;
                    }
                }
            }

            // Otherwise interpolate like normal.
            if (valid) {
                switch (mode) {
                    // Truthy section.
                    case '#':
                        // Iterate over arrays
                        if (isArrayLike(name)) {
                            var isObserveList = isObserve(name);

                            // Add the reference to the list in the contexts.
                            for (i = 0; i < name.length; i++) {
                                result.push(options.fn.call(name[i], context) || '');

                                // Ensure that live update works on observable lists
                                isObserveList && name.attr('' + i);
                            }
                            return result.join('');
                        }
                        // Normal case.
                        else {
                            return options.fn.call(name || {}, context) || '';
                        }
                        break;
                        // Falsey section.
                    case '^':
                        return options.inverse.call(name || {}, context) || '';
                        break;
                    default:
                        // Add + '' to convert things like numbers to strings.
                        // This can cause issues if you are trying to
                        // eval on the length but this is the more
                        // common case.
                        return '' + (name !== undefined ? name : '');
                        break;
                }
            }

            return '';
        };


        Mustache.get = function(ref, contexts, isHelper, isArgument) {
            var options = contexts.options || {};
            contexts = contexts.context || contexts;
            // Assume the local object is the last context in the stack.
            var obj = contexts[contexts.length - 1],
                // Assume the parent context is the second to last context in the stack.
                context = contexts[contexts.length - 2],
                // Split the reference (like `a.b.c`) into an array of key names.
                names = ref.indexOf('\\.') == -1
                // Reference doesn't contain escaped periods
                ? ref.split('.')
                // Reference contains escaped periods (`a.b\c.foo` == `a["b.c"].foo)
                : (function() {
                    var names = [],
                        last = 0;
                    ref.replace(/(\\)?\./g, function($0, $1, index) {
                        if (!$1) {
                            names.push(ref.slice(last, index).replace(/\\\./g, '.'));
                            last = index + $0.length;
                        }
                    });
                    names.push(ref.slice(last).replace(/\\\./g, '.'));
                    return names;
                })(),
                namesLength = names.length,
                value, lastValue, name, i, j,
                // if we walk up and don't find a property, we default
                // to listening on an undefined property of the first
                // context that is an observe
                defaultObserve,
                defaultObserveName;

            // Handle `this` references for list iteration: {{.}} or {{this}}
            if (/^\.|this$/.test(ref)) {
                // If context isn't an object, then it was a value passed by a helper so use it as an override.
                if (!/^object|undefined$/.test(typeof context)) {
                    return context || '';
                }
                // Otherwise just return the closest object.
                else {
                    while (value = contexts.pop()) {
                        if (typeof value !== 'undefined') {
                            return value;
                        }
                    }
                    return '';
                }
            }
            // Handle object resolution (like `a.b.c`).
            else if (!isHelper) {
                // Reverse iterate through the contexts (last in, first out).
                for (i = contexts.length - 1; i >= 0; i--) {
                    // Check the context for the reference
                    value = contexts[i];

                    // Is the value a compute?
                    if (can.isFunction(value) && value.isComputed) {
                        value = value();
                    }

                    // Make sure the context isn't a failed object before diving into it.
                    if (typeof value !== 'undefined' && value !== null) {
                        var isHelper = Mustache.getHelper(ref, options);
                        for (j = 0; j < namesLength; j++) {
                            // Keep running up the tree while there are matches.
                            if (typeof value[names[j]] !== 'undefined' && value[names[j]] !== null) {
                                lastValue = value;
                                value = value[name = names[j]];
                            }
                            // if there's a name conflict between property and helper
                            // property wins
                            else if (isHelper) {
                                return ref;
                            }
                            // If it's undefined, still match if the parent is an Observe.
                            else if (isObserve(value)) {
                                defaultObserve = value;
                                defaultObserveName = names[j];
                                lastValue = value = undefined;
                                break;
                            } else {
                                lastValue = value = undefined;
                                break;
                            }
                        }
                    }

                    // Found a matched reference.
                    if (value !== undefined) {
                        return Mustache.resolve(value, lastValue, name, isArgument);
                    }
                }
            }

            if (defaultObserve &&
                // if there's not a helper by this name and no attribute with this name
                !(Mustache.getHelper(ref) &&
                    can.inArray(defaultObserveName, can.Observe.keys(defaultObserve)) === -1)) {
                return defaultObserve.compute(defaultObserveName);
            }
            // Support helpers without arguments, but only if there wasn't a matching data reference.
            // Helpers have priority over local function, see https://github.com/bitovi/canjs/issues/258
            if (value = Mustache.getHelper(ref, options)) {
                return ref;
            } else if (typeof obj !== 'undefined' && obj !== null && can.isFunction(obj[ref])) {
                // Support helper-like functions as anonymous helpers
                return obj[ref];
            }

            return '';
        };


        Mustache.resolve = function(value, lastValue, name, isArgument) {
            if (lastValue && can.isFunction(lastValue[name]) && isArgument) {
                if (lastValue[name].isComputed) {
                    return lastValue[name];
                }
                // Don't execute functions if they are parameters for a helper and are not a can.compute
                // Need to bind it to the original context so that that information doesn't get lost by the helper
                return function() {
                    return lastValue[name].apply(lastValue, arguments);
                };
            }
            // Support attributes on compute objects
            else if (lastValue && can.isFunction(lastValue) && lastValue.isComputed) {
                return lastValue()[name];
            }
            // Support functions stored in objects.
            else if (lastValue && can.isFunction(lastValue[name])) {
                return lastValue[name]();
            }
            // Invoke the length to ensure that Observe.List events fire.
            else if (isObserve(value) && isArrayLike(value) && value.attr('length')) {
                return value;
            }
            // Add support for observes
            else if (lastValue && isObserve(lastValue)) {
                return lastValue.compute(name);
            } else if (can.isFunction(value)) {
                return value();
            } else {
                return value;
            }
        };


        // ## Helpers
        // Helpers are functions that can be called from within a template.
        // These helpers differ from the scanner helpers in that they execute
        // at runtime instead of during compilation.
        // Custom helpers can be added via `can.Mustache.registerHelper`,
        // but there are also some built-in helpers included by default.
        // Most of the built-in helpers are little more than aliases to actions 
        // that the base version of Mustache simply implies based on the 
        // passed in object.
        // Built-in helpers:
        // * `data` - `data` is a special helper that is implemented via scanning helpers. 
        //		It hooks up the active element to the active data object: `<div {{data "key"}} />`
        // * `if` - Renders a truthy section: `{{#if var}} render {{/if}}`
        // * `unless` - Renders a falsey section: `{{#unless var}} render {{/unless}}`
        // * `each` - Renders an array: `{{#each array}} render {{this}} {{/each}}`
        // * `with` - Opens a context section: `{{#with var}} render {{/with}}`
        Mustache._helpers = {};

        Mustache.registerHelper = function(name, fn) {
            this._helpers[name] = {
                name: name,
                fn: fn
            };
        };


        Mustache.getHelper = function(name, options) {
            return options && options.helpers && options.helpers[name] && {
                fn: options.helpers[name]
            } || this._helpers[name]
            for (var i = 0, helper; helper = [i]; i++) {
                // Find the correct helper
                if (helper.name == name) {
                    return helper;
                }
            }
            return null;
        };


        Mustache.render = function(partial, context) {
            // Make sure the partial being passed in
            // isn't a variable like { partial: "foo.mustache" }
            if (!can.view.cached[partial] && context[partial]) {
                partial = context[partial];
            }

            // Call into `can.view.render` passing the
            // partial and context.
            return can.view.render(partial, context);
        };

        Mustache.renderPartial = function(partial, context, options) {
            return partial.render ? partial.render(context, options) :
                partial(context, options);
        };

        // The built-in Mustache helpers.
        can.each({
                // Implements the `if` built-in helper.

                'if': function(expr, options) {
                    if ( !! Mustache.resolve(expr)) {
                        return options.fn(options.contexts || this);
                    } else {
                        return options.inverse(options.contexts || this);
                    }
                },
                // Implements the `unless` built-in helper.

                'unless': function(expr, options) {
                    if (!Mustache.resolve(expr)) {
                        return options.fn(options.contexts || this);
                    }
                },

                // Implements the `each` built-in helper.

                'each': function(expr, options) {
                    expr = Mustache.resolve(expr);
                    if ( !! expr && isArrayLike(expr)) {
                        if (isObserve(expr) && expr.attr('length')) {
                            return can.view.lists && can.view.lists(expr, function(item) {
                                return options.fn(item);
                            });
                        } else {
                            var result = [];
                            for (var i = 0; i < expr.length; i++) {
                                result.push(options.fn(expr[i]));
                            }
                            return result.join('');
                        }
                    }
                },
                // Implements the `with` built-in helper.

                'with': function(expr, options) {
                    var ctx = expr;
                    expr = Mustache.resolve(expr);
                    if ( !! expr) {
                        return options.fn(ctx);
                    }
                }

            }, function(fn, name) {
                Mustache.registerHelper(name, fn);
            });

        // ## Registration
        // Registers Mustache with can.view.
        can.view.register({
                suffix: "mustache",

                contentType: "x-mustache-template",

                // Returns a `function` that renders the view.
                script: function(id, src) {
                    return "can.Mustache(function(_CONTEXT,_VIEW) { " + new Mustache({
                            text: src,
                            name: id
                        }).template.out + " })";
                },

                renderer: function(id, text) {
                    return Mustache({
                            text: text,
                            name: id
                        });
                }
            });

        return can;
    })(__m3, __m11, __m13, __m9, __m15);

    window['can'] = __m5;
})();
/*! seamless.js 2015-04-30 */

var NO_JQUERY={};!function(a,b,c){if(!("console"in a)){var d=a.console={};d.log=d.warn=d.error=d.debug=function(){}}b===NO_JQUERY&&(b={fn:{},extend:function(){for(var a=arguments[0],b=1,c=arguments.length;c>b;b++){var d=arguments[b];for(var e in d)a[e]=d[e]}return a}}),b.fn.pm=function(){return console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])"),this},b.pm=a.pm=function(a){e.send(a)},b.pm.bind=a.pm.bind=function(a,b,c,d,f){e.bind(a,b,c,d,f===!0)},b.pm.unbind=a.pm.unbind=function(a,b){e.unbind(a,b)},b.pm.origin=a.pm.origin=null,b.pm.poll=a.pm.poll=200;var e={send:function(a){var c=b.extend({},e.defaults,a),d=c.target;if(!c.target)return void console.warn("postmessage target window required");if(!c.type)return void console.warn("postmessage type required");var f={data:c.data,type:c.type};c.success&&(f.callback=e._callback(c.success)),c.error&&(f.errback=e._callback(c.error)),"postMessage"in d&&!c.hash?(e._bind(),d.postMessage(JSON.stringify(f),c.origin||"*")):(e.hash._bind(),e.hash.send(c,f))},bind:function(a,b,c,d,f){e._replyBind(a,b,c,d,f)},_replyBind:function(c,d,f,g,h){"postMessage"in a&&!g?e._bind():e.hash._bind();var i=e.data("listeners.postmessage");i||(i={},e.data("listeners.postmessage",i));var j=i[c];j||(j=[],i[c]=j),j.push({fn:d,callback:h,origin:f||b.pm.origin})},unbind:function(a,b){var c=e.data("listeners.postmessage");if(c)if(a)if(b){var d=c[a];if(d){for(var f=[],g=0,h=d.length;h>g;g++){var i=d[g];i.fn!==b&&f.push(i)}c[a]=f}}else delete c[a];else for(var g in c)delete c[g]},data:function(a,b){return b===c?e._data[a]:(e._data[a]=b,b)},_data:{},_CHARS:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),_random:function(){for(var a=[],b=0;32>b;b++)a[b]=e._CHARS[0|32*Math.random()];return a.join("")},_callback:function(a){var b=e.data("callbacks.postmessage");b||(b={},e.data("callbacks.postmessage",b));var c=e._random();return b[c]=a,c},_bind:function(){e.data("listening.postmessage")||(a.addEventListener?a.addEventListener("message",e._dispatch,!1):a.attachEvent&&a.attachEvent("onmessage",e._dispatch),e.data("listening.postmessage",1))},_dispatch:function(a){function b(b){c.callback&&e.send({target:a.source,data:b,type:c.callback})}try{var c=JSON.parse(a.data)}catch(d){return void console.warn("postmessage data invalid json: ",d)}if(!c.type)return void console.warn("postmessage message type required");var f=e.data("callbacks.postmessage")||{},g=f[c.type];if(g)g(c.data);else for(var h=e.data("listeners.postmessage")||{},i=h[c.type]||[],j=0,k=i.length;k>j;j++){var l=i[j];if(l.origin&&"*"!==l.origin&&a.origin!==l.origin){if(console.warn("postmessage message origin mismatch",a.origin,l.origin),c.errback){var m={message:"postmessage origin mismatch",origin:[a.origin,l.origin]};e.send({target:a.source,data:m,type:c.errback})}}else try{l.callback?l.fn(c.data,b,a):b(l.fn(c.data,a))}catch(d){if(!c.errback)throw d;e.send({target:a.source,data:d,type:c.errback})}}}};e.hash={send:function(b,c){var d=b.target,f=b.url;if(!f)return void console.warn("postmessage target window url is required");f=e.hash._url(f);var g,h=e.hash._url(a.location.href);if(a==d.parent)g="parent";else try{for(var i=0,j=parent.frames.length;j>i;i++){var k=parent.frames[i];if(k==a){g=i;break}}}catch(l){g=a.name}if(null==g)return void console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");var m={"x-requested-with":"postmessage",source:{name:g,url:h},postmessage:c},n="#x-postmessage-id="+e._random();d.location=f+n+encodeURIComponent(JSON.stringify(m))},_regex:/^\#x\-postmessage\-id\=(\w{32})/,_regex_len:"#x-postmessage-id=".length+32,_bind:function(){e.data("polling.postmessage")||(setInterval(function(){var b=""+a.location.hash,c=e.hash._regex.exec(b);if(c){var d=c[1];e.hash._last!==d&&(e.hash._last=d,e.hash._dispatch(b.substring(e.hash._regex_len)))}},b.pm.poll||200),e.data("polling.postmessage",1))},_dispatch:function(b){function c(a){f.callback&&e.send({target:i,data:a,type:f.callback,hash:!0,url:b.source.url})}if(b){try{if(b=JSON.parse(decodeURIComponent(b)),!("postmessage"===b["x-requested-with"]&&b.source&&null!=b.source.name&&b.source.url&&b.postmessage))return}catch(d){return}var f=b.postmessage,g=e.data("callbacks.postmessage")||{},h=g[f.type];if(h)h(f.data);else{var i;i="parent"===b.source.name?a.parent:a.frames[b.source.name];for(var j=e.data("listeners.postmessage")||{},k=j[f.type]||[],l=0,m=k.length;m>l;l++){var n=k[l];if(n.origin){var o=/https?\:\/\/[^\/]*/.exec(b.source.url)[0];if("*"!==n.origin&&o!==n.origin){if(console.warn("postmessage message origin mismatch",o,n.origin),f.errback){var p={message:"postmessage origin mismatch",origin:[o,n.origin]};e.send({target:i,data:p,type:f.errback,hash:!0,url:b.source.url})}continue}}try{n.callback?n.fn(f.data,c):c(n.fn(f.data))}catch(d){if(!f.errback)throw d;e.send({target:i,data:d,type:f.errback,hash:!0,url:b.source.url})}}}}},_url:function(a){return(""+a).replace(/#.*$/,"")}},b.extend(e,{defaults:{target:null,url:null,type:null,data:null,success:null,error:null,origin:"*",hash:!1}})}(this,"undefined"==typeof jQuery?NO_JQUERY:jQuery),"JSON"in window&&window.JSON||(JSON={}),function(){function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)g[c]=str(c,i)||"null";return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)d=rep[c],"string"==typeof d&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw new Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b,c,d){c.SeamlessBase={getParam:function(b,c){c=c||a.location.search;var d="[?&]"+b+"=([^&#]*)",e=new RegExp(d),f=e.exec(c);return null===f?"":decodeURIComponent(f[1].replace(/\+/g," "))},filterText:function(a){return a.replace(/[<>]/g,"")},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},setStyle:function(a,b){b.length>0&&(b="string"==typeof b?b:b.join(" "),b=c.SeamlessBase.filterText(b),a.styleSheet?a.styleSheet.cssText=b:c(a).html(b))},injectStyles:function(a){var d=c("style#injected-styles");if(d.length>0)c.SeamlessBase.setStyle(d[0],a);else{var e=c(b.createElement("style")).attr({type:"text/css",id:"injected-styles"});c.SeamlessBase.setStyle(e[0],a),c("head").append(e)}},injectAppendedStyles:function(a){var d=c(b.createElement("style")).attr({type:"text/css",id:"injected-styles"});c.SeamlessBase.setStyle(d[0],a),c("head").append(d)}}}(window,document,jQuery),function(a,b,c,d){c.SeamlessConnection=function(a,b){this.id=0,this.target=a,this.url=b,this.active=!1,this.queue=[]},c.SeamlessConnection.prototype.send=function(a){this.active&&this.target?(a=a||{},a.hasOwnProperty("data")||(a={data:a}),a.target=this.target,a.url=this.url,a.type=a.type||"seamless_data",a.data=a.data||{},a.data.__id=this.id,c.pm(a)):this.queue.push(a)},c.SeamlessConnection.prototype.receive=function(a,b){"function"==typeof a&&(b=a,a="seamless_data");var d=this;c.pm.bind(a,function(a,c){return a.__id&&a.__id===d.id?b(a,c):!1})},c.SeamlessConnection.prototype.setActive=function(a){if(this.active=a,this.queue.length>0){for(var b in this.queue)this.send(this.queue[b]);this.queue=[],this.queue.length=0}}}(window,document,jQuery),function(a,b,c,d){if(!c.hasOwnProperty("pm"))return void console.log("You must install the jQuery.pm module to use seamless.js.");c.pm.bind("seamless_noiframe",function(b){b.href=b.href.replace(/noiframe\=[^&?#]+/,""),a.location.replace(b.href)}),a.seamlessOpenFallback=function(b,c,d,e){e.preventDefault?(e.preventDefault(),e.stopPropagation()):e.returnValue=!1,a.open(b,"",["width="+c,"height="+d,"menubar=no","titlebar=no","toolbar=no","status=no","scrollbars=yes","chrome=yes"].join(","))};var e=[],f=!1,g="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),h=function(){for(var a=[],b=0;32>b;b++)a[b]=g[0|32*Math.random()];return a.join("")};c.pm.bind("seamless_ready",function(a,b){if(!f){f=!0;for(var c in e)e.hasOwnProperty(c)&&e[c].seamless_ready(a,b);f=!1}}),c.pm.bind("seamless_update",function(a,b){for(var c in e)if(e.hasOwnProperty(c)){var d=e[c];if(d.connection.id===a.__id)return d.seamless_update(a,b)}return a.height=0,a}),c.pm.bind("seamless_error",function(a,b){for(var c in e)e.hasOwnProperty(c)&&e[c].seamless_error(a,b)}),c.fn.seamless=function(f){var g={showLoadingIndicator:!0,loading:"Loading ...",spinner:"http://www.travistidwell.com/seamless.js/src/loader.gif",onConnect:null,styles:[],fallback:!0,fallbackParams:"",fallbackText:"",fallbackLinkText:"Click here",fallbackLinkAfter:" to open in a separate window.",fallbackStyles:["padding: 15px","border: 1px solid transparent","border-radius: 4px","color: #3a87ad","background-color: #d9edf7","border-color: #bce8f1"],fallbackLinkStyles:["display: inline-block","color: #333","border: 1px solid #ccc","background-color: #fff","padding: 5px 10px","text-decoration: none","font-size: 12px","line-height: 1.5","border-radius: 6px","font-weight: 400","cursor: pointer","-webkit-user-select: none","-moz-user-select: none","-ms-user-select: none","user-select: none"],fallbackLinkHoverStyles:["background-color:#ebebeb","border-color:#adadad"],fallbackWindowWidth:960,fallbackWindowHeight:800};f=f||{};for(var i in g)f.hasOwnProperty(i)||(f[i]=g[i]);var j=c(this).eq(0);j.seamless_options=f,e.push(j);var k=(j.attr("name")||j.attr("id"),j.attr("src"));if(j.connection=new c.SeamlessConnection(j[0].contentWindow,k),j.send=function(a){j.connection.send.call(j.connection,a)},j.receive=function(a,b){j.connection.receive.call(j.connection,a,b)},j.attr({scrolling:"no",seamless:"seamless",width:"100%",height:"0px",marginheight:"0",marginwidth:"0",frameborder:"0",horizontalscrolling:"no",verticalscrolling:"no"}).css({border:"none",overflowY:"hidden"}),f.showLoadingIndicator){var l=c(b.createElement("div"));l.css({background:"url("+f.spinner+") no-repeat 10px 13px",padding:"10px 10px 10px 60px",width:"100%"}),l.append(f.loading),j.before(l)}var m=!0,n=function(){m=!1,l!==d&&l.remove()};if(f.fallback){f.fallbackParams&&(k+=-1===k.search(/\?/)?"?":"&",k+=f.fallbackParams);var o=c("#seamless-fallback-styles");if(!o.length){var p=function(a){return c.SeamlessBase.filterText(a.join(";"))};o=c(b.createElement("style")).attr({id:"seamless-fallback-styles",type:"text/css"}),c.SeamlessBase.setStyle(o[0],".seamless-fallback.seamless-styles {"+p(f.fallbackStyles)+"}.seamless-fallback em { padding: 5px; }.seamless-fallback-link.seamless-styles {"+p(f.fallbackLinkStyles)+"}.seamless-fallback-link.seamless-styles:hover {"+p(f.fallbackLinkHoverStyles)+"}"),j.before(o)}var q=['"'+k+'"',f.fallbackWindowWidth,f.fallbackWindowHeight],r=c(b.createElement("a")).attr({"class":"seamless-fallback-link",href:"#",onclick:"seamlessOpenFallback("+q.join(",")+", event)"}),s=c(b.createElement("div")).attr({"class":"seamless-fallback"});s.append(c(b.createElement("em"))),j.after(s);var t=function(a,b,d,e){e?(s.addClass("seamless-styles"),r.addClass("seamless-styles")):(s.removeClass("seamless-styles"),r.removeClass("seamless-styles")),s.find("em").text(c.SeamlessBase.filterText(a)+" ").append(r.text(c.SeamlessBase.filterText(b))).append(c.SeamlessBase.filterText(d))};f.fallbackText&&t(f.fallbackText,f.fallbackLinkText,f.fallbackLinkAfter,!1),c(a).error(function(){var a="An error has been detected on this page, ";a+="which may cause problems with the operation of this application.",t(a,f.fallbackLinkText,f.fallbackLinkAfter,!0)}),setTimeout(function(){m&&(n(),t("An error has been detected on this page.",f.fallbackLinkText,f.fallbackLinkAfter,!0))},3e4)}return j.seamless_ready=function(a,b){j.connection.id||(j.connection.id=h());var d={id:j.connection.id,styles:j.seamless_options.styles};j.connection.target||(j.connection.target=j[0].contentWindow),c.pm({type:"seamless_connect",target:j.connection.target,url:j.connection.url,data:d,success:function(a){j.seamless_options.onConnect&&j.seamless_options.onConnect(a)}}),j.trigger("connected")},j.seamless_update=function(a,b){return m&&(n(),j.connection.setActive(!0)),a.height>=0&&j.height(a.height).attr("height",a.height+"px"),a},j.seamless_error=function(a,b){n(),j.hide(),t(a.msg,a.linkText,a.afterText,!0)},j}}(window,document,jQuery);
/* Copyright (c) 2010-2013 Marcus Westin */

this.JSON||(this.JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)r=rep[n],typeof r=="string"&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),"use strict",function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.store=t()}(this,function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=window,n=t.document,r="localStorage",i="script",s;e.disabled=!1,e.version="1.3.17",e.set=function(e,t){},e.get=function(e,t){},e.has=function(t){return e.get(t)!==undefined},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=e.get(t,n);r(i),e.set(t,i)},e.getAll=function(){},e.forEach=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t,n){var r=e.deserialize(s.getItem(t));return r===undefined?n:r},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};return e.forEach(function(e,n){t[e]=n}),t},e.forEach=function(t){for(var n=0;n<s.length;n++){var r=s.key(n);t(r,e.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),h=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n,r){n=h(n);var i=e.deserialize(t.getAttribute(n));return i===undefined?r:i}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);while(t.length)e.removeAttribute(t[0].name);e.save(r)}),e.getAll=function(t){var n={};return e.forEach(function(e,t){n[e]=t}),n},e.forEach=l(function(t,n){var r=t.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,e.deserialize(t.getAttribute(s.name)))})}try{var p="__storejs__";e.set(p,p),e.get(p)!=p&&(e.disabled=!0),e.remove(p)}catch(f){e.disabled=!0}return e.enabled=!e.disabled,e})
;
// ============================================
//
// SPARK MARKETPLACE JS LIB
// MAINTAINED BY MARKETPLACE TEAM
//
// ============================================


(function( Spark, $, undefined ){

    Spark.marketplace = function(afc, tenant, user, session, secure_session, coppa, shop_url, env, cs_member_id) {

        // Select our cart
        this.cart = $('.js-marketplace-cart');
        // URL endpoints
        var baseMkpUrl, baseAcgUrl;
        if (env == 'production') {
            baseMkpUrl = 'https://mkp-be-prod.spark.autodesk.com/api/v1';
            baseAcgUrl = 'https://api.acg.autodesk.com/api/v2';
        }else{ // Staging and Alpha use MKP's Beta
            baseMkpUrl = 'https://mkp-be-beta.spark.autodesk.com/api/v1';
            baseAcgUrl = 'https://beta-api.acg.autodesk.com/api/v2';
        }
        this.urls = {
            session: baseAcgUrl + '/session',
            carts: baseMkpUrl + '/carts',
            cartoverview: baseMkpUrl + '/carts/management',
            managementUrl: baseMkpUrl + '/carts/managementUrl',
            carttransfer: baseMkpUrl + '/carts/transfer',
            checkouturl: baseMkpUrl + '/carts/checkoutUrl',
            pcburl: baseMkpUrl + '/carts/pcb',
            asseturl: baseMkpUrl + '/assets'
        }

        // Set class vars
        var self = this;
        this.tenant = tenant;
        this.afc = afc;
        this.user = user; // anonymous = false
        this.session = session;
        this.secure_session = secure_session;
        this.coppa = coppa;
        this.cs_member_id = cs_member_id;
        this.iframe_url = false;
        this.iframe_child = false;
        this.shop_url = shop_url;
        this.cartCount = 0;

        // Get a session if no session
        if(session == false){
            this.getSession(self.getCart);
        }else{
            this.getCart(this);
        }

        // Store the session locally if user is not logged in
        if(!this.user){
            store.set('sparkmarketplace_anonymous_session', this.session)
        }

        // Check if we have a session, if so transfer it to new user
        var guest_session = store.get('sparkmarketplace_anonymous_session');

        if(guest_session && guest_session != this.session){
            $.ajax(self.urls.carttransfer, {
                method: 'POST',
                headers: {
                    'X-Session': this.session,
                    'X-Tenant': this.tenant
                },
                data: {
                    'guest_session': guest_session
                },
                success: function (data) {
                    // Delete stored session
                    store.remove('sparkmarketplace_anonymous_session');
                    // Check cart
                    self.getCart(self);
                },
                error: function (err) {
                    console.log(err);
                    var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                    self.cart.trigger(e);
                }
            });
        }

        // Return our jQuery object so we can listen to its events
        return $.extend(this.cart, {
            addToCart: function(product_id, quantity, product_type, analytics){ self.addToCart(product_id, quantity, product_type, analytics) },
            showCart: function(iframe_target){ self.showCart(iframe_target) },
            getPCBPrice: function(sqin, board_type_id, ref, completeHandle){ self.getPCBPrice(sqin, board_type_id, ref, completeHandle) },
            addToCartPCB: function(board_id, name, quantity, thumb_url, sqin, board_type_id, check, analytics){ self.addToCartPCB(board_id, name, quantity, thumb_url, sqin, board_type_id, check, analytics) },
            getPrice: function(sku, ref, completeHandle){ self.getPrice(sku, ref, completeHandle) }
        });
    }

    Spark.marketplace.prototype.getSession = function(responseFn){
        var self = this;

        $.ajax(self.urls.session, {
            method: 'GET',
            headers: {
                'X-AFC': this.afc
            },
            success: function (data) {
                self.session = data.SESSION;
                responseFn(self);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.getCart = function(ref){
        var self = ref;

        $.ajax(self.urls.cartoverview, {
            method: 'GET',
            headers: {
                'X-Session': ref.session,
                'X-Tenant': ref.tenant
            },
            success: function (data) {
                var result = $.parseJSON(data);
                if(result.line_items){
                    self.updateCartCount(self.cleanCountItems(result.line_items));
                }
                var e = jQuery.Event( 'spark:marketplace:loaded' );
                self.cart.trigger(e);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.addToCart = function(product_id, quantity, product_type, analytics){
        var self = this;

        // Setting default
        quantity = typeof quantity !== 'undefined' ?  quantity : 1;
        product_type = typeof product_type !== 'undefined' ?  product_type : 'PHYSICAL';

        // Fire event
        var e = jQuery.Event( 'spark:marketplace:loading' );
        this.cart.trigger(e);

        console.log('adding to cart item: ' + product_id);

        $.ajax(self.urls.carts, {
            method: 'PUT',
            headers: {
                'X-Session': this.session,
                'X-Tenant': this.tenant
            },
            data: {
                'product_id': product_id,
                'product_type': product_type,
                'quantity': quantity,
                'analytics': JSON.stringify(analytics)
            },
            success: function (data) {
                var result = $.parseJSON(data);
                self.updateCartCount(self.cleanCountItems(result.cart.line_items));

                var e = jQuery.Event( 'spark:marketplace:new' );
                self.cart.trigger(e);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.addToCartPCB = function(board_id, name, quantity, thumb_url, sqin, board_type_id, check, analytics){
        var self = this;

        // Setting default
        quantity = typeof quantity !== 'undefined' ?  quantity : 1;

        var dataObj = {
            'thumbnail_url': thumb_url,
            'name': name
        }
        var pcb_item_data = {
            'sqin': sqin,
            'board_type_id': board_type_id,
            'board_id': board_id
        }

        // Fire event
        var e = jQuery.Event( 'spark:marketplace:loading' );
        this.cart.trigger(e);

        $.ajax(self.urls.pcburl, {
            method: 'PUT',
            headers: {
                'X-Session': this.session,
                'X-Tenant': this.tenant
            },
            data: {
                'quantity': quantity,
                'check': check,
                'data': JSON.stringify(dataObj),
                'pcb_item_data': JSON.stringify(pcb_item_data),
                'analytics': JSON.stringify(analytics)
            },
            success: function (data) {
                var result = $.parseJSON(data);
                self.updateCartCount(self.cleanCountItems(result.cart.line_items));

                var e = jQuery.Event( 'spark:marketplace:new' );
                self.cart.trigger(e);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.cleanCountItems = function(cartItems){

        var counter = 0;

        $(cartItems).each(function(i,v){
            if(v["product_type"] && v["product_type"] != "SHIPPING"){
                counter += v["quantity"];
            }
        });

        return counter;
    }

    Spark.marketplace.prototype.updateCartCount = function(number_of_cart_items){

        this.cartCount = number_of_cart_items;

        var e = jQuery.Event( 'spark:marketplace:updated', {'count' : number_of_cart_items} );
        this.cart.trigger(e);
    }

    Spark.marketplace.prototype.showCart = function(iframe_target){
        this.iframe = $(iframe_target);
        this.getiframeUrl();
    }

    Spark.marketplace.prototype.getiframeUrl = function(){
        var self = this;

        var header = {
            'X-Session': this.session,
            'X-Tenant': this.tenant
        }
        if(this.secure_session){
            header['X-Secure-Session'] = this.secure_session;
        }

        $.ajax(self.urls.managementUrl, {
            method: 'GET',
            headers: header,
            success: function (data) {
                self.iframe_url = data;
                self.setiframe(data);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.setiframe = function(iframe_url){
        var self = this;

        this.iframe.attr('src', iframe_url);


        this.iframe_child = $(this.iframe).seamless({
            'loading': 'Loading shopping cart...',
            'spinner': ''
        });

        if(this.user){
            this.iframe_child.send({
                message: 'sparkMkp_login',
                csMemberId: this.cs_member_id,
                coppaAllowed: this.coppa
            });
        }else{
            this.iframe_child.send({
                message: 'sparkMkp_logout'
            });
        }

        this.iframe_child.receive(function (data) {
            console.log(data);
            if (data.type) {
                switch (data.type) {
                    case 'sparkMkp_updateCartCount':
                        console.log('Now there are ' + data.numberOfItems + ' items in the cart');
                        self.updateCartCount(data.numberOfItems);
                        break;
                    case 'sparkMkp_editingShippingAddress':
                        console.log('user is editing shipping address');
                        break;
                    case 'sparkMkp_login':
                        console.log('User needs to login! He/She is logged out and probably clicked something that needs a logged in user, like edit shipping address');
                        signin.construct_box();
                        break;
                    case 'sparkMkp_goToShopping':
                        window.location = self.shop_url;
                        break;
                }
            }
        });

    }

    Spark.marketplace.prototype.getPCBPrice = function(sqin, board_type_id, ref, completeHandle){
        var self = this;

        $.ajax(self.urls.pcburl, {
            method: 'GET',
            dataType: 'json',
            headers: {
                'X-Tenant': this.tenant
            },
            data: {
                'sqin': sqin,
                'board_type_id': board_type_id
            },
            success: function (data) {
                completeHandle(ref, data['price']);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }

    Spark.marketplace.prototype.getPrice = function(sku, ref, completeHandle){
        var self = this;

        $.ajax( (self.urls.asseturl + '/' + sku), {
            method: 'GET',
            dataType: 'json',
            headers: {
                'X-Session': this.session,
                'X-Tenant': this.tenant
            },
            success: function (data) {
                completeHandle(ref, data);
            },
            error: function (err) {
                console.log(err);
                var e = jQuery.Event( 'spark:marketplace:error', {err: err} );
                self.cart.trigger(e);
            }
        });
    }


}( window['Spark'] = window['Spark'] || {}, jQuery ));
/*
* Unobtrusive autocomplete
*
* To use it, you just have to include the HTML attribute autocomplete
* with the autocomplete URL as the value
*
*   Example:
*       <input type="text" data-autocomplete="/url/to/autocomplete">
*
* Optionally, you can use a jQuery selector to specify a field that can
* be updated with the element id whenever you find a matching value
*
*   Example:
*       <input type="text" data-autocomplete="/url/to/autocomplete" data-id-element="#id_field">
*/


(function(jQuery)
{
  var self = null;
  jQuery.fn.railsAutocomplete = function() {
    var handler = function() {
      if (!this.railsAutoCompleter) {
        this.railsAutoCompleter = new jQuery.railsAutocomplete(this);
      }
    };
    if (jQuery.fn.on !== undefined) {
      return jQuery(document).on('focus',this.selector,handler);
    }
    else {
      return this.live('focus',handler);
    }
  };

  jQuery.railsAutocomplete = function (e) {
    _e = e;
    this.init(_e);
  };

  jQuery.railsAutocomplete.fn = jQuery.railsAutocomplete.prototype = {
    railsAutocomplete: '0.0.1'
  };

  jQuery.railsAutocomplete.fn.extend = jQuery.railsAutocomplete.extend = jQuery.extend;
  jQuery.railsAutocomplete.fn.extend({
    init: function(e) {
      e.delimiter = jQuery(e).attr('data-delimiter') || null;
      e.min_length = jQuery(e).attr('min-length') || 2;
      e.append_to = jQuery(e).attr('data-append-to') || null;
      function split( val ) {
        return val.split( e.delimiter );
      }
      function extractLast( term ) {
        return split( term ).pop().replace(/^\s+/,"");
      }

      jQuery(e).autocomplete({
        appendTo: e.append_to,
        source: function( request, response ) {
          params = {term: extractLast( request.term )}
          if (jQuery(e).attr('data-autocomplete-fields')) {
              jQuery.each(jQuery.parseJSON(jQuery(e).attr('data-autocomplete-fields')), function(field, selector) {
              params[field] = jQuery(selector).val();
            });
          }
          jQuery.getJSON( jQuery(e).attr('data-autocomplete'), params, function() {
            if(arguments[0].length == 0) {
              arguments[0] = []
              arguments[0][0] = { id: "", label: "no existing match" }
            }
            jQuery(arguments[0]).each(function(i, el) {
              var obj = {};
              obj[el.id] = el;
              jQuery(e).data(obj);
            });
            response.apply(null, arguments);
          });
        },
        change: function( event, ui ) {
            if(!jQuery(this).is('[data-id-element]') ||
                    jQuery(jQuery(this).attr('data-id-element')).val() == "") {
        	  	return;
        	  }
            jQuery(jQuery(this).attr('data-id-element')).val(ui.item ? ui.item.id : "");
            
            if (jQuery(this).attr('data-update-elements')) {
                var update_elements = jQuery.parseJSON(jQuery(this).attr("data-update-elements"));
                var data = ui.item ? jQuery(this).data(ui.item.id.toString()) : {};
                if(update_elements && jQuery(update_elements['id']).val() == "") {
                	return;
                }
                for (var key in update_elements) {
                    element = jQuery(update_elements[key]);
                    if (element.is(':checkbox')) {
                        if (data[key] != null) {
                            element.prop('checked', data[key]);
                        }
                    } else {
                        element.val(ui.item ? data[key] : "");
                    }
                }
            }
        },
        search: function() {
          // custom minLength
          var term = extractLast( this.value );
          if ( term.length < e.min_length ) {
            return false;
          }
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          if (e.delimiter != null) {
            terms.push( "" );
            this.value = terms.join( e.delimiter );
          } else {
            this.value = terms.join("");
            if (jQuery(this).attr('data-id-element')) {
              jQuery(jQuery(this).attr('data-id-element')).val(ui.item.id);
            }
            if (jQuery(this).attr('data-update-elements')) {
              var data = jQuery(this).data(ui.item.id.toString());
              var update_elements = jQuery.parseJSON(jQuery(this).attr("data-update-elements"));
              for (var key in update_elements) {
                  element = jQuery(update_elements[key]);
                  if (element.is(':checkbox')) {
                      if (data[key] != null) {
                          element.prop('checked', data[key]);
                      }
                  } else {
                      element.val(data[key]);
                  }
              }
            }
          }
          var remember_string = this.value;
          jQuery(this).bind('keyup.clearId', function(){
            if(jQuery.trim(jQuery(this).val()) != jQuery.trim(remember_string)){
              jQuery(jQuery(this).attr('data-id-element')).val("");
              jQuery(this).unbind('keyup.clearId');
            }
          });
          jQuery(e).trigger('railsAutocomplete.select', ui);
          return false;
        }
      });
    }
  });

  jQuery(document).ready(function(){
    jQuery('input[data-autocomplete]').railsAutocomplete();
  });
})(jQuery);
/*
 * -------------------------------------------------
 * CIRCUITS.IO CIRCUITS JS MANIFEST
 * -------------------------------------------------
 * USED FOR COMPILING CIRCUITS LIBS
 *
 * THESE LIBS ARE USED BY CIRCUIT EDITOR AND MAINSITE
 *
 */

// JQUERY AND PLUGINS
















// UTILS






// TEMPLATE ENGINES


// MARKETPLACE




// GEMS

;
(function( siteGui, $, undefined )
{
    siteGui.tags = function() {
    	$('.tagsinput').importTags('');
	    $('.tagsinput').tagsInput({
			'autocomplete_url':$('.tagsinput').data("autocomplete"),
			'defaultText':'+',
			'height':'20px',
			'width':'686px'
		});
    }

}( window['siteGui'] = window['siteGui'] || {}, jQuery ));
(function( siteGui, $, undefined )
{
    siteGui.instant_search = function() {
    	$(".search-query-dashboard").keyup(function(){
	        var filter = $(this).val(), count = 0;
	        $(".dashboard-list li").each(function(){
	            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
	                $(this).hide();
	            } else {
	                $(this).show();
	                count++;
	            }
	        });
	        $(".dashboard-list").each(function(){
				if($(this).find("li:visible").length === 0){
					$(this).prev("h4").hide();
				}else{
					$(this).prev("h4").show();
				}
	        });
	        if(count === 0){
				$(".no_matches_found").show();
	        }else{
				$(".no_matches_found").hide();
	        }
	    });
    }

}( window['siteGui'] = window['siteGui'] || {}, jQuery ));
(function( siteGui, $, undefined )
{
    siteGui.pageless = function() {
    	if($('.load_more').length){
			var uC = $('.load_more').first().data("urlconstructor");
			$('.load_more').pagination({
				dataSelector: "ref",
				urlConstructor: uC,
				startPage: 1,
				loadingText: "<div class='load_more_loading'>Loading</div>",
				loadingImage: 'https://s3-us-west-1.amazonaws.com/123d-circuits-assets/spinner_standard_white.gif'
			});
		}
    }

}( window['siteGui'] = window['siteGui'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.pjaxc = function(sidebar) {
        var self = this;

        self.pjaxloading = false;

        // PJAX EVENTS
        $.pjax.defaults['scrollTo'] = 0;
        $.pjax.defaults.timeout = 2000;

        $(document).pjax(
            '.js-pjax-link',
            '.js-pjax-container'
        );

        $(document).on('pjax:send', function(xhr, options) {
            
            // Loading animation
            self.pjaxloading = true;
            window.setTimeout(function(){
                // This debouncer makes sure no flashing loading occures
                if(self.pjaxloading){
                    // Close sidebar
                    sidebar.side_close();
                    cSite.spinner($('.js-pjax-container'));
                }
            }, 750);
        });

        $(document).on('pjax:complete', function(xhr, options) {
            self.pjaxloading = false;
        });

        $(document).on('pjax:end', function(xhr, options) {
            if(ga){
                ga('set', 'location', window.location.href);
                ga('send', 'pageview');
            }
        });

    }

    

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    // CJAX is like PJAX but without history or url support, just inline ajax wrapper
    // gets url using ajax and puts it inside js-cjax-target container
    cSite.cjax = function() {
        var self = this;
        
        self.loading = false;

        // EVENTS
        $('body').on('click', '.js-cjax-link', function(e){
            self.fetch($(this));
            e.preventDefault();
        });

    }

    cSite.cjax.prototype.fetch = function(ref) {
        var self = this;
        var link = ref.data('cjaxlink');

        self.add_loading();
        self.remove_all_active();
        self.set_active(link);

        $.ajax({
            url: link
        }).done(function(data) {
            self.loading = false;

            $('.js-cjax-target').html(data);
            $('html, body').scrollTop($(".js-cjax-target").offset().top);
        });
    }

    cSite.cjax.prototype.add_loading = function() {
        var self = this;

        // Loading animation
        self.loading = true;
        window.setTimeout(function(){
            // This debouncer makes sure no flashing loading occures
            if(self.loading){
                cSite.spinner($('.js-cjax-target'));
            }
        }, 250);
    }

    cSite.cjax.prototype.remove_all_active = function() {
        $.each($('.js-cjax-link'), function(i,v){
            $('.js-sitemenu_sub__center__item__link', this).removeClass('active');
        });
    }

    cSite.cjax.prototype.set_active = function(target) {
        $.each($('.js-cjax-link'), function(i,v){
            var link = $(v).data('cjaxlink');
            if(target == link){
                $('.js-sitemenu_sub__center__item__link', this).addClass('active');
            }
        });
    }

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function($, window, undefined) {

    $.fn.tipsy = function(options) {

        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        if(!$('.tipsy').length){
            // create a single instance
            $('body').append('<div class="tipsy hide" role="tooltip"><div class="tipsy-arrow"></div><div class="tipsy-inner"></div></div>');
        }

        function get(element, options) {

            // set title
            if(!options.text){
                if($(element).attr('title')){
                    $(element).attr('original-title', $(element).attr('title'));
                    $(element).attr('title', '');
                }
                var toolTipText = $(element).attr('original-title');
            }else{
                var toolTipText = options.text;
            }
            $('.tipsy').find('.tipsy-inner').html(toolTipText);
            

            // set position
            var pos = $.extend({}, $(element).offset());

            if ($(element).parents('svg').size() > 0) {

                pos = $.extend(pos,  $(element)[0].getBBox());
                if(options.zoom_stuff){
                    pos.width = pos.width*options.zoom_stuff["viewS"];
                    pos.height = pos.height*options.zoom_stuff["viewS"];
                }
            } else {
                pos = $.extend(pos,{
                    width: $(element)[0].offsetWidth || 0,
                    height: $(element)[0].offsetHeight || 0
                });
            }

            var tp;
            var actualWidth = $('.tipsy')[0].offsetWidth;
            var actualHeight = $('.tipsy')[0].offsetHeight;

            switch (options.gravity.charAt(0)) {
                case 'n':
                    tp = {top: pos.top + pos.height + options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                    break;
                case 's':
                    tp = {top: pos.top - actualHeight - options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                    break;
                case 'e':
                    tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - options.offset};
                    break;
                case 'w':
                    tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + options.offset};
                    break;
                default:
                    break;
            }

            $('.tipsy').css(tp).removeClass('tipsy-n tipsy-s tipsy-e tipsy-w').addClass('tipsy-' + options.gravity);
            $('.tipsy').find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + options.gravity.charAt(0);
            
            return $('.tipsy');
        }

        function enter() {
            var tipsy = get(this, options);
            tipsy.show();
        }

        function leave() {
            $('.tipsy').hide();
        }

        $(this).data('tipsy_active', true);
        $(this).on('mouseenter mouseover', false, enter);
        $(this).on('mouseleave mouseout remove', false, leave);

        return this;

    };

    $.fn.tipsy.defaults = {
        gravity: 'n',
        offset: 0,
        text: false,
        zoom_stuff: false
    };

    $.fn.removeTipsy = function(){        
        if ($(this).data('tipsy_active')) {
            $('.tipsy').hide();
            $(this).unbind('mouseenter mouseover');
            $(this).unbind('mouseleave mouseout remove');
            $(this).attr('title', $(this).attr('original-title'));
            $(this).attr('original-title', '');
            $(this).data('tipsy_active', false);
        }
    };

})(jQuery, window);
(function( cSite, $, undefined ){

	cSite.pagination = function() {
		var self = this;
		self.loading_div = '<div class="grid__item pagination__loading js-pagination__loading"></div>';

		// EVENTS
		$(document).on('pjax:end', function(xhr, options) {
			self.check();
		});

		self.check();
	}

	cSite.pagination.prototype.reset = function(){
		$('.js-pagination').data('ref', this);
		$('.js-pagination').data('busy', false);
		$('.js-pagination').data('end', false);
		$('.js-pagination').data('currentPage', 1);
	}

	cSite.pagination.prototype.check = function(){
		// remove previous scroll listener
		$(document).off('scroll', this.scrollcheck);
		// reset vars
		this.reset();
		// check for pagination request
		if($('.js-pagination').length){
			$(document).on('scroll', this.scrollcheck);
		}
	}

	cSite.pagination.prototype.get = function(){
		var self = this;

		// Show loading
		self.showLoading();

		// Count page + 1
		$('.js-pagination').data('currentPage', $('.js-pagination').data('currentPage')+1);

		// AJAX call
		$.ajax({
			url: $('.js-pagination').data('url'),
			type: "GET",
			data: {
				'page': $('.js-pagination').data('currentPage')
			},
			beforeSend: function (request){
                request.setRequestHeader("X-PAGINATION", true);
            },
            error: function(err){
            	$('.js-pagination').data('end', true);
            },
			success: function(data, status){
				$('.js-pagination').before(data);
				$('.js-pagination').data('busy', false);
				$(document).triggerHandler('pagination:success');
			},
			complete: function(){
				self.hideLoading();
			}
		});
	}

	cSite.pagination.prototype.scrollcheck = function(){
		var distanceToBottom = $(document).height() - $(window).scrollTop() - $(window).height();
		if(!$('.js-pagination').data('end') && !$('.js-pagination').data('busy') && (distanceToBottom < 450)) {
			$('.js-pagination').data('busy', true);
			$('.js-pagination').data('ref').get();
		}
	}

	cSite.pagination.prototype.showLoading = function(){
		$('.js-pagination').before(this.loading_div);
        cSite.spinner($('.js-pagination__loading'));
	}

	cSite.pagination.prototype.hideLoading = function(){
		$('.js-pagination__loading').remove();
	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

	cSite.sitemenu = function() {
		var self = this;

		// EVENTS
		$(document).on('pjax:end', function(xhr, options) {
			self.check_if_sticky();
		});

		self.check_if_sticky();
	}

	cSite.sitemenu.prototype.check_if_sticky = function(){
		if($('.js-main-sitemenu-is-sticky').length){
			$('.js-sitemenu').first().addClass('sitemenu--sticky');
		}else{
			$('.js-sitemenu').removeClass('sitemenu--sticky');
		}
	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

	cSite.sitemenu_search = function() {
		var self = this;

		// EVENTS
		$('body').on('click', '.js-sitemenu__search__trigger', function(){
			self.do_search();
		});
		$('body').on('focusin', '.js-sitemenu__search__input', function(){
			$('.js-sitemenu__search').addClass('active');
		});
		$('body').on('focusout', '.js-sitemenu__search__input', function(){
			if($(this).val().length == 0){
				$('.js-sitemenu__search').removeClass('active');	
			}
		});
		$('body').on('keyup', '.js-sitemenu__search__input', function(e){
			if(e.keyCode == 13){
				self.do_search();
			}
		});
	}

	cSite.sitemenu_search.prototype.do_search = function(){
		var what = $('.js-sitemenu__search__input').val();
		window.location.href = "/search/?q="+what;
	}

	


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.sitemenu_sub = function() {
        var self = this;

        self.open = false;
        self.moved_submenu = false;
        
        // EVENTS
        $('body').on('click', '.js-toggle-submenu', function(event){
            self.toggle_dropdown();
            event.preventDefault();
        });

        $(document).on('pjax:end', function(xhr, options) {
            // Reattach submenu listeners if submenu
            self.check_for_submenu();
        });

        // Check for submenus and move then to out of the slide area
        self.check_for_submenu();
    }

    cSite.sitemenu_sub.prototype.check_for_submenu = function(){
        if(this.moved_submenu){
            this.moved_submenu.remove();
            this.moved_submenu = false;
        }
        if($('.js-sitemenu_sub').length){
            // we need to move the collapsed menu out of the sliding context to have it being sticky on its own
            this.moved_submenu = $('.js-sitemenu_collapsed').detach().prependTo('body');
            this.moved_submenu.addClass('js-sitemenu_collapsed--moved');
            this.add_sticky_listeners();
        }
    }

    cSite.sitemenu_sub.prototype.add_sticky_listeners = function(){
        var self = this;

        // First destroy all instances, there can only be 1 sticky menu
        Waypoint.destroyAll();

        // COLLAPSED STICKY MENU
        self.waypoint = new Waypoint({
            element: $('.js-sitemenu_sub'),
            handler: function(direction) {
                if(direction == 'up'){
                    self.hide_collapsed();
                }else{
                    self.show_collapsed();
                }
            }
        });

    }
    

    // COLLAPSED STICKY MENU
    cSite.sitemenu_sub.prototype.show_collapsed = function(){
        $('.js-sitemenu_collapsed').show();
    }

    cSite.sitemenu_sub.prototype.hide_collapsed = function(){
        $('.js-sitemenu_collapsed').hide();

    }
    
    // DROPDOWN MOBILE
    cSite.sitemenu_sub.prototype.toggle_dropdown = function(){
        if($('.sitemenu_sub__center__list--mobile').is(':hidden')){
            this.show_dropdown();
        }else{
            this.hide_dropdown();
        }
    }
    cSite.sitemenu_sub.prototype.show_dropdown = function(){
        var self = this;    
        $('.sitemenu_sub__center__list--mobile').show();

        // close on hover site
        $('body').on('click', '.js-container-site', function(){
            self.hide_dropdown();
        });
    }

    cSite.sitemenu_sub.prototype.hide_dropdown = function(){
        $('.sitemenu_sub__center__list--mobile').hide();
        
        // remove listener
        $('body').off('click', '.js-container-site');    
    }


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){
    cSite.sidebar = function(left, right) {
        var self = this;

        self.hide_all();

        // EVENTS
        $('body').on('click', '.js-sidebar--left__trigger', function(event){
            $this = $(this);
//            cSite.analytics.prototype.track('show main menu', {'load origin': $this.data('origin'), 'click type': $this.data('click-type') || ''});
            self.side_open('left');
        });

        $('body').on('click', '.js-sidebar--right__trigger', function(){
            self.side_open('right');
        });

        $(document).on('pjax:end', function(xhr, options) {
            self.clearActiveItems('left');
            self.setActiveItems('left');
        });
         $(document).on('pjax:complete', function(xhr, options) {
            self.side_close();
        });
        
    }

    cSite.sidebar.prototype.hide_all = function(direction){
        $('.js-sidebar--left').hide();
        $('.js-sidebar--right').hide();
    }

    cSite.sidebar.prototype.side_open = function(direction){
        var self = this;

        var transX = (direction == 'left') ? "272px" : "-272px";

        if(direction == 'left'){
            $('.js-sidebar--left').show().scrollTop(0);
        }else{
            $('.js-sidebar--right').show().scrollTop(0);
        }


        $('.js-sidebar-slide').velocity("stop", true);
        $('.js-sidebar-slide').velocity({ 
            translateX: transX,
        },  { 
                easing: [ 200, 40 ],
                complete: function(elements) {
                    self.set_close_listeners();
                }
            }
        );

    }

    cSite.sidebar.prototype.side_close = function(){
        var self = this;

        // remove listener
        $('body').off('mousemove click touchstart', '.js-container-site');      

        // do animation
        $('.js-sidebar-slide').velocity("stop", true);
        $('.js-sidebar-slide').velocity({ 
            translateX: "0px"
        },  {
                easing: [ 200, 40 ],
                complete: function(){
                    self.hide_all();
                    // this prevents chrome BUG where redraw of other animations on screen are ignored
                    $('.js-sidebar-slide').css('transform', 'translateX(0)');
                }
            }
        );
    }

    cSite.sidebar.prototype.set_close_listeners = function(){
        var self = this;

        // simulate click to prevent unhover bug
        $('body').click();

        // close on hover site
        $('body').on('mousemove click touchstart', '.js-container-site', function(){
            self.side_close();
        });
        
    }

    cSite.sidebar.prototype.clearActiveItems = function(direction){
        if(direction == 'left'){
            $('a .active', '.js-sidebar--left').removeClass('active');
        }
    }

    cSite.sidebar.prototype.setActiveItems = function(direction){
        if(direction == 'left'){
            var location_pathname = window.location.pathname.replace(/\/$/, "");

            $('a', '.js-sidebar--left').each(function(){
                if(location_pathname == $(this).attr('href').replace(/\/$/, "")){
                    $('.js-sidebar--left__item', this).addClass('active');
                }
            });
        }
    }


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

	cSite.shadowbox = function(trigger, box_width, box_height) {

		var self   = this;
		box_width  = typeof box_width !== 'undefined' ? box_width : 320;
		box_height = typeof box_height !== 'undefined' ? box_height : 500;

		this.boxhtml    = '<div class="shadowbox js-shadowbox hide"><div class="shadowbox__inner js-shadowbox__inner"><iframe class="shadowbox__iframe js-shadowbox__iframe"></div><div class="shadowbox__close js-shadowbox__close"></div></div>';
		this.box_width  = box_width;
		this.box_height = box_height;
		this.original_box_width  = box_width;
		this.original_box_height = box_height;
		this.aspect_ratio = box_width / box_height;
		this.trigger    = trigger;

        this.target = $(trigger);

		// EVENTS
		$('body').on('click touch', trigger, function(event){
			self.construct_box(event);
		});

	};

	cSite.shadowbox.prototype.construct_box = function(event){
		var self = this;

		// Analytics
		// if(this.trigger == '.js-shadowbox-trigger-signin' || this.trigger == '.js-shadowbox-trigger-signup'){
		// 	var ap = $(this.trigger).data('analytics')['properties'];
		// 	$.extend(ap, window.circuitsMetaData);
		// 	window.analytics.track('sign in screen', ap);
		// }

		// Needs to be unique
		if($('.js-shadowbox').length){
			this.remove_box();
		}

		// Add to our body
		$('body').append(this.boxhtml);
		self.resize_box();

		// Load our URL into the box
        $trigger = $( this.target );
		$('.js-shadowbox__iframe').attr('src', $trigger.data('link') + '&redirect_path=' + window.location.pathname);

		// Fade In
        $shadowBox = $('.js-shadowbox');
		$shadowBox.velocity('stop', true);
		$shadowBox.velocity('fadeIn',{
				duration: 800,
				easing: 'easeInOutCirc'
			}
		);

		// EVENTS
		$('body').on('click','.js-shadowbox__close', function(){
			self.remove_box();
		});
		$('body').on('click','.js-shadowbox', function(){
			self.remove_box();
		});
		$(window).on('resize', function(){
			self.resize_box();
		});

        var analyticsAttr = $trigger.data('analytics');
        if (analyticsAttr && cSite.analytics) {
            var a = new cSite.analytics;
            a.track(analyticsAttr['event'] || '', analyticsAttr['properties'] || {});
        }
	};

	cSite.shadowbox.prototype.resize_box = function(){
		var self = this;
		var ww = $(window).width();
		var wh = $(window).height();

		if(ww < self.box_width || self.box_width < self.original_box_width){
			self.box_width = ww;
			if(self.box_width > 400){
				self.box_width -= 20;
			}
			self.box_height = self.box_width / self.aspect_ratio;
		}
		else if(wh < self.box_height || self.box_height < self.original_box_height){
			self.box_height = wh;
			if(self.box_height > 400){
				self.box_height -= 20;
			}
			self.box_width = self.box_height / self.aspect_ratio;
		}

		$('.js-shadowbox__inner').css('width', this.box_width);
		$('.js-shadowbox__inner').css('margin-left', -this.box_width/2);
		$('.js-shadowbox__inner').css('height', this.box_height);
	};


	cSite.shadowbox.prototype.remove_box = function(){
		var self = this;

		// Fade In
		$('.js-shadowbox').velocity('stop', true);
		$('.js-shadowbox').velocity('fadeOut',{
				duration: 800,
				easing: 'easeInOutCirc',
				complete: function(){
					$('.js-shadowbox').remove();
				}
			}
		);

		// remove listeners
		$(window).off("resize", function(){
			self.resize_box();
		});
	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

	cSite.jumper = function(jumper_trigger) {

		// EVENTS
		$('body').on('click', '.js-jumper', function(){
            var jt = $(this).data('target');
			$(document).scrollTop($('.'+jt).offset().top - 20);
		});
	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){
	cSite.favorite = function() {

		var self = this;

		// EVENTS
		$('body').on('click', '.js-circuit__show__favorite', function(e){
			e.preventDefault();
			if($(this).hasClass('js-circuit__show__favorite--unstar')){
				self.unstar(this);
			}else{
				self.star(this);
			}
		});
	}

	cSite.favorite.prototype.star = function(link){
		$('.js-circuit__show__favorite--star svg').velocity({
			rotateZ: "360",
			scale: "1.5"
		},
		{
			easing: "spring"
		});

		$('.js-circuit__show__favorite--star svg').velocity({
			scale: "0"
		},
		{
			easing: "spring",
			complete: function(){
				$('.js-circuit__show__favorite--star').hide();
				$('.js-circuit__show__favorite--star svg').css('transform','scale(1) rotateZ(-360deg)');
				$('.js-circuit__show__favorite--unstar').velocity(
					'fadeIn',{
						duration: 300,
						easing: 'easeInOutCirc'
					}
				);
			}
		});

		// AJAX
		$.ajax({
			url: $(link).attr('href')+'?ajax=true'
		});

		// UI
		var total = parseInt($('.js-sitemenusub__stats__count__starrers').html());
		$('.js-sitemenusub__stats__count__starrers').html(total+1);

	}

	cSite.favorite.prototype.unstar = function(link){
		$('.js-circuit__show__favorite--unstar svg').velocity({
			rotateZ: "360",
			scale: "1.5"
		},
		{
			easing: "spring"
		});

		$('.js-circuit__show__favorite--unstar svg').velocity({
			scale: "0"
		},
		{
			easing: "spring",
			complete: function(){
				$('.js-circuit__show__favorite--unstar').hide();
				$('.js-circuit__show__favorite--unstar svg').css('transform','scale(1) rotateZ(-360deg)');
				$('.js-circuit__show__favorite--star').velocity(
					'fadeIn',{
						duration: 300,
						easing: 'easeInOutCirc'
					}
				);
			}
		});

		// AJAX
		$.ajax({
			url: $(link).attr('href')+'?ajax=true'
		});

		// UI
		var total = parseInt($('.js-sitemenusub__stats__count__starrers').html());
		$('.js-sitemenusub__stats__count__starrers').html(total-1);

	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.eagle = function() {

        var self = this;

        // EVENTS
        $('body').on('click', '.js-eagleimport__btn', function(){
            self.sendData();
        });

        $('body').on('change input', '.js-upload__data--board', function() {
            var l = JSON.parse($(this).val());
            if(l.length > 0){
                $('.js-eagleimport__btn--enabled', '.js-eagleimport').show();
                $('.js-eagleimport__btn--disabled', '.js-eagleimport').hide();
            }else{
                $('.js-eagleimport__btn--enabled', '.js-eagleimport').hide();
                $('.js-eagleimport__btn--disabled', '.js-eagleimport').show();
            }
        });
    }

    cSite.eagle.prototype.sendData = function() {
        var self = this;

        var d_schematic = $('.js-upload__data--schematic', '.js-eagleimport').val();
        var d_board = $('.js-upload__data--board', '.js-eagleimport').val();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/eagle/receive',
            data: {
                'schematic': d_schematic,
                'board': d_board
            }
        }).success(function(data){
            window.location.href = "/eagle/crunch/?job="+data['job'];
        }).error(function(data){
            alert("Something went wrong, please try again!");
            location.reload();
        });

    }

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.upload = function(container) {
        var self = this;

        // EVENTS
        $(document).on('pjax:complete', function(xhr, options) {
            self.init();
        });

        // FIRST TIME
        self.init();
        
    }

    cSite.upload.prototype.init = function(){
        $('.js-upload').each(function(){
            new cSite.uploader(this);
        });
    }

    cSite.uploader = function(container){
        var self       = this;
        self.container = $(container);
        self.fileList  = [];

        $('.js-upload__input', self.container).fileupload({
            dataType: 'json',
            maxFileSize: 3750000, // 30Mb
            acceptFileTypes: '/(\.|\/)(sch)$/i',
            formData: [
                { name: 'authenticity_token', value: $('meta[name="csrf-token"]').attr('content') }
            ],
            add: function (e, data) {
                $('.js-upload__btn', self.container).hide();
                $('.js-upload__progress', self.container).show();
                data.submit();
            },
            done: function (e, data) {
                // console.log(data);
                $('.js-upload__progress', self.container).hide();
                self.fileList = self.fileList.concat(data['result']);
                self.buildList();
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('.js-upload__progress__bar', self.container).css(
                    'width',
                    progress + '%'
                );
                if(progress == 100){
                    $('.js-upload__progress__bar', self.container).html('crunching...');
                }else{
                    $('.js-upload__progress__bar', self.container).html(progress + '%');
                }
            }
        });

        // EVENTS
        $('.js-upload__btn', self.container).on('click', function(){
            $('.js-upload__input', self.container).click();
        });
    }

    cSite.uploader.prototype.buildList = function() {
        var self = this;

        self.resetList();

        for(var i=0; i<self.fileList.length;i++){
            var v = self.fileList[i];
            // console.log(v);psite
            var new_item = $('.js-upload__item--template', self.container).clone();
            $('.js-upload__item__title', new_item).html(v['name']);
            $('.js-upload__item__info__size', new_item).html(self.bytesToSize(v['size']));
            $('.js-upload__list', self.container).append(new_item);
            self.setRemovalListeners(new_item, i, v['id']);
        }

        $('.js-upload__data', self.container).val(JSON.stringify(self.fileList)).change();

    }

    cSite.uploader.prototype.resetList = function() {
        if(this.fileList == 0){
            $('.js-upload__btn', this.container).show();
        }else{
            $('.js-upload__btn', this.container).hide();
        }
        $('.js-upload__progress', this.container).hide();
        $('.js-upload__list', this.container).html();
    }

    cSite.uploader.prototype.removeFromArray = function(iid) {
        this.fileList.splice(iid, 1)
    }

    cSite.uploader.prototype.removeFromServer = function(id) {
        $.ajax({
            type: 'DELETE',
            url: '/document/'+id+'/delete'
        }).done(function(data){
            // console.log(data);
        });
    }

    cSite.uploader.prototype.setRemovalListeners = function(target, index_id, real_id) {
        var self = this;
        $('.js-upload__item__info__delete', target).click(function(){
            $(target).remove();
            self.removeFromArray(index_id);
            self.removeFromServer(real_id);
            self.buildList();
        });
    }

    cSite.uploader.prototype.bytesToSize = function(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    };


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.cruncher = function(id, endpoint, responseFunction) {

        var self              = this;
        self.loaderDiv        = $('<div class="cruncherloader"><div class="cruncherloader__spinner"></div><div class="cruncherloader__txt">Crunching... Hold on!<br>Status: <span class="cruncherloader__status">Initialize!</span></div></div>');
        self.responseFunction = responseFunction;
        self.timeOutMax = 1800;
        self.timeOutCounter = 0;
        self.endpoint = endpoint;

        self.interval  = setInterval(function(){
            if(self.timeOutCounter <= self.timeOutMax){
                self.check(id);
            }
            self.timeOutCounter += 1;
        }, 2000);

        self.showLoading();

        return self;
    }

    cSite.cruncher.prototype.showLoading = function() {
        this.loaderDiv = this.loaderDiv.prependTo($('body'));
        cSite.spinner($('.cruncherloader__spinner',this.loaderDiv));
    }

    cSite.cruncher.prototype.hideLoading = function() {
        this.loaderDiv.remove();
        clearInterval(this.interval);
    }

    cSite.cruncher.prototype.check = function(id) {
        var self = this;

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: self.endpoint+'/'+id
        }).done(function(data){

            // # 100: "new"
            // # 101: "todo"
            // # 102: "in progress"
            // # 103: "crunched"
            // # 200: "done"
            // # 500: "error"
            
            if(data['status'] == 101){
                $('.cruncherloader__status',this.loaderDiv).html("In Queue...");
            }else if(data['status'] == 102){
                $('.cruncherloader__status',this.loaderDiv).html("Crunching...");
            }else if(data['status'] == 200){
                $('.cruncherloader__status',this.loaderDiv).html("Success!");
                self.showSucces(data);
            }else if(data['status'] == 500){
                self.showError(data);
            }
        });
    }

    cSite.cruncher.prototype.showSucces = function(data) {
        clearInterval(this.interval);
        this.responseFunction(data, this);
    }

    cSite.cruncher.prototype.showError = function(data) {
        clearInterval(this.interval);
        this.hideLoading();
        cSite.error('Crunch Error', "We're sorry, we're currently unable to crunch your file.");
    }



}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.card = function() {

        var self = this;

        // EVENTS
        $('body').on('mouseenter', '.js-circuit_card__info', function(){
            self.show_actions($(this));
        });
        $('body').on('mouseleave', '.js-circuit_card__info', function(){
            self.hide_actions($(this));
        });
    }

    cSite.card.prototype.show_actions = function(target) {
        var self = this;

        $('.circuit_card__info', target).velocity("stop", true);
        $('.circuit_card__info', target).velocity({ 
            height: 120,
        },  { 
                easing: [ 200, 40 ],
                delay: 150
            }
        );

    }

    cSite.card.prototype.hide_actions = function(target) {
        $('.circuit_card__info', target).velocity("stop", true);
        $('.circuit_card__info', target).velocity({ 
            height: 64,
        },  { 
                easing: [ 200, 40 ],
                delay: 150
            }
        );
    }



}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.error = function(title, body, extra_btns, err, silent){

        // there can only be 1 error at the time
        if($('.js-error-message').length){
            $('.js-error-message').remove();
        }

        var error_container = $("<div class='circuits_error js-error-message hide'><div class='circuits_error__top clearfix'><div class='left'><div class='circuits_error__title js-error-message__title'>Sorry, something went wrong</div></div><div class='right'><a class='icon__close_error js-close-error'><?xml version='1.0' encoding='utf-8'?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><g class='svg_icon' enable-background='new 0 0 30 30'><path d='M14.978 6.935c4.442 0 8.044 3.602 8.044 8.046 0 4.442-3.602 8.045-8.044 8.045-4.444 0-8.045-3.603-8.045-8.045 0-4.445 3.602-8.046 8.045-8.046m.001-1.935c-5.503 0-9.979 4.479-9.979 9.98s4.476 9.979 9.979 9.979c5.502 0 9.979-4.477 9.979-9.979s-4.478-9.98-9.979-9.98zM18.757 17.272l-2.292-2.295 2.301-2.297-1.482-1.484-2.299 2.299-2.291-2.292-1.497 1.469 2.306 2.305-2.3 2.302 1.478 1.478 2.303-2.3 2.295 2.295z'/></g></svg></a></div></div>    <div class='circuits_error__body js-error-message__body'>We have encountered a serious error, very sorry about that, our engineers have been notified, try to refresh the page to see if that solves the problem.</div></div>");
        var contact_support_btn_div = "<div class='vertical-spacing--top'><a class='btn btn--m btn--error_white_error js-cSite-error-contact-support'>Click here to contact support</a></div>"
        var clear_cart_btn_div = "<div class='vertical-spacing--top'><a class='btn btn--m btn--error_white_error js-clear-cart-btn'>Remove all the items from your cart</a></div>"

        error_container.appendTo("body");

        if(title){
            $('.js-error-message__title',error_container).html(title);
        }
        if(body){
            $('.js-error-message__body',error_container).html(body);
        }
        if(extra_btns && Object.prototype.toString.call( extra_btns ) === '[object Array]'){

            extra_btns.forEach(function(e){
                if(e == 'contact_support'){
                    var errmsg = 'error';
                    if(err){
                        if(err.responseText != ''){
                            errmsg = err.responseText;
                        }
                        else if(err.statusText){
                            errmsg = err.statusText;
                        }
                    }
                    $('.js-error-message__body',error_container).append(contact_support_btn_div);
                    $('.js-cSite-error-contact-support').click(function(){window.Zenbox.show()});
                    
                }else if(e == 'clear_cart'){
                    $('.js-error-message__body',error_container).append(clear_cart_btn_div);
                    $('.js-clear-cart-btn').click(function(){
                        window.location = "/cart/clear"
                    });

                }
            });
            
        }

        $('.js-close-error',error_container).on('click', function(){
            error_container.remove();
        });

        // LOG ERROR TO OUR BACKEND
        if(err){
            // TODO
        }

        if(!silent){
            error_container.show();
        }

        return error_container;
        
    }
    cSite.warning = function(title, body, err){
        var r = cSite.error(title, body, false, err);
        r.addClass('circuits_error--warning');
    }
       
}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.thumbs = function(){
        var self = this;
        
        this.interval = false;
        this.interval_time = 3000;
        this.interval_timeout = 20; // number of pulls before timeout

        // EVENTS
        $(document).on('pjax:end', function(xhr, options) {
            self.check();
        });
        $(document).on('pagination:success', function(xhr, options) {
            self.check();
        });

        this.check();
    };

    cSite.thumbs.prototype.clear_all = function(){
        clearInterval(this.interval);
        this.interval_counter = 0;
        this.pulling = false;
        this.check_array = [];
        this.check_array_ids = [];
        this.generate_hash = {};
        this.generate_array_ids = [];
    };

    cSite.thumbs.prototype.add_queued = function(status, ref) {
        var self = this;

        if (status.indexOf('queued') >= 0) {
            var status_id = parseInt(status.split('queued')[1]);
            if (!isNaN(status_id)) {
                if ($.inArray(status_id, self.check_array_ids) === -1) {
                    self.check_array_ids.push(status_id);
                }
                self.check_array.push({
                    'id': status_id, // Command id
                    'ref': ref
                });
                return true;
            }
        }
        return false;
    };


    cSite.thumbs.prototype.check = function(){
        var self = this;

        // clear our interval and vars if previously already created
        self.clear_all();

        // loop through all thumbs on page and create our arrays
        $thumb = $('.js-circuit-thumb');
        if($thumb.length){
            $thumb.each(function(i,v) {
                var status = $(this).data('status');
                if (status) {
                    if (!self.add_queued(status, $(this))) {
                        if (status.indexOf('expired') >= 0) {
                            var id = parseInt($(this).data('id')); // Version root id
                            if (!isNaN(id)) {
                                if ($.inArray(id, self.generate_array_ids) === -1) {
                                    self.generate_array_ids.push(id);
                                }
                                self.generate_hash[id] = $(this);
                            }
                        }
                    }
                }
            });
        }

        // Signal generation of thumbs that need it
        if (self.generate_array_ids.length) {
            self.do_generate();
        }

        // interval checker
        if(self.check_array_ids.length || self.generate_array_ids.length){
            self.interval = setInterval(function() {
                self.interval_counter += 1;

                if((self.check_array_ids.length || self.generate_array_ids.length) &&
                    (self.interval_counter < self.interval_timeout)) {
                    if(!self.pulling){
                        self.do_check();
                    }
                }else{
                    self.clear_all();
                }
                
            }, self.interval_time);
        }
    };

    cSite.thumbs.prototype.do_generate = function() {
        var self = this;

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/command/bulk_generate?ids=' + self.generate_array_ids.join()
        }).done(function(data) {
            $.each(data, function(i,v) {
                var ref = self.generate_hash[v['id']];
                if (ref) {
                    self.add_queued('' + v['status'] + v['cmd_id'], ref);
                }
            });
            self.generate_array_ids = [];
        });
    };

    cSite.thumbs.prototype.do_check = function(){
        var self = this;

        self.pulling = true;

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/command/bulk_status?ids='+self.check_array_ids.join()
        }).done(function(data) {
            $.each(data, function(i,v){
                if(v['status'] == 'rendered'){
                    self.replace_img('rendered', v['id'], v['result']);
                }else if(v['status'] == 'error'){
                    self.replace_img('error', v['id'], v['result']);
                }
            });

            self.pulling = false;
        });
    };

    cSite.thumbs.prototype.replace_img = function(status, id, url){
        var self = this;

        $.each(self.check_array, function(i,v){
            if(v['id'] == id){
                if(status == 'rendered'){
                    $(v.ref).attr('src', url);
                }else{
                    $(v.ref).attr('src', 'https://s3-us-west-1.amazonaws.com/123d-circuits-assets/circuit_thumb_failed.gif');
                }
            }
        });

        for (var i = self.check_array.length - 1; i >= 0; i--) {
            if(self.check_array[i]['id'] == id){
                self.check_array.splice(i,1);
            }
        }

        for (var i = self.check_array_ids.length - 1; i >= 0; i--) {
            if(self.check_array_ids[i] == id){
                self.check_array_ids.splice(i,1);
            }
        }
    }


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.flash = function() {

        var self = this;

        // EVENTS
        $('body').on('click', '.js-flash-message-close', function(e){
            e.preventDefault();
            self.remove_message(e);
        });

    }

    cSite.flash.prototype.remove_message = function(e) {
        e.target.closest('.js-flash_message').remove();
    }



}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

	cSite.gerber = function() {

		var self      = this;

		// EVENTS
		$('body').on('click', '.js-download-gerber', function(){
			self.sendData();
		});
	}

	cSite.gerber.prototype.sendData = function() {
		var self = this;

		var url = window.location.pathname.replace(/\/$/, "");
		var id = url.substring(url.lastIndexOf('/') + 1);

		if(id.indexOf("-") > -1){
			var versionroot = id.substring(0,id.indexOf("-"));
		}else{
			var versionroot = id;
		}

		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: '/gerber',
			data: {
				'id': versionroot
			}
		}).done(function(data){
			new cSite.cruncher(data['command'], "/gerber", self.completed);
		});

	}

	cSite.gerber.prototype.completed = function(responseJson, cruncher) {
		cruncher.hideLoading();
		window.location.href = responseJson['result'];
	}



}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){
	cSite.sortabletable = function() {
    	var self = this;

    	$(document).on('pjax:end', function(xhr, options) {
            self.init();
        });

        self.init();
		
	}

	cSite.sortabletable.prototype.init = function(){
		var self = this;
		
		if($('.js-sortable').length){
			// SORTABLE LISTS
			$('.js-sortable').sortable();
			$('.js-sortable').disableSelection();

			// MODEL UPDATE ON EVENT
			if($('.js-sortable-model').length){
				$('.js-sortable').on( "sortupdate", function( event, ui ) {
					self.updateSortModel();
				});
				self.updateSortModel();
			}
		}
	}

	cSite.sortabletable.prototype.updateSortModel = function(){
		var mother = [];
		var counter = $('.js-sort-item').length;
		$('.js-sort-item').each(function(){
			var child = {};
			var id = $('.js-sort-id', this).html();
			var w = counter;
			$('.js-sort-weight', this).html(counter);
			child['id'] = id;
			child['w'] = w;
			mother.push(child);
			counter -= 1;
		});
		$('.js-sortable-model').val(JSON.stringify(mother));
	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
	
(function( cSite, $, undefined ){

	cSite.spinner = function(targetDiv, colorHex, size){
		var self = this;

		var spin_container = '<div class="circuits_spinner"><div class="circuits_spinner__bounce1"></div><div class="circuits_spinner__bounce2"></div><div class="circuits_spinner__bounce3"></div></div>';

		if(jQuery){

			targetDiv = $(targetDiv);
			targetDiv.html(spin_container);

			if(colorHex){
				$('.circuits_spinner > div', targetDiv).css('background-color', colorHex);
			}

			if(size){
				$('.circuits_spinner > div', targetDiv).css('width', size);
				$('.circuits_spinner > div', targetDiv).css('height', size);
			}

		}else{
			targetDiv.innerHTML = spin_container;
		}

	}

}( window['cSite'] = window['cSite'] || {}, jQuery ));
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * Modified by Thijs Bernolet for 123D Circuits
 */



(function( circuitsGui, $, undefined ){
  circuitsGui.spinner_options = {
    options: {
      lines: 7, // The number of lines to draw
      length: 0, // The length of each line
      width: 5, // The line thickness
      radius: 7, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#3b8ed7', // #rgb or #rrggbb or array of colors
      speed: 1.2, // Rounds per second
      trail: 100, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: true, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '50%', // Top position relative to parent
      left: '50%' // Left position relative to parent
    }
  }
}( window['circuitsGui'] = window['circuitsGui'] || {}, jQuery ));

var Spinner = (function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner;

})();
(function( cSite, $, undefined ){

	cSite.confirm = function(){
		var self = this;

		// EVENTS
        $('body').on('click', '.js-are-you-sure', function(e){
            self.are_you_sure(e);
        });
		
	}

	cSite.confirm.prototype.are_you_sure = function(e){
		if (window.confirm('Are you sure?')){
			// ok
		}else{
			e.preventDefault();
			return false;
		}
	}
	
	   
}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.cart_overview = function() {
        var self = this;

        self['address_flag'] = false;
        self['coupon_flag'] = false;

        self.spinner = new Spinner({
            width: 2,
            length: 3,
            radius: 5,
            lines: 9
        }).spin();

        $('.js-cart__loading-container').html(self.spinner.el);
        this.cartControl = new cSite.canjsCart.CartControl(".js-cart-container", {
            'ui_view': self
        });

    }

    cSite.cart_overview.prototype.refresh_page = function() {
        location.reload();
    }

    cSite.cart_overview.prototype.reset_ui = function() {
        $('.js-cart__empty').hide(); 
        $('.js-cart__content').show();
        this.show_loading();
    }

    cSite.cart_overview.prototype.show_loading = function() {
        $('.js-cart__loading-container').show();
        $('.js-cart__recommondations').hide();
    }

    cSite.cart_overview.prototype.hide_loading = function() {
        $('.js-cart__loading-container').hide();
        $('.js-cart__recommondations').show();
    }

    cSite.cart_overview.prototype.empty_cart = function() {
        $('.js-cart').empty();
        $('.js-cart__summary').empty();
        $('.js-cart__content').hide();
        $('.js-cart__empty').show(); 
    }

    cSite.cart_overview.prototype.reset_address = function(force) {
        $('.js-no-address-yet').hide();
        $('.js-shipping-address--view').hide();
        $('.js-shipping-address--edit').hide();

        if(!force){
            if(this['address_flag']){
                $('.js-shipping-address--view').show();
            }else{
                $('.js-no-address-yet').show();
            }
        }
    }

    cSite.cart_overview.prototype.edit_address = function() {
        this.reset_address(true);
        $('.js-shipping-address--edit').show();
    }

    cSite.cart_overview.prototype.show_coupons = function(show_field) {
        $('.js-cart-coupons__add__btn').hide();
        $('.js-cart-coupons__add__field').hide();
        $('.js-cart-show-coupons').hide();

        $('.js-cart-coupons').show();

        if(!this['coupon_flag'] || show_field){
            $('.js-cart-coupons__add__field').show();
        }else{
            $('.js-cart-coupons__add__btn').show();
        }
    }

    cSite.cart_overview.prototype.hide_coupons = function() {
        if(!this['coupon_flag']){
            $('.js-cart-coupons').hide();
            $('.js-cart-show-coupons').show();
        }else{
            $('.js-cart-coupons__add__btn').show();
            $('.js-cart-coupons__add__field').hide();
        }
    }

     cSite.cart_overview.prototype.check_valid_ascii = function() {

        var required_found = false;
        var required_div = "<div class='right cart__required js-ascii-message'>Invalid characters</div>";

        // clear all appends
        $('.js-ascii-message').each(function(){
            $(this).remove();
        });
        $('.cart__required--field').each(function(){
            $(this).removeClass('cart__required--field');
        });

        // loop trough all required fields
        $('.js-valid-ascii-required').each(function(){
            var that = this;
            $(this).find('input').each(function(){

                var v = $(this).val();
                var pattern = new RegExp(/[^\x00-\xFF]/g);
                if(pattern.test(v)){
                    $(that).find('.js-required-append').append(required_div);
                    $(this).addClass('cart__required--field');
                    required_found = true;
                }
            });
        });

        if(required_found){
            return false;
        }else{
            return true;
        }

    }

    cSite.cart_overview.prototype.check_required_fields = function(soft_check) {

        var required_found = false;
        var required_div = "<div class='right cart__required js-required-message'>Required field</div>";

        // clear all appends
        $('.js-required-message').each(function(){
            $(this).remove();
        });
        $('.cart__required--field').each(function(){
            $(this).removeClass('cart__required--field');
        });

        // loop trough all required fields
        $('.js-required').each(function(i,v){
            var req_type = $(this).data('required-type');
            if(req_type == 'string'){
                if($(this).find('input:first').val() == ''){
                    if(!soft_check){
                        $(this).find('.js-required-append').append(required_div);
                        $(this).find('input:first').addClass('cart__required--field');
                        $(this).find('select').each(function(){
                            $(this).addClass('cart__required--field');
                        });
                    }

                    required_found = true;
                }
            }else if(req_type == 'dropdown'){
                if($(this).find('select:first').val() == ''){
                    if(!soft_check){
                        $(this).find('.js-required-append').append(required_div);
                        $(this).find('select:first').addClass('cart__required--field');
                    }

                    required_found = true;
                }
            }
        });

        if(required_found){
            return false;
        }else{
            return true;
        }

    };

    cSite.cart_overview.prototype.check_if_first_time = function() {
        var counter = 0;
        var counter_not_filled_in = 0;
        $('.js-required').each(function(i,v){
            counter += 1;

            if($(this).find('input:first').val() == '' || $(this).find('select:first').val() == ''){
                counter_not_filled_in += 1;
            }
        });

        if(counter == counter_not_filled_in){
            return true;
        }else{
            return false;
        }

    };

}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.shoppingcart_menu = function() {
        var self = this;
        
        // self.parent = parent;
        self.total_items = 0;
        self.queue = 0;

        // get total items
        if($('.js-shoppingcart-model-total').length){
            self.total_items = parseInt($('.js-shoppingcart-model-total').html());
        }
        self.updateTotal();

        // add spinner
        // self.spinner = new Spinner({
        //     width: 2,
        //     length: 3,
        //     radius: 5,
        //     lines: 9
        // }).spin();
        // $('.js-shoppingcart-menu__loading').html(self.spinner.el);
        

        // EVENTS
        $('body').on('click', '.js-add-to-cart', function(){
            $this = $(this);
            self.addItemToCart($this.data('sku'), $this.data('origin'), $this.data('recommend'));
        });
    };

    cSite.shoppingcart_menu.prototype.updateTotal = function() {
    	var self = this;
        
    	$('.js-shoppingcart-total').html(self.total_items);

        if(self.total_items <= 0){
            $('.js-shoppingcart-menu').hide();
        }
    };

    cSite.shoppingcart_menu.prototype.addItemToCart = function(sku_id, origin, recommend) {
    	var self = this;

        ga('send', 'event', 'addItemToCart', 'click', sku_id);

        if(window['cart_overview']){
            window['cart_overview'].show_loading();
        }

        self.queue += 1;

        if(!$('.js-shoppingcart-menu').is(":visible")){
            $('.js-shoppingcart-menu').show();
        } 

    	self.animate_loading();

        $.ajax({
            type: 'POST',
            url: '/cart/add_item?method=get',
            data: {
                'id' : sku_id,
                'origin' : origin,
                'recommend' : recommend
            },
            error: function(data){
                self.queue -= 1;
                self.animate_loading_hide();
                self.updateTotal();

                cSite.warning('No longer in stock','We\'re sorry, this item is no longer in stock.', false);


                if(window['cart_overview']){
                    window['cart_overview'].hide_loading();
                }
            },
            success: function(data){
                console.log(data);

                self.queue -= 1;
                var total = 0;

                for (var i=0; i < data["CART"]["LINE_ITEMS"].length; i++ ) {
                    var line_item = data["CART"]["LINE_ITEMS"][i];
                    if(line_item["PRODUCT_TYPE"] !== "SHIPPING"){
                        total += line_item["QUANTITY"];
                    }
                }

                self.total_items = total;
                self.total_items_server = total;
                self.updateTotal();
                self.animate_tada();

                if(window['cart_overview']){
                    window['cart_overview'].cartControl.reload();
                }
            }
        });
    };

    cSite.shoppingcart_menu.prototype.animate_loading = function() {
        $('.js-shoppingcart-menu__loading').show();
        cSite.spinner($('.js-shoppingcart-menu__loading'));
        $('.js-shoppingcart-menu__svgimage').hide();
        $('.js-shoppingcart-total').hide();

        $('.js-shoppingcart-menu__animation').removeClass('mediumAnimation tada');
    };

    cSite.shoppingcart_menu.prototype.animate_loading_hide = function() {
        $('.js-shoppingcart-menu__loading').hide();
        $('.js-shoppingcart-menu__loading').empty();
        $('.js-shoppingcart-menu__svgimage').show();
        $('.js-shoppingcart-total').show();
    };

    cSite.shoppingcart_menu.prototype.animate_tada = function() {
        if(this.queue == 0){
            this.animate_loading_hide();
            $('.js-shoppingcart-menu__animation').addClass('mediumAnimation tada');
        }
    }

}( window['cSite'] = window['cSite'] || {}, jQuery ));
function set_redirect_path(destination) {
    $.ajax({
        url: '/set_redirect_path',
        type: 'put',
        dataType: 'json',
        data: {redirect_path : destination},
        success: function(result){
            console.log("Redirect path set!")
        }
    })
}

function openSessionPopup(type, destination){
	var our_window = false;

    if (!window.location.origin) {
        // Fix Internet Explorer
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }

    if(type == 'signup'){
        var target_url = '/users/auth/adsk/?display=popup&register=true';

        if (destination) {
            target_url = target_url + '&redirect_path=' + destination;
        }

        our_window = window.open(window.location.origin + target_url,'signup','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=500,height=500,top=100,left=100');
    }
    else if(type == 'signin'){
        var target_url = '/users/auth/adsk/?display=popup';

        if (destination) {
            target_url = target_url + '&redirect_path=' + destination;
        }

        our_window = window.open(window.location.origin + target_url,'signin','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=500,height=500,top=100,left=100');
    }

    return our_window;
}
;
/**
 * Created by karel on 21/05/14.
 */

(function( cSite, $, undefined )
{

    cSite.canjsCart = {};
    
    cSite.canjsCart.CartControl = can.Control({
        'init': function (element,options) {
            var self = this;

            self.ui_view                  = options.ui_view;
            self.template_cart            = 'cart-template__cart--grouped';
            self.template_summary         = 'cart-template__summary';
            self.template_cart__holder    = $('.js-cart');
            self.template_summary__holder = $('.js-cart__summary');

            self.reload();
        },

        'reload' : function(){
            var self = this;

            self.ui_view.reset_ui(); // reset our UI

            cSite.canjsCart.CartModel.get(function (cart) {
                if(window['CART_DEBUG']) console.log(cart);

                self.options.cart = cart;
                self.refresh(true);

            }).fail(function(err){
                cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
            });
        },

        'refresh' : function(force_refresh_shipping){
            var self = this;

            // TOP MENU
            if(window['cart_menu']){
                window['cart_menu'].total_items = self.options.cart['TOTAL_NUMBER'];
                window['cart_menu'].updateTotal();
            }

            if(self.options.cart['LINE_ITEMS'].length == 0){
                self.ui_view.empty_cart();
                self.ui_view.hide_loading();
                return;
            }

            // HIDE EMPTY ETC AND SHOW LOADING
            self.ui_view.reset_ui();

            // FILL IN
            self.template_cart__holder.html(can.view(self.template_cart, self.options.cart));
            console.log(self.options.cart);
            self.template_summary__holder.html(can.view(self.template_summary, self.options.cart));


            // COUPON
            if(self.options.cart['COUPONS'] && self.options.cart['COUPONS'].length){
                self.ui_view['coupon_flag'] = true;
            }else{
                self.ui_view['coupon_flag'] = false;
            }

            // SHIPPING
            if(force_refresh_shipping){
                if(self.options.shipping){
                    self.options.shipping.reload();
                }else{
                    self.options.shipping = new cSite.canjsCart.ShippingAddressControl(".js-cart-container", {
                        'parent':         self,
                        'ui_view':        self.ui_view,
                        'finish':         self.ui_view.hide_loading
                    });
                }

            }else{
                self.options.shipping.refresh({
                    'finish': function(){
                        self.ui_view.hide_loading();
                        
                    }
                });
            }

            // TOOLTIP
            if($('.js-enable-tooltip').length){
                $('.js-enable-tooltip').tipsy();    
            }

            // HIDE LOADING
            // self.ui_view.hide_loading();
            
        },

       

        '.js-remove-item click': function (el, ev) {
            var self = this;
            var id = el.data('id');
            self.ui_view.show_loading();

            this.options.cart.remove_item({line_item_id:id}, function(cart){
                self.options.cart = cart;
                self.reload();
            }).fail(function(err){
                cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                self.refresh();
            });
        },

        '.js-edit-shipping-address click': function (el, ev) {
            var self = this;

            if (cSite.analytics) {
                var a = new cSite.analytics();
                a.track('add shipping address button', {});
            }

            if($('.js-user-is-logged-in').length > 0){
                self.ui_view.edit_address();    
            }else{
                // Inline rails code will open popup
            }
        },

        '.js-cancel-shipping-address click': function (el, ev) {
            var self = this;
            self.ui_view.reset_address();
        },

        '.js-shipping-option change': function (el, ev) {
            var self = this;
            var id = el.data('id');
            var val = el.val();

            self.ui_view.show_loading();
            this.options.cart.change_shipping({line_item_id:id, option: val}, function(cart){
                self.options.cart = cart;
                self.refresh(true);
            }).fail(function(err){
                cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                self.refresh();
            });
        },

        '.js-cart-show-coupons click': function (el, ev) {
            var self = this;
            self.ui_view.show_coupons();
        },

        '.js-cart-coupons__add__btn--action click': function (el, ev) {
            var self = this;
            self.ui_view.show_coupons(true);
        },

        '.js-cancel-adding-coupon click': function (el, ev) {
            var self = this;
            self.ui_view.hide_coupons();
        },

        '.js-add-coupon click': function (el, ev) {
            var self = this;
            var coupon_code = $('.js-coupon-code').val();

            self.ui_view.show_loading();
            this.options.cart.add_coupon({coupon_code:coupon_code}, function(cart){
                self.options.cart = cart;
                self.refresh();
            }).fail(function(err){
                cSite.warning('Invalid coupon','Sorry invalid coupon, please try again', false, err);
                self.refresh();
            });
        },

        '.js-remove-coupon click': function (el, ev) {
            var self = this;
            var code = el.data('code');

            self.ui_view.show_loading();
            this.options.cart.remove_coupon({coupon_code:code}, function(cart){
                self.options.cart = cart;
                self.refresh();
            }).fail(function(err){
                cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                self.refresh();
            });
        },

        '.js-cart__basket__item__quantity__input focusin': function (el, ev) {            
            el.parent().parent().find('.js-cart__basket__item__update-btn').show();
            el.parent().parent().find('.js-cart__basket__item__price').hide();
        },

         '.js-cart__basket__item__quantity__input blur': function (el, ev) {
            console.log(ev);

            el.parent().parent().find('.js-cart__basket__item__update-btn').hide();
            el.parent().parent().find('.js-cart__basket__item__price').show();
        },

        

        '.js-update-cart mousedown': function (el, ev) {
            var self = this;

            var total_items_to_update = 0;
            var total_items_updated = 0;

            self.ui_view.show_loading();
            
            $('.js-cart__basket__item__quantity__input').each(function(){
                var lid = $(this).data('lineid');
                var product_id = $(this).data('product_id');
                var original_q = $(this).data('original_q');
                var target_q = parseInt($(this).val());

                if(target_q && target_q != original_q){
                    total_items_to_update += 1;

                    $.ajax({
                        type: 'PUT',
                        url: '/cart/update_quantity',
                        data: {
                            'line_item_id' : lid,
                            'product_id' : product_id,
                            'quantity' : target_q                        
                        },
                        error: function(data){
                            cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], false);
                            return;
                        },
                        success: function(data){
                            // all good
                            total_items_updated += 1;
                            if(total_items_to_update == total_items_updated){
                                self.reload();
                            }
                        }
                    });
                }
            });

            if(total_items_to_update == 0){
                // nothing to update
                self.reload();
            }
            
        },

        '.js-cart__checkoutbtn click': function (el, ev) {
            var self = this;

            if (cSite.analytics) {
                var a = new cSite.analytics;
                a.track('checkout button', {});
            }

            if(self.options.cart['LINE_ITEMS'].length == 0){
                self.ui_view.empty_cart();
                return;
            }

            self.secure_session_window = openSessionPopup("signin", "/cart/checkout");
            self.secure_session_window.location.href = '/cart/processing';
            $(self.secure_session_window.document.body).html('Processing...');

            self.ui_view.show_loading();

            $.ajax({
                url: window.location.origin + "/users/logged_in_secure/",
                type: 'GET',
                complete: function(){
                    self.ui_view.hide_loading();
                },
                error: function(data){
                    cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                    return;
                },
                success: function(data){
                    if(window['CART_DEBUG']) console.log(data);
                    if (data == 'YES') {
                        self.secure_session_window.close();
                        window.location.href = "/cart/checkout";
                    }else{
                        self.secure_session_window.location.href = '/users/auth/adsk';
                    }
                }
            });
        },

        '.js-cart__minimize_shipping change': function(el,ev){
            var self = this;

            this.ui_view.show_loading();

            var checkbox_val = el.is(':checked') ? true : false;
        
            if(checkbox_val){
                this.options.cart.set_minimized_shipping({}, function(data){
                    self.reload();
                }).fail(function(err){
                    cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                    self.refresh();
                });
            }else{
                this.options.cart.set_fastest_shipping({}, function(data){
                    self.reload();
                }).fail(function(err){
                    cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['contact_support', 'clear_cart'], err);
                    self.refresh();
                });
            }

            

        },



    });

}( window['cSite'] = window['cSite'] || {}, jQuery ));
/**
 * Created by karel on 21/05/14.
 */

(function( cSite, $, undefined )
{
    cSite.canjsCart.CartModel = can.Model({
        get: function(success){
            return $.ajax({
                url: '/cart/get.json',
                type: 'get',
                dataType: 'json',
                success: function(result){
                    var preprocessed_cart = cSite.canjsCart.CartModel.preprocess(result)
                    return success(new cSite.canjsCart.CartModel(preprocessed_cart));
                },
                error: function(result){
                    return result;
                }
            })
        },
        preprocess: function(json) {
            if (json && json["LINE_ITEMS"] && json["LINE_ITEMS"]!== "") {

                var count_cart_items       = 0;
                var grouphash              = {};

                // ------------------------
                // LINE ITEMS =
                //      - CART ITEMS
                //      - SHIPPING PRICES
                // ------------------------

                for (var i = 0; i < json["LINE_ITEMS"].length; i++) {

                    var line_item = json["LINE_ITEMS"][i];

                    // DATA PARSE
                    if (line_item["DATA"]) {
                        line_item["DATA"] = JSON.parse(line_item["DATA"]);
                        var name_override = line_item["DATA"]["name"]; // Circuit name for PCBs
                        if (name_override) {
                            line_item["NAME"] = 'PCB - ' + name_override + ' (x3)';
                        }
                    }

                    // FLAG SHIPPING FOR FRONT END
                    if (line_item["PRODUCT_TYPE"] !== "SHIPPING") {
                        line_item["not_shipping"] = true;
                        count_cart_items += line_item["QUANTITY"];
                    }

                    // IN STOCK
                    if (line_item["PRODUCT_TYPE"] !== "SHIPPING") {
                        var today = new Date();
                        var today_string = today.toISOString();
                        var back_in_stock = new Date(line_item["DATA"]["back_in_stock"])
                        var back_in_stock_string = back_in_stock.toISOString();

                        if (today_string >= back_in_stock_string) {
                            line_item["IS_ITEM_IN_STOCK"] = 'In stock';
                        } else {
                            line_item["IS_ITEM_IN_STOCK"] = '<span class="cart__notinstock">Not in stock</span>';
                        }
                    }

                    // PRICE
                    line_item["DOLLAR_PRICE"] = json['currencySymbol'] + (line_item["PRICE"]/line_item["QUANTITY"]).toFixed(2);
                    
                }

                json["TOTAL_NUMBER"]              = count_cart_items;
                json["TOTAL_PRICE_EXCL_SHIPPING"] = json['currencySymbol'] + json["LINEITEM_SUBTOTAL"].toFixed(2);
                json["TOTAL_PRICE_SHIPPING"]      = json['currencySymbol'] + json["SHIPPING_PRICE"].toFixed(2);
                json["DOLLAR_SUBTOTAL"]           = json['currencySymbol'] + json["SUBTOTAL"].toFixed(2);


                if (json["SHIPPING_ADDRESS_ID"] !== "") {
                    json["READY_TO_CHECKOUT"] = true;
                } else {
                    json["READY_TO_CHECKOUT"] = false;
                }

                
                // ------------------------
                // COUPONS
                // ------------------------

                if(json["COUPONS"].length > 0){
                    for (var i = 0; i < json["COUPONS"].length; i++) {
                        var coupon = json["COUPONS"][i];

                        // OLD SYNTAX FOR ELEKTRONINKS KICKSTARTER COUPONS
                        // // COUPON SYNTAX = LAST 6 characters
                        // // XXXXXX = XXXX.XX
                        // coupon['PRICE'] = coupon['CODE'].substr(coupon['CODE'].length - 6);
                        // coupon['PRICE'] = parseInt(coupon['PRICE'].substr(0,4) + '.' + coupon['PRICE'].substr(4));
                        // coupon['PRICE'] = '- ' + json['currencySymbol'] + parseFloat(coupon['PRICE']);

                        // NEW GENERAL SYNTAX
                        coupon['PRICE'] = '- ' + json['currencySymbol'] + json['DISCOUNT'];
                    }
                }

                // ------------------------
                // SHIPPING GROUPED ITEMS
                // ------------------------

                function addXDaysToToday(days_to_be_added){
                    // DATE HELPER
                    var today = new Date();
                    var calculated_day = new Date();

                    calculated_day.setDate(today.getDate() + days_to_be_added); 

                    var dd = calculated_day.getDate();
                    var mm = calculated_day.getMonth() + 1;
                    var y = calculated_day.getFullYear();

                    var calculated_day_string = mm + '/'+ dd + '/'+ y;

                    return calculated_day_string;
                }

                // LOOP OVER OUR LINE ITEMS
                for (var i = 0; i < json["LINE_ITEMS"].length; i++) {
                    var line_item = json["LINE_ITEMS"][i];
                    if (line_item["PRODUCT_TYPE"] == "SHIPPING") {
                        var shop = (line_item['VENDOR_DISPLAY_NAME'].toLowerCase().indexOf("oshpark") > -1) ? '123D Circuits' : line_item['VENDOR_DISPLAY_NAME'];
                        group = { 
                            'shipping_item':     line_item,
                            'shop':              shop,
                            'SHIPPING_DATE':     addXDaysToToday(line_item["LEAD_DATE"]),
                            'line_items':        []
                        };

                        for (var j = 0; j < json["LINE_ITEMS"].length; j++) {
                            var line_item_2 = json["LINE_ITEMS"][j];
                            if (line_item["PARENT_IDS"].indexOf(line_item_2["ID"]) !== -1) {
                                group['line_items'].push(line_item_2);
                            }
                        }

                        grouphash[i] = group;

                    }
                }

                json["grouped_line_items"] = [];

                for (var i in grouphash) {
                    json["grouped_line_items"].push(grouphash[i])
                }

                // ------------------------
                // SORT GROUPS
                // ------------------------

                json["grouped_line_items"].sort(function(a, b){
                    if (a["SHIPPING_DATE"] > b["SHIPPING_DATE"]) {
                        return 1;
                    } else if (a["SHIPPING_DATE"] < b["SHIPPING_DATE"]) {
                        return -1;
                    } else {
                        return 0;
                    }
                });

                // ------------------------
                // MINIMIZED SHIPPING
                // ------------------------

                if(json['SHIPMENT_GROUPING_METHOD'] == "MINIMUM_SHIPMENTS"){
                    json['MINIMIZED_SHIPPING'] = 'checked';
                }else{
                    json['MINIMIZED_SHIPPING'] = '';
                }

                if(json["grouped_line_items"].length > 1 || (json['MINIMIZED_SHIPPING'] == 'checked' && json["LINE_ITEMS"].length > 2 )){
                    json['SHOW_MINIMIZED_SHIPPING'] = true;
                }else{
                    json['SHOW_MINIMIZED_SHIPPING'] = false;
                }


            }

            return json;
        }

    },{
        remove_item: function(data, success){
            return $.ajax({
                url: '/cart/remove_item.json',
                type: 'delete',
                dataType: 'json',
                data: data,
                success: function(result){
                    var preprocessed_cart = cSite.canjsCart.CartModel.preprocess(result)
                    return success(new cSite.canjsCart.CartModel(preprocessed_cart));
                },
                error: function(result){
                    return result;
                }

            })
        },

        change_shipping: function(data, success){
            return $.ajax({
                url: '/cart/change_shipping.json',
                type: 'put',
                dataType: 'json',
                data: data,
                success: function(result){
                    var preprocessed_cart = cSite.canjsCart.CartModel.preprocess(result)
                    return success(new cSite.canjsCart.CartModel(preprocessed_cart));
                },
                error: function(result){
                    return result;
                }

            })
        },

        set_minimized_shipping: function(data, success){
            return $.ajax({
                url: '/cart/minimize_shipping',
                type: 'put',
                dataType: 'json',
                data: data,
                success: function(result){
                    return success(result);
                },
                error: function(result){
                    return result;
                }

            })
        },

        set_fastest_shipping: function(data, success){
            return $.ajax({
                url: '/cart/fastest_shipping',
                type: 'put',
                dataType: 'json',
                data: data,
                success: function(result){
                    return success(result);
                },
                error: function(result){
                    return result;
                }

            })
        },

        add_coupon: function(data, success){
            var self = this;

            return $.ajax({
                url: '/cart/add_coupon.json',
                type: 'put',
                dataType: 'json',
                data: data,
                success: function(result){
                    var preprocessed_cart = cSite.canjsCart.CartModel.preprocess(result)
                    return success(new cSite.canjsCart.CartModel(preprocessed_cart));
                },
                error: function(result){
                    return result;
                }

            })
        },

        remove_coupon: function(data, success){
            return $.ajax({
                url: '/cart/remove_coupon.json',
                type: 'delete',
                dataType: 'json',
                data: data,
                success: function(result){
                    var preprocessed_cart = cSite.canjsCart.CartModel.preprocess(result)
                    return success(new cSite.canjsCart.CartModel(preprocessed_cart));
                },
                error: function(result){
                    return result;
                }

            })
        }

    });
}( window['cSite'] = window['cSite'] || {}, jQuery ));
/**
 * Created by karel on 22/05/14.
 */


(function( cSite, $, undefined )
{
    cSite.canjsCart.ShippingAddressControl = can.Control({
        "init": function (element,options) {
            var self = this;

            self.parent  = options['parent'];
            self.ui_view = options['ui_view'];
            self.finish  = options['finish'];
            self.prevCountryCode = false;

            self.reload();
            

        },

        'reload': function(options){
            var self = this;

            cSite.canjsCart.ShippingAddress.get(function (shipping_address) {
                if(window['CART_DEBUG']) console.log(shipping_address);
                self.options.shipping_address = shipping_address;

                self.refresh();

                if (!self.ui_view.check_required_fields(true)) {
                    self.parent.options.cart.attr({"READY_TO_CHECKOUT": false});
                    self.parent.refresh();
                    if(!self.ui_view.check_if_first_time()){
                        self.ui_view.check_required_fields();
                        self.ui_view.edit_address();    
                    }
                    
                }

            }).fail(function(err){
                cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['clear_cart', 'contact_support'], err);
                self.refresh();
            });
        },

        'refresh': function(options){
            var self = this;

            // UI
            if(self.options.shipping_address["ADDRESS_TYPE"]){
                self.parent.ui_view['address_flag'] = true;
            }else{
                self.parent.ui_view['address_flag'] = false;
            }
            self.parent.ui_view.reset_address();

            $('.js-shipping-address--view__address').html(can.view('shipping_address_view_template', self.options.shipping_address));
            $('.js-shipping-address--edit').html(can.view('shipping_address_edit_template', self.options.shipping_address));
            $('.js-shipping-address-country-code').val(self.options.shipping_address['COUNTRY_CODE']);
            $('.js-shipping-address-states-canada').val(self.options.shipping_address['STATE']);
            $('.js-shipping-address-states-usa').val(self.options.shipping_address['STATE']);
            $('.js-shipping-address-country-code').change();

            if(options && options['finish']){
                self.finish = options['finish'];
            }
            if(self.finish){
                self.finish();
            }

            // CHECK IF ADDRESS EDIT IS IN THE URL
            if(window.location.href.indexOf("edit_address") > -1) {
                self.parent.ui_view.edit_address();
            }
        },

        '.js-shipping-address-country-code change': function(el,ev){

            $('.js-shipping-address-states-usa').hide();
            $('.js-shipping-address-states-canada').hide();
            $('.js-shipping-address-state').show();

            if(self.prevCountryCodeDirty){
                $('.js-shipping-address-state').val('');
                self.prevCountryCodeDirty = false;
            }

            if(el.val() == 'US' || el.val() == 'CA'){
                self.prevCountryCodeDirty = true;
                $('.js-shipping-address-state').hide();

                if(el.val() == 'US'){
                    $('.js-shipping-address-states-usa').show();
                    $('.js-shipping-address-states-usa').change();
                }
                if(el.val() == 'CA'){
                    $('.js-shipping-address-states-canada').show();
                    $('.js-shipping-address-states-canada').change();
                }
            } 

        },

        '.js-shipping-address-states-usa change': function(el,ev){
            $('.js-shipping-address-state').val(el.val());
        },

        '.js-shipping-address-states-canada change': function(el,ev){
            $('.js-shipping-address-state').val(el.val());
        },

        '.js-save-shipping-address click': function (el, ev) {
            var self = this;

            var shipping_address_div = el.closest('.js-shipping-address');
            var data = {
                "name":        $('.js-shipping-address-name', shipping_address_div).val(),
                "address1":    $('.js-shipping-address-address1', shipping_address_div).val(),
                "address2":    $('.js-shipping-address-address2', shipping_address_div).val(),
                "city":        $('.js-shipping-address-city', shipping_address_div).val(),
                "postalCode":  $('.js-shipping-address-postal-code', shipping_address_div).val(),
                "telephone":   $('.js-shipping-address-telephone', shipping_address_div).val(),
                "state":       $('.js-shipping-address-state', shipping_address_div).val(),
                "countryCode": $('.js-shipping-address-country-code', shipping_address_div).val()
            };

            // VALIDATE
            if(self.ui_view.check_required_fields() && self.ui_view.check_valid_ascii()){
                // SEND
                self.ui_view.show_loading();

                self.options.shipping_address.set(data,function(shipping_address){
                    self.options.shipping_address = shipping_address;
                    self.parent.reload();
                }).fail(function(err){
                    cSite.error('Cart Error','We\'re very sorry, something went wrong.', ['clear_cart', 'contact_support'], err);
                    self.refresh();
                });
            }

        }

    });
}( window['cSite'] = window['cSite'] || {}, jQuery ));
/**
 * Created by karel on 22/05/14.
 */


(function( cSite, $, undefined )
{

    cSite.canjsCart.ShippingAddress = can.Model(
    {
        get: function(success){
            return $.ajax({
                url: '/cart/shipping_address.json',
                type: 'GET',
                dataType: 'json',
                success: function(result){
                    return success(new cSite.canjsCart.ShippingAddress(result));
                },
                error: function(result){
                    return result;
                }
            })
        }
    },
    {
        set: function(attr,success){
            var data= {
                'shipping_address': attr,

            }
            return $.ajax({
                url: '/cart/shipping_address.json',
                type: 'PUT',
                dataType: 'json',
                data: data,
                success: function(result){
                    return success(new cSite.canjsCart.ShippingAddress(result));
                },
                error: function(result){
                    return result;
                }
            })
        }

    });

}( window['cSite'] = window['cSite'] || {}, jQuery ));
/**
 * Created by karel on 21/05/14.
 */







;
(function( cSite, $, undefined ){

    cSite.analytics = function() {
        var self = this;

        $('body').on('click touch', '.js-analytics', function(a) {
            $this = $(this);
            data = $this.data() || {};
            properties = {};
            Object.keys(data).forEach(function(key) {
                if (key == 'event') {
                    event = data[key];
                } else {
                    properties[key.replace(/(?=[A-Z])/g, ' ').toLowerCase()] = data[key];
                }
            });
            if (event) {
                delete properties['event'];
                cSite.analytics.track(event, properties);
            }
        });

        // Page call for links
        $('a').each(function() {
            var $this = $(this);
            var href = $this[0].href;
            var referrer = window.location.href;
            if (href) {
                var path = href.split('/');
                var origin = path.splice(0,3,'').join('/');
                if (origin == window.location.origin) {
                    $this.on('click', function () {
                        cSite.analytics.page({path: path.join('/'), url: href, referrer: referrer});
                    });
                }
            }
        });
    };

/*
    // Track using rails callback
    cSite.analytics.prototype.track = function(event, properties) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/command/analytics' +
                 '?event=' + encodeURIComponent(event) +
                 '&url=' + encodeURIComponent(window.location.href) +
                 '&properties=' + encodeURIComponent(JSON.stringify(properties))
        });
    };
*/
    cSite.analytics.identify = function() {
        if (window.analytics) {
            if (window.analytics.user) {
                var user = window.analytics.user();
                // user.anonymousId($("meta[name='session']").attr('content'));
                var member = $("meta[name='member']").attr('content');
                if (user.id() === null) {
                    if (member && member !== 'false') {
                        if (user !== null) {
                            var names = ($("meta[name='user-name']").attr('content') || '').split(' ');
                            var first = names.shift();
                            var email = $("meta[name='user-email']").attr('content') || '';
                            var coppaStatus = $("meta[name='coppa-status']").attr('content') || 'Normal';
                            if (coppaStatus == 'child_approved') {
                                coppaStatus = 'Approved';
                            } else if (coppaStatus == 'child restricted') {
                                coppaStatus = 'Restricted';
                            } else if (coppaStatus == 'false') {
                                coppaStatus = 'Normal';
                            }
                            window.analytics.identify(
                                member, {
                                    'email': email,
                                    'first name': first,
                                    'last name': names.join(' '),
// TODO:                            'mktgpermission': true,
                                    'Coppa Status': coppaStatus
                                }
                            );
                        }
                    }
                } else {
                    if (member === null || member === 'false') {
                        window.analytics.reset();
                    }
                }
            }
        }
    };

    cSite.analytics.page = function(params) {
        if (window.analytics && window.analytics.user) {
            // cSite.analytics.identify();
            if (params) {
                window.analytics.page(null, params);
            } else {
                window.analytics.page();
            }
            window.analytics.ready(function() {
                if (mixpanel) {
                    //UTMs recorded on every page load (if exist)
                    var utms = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content'];
                    var last_utms = ['last utm campaign', 'last utm source', 'last utm medium', 'last utm content'];
                    for (var i = 0; i < last_utms.length; i++) {
                        var prop = mixpanel.get_property(utms[i]);
                        if (prop) {
                            var k = {};
                            k[last_utms[i]] = prop;
                            mixpanel.people.set(k);
                        }
                    }
                }
            });
            return true;
        }
        return false;
    };

    // Track using javascript
    cSite.analytics.track = function(event, properties) {
        if (window.analytics) {
            cSite.analytics.identify();
            if (window.circuitsMetaData) {
                properties = $.extend(properties, window.circuitsMetaData);
            }
            window.analytics.track(event, properties);
        }

    };

    cSite.analytics.getDetailPageProperties = function() {
        var result = {};
        if (gui.data) {
            var meta = gui.data.root.editorModel['meta']();
            result['owner'] = meta['current_user_is_circuit_user'];
            var type = 'pcb design';
            switch(meta['circuit_type']) {
                case 'breadboard':
                    type = 'electronics lab';
                    break;
                case 'mesh_pcb':
                    type = 'mesh';
                    break;
                case 'circuitscribe':
                    type = 'circuit scribe';
                    break;
            }
            result['asset name'] = meta['circuit_name'];
            result['asset type'] = type;
            result['owner id'] = meta['circuit_user'].id;
            // TODO: There has to be a better way to get the circuit ID
            var parts = meta['circuit_path'].split('/');
            var id = parseInt(parts[parts.length - 1].split('-')[0]);
            result['asset id'] = id;

        }
        return result;
    };

    cSite.analytics.retry = function(callback, count) {
        if (count && !callback()) {
            setTimeout(function(){cSite.analytics.retry(callback, count-1)}, 500);
        }
    };

}( window['cSite'] = window['cSite'] || {}, jQuery ));

// Make immediate call to page() (& identify)
cSite.analytics.retry(function(){return cSite.analytics.page();}, 5);
// Forward all postMessage calls from the iframes that have data in the form {method:, arguments:} directly to Segment.
window.onmessage = function(e){
  var method = e.data.method;
  var args = e.data.arguments ? Array.prototype.slice.call(e.data.arguments) : null;
  if (analytics[method]) {
    analytics[method].apply(analytics, args);
  }
};
(function( cSite, $, undefined ){

	cSite.marketplace = function() {

		var self = this;
		var session = $('meta[name="session"]').attr('content');
		var secure_session = $('meta[name="secure-session"]').attr('content');
		secure_session = (secure_session == 'false') ? false : secure_session;
		var user = $('meta[name="user"]').attr('content');
		self.user = (user == 'false') ? false : user;
		var env = $('meta[name="env"]').attr('content');
		var coppa = $('meta[name="coppa"]').attr('content');
		coppa = (coppa == 'true') ? true : false;
		var cloudservicesmemberid = $('meta[name="member"]').attr('content');
		
		self.cart = new Spark.marketplace($('meta[name="afc"]').attr('content'), 'circuits', self.user, session, secure_session, coppa, '/shop', env, cloudservicesmemberid);

		self.number_of_cart_items = 0;

        self.redirect_flag = false;

		// EVENTS
		// ------

		self.cart.on('spark:marketplace:loaded', function(){
			self.check_for_iframe();
		});

		self.cart.on('spark:marketplace:updated', function(data){
			if(data.count > 0){
				self.show_cart();
			}else{
				self.hide_cart();
			}
			self.number_of_cart_items = data['count'];
			self.update_all_mini_carts();
			
		});

		self.cart.on('spark:marketplace:error', function(data){
			self.cartmenu_animate_loading_hide();
			var human_error = JSON.parse(data['err']['responseText']);
			cSite.error('Marketplace error', human_error['message']);
			return false;
		});

		$(document).on('pjax:end', function(xhr, options) {
			self.check_for_iframe();
			self.check_for_buttons();
			self.update_all_mini_carts();
		});

		$('body').on('click', '.js-marketplace-add-to-cart', function(){
			self.add_to_cart($(this));
		});

		$('body').on('click', '.js-marketplace-add-to-cart--pcb', function(){
			self.add_to_cart_pcb($(this));
		});

		// UI EVENTS
		// ---------
		self.cart.on('spark:marketplace:loading', function(){
			self.cartmenu_animate_loading();
			return false;
		});

		self.cart.on('spark:marketplace:new', function(){
			self.animate_tada();

            if(self.redirect_flag){
                window.location = "/cart";
                self.redirect_flag = false;
            }
			return false;
		});

		this.check_for_buttons();

	}

	cSite.marketplace.prototype.check_for_iframe = function() {
		if($('.js-marketplace-iframe').length){
			this.cart.showCart($('.js-marketplace-iframe'));
		}
	}

	cSite.marketplace.prototype.show_cart = function() {
		$('.js-marketplace-cart').show();
	}

	cSite.marketplace.prototype.hide_cart = function() {
		$('.js-marketplace-cart').hide();
	}

	cSite.marketplace.prototype.update_all_mini_carts = function() {
		$('.js-marketplace-cart__count').html(this.number_of_cart_items);
	}



	cSite.marketplace.prototype.cartmenu_animate_loading = function() {
		this.show_cart();
		$('.js-shoppingcart-menu__loading').show();
		cSite.spinner($('.js-shoppingcart-menu__loading'));
		$('.js-shoppingcart-menu__svgimage').hide();
		$('.js-marketplace-cart__count').hide();

		$('.js-shoppingcart-menu__animation').removeClass('mediumAnimation tada');
	};

	cSite.marketplace.prototype.cartmenu_animate_loading_hide = function() {
		$('.js-shoppingcart-menu__loading').hide();
		$('.js-shoppingcart-menu__loading').empty();
		$('.js-shoppingcart-menu__svgimage').show();
		$('.js-marketplace-cart__count').show();
	};

	cSite.marketplace.prototype.animate_tada = function() {
		this.cartmenu_animate_loading_hide();
		$('.js-shoppingcart-menu__animation').addClass('mediumAnimation tada');
	};

	// ORDER BUTTONS
	cSite.marketplace.prototype.check_for_buttons = function() {
		var self = this;

		$('.js-marketplace-get-pcb-price').each(function(i,v){
			self.get_price_pcb(v);
		});

		$('.js-marketplace-get-price').each(function(i,v){
			self.get_price(v);
		});
	};

	cSite.marketplace.prototype.get_price = function(ref) {
		this.cart.getPrice(
			$(ref).data('sku'), 
			$(ref), 
			this.set_price
		);
	};

	cSite.marketplace.prototype.get_price_pcb = function(ref) {
		this.cart.getPCBPrice(
			$(ref).data('sqin'), 
			$(ref).data('boardtypeid'), 
			$(ref), 
			this.set_price
		);
	};

	cSite.marketplace.prototype.add_to_cart = function(ref) {
		var price = 0;
		$('.js-marketplace-get-price').each(function(i, v){
			if($(v).data('sku') == $(ref).data('sku')){
				price = $(v).html().replace('$','');
			}
		})
		// Analytics
		window.analytics.track('add to cart', {
			'item id': $(ref).data('sku'),
			'item name': $(ref).data('name'),
			'item price': price,
			'item type': $(ref).data('analytics-designtype'),
			'add to cart origin': $(ref).data('analytics-origin')
		});

        // check redirect flag
        if($(ref).data('redirect') && $(ref).data('redirect') == 1){
            this.redirect_flag = true;
        }

		// Lib
		this.cart.addToCart(
			$(ref).data('sku'), 
			1, 
			'PHYSICAL',
			this.analytics_obj(ref)
		);
	};

	cSite.marketplace.prototype.add_to_cart_pcb = function(ref) {
		this.cart.addToCartPCB(
			$(ref).data('boardid'), 
			$(ref).data('name'), 
			1, 
			$(ref).data('thumburl'), 
			$(ref).data('sqin'), 
			$(ref).data('boardtypeid'),
			$(ref).data('check'),
			this.analytics_obj(ref)
		);
	};

	cSite.marketplace.prototype.analytics_obj = function(ref) {

		var logged_in = (this.user == false) ? false : true;

		var r = {
			'item type': $(ref).data('analytics-designtype'),
			'add to cart origin': $(ref).data('analytics-origin'),
			'platform': 'Web',
			'product name': '123d.circuits.io',
			'login status': logged_in,
			'url': window.location.href,
			'path': window.location.pathname
		};

        var designType = $(ref).data('analytics-designtype');
        if (designType !== 'circuit scribe' && designType !== 'arduino') {
            r['designer'] = $(ref).data('analytics-designer');
            r['design type'] = designType;
        }

		if(logged_in){
			r['userId'] = $('meta[name="member"]').attr('content');
		}

		return r;
	};

	cSite.marketplace.prototype.set_price = function(ref, data) {
        if(data['product_info'] && data['product_info']['is_available'] == false){
            $('.js-marketplace-out-of-stock[data-sku='+data['asset_id']+']').removeClass('hide');
        }else{
            $('.js-marketplace-add-to-cart[data-sku='+data['asset_id']+']').removeClass('hide');
        }

		$(ref).html('$' + data['total_price']);
	};


}( window['cSite'] = window['cSite'] || {}, jQuery ));
(function( cSite, $, undefined ){

    cSite.iframeresize = function() {

        var self = this;

        $(document).on('pjax:end', function(xhr, options) {
            self.checkForIframeResize();
        });

        self.checkForIframeResize();

    }

    cSite.iframeresize.prototype.checkForIframeResize = function() {
        if($('.js-iframe-resize').length > 0){
            $('.js-iframe-resize').iFrameResize({log:true});
        }
    }
    

}( window['cSite'] = window['cSite'] || {}, jQuery ));
$(document).ready(function(){

	// outdated browser detection
	outdatedBrowser({
		bgColor: '#3f3f3f',
		color: '#e3e3e3',
		lowerThan: 'IE10'
	});

    // Identify parent window for Internet Explorer iframes
    window.name = 'circuits_parent_window';

    function create_site_frontend (){

        // JQUERY PLUGINS
        $('.js-enable-tooltip').tipsy();

        // Set CSRF token for all AJAX requests
        $.ajaxSetup({
            beforeSend: function(e, xhr, options) {
                // make sure we only send CSRF headers to our own server
                var host = false;
                if (xhr.url.indexOf("://") > -1) {
                    host = xhr.url.split('/')[2];
                }else {
                    host = xhr.url.split('/')[0];
                }
                if(host == window.location.host || xhr.url[0] == '/'){
                    // Same origin, set a CSRF token
                    // console.log('set CSRF');
                    e.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                }
            }
        });

        // CIRCUITS COMPONENTS
        signin            = new cSite.shadowbox('.js-shadowbox-trigger-signin', 320, 500);
        var signup        = new cSite.shadowbox('.js-shadowbox-trigger-signup', 320, 500);
        var video         = new cSite.shadowbox('.js-video-play', 800, 600);
        var sidebar       = new cSite.sidebar( $('.js-sidebar--left'), $('.js-sidebar--right'));
        var menu          = new cSite.sitemenu();
        var menu_search   = new cSite.sitemenu_search();
        var sitemenu_sub  = new cSite.sitemenu_sub();
        var jumper        = new cSite.jumper();
        var favorite      = new cSite.favorite();
        var thumbs        = new cSite.thumbs();
        var pjax          = new cSite.pjaxc(sidebar);
        var cjax          = new cSite.cjax();
        var upload        = new cSite.upload();
        var eagle         = new cSite.eagle();
        var card          = new cSite.card();
        var flash         = new cSite.flash();
        var gerber        = new cSite.gerber();
        var pagination    = new cSite.pagination();
        var sortabletable = new cSite.sortabletable();
        var confirm       = new cSite.confirm();
        var analytics     = new cSite.analytics();
        var marketplace   = new cSite.marketplace();
        var iframeresize  = new cSite.iframeresize();
        
        window['cart_menu'] = new cSite.shoppingcart_menu(); // needs to be refactored, but for now global

        // TODO
        var tags           = new siteGui.tags();
        var instant_search = new siteGui.instant_search();
        var pageless       = new siteGui.pageless();

    };

    // INIT
    create_site_frontend();


    // ----------------
    // EVENTS OLD
    // ----------------

    // component show
    $('.js-subdevice_select').change(function(event) {
        var subdevice_id = this.val();
        var options = $("#"+subdevice_id+"_terminal_option").html();

        var fields_group = $(element).parents('.fields_group');

        var terminal_select = $('.terminal_select',fields_group);
        terminal_select.html(options);

        var pad_id = $('.pad_id',fields_group).val();

        terminal_select.val(pad_id);
    });

});

//Breadboard symbol form stuff
function remove_fields(link) {
    $(link).prev("input[type=hidden]").val("1");
    $(link).closest(".fields_group").hide();
}

function add_fields(link, association, content) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g")
    $(link).parent().after(content.replace(regexp, new_id));
}

function add_fields_in(link, association, content, container, end) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g")
    if (end) {
        $(container).append(content.replace(regexp, new_id));
    } else {
        $(container).prepend(content.replace(regexp, new_id));
    }
}
;
// -------------------------------------------------
// Hi
// -------------------------------------------------

//  __   _____  ___________   _____ _                _ _       
// /  | / __  \|____ |  _  \ /  __ (_)              (_) |      
// `| | `' / /'    / / | | | | /  \/_ _ __ ___ _   _ _| |_ ___ 
//  | |   / /      \ \ | | | | |   | | '__/ __| | | | | __/ __|
// _| |_./ /___.___/ / |/ /  | \__/\ | | | (__| |_| | | |_\__ \
// \___/\_____/\____/|___/    \____/_|_|  \___|\__,_|_|\__|___/
//

// this is where the frontend code for the general website is loaded





































;
