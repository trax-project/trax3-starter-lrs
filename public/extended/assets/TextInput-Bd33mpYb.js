import{o as a,c as n,a as i,s as x,t as b,n as o,l as y,d as c,u as m,j as d,b as f}from"./app-BqYB4w7h.js";import{_ as h}from"./InputError-_zuJ5dV-.js";function k(e,s){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"fill-rule":"evenodd",d:"M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z","clip-rule":"evenodd"})])}const w={key:0,class:"w-full"},p={class:"flex select-none items-center pl-3 text-sm text-gray-500 dark:text-gray-200"},$=["type","id","name","placeholder","value","disabled"],V={key:0,class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},B={key:1,class:"w-full p-0 bg-transparent border-0"},S={class:"relative"},q=["type","id","name","placeholder","value","disabled"],E={key:0,class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},I={__name:"TextInput",props:{id:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,required:!1},modelValue:{type:[String,Number],required:!1},disabled:{type:Boolean,default:!1},lock:{type:Boolean,default:!1},error:{type:String,required:!1},showError:{type:Boolean,default:!0},class:{type:String,required:!1},prefix:{type:String,required:!1}},emits:["update:modelValue","update:error","apply"],setup(e,{emit:s}){const u=e,v=s,g=()=>u.class;return x(()=>u.modelValue,()=>{v("update:error","")}),(l,r)=>e.prefix?(a(),n("div",w,[i("div",{class:o([g(),"flex w-full rounded-md focus-within:ring-2 focus-within:ring-inset ring-inset bg-white focus-within:ring-indigo-600 dark:bg-gray-800 dark:focus-within:ring-indigo-400",e.error&&e.showError?"ring-2 ring-red-500 dark:ring-red-400":"ring-1 ring-gray-300 dark:ring-gray-600"])},[i("span",p,b(e.prefix),1),i("input",{type:e.type,id:e.id,name:e.id,placeholder:e.placeholder,class:o(["block flex-1 border-0 bg-transparent py-1.5 pl-1 text-sm leading-6 focus:ring-0 placeholder:text-gray-400 dark:placeholder:text-gray-500",e.disabled?"text-gray-500 dark:text-gray-500":"text-gray-900 dark:text-gray-200"]),value:e.modelValue,disabled:e.disabled,onInput:r[0]||(r[0]=t=>l.$emit("update:modelValue",t.target.value)),onFocus:r[1]||(r[1]=t=>l.$emit("update:error","")),onKeyup:r[2]||(r[2]=y(t=>l.$emit("apply"),["enter"]))},null,42,$),e.disabled&&e.lock?(a(),n("div",V,[c(m(k),{class:"w-4 h-4 text-gray-500"})])):d("",!0)],2),e.showError?(a(),f(h,{key:0,error:e.error},null,8,["error"])):d("",!0)])):(a(),n("div",B,[i("div",S,[i("input",{type:e.type,id:e.id,name:e.id,placeholder:e.placeholder,class:o([g(),"focus-within:z-10 block w-full rounded-md border-0 py-1.5 text-sm leading-6 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:ring-indigo-400",e.error&&e.showError?"ring-2 ring-red-500 dark:ring-red-400":"ring-1 ring-gray-300 dark:ring-gray-600",e.disabled&&!e.lock?"text-gray-500 dark:text-gray-500":"text-gray-900 dark:text-gray-200"]),value:e.modelValue,disabled:e.disabled,onInput:r[3]||(r[3]=t=>l.$emit("update:modelValue",t.target.value)),onFocus:r[4]||(r[4]=t=>l.$emit("update:error","")),onKeyup:r[5]||(r[5]=y(t=>l.$emit("apply"),["enter"]))},null,42,q),e.disabled&&e.lock?(a(),n("div",E,[c(m(k),{class:"w-4 h-4 text-gray-500"})])):d("",!0)]),e.showError?(a(),f(h,{key:0,error:e.error},null,8,["error"])):d("",!0)]))}};export{I as _};