import{_}from"./TasksLayout-BcOeq5lv.js";import{g as l,o as v,c as V,d as e,u as b,w as n,F as g,Z as x,e as j,a as m}from"./app-BqYB4w7h.js";import{_ as P}from"./Checkbox-CesKyGxn.js";import{_ as $}from"./InputLabel-B012P3ON.js";import{_ as w}from"./Select-I1X3nauV.js";import{_ as I}from"./JobsManagement-BhfjSFNe.js";import{_ as L}from"./JobLogs-CCjrTMq8.js";import"./AuthenticatedLayout-DmkbqqwL.js";import"./TopBar-CSycyVTE.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";import"./NeutralBadge-Cx27iNjU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronUpDownIcon-BxOM5Ujt.js";import"./FormModal--OgS4LYv.js";import"./PrimaryButton-JrsBxlP3.js";import"./transition-CSxLRhS2.js";import"./disposables-CuHKeC00.js";import"./ConfirmModal-DdIInXQ7.js";import"./moment-Cl4UOzQZ.js";import"./TextInput-Bd33mpYb.js";import"./InputError-_zuJ5dV-.js";import"./PencilSquareIcon-CqSWVHZD.js";import"./DataPanel-eTawuoZh.js";import"./CrudItems-BFkrHaNx.js";import"./LoadItems-f7CjgfCr.js";import"./FilterItems-DtKLW4qf.js";const k={class:"px-6"},y={class:"mt-5 px-6"},p="/trax/api/gateway/front/jobs/validation",st={__name:"Validation",setup(A){const d={clear:!1,store:null},s=l([{id:null,name:"All stores"}]),u=r=>new Promise((t,a)=>{axios.get("/trax/api/gateway/front/stores").then(c=>{s.value=c.data.data.filter(i=>i.status==="ready").map(i=>({id:i.slug,name:i.name})),s.value.unshift({id:null,name:"All stores"}),t()})}),f=(r,t)=>t=="clear"?r.settings.clear:r[t]===void 0?null:r[t],o=l(null);return(r,t)=>(v(),V(g,null,[e(b(x),{title:"Validation"}),e(_,{"side-menu-current":"Validation"},{default:n(()=>[e(I,{endpoint:p,title:"Validation",jobProps:d,beforeItemLoading:u,afterPropLoading:f,onInit:t[2]||(t[2]=a=>o.value=a)},{description:n(()=>[j(" You can create jobs to validate xAPI statements and delete invalid statements. ")]),form:n(()=>[m("div",k,[e($,{value:"Store"}),e(w,{id:"store",options:s.value,modelValue:o.value.form.store,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.form.store=a),class:"mt-1"},null,8,["options","modelValue"])]),m("div",y,[e(P,{id:"clear",label:"Remove invalid statements",modelValue:o.value.form.clear,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value.form.clear=a)},null,8,["modelValue"])])]),feedback:n(()=>[e(L,{job:o.value.job,endpoint:p},null,8,["job"])]),_:1})]),_:1})],64))}};export{st as default};