(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{2901:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workflow/commands",function(){return t(4465)}])},9369:function(e,n,t){"use strict";var s=t(5893);n.Z={logo:(0,s.jsx)("span",{style:{fontWeight:800},children:"WebCieWiki"}),project:{link:"https://github.com/fellenoord"},darkMode:!0,footer:{text:(0,s.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," WebCie Fellenoord"]})},docsRepositoryBase:"https://github.com/Fellenoord/wiki",faviconGlyph:"\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBB",head:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("meta",{property:"og:title",content:"WebCieWiki"}),(0,s.jsx)("meta",{property:"og:description",content:"The WebCieWiki."})]}),banner:{key:"join-webcie",text:(0,s.jsx)("a",{href:"https://fellenoord.nl",target:"_blank",children:"\uD83D\uDE09 Don't like the website? Join the WebCie →"})},useNextSeoProps:()=>({titleTemplate:"%s"})}},4465:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(4319),o=t(3762),r=t(9369);t(9966);var d=t(1151);function a(e){let n=Object.assign({p:"p",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Both the frontend and backend have some scripts that you will need to use to get things up and running. We'll quickly discuss some of these scripts, where to find them, how and when to use them and some other non-project specific scripts you might find useful."}),"\n",(0,s.jsx)(n.h2,{id:"where-to-find-the-scripts",children:"Where to find the scripts"}),"\n",(0,s.jsxs)(n.p,{children:["Since both our frontend and backend projects are using Node, the scripts are in the same place for both, namely our ",(0,s.jsx)(n.code,{children:"package.json"}),' file. This is the same file that keeps track of the dependencies of our projects. You can find this file in the root of both the frontend and backend folders. The scripts are specified under the "scripts" key.']}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-the-scripts",children:"How to use the scripts"}),"\n",(0,s.jsxs)(n.p,{children:["For the scripts found in the ",(0,s.jsx)(n.code,{children:"package.json"})," file, you can run them by typing ",(0,s.jsx)(n.code,{children:"yarn <script-name>"}),". For example, if you want to run the backend in such a way that it restarts on every file change, you would run ",(0,s.jsx)(n.code,{children:"yarn start:dev"}),". If you want to run the frontend in development mode, you would run ",(0,s.jsx)(n.code,{children:"yarn dev"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"backend-scripts",children:"Backend scripts"}),"\n",(0,s.jsx)(n.p,{children:"The backend has some scripts that come standard with NestJS as well as some scripts needed for database management. The useful scripts are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build"}),": Builds the backend for production and checks for any type errors"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"format"}),": Formats the code using Prettier"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lint"}),": Lints and fixes the code using ESLint, this is required to pass before your PR can be merged"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lint:check"}),": Lints the code without applying any fixes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start:dev"}),": Starts the backend in development mode, this will restart the backend on every file change"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test"}),": Runs all tests (unit and e2e)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test:spec"}),": Runs all unit tests, can supply a pattern to run specific tests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test:e2e"}),": Runs all e2e tests, can supply a pattern to run specific tests","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"news.e2e-spec.ts"}),": Runs the e2e test file named ",(0,s.jsx)(n.code,{children:"news.e2e-spec.ts"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"news"}),": Runs all e2e test files that contain the pattern ",(0,s.jsx)(n.code,{children:"news"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-t 'PATTERN'"}),": Runs all e2e test cases that contain the pattern ",(0,s.jsx)(n.code,{children:"PATTERN"}),".","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A use case example might be the following. Say you want to run a test called 'should fail if the user does not have the required roles' in the ",(0,s.jsx)(n.code,{children:"news.e2e-spec.ts"})," file. You would run ",(0,s.jsx)(n.code,{children:"yarn test:e2e news -t 'should fail if the user does not have the required roles'"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db:migration"}),": Runs a database migration if you have made changes to the schema"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db:gen"}),": Runs Prisma's type generation script, necessary if your Prisma types are out of date"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db:seed"}),": Runs the seed script, this will populate the database with some dummy data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db:sync"}),": Drops your local database and recreates it from scratch, this will also run the seed script"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you create a PR, there are certain actions that need to pass before your PR can be merged. These actions are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"build"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"lint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"test"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before creating a PR, we suggest first running these actions locally to make sure that they pass. If they do not pass, you can still create a PR, but you will need to fix the issues before your PR can be merged."}),"\n",(0,s.jsxs)(n.p,{children:["For the database scripts, you'll need to run ",(0,s.jsx)(n.code,{children:"yarn db:migration"})," if you have made any changes to the Prisma schema file and want these to be reflected in the database. This will also automatically regenerate the Prisma types. You might need to run ",(0,s.jsx)(n.code,{children:"yarn db:gen"})," if, for whatever reason, you find that your Prisma types do not match the schema. If you do not have the seeded data (such as some default users) in your database, you can run ",(0,s.jsx)(n.code,{children:"yarn db:seed"})," to populate the database with this data. If something went horribly wrong with your local database, or you just want to sync your database with the latest schema, you can run ",(0,s.jsx)(n.code,{children:"yarn db:sync"})," which will entirely drop your local database and recreate it from scratch, note that any data you have in your local database will be lost."]}),"\n",(0,s.jsx)(n.h2,{id:"frontend-scripts",children:"Frontend scripts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dev"}),": Starts the frontend in development mode, this will restart the frontend on every file change"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build"}),": Builds the frontend for production and checks for any type errors"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start"}),": Starts the frontend in production mode"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lint"}),": Lints the code using ESLint, this is required to pass before your PR can be merged"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gen"}),": Generates the GraphQL types and queries from the schema and .graphql files"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Like the backend, the frontend also has some actions that are required to pass before any PR can be merged, these actions are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"lint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"build"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before creating a PR, we suggest first running these actions locally to make sure that they pass. If they do not pass, you can still create a PR, but you will need to fix the issues before your PR can be merged."}),"\n",(0,s.jsxs)(n.p,{children:["If you are creating additional GraphQL queries, mutations or fragments or if the schema has changed on the backend, you will need to run ",(0,s.jsx)(n.code,{children:"yarn gen"})," to regenerate the GraphQL types and queries. This will also tell you if there are any errors in your queries, mutations or fragments."]}),"\n",(0,s.jsx)(n.h2,{id:"other-useful-scripts",children:"Other useful scripts"}),"\n",(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsx)(n.p,{children:"When developing using Docker, it is useful to know the CLI scripts that are available to you. Below are the script you might want to use when developing."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docker compose COMMAND --help"}),": For more information on a command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docker compose up"}),": Creates and starts containers.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CONTAINER"}),": The name of the container you want to start. If you want to start all containers, you can omit this argument.","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This can be useful when dealing with migrations. In that case you only want to run the database, so you would run ",(0,s.jsx)(n.code,{children:"docker compose up postgres -d"}),". Then handle all migration actions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d"}),": Detached mode: Run containers in the background"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--build"}),": Build images before starting containers.","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Use this if you have added new dependencies to your project."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-V"}),": Recreate anonymous volumes instead of retrieving data from the previous containers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docker compose down"}),": Stops containers and removes containers, networks, volumes, and images created by up.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v"}),": Remove named volumes declared in the volumes section of the Compose file and anonymous volumes attached to containers.","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Use this if you want to reset the database."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}t(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/workflow/commands.mdx",route:"/workflow/commands",headings:[{depth:2,value:"Where to find the scripts",id:"where-to-find-the-scripts"},{depth:2,value:"How to use the scripts",id:"how-to-use-the-scripts"},{depth:2,value:"Backend scripts",id:"backend-scripts"},{depth:2,value:"Frontend scripts",id:"frontend-scripts"},{depth:2,value:"Other useful scripts",id:"other-useful-scripts"},{depth:3,value:"Docker",id:"docker"}],pageMap:[{kind:"Meta",data:{index:"Getting Started",setup:"Setup",learning:"Learning",workflow:"Workflow"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{index:"Where to start",programming:"Programming skills",backend:"Backend skills",frontend:"Frontend skills",git:"Git skills"}},{kind:"MdxPage",name:"backend",route:"/learning/backend"},{kind:"MdxPage",name:"frontend",route:"/learning/frontend"},{kind:"MdxPage",name:"git",route:"/learning/git"},{kind:"MdxPage",name:"index",route:"/learning"},{kind:"MdxPage",name:"programming",route:"/learning/programming"}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"Meta",data:{index:"Introduction",wsl:"Windows Subsystem for Linux (WSL)",macos:"MacOS",nodejs:"Node.js",yarn:"Yarn",git:"Version control using Git",docker:"Docker",ide:"Development environment",terminal:"Customizing the terminal",others:"Additional programs"}},{kind:"MdxPage",name:"docker",route:"/setup/docker"},{kind:"MdxPage",name:"git",route:"/setup/git"},{kind:"MdxPage",name:"ide",route:"/setup/ide"},{kind:"MdxPage",name:"index",route:"/setup"},{kind:"MdxPage",name:"macos",route:"/setup/macos"},{kind:"MdxPage",name:"nodejs",route:"/setup/nodejs"},{kind:"MdxPage",name:"others",route:"/setup/others"},{kind:"MdxPage",name:"terminal",route:"/setup/terminal"},{kind:"MdxPage",name:"wsl",route:"/setup/wsl"},{kind:"MdxPage",name:"yarn",route:"/setup/yarn"}]},{kind:"Folder",name:"workflow",route:"/workflow",children:[{kind:"Meta",data:{index:"Step-by-step","git-conventions":"Git conventions",commands:"Useful commands",troubleshooting:"Troubleshooting"}},{kind:"MdxPage",name:"commands",route:"/workflow/commands"},{kind:"MdxPage",name:"git-conventions",route:"/workflow/git-conventions"},{kind:"MdxPage",name:"index",route:"/workflow"},{kind:"MdxPage",name:"troubleshooting",route:"/workflow/troubleshooting"}]}],flexsearch:{codeblocks:!0},title:"Commands"},pageNextRoute:"/workflow/commands",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,i.j)(c)}},function(e){e.O(0,[774,242,888,179],function(){return e(e.s=2901)}),_N_E=e.O()}]);