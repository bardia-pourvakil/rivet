"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[202],{6593:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>c});var A=i(1644);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);e&&(A=A.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,A)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,A,a=function(t,e){if(null==t)return{};var i,A,a={},r=Object.keys(t);for(A=0;A<r.length;A++)i=r[A],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(A=0;A<r.length;A++)i=r[A],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var o=A.createContext({}),l=function(t){var e=A.useContext(o),i=e;return t&&(i="function"==typeof t?t(e):n(n({},e),t)),i},u=function(t){var e=l(t.components);return A.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return A.createElement(A.Fragment,{},e)}},h=A.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(i),h=a,c=p["".concat(o,".").concat(h)]||p[h]||d[h]||r;return i?A.createElement(c,n(n({ref:e},u),{},{components:i})):A.createElement(c,n({ref:e},u))}));function c(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,n=new Array(r);n[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:a,n[1]=s;for(var l=2;l<r;l++)n[l]=i[l];return A.createElement.apply(null,n)}return A.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7383:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var A=i(373),a=(i(1644),i(6593));const r={sidebar_label:"Getting Started"},n="Trivet - Getting Started",s={unversionedId:"user-guide/trivet-getting-started",id:"user-guide/trivet-getting-started",title:"Trivet - Getting Started",description:"To get started with Trivet, select the Trivet Tests tab at the top of the Rivet application.",source:"@site/docs/user-guide/trivet-getting-started.md",sourceDirName:"user-guide",slug:"/user-guide/trivet-getting-started",permalink:"/docs/user-guide/trivet-getting-started",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/trivet-getting-started.md",tags:[],version:"current",frontMatter:{sidebar_label:"Getting Started"},sidebar:"userGuide",previous:{title:"Trivet",permalink:"/docs/trivet"},next:{title:"Validation Graphs",permalink:"/docs/user-guide/trivet-validation-graphs"}},o={},l=[{value:"Test Suites",id:"test-suites",level:2},{value:"Test Graph",id:"test-graph",level:3},{value:"Validator Graph",id:"validator-graph",level:3},{value:"Test Cases",id:"test-cases",level:2},{value:"Test Case Editor",id:"test-case-editor",level:3},{value:"Running Tests",id:"running-tests",level:2},{value:"Multiple Iterations",id:"multiple-iterations",level:3},{value:"Tutorial",id:"tutorial",level:2}],u={toc:l},p="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,A.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"trivet---getting-started"},"Trivet - Getting Started"),(0,a.kt)("p",null,"To get started with Trivet, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Trivet Tests")," tab at the top of the Rivet application."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rivet tabs",src:i(6565).Z,width:"364",height:"62"})),(0,a.kt)("h2",{id:"test-suites"},"Test Suites"),(0,a.kt)("p",null,"Initially, you will have no test suites. Trivet is organized into test suites - each test suite has a single graph to test, and a single validator graph."),(0,a.kt)("p",null,"To add a new Test Suite, click the New Test Suite button if you have none, or right click and choose ",(0,a.kt)("inlineCode",{parentName:"p"},"New Test Suite")," in the test suite list on the left."),(0,a.kt)("h3",{id:"test-graph"},"Test Graph"),(0,a.kt)("p",null,"The test graph is the graph that you want to test. It can have any ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/graph-input"},"Graph Input")," nodes, and any ",(0,a.kt)("a",{parentName:"p",href:"../node-reference/graph-output"},"Graph Output")," nodes. Trivet will pass in various inputs to the graph, and compare the outputs to the expected outputs using the Validator Graph."),(0,a.kt)("p",null,"Select the test graph using the dropdown at the top:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test Graph Dropdown",src:i(1209).Z,width:"394",height:"142"})),(0,a.kt)("p",null,'Each test case is required to pass every input to the graph. You may find it useful to create a separate "test" graph for your actual target test graph. This will let you pass in any default values for the inputs, and will let you add any additional nodes that you need to test your graph and extract the outputs from the graph that you care about.'),(0,a.kt)("h3",{id:"validator-graph"},"Validator Graph"),(0,a.kt)("p",null,"Instead of using baked-in validations, Trivet uses Rivet graphs to perform validation on your test graph. This allows you the ultimate flexibility in how you want to validate your graph. Select the validator graph using the dropdown at the top:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Validator Graph Dropdown",src:i(1564).Z,width:"395",height:"167"})),(0,a.kt)("p",null,"A validator graph is a specially constructed Rivet graph, with the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It must have an Graph Input node named ",(0,a.kt)("inlineCode",{parentName:"li"},"input")," of type Object."),(0,a.kt)("li",{parentName:"ul"},"It must have a Graph Input node named ",(0,a.kt)("inlineCode",{parentName:"li"},"output")," of type Object."),(0,a.kt)("li",{parentName:"ul"},"It must have a Graph Input node named ",(0,a.kt)("inlineCode",{parentName:"li"},"expectedOutput")," of type Object."),(0,a.kt)("li",{parentName:"ul"},'It must have any number of Graph Output nodes that must be either String, or Boolean. These are the "validations" that the graph performs.')),(0,a.kt)("p",null,"For more information on creating and crafting validator graphs, see the ",(0,a.kt)("a",{parentName:"p",href:"trivet-validation-graphs"},"Trivet - Validator Graphs")," guide."),(0,a.kt)("h2",{id:"test-cases"},"Test Cases"),(0,a.kt)("p",null,"Each test suite has a number of Test Cases. These are sets of inputs and expected outputs that your graph should validate."),(0,a.kt)("p",null,"To create a Test Case, click the New Test Case button."),(0,a.kt)("p",null,"Click on any test case to select it and open the Test Case Editor on the right."),(0,a.kt)("h3",{id:"test-case-editor"},"Test Case Editor"),(0,a.kt)("p",null,"The Test Case Editor contains two editable JSON blocks. The input to the test case, and the expected output from the test case. When creating a new test case, the inputs and expected outputs will auto-populate with the properties and the types of each property."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The inputs are passed into your Test Graph as inputs. Every input to your test graph is required to be passed."),(0,a.kt)("li",{parentName:"ul"},"The expected outputs are passed into your Validation Graph to the ",(0,a.kt)("inlineCode",{parentName:"li"},"expectedOutputs")," input. Every output from your test graph must be passed. If some outputs are unused in your validation, you should just pass dummy values.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test Case Editor",src:i(7781).Z,width:"674",height:"534"})),(0,a.kt)("p",null,"When a test case has ran, a third readonly block will appear, which shows the outputs from your test graph. You can use this to examine the outputs that either passed or failed validation."),(0,a.kt)("h2",{id:"running-tests"},"Running Tests"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Test Suite")," button when a test suite is selected to run all test cases in the test suite."),(0,a.kt)("p",null,"You can right click on a single Test Case and choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Test Case")," to run only that test case."),(0,a.kt)("h3",{id:"multiple-iterations"},"Multiple Iterations"),(0,a.kt)("p",null,"As LLMs are inherently random, it is useful to run multiple iterations of the same test case. When right clicking on a test case, you can choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Run With Iteration Count...")," to choose a number of iterations to run the test case."),(0,a.kt)("p",null,"The results of all iterations will be shown in the Test Result Outputs block in the test case editor. It includes how many have passed out of how many have ran."),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"trivet-tutorial"},"Trivet Tutorial")," for a step-by-step guide on how to use Trivet for the first time."))}d.isMDXComponent=!0},6565:(t,e,i)=>{i.d(e,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAAA+CAYAAAAPriHxAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABbKADAAQAAAABAAAAPgAAAABUWvBUAAAQ3UlEQVR4Ae2dB3AVVReADyEQSEKTHsF/BEFGERUBKzr23nsvM+ro6Nh7wzL23nvvZey99zKKil0GBEGlQ3p7Sf79buY+XjZv23sk2ZecO7N5u7ft3e/ce+65Z0u6TZ0yuUk0KAEloASUQOwJ5MW+hdpAJaAElIASMARUYWtHUAJKQAnkCIH8xVUrPSL5+fmSSCRWWdO1vuxQKj/lF4WA9pcotFrnzQV++a2b3RwzZtQIWfDfv1JbVyeNjU3S1NS8eeVPF9+UqJM8p9yqClpfliQb6iW/m0heXjcp6NlThg0vkZmz50eqlH7xH/2itlYanfrymhojlffLrPJ10+km3buzdZehw0pk7rwF7gy+x/8bOUwWLvhXGhoanI1xGG0sqjx88XokNsusoKBASkqGy5+z5nnkyyzaU2H3KS6URc7AbkjUJ2t2xnq04PSPyGX8zqD1+dEJTGtqbFauDc5PXq8CQcZRg+0XjQ3NKzGVb1SCKflD9OfGBnEmxoT07OE5VFMqbLlLmfq6WhOZkZxCtK/lGQOOukh9yKx7Xi8pLuodACR6svqwozPTEkpACSiBDiGgCrtDsOtJlYASUALRCajCjs5MSygBJaAEOoSAKuwOwa4nVQJKQAlEJ6AKOzozLaEElIAS6BACqrA7BLueVAkoASUQnYAq7OjMtIQSUAJKoEMIqMLuEOx6UiWgBJRAdAKqsKMzCywxfvx4GTJkSGA+zRBMQFkGM2qvHPRp3rpMDWPGjJGhQ4emRrXZPm8Pbr755m1Wfy5U3KYKOy8vT37++Wf58MMP5dNPP5U33nhDdttttw7hcsABB3gq0UcffVS++OIL+eSTT+T111+Xyy+/XIqLizNu50477STrrbdexuU7e8GjjjrKsIY3/YNftkMPPbTVpWfDco011pC99tqrVZ1E3HLLLeacX375pXz//ffJNqyzzjpp83tF0sdPOukkr+ROEb/jjjvK22+/LXfddZe899575nq7dWt+d3L//feXyZMnR7rOzTbbTDbaaKNWZXr06CEff/yx9O/fv0Xa1VdfbfQGE8YRRxzRIq2rHUR/3zUioerqatl6661NKZTYfffdZwbIP//8E7Gm7LIzUaAcFi1alLaiY489Vn755RcZNGiQsM+APu6448x3GNIW8Im8/vrrfVI16eGHHxY2wnfffSdbbrml2U/3JxuWJSUlsv3228tLL73UqupTTjnFxE2aNMnI+/jjj2+VJ2wESuT2228Pmz2n8o0ePVrOO+88OeaYY2T27NnGkLnnnnvkr7/+MsZNJheDsi4vLzeyTy1fX18v77//vmy77bbywgsvmCSs6k022UQuu+wyqaqqkmzklHquXN1vUwvbDeWnn36Sb775RljmDhs2zCjva6+9NimcqVOnyjPPPCOvvfaaXHnlldLT+UAR4dxzz5UTTzzRpGGlI8C7777bzPpYw3a2f+qpp+Tggw+WV1991QzSrbbaypQ/7bTTZNy4cabOPfbYw8R5/VmyZIkwoxcWFsoGG2xgsq2++uqmrbQLRW6tb35vuukm065nn31W1l9/fZP/zDPPTCqhsWPHyhNPPGFWF6effrpgzWNB2Ou/5JJLTBoc+vTpY8pjaVxxxRWGw2OPPSZrr722icfavOiii4TrvPjii01cZ/vDtSFrLDksZMsSy/fGG29MXu7GG29sBjER6eQzcuRIufDCC2XixImGebJgiJ2jjz7a9J/nn39edt1112SJU089VZAzE8C+++5r4u+9917p1auXkQnuAa8+kawkx3YwdOi/KGtCRUWFTJs2TWpqapJXQv8kzwcffCCHHXZYMv6EE04wffitt94yMiUBa33vvfc2+ZgI3IExRj+3YYsttjA6A2WNMfXAAw/YJEknJ+J23313k2fTTTeVBx98MJmfNiKrXB5f7aqwmS1R1nPnzjW+MJZSWFp0foTBAGNQABxL2FpBffv2leHDh8uBBx4ot956q9x8881GYTGYUKqjRo0yQqEO8qGUKYtS69evn1Gqv//+u5x//vnyyiuvJAXotcOXCbH81l13XZPluuuuk/vvv98sy77++ms555xzTDydeeHChaZdF1xwgZkUSEDxcq2EG264QW677TbZZZdd5IcffpANN9zQTDD4AqdMmSJPPvmkqZcvqm233XamzMknn+x8Ee8/E3/VVVeJtTJ79+4tKCoUGhZHZwzIsLS01LD4+++/kyx/++03w9cu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"},7781:(t,e,i)=>{i.d(e,{Z:()=>A});const A=i.p+"assets/images/trivet-input-expected-output-editors-8bf2cc34a998b9f92a832899581cc330.png"},1209:(t,e,i)=>{i.d(e,{Z:()=>A});const A="data:image/png;base64,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"},1564:(t,e,i)=>{i.d(e,{Z:()=>A});const A=i.p+"assets/images/trivet-validator-graph-dropdown-c88a21ef37533587699f54ece4dea5e0.png"}}]);