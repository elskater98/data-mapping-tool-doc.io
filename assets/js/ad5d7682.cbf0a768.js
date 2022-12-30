"use strict";(self.webpackChunkdata_mapping_tool_doc_io=self.webpackChunkdata_mapping_tool_doc_io||[]).push([[874],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"Backend",sidebar_position:2},i=void 0,l={unversionedId:"backend/backend",id:"backend/backend",title:"Backend",description:"In order to run the platform successfully, we need to configure the backend and client part. First of all we have to install all",source:"@site/docs/backend/backend.mdx",sourceDirName:"backend",slug:"/backend/",permalink:"/bee-mapping-doc.io/docs/backend/",draft:!1,editUrl:"https://elskater98.github.io/docs/backend/backend.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Backend",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/bee-mapping-doc.io/docs/intro"},next:{title:"Client",permalink:"/bee-mapping-doc.io/docs/client/"}},c={},p=[{value:"Install Python Dependencies",id:"install-python-dependencies",level:2},{value:"Configure environment variables",id:"configure-environment-variables",level:2},{value:"Run Server",id:"run-server",level:2},{value:"Ontology",id:"ontology",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to run the platform successfully, we need to configure the backend and client part. First of all we have to install all\nthe dependencies said in ",(0,a.kt)("a",{parentName:"p",href:"/bee-mapping-doc.io/docs/intro"},"section"),"."),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"install-python-dependencies"},"Install Python Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip install -r requirements.txt\n")),(0,a.kt)("h2",{id:"configure-environment-variables"},"Configure environment variables"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Please, avoid sharing the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, it contains sensible data such as database configuration. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env"',title:'".env"'},"FLASK_APP=app\nFLASK_ENV=production\n\nSECRET_KEY=\nSERVER_HOSTNAME=\nSERVER_PORT=\n\nJWT_SECRET_KEY=\nJWT_ACCESS_TOKEN_EXPIRES=\nJWT_REFRESH_TOKEN_EXPIRES=\n\nMONGO_URI=\n\nADMIN_EMAIL=\nADMIN_PASSWORD=\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"An easy way to generate secret keys is using the follow command line"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -c 'import secrets; print(secrets.token_hex())'\n"))),(0,a.kt)("h2",{id:"run-server"},"Run Server"),(0,a.kt)("p",null,"Set the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"<localhost>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<port>")," variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flask run --host=<localhost> --port=<port>\n")),(0,a.kt)("h2",{id:"ontology"},"Ontology"),(0,a.kt)("p",null,"The ontology that the backend may use is in ",(0,a.kt)("inlineCode",{parentName:"p"},"RDF/XML Syntax")," format, in addition you have some example in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/ontologies"),"."))}d.isMDXComponent=!0}}]);