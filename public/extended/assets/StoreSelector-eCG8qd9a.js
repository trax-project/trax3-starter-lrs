import{Q as o}from"./app-BqYB4w7h.js";function l(){const r=o();return{storesChoice:()=>r.props.stores.choice,currentStore:()=>localStorage.currentStore&&r.props.stores.choice.find(e=>e.id===localStorage.currentStore)?localStorage.currentStore:r.props.stores.default,selectStore:e=>{localStorage.currentStore=e,window.location.reload()}}}export{l as u};
