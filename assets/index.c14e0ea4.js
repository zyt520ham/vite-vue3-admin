var z=Object.defineProperty,M=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var S=(t,u,e)=>u in t?z(t,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[u]=e,C=(t,u)=>{for(var e in u||(u={}))G.call(u,e)&&S(t,e,u[e]);if($)for(var e of $(u))U.call(u,e)&&S(t,e,u[e]);return t},O=(t,u)=>M(t,L(u));var f=(t,u,e)=>new Promise((r,i)=>{var E=d=>{try{h(e.next(d))}catch(y){i(y)}},w=d=>{try{h(e.throw(d))}catch(y){i(y)}},h=d=>d.done?r(d.value):Promise.resolve(d.value).then(E,w);h((e=e.apply(t,u)).next())});import{c as s,A as V,aG as W,b5 as m,cz as p,d as Y,Y as Z,N as v,O as H,a7 as n,$ as o,a8 as c,a9 as g,Z as _,ay as J,U as Q,ah as X,bs as k}from"./index.0ac8147a.js";import{D as F}from"./index.e29da9f9.js";import{u as K,P as I}from"./dynamic-table.a2800450.js";import{B as T,R as x}from"./index.eb4c389c.js";import{u as tt}from"./useFormModal.c2a9a248.js";import{P as et}from"./PoweroffOutlined.6f7c4295.js";import"./VerticalRightOutlined.15aeeec8.js";import"./schema-form.80d054b2.js";import"./index.f7ce767b.js";import"./isNumeric.0c40c1d9.js";T.install=function(t){return t.component(T.name,T),t.component(x.name,x),t};var ut={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},at=ut;function R(t){for(var u=1;u<arguments.length;u++){var e=arguments[u]!=null?Object(arguments[u]):{},r=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.forEach(function(i){nt(t,i,e[i])})}return t}function nt(t,u,e){return u in t?Object.defineProperty(t,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[u]=e,t}var P=function(u,e){var r=R({},u,e.attrs);return s(V,R({},r,{icon:at}),null)};P.displayName="CaretRightOutlined";P.inheritAttrs=!1;var st=P,lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},ot=lt;function N(t){for(var u=1;u<arguments.length;u++){var e=arguments[u]!=null?Object(arguments[u]):{},r=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.forEach(function(i){it(t,i,e[i])})}return t}function it(t,u,e){return u in t?Object.defineProperty(t,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[u]=e,t}var D=function(u,e){var r=N({},u,e.attrs);return s(V,N({},r,{icon:ot}),null)};D.displayName="ToolOutlined";D.inheritAttrs=!1;var rt=D;const dt=t=>{switch(t){case 0:return"#d9d9d9";case 1:return"#52c41a"}},ct=t=>{switch(t){case 0:return"\u505C\u6B62";case 1:return"\u8FD0\u884C"}},mt=[{title:"\u4EFB\u52A1\u540D\u79F0",dataIndex:"name",width:240},{title:"\u72B6\u6001",width:120,dataIndex:"status",align:"center",bodyCell:({record:t})=>s(T,{status:t.status===1?"processing":"default",color:dt(t.status),text:ct(t.status)},null)},{title:"\u7C7B\u578B",width:100,align:"center",dataIndex:"type",bodyCell:({record:t})=>s(W,{color:"processing"},{default:()=>[t.type===1?"Interval":"Cron"]})},{title:"\u8C03\u7528\u670D\u52A1",dataIndex:"service",hideInSearch:!0,align:"center",width:350},{title:"\u6267\u884C\u53C2\u6570",dataIndex:"data",align:"center",hideInSearch:!0,width:450},{title:"\u5907\u6CE8",width:250,align:"center",dataIndex:"remark"}],pt=[{field:"type",component:"RadioGroup",label:"\u540D\u79F0",defaultValue:0,rules:[{required:!0,type:"number"}],componentProps:{options:[{label:"Cron",value:0},{label:"\u65F6\u95F4\u95F4\u9694",value:1}]}},{field:"name",component:"Input",label:"\u4EFB\u52A1\u540D\u79F0",rules:[{required:!0,type:"string"}]},{field:"service",component:"Input",label:"\u670D\u52A1\u8DEF\u5F84",rules:[{required:!0,type:"string"}],componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8C03\u7528\u670D\u52A1\u7684\u8DEF\u5F84"}},{field:"data",component:"Input",label:"\u4EFB\u52A1\u53C2\u6570",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u53C2\u6570\uFF08\u53EF\u4E0D\u586B\uFF09"}},{field:"limit",component:"InputNumber",label:"\u6267\u884C\u6B21\u6570",defaultValue:-1,componentProps:{min:-1,style:{width:"100%"}}},{field:"cron",component:"Input",label:"Cron",rules:[{required:!0,type:"string"}],vIf:({formModel:t})=>t.type===0,componentProps:{placeholder:"\u8BF7\u8F93\u5165Cron\u8868\u8FBE\u5F0F"}},{field:"every",component:"InputNumber",label:"\u6267\u884C\u95F4\u9694",defaultValue:6e4,vIf:({formModel:t})=>t.type===1,rules:[{required:!0,type:"number"}],componentProps:{min:100,style:{width:"100%"}}},{field:"startTime",component:"DatePicker",label:"\u5F00\u59CB\u65F6\u95F4",vIf:({formModel:t})=>t.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"endTime",component:"DatePicker",label:"\u7ED3\u675F\u65F6\u95F4",vIf:({formModel:t})=>t.type===0,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"remark",component:"InputTextArea",label:"\u5907\u6CE8"},{field:"status",component:"RadioGroup",defaultValue:1,label:"\u72B6\u6001",componentProps:{options:[{label:"\u8FD0\u884C",value:1},{label:"\u505C\u6B62",value:0}]}}];function ft(t){return m({url:p.page,method:"get",params:t})}function Ft(t){return m({url:p.info,method:"get",params:t})}function bt(t){return m({url:p.add,method:"post",data:t},{successMsg:"\u6DFB\u52A0\u6210\u529F"})}function ht(t){return m({url:p.delete,method:"post",data:t})}function yt(t){return m({url:p.update,method:"post",data:t},{successMsg:"\u4FEE\u6539\u6210\u529F"})}function Bt(t){return m({url:p.once,method:"post",data:t})}function Ct(t){return m({url:p.start,method:"post",data:t})}function gt(t){return m({url:p.stop,method:"post",data:t})}const Et=c(" \u65B0\u589E "),vt=c("\u79D2 \u5206 \u5C0F\u65F6 \u65E5\u671F \u6708\u4EFD \u661F\u671F \u5E74(\u53EF\u9009)"),Tt=c("\u4EC5\u4E00\u6B21 "),wt=c("\u8FD0\u884C "),Ot=c("\u505C\u6B62 "),_t={name:"SystemScheduleTask"},jt=Y(O(C({},_t),{setup(t){const[u,e]=K({search:!1,size:"small"}),[r]=tt(),i=()=>e==null?void 0:e.reload(),E=a=>f(this,null,function*(){const[b]=yield r({modalProps:{title:`${a.id?"\u7F16\u8F91":"\u65B0\u589E"}\u4EFB\u52A1`,width:640,onFinish:B=>f(this,null,function*(){const l=O(C({},B),{id:a.id});yield(a.id?yt:bt)(l),i()})},formProps:{labelWidth:100,schemas:pt}});if(a.id){const B=yield Ft({id:a.id});b==null||b.setFieldsValue(C(C({},a),B))}}),w=a=>f(this,null,function*(){yield ht({id:a}),i()}),h=a=>f(this,null,function*(){yield Bt({id:a.id}),i()}),d=a=>f(this,null,function*(){yield Ct({id:a.id}),i()}),y=a=>f(this,null,function*(){yield gt({id:a.id}),i()}),j=a=>!a.startTime&&!a.endTime?"\u65E0\u65F6\u6BB5\u9650\u5236":!a.startTime&&a.endTime?`\u65E0\u5F00\u59CB\u65F6\u95F4\u9650\u5236 - ${a.endTime}`:a.startTime&&!a.endTime?`${a.startTime} - \u957F\u671F\u6709\u6548`:`${a.startTime} - ${a.endTime}`,q=[...mt,{title:"\u64CD\u4F5C",width:220,dataIndex:"$action",align:"center",fixed:"right",actions:({record:a})=>[{label:"\u7F16\u8F91",auth:{perm:"sys.task.update",effect:"disable"},onClick:()=>E(a)},{label:"\u5220\u9664",auth:"sys.task.delete",popConfirm:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:()=>w(a.id)}}]}];return(a,b)=>{const B=Z("a-button");return v(),H("div",null,[s(o(u),{"row-key":"id","header-title":"\u5B9A\u65F6\u4EFB\u52A1","data-request":o(ft),columns:q,scroll:{x:2e3},bordered:""},{toolbar:n(()=>[s(B,{type:"primary",disabled:!a.$auth("sys.task.add"),onClick:b[0]||(b[0]=l=>E({}))},{default:n(()=>[Et]),_:1},8,["disabled"])]),expandedRowRender:n(({record:l})=>[s(o(F),{column:1},{default:n(()=>[s(o(F).Item,{label:"\u4EFB\u52A1\u7F16\u53F7"},{default:n(()=>[c("# "+g(l.id),1)]),_:2},1024),s(o(F).Item,{label:"\u6267\u884C\u6B21\u6570"},{default:n(()=>[c(g(l.limit>0?`\u4EC5 ${l.limit} \u6B21`:"\u65E0\u6B21\u6570\u9650\u5236"),1)]),_:2},1024),l.type===1?(v(),_(o(F).Item,{key:0,label:"\u6267\u884C\u95F4\u9694"},{default:n(()=>[c(" \u6BCF"+g(l.every)+"\u6BEB\u79D2\u6267\u884C\u4E00\u6B21 ",1)]),_:2},1024)):(v(),_(o(F).Item,{key:1,label:"Cron\u8868\u8FBE\u5F0F"},{default:n(()=>[s(o(J),null,{title:n(()=>[vt]),default:n(()=>[c(" "+g(l.cron),1)]),_:2},1024)]),_:2},1024)),l.type===0?(v(),_(o(F).Item,{key:2,label:"\u6267\u884C\u65F6\u95F4\u6BB5"},{default:n(()=>[Q("span",null,g(j(l)),1)]),_:2},1024)):X("",!0),s(o(F).Item,{label:"\u6267\u884C\u64CD\u4F5C"},{default:n(()=>[s(o(I),{title:"\u786E\u8BA4\u624B\u52A8\u6267\u884C\u4E00\u6B21\u8BE5\u4EFB\u52A1\u5417?",disabled:!a.$auth("sys.task.once"),onConfirm:A=>h(l)},{default:n(()=>[s(o(k),{type:"link",size:"small",disabled:!a.$auth("sys.task.once")},{icon:n(()=>[s(o(rt))]),default:n(()=>[Tt]),_:1},8,["disabled"])]),_:2},1032,["disabled","onConfirm"]),s(o(I),{title:"\u786E\u8BA4\u8FD0\u884C\u8BE5\u4EFB\u52A1\u5417?",disabled:!a.$auth("sys.task.start")||l.status!==0,onConfirm:A=>d(l)},{default:n(()=>[s(o(k),{type:"link",size:"small",disabled:!a.$auth("sys.task.start")||l.status!==0},{icon:n(()=>[s(o(st))]),default:n(()=>[wt]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"]),s(o(I),{title:"\u786E\u8BA4\u505C\u6B62\u8BE5\u4EFB\u52A1\u5417?",disabled:!a.$auth("sys.task.stop")||l.status!==1,onConfirm:A=>y(l)},{default:n(()=>[s(o(k),{type:"link",size:"small",disabled:!a.$auth("sys.task.stop")||l.status!==1},{icon:n(()=>[s(o(et))]),default:n(()=>[Ot]),_:2},1032,["disabled"])]),_:2},1032,["disabled","onConfirm"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-request"])])}}}));export{jt as default};
