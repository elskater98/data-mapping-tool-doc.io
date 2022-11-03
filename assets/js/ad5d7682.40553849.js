"use strict";(self.webpackChunkdata_mapping_tool_doc_io=self.webpackChunkdata_mapping_tool_doc_io||[]).push([[874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Backend",sidebar_position:2},i=void 0,l={unversionedId:"backend/backend",id:"backend/backend",title:"Backend",description:"In order to run the platform successfully, we need to configure the backend and client part. First of all we have to install all",source:"@site/docs/backend/backend.mdx",sourceDirName:"backend",slug:"/backend/",permalink:"/data-mapping-tool-doc.io/docs/backend/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/backend.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Backend",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/data-mapping-tool-doc.io/docs/intro"},next:{title:"Client",permalink:"/data-mapping-tool-doc.io/docs/client/"}},c={},p=[{value:"Install Python Dependencies",id:"install-python-dependencies",level:2},{value:"Configure environment variables",id:"configure-environment-variables",level:2},{value:"Run Server",id:"run-server",level:2},{value:"Ontology",id:"ontology",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to run the platform successfully, we need to configure the backend and client part. First of all we have to install all\nthe dependencies said in ",(0,a.kt)("a",{parentName:"p",href:"/data-mapping-tool-doc.io/docs/intro"},"section"),"."),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"install-python-dependencies"},"Install Python Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install -r requirements.txt\n")),(0,a.kt)("h2",{id:"configure-environment-variables"},"Configure environment variables"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Please, avoid sharing the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, it contains sensible data such as database configuration. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env"',title:'".env"'},"FLASK_APP=app\nFLASK_ENV=production\n\nSECRET_KEY=\nSERVER_HOSTNAME=\nSERVER_PORT=\n\nJWT_SECRET_KEY=\nJWT_ACCESS_TOKEN_EXPIRES=\nJWT_REFRESH_TOKEN_EXPIRES=\n\nMONGO_URI=\n\nADMIN_EMAIL=\nADMIN_PASSWORD=\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"An easy way to generate secret keys is using the follow command line"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"python -c 'import secrets; print(secrets.token_hex())'\n"))),(0,a.kt)("h2",{id:"run-server"},"Run Server"),(0,a.kt)("p",null,"Set the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"<localhost>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<port>")," variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flask run --host=<localhost> --port=<port>\n")),(0,a.kt)("h2",{id:"ontology"},"Ontology"),(0,a.kt)("p",null,"The ontology that the backend may use is in ",(0,a.kt)("inlineCode",{parentName:"p"},"RDF/XML Syntax")," format, in addition you have some example in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/ontologies"),"."))}d.isMDXComponent=!0}}]);