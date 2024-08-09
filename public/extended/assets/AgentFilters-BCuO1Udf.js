import{F as $,_ as A}from"./LinkButton-wwdNtJLC.js";import{_ as w,a as b}from"./AgentField-Cckzi0Yd.js";import{_ as V}from"./InputLabel-B012P3ON.js";import{_ as v}from"./InputError-_zuJ5dV-.js";import{m as x,o as c,c as y,d as r,a as f,n as F,b as k,w as p,u,e as g}from"./app-BqYB4w7h.js";import{_ as U}from"./Select-I1X3nauV.js";import{_ as q}from"./PrimaryButton-JrsBxlP3.js";import{u as C}from"./FilterItems-DtKLW4qf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronUpDownIcon-BxOM5Ujt.js";import"./form-BD1T68Go.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./use-text-value-5zAQL0RU.js";import"./TextInputWithCompletion-u-xIqChF.js";import"./use-tree-walker-CEHhLUFs.js";import"./disposables-CuHKeC00.js";import"./StoreSelector-eCG8qd9a.js";import"./NeutralBadge-Cx27iNjU.js";const B={class:"relative md:col-span-2 flex flex-row"},O={class:"w-full"},j={__name:"AgentFilterInAgents",props:{modelValue:{type:Object,required:!1},location:{type:String,default:"all"},error:{type:String,required:!1}},emits:["update:modelValue","update:location","update:error","apply"],setup(e,{emit:s}){const m=e,n=s,d=[{id:"all",name:"All"},{id:"agent",name:"As an agent"},{id:"group",name:"As a group"},{id:"member",name:"As a member"}];return x(()=>{n("update:location",m.location)}),(i,t)=>(c(),y("div",B,[r(V,{for:"agent",value:"Agent ID"}),f("div",O,[f("div",{class:F(["flex rounded-md w-full",e.error?"ring-2 ring-red-500 dark:ring-red-400":""])},[r(w,{rounded:!1,modelValue:e.modelValue,error:e.error,showError:!1,"onUpdate:modelValue":t[0]||(t[0]=o=>i.$emit("update:modelValue",o)),"onUpdate:error":t[1]||(t[1]=o=>i.$emit("update:error",o)),onApply:t[2]||(t[2]=o=>i.$emit("apply"))},null,8,["modelValue","error"]),r(b,{id:"agent-where",right:!0,modelValue:e.location,"onUpdate:modelValue":t[3]||(t[3]=o=>i.$emit("update:location",o)),options:d,class:"min-w-[130px]"},null,8,["modelValue"])],2),r(v,{error:e.error},null,8,["error"])])]))}},N={class:"relative md:col-span-2 flex flex-row"},S={__name:"AgentTypeFilter",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(e){const s=[{id:"all",name:"All"},{id:"agents",name:"Agents"},{id:"groups",name:"Groups"},{id:"groups_with_members",name:"Groups with members"}];return(m,n)=>(c(),y("div",N,[r(V,{value:"Type"}),r(U,{id:"agent-type",options:s,modelValue:e.modelValue,"onUpdate:modelValue":n[0]||(n[0]=d=>m.$emit("update:modelValue",d))},null,8,["modelValue"])]))}},I={class:"relative md:col-span-2 text-right space-x-5 mb-3"},te={__name:"AgentFilters",props:{filters:{type:Object,required:!0},options:{type:Object,required:!0},counter:{type:Number,required:!0},errors:{type:Object,required:!0}},emits:["apply"],setup(e,{emit:s}){const m=s,n=e,{resetingFilters:d,resetFilters:i,applyingFilters:t,applyFilters:o}=C(n,{localStorage:"agent-filters",emit:m});return(T,l)=>(c(),k($,null,{default:p(()=>[r(j,{modelValue:e.filters.agent,"onUpdate:modelValue":l[0]||(l[0]=a=>e.filters.agent=a),location:e.options.location,"onUpdate:location":l[1]||(l[1]=a=>e.options.location=a),error:e.errors.agent,"onUpdate:error":l[2]||(l[2]=a=>e.errors.agent=a),onApply:u(o)},null,8,["modelValue","location","error","onApply"]),r(S,{modelValue:e.filters.type,"onUpdate:modelValue":l[3]||(l[3]=a=>e.filters.type=a)},null,8,["modelValue"]),f("div",I,[r(A,{processing:u(d),onClick:u(i)},{default:p(()=>[g("Reset")]),_:1},8,["processing","onClick"]),r(q,{processing:u(t),onClick:u(o)},{default:p(()=>[g("Apply")]),_:1},8,["processing","onClick"])])]),_:1}))}};export{te as default};
