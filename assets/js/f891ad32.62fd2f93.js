"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4823],{6593:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1644),r=n(156);const i={tabItem:"tabItem_hFhF"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(373),r=n(1644),i=n(156),l=n(1476),o=n(2824),u=n(9643),s=n(7190),p=n(6985);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,s]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=u??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var f=n(8810);const v={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(373),r=(n(1644),n(6593)),i=n(6663),l=n(7026);const o={title:"Rivet Integration Getting Started"},u=void 0,s={unversionedId:"api-reference/getting-started-integration",id:"api-reference/getting-started-integration",title:"Rivet Integration Getting Started",description:"Welcome to the starting guide for integrating Rivet into your application! Currently, we only support integration via Node.js using the @ironclad/rivet-node package.",source:"@site/docs/api-reference/getting-started-integration.mdx",sourceDirName:"api-reference",slug:"/api-reference/getting-started-integration",permalink:"/docs/api-reference/getting-started-integration",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/api-reference/getting-started-integration.mdx",tags:[],version:"current",frontMatter:{title:"Rivet Integration Getting Started"},sidebar:"apiReference",previous:{title:"Rivet API Reference",permalink:"/docs/api-reference"},next:{title:"Remote Debugging with Rivet",permalink:"/docs/api-reference/remote-debugging"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Getting GitHub Access Token",id:"getting-github-access-token",level:3},{value:"Setting Up the Environment",id:"setting-up-the-environment",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Using <code>runGraphInFile</code>",id:"using-rungraphinfile",level:2},{value:"<code>runGraphInFile</code> Parameters",id:"rungraphinfile-parameters",level:3},{value:"<code>RunGraphOptions</code>",id:"rungraphoptions",level:3},{value:"Example Code",id:"example-code",level:3},{value:"Remote Debugging",id:"remote-debugging",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the starting guide for integrating Rivet into your application! Currently, we only support integration via Node.js using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ironclad/rivet-node")," package."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First, you'll need to setup your environment to authenticate with our private GitHub NPM registry."),(0,r.kt)("h3",{id:"getting-github-access-token"},"Getting GitHub Access Token"),(0,r.kt)("p",null,"You need to get a GitHub access token (classic) for the account that has access to Rivet."),(0,r.kt)("h3",{id:"setting-up-the-environment"},"Setting Up the Environment"),(0,r.kt)(i.Z,{defaultValue:"yarn2",values:[{label:"Yarn 2",value:"yarn2"},{label:"Yarn 1",value:"yarn1"},{label:"NPM",value:"npm"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn2",mdxType:"TabItem"},(0,r.kt)("p",null,"For Yarn 2, create or update a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.yarnrc.yml")," file with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"npmScopes:\n  ironclad:\n    npmRegistryServer: https://npm.pkg.github.com/ironclad\n    npmAuthToken: YOUR_AUTH_TOKEN\n    npmAlwaysAuth: true\n")),(0,r.kt)("p",null,"Install using Yarn 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ironclad/rivet-node\n"))),(0,r.kt)(l.Z,{value:"yarn1",mdxType:"TabItem"},(0,r.kt)("p",null,"For Yarn 1, you need to create or update a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.npmrc")," file with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//npm.ironclad/:_authToken=YOUR_AUTH_TOKEN\n@ironclad:registry=https://npm.pkg.github.com/ironclad\n")),(0,r.kt)("p",null,"And also a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.yarnrc")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'"@ironclad:registry" "https://npm.pkg.github.com/ironclad"\n')),(0,r.kt)("p",null,"Install using Yarn 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ironclad/rivet-node\n"))),(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("p",null,"For NPM, create or update a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.npmrc")," file with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//npm.ironclad/:_authToken=YOUR_AUTH_TOKEN\n@ironclad:registry=https://npm.pkg.github.com/ironclad\n")),(0,r.kt)("p",null,"Install using NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ironclad/rivet-node\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_AUTH_TOKEN")," with your GitHub access token.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Once Rivet is installed, you can import it into your application using the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as Rivet from '@ironclad/rivet-node';\n")),(0,r.kt)("h2",{id:"using-rungraphinfile"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"runGraphInFile")),(0,r.kt)("p",null,"The simplest way to get started with Rivet is by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"runGraphInFile")," function. This function allows you to execute a graph defined in a Rivet project file."),(0,r.kt)("h3",{id:"rungraphinfile-parameters"},(0,r.kt)("inlineCode",{parentName:"h3"},"runGraphInFile")," Parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"runGraphInFile")," function takes two parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": A string representing the path to your Rivet project file."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": An object of type ",(0,r.kt)("inlineCode",{parentName:"li"},"RunGraphOptions"),".")),(0,r.kt)("h3",{id:"rungraphoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"RunGraphOptions")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RunGraphOptions")," type is used to pass various parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"runGraphInFile")," function. Here is what it looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export type RunGraphOptions = {\n  graph: string;\n  inputs?: Record<string, LooseDataValue>;\n  context?: Record<string, LooseDataValue>;\n  remoteDebugger?: RivetDebuggerServer;\n  nativeApi?: NativeApi;\n  externalFunctions?: {\n    [key: string]: ExternalFunction;\n  };\n  onUserEvent?: {\n    [key: string]: (data: DataValue | undefined) => void;\n  };\n  abortSignal?: AbortSignal;\n} & {\n  [P in keyof ProcessEvents as `on${PascalCase<P>}`]?: (params: ProcessEvents[P]) => void;\n} & Settings;\n")),(0,r.kt)("p",null,"Let's break down the important fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graph"),": Specifies the graph you're running. This can either be the ID or the display name of the graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),': Specifies the input values to the graph. These can either be plain JavaScript values like "foo", or ',(0,r.kt)("inlineCode",{parentName:"li"},"{type: 'string', value: 'foo'}")," objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context"),": Similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"inputs"),", but these values are available to every graph and subgraph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"externalFunctions"),": This is how you define integration points that you can call from inside Rivet graphs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openAiKey"),": Your OpenAI API key. This is required if you're using any Chat nodes in your graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openAiOrganization"),": If you are using a non-default OpenAI organization, you may specify your organization here.")),(0,r.kt)("h3",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"Here's a basic example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"runGraphInFile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { runGraphInFile, DataValue } from '@ironclad/rivet-node';\n\nawait rivet.runGraphInFile('./myProject.rivet', {\n  graph: 'My Graph Name',\n  inputs: {\n    myInput: 'hello world',\n  },\n  context: {\n    myContext: 'global value',\n  },\n  externalFunctions: {\n    helloWorld: async (...args: unknown[]): Promise<DataValue> => {\n      return {\n        type: 'string',\n        value: 'hello world',\n      };\n    },\n  },\n  onUserEvent: {\n    myEvent: (data: DataValue): Promise<void> => {\n      console.log(data);\n    },\n  },\n  openAiKey: 'my-openai-key',\n  openAiOrganization: 'my-organization',\n});\n")),(0,r.kt)("h2",{id:"remote-debugging"},"Remote Debugging"),(0,r.kt)("p",null,"See the (Remote Debugging)","[./remote-debugging]"," page for more information on how to set up the remote debugger."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./node/overview"},"Rivet Node API Reference"))))}g.isMDXComponent=!0}}]);