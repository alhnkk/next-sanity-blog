import{r as u,j as i,ag as oe,$ as U,aJ as ae,ah as ie,cr as ce,q as H,v as le,y as ue,at as de,p as _,P as me,cs as pe,J as fe,ct as he,cu as ye,cv as ge,ax as Te,aZ as Ie,z as Y,f as j,aa as M,a3 as Le,bw as ve,a1 as w,a0 as D,ac as Se,F as Re,aQ as be,cw as Pe,a7 as k,g as _e,cm as Ce,cx as Ee,b5 as A,cy as we,cz as xe,k as De,cA as Fe,cB as je,aP as q,d as Ae,cC as Oe,c9 as $e,ca as Me,aS as ke,cD as qe,cE as Ne,bA as N,bC as Be,cF as We,br as Ue,aT as He,b6 as Ye,cG as ze,cH as Ge,cI as Ve,bs as Ke}from"./sanity-4e721230.js";import{useDeskTool as Xe,useDeskToolSetting as B,Delay as Qe}from"./index-56aa5cc3-90af9ab4.js";import{P as Je}from"./PaneItem-9d0095a8-4b831e18.js";import"./index-51cccb8d.js";const W=100,O=2e3,z={by:[{field:"_updatedAt",direction:"desc"}]},Ze={};function et(e,s){return e._id?Y(e._id):"item-".concat(s)}function tt(e){return Fe(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const n=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const r=n.slice(1),c=s[r];return typeof c=="string"?c:null}return n}function rt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(s=>[at(s),(s.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function it(e,s){const t=e.by.map(n=>{if(n.mapWith)return n;const r=ct(s,n.field);return r?ut(r,"datetime")?{...n,mapWith:"dateTime"}:r.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return t.every((n,r)=>n===e.by[r])?e:{...e,by:t}}function ct(e,s){const t=fe(s);let n=e;for(const r of t){if(!n)return;if(typeof r=="string"){n=lt(n,r);continue}if(!(he(r)||ye(r))||n.jsonType!=="array")return;const[o,a]=n.of||[];if(a||!o)return;if(!ge(o)){n=o;continue}const[m,h]=o.to||[];if(h||!m)return;n=m}return n}function lt(e,s){if(!("fields"in e))return;const t=e.fields.find(n=>n.name===s);return t?t.type:void 0}function ut(e,s){let t=e.type;for(;t;){if(t.name===s||!t.type&&t.jsonType===s)return!0;t=t.type}return!1}function dt(e){const{childItemId:s,error:t,filterIsSimpleTypeContraint:n,fullList:r,isActive:c,isLoading:o,items:a,layout:m,onListChange:h,onRetry:l,showIcons:y}=e,S=H(),{collapsed:L}=Te(),{collapsed:v,index:g}=Ie(),[R,b]=u.useState(!1);u.useEffect(()=>{if(v)return;const d=setTimeout(()=>{b(!0)},0);return()=>{clearTimeout(d)}},[v]);const T=u.useCallback(d=>{const I=Y(d._id),p=s===I;return i(Je,{icon:y===!1?!1:void 0,id:I,pressed:!c&&p,selected:c&&p,layout:m,schemaType:S.get(d._type),value:d})},[s,c,m,S,y]),f=u.useMemo(()=>{if(!R)return null;if(t)return i(j,{align:"center",direction:"column",height:"fill",justify:"center",children:i(M,{width:1,children:_(Le,{paddingX:4,paddingY:5,space:4,children:[i(ve,{as:"h3",children:"Could not fetch list items"}),_(w,{as:"p",children:["Error: ",i("code",{children:t.message})]}),l&&i(D,{children:i(U,{icon:Se,onClick:l,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(j,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Qe,{ms:300,children:_(Re,{children:[i(be,{muted:!0}),i(D,{marginTop:3,children:i(w,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!o&&a.length===0)return i(j,{align:"center",direction:"column",height:"fill",justify:"center",children:i(M,{width:1,children:i(D,{paddingX:4,paddingY:5,children:i(w,{align:"center",muted:!0,size:2,children:n?"No documents of this type":"No matching documents"})})})});const d=r&&a.length===O;return _(D,{padding:2,children:[a.length>0&&i(Pe,{gap:1,getItemKey:et,items:a,renderItem:T,onChange:h},"".concat(g,"-").concat(v)),o&&i(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(w,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&i(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:_(w,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",O," documents"]})})]})},[t,n,r,h,o,a,l,T,R,v,g]);return i(_e,{overflow:L?void 0:"auto",children:f})}const G=u.memo(e=>{let{index:s,initialValueTemplates:t=[],menuItems:n=[],menuItemGroups:r=[],setLayout:c,setSortOrder:o,title:a}=e;const{features:m}=Xe(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{o(l)}}),[c,o]);return i(oe,{backButton:m.backButton&&s>0&&i(U,{as:ae,"data-as":"a",icon:ie,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:h,menuItemGroups:r,menuItems:n})})});G.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},pt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new je,n=t.next.bind(t);return e.pipe(q(o=>({client:o.client,query:o.query,params:o.params})),Ae(Oe),$e(1),Me()).pipe(ke(o=>{const a=qe(o.client,o.query,o.params,s).pipe(q(pt),Ne());return N(A({loading:!0}).pipe(Be(400),We(a)),a)})).pipe(Ue(mt),He((o,a)=>Ye(A(ft(o)),N(ze(window,"online"),t).pipe(Ge(1),Ve(a)))),Ke((o,a)=>({...o,...a,onRetry:n})))};function yt(e){var s;const{apiVersion:t,filter:n,params:r,sortOrder:c}=e,o=Ce(Ee),[a,m]=u.useState(!1),h=u.useRef(a),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,L=(l==null?void 0:l.loading)||l===null,v=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,R=u.useMemo(()=>g?tt(g):null,[g]),b=u.useMemo(()=>{const f=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),p=(c==null?void 0:c.by)||[],C=a?O:W,P=p.length>0?p:z.by,x=ot(P);if(f){const F=d.concat(f).join(",");return["*[".concat(n,"] {").concat(F,"}"),"order(".concat(x,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(n,"]|order(").concat(x,")[0...").concat(C,"]{").concat(I,"}")},[n,a,c]),T=u.useCallback(f=>{let{toIndex:d}=f;L||h.current||d>=W/2&&(m(!0),h.current=!0)},[L]);return u.useEffect(()=>{const f=a?p=>!!p.result:()=>!0;y(p=>p?{...p,loading:!0}:null);const I=ht(A({client:o,query:b,params:r}),{apiVersion:t,tag:"desk.document-list"}).pipe(we(f)).subscribe(y);return()=>I.unsubscribe()},[t,o,a,b,r]),u.useEffect(()=>{y(null),m(!1),h.current=!1},[n,r,c,t]),{error:S,fullList:a,handleListChange:T,isLoading:L,items:R,onRetry:v}}const $=[];function gt(e){const s=u.useRef(e);return xe(s.current,e)||(s.current=e),s.current}const Tt=e=>{const{menuItems:s,sortOrderRaw:t,layout:n}=e;return s==null?void 0:s.map(r=>{var c,o,a,m;return(c=r.params)!=null&&c.layout?{...r,selected:n===((o=r.params)==null?void 0:o.layout)}:(a=r==null?void 0:r.params)!=null&&a.by?{...r,selected:De(t==null?void 0:t.by,((m=r==null?void 0:r.params)==null?void 0:m.by)||$)}:{...r,selected:!1}})},Rt=u.memo(function(s){const{childItemId:t,index:n,isActive:r,isSelected:c,pane:o,paneKey:a}=s,m=H(),{name:h}=le(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=$,menuItems:L,menuItemGroups:v,options:g,title:R}=o,{apiVersion:b,defaultOrdering:T=$,filter:f}=g,d=gt(g.params||Ze),I=o.source,p=u.useMemo(()=>st(f,d),[f,d]),C=(y==null?void 0:y.showIcons)!==!1,[P,x]=B(p,"layout",l),F=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:z,[T]),[E,V]=B(p,"sortOrder",F),K=p&&E?it(E,m.get(p)):E,X=ue(K),Q=rt(f),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=yt({filter:f,params:d,sortOrder:X,apiVersion:b}),re=u.useMemo(()=>Tt({menuItems:L,sortOrderRaw:E,layout:P}),[P,L,E]);return i(de,{name:I||h,children:_(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[pe,i(G,{index:n,initialValueTemplates:S,menuItems:re,menuItemGroups:v,setLayout:x,setSortOrder:V,title:R}),i(dt,{childItemId:t,error:J,filterIsSimpleTypeContraint:Q,fullList:Z,isActive:r,isLoading:te,items:ne,layout:P,onListChange:ee,onRetry:se,showIcons:C})]})})});export{Rt as default};