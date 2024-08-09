import{B as L,H as T,h as p,g as _,m as H,s as C,D as k,F as N,o as d,c as v,a as l,b as R,w as K,n as s,d as b,u as g,j as z,e as F}from"./app-BqYB4w7h.js";import{I,d as O,o as P,f as U,E as X,s as G,A as q,T as J,a as w,p as Q}from"./form-BD1T68Go.js";import{s as W}from"./use-resolve-button-type-zbaL4VAc.js";let Y=Symbol("GroupContext"),ee=L({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:o,attrs:a,slots:c,expose:f}){var h;let S=(h=e.id)!=null?h:`headlessui-switch-${I()}`,r=T(Y,null),[i,x]=O(p(()=>e.modelValue),t=>o("update:modelValue",t),p(()=>e.defaultChecked));function y(){x(!i.value)}let B=_(null),u=r===null?B:r.switchRef,V=W(p(()=>({as:e.as,type:a.type})),u);f({el:u,$el:u});function M(t){t.preventDefault(),y()}function $(t){t.key===w.Space?(t.preventDefault(),y()):t.key===w.Enter&&Q(t.currentTarget)}function Z(t){t.preventDefault()}let m=p(()=>{var t,n;return(n=(t=P(u))==null?void 0:t.closest)==null?void 0:n.call(t,"form")});return H(()=>{C([m],()=>{if(!m.value||e.defaultChecked===void 0)return;function t(){x(e.defaultChecked)}return m.value.addEventListener("reset",t),()=>{var n;(n=m.value)==null||n.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{name:t,value:n,form:A,...E}=e,j={checked:i.value},D={id:S,ref:u,role:"switch",type:V.value,tabIndex:0,"aria-checked":i.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:M,onKeyup:$,onKeypress:Z};return k(N,[t!=null&&i.value!=null?k(U,X({features:G.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,form:A,name:t,value:n})):null,q({ourProps:D,theirProps:{...a,...J(E,["modelValue","defaultChecked"])},slot:j,attrs:a,slots:c,name:"Switch"})])}}});function te(e,o){return d(),v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})])}function ae(e,o){return d(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"})])}const le=l("span",{class:"sr-only"},"Use setting",-1),fe={__name:"DarkModeButton",props:{dark:{type:Boolean,default:!1}},setup(e){const o=localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=_(o);return C(a,c=>{c?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(localStorage.theme="light",document.documentElement.classList.remove("dark"))},{immediate:!0}),(c,f)=>(d(),R(g(ee),{modelValue:a.value,"onUpdate:modelValue":f[0]||(f[0]=h=>a.value=h),class:s([a.value?"bg-indigo-500":e.dark?"bg-white/50":"bg-gray-400","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"])},{default:K(()=>[le,l("span",{class:s([a.value?"translate-x-5":"translate-x-0","pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])},[l("span",{class:s([a.value?"opacity-0 duration-100 ease-out":"opacity-100 duration-200 ease-in","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),"aria-hidden":"true"},[b(g(ae),{class:"h-3 w-3 text-gray-400"})],2),l("span",{class:s([a.value?"opacity-100 duration-200 ease-in":"opacity-0 duration-100 ease-out","absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"]),"aria-hidden":"true"},[b(g(te),{class:"h-3 w-3 text-indigo-600"})],2)],2)]),_:1},8,["modelValue","class"]))}},ne={class:"flex flex-shrink-0 items-center justify-center"},oe={key:0,class:"ml-1 h-10 lg:hidden font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"},re=["href"],se=["href"],ie=["href"],he={__name:"ApplicationLogo",props:{compact:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},href:{type:String,default:null}},setup(e){return(o,a)=>(d(),v("div",ne,[e.compact?(d(),v("div",oe,[l("a",{href:e.href},"TX",8,re)])):z("",!0),l("a",{href:e.href},[l("h1",{class:s([e.compact?"text-xl hidden md:visible lg:block":"text-3xl",e.dark?"text-white":"text-gray-800 dark:text-white","ml-2 font-semibold text-center"]),href:e.href},[F(" TRAX LRS "),l("span",{class:s([e.dark?"text-fuchsia-400":"text-fuchsia-500 dark:text-fuchsia-400","font-normal"]),style:{"font-size":"0.7em"}},"3.0",2)],10,ie)],8,se)]))}};export{fe as _,he as a};
