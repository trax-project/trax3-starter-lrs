import{_ as h}from"./TopBar-CSycyVTE.js";import{o as r,c as o,d,a as t,r as u,Q as y,u as s,w as n,F as p,Z as g,t as a,j as l,i as k,b as f,e as i}from"./app-BqYB4w7h.js";import{u as w}from"./XapiProps-BVq1ckif.js";import{N as b}from"./NeutralBadge-Cx27iNjU.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";import"./moment-Cl4UOzQZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"min-h-full"},N={class:"mx-auto max-w-3xl flex px-4 gap-x-4 lg:px-8 lg:gap-x-8"},B={class:"flex-auto px-0 py-8"},$={__name:"MyLayout",setup(x){return(e,c)=>(r(),o("div",v,[d(h,{current:""}),t("div",N,[t("main",B,[u(e.$slots,"default")])])]))}},A={class:"rounded-lg shadow-md mb-10 pb-2 bg-white dark:ring-0 dark:bg-gray-800"},S=t("div",{class:"p-5 border-b-2 border-gray-200 dark:border-gray-700"},[t("div",{class:"-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"},[t("div",{class:"ml-4 mt-2"},[t("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"}," My Account "),t("p",{class:"mt-1 text-sm text-gray-500"},[i(" Here you can check your account data. "),t("br"),i("If you need to change something, please, contact the administrator. ")])])])],-1),V={class:"table-auto min-w-full divide-y divide-gray-300 dark:divide-gray-500"},F={class:"divide-y divide-gray-200 dark:divide-gray-700"},L=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Firstname ",-1),j={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},C=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Lastname ",-1),E={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},I=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Email ",-1),J={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},M=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Role ",-1),z={class:"px-5 py-3 text-sm text-gray-900 dark:text-white capitalize"},D=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Agent ",-1),H={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},O={key:0},P={key:0},Q=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," Stores ",-1),R={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},ot={__name:"Account",setup(x){const e=y(),{agentIdByJson:c}=w();return(T,X)=>(r(),o(p,null,[d(s(g),{title:"App Settings"}),d($,{"side-menu-current":"App"},{default:n(()=>[t("div",A,[S,t("table",V,[t("tbody",F,[t("tr",null,[L,t("td",j,a(s(e).props.auth.firstname),1)]),t("tr",null,[C,t("td",E,a(s(e).props.auth.lastname),1)]),t("tr",null,[I,t("td",J,a(s(e).props.auth.email),1)]),t("tr",null,[M,t("td",z,a(s(e).props.auth.role),1)]),t("tr",null,[D,t("td",H,[s(e).props.auth.agent?(r(),o("span",O,a(s(c)(JSON.parse(s(e).props.auth.agent))),1)):l("",!0)])]),["actor","analyst"].includes(s(e).props.auth.role)?(r(),o("tr",P,[Q,t("td",R,[(r(!0),o(p,null,k(s(e).props.auth.stores,(m,_)=>(r(),f(b,{class:"mr-1",key:_},{default:n(()=>[i(a(m),1)]),_:2},1024))),128))])])):l("",!0)])])])]),_:1})],64))}};export{ot as default};