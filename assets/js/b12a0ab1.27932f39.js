"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4531],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"\u9879\u76ee\u521d\u59cb\u5316"},l=void 0,c={unversionedId:"hooks/hooks_create",id:"version-2.0.0/hooks/hooks_create",title:"\u9879\u76ee\u521d\u59cb\u5316",description:"\u521b\u5efa",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_create.md",sourceDirName:"hooks",slug:"/hooks/hooks_create",permalink:"/docs/2.0.0/hooks/hooks_create",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/hooks/hooks_create.md",tags:[],version:"2.0.0",frontMatter:{title:"\u9879\u76ee\u521d\u59cb\u5316"},sidebar:"hooks",previous:{title:"\u7eaf\u63a5\u53e3\u9879\u76ee\u589e\u52a0 Hooks \u652f\u6301",permalink:"/docs/2.0.0/hooks/hooks_bff"},next:{title:"\u81ea\u5b9a\u4e49\u524d\u7aef SDK",permalink:"/docs/2.0.0/hooks/hooks_custom_request"}},p=[{value:"\u521b\u5efa",id:"\u521b\u5efa",children:[],level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",children:[],level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[],level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,o.kt)("p",null,"serverless \u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm v6\n$ npm init midway --template=@midwayjs-examples/serverless-boilerplate-hooks-react\n# npm v7\n$ npm init midway -- --template=@midwayjs-examples/serverless-boilerplate-hooks-react\n")),(0,o.kt)("p",null,"web \u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm v6\n$ npm init midway --template=@midwayjs-examples/applicaiton-hooks-koa-react\n# npm v7\n$ npm init midway -- --template=@midwayjs-examples/applicaiton-hooks-koa-react\n")),(0,o.kt)("p",null,"\u793e\u533a\u7528\u6237\u4e5f\u63d0\u4f9b\u4e86 vue \u6a21\u677f\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/issues/1229"},"issue")),(0,o.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),(0,o.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u8bbf\u95ee\u547d\u4ee4\u884c\u63d0\u793a\u7684\u7aef\u53e3\uff0c\u5c31\u80fd\u770b\u5230\u9875\u9762\u4e86\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Send message to backend"),"\uff0c\u6765\u4f53\u9a8c\u51fd\u6570\u5f0f\u5f00\u53d1\u7684\u63a5\u53e3\u3002"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622788746000-d557cbdb-76d7-435f-91d8-1a1f54c6af51.png#clientId=u5406b60f-a2f1-4&from=paste&height=222&id=u1aaa3515&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=404&originalType=binary&ratio=1&size=58812&status=done&style=none&taskId=ueeba5812-e5fb-4ffc-907c-9aabe6a78aa&width=404",width:"404"}),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/98602/1622788715959-e1b7d313-9ce3-40c4-bb32-066b665c4d78.png#clientId=u5406b60f-a2f1-4&from=paste&height=845&id=ub431f200&margin=%5Bobject%20Object%5D&name=image.png&originHeight=845&originWidth=1469&originalType=binary&ratio=1&size=338897&status=done&style=none&taskId=u00355cc6-42ea-4999-a6f5-dda5270d326&width=1469",width:"1469"}),(0,o.kt)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,o.kt)("p",null,"\u90e8\u7f72\u524d\u8bf7\u5148\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u90e8\u7f72 Web \u5e94\u7528")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ node bootstrap.js\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u90e8\u7f72 Serverless")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run deploy\n")))}m.isMDXComponent=!0}}]);