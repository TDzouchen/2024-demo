import{j as t,r as m}from"./main-vendor-N2Dp62kv.js";import{Q as k,S as E,T as R}from"./overlayscrollbars-DEpxyWX7.js";import"./reporter-vendor-BrFA8t6T.js";/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/var l=(n=>(n.Left="left",n.Right="right",n))(l||{});const C="_description_19ouy_11",N="_title_19ouy_11",A="_container_19ouy_19",b="_arrow_19ouy_31",B="_left_19ouy_50",S="_right_19ouy_53",F="_hidden_19ouy_56",T="_carousel_19ouy_60",U="_image_19ouy_74",M="_content_19ouy_81",Z="_text_19ouy_86",s={description:C,title:N,container:A,arrow:b,left:B,right:S,hidden:F,carousel:T,image:U,content:M,text:Z},I=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[t.jsx("path",{d:"M7.15837 13.825L8.33337 15L13.3334 10L8.33337 5L7.15837 6.175L10.975 10L7.15837 13.825Z",fill:"#1F1F1F"}),t.jsx("mask",{id:"mask0_3639_28005",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"7",y:"5",width:"7",height:"10",children:t.jsx("path",{d:"M7.15837 13.825L8.33337 15L13.3334 10L8.33337 5L7.15837 6.175L10.975 10L7.15837 13.825Z",fill:"white"})}),t.jsx("g",{mask:"url(#mask0_3639_28005)"})]}),W=()=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[t.jsx("path",{d:"M12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.825L9.02502 10L12.8417 6.175Z",fill:"#1F1F1F"}),t.jsx("mask",{id:"mask0_3639_27965",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"6",y:"5",width:"7",height:"10",children:t.jsx("path",{d:"M12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.825L9.02502 10L12.8417 6.175Z",fill:"white"})}),t.jsx("g",{mask:"url(#mask0_3639_27965)"})]}),v=({onClick:n,direction:e,hidden:o})=>t.jsx("button",{className:k([s.arrow,s[e],{[s.hidden]:o}]),onClick:n,"aria-hidden":o,"aria-label":"scroll ".concat(e),children:e===l.Left?t.jsx(W,{}):t.jsx(I,{})}),O=n=>{const{imageUrl:e,title:o,description:u,buttons:f,onButtonClick:c,onError:i}=n,[x,h]=m.useState(!1),L=async d=>{i&&i(new Error("failed to load image. Url: ".concat(d.currentTarget.currentSrc))),h(!0)};return t.jsxs("div",{className:s.carousel,children:[e&&(x?t.jsx("div",{className:s.image}):t.jsx("img",{className:s.image,src:e,alt:"carousel img","aria-hidden":!0,onError:L})),t.jsxs("div",{className:s.content,children:[t.jsxs("div",{className:s.text,children:[t.jsx("p",{className:s.title,title:o,children:o}),u&&t.jsx("p",{className:s.description,title:u,children:u})]}),f.length>0&&t.jsx(E,{buttons:f,onClick:c})]})]})},$=24,q=n=>{const{enableRTL:e,items:o,onButtonClick:u,onError:f}=n,c=o.length>1,i=m.useRef(null),[x,h]=m.useState(!1),[L,d]=m.useState(c);m.useEffect(()=>{const r=i.current;h(e?c:!1),d(e?!1:c);const a=g=>{const j=g.currentTarget;if(!j)return;const{offsetWidth:p,scrollWidth:y,scrollLeft:_}=j;e?(h(_>p-y),d(_!==0)):(h(_!==0),d(_<y-p))};return r&&r.addEventListener&&r.addEventListener("scroll",a,!1),()=>{r&&r.removeEventListener&&r.removeEventListener("scroll",a,!1)}},[e,c]);const w=R(r=>{if(i.current){const a=i.current.offsetWidth+$,g=r===l.Left?-a:a;i.current.scrollBy({left:g,behavior:"smooth"})}},200);return t.jsxs("div",{ref:i,className:k({[s.container]:!0,[s.rtl]:e}),children:[o.map((r,a)=>t.jsx(O,{...r,onButtonClick:u,onError:f},a)),t.jsx(v,{hidden:!x,direction:l.Left,onClick:()=>w(l.Left)}),t.jsx(v,{hidden:!L,direction:l.Right,onClick:()=>w(l.Right)})]})};export{q as default};
