(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{5019:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workflow/troubleshooting",function(){return n(3440)}])},9369:function(e,o,n){"use strict";var r=n(5893);o.Z={logo:(0,r.jsx)("span",{style:{fontWeight:800},children:"WebCieWiki"}),project:{link:"https://github.com/fellenoord"},darkMode:!0,footer:{text:(0,r.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," WebCie Fellenoord"]})},docsRepositoryBase:"https://github.com/Fellenoord/wiki",faviconGlyph:"\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBB",head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"WebCieWiki"}),(0,r.jsx)("meta",{property:"og:description",content:"The WebCieWiki."})]}),banner:{key:"join-webcie",text:(0,r.jsx)("a",{href:"https://fellenoord.nl",target:"_blank",children:"\uD83D\uDE09 Don't like the website? Join the WebCie →"})},useNextSeoProps:()=>({titleTemplate:"%s"})}},3440:function(e,o,n){"use strict";n.r(o);var r=n(5893),s=n(4319),t=n(3762),i=n(9369);n(9966);var a=n(1151);function l(e){let o=Object.assign({p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"During development, you will probably encounter many errors. This page will help you understand and troubleshoot some of the more common errors specific to this project. There are also some general errors as well as tips and tricks that can help you to more easily debug your code."}),"\n",(0,r.jsx)(o.p,{children:"This page will be updated as we encounter more errors. If you encounter an error that is not listed here, please feel free to open an issue or a pull request to add it to this page."}),"\n",(0,r.jsx)(o.h2,{id:"backend",children:"Backend"}),"\n",(0,r.jsx)(o.h3,{id:"nestjs-circular-dependencies",children:"NestJS circular dependencies"}),"\n",(0,r.jsx)(o.p,{children:"If you are getting an error that looks like this:"}),"\n",(0,r.jsx)(o.pre,{"data-language":"bash","data-theme":"default",children:(0,r.jsx)(o.code,{"data-language":"bash","data-theme":"default",children:(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"[Nest] "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"   - "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"2020"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"11"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"   [ExceptionHandler] Nest cant resolve dependencies of the CatsService ("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"). Please make sure that the argument at index ["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"] is available "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" the CatsModule context."})]})})}),"\n",(0,r.jsxs)(o.p,{children:["You are probably running into a circular dependency. This is a common problem in NestJS and can be solved by using ",(0,r.jsx)(o.code,{children:"forwardRef"}),". However, before we can solve this, we have to find out where the circular dependency is. To do this, we can use the carefully read the error to see where we can find the offending module. In the case of our error, we can see that the error is coming from the argument at ",(0,r.jsx)(o.code,{children:"index [0]"})," of the ",(0,r.jsx)(o.code,{children:"CatsService"}),". If our ",(0,r.jsx)(o.code,{children:"CatsService"})," were to look like this:"]}),"\n",(0,r.jsx)(o.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Injectable"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"CatsService"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"constructor"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"private"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" commonService"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"CommonService"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") {}"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(o.p,{children:["Then we would know that the error is coming from the CommonService, since CommonService is at index 0 of our ",(0,r.jsx)(o.code,{children:"CatsService"})," ",(0,r.jsx)(o.code,{children:"constructor"})," method. We should be importing the ",(0,r.jsx)(o.code,{children:"CommonModule"})," in our ",(0,r.jsx)(o.code,{children:"CatsModule"}),", which would look like this:"]}),"\n",(0,r.jsx)(o.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" [CommonModule]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  providers"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" [CatsService]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsxs)(o.p,{children:["Now, we can use NestJS' ",(0,r.jsx)(o.code,{children:"forwardRef"})," function to resolve the circular dependency as follows:"]}),"\n",(0,r.jsx)(o.pre,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Module"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  imports"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"forwardRef"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" CommonModule)]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  providers"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" [CatsService]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,r.jsxs)(o.p,{children:["Do not forget to also do the same in the ",(0,r.jsx)(o.code,{children:"CommonModule"}),". More information about circular dependencies in NestJS can be found in the ",(0,r.jsx)(o.a,{href:"https://docs.nestjs.com/fundamentals/circular-dependency",children:"NestJS documentation"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"graphql-type-is-defined-in-resolvers-but-not-in-schema",children:"GraphQL type is defined in resolvers but not in schema"}),"\n",(0,r.jsxs)(o.p,{children:["If you are getting an error talking about a type being defined in your resolvers but not in your schema, you are likely missing a ",(0,r.jsx)(o.code,{children:"@Query"})," or ",(0,r.jsx)(o.code,{children:"@Mutation"})," function in your resolver. You cannot resolve fields on an object without having at least one ",(0,r.jsx)(o.code,{children:"@Query"})," or ",(0,r.jsx)(o.code,{children:"@Mutation"})," function that returns that object."]}),"\n",(0,r.jsx)(o.h3,{id:"prisma-is-missing-properties-on-my-type",children:"Prisma is missing properties on my type"}),"\n",(0,r.jsxs)(o.p,{children:["If you have just updated your Prisma schema and created a migration, but the added property is not reflected in Prisma's TypeScript type, it's likely that your Prisma types are out of date. To fix this, you can run ",(0,r.jsx)(o.code,{children:"yarn db:gen"})," to regenerate the Prisma types. Depending on the size of the schema and your local machine, it may take a few seconds for your IDE to pick up the new types, if you are using VSCode, you can try restarting the TS server by running ",(0,r.jsx)(o.code,{children:"TypeScript: Restart TS Server"})," from the command palette."]}),"\n",(0,r.jsx)(o.h3,{id:"resolver-fields-are-not-showing-up-in-graphql-schema",children:"Resolver fields are not showing up in GraphQL schema"}),"\n",(0,r.jsxs)(o.p,{children:["If you have added new fields to a resolver but you cannot find them in your GraphQL schema, it's likely that you forgot to add your Resolver to the NestJS module. You can do this by adding the resolver to the ",(0,r.jsx)(o.code,{children:"providers"})," array in the module's ",(0,r.jsx)(o.code,{children:"@Module"})," decorator. Also don't forget to add the module to the ",(0,r.jsx)(o.code,{children:"imports"})," array of the app module."]}),"\n",(0,r.jsx)(o.h2,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsx)(o.h3,{id:"graphql-fragment-is-missing-properties",children:"GraphQL fragment is missing properties"}),"\n",(0,r.jsxs)(o.p,{children:["If you have just added new ",(0,r.jsx)(o.code,{children:".graphql"})," files or have added a new field to an existing file, you might find that the new property is not appearing in the generated TypeScript types. If this is the case, make sure you have run ",(0,r.jsx)(o.code,{children:"yarn gen"})," to generate TypeScript types for your GraphQL schema and files. If the changes are still not appearing, your IDE is likely struggling to pick up the new types. In VSCode, you can try restarting the TS server by running ",(0,r.jsx)(o.code,{children:"TypeScript: Restart TS Server"})," from the command palette or opening the generated file and let VSCode pick up the new types."]}),"\n",(0,r.jsx)(o.h2,{id:"in-general",children:"In general"}),"\n",(0,r.jsx)(o.p,{children:"Here are some general tips and tricks that can help you to debug your code. Ideally, these are followed in order, but feel free to skip a step or two if you don't have the time or don't think it's necessary."}),"\n",(0,r.jsx)(o.h3,{id:"log-intermediate-values",children:"Log intermediate values"}),"\n",(0,r.jsxs)(o.p,{children:["If you are unsure why something is not working, try logging the value of the variable you are working with. This can help you to understand what is going on and can help you to find the source of the problem. You can use ",(0,r.jsx)(o.code,{children:"console.log"})," to log the variable, if your value is an object, you might prefer to use ",(0,r.jsx)(o.code,{children:"console.log({ value })"})," or ",(0,r.jsx)(o.code,{children:"console.log(JSON.stringify(value, null, 2))"})," to get a more readable output."]}),"\n",(0,r.jsx)(o.h3,{id:"read-the-error-message",children:"Read the error message"}),"\n",(0,r.jsx)(o.p,{children:"The error message is usually the best place to start when debugging. It will usually tell you exactly what is wrong and where the problem is. In the case of TypeScript errors, the error message will not always be the most helpful, but it will usually give you a good idea of where to look."}),"\n",(0,r.jsx)(o.h3,{id:"google-is-your-friend",children:"Google is your friend"}),"\n",(0,r.jsx)(o.p,{children:"If you are still stuck, try googling the error message. You will likely find a lot of helpful information on StackOverflow and other sites. If you are still stuck, try to rephrase your question and try again. Also make sure to include relevant keywords in your search, such as the name of the framework you are using."}),"\n",(0,r.jsx)(o.h3,{id:"consult-the-documentation",children:"Consult the documentation"}),"\n",(0,r.jsx)(o.p,{children:"If you are still stuck, try to consult the documentation for the framework you are using. The documentation is usually very well written and will help you to understand what is going on."}),"\n",(0,r.jsx)(o.h3,{id:"ask-for-help",children:"Ask for help"}),"\n",(0,r.jsxs)(o.p,{children:["If you exhausted all of your options and are still stuck, don't be afraid to ask others for help! You can join the Discord server and ask for help in the ",(0,r.jsx)(o.code,{children:"#help"})," channel. Please include as much information as possible, such as the error message, the code you are working with, and any other relevant information. If you are not in the Discord server yet, please ask for an invite."]})]})}n(5675);let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,a.ah)(),e.components);return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/workflow/troubleshooting.mdx",route:"/workflow/troubleshooting",headings:[{depth:2,value:"Backend",id:"backend"},{depth:3,value:"NestJS circular dependencies",id:"nestjs-circular-dependencies"},{depth:3,value:"GraphQL type is defined in resolvers but not in schema",id:"graphql-type-is-defined-in-resolvers-but-not-in-schema"},{depth:3,value:"Prisma is missing properties on my type",id:"prisma-is-missing-properties-on-my-type"},{depth:3,value:"Resolver fields are not showing up in GraphQL schema",id:"resolver-fields-are-not-showing-up-in-graphql-schema"},{depth:2,value:"Frontend",id:"frontend"},{depth:3,value:"GraphQL fragment is missing properties",id:"graphql-fragment-is-missing-properties"},{depth:2,value:"In general",id:"in-general"},{depth:3,value:"Log intermediate values",id:"log-intermediate-values"},{depth:3,value:"Read the error message",id:"read-the-error-message"},{depth:3,value:"Google is your friend",id:"google-is-your-friend"},{depth:3,value:"Consult the documentation",id:"consult-the-documentation"},{depth:3,value:"Ask for help",id:"ask-for-help"}],pageMap:[{kind:"Meta",data:{index:"Getting Started",setup:"Setup",learning:"Learning",workflow:"Workflow"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{index:"Where to start",programming:"Programming skills",backend:"Backend skills",frontend:"Frontend skills",git:"Git skills"}},{kind:"MdxPage",name:"backend",route:"/learning/backend"},{kind:"MdxPage",name:"frontend",route:"/learning/frontend"},{kind:"MdxPage",name:"git",route:"/learning/git"},{kind:"MdxPage",name:"index",route:"/learning"},{kind:"MdxPage",name:"programming",route:"/learning/programming"}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"Meta",data:{index:"Introduction",wsl:"Windows Subsystem for Linux (WSL)",macos:"MacOS",nodejs:"Node.js",yarn:"Yarn",git:"Version control using Git",docker:"Docker",ide:"Development environment",terminal:"Customizing the terminal",others:"Additional programs"}},{kind:"MdxPage",name:"docker",route:"/setup/docker"},{kind:"MdxPage",name:"git",route:"/setup/git"},{kind:"MdxPage",name:"ide",route:"/setup/ide"},{kind:"MdxPage",name:"index",route:"/setup"},{kind:"MdxPage",name:"macos",route:"/setup/macos"},{kind:"MdxPage",name:"nodejs",route:"/setup/nodejs"},{kind:"MdxPage",name:"others",route:"/setup/others"},{kind:"MdxPage",name:"terminal",route:"/setup/terminal"},{kind:"MdxPage",name:"wsl",route:"/setup/wsl"},{kind:"MdxPage",name:"yarn",route:"/setup/yarn"}]},{kind:"Folder",name:"workflow",route:"/workflow",children:[{kind:"Meta",data:{index:"Step-by-step","git-conventions":"Git conventions",commands:"Useful commands",troubleshooting:"Troubleshooting",graphql:"GraphQL conventions"}},{kind:"MdxPage",name:"commands",route:"/workflow/commands"},{kind:"MdxPage",name:"git-conventions",route:"/workflow/git-conventions"},{kind:"MdxPage",name:"graphql",route:"/workflow/graphql"},{kind:"MdxPage",name:"index",route:"/workflow"},{kind:"MdxPage",name:"troubleshooting",route:"/workflow/troubleshooting"}]}],flexsearch:{codeblocks:!0},title:"Troubleshooting"},pageNextRoute:"/workflow/troubleshooting",nextraLayout:t.ZP,themeConfig:i.Z};o.default=(0,s.j)(d)}},function(e){e.O(0,[774,242,888,179],function(){return e(e.s=5019)}),_N_E=e.O()}]);