var F=(e,o,u)=>new Promise((a,c)=>{var m=t=>{try{l(u.next(t))}catch(i){c(i)}},p=t=>{try{l(u.throw(t))}catch(i){c(i)}},l=t=>t.done?a(t.value):Promise.resolve(t.value).then(m,p);l((u=u.apply(e,o)).next())});import{c as n,aG as A,b3 as g,ab as E,d as b,Y as C,N as h,O as y,a7 as s,$ as d,cy as x,a8 as f}from"./index.0ac8147a.js";import{A as k}from"./index.095e9e6f.js";import{I as B,j as _}from"./index.d1da6a54.js";import{u as w}from"./dynamic-table.a2800450.js";import{a as D}from"./hero.0b11df3a.js";import"./index.aed179ab.js";import"./schema-form.80d054b2.js";import"./index.f7ce767b.js";import"./VerticalRightOutlined.15aeeec8.js";function I(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!g(e)}const v=[{title:"\u5934\u50CF",align:"center",width:100,hideInSearch:!0,dataIndex:"faceimg",bodyCell:({record:e})=>n(B,{src:e.faceimg,preview:{src:e.heroimg},key:e.faceimg},null)},{title:"\u82F1\u96C4\u540D\u79F0",align:"center",dataIndex:"cname"},{title:"\u82F1\u96C4\u79F0\u53F7",align:"center",dataIndex:"title"},{title:"\u5B9A\u4F4D",align:"center",dataIndex:"occupation"},{title:"\u76AE\u80A4",align:"center",dataIndex:"skin_name",formItemProps:{component:"Select"},bodyCell:({record:e})=>{var o,u;return n(E,null,[(u=(o=e.skin_name)==null?void 0:o.split("|"))==null?void 0:u.map(a=>n(A,{color:"blue",key:a},I(a)?a:{default:()=>[a]}))])}},{title:"\u64CD\u4F5C",align:"center",width:120,dataIndex:"$action",actions:({record:e})=>[{label:"\u67E5\u770B\u8BE6\u60C5",onClick:()=>window.open(e.infourl)}]}],S=f(" \u300A\u738B\u8005\u8363\u8000\u300B-- \u6839\u636EJSON\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA "),j=f(" \u5BFC\u51FA\uFF1A\u9ED8\u8BA4\u5934\u90E8 "),T=f(" \u5BFC\u51FA\uFF1A\u81EA\u5B9A\u4E49\u5934\u90E8 "),J=b({setup(e){let o=[];const[u,a]=w();function c(){_({data:o,filename:"\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx"})}function m(){_({data:o,header:{heroid:"ID",cname:"\u82F1\u96C4\u540D\u79F0",title:"\u82F1\u96C4\u79F0\u53F7",occupation:"\u5B9A\u4F4D",skin_name:"\u76AE\u80A4"},filename:"\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx",json2sheetOpts:{header:["cname","heroid"]}})}const p=t=>{},l=t=>F(this,null,function*(){var r;const{data:i}=yield D(t);return o=i.list,(r=a==null?void 0:a.getQueryFormRef())==null||r.updateSchema([{field:"skin_name",componentProps:{options:[{label:"\u76AE\u80A41",value:"aa"},{label:"\u76AE\u80A42",value:"bb"}]}}]),i});return(t,i)=>{const r=C("a-button");return h(),y("div",null,[n(d(k),{message:"\u6E38\u620F\u4ECB\u7ECD",type:"info","show-icon":""},{description:s(()=>[S]),_:1}),n(d(x),{title:"\u82F1\u96C4\u5217\u8868mock\u6570\u636E",style:{"margin-top":"20px"}},{default:s(()=>[n(d(u),{ref:"dynamicTableRef",size:"small",bordered:"","data-request":l,columns:d(v),"row-key":"heroid",onToggleAdvanced:p},{toolbar:s(()=>[n(r,{type:"primary",onClick:c},{default:s(()=>[j]),_:1}),n(r,{type:"primary",onClick:m},{default:s(()=>[T]),_:1})]),_:1},8,["columns"])]),_:1})])}}});export{J as default};
