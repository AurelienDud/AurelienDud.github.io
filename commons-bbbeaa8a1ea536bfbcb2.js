(self.webpackChunkaureliendud_website=self.webpackChunkaureliendud_website||[]).push([[351],{7314:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7286a748878bf7d6e9124606efa19792/fc4a5/logo.png","srcSet":"/static/7286a748878bf7d6e9124606efa19792/c27bc/logo.png 11w,\\n/static/7286a748878bf7d6e9124606efa19792/4b259/logo.png 21w,\\n/static/7286a748878bf7d6e9124606efa19792/fc4a5/logo.png 42w,\\n/static/7286a748878bf7d6e9124606efa19792/74bab/logo.png 84w","sizes":"(min-width: 42px) 42px, 100vw"},"sources":[{"srcSet":"/static/7286a748878bf7d6e9124606efa19792/32806/logo.webp 11w,\\n/static/7286a748878bf7d6e9124606efa19792/8bc71/logo.webp 21w,\\n/static/7286a748878bf7d6e9124606efa19792/544ae/logo.webp 42w,\\n/static/7286a748878bf7d6e9124606efa19792/c5e44/logo.webp 84w","type":"image/webp","sizes":"(min-width: 42px) 42px, 100vw"}]},"width":42,"height":42}')},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3762:function(e,t){"use strict";t.Z=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}},4759:function(e,t){"use strict";t.Z={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5610:function(e,t,n){"use strict";var r=n(7294),o=n(3794),i=n(1974),a=n(9666);t.Z=function(){return r.createElement("div",{className:"bg-secondary small text-light py-3 text-center text-md-left"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center justify-content-between"},r.createElement("div",{className:"col col-md-auto order-md-2"},r.createElement("div",{className:"d-flex flex-column flex-md-row"},r.createElement("div",{className:"nav-link"},r.createElement(i.Z,{to:(0,o.B)("legal").href,className:"text-light"},(0,o.B)("legal").label)))),r.createElement("div",{className:"col col-md-auto order-md-1"},(0,a.Z)("copyright","global")))))}},9219:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=n(1974),a=n(1870),c=n(3794),l=n(9463),u="nav-link font-weight-bold h4 text-current";t.Z=function(){var e=(0,o.K2)("1789751783"),t=(0,r.useState)(""),s=t[0],f=t[1];return(0,r.useEffect)((function(){var t,n;return f((null==e||null===(t=e.meta)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.title)||"")}),[e]),r.createElement(r.Fragment,null,r.createElement("div",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top"},r.createElement("div",{className:"container"},r.createElement(i.Z,{className:"navbar-brand",to:(0,c.B)("home").href,title:(0,c.B)("home").label},r.createElement(a.S,{src:"../assets/images/logo.png",width:42,height:42,className:"d-inline-block align-top",alt:s,__imageData:n(7314)})),r.createElement("div",{className:"d-flex ml-auto"},r.createElement(i.Z,{to:(0,c.B)("github").href,title:(0,c.B)("github").label,className:u,target:"_blank",rel:"noopener"},r.createElement(l.pZu,null)),r.createElement(i.Z,{to:(0,c.B)("linkedin").href,title:(0,c.B)("linkedin").label,className:u,target:"_blank",rel:"noopener"},r.createElement(l.n7M,null))))))}},1974:function(e,t,n){"use strict";var r=n(9756),o=n(7294),i=n(5444);t.Z=function(e){var t=e.to,n=e.children,a=(0,r.Z)(e,["to","children"]);return o.createElement(o.Fragment,null,null!==t.match(/^(\/\/|www.|http|https|#)/)?o.createElement("a",Object.assign({href:t},a),n):o.createElement(i.rU,Object.assign({to:t},a),n))}},9666:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(7294),n(3935);var r={blog:{title:"Articles de blog"},global:{copyright:"© 2021 Aurélien Dudonney"},errors:{notfoundTitle:"404",notfoundText:"L'adresse demandé de produit pas de résultat.",notfoundAction:"accéder à la page d'accueil"}};function o(e,t){return t&&Object.prototype.hasOwnProperty.call(r,t)&&Object.prototype.hasOwnProperty.call(r[t],e)?r[t][e]:e&&Object.prototype.hasOwnProperty.call(r,e)?r[e]:""}},3794:function(e,t,n){"use strict";n.d(t,{B:function(){return o},f:function(){return i}});var r={home:{label:"Accueil",href:"/"},legal:{label:"Mentions légales",href:"/mentions-legales"},github:{label:"Github",href:"https://github.com/AurelienDud"},linkedin:{label:"LinkedIn",href:"https://www.linkedin.com/in/aureliendudonney/"}};function o(e,t){void 0===t&&(t=null);var n={isRegistered:!1,label:null,href:null};return Object.prototype.hasOwnProperty.call(r,e)&&(n.isRegistered=!0,n.label=r[e].label||null,n.href=r[e].href||null),Array.isArray(t)&&t.length>0&&n.href&&(n.href=n.href.concat("?").concat(t.filter((function(e){return Array.isArray(e)})).map((function(e){return e.join("=")})).join("&"))),n}function i(e){return"/categories/"+e}},1590:function(e,t,n){"use strict";n.d(t,{Z:function(){return Se}});var r,o,i,a,c=n(7294),l=n(5444),u=n(18),s=n(5697),f=n.n(s),d=n(4839),p=n.n(d),m=n(2993),h=n.n(m),y=n(6494),b=n.n(y),g="bodyAttributes",v="htmlAttributes",w="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",C="href",A="http-equiv",S="innerHTML",k="itemprop",x="name",j="property",P="rel",N="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",_="encodeSpecialCharacters",B="onChangeClientState",Z="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=ee(e,T.TITLE),n=ee(e,Z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,M);return t||r||void 0},$=function(e){return ee(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===P&&"canonical"===e[n].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==S&&c!==E&&c!==k||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=b()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;se(T.BODY,r),se(T.HTML,o),ue(f,d);var p={baseTag:fe(T.BASE,n),linkTags:fe(T.LINK,i),metaTags:fe(T.META,a),noscriptTags:fe(T.NOSCRIPT,c),scriptTags:fe(T.SCRIPT,u),styleTags:fe(T.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},le=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),se(T.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=pe(n,r),[c.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=de(n),i=le(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case v:return{toComponent:function(){return pe(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:me(T.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(v,o,r),link:me(T.LINK,i,r),meta:me(T.META,a,r),noscript:me(T.NOSCRIPT,c,r),script:me(T.SCRIPT,l,r),style:me(T.STYLE,u,r),title:me(T.TITLE,{title:f,titleAttributes:d},r)}},ye=p()((function(e){return{baseTag:Q([C,I],e),bodyAttributes:J(g,e),defer:ee(e,R),encode:ee(e,_),htmlAttributes:J(v,e),linkTags:X(T.LINK,[P,C],e),metaTags:X(T.META,[x,O,A,j,k],e),noscriptTags:X(T.NOSCRIPT,[S],e),onChangeClientState:$(e),scriptTags:X(T.SCRIPT,[N,S],e),styleTags:X(T.STYLE,[E],e),title:V(e),titleAttributes:J(w,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),he)((function(){return null})),be=(o=ye,a=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(G(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind;var ge=be,ve=function(e){return[{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.author},{name:"twitter:title",content:e.siteTitle},{name:"twitter:description",content:e.description}]};function we(e){return c.createElement(ge,{htmlAttributes:{lang:e.lang},title:e.title||e.siteTitle,titleTemplate:"%s | "+e.siteTitle,meta:[{name:"description",content:e.description}].concat((0,u.Z)((t=e,r=[{property:"og:title",content:t.title||t.siteTitle},{property:"og:description",content:t.description},{property:"og:type",content:t.type}],(null===(n=t.tags)||void 0===n?void 0:n.length)>0&&(r.push({name:"keywords",content:t.tags.join(", ")}),"article"===t.type&&r.push({name:"article:tag",content:t.tags.join(", ")})),"article"===t.type&&(t.author&&r.push({name:"article:author",content:t.author}),t.category&&r.push({name:"article:section",content:t.category})),r)),(0,u.Z)(ve(e)))});var t,n,r}we.defaultProps={title:"",lang:"fr",type:"website",tags:null,category:null};var Te=we;function Oe(e){var t=e.children,n=e.meta;return c.createElement(l.i1,{query:"3521639313",render:function(e){return c.createElement(c.Fragment,null,c.createElement(Te,function(e,t){var n,r,o,i,a,c;return{title:null==t?void 0:t.title,siteTitle:null==e||null===(n=e.site)||void 0===n||null===(r=n.siteMetadata)||void 0===r?void 0:r.title,description:(null==t?void 0:t.description)||(null==e||null===(o=e.site)||void 0===o||null===(i=o.siteMetadata)||void 0===i?void 0:i.description),lang:null==t?void 0:t.lang,author:(null==t?void 0:t.author)||(null==e||null===(a=e.site)||void 0===a||null===(c=a.siteMetadata)||void 0===c?void 0:c.author),tags:null==t?void 0:t.tags,category:null==t?void 0:t.category,type:null==t?void 0:t.type}}(e,n)),t)}})}Oe.defaultProps={children:null,meta:{}};var Ee=Oe,Ce=n(9219),Ae=n(5610);var Se=function(e){var t=e.children,n=e.meta;return c.createElement(Ee,{meta:n},c.createElement(Ce.Z,null),c.createElement("div",{className:"str-page"},t),c.createElement(Ae.Z,null))}}}]);
//# sourceMappingURL=commons-bbbeaa8a1ea536bfbcb2.js.map