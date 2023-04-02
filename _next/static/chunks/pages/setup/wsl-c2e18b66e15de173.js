(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{913:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setup/wsl",function(){return t(4356)}])},9369:function(e,n,t){"use strict";var s=t(5893);n.Z={logo:(0,s.jsx)("span",{style:{fontWeight:800},children:"Fellenoord developer wiki"}),project:{link:"https://github.com/fellenoord"},darkMode:!0,footer:{text:(0,s.jsxs)("span",{children:["WebCie ",new Date().getFullYear()]})},useNextSeoProps:()=>({titleTemplate:"%s"})}},4356:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(4319),r=t(2840),a=t(9369);t(9966);var o=t(1151);function d(e){let n=Object.assign({p:"p",h2:"h2",code:"code",a:"a",pre:"pre",span:"span",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A guide to get Windows Subsystem for Linux (WSL) up and running for web development. It will cover setting up the WSL environment, and all the tools needed."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["This guide assumes you are on a recent build of Windows (20262+, and preferably Windows 11). The guide has been tested for Microsoft Windows Version 22H2 (OS Build 22621.963). To check your version and build number, select ",(0,s.jsx)(n.code,{children:"WIN + R"}),", type ",(0,s.jsx)(n.code,{children:"winver"}),", and select ",(0,s.jsx)(n.code,{children:"OK"}),". Furthermore, if you prefer a different Linux distribution other than Ubuntu, please refer to the sources below."]}),"\n",(0,s.jsxs)(n.p,{children:["With Windows 11, Windows Terminal is installed by default. If you do not have Windows Terminal, please follow ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/terminal/install",children:"this"})," guide to do so."]}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(n.p,{children:"Open PowerShell, and enter:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"PowerShell","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"PowerShell","data-theme":"default",children:(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"wsl --install"})})})}),"\n",(0,s.jsx)(n.p,{children:"This enables the WSL and Virtual Machine Platform components, downloads and installs the latest Linux kernel, sets WSL 2 as the default, and downloads and installs the Ubuntu Linux distribution."}),"\n",(0,s.jsx)(n.p,{children:"You will need to restart your machine to complete the installation process."}),"\n",(0,s.jsx)(n.h2,{id:"set-up-linux",children:"Set up Linux"}),"\n",(0,s.jsx)(n.p,{children:"After the restart a terminal window will open to setup your Linux distribution. Now you will be asked to create username and password."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"These credentials have no bearing on your Windows username and password."}),"\n",(0,s.jsx)(n.li,{children:"Note that whilst entering the password, nothing will appear on screen (blind typing)."}),"\n",(0,s.jsxs)(n.li,{children:["This will be the default user, and considered the Linux administrator, with the ability to run ",(0,s.jsx)(n.code,{children:"sudo"})," (Super User Do) commands."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To change or reset your password find more information ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It is recommended to keep your packages up-to-date. So after we reach the login screen we update and upgrade:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"apt"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"update"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"&&"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" sudo "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"apt"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"upgrade"})]})})})]})}t(5675);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/setup/wsl.mdx",route:"/setup/wsl",headings:[{depth:2,value:"Prerequisites",id:"prerequisites"},{depth:2,value:"Get started",id:"get-started"},{depth:2,value:"Set up Linux",id:"set-up-linux"}],pageMap:[{kind:"Meta",data:{index:"Getting Started",setup:"Setup",learning:"Learning",workflow:"Workflow"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{index:"Where to start",programming:"Programming skills",backend:"Backend skills",frontend:"Frontend skills",git:"Git"}},{kind:"MdxPage",name:"backend",route:"/learning/backend"},{kind:"MdxPage",name:"frontend",route:"/learning/frontend"},{kind:"MdxPage",name:"git",route:"/learning/git"},{kind:"MdxPage",name:"index",route:"/learning"},{kind:"MdxPage",name:"programming",route:"/learning/programming"}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"Meta",data:{index:"Introduction",wsl:"Windows Subsystem for Linux (WSL)",macos:"MacOS",nodejs:"Node.js",yarn:"Yarn",git:"Version control using Git"}},{kind:"MdxPage",name:"git",route:"/setup/git"},{kind:"MdxPage",name:"index",route:"/setup"},{kind:"MdxPage",name:"macos",route:"/setup/macos"},{kind:"MdxPage",name:"nodejs",route:"/setup/nodejs"},{kind:"MdxPage",name:"wsl",route:"/setup/wsl"},{kind:"MdxPage",name:"yarn",route:"/setup/yarn"}]},{kind:"Folder",name:"workflow",route:"/workflow",children:[{kind:"Meta",data:{index:"Step-by-step"}},{kind:"MdxPage",name:"index",route:"/workflow"}]}],flexsearch:{codeblocks:!0},title:"Wsl"},pageNextRoute:"/setup/wsl",nextraLayout:r.ZP,themeConfig:a.Z};n.default=(0,i.j)(l)}},function(e){e.O(0,[774,331,888,179],function(){return e(e.s=913)}),_N_E=e.O()}]);