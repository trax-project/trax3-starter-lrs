import{o as t,c as l,a as m,h as w,b as d,w as n,d as p,u as o,n as g,F as x,i as k,e as V,t as y,j as c,x as B}from"./app-BqYB4w7h.js";import{N}from"./NeutralBadge-Cx27iNjU.js";import{j as S,r as A,A as C,F,I as j}from"./ChevronUpDownIcon-BxOM5Ujt.js";function q(e,h){return t(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[m("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"})])}const z={class:"relative"},_={key:0},I={key:0,class:"block truncate text-gray-500"},T={key:1,class:"pt-1"},D={key:1,class:"block truncate"},E={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},L={key:0,class:g(["absolute inset-y-0 left-0 flex items-center pl-2 text-indigo-600"])},$={__name:"Select",props:{id:{type:String,required:!0},modelValue:{type:[String,Number,Boolean,Array],required:!1},options:{type:Array,required:!0},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},lines:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:h}){const s=e,v=h,u=w({get(){if(s.multiple)return s.options.filter(a=>s.modelValue.includes(a.id));{let a=s.options.find(r=>s.modelValue==r.id);return a||(console.log("Select component issue: no option matching with the selected value!"),s.options[0])}},set(a){s.multiple?v("update:modelValue",a.map(r=>r.id)):v("update:modelValue",a.id)}});return(a,r)=>(t(),d(o(j),{as:"div",modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=i=>u.value=i),multiple:e.multiple,class:"w-full"},{default:n(()=>[m("div",z,[p(o(S),{class:g([e.lines?e.disabled?"":"bg-opacity-0 text-white text-opacity-80 dark:bg-opacity-0 .ring-gray-300 focus:ring-white/80":e.disabled?"":"dark:ring-gray-600 focus:ring-indigo-600 dark:focus:ring-indigo-400",e.disabled?"cursor-default":"cursor-pointer focus-within:z-10 focus:outline-none focus:ring-2","rounded-md relative w-full py-1.5 pl-3 pr-10 text-sm leading-6 text-left ring-1 ring-inset bg-white text-gray-900 ring-gray-300 dark:bg-gray-800 dark:text-gray-200"])},{default:n(()=>[e.multiple?(t(),l("div",_,[u.value.length==0?(t(),l("span",I," Select some options ")):(t(),l("div",T,[(t(!0),l(x,null,k(u.value,(i,f)=>(t(),d(N,{key:f,class:"mr-1 mb-1"},{default:n(()=>[V(y(i.name),1)]),_:2},1024))),128))]))])):c("",!0),e.multiple?c("",!0):(t(),l("span",D,y(u.value.name),1)),m("span",E,[e.disabled?c("",!0):(t(),d(o(A),{key:0,class:"h-5 w-5 text-gray-400","aria-hidden":"true"}))])]),_:1},8,["class"]),e.disabled?c("",!0):(t(),d(B,{key:0,"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[p(o(C),{class:"absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"},{default:n(()=>[(t(!0),l(x,null,k(e.options,i=>(t(),d(o(F),{as:"template",key:i.id,value:i},{default:n(({active:f,selected:b})=>[m("li",{class:g([f?"bg-gray-200 dark:bg-gray-300 dark:text-gray-900":"text-gray-900","relative cursor-default select-none py-2 px-3"])},[m("span",{class:g([b?"font-semibold":"font-normal",e.multiple?"pl-6":"","block truncate"])},y(i.name),3),b&&e.multiple?(t(),l("span",L,[p(o(q),{class:"h-5 w-5","aria-hidden":"true"})])):c("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1}))])]),_:1},8,["modelValue","multiple"]))}};export{$ as _};