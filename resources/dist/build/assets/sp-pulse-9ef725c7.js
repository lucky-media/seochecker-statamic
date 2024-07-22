function r(e,t,s,a,i,c,u,_){var n=typeof e=="function"?e.options:e;t&&(n.render=t,n.staticRenderFns=s,n._compiled=!0),a&&(n.functional=!0),c&&(n._scopeId="data-v-"+c);var l;if(u?(l=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),i&&i.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(u)},n._ssrRegister=l):i&&(l=_?function(){i.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(n.functional){n._injectStyles=l;var f=n.render;n.render=function(k,C){return l.call(C),f(k,C)}}else{var v=n.beforeCreate;n.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:n}}const S={props:["app_url","app_env","create_report_url"],data(){return{domain:this.app_url,errors:[],disabled:!1,loading:!1,success:!1,report:null}},mounted(){this.app_env!=="production"&&(this.errors.push(["SEOPulse works only on a production environment"]),this.disabled=!0)},methods:{createReport(){if(this.domain.startsWith("http://")){this.errors=[],this.errors=["Please enter a domain with SSL"];return}if(!this.domain.startsWith(this.app_url)){this.errors=[],this.errors=[`Domain must start with ${this.app_url}`];return}this.loading=!0,this.disabled=!0,this.errors=[],this.fetchReport()},fetchReport(){Statamic.$request.post(this.create_report_url,{domain:this.domain}).then(({data:e})=>{if(!e.success){this.errors=e.data.data.domain,this.loading=!1,this.disabled=!1;return}this.loading=!1,this.disabled=!1,this.success=!0,setTimeout(()=>{window.location.href=cp_url("seopulse")},1e3)})}}};var R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"max-w-xl"},[s("div",{staticClass:"card"},[s("div",{staticClass:"flex flex-row space-x-4"},[s("text-input",{staticClass:"w-full",attrs:{placeholder:"Domain"},model:{value:t.domain,callback:function(a){t.domain=a},expression:"domain"}}),s("button",{staticClass:"btn-primary",attrs:{disabled:t.disabled},on:{click:t.createReport}},[t.loading?s("div",{staticClass:"flex items-center w-5 h-5 mr-2"},[s("loading-graphic",{attrs:{inline:"",text:""}})],1):t._e(),t._v(" Create Report ")])],1),t._l(t.errors,function(a){return t.errors.length>0?s("p",{staticClass:"my-2 text-sm text-red-500",domProps:{textContent:t._s(a)}}):t._e()})],2),t.loading?s("div",{staticClass:"flex flex-col items-center justify-center w-full mt-4"},[s("loading-graphic",{attrs:{inline:"",text:"Please wait while we diagnose your site."}}),s("p",{staticClass:"mt-1 text-sm text-gray"},[t._v("This may take a few minutes.")])],1):t._e(),t.success?s("div",{staticClass:"flex flex-col items-center justify-center w-full mt-4"},[s("p",{staticClass:"mt-1 text-lg text-green-600"},[t._v(" Report created successfully! Redirecting... ")])]):t._e()])},j=[],F=r(S,R,j,!1,null,null,null,null);const L=F.exports,T={props:["date"],data(){return{text:null}},mounted(){this.update()},methods:{update(){this.text=moment(this.date).fromNow(),setTimeout(()=>this.update(),6e4)}}};var P=function(){var t=this,s=t._self._c;return s("span",[t._v(t._s(t.text))])},I=[],V=r(T,P,I,!1,null,null,null,null);const H=V.exports,z={components:{RelativeDate:H},data(){return{reports:[],loading:!0}},mounted(){this.load()},methods:{destroy(e){Statamic.$request.delete(cp_url(`/seopulse/${e}`)).then(t=>{t.data.success&&this.load()})},load(){Statamic.$request.get(cp_url("/seopulse/fetch")).then(e=>{this.reports=e.data,this.loading=!1}),setTimeout(()=>this.load(),3e3)}}};var O=function(){var t=this,s=t._self._c;return s("div",[t.reports.length===0&&!t.loading?s("div",{staticClass:"flex flex-col p-8 mt-10 sp-space-y-6 sp-max-w-xl sp-mx-auto card sp-items-center"},[s("h1",[t._v("Reports")]),s("div",{staticClass:"p-6 text-gray-800 sp-bg-gray-50 sp-rounded-full"},[s("svg-icon",{staticClass:"w-12 h-12 text-gray-700",attrs:{name:"telescope"}})],1),s("p",{staticClass:"text-center text-gray-800 sp-font-light"},[t._v(" No reports found. Start by creating one. ")]),s("div",[s("a",{staticClass:"btn-primary",attrs:{href:t.cp_url("/seopulse/create")}},[t._v(" Create Report ")])])]):t._e(),t.reports.length!==0&&!t.loading?[s("div",{staticClass:"flex flex-col items-start justify-between p-4 md:flex-row md:items-center"},[s("h2",{staticClass:"flex items-end justify-end mb-2 md:m-0"},[s("span",{staticClass:"w-6 h-6 mr-2 text-gray-800"},[s("svg-icon",{staticClass:"w-5 h-5 text-gray-700",attrs:{name:"telescope"}})],1),s("span",[t._v("Reports")])]),s("div",{staticClass:"flex items-center mb-6"},[s("h1",{staticClass:"flex-1"},[t._v(t._s(t.title))]),s("a",{staticClass:"btn-primary",attrs:{href:t.cp_url("/seopulse/create")}},[t._v(" Create Report ")])])]),s("div",{staticClass:"p-0 overflow-hidden card"},[s("table",{staticClass:"data-table"},[s("tbody",t._l(t.reports,function(a,i){return s("tr",{key:i},[s("td",{staticClass:"text-xs whitespace-no-wrap"},[s("div",{staticClass:"flex items-center"},[a.status==="completed"?s("a",{attrs:{href:a.view_url}},[t._v(" "+t._s(a.domain)+" ")]):s("span",{class:{"!sp-text-gray-400 !sp-cursor-not-allowed":a.status==="pending"}},[t._v(" "+t._s(a.domain)+" ")])])]),s("td",[s("div",{staticClass:"inline-flex items-center"},[s("div",{staticClass:"badge-sm",class:{"bg-green-600":a.status==="completed","sp-bg-yellow-600":a.status==="pending"}},[t._v(" "+t._s(a.status)+" ")]),a.status==="pending"?s("div",[s("loading-graphic",{staticClass:"sp-ml-1 !sp-w-3 !sp-h-3",attrs:{inline:"",text:""}})],1):t._e()])]),s("td",[s("span",[t._v(t._s(a.created_at))])]),s("td",{staticClass:"float-right"},[s("dropdown-list",[a.status==="completed"?s("dropdown-item",{attrs:{text:"View",redirect:a.view_url}}):t._e(),s("dropdown-item",{attrs:{text:"Delete"},on:{click:function(c){return t.destroy(a.id)}}})],1)],1)])}),0)])])]:t._e()],2)},M=[],q=r(z,O,M,!1,null,null,null,null);const B=q.exports,D={};var E=function(){var t=this,s=t._self._c;return s("header",{staticClass:"publish-section-header @container"},[s("div",{staticClass:"publish-section-header-inner"},[s("label",{staticClass:"text-base font-semibold"},[t._t("default")],2)])])},W=[],A=r(D,E,W,!1,null,null,null,null);const p=A.exports,N={};var G=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card p-0"},[t._t("default")],2)},U=[],J=r(N,G,U,!1,null,null,null,null);const d=J.exports,X={props:{value:{type:String,default:"info"}}};var K=function(){var t=this,s=t._self._c;return t.value==="passed"?s("svg",{staticClass:"w-6 h-6 sp-text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"}})]):t.value==="warning"?s("svg",{staticClass:"w-6 h-6 sp-stroke-yellow-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"}})]):t.value==="failed"?s("svg",{staticClass:"w-6 h-6 sp-text-red-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"}})]):t.value==="info"?s("svg",{staticClass:"w-6 h-6 sp-stroke-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}})]):t._e()},Q=[],Y=r(X,K,Q,!1,null,null,null,null);const b=Y.exports,Z={components:{Status:b},props:{title:{type:String,required:!0},description:{type:String},score:{type:String,default:"default"}}};var tt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"form-group publish-field publish-field__display field_display-fieldtype config-field"},[s("div",{staticClass:"flex flex-row field-inner"},[s("status",{attrs:{value:t.score}}),s("div",{staticClass:"flex flex-col ml-2"},[s("label",{staticClass:"publish-field-label",attrs:{for:"field_display"}},[s("span",{staticClass:"mr-1 font-semibold sp-text-base v-popper--has-tooltip"},[t._v(" "+t._s(t.title)+" ")])]),s("div",{staticClass:"mt-1 help-block"},[s("p",[t._v(t._s(t.description))])])])],1),s("div",{staticClass:"text-sm sp-text-gray-500"},[t._t("default")],2)])},st=[],et=r(Z,tt,st,!1,null,null,null,null);const h=et.exports,at={components:{InfoItem:h,Card:d,CardHeader:p},props:["seo"]};var rt=function(){var t=this,s=t._self._c;return s("card",[s("card-header",[t._v(" Common SEO Issues ")]),s("info-item",{attrs:{title:"Meta Title Test",score:t.seo.title.score}},[s("div",{staticClass:"flex flex-col items-start sp-space-y-1"},[s("p",[t._v(t._s(t.seo.title.description))]),s("p",[s("span",{staticClass:"sp-text-gray-600 sp-font-semibold"},[t._v("Text:")]),t._v(" "+t._s(t.seo.title.value)+" ")]),s("p",[s("b",{staticClass:"sp-text-gray-600 sp-font-semibold"},[t._v(" Length:")]),t._v(" "+t._s(t.seo.title.value.length)+" characters ")])])]),s("info-item",{attrs:{title:"Meta Description Test",score:t.seo.description.score}},[s("div",{staticClass:"flex flex-col items-start sp-space-y-1"},[s("p",[t._v(t._s(t.seo.description.description))]),s("p",[s("span",{staticClass:"sp-text-gray-600 sp-font-semibold"},[t._v("Text:")]),t._v(" "+t._s(t.seo.description.value)+" ")]),s("p",[s("b",{staticClass:"sp-text-gray-600 sp-font-semibold"},[t._v(" Length:")]),t._v(" "+t._s(t.seo.description.value.length)+" characters ")])])]),s("info-item",{attrs:{title:"Canonical Test",score:t.seo.canonical.score}},[s("p",[t._v(t._s(t.seo.canonical.description))])]),s("info-item",{attrs:{title:"Keywords Test",score:t.seo.keywords.score}},[s("p",[t._v(t._s(t.seo.keywords.description))])]),s("info-item",{attrs:{title:"Index Tag Test",score:t.seo.index.score}},[s("p",[t._v(t._s(t.seo.index.description))])]),s("info-item",{attrs:{title:"Lang Tag Test",score:t.seo.lang.score}},[s("p",[t._v(t._s(t.seo.lang.description))])])],1)},nt=[],it=r(at,rt,nt,!1,null,null,null,null);const w=it.exports,lt={};var ot=function(){var t=this,s=t._self._c;return s("div",{staticClass:"p-4"},[t._t("default")],2)},ct=[],dt=r(lt,ot,ct,!1,null,null,null,null);const m=dt.exports,pt={components:{CardBody:m,CardHeader:p,Card:d},props:{title:{type:String,required:!0},score:{type:Number,default:0}},data(){return{color:"",radius:60}},mounted(){this.getScoreColor(this.score)},methods:{getScoreColor(e){e>=90?this.color="high":e>50&&e<89?this.color="medium":this.color="low"}},computed:{getItemId(){return this.title.toLocaleLowerCase().split(" ").join("-")},strokeWidth(){return this.radius*.2},innerRadius(){return this.radius-this.strokeWidth},circumference(){return this.innerRadius*2*Math.PI},arc(){return this.circumference*.75},dashArray(){return`${this.arc} ${this.circumference}`},transform(){return`rotate(135, ${this.radius}, ${this.radius})`},offset(){return this.arc-this.score/100*this.arc},gradientStartColor(){return{high:"#86efac",medium:"#fde047",low:"#fca5a5"}[this.color]},gradientStopColor(){return{high:"#22c55e",medium:"#eab308",low:"#ef4444"}[this.color]}}};var _t=function(){var t=this,s=t._self._c;return s("card",[s("card-header",[t._v(" "+t._s(t.title)+" ")]),s("card-body",{staticClass:"flex justify-center relative"},[s("svg",{attrs:{height:t.radius*2,width:t.radius*2}},[s("defs",[s("linearGradient",{attrs:{id:`grad-${t.getItemId}`,x1:"0",y1:"0",x2:"1",y2:"1"}},[s("stop",{attrs:{offset:"15%","stop-color":t.gradientStopColor,"stop-opacity":"1"}}),s("stop",{attrs:{offset:"85%","stop-color":t.gradientStartColor,"stop-opacity":"1"}})],1)],1),s("circle",{staticClass:"gauge_base",attrs:{cx:t.radius,cy:t.radius,fill:"transparent",r:t.innerRadius,stroke:"#e2e8f0","stroke-dasharray":t.dashArray,"stroke-linecap":"round","stroke-width":t.strokeWidth,transform:t.transform}}),s("circle",{staticClass:"gauge_percent",style:{transition:"stroke-dashoffset 0.3s"},attrs:{cx:t.radius,cy:t.radius,fill:"transparent",r:t.innerRadius,stroke:`url(#grad-${t.getItemId})`,"stroke-dasharray":t.dashArray,"stroke-dashoffset":t.offset,"stroke-linecap":"round","stroke-width":t.strokeWidth,transform:t.transform}})]),s("p",{staticClass:"sp-absolute sp-inset-0 sp-mx-auto sp-flex sp-items-center sp-justify-center sp-font-display sp-font-bold sp-text-3xl",class:{"sp-text-green-500":t.color==="high","sp-text-yellow-500":t.color==="medium","sp-text-red-500":t.color==="low"},domProps:{textContent:t._s(t.score)}})])],1)},ut=[],ft=r(pt,_t,ut,!1,null,null,null,null);const mt=ft.exports,vt={components:{Gauge:mt},props:["scores"]};var ht=function(){var t=this,s=t._self._c;return s("div",{staticClass:"sp-grid sp-grid-cols-4 sp-gap-4"},[s("gauge",{attrs:{title:"Performance",score:t.scores.performance}}),s("gauge",{attrs:{title:"Accessibility",score:t.scores.accessibility}}),s("gauge",{attrs:{title:"Best Practices",score:t.scores.best_practices}}),s("gauge",{attrs:{title:"SEO",score:t.scores.seo}})],1)},gt=[],xt=r(vt,ht,gt,!1,null,null,null,null);const Ct=xt.exports,wt={props:["value","maxValue"],computed:{indicator:function(){let e=this.value.split(" ")[0];return e>this.maxValue?101:e/this.maxValue*100}}};var bt=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"flex",class:[t.indicator>100&&"relative"]},[s("div",{staticClass:"flex w-2/3 h-2",class:[t.indicator<=100&&"relative"]},[s("div",{staticClass:"flex-1 sp-bg-green-500 sp-rounded-l"}),s("div",{staticClass:"flex-1 sp-bg-yellow-500"}),s("div",{staticClass:"absolute top-2 -sp-translate-x-1/2",style:{left:`${t.indicator}%`}},[t._m(0)])]),s("div",{staticClass:"w-1/3 h-2 sp-bg-red-500 sp-rounded-r"})])])},$t=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col sp-items-center sp-justify-center sp-mt-1 sp-text-xs sp-transform -sp-translate-x-1/2"},[t("div",{staticClass:"sp-inline-block sp-w-3 sp-overflow-hidden"},[t("div",{staticClass:"sp-bg-gray-700 sp-rotate-45 sp-transform sp-origin-bottom-left sp-h-2 sp-w-2"})])])}],yt=r(wt,bt,$t,!1,null,null,null,null);const $=yt.exports,kt={components:{CardHeader:p,CardBody:m,Card:d,ProgressBar:$},props:["title","score","description","value","maxValue"]};var St=function(){var t=this,s=t._self._c;return s("card",[s("card-header",[t._v(" "+t._s(t.title)+" ")]),s("card-body",{staticClass:"sp-space-y-3"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"sp-w-3 sp-h-3 sp-rounded-full sp-shrink-0 sp-bg-green-500 sp-mr-2",class:{"sp-bg-green-500":t.score==="passed","sp-bg-yellow-500":t.score==="warning","sp-bg-red-500":t.score==="failed"}}),s("h1",{staticClass:"sp-font-semibold sp-text-3xl",class:{"sp-text-green-500":t.score==="passed","sp-text-yellow-500":t.score==="warning","sp-text-red-500":t.score==="failed"},domProps:{textContent:t._s(t.value)}})]),s("progress-bar",{attrs:{value:t.value,maxValue:t.maxValue}}),s("p",{staticClass:"mt-8 sp-text-sm",domProps:{textContent:t._s(t.description)}})],1)],1)},Rt=[],jt=r(kt,St,Rt,!1,null,null,null,null);const Ft=jt.exports,Lt={props:["audit","full_report"],data(){return{showFullReport:!1}},components:{CardHeader:p,ProgressBar:$,AuditCard:Ft,CardBody:m,Card:d}};var Tt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"sp-grid md:sp-grid-cols-2 sp-gap-4 sp-mb-4"},[s("audit-card",{attrs:{title:"Cumulative Layout Shift",score:t.audit.cumulative_layout_shift.score,description:t.audit.cumulative_layout_shift.description,value:t.audit.cumulative_layout_shift.value,maxValue:.25}}),s("audit-card",{attrs:{title:"First Contentful Paint",score:t.audit.first_contentful_paint.score,description:t.audit.first_contentful_paint.description,value:t.audit.first_contentful_paint.value,maxValue:3}}),s("audit-card",{attrs:{title:"Largest Contentful Paint",score:t.audit.largest_contentful_paint.score,description:t.audit.largest_contentful_paint.description,value:t.audit.largest_contentful_paint.value,maxValue:4}}),s("audit-card",{attrs:{title:"Page Size",score:t.audit.page_size.score,description:t.audit.page_size.description,value:t.audit.page_size.value,maxValue:100}}),s("audit-card",{attrs:{title:"Speed Index",score:t.audit.speed_index.score,description:t.audit.speed_index.description,value:t.audit.speed_index.value,maxValue:5.8}}),s("audit-card",{attrs:{title:"Time To Interactive",score:t.audit.time_to_interactive.score,description:t.audit.time_to_interactive.description,value:t.audit.time_to_interactive.value,maxValue:60}}),s("audit-card",{attrs:{title:"Total Blocking Time",score:t.audit.time_to_interactive.score,description:t.audit.time_to_interactive.description,value:t.audit.time_to_interactive.value,maxValue:7.3}}),s("div",{staticClass:"flex items-center justify-center"},[s("a",{staticClass:"btn",attrs:{href:t.full_report,target:"_blank"}},[t._v(" View Full Report ")])])],1)},Pt=[],It=r(Lt,Tt,Pt,!1,null,null,null,null);const Vt=It.exports,g="/build/assets/no-image-1998827c.png",Ht={props:{domain:String,image:String,title:String,desc:String}};var zt=function(){var t=this,s=t._self._c;return s("div",[s("h3",{staticClass:"mb-2"},[t._v("Facebook")]),s("a",{staticClass:"inline-block sp-w-[500px] sp-border sp-border-[#dadde1]",attrs:{href:t.url,target:"_blank"}},[s("div",{staticClass:"w-auto sp-h-[274px] sp-relative"},[t.image?s("img",{staticClass:"sp-object-contain",attrs:{src:t.image}}):t._e(),t.image?t._e():s("img",{staticClass:"sp-h-full sp-w-full sp-object-contain",attrs:{src:g}})]),s("div",{staticClass:"sp-break-words sp-bg-[#f2f3f5] sp-px-[12px] sp-py-[10px] sp-antialiased sp-border-t-[1px] sp-border-[#dadde1]"},[s("p",{staticClass:"sp-overflow-hidden sp-truncate sp-whitespace-nowrap sp-text-[12px] sp-uppercase sp-leading-[11px] sp-text-[#606770]"},[t._v(" "+t._s(t.domain)+" ")]),t.title?s("h4",{staticClass:"sp-mt-[3px] sp-truncate sp-pt-[2px] sp-text-base sp-font-semibold sp-leading-[20px] sp-text-[#1d2129]"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t.desc?s("p",{staticClass:"sp-mt-[3px] sp-block sp-h-[18px] sp-max-h-[80px] sp-border-separate sp-select-none sp-overflow-hidden sp-truncate sp-whitespace-nowrap sp-break-words sp-text-left sp-text-[14px] sp-leading-[20px] sp-text-[#606770]"},[t._v(" "+t._s(t.desc)+" ")]):t._e()])])])},Ot=[],Mt=r(Ht,zt,Ot,!1,null,null,null,null);const qt=Mt.exports,Bt={props:{url:String,image:String,card:String},computed:{domain(){return new URL(this.url).hostname}}};var Dt=function(){var t=this,s=t._self._c;return s("div",[s("h3",{staticClass:"mb-2"},[t._v("Twitter")]),s("a",{staticClass:"inline-block sp-relative sp-overflow-hidden sp-rounded-md",attrs:{href:t.url,target:"_blank"}},[s("div",{staticClass:"sp-w-[512px] sp-h-[268px] sp-bg-gray-300"},[t.card==="summary_large_image"?s("img",{staticClass:"h-full sp-object-cover sp-object-center sp-w-full",attrs:{src:t.image}}):t._e(),t.card!=="summary_large_image"?s("img",{staticClass:"sp-w-full sp-object-contain sp-h-full",attrs:{src:g}}):t._e(),t.url?s("p",{staticClass:"px-3 py-1 text-white sp-text-xs sp-rounded-md sp-shadow sp-absolute sp-left-2 sp-bottom-2 sp-bg-black/30"},[t._v(" "+t._s(t.domain)+" ")]):t._e()])])])},Et=[],Wt=r(Bt,Dt,Et,!1,null,null,null,null);const At=Wt.exports,Nt={props:{title:String,image:String,domain:String}};var Gt=function(){var t=this,s=t._self._c;return s("div",[s("h3",{staticClass:"mb-2"},[t._v("Linkedin")]),s("a",{staticClass:"inline-block sp-w-[500px] sp-shadow-md",attrs:{href:t.url,target:"_blank"}},[s("div",{staticClass:"sp-w-auto sp-h-[270px] sp-relative sp-border"},[t.image?s("img",{staticClass:"sp-object-contain",attrs:{src:t.image}}):t._e(),t.image?t._e():s("img",{staticClass:"sp-h-full sp-w-full sp-object-contain",attrs:{src:g}})]),s("div",{staticClass:"p-3 bg-white"},[t.title?s("h4",{staticClass:"mb-2 sp-text-base"},[t._v(t._s(t.title))]):t._e(),s("p",{staticClass:"sp-truncate sp-whitespace-nowrap sp-text-xs sp-uppercase sp-text-gray-600"},[t._v(" "+t._s(t.domain)+" ")])])])])},Ut=[],Jt=r(Nt,Gt,Ut,!1,null,null,null,null);const Xt=Jt.exports,Kt={props:{title:String,image:String,desc:String,url:String,site_name:String}};var Qt=function(){var t=this,s=t._self._c;return s("div",[s("h3",{staticClass:"mb-2"},[t._v("Discord")]),s("a",{staticClass:"inline-block sp-w-[432px] sp-bg-gray-800 p-4 sp-rounded",attrs:{href:t.url,target:"_blank"}},[t.site_name?s("p",{staticClass:"sp-text-xs sp-uppercase sp-leading-[11px] sp-text-gray-400"},[t._v(" "+t._s(t.site_name)+" ")]):t._e(),t.title?s("h3",{staticClass:"py-2 sp-text-white sp-font-semibold"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t.desc?s("p",{staticClass:"sp-text-sm sp-text-gray-200 sp-font-light sp-line-clamp-2"},[t._v(" "+t._s(t.desc)+" ")]):t._e(),t.image?s("img",{staticClass:"sp-h-[200px] sp-w-full mt-4 sp-relative sp-font-sm sp-rounded sp-object-cover",attrs:{src:t.image}}):t._e()])])},Yt=[],Zt=r(Kt,Qt,Yt,!1,null,null,null,null);const ts=Zt.exports,ss={props:{title:String,desc:String,domain:String}};var es=function(){var t=this,s=t._self._c;return s("div",{staticClass:"max-w-[600px]"},[s("h3",{staticClass:"mb-2"},[t._v("Google")]),s("a",{staticClass:"!sp-text-[#1a0dab] sp-text-lg hover:sp-underline",attrs:{href:t.domain,target:"_blank",rel:"noreferrer"}},[t._v(" "+t._s(t.title??t.domain)+" ")]),s("div",{staticClass:"-sp-mt-0.5 sp-flex sp-items-center"},[s("span",{staticClass:"sp-text-sm sp-text-[#006621]"},[t._v(" "+t._s(t.domain))]),t._m(0)]),t.desc?s("p",{staticClass:"sp-text-[#545454] sp-text-[13px]"},[t._v(t._s(t.desc))]):t._e()])},as=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"sp-inline-block sp-w-2 sp-overflow-hidden sp-mt-1 sp-ml-0.5"},[t("div",{staticClass:"sp-bg-[#006621] -sp-rotate-45 sp-transform sp-origin-top-left sp-h-1.5 sp-w-1.5"})])}],rs=r(ss,es,as,!1,null,null,null,null);const ns=rs.exports,is={components:{FacebookCard:qt,TwitterCard:At,LinkedinCard:Xt,DiscordCard:ts,GoogleCard:ns},props:["og_graph","twitter","domain","seo"]};var ls=function(){var t=this,s=t._self._c;return s("div",{staticClass:"sp-space-y-4"},[s("google-card",{attrs:{title:t.seo.title.value,desc:t.seo.description.value,domain:this.domain}}),s("facebook-card",{attrs:{image:t.og_graph.image,desc:t.og_graph.description,title:t.og_graph.title,domain:t.domain}}),s("twitter-card",{attrs:{url:this.domain,image:t.twitter.image,card:t.twitter.card}}),s("linkedin-card",{attrs:{title:t.og_graph.title,image:t.og_graph.image,domain:t.domain}}),s("discord-card",{attrs:{title:t.og_graph.title,site_name:t.og_graph.site_name,image:t.og_graph.image,url:t.og_graph.url,desc:t.og_graph.description}})],1)},os=[],cs=r(is,ls,os,!1,null,null,null,null);const ds=cs.exports,x=e=>e.replace(/\_/g," ").replace(/\w\S*/g,t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()),ps={components:{Card:d,CardHeader:p,InfoItem:h},props:["audit"],methods:{unslugify:x}};var _s=function(){var t=this,s=t._self._c;return s("card",{staticClass:"mt-4"},[s("card-header",[t._v(" Open Graph Tags ")]),t._l(t.audit,function(a,i){return s("div",{key:i},[s("info-item",{attrs:{title:t.unslugify(i),score:a.score}},[s("div",{staticClass:"flex flex-col items-start space-y-2 sp-break-words overflow-x-auto"},[a.score==="failed"?s("p",[t._v(t._s(a.description))]):t._e(),s("p",{domProps:{textContent:t._s(a.value)}})])])],1)})],2)},us=[],fs=r(ps,_s,us,!1,null,null,null,null);const ms=fs.exports,vs={props:["json_ld"],components:{Card:d,CardHeader:p,CardBody:m},methods:{unslugify:x,isObject(e){return typeof e=="object"&&e!==null},isString(e){return typeof e=="string"&&e!==null}}};var hs=function(){var t=this,s=t._self._c;return s("card",{staticClass:"mt-4"},[s("card-header",[t._v(" JSON-LD Schema ")]),s("card-body",{staticClass:"sp-space-y-4"},t._l(this.json_ld,function(a,i){return s("table",{key:i,staticClass:"sp-overflow-hidden sp-rounded-lg sp-ring-1 sp-ring-gray-300 sp-divide-y sp-w-full"},t._l(a,function(c,u){return s("tr",{key:u},[s("td",{staticClass:"w-1/4 px-4 py-2 sp-bg-gray-50"},[s("b",[t._v(" "+t._s(t.unslugify(u))+" ")])]),s("td",{staticClass:"w-3/4 px-4 py-1"},[t.isString(c)?[t._v(" "+t._s(c))]:t._e(),t.isObject(c)?t._l(c,function(_,n){return s("div",{key:n},[t.isString(n)?s("span",{staticClass:"sp-font-medium sp-pr-2"},[t._v(t._s(n)+":")]):t._e(),t.isString(_)?[t._v(t._s(_))]:t._e(),t.isObject(_)?t._l(_,function(l,f){return s("div",{key:f},[t.isString(f)?s("span",{staticClass:"sp-font-medium sp-pr-2"},[t._v(t._s(f)+": ")]):t._e(),t.isString(l)?[t._v(" "+t._s(l)+" ")]:t._e(),t.isObject(l)?t._l(l,function(v,o){return s("span",{key:o},[t._v(" "+t._s(v)+" ")])}):t._e()],2)}):t._e()],2)}):t._e()],2)])}),0)}),0)],1)},gs=[],xs=r(vs,hs,gs,!1,null,null,null,null);const Cs=xs.exports,ws={props:["title","list","length","tag"],data(){return{isHidden:!1}},methods:{showHide(){this.isHidden=!this.isHidden}}};var bs=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"flex sp-justify-between"},[s(t.tag,{tag:"component",staticClass:"py-2 leading-none"},[t._v(" "+t._s(t.title)+": "+t._s(t.length)+" ")]),s("button",{staticClass:"sp-text-xs sp-font-medium",domProps:{textContent:t._s(t.isHidden?"Hide":"Show")},on:{click:function(a){return t.showHide()}}})],1),t.isHidden?s("ul",{staticClass:"pb-2"},t._l(t.list,function(a){return s("li",{key:a},[t._v(t._s(a))])}),0):t._e()])},$s=[],ys=r(ws,bs,$s,!1,null,null,null,null);const ks=ys.exports,Ss={props:["active","title","data"]};var Rs=function(){var t=this,s=t._self._c;return t.active?s("div",{staticClass:"sp-pt-5 sp-px-3"},[s("h5",{staticClass:"text-lg sp-font-semibold"},[t._v(t._s(t.title)+" Links")]),s("ul",{staticClass:"sp-divide-y"},t._l(t.data,function(a,i){return s("li",{key:i,staticClass:"py-2 sp-flex sp-flex-col"},[s("span",{staticClass:"text-sm sp-font-medium"},[s("span",{staticClass:"sp-font-medium sp-text-xs sp-text-gray-600"},[t._v("Link:")]),t._v(" "+t._s(a.href)+" ")]),s("span",{staticClass:"text-sm pt-0.5"},[s("span",{staticClass:"sp-font-medium sp-text-xs sp-text-gray-600"},[t._v("Text:")]),t._v(" "+t._s(a.content)+" ")])])}),0)]):t._e()},js=[],Fs=r(Ss,Rs,js,!1,null,null,null,null);const Ls=Fs.exports,Ts={components:{Card:d,CardBody:m,ListOfLinks:Ls},props:["data"],data(){return{active:""}},methods:{showList(e){this.active=this.active===e?"":e}},computed:{totalLinks(){return Number(this.data.internal.length+this.data.external.length)}}};var Ps=function(){var t=this,s=t._self._c;return s("div",{staticClass:"p-2"},[s("div",{staticClass:"text-center sp-grid sp-grid-cols-3"},[s("div",[s("h5",{staticClass:"sp-text-sm sp-text-gray-600"},[t._v("Total Links")]),s("h3",{staticClass:"sp-text-3xl"},[t._v(" "+t._s(t.totalLinks)+" ")])]),s("div",[s("h5",{staticClass:"sp-text-sm sp-text-gray-600"},[t._v("Internal Links")]),s("h3",{staticClass:"sp-text-3xl"},[t._v(" "+t._s(t.data.internal.length)+" ")]),s("button",{staticClass:"sp-text-xs sp-font-medium",domProps:{textContent:t._s(t.active==="internal"?"Hide":"Show")},on:{click:function(a){return t.showList("internal")}}})]),s("div",[s("h5",{staticClass:"sp-text-sm sp-text-gray-600"},[t._v("External Links")]),s("h3",{staticClass:"sp-text-3xl"},[t._v(" "+t._s(t.data.external.length)+" ")]),s("button",{staticClass:"sp-text-xs sp-font-medium",domProps:{textContent:t._s(t.active==="external"?"Hide":"Show")},on:{click:function(a){return t.showList("external")}}})])]),s("list-of-links",{attrs:{title:"Internal",active:t.active==="internal",data:t.data[t.active]}}),s("list-of-links",{attrs:{title:"External",active:t.active==="external",data:t.data[t.active]}})],1)},Is=[],Vs=r(Ts,Ps,Is,!1,null,null,null,null);const y=Vs.exports,Hs={data(){return{headings:["h1","h2","h3","h4","h5","h6"]}},props:["content"],components:{InternalExternalLinks:y,InfoItem:h,HeadingList:ks,Card:d,CardHeader:p},methods:{unslugify:x}};var zs=function(){var t=this,s=t._self._c;return s("card",[s("card-header",[t._v(" SEO Content")]),s("info-item",{attrs:{title:"Heading Count",score:"info"}},[s("div",{staticClass:"sp-w-full sp-divide-gray-200 sp-divide-y"},t._l(t.headings,function(a){return s("div",{key:a},[s("heading-list",{attrs:{tag:a,title:a,list:t.content.headingCount[a],length:t.content.headingCount[a].length}})],1)}),0)]),s("info-item",{attrs:{title:"Multiple Headings",score:t.content.multiple_headings.score}},[s("p",[t._v(t._s(t.content.multiple_headings.description))])]),s("info-item",{attrs:{title:"Broken Images",score:t.content.broken_images.score}},[s("p",[t._v(t._s(t.content.broken_images.description))])]),s("info-item",{attrs:{title:"Images without alt",score:t.content.no_alt.score}},[s("div",{staticClass:"sp-divide-gray-200 sp-divide-y"},[s("p",[t._v(t._s(t.content.no_alt.description))]),s("ul",{staticClass:"pt-1 mt-1"},t._l(t.content.no_alt.value,function(a){return s("li",{key:a},[t._v(" "+t._s(a)+" ")])}),0)])]),s("internal-external-links",{attrs:{data:t.content.links}})],1)},Os=[],Ms=r(Hs,zs,Os,!1,null,null,null,null);const qs=Ms.exports,Bs={components:{Status:b},data(){return{legend:[{value:"passed",label:"Passed"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"},{value:"info",label:"Info"}]}}};var Ds=function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex space-x-4 sp-justify-end"},t._l(t.legend,function(a){return s("div",{key:a.value,staticClass:"flex sp-items-center"},[s("status",{attrs:{value:a.value}}),s("span",{staticClass:"text-sm sp-pl-1"},[t._v(" "+t._s(a.label)+" ")])],1)}),0)},Es=[],Ws=r(Bs,Ds,Es,!1,null,null,null,null);const As=Ws.exports,Ns={components:{AuditSection:Vt,PerformanceSection:Ct,SeoSection:w,MetaPreview:ds,MetaSection:ms,JsonLdSchema:Cs,SeoContentSection:qs,SeoSection:w,StatusLegend:As,InternalExternalLinks:y},props:["report","domain"]};var Gs=function(){var t=this,s=t._self._c;return s("div",{staticClass:"sp-space-y-4"},[s("performance-section",{attrs:{scores:t.report.lighthouse}}),s("audit-section",{attrs:{audit:t.report.lighthouse.audit,full_report:t.report.lighthouse.report}}),s("status-legend"),s("seo-section",{attrs:{seo:t.report.seo}}),s("seo-content-section",{attrs:{content:t.report.content}}),s("meta-section",{attrs:{audit:t.report.og_graph.audit}}),s("meta-preview",{attrs:{og_graph:t.report.og_graph,twitter:t.report.twitter,json_ld:t.report.json_ld,seo:t.report.seo,domain:this.domain}}),t.report.json_ld.length!==0?[s("json-ld-schema",{attrs:{json_ld:t.report.json_ld}})]:t._e()],2)},Us=[],Js=r(Ns,Gs,Us,!1,null,null,null,null);const Xs=Js.exports;Statamic.booting(()=>{Statamic.$components.register("sp-index",B),Statamic.$components.register("sp-create-report",L),Statamic.$components.register("sp-show-report",Xs)});
