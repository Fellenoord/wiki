(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{4164:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setup/terminal",function(){return n(1834)}])},9369:function(e,s,n){"use strict";var t=n(5893);s.Z={logo:(0,t.jsx)("span",{style:{fontWeight:800},children:"WebCieWiki"}),project:{link:"https://github.com/fellenoord"},darkMode:!0,footer:{text:(0,t.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," WebCie Fellenoord"]})},docsRepositoryBase:"https://github.com/Fellenoord/wiki",faviconGlyph:"\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBB",head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,t.jsx)("meta",{property:"og:title",content:"WebCieWiki"}),(0,t.jsx)("meta",{property:"og:description",content:"The WebCieWiki."})]}),banner:{key:"join-webcie",text:(0,t.jsx)("a",{href:"https://fellenoord.nl",target:"_blank",children:"\uD83D\uDE09 Don't like the website? Join the WebCie →"})},useNextSeoProps:()=>({titleTemplate:"%s"})}},1834:function(e,s,n){"use strict";n.r(s);var t=n(5893),i=n(4319),r=n(3762),o=n(9369);n(9966);var l=n(1151);function a(e){let s=Object.assign({p:"p",h2:"h2",a:"a",blockquote:"blockquote",pre:"pre",code:"code",span:"span"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This next section is primarily based on personal preference, though it might be worthwhile to follow along if you're new to WSL (or Linux). By default, Ubuntu comes with the Unix shell called Bash."}),"\n",(0,t.jsx)(s.h2,{id:"what-is-zsh",children:"What is Zsh?"}),"\n",(0,t.jsxs)(s.p,{children:["Zsh (or Z shell) is an extended version of the Bourne Shell (sh), with new features, and support for plugins and themes. In addition, ZSH has many of the same features as bash, so switching won't be a hassle. We will use the Oh My Zsh framework to manage our ZSH configuration, powerlevel10k as our theme, and zsh-autosuggestions for ",(0,t.jsx)(s.a,{href:"https://fishshell.com/",children:"fish"}),"-like autosuggestions."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"MacOS' default shell is zsh. If you're on macOS, you can skip the next section."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"installing-zsh",children:"Installing Zsh"}),"\n",(0,t.jsx)(s.p,{children:"First, let's install Zsh:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"Bash","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"Bash","data-theme":"default",children:(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt install zsh"})})})}),"\n",(0,t.jsxs)(s.p,{children:["We can verify our installation by running ",(0,t.jsx)(s.code,{children:"zsh --version"}),", which should yield an output of the version number. Next, we need to make it our default shell:"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"Bash","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"Bash","data-theme":"default",children:(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"chsh -s $(which zsh)"})})})}),"\n",(0,t.jsxs)(s.p,{children:["After that restart your terminal, and test if it worked with ",(0,t.jsx)(s.code,{children:"echo $SHELL"}),", it should output ",(0,t.jsx)(s.code,{children:"/usr/bin/zsh"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"oh-my-zsh",children:"Oh My Zsh"}),"\n",(0,t.jsx)(s.p,{children:"Next, we can install Oh My Zsh:"}),"\n",(0,t.jsx)(s.pre,{"data-language":"zsh","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"zsh","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"sh "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$(curl '}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'})]})})}),"\n",(0,t.jsxs)(s.p,{children:["The configuration stored in ",(0,t.jsx)(s.code,{children:".zshrc"})," can be viewed using ",(0,t.jsx)(s.code,{children:"cat ~/.zshrc"})," or edited using VS Code using ",(0,t.jsx)(s.code,{children:"code ~/.zshrc"}),". Here you will find such configuration as ",(0,t.jsx)(s.code,{children:"ZSH_THEME"}),", and ",(0,t.jsx)(s.code,{children:"plugins"}),". The theme I really like is called ",(0,t.jsx)(s.a,{href:"https://github.com/romkatv/powerlevel10k",children:"powerlevel10k"}),". Before installation, they recommend to set up their ",(0,t.jsx)(s.a,{href:"https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k",children:"font"})," (this is optional). Install the theme by cloning the repository (for Oh My Zsh users):"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"zsh","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"zsh","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"--depth=1"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/romkatv/powerlevel10k.git"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ${ZSH_CUSTOM"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":-"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"$HOME"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".oh-my-zsh"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"custom}"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/themes/powerlevel10k"})]})})}),"\n",(0,t.jsxs)(s.p,{children:["Then set ",(0,t.jsx)(s.code,{children:'ZSH_THEME="powerlevel10k/powerlevel10k"'})," in ",(0,t.jsx)(s.code,{children:"~/.zshrc"}),", and restart ZSH with ",(0,t.jsx)(s.code,{children:"exec zsh"}),". Finally, the configuration wizard will show (otherwise run ",(0,t.jsx)(s.code,{children:"p10k configure"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["To further improve the ZSH experience, we can also opt for the ",(0,t.jsx)(s.a,{href:"https://github.com/zsh-users/zsh-autosuggestions",children:(0,t.jsx)(s.code,{children:"zsh-autosuggestions"})})," plugin. To install (for Oh My Zsh users):"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"zsh","data-theme":"default",children:(0,t.jsx)(s.code,{"data-language":"zsh","data-theme":"default",children:(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/zsh-users/zsh-autosuggestions"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ${ZSH_CUSTOM"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":-"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"~"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".oh-my-zsh"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"custom}"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/plugins/zsh-autosuggestions"})]})})}),"\n",(0,t.jsxs)(s.p,{children:["Then add it to the plugins list inside ",(0,t.jsx)(s.code,{children:"~/.zshrc"}),":"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"plugins=("})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    # other plugins..."})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    zsh-autosuggestions"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})})]})})]})}n(5675);let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/setup/terminal.mdx",route:"/setup/terminal",headings:[{depth:2,value:"What is Zsh?",id:"what-is-zsh"},{depth:2,value:"Installing Zsh",id:"installing-zsh"},{depth:2,value:"Oh My Zsh",id:"oh-my-zsh"}],pageMap:[{kind:"Meta",data:{index:"Getting Started",setup:"Setup",learning:"Learning",workflow:"Workflow"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{index:"Where to start",programming:"Programming skills",backend:"Backend skills",frontend:"Frontend skills",git:"Git"}},{kind:"MdxPage",name:"backend",route:"/learning/backend"},{kind:"MdxPage",name:"frontend",route:"/learning/frontend"},{kind:"MdxPage",name:"git",route:"/learning/git"},{kind:"MdxPage",name:"index",route:"/learning"},{kind:"MdxPage",name:"programming",route:"/learning/programming"}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"Meta",data:{index:"Introduction",wsl:"Windows Subsystem for Linux (WSL)",macos:"MacOS",nodejs:"Node.js",yarn:"Yarn",git:"Version control using Git",docker:"Docker",ide:"Development environment",terminal:"Customizing the terminal"}},{kind:"MdxPage",name:"docker",route:"/setup/docker"},{kind:"MdxPage",name:"git",route:"/setup/git"},{kind:"MdxPage",name:"ide",route:"/setup/ide"},{kind:"MdxPage",name:"index",route:"/setup"},{kind:"MdxPage",name:"macos",route:"/setup/macos"},{kind:"MdxPage",name:"nodejs",route:"/setup/nodejs"},{kind:"MdxPage",name:"terminal",route:"/setup/terminal"},{kind:"MdxPage",name:"wsl",route:"/setup/wsl"},{kind:"MdxPage",name:"yarn",route:"/setup/yarn"}]},{kind:"Folder",name:"workflow",route:"/workflow",children:[{kind:"Meta",data:{index:"Step-by-step","git-conventions":"Git conventions"}},{kind:"MdxPage",name:"git-conventions",route:"/workflow/git-conventions"},{kind:"MdxPage",name:"index",route:"/workflow"}]}],flexsearch:{codeblocks:!0},title:"Terminal"},pageNextRoute:"/setup/terminal",nextraLayout:r.ZP,themeConfig:o.Z};s.default=(0,i.j)(h)}},function(e){e.O(0,[774,242,888,179],function(){return e(e.s=4164)}),_N_E=e.O()}]);