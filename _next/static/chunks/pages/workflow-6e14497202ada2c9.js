(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{3990:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workflow",function(){return t(8381)}])},9369:function(e,n,t){"use strict";var s=t(5893);n.Z={logo:(0,s.jsx)("span",{style:{fontWeight:800},children:"Fellenoord developer wiki"}),project:{link:"https://github.com/fellenoord"},darkMode:!0,footer:{text:(0,s.jsxs)("span",{children:["WebCie ",new Date().getFullYear()]})},useNextSeoProps:()=>({titleTemplate:"%s"})}},8381:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var s=t(5893),a=t(4319),i=t(2840),o=t(9369);t(9966);var r=t(1151),l=t(5675),h=t.n(l),c={src:"/wiki/_next/static/media/checkout-code.5bf75bab.png",height:319,width:398,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAWklEQVR42k2NSw6AQAhDuf915VNghrEuNL40kJSGyt7T3ZvrHGRf6lSgBEBVzQxv52WtJcjSS02fEYFAIrO6JQClb27mDGVRTYQpEhHu8X1jn9Ays8ycOfPjBikAjJTF8f/iAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6};function d(e){let n=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"To get familiar with the way we go from 0 to completing an issue, we've created a step-by-step guide."}),"\n",(0,s.jsx)(n.h2,{id:"1-setup",children:"1. Setup"}),"\n",(0,s.jsxs)(n.p,{children:["First, make sure you have gone through everything under ",(0,s.jsx)(n.a,{href:"/learning",children:"Learning"})," and ",(0,s.jsx)(n.a,{href:"/setup",children:"Setup"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"2-checkout-the-code",children:"2. Checkout the code"}),"\n",(0,s.jsx)(n.p,{children:"Using the terminal navigate to the folder where you keep your repositories locally. We recommend using the following folder structure:"}),"\n",(0,s.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"~/repositories/<organisation>/<repository>"})})})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["In this case the organisation would be ",(0,s.jsx)(n.code,{children:"fellenoord"}),", and the repository is one were are about to clone from the remote. If you use the same folder structure navigating to there goes as follows: ",(0,s.jsx)(n.code,{children:"cd ~/repositories/fellenoord"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Clone the repository using git (we'll use the backend as example here). You can find this link at the repository page at ",(0,s.jsx)(n.a,{href:"https://github.com/Fellenoord/fellenoord-api",children:"GitHub"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(h(),{alt:"Checkout code from GitHub",placeholder:"blur",src:c})}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:Fellenoord/fellenoord-api.git"})]})})}),"\n",(0,s.jsx)(n.h2,{id:"3-setting-up-the-dependencies",children:"3. Setting up the dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["For the development at the WebCie we universally use the ",(0,s.jsx)(n.a,{href:"/setup/yarn",children:"yarn"}),". To get all the dependencies downloaded simply run:"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"yarn "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# shorthand"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"yarn"})})]})}),"\n",(0,s.jsxs)(n.p,{children:["This will create a ",(0,s.jsx)(n.code,{children:"node_modules"})," folder with all the dependencies required to develop locally."]}),"\n",(0,s.jsx)(n.h2,{id:"4-running-the-application",children:"4. Running the application"}),"\n",(0,s.jsxs)(n.p,{children:["For all applications we provide a ",(0,s.jsx)(n.code,{children:"README.md"})," file in which we tell you how to run the application. Make sure to read that file!"]}),"\n",(0,s.jsx)(n.h2,{id:"5-choosing-an-issue",children:"5. Choosing an issue"}),"\n",(0,s.jsxs)(n.p,{children:["To keep track of work we use the GitHub projects feature. Simply pick an issue from the 'Ready for work' column on the ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/Fellenoord/projects/1",children:"WebCie planning"})," project board. In the issue itself, put yourself as assignee. Then, if you're ready to make changes, move the card to the 'In progress' column."]}),"\n",(0,s.jsx)(n.h2,{id:"6-making-changes",children:"6. Making changes"}),"\n",(0,s.jsx)(n.p,{children:"Now that we've chosen an issue we want to work on there are some essential steps."}),"\n",(0,s.jsx)(n.h3,{id:"create-a-branch",children:"Create a branch"}),"\n",(0,s.jsxs)(n.p,{children:["To ensure code quality in all of our repositories, we work with protected branches. For each repository the ",(0,s.jsx)(n.code,{children:"main"})," branch is the protected branch. This means that no code can be directly pushed to that branch, making sure that code is first reviewed. So when making changes we always work on a separate branch. To create a branch locally:"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"checkout"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-b"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"nam"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"e"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})})}),"\n",(0,s.jsx)(n.h3,{id:"commit-changes",children:"Commit changes"}),"\n",(0,s.jsx)(n.p,{children:"After you've make some changes, we can commit those changes."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"It is important to realise that (especially when working on larger issues) it is recommended to periodically commit your code. For two reasons: making the review of the PR easier, and allowing for rollback to a certain commit when certain changes don't work out. To see what changes you've made:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"status"})]})})}),"\n",(0,s.jsx)(n.p,{children:"Then stage the files for commit."}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# All all files."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"."})]}),"\n",(0,s.jsx)(n.span,{className:"line",children:" "}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# Add specific file(s)."})}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"path-to-file-or-director"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"y"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"})]})]})}),"\n",(0,s.jsx)(n.p,{children:"Finally, we can commit the changes."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Please adhere to the ",(0,s.jsx)(n.a,{href:"/workflow/git-conventions",children:"git conventions"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"commit"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-m"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"feat(topic): awesome description for feature"'})]})})}),"\n",(0,s.jsx)(n.h3,{id:"push-changes",children:"Push changes"}),"\n",(0,s.jsx)(n.p,{children:"The only thing left is to push your changes from the local git repository to the remote."}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"git "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"push"})]})})}),"\n",(0,s.jsx)(n.h2,{id:"7-review",children:"7. Review"}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-pr",children:"Creating a PR"}),"\n",(0,s.jsxs)(n.p,{children:["Now that you have pushed your changes to your own branch, you are ready to create a pull request (PR). To do so, head over to the repository's page on GitHub and click on the 'Pull requests' tab. Then click on the 'New pull request' button. In here, you can select the branch you want to merge into our ",(0,s.jsx)(n.code,{children:"main"})," branch. You should also take note of the following things:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure to pick a title that is descriptive of the changes you've made"}),"\n",(0,s.jsxs)(n.li,{children:["Make sure to mention in the description which issue you are closing (i.e. ",(0,s.jsx)(n.code,{children:"Closes #<issue-number>"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Make sure to assign yourself to the PR (can be done on the right)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once everything is ready, you can choose to create the PR directly or as a draft. If you choose to create it as a draft, you can still make changes to the PR before it is ready to be merged. Reviewers will automatically be assigned and notified of the PR."}),"\n",(0,s.jsx)(n.h3,{id:"fixing-requested-changes",children:"Fixing requested changes"}),"\n",(0,s.jsx)(n.p,{children:"After a codeowner has reviewed your PR, they might request some changes. It might also be the case that certain required actions fail. In this case, you should make the requested changes and push them to the branch. Once you have made the necessary changes, do not forget to push them to the branch as well as to ask for a new review. If you do not ask for a new review, the codeowner might not be notified of the changes you've made."}),"\n",(0,s.jsx)(n.h3,{id:"reviewing-a-pr",children:"Reviewing a PR"}),"\n",(0,s.jsx)(n.p,{children:"While this might not be immediately relevant for everyone, it might be the case that you are asked to review a PR. When reviewing a PR, you should take the following things into account:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Does the PR close the issue it is supposed to close?"}),"\n",(0,s.jsx)(n.li,{children:"Does the PR adhere to our style conventions? (this is also partially checked by the linting action)"}),"\n",(0,s.jsx)(n.li,{children:"Are there any changes that are not necessary for the PR? (i.e. changes to files that are not related to the issue)"}),"\n",(0,s.jsx)(n.li,{children:"Does the PR have a proper description ? (i.e. does it mention the issue it closes)"}),"\n",(0,s.jsx)(n.li,{children:"Does the PR introduce any breaking changes? (i.e. changes that might break other parts of the application)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It might be wise to test the PR locally to see if it works as intended. If you have any questions, you can always ask the author of the PR. Also make sure to use the tools provided by GitHub to make the review as clear and concise as possible, i.e. using code suggestions."}),"\n",(0,s.jsx)(n.h3,{id:"merging-code",children:"Merging code"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This action can only be done by one of the ",(0,s.jsx)(n.code,{children:"CODEOWNERS"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the PR is finished and approved, we can merge the code to be on the ",(0,s.jsx)(n.code,{children:"main"})," branch."]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/workflow/index.mdx",route:"/workflow",headings:[{depth:2,value:"1. Setup",id:"1-setup"},{depth:2,value:"2. Checkout the code",id:"2-checkout-the-code"},{depth:2,value:"3. Setting up the dependencies",id:"3-setting-up-the-dependencies"},{depth:2,value:"4. Running the application",id:"4-running-the-application"},{depth:2,value:"5. Choosing an issue",id:"5-choosing-an-issue"},{depth:2,value:"6. Making changes",id:"6-making-changes"},{depth:3,value:"Create a branch",id:"create-a-branch"},{depth:3,value:"Commit changes",id:"commit-changes"},{depth:3,value:"Push changes",id:"push-changes"},{depth:2,value:"7. Review",id:"7-review"},{depth:3,value:"Creating a PR",id:"creating-a-pr"},{depth:3,value:"Fixing requested changes",id:"fixing-requested-changes"},{depth:3,value:"Reviewing a PR",id:"reviewing-a-pr"},{depth:3,value:"Merging code",id:"merging-code"}],pageMap:[{kind:"Meta",data:{index:"Getting Started",setup:"Setup",learning:"Learning",workflow:"Workflow"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"learning",route:"/learning",children:[{kind:"Meta",data:{index:"Where to start",programming:"Programming skills",backend:"Backend skills",frontend:"Frontend skills",git:"Git"}},{kind:"MdxPage",name:"backend",route:"/learning/backend"},{kind:"MdxPage",name:"frontend",route:"/learning/frontend"},{kind:"MdxPage",name:"git",route:"/learning/git"},{kind:"MdxPage",name:"index",route:"/learning"},{kind:"MdxPage",name:"programming",route:"/learning/programming"}]},{kind:"Folder",name:"setup",route:"/setup",children:[{kind:"Meta",data:{index:"Introduction",wsl:"Windows Subsystem for Linux (WSL)",macos:"MacOS",nodejs:"Node.js",yarn:"Yarn",git:"Version control using Git"}},{kind:"MdxPage",name:"git",route:"/setup/git"},{kind:"MdxPage",name:"index",route:"/setup"},{kind:"MdxPage",name:"macos",route:"/setup/macos"},{kind:"MdxPage",name:"nodejs",route:"/setup/nodejs"},{kind:"MdxPage",name:"wsl",route:"/setup/wsl"},{kind:"MdxPage",name:"yarn",route:"/setup/yarn"}]},{kind:"Folder",name:"workflow",route:"/workflow",children:[{kind:"Meta",data:{index:"Step-by-step"}},{kind:"MdxPage",name:"index",route:"/workflow"}]}],flexsearch:{codeblocks:!0},title:"Index"},pageNextRoute:"/workflow",nextraLayout:i.ZP,themeConfig:o.Z};var g=(0,a.j)(u)}},function(e){e.O(0,[774,331,888,179],function(){return e(e.s=3990)}),_N_E=e.O()}]);