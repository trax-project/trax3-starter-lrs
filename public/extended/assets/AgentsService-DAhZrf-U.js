import{_ as d}from"./SettingsLayout-aJsR71SZ.js";import{o as i,c as x,d as r,u as c,w as l,F as n,Z as o,a as t,t as a,e}from"./app-BqYB4w7h.js";import"./AuthenticatedLayout-DmkbqqwL.js";import"./TopBar-CSycyVTE.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";const _={class:"rounded-lg shadow-md mb-10 pb-2 bg-white dark:ring-0 dark:bg-gray-800"},y=t("div",{class:"p-5 border-b-2 border-gray-200 dark:border-gray-700"},[t("div",{class:"-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"},[t("div",{class:"ml-4 mt-2"},[t("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"}," Database "),t("p",{class:"mt-1 text-sm text-gray-500"}," All these settings can be changed in your environment variables. ")])])],-1),g={class:"table-auto min-w-full divide-y divide-gray-300 dark:divide-gray-500"},p={class:"divide-y divide-gray-200 dark:divide-gray-700"},m=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white w-3/4"},[e(" AGENTS_DB_DRIVER "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_DRIVER ")],-1),h={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},A=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_HOST "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_HOST ")],-1),S={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},D=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_PORT "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_PORT ")],-1),E={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},B=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_DATABASE "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_DATABASE "),t("div",{class:"mt-2 text-xs text-gray-500"}," Not applicable with Elasticsearch and OpenSearch ")],-1),w={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},u=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_SCHEMA "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_SCHEMA "),t("div",{class:"mt-2 text-xs text-gray-500"}," PostgreSQL only ")],-1),k={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},T=t("tr",null,[t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_USERNAME "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_USERNAME ")]),t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," ******** ")],-1),N=t("tr",null,[t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_PASSWORD "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_PASSWORD ")]),t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"}," ******** ")],-1),b=t("td",{class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},[e(" AGENTS_DB_ASYNC "),t("span",{class:"text-gray-500"},"or"),e(" XAPI_DB_ASYNC "),t("div",{class:"mt-2 text-xs text-gray-500"}," Elasticsearch and OpenSearch only: allows async recording ")],-1),v={class:"px-5 py-3 text-sm text-gray-900 dark:text-white"},j={__name:"AgentsService",props:{settings:{type:Object,required:!0}},setup(s){return(G,P)=>(i(),x(n,null,[r(c(o),{title:"Agents Service"}),r(d,{"side-menu-current":"Agents Service"},{default:l(()=>[t("div",_,[y,t("table",g,[t("tbody",p,[t("tr",null,[m,t("td",h,a(s.settings.AGENTS_DB_DRIVER),1)]),t("tr",null,[A,t("td",S,a(s.settings.AGENTS_DB_HOST),1)]),t("tr",null,[D,t("td",E,a(s.settings.AGENTS_DB_PORT),1)]),t("tr",null,[B,t("td",w,a(s.settings.AGENTS_DB_DATABASE),1)]),t("tr",null,[u,t("td",k,a(s.settings.AGENTS_DB_SCHEMA),1)]),T,N,t("tr",null,[b,t("td",v,a(s.settings.AGENTS_DB_ASYNC),1)])])])])]),_:1})],64))}};export{j as default};