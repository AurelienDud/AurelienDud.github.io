(self.webpackChunkaureliendud_website=self.webpackChunkaureliendud_website||[]).push([[266],{4956:function(e,t,n){"use strict";function r(e){var t,n,r,l,o,i,a;return{title:(null==e||null===(t=e.frontmatter)||void 0===t?void 0:t.title)||null,date:(null==e||null===(n=e.frontmatter)||void 0===n?void 0:n.date)||null,category:(null==e||null===(r=e.frontmatter)||void 0===r?void 0:r.category)||null,cover:(null==e||null===(l=e.frontmatter)||void 0===l||null===(o=l.cover)||void 0===o?void 0:o.childImageSharp)||null,excerpt:(null==e?void 0:e.excerpt)||null,link:(null==e||null===(i=e.fields)||void 0===i?void 0:i.slug)||null,body:(null==e?void 0:e.body)||null,words:(null==e||null===(a=e.wordCount)||void 0===a?void 0:a.words)||null}}n.d(t,{B:function(){return r}})},4112:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5761),l=n(7294),o=n(3559),i=n(1870),a=n(4983),c=n(1274),s=n(9819),u=n(4956),d=n(3794);function m(e){var t=function(e){return e&&"number"==typeof e?Math.round(e/230):null}(e);return"number"!=typeof t?null:"< "+(t+1)+" "+(t<1?"minute":"minutes")}var v=n(130),f=n(7823);var p,b,h=function(){var e=(0,l.useRef)(null),t=(0,l.useState)(!1),n=t[0],r=t[1];return(0,l.useEffect)((function(){if(null!=e&&e.current&&!n){var t=document.createElement("script");t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","AurelienDud/AurelienDud.github.io"),t.setAttribute("issue-term","pathname"),t.setAttribute("theme","boxy-light"),t.setAttribute("label","comments"),t.setAttribute("async",!0),t.setAttribute("crossorigin","anonymous"),t.setAttribute("reverse-order",!0),t.setAttribute("input-position-top",!0),e.current.appendChild(t),r(!0)}}),[e]),l.createElement(l.Fragment,null,l.createElement("style",null,"\n  .utterances {\n    max-width: 100% !important;\n  }\n"),l.createElement("div",{className:"w-100",ref:e}))},w=(0,o.iv)(p||(p=(0,r.Z)(['\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0px -40px 40px -40px inset #00000030;\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-top: solid 2vw transparent;\n    border-bottom: solid 2vw white;\n    border-left: solid 50vw white;\n    border-right: solid 50vw white;\n  }\n']))),g=(0,o.iv)(b||(b=(0,r.Z)(["\n  position: relative;\n  border-radius: 5px;\n  border-top: solid 6px white;\n  border-right: solid 6px white;\n  border-left: solid 6px white;\n  transform-origin: center;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  transition: all 0s 0s;\n  background-color: #ffffff30;\n  opacity: 1;\n  transition: opacity linear 0.4s;\n  box-shadow: rgb(0 0 0 / 33%) 0px -45px 20px -20px inset;\n"])));function y(e){var t=e.data,n=(0,u.B)(t.mdx),r={type:"article",category:n.category},p=(0,l.useRef)(null),b=(0,l.useRef)({scroll:0,mov:0,elBound:null});return(0,l.useEffect)((function(){n.cover&&p.current&&(b.current.elBound||(b.current.elBound=p.current.getBoundingClientRect()))}),[p,n]),(0,l.useEffect)((function(){if(n.cover&&p.current)return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)};function e(e){if(e.preventDefault(),b.current.elBound&&!(window.scrollY>b.current.elBound.height)){var t=Math.max(0,Math.round(1.25*window.scrollY)),n=Math.round(t-b.current.scroll),r=1-1/b.current.elBound.height*t*1.25;Math.sign(n)!==Math.sign(b.current.mov)&&0!==b.current.scroll||(p.current.style.transform="translate3d(0, "+t+"px, 0)",p.current.style.opacity=r),b.current.scroll=t,b.current.mov=n}}}),[n]),l.createElement(v.Z,{meta:r},n.cover&&l.createElement("div",{style:{overflow:"hidden"}},l.createElement("div",{className:(0,o.cx)(w,"bg-primary")},l.createElement("div",{className:"container-reading"},l.createElement("div",{className:g,ref:p},l.createElement(i.G,{image:(0,i.e)(n.cover),alt:""}))))),l.createElement("div",{className:"container mt-2 mb-3"},(n.title||n.category)&&l.createElement("div",{className:"h1 mb-3 text-center"},n.title&&l.createElement("h1",{className:"h-0"},n.title)),l.createElement("div",{className:"container-reading mt-3"},n.date&&n.words&&l.createElement("div",{className:"py-1 my-4 border-top border-bottom text-muted small"},l.createElement("div",{className:"row no-gutters"},n.category&&l.createElement("div",{className:"col-12 col-sm px-1"},l.createElement(f.Z,{to:(0,d.f)(n.category),className:"decoration-unset"},"Catégorie : ",n.category)),n.words&&l.createElement("div",{className:"col-12 col-sm px-1 text-center"},m(40)),n.date&&l.createElement("div",{className:(0,o.cx)("col-12 col-sm px-1",n.words&&"text-sm-right border-top border-sm-top-0 pt-1 pt-sm-0 mt-1 mt-sm-0")},"publié le ",n.date))),n.body&&l.createElement(a.MDXProvider,{components:s.Z},l.createElement(c.MDXRenderer,null,n.body)),l.createElement("div",{className:"mt-4 pt-1 border-top"},l.createElement(h,null)))))}}}]);
//# sourceMappingURL=component---src-templates-template-blog-js-4976e5508ea67ea26540.js.map