import{f as c,j as s}from"./main-vendor-N2Dp62kv.js";import{Z as l,$ as i}from"./overlayscrollbars-DEpxyWX7.js";import"./reporter-vendor-BrFA8t6T.js";/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/function p(t){const{children:r}=t,e=document.getElementById(l);return e?c.createPortal(r,e):null}const u="_reply_pefqr_11",x="_replies_pefqr_28",o={reply:u,replies:x},m=({replies:t,onClick:r})=>s.jsx("div",{className:o.replies,children:t.map((e,n)=>s.jsx("button",{className:o.reply,"data-qa":"quick_action",onClick:()=>r(e),children:e.text},n))});function _(t){const{replies:r,isLastMessage:e,onButtonClick:n,...a}=t;return s.jsxs(s.Fragment,{children:[s.jsx(i,{...a}),e&&s.jsx(p,{children:s.jsx(m,{replies:r,onClick:n})})]})}export{_ as default};
