import{_ as P}from"./DataLayout-2LVpN9Ff.js";import{f as S,o as i,c as n,d as o,u as t,w as m,F as C,Z as M,k as $,e as A,t as b,b as v}from"./app-BqYB4w7h.js";import B from"./AgentProfileFilters-DyGX7kei.js";import L from"./AgentProfileResults-CeY8IutL.js";import{_ as N}from"./DataPanel-eTawuoZh.js";import{C as V}from"./Code-DkVlEmhY.js";import{_ as E}from"./DataProps-B_-AGWfx.js";import{_ as F}from"./ScrollToTop-jtdKJjCK.js";import{u as T}from"./LoadAndShowItems-CdGcY1M4.js";import{u as D}from"./StoreSelector-eCG8qd9a.js";import"./AuthenticatedLayout-DmkbqqwL.js";import"./TopBar-CSycyVTE.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";import"./Select-I1X3nauV.js";import"./NeutralBadge-Cx27iNjU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronUpDownIcon-BxOM5Ujt.js";import"./LinkButton-wwdNtJLC.js";import"./AgentFilter-Bzph49mo.js";import"./AgentField-Cckzi0Yd.js";import"./TextInputWithCompletion-u-xIqChF.js";import"./InputError-_zuJ5dV-.js";import"./disposables-CuHKeC00.js";import"./InputLabel-B012P3ON.js";import"./ProfileIdFilter-RnXm1qsN.js";import"./SinceFilter-gHh9y0zY.js";import"./TimestampFilter-COmtmHSt.js";import"./TextInput-Bd33mpYb.js";import"./MimeTypeFilter-BmBQQFR1.js";import"./PrimaryButton-JrsBxlP3.js";import"./FilterItems-DtKLW4qf.js";import"./XapiProps-BVq1ckif.js";import"./moment-Cl4UOzQZ.js";import"./transition-CSxLRhS2.js";import"./ChevronUpIcon-CDU9mihh.js";import"./LoadItems-f7CjgfCr.js";const R={key:1,class:"text-gray-800 dark:text-white/90 text-center pt-12"},bt={__name:"AgentProfiles",setup(U){const{currentStore:l}=D(),a=S({agent:null,profileId:"",since:"",type:""}),d={},{loadItems:f,loadMoreItems:u,loadingItems:c,loadedCounter:_,loadedItems:p,loadingErrors:g,hasMoreItems:I,showItem:h,itemPanelVisible:e,itemContent:w,itemContentType:y,itemIndex:x,itemProps:k}=T({url:"/trax/api/gateway/front/stores/"+l()+"/agent-profiles",filters:a,baseParams:{},settings:{sortProp:"stored",more:!0}});return(Z,r)=>(i(),n(C,null,[o(t(M),{title:"Agent Profiles"}),o(P,{"side-menu-current":"Agent Profiles"},{default:m(()=>[o(N,{show:t(e),"onUpdate:show":r[0]||(r[0]=s=>$(e)?e.value=s:null)},{title:m(()=>[A(b(t(x)+1),1)]),content:m(()=>[o(E,{props:t(k)},null,8,["props"]),o(V,{data:t(w),type:t(y)},null,8,["data","type"])]),_:1},8,["show"]),o(B,{filters:a,options:d,counter:t(_),errors:t(g),onApply:r[1]||(r[1]=s=>t(f)(s))},null,8,["filters","counter","errors"]),t(p).length?(i(),v(L,{key:0,loadedItems:t(p),hasMoreItems:t(I),loadingItems:t(c),onLoadMore:t(u),onShow:t(h),class:"mt-8"},null,8,["loadedItems","hasMoreItems","loadingItems","onLoadMore","onShow"])):(i(),n("div",R," No profile found! ")),o(F)]),_:1})],64))}};export{bt as default};