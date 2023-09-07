"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8224],{6593:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(1644);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),l=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,h=p["".concat(g,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var g in t)hasOwnProperty.call(t,g)&&(u[g]=t[g]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(373),o=(n(1644),n(6593));const i={title:"Remote Debugging"},a=void 0,u={unversionedId:"user-guide/remote-debugging",id:"user-guide/remote-debugging",title:"Remote Debugging",description:"Remote debugging allows you to integrate the Rivet Core or Rivet Node libraries in another application, run your graphs in that other application, but see the live graph execution in the Rivet application! This is useful for debugging graphs that are running in a production environment, or for debugging graphs that are running in a different environment than the Rivet application. This is very useful when using the External Call Node, as the default executor cannot call into your own application's code.",source:"@site/docs/user-guide/remote-debugging.md",sourceDirName:"user-guide",slug:"/user-guide/remote-debugging",permalink:"/docs/user-guide/remote-debugging",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/remote-debugging.md",tags:[],version:"current",frontMatter:{title:"Remote Debugging"},sidebar:"userGuide",previous:{title:"Live Debugging",permalink:"/docs/user-guide/live-debugging"},next:{title:"Trivet",permalink:"/docs/trivet"}},g={},l=[{value:"Connecting the Remote Debugger",id:"connecting-the-remote-debugger",level:2},{value:"Running a Graph",id:"running-a-graph",level:2},{value:"Using the Remote Debugger",id:"using-the-remote-debugger",level:2},{value:"Supporting Remote Debugging",id:"supporting-remote-debugging",level:2}],c={toc:l},p="wrapper";function s(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Remote debugging allows you to integrate the Rivet Core or Rivet Node libraries in another application, run your graphs in that other application, but see the live graph execution in the Rivet application! This is useful for debugging graphs that are running in a production environment, or for debugging graphs that are running in a different environment than the Rivet application. This is very useful when using the ",(0,o.kt)("a",{parentName:"p",href:"../node-reference/external-call"},"External Call Node"),", as the default executor cannot call into your own application's code."),(0,o.kt)("h2",{id:"connecting-the-remote-debugger"},"Connecting the Remote Debugger"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Remote Debugger")," button in the menu bar to open the remote debugger dialog. You must enter a WebSocket URI here to connect to. This URI must be a WebSocket server that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"startRivetDebuggerServer"),". This is a function exported by the Rivet Core and Rivet Node libraries. You can use this function to start a WebSocket server that will allow the Rivet application to connect to it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"remote debugger",src:n(522).Z,width:"822",height:"408"})),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"startRivetDebuggerServer")," will listen for all WebSocket connections on port ",(0,o.kt)("strong",{parentName:"p"},"21888"),". You can change this by passing a port number to the options argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"startRivetDebuggerServer"),"."),(0,o.kt)("h2",{id:"running-a-graph"},"Running a Graph"),(0,o.kt)("p",null,"If the debugger server has configured ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamicGraphRun"),", then when clicking the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button in Rivet, the currently viewed graph will be executed on the remote server. If ",(0,o.kt)("inlineCode",{parentName:"p"},"allowGraphUpload")," is enabled, then the graph will be uploaded to the remote server before being executed, allowing you to make changes to the current graph and run them without saving or uploading your project file to the remote server."),(0,o.kt)("h2",{id:"using-the-remote-debugger"},"Using the Remote Debugger"),(0,o.kt)("p",null,"Whenever a graph is started on the server, its execution will immediately be visible in Rivet if it is connected as a remote debugger."),(0,o.kt)("p",null,"By default, you can both pause and abort the current execution in Rivet, and the execution will be paused or aborted on the remote server. This can be useful if you want to pause the execution to inspect the current state of the graph, or if you want to abort the execution because you detect some incorrect behavior."),(0,o.kt)("h2",{id:"supporting-remote-debugging"},"Supporting Remote Debugging"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"../api-reference/remote-debugging"},"remote debugging")," section of the API Reference for more information on how to support remote debugging in your application."))}s.isMDXComponent=!0},522:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remote-debugger-526fc9a9bdfeced3ff7b7d56a90a7dbc.png"}}]);