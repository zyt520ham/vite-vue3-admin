var ue=Object.defineProperty,de=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var N=(n,e,t)=>e in n?ue(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,I=(n,e)=>{for(var t in e||(e={}))ce.call(e,t)&&N(n,t,e[t]);if(M)for(var t of M(e))pe.call(e,t)&&N(n,t,e[t]);return n},$=(n,e)=>de(n,ie(e));var f=(n,e,t)=>new Promise((l,o)=>{var c=y=>{try{p(t.next(y))}catch(O){o(O)}},h=y=>{try{p(t.throw(y))}catch(O){o(O)}},p=y=>y.done?l(y.value):Promise.resolve(y.value).then(c,h);p((t=t.apply(n,e)).next())});import{c as s,A as S,aP as me,aG as L,b3 as fe,aN as J,d as ee,k as C,b4 as he,N as D,O as ye,U as g,au as T,a8 as v,b5 as w,b6 as _,r as be,p as ve,Y as ge,Z as U,a7 as i,$ as r,ay as q,b7 as z,ah as we,a as _e,M as E,a9 as V,b8 as Oe,aR as Pe,aQ as K,b9 as H}from"./index.0ac8147a.js";import{A as Se}from"./index.095e9e6f.js";import{g as Ie,u as $e,c as Ee,t as Ce,d as De,a as xe}from"./index.6854ae44.js";import{u as ke}from"./dynamic-table.a2800450.js";import{u as Fe}from"./useFormModal.c2a9a248.js";import{f as Ae,a as Be}from"./utils.1ab06744.js";import"./VerticalRightOutlined.15aeeec8.js";import"./schema-form.80d054b2.js";import"./index.f7ce767b.js";var je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},Me=je;function R(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Ne(n,o,t[o])})}return n}function Ne(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var x=function(e,t){var l=R({},e,t.attrs);return s(S,R({},l,{icon:Me}),null)};x.displayName="DeleteOutlined";x.inheritAttrs=!1;var W=x,Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Te=Le;function X(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Ue(n,o,t[o])})}return n}function Ue(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var k=function(e,t){var l=X({},e,t.attrs);return s(S,X({},l,{icon:Te}),null)};k.displayName="EditOutlined";k.inheritAttrs=!1;var qe=k,ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Ve=ze;function G(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Ke(n,o,t[o])})}return n}function Ke(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var F=function(e,t){var l=G({},e,t.attrs);return s(S,G({},l,{icon:Ve}),null)};F.displayName="SwapOutlined";F.inheritAttrs=!1;var He=F,Re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},We=Re;function Q(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),l.forEach(function(o){Xe(n,o,t[o])})}return n}function Xe(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var A=function(e,t){var l=Q({},e,t.attrs);return s(S,Q({},l,{icon:We}),null)};A.displayName="SyncOutlined";A.inheritAttrs=!1;var Ge=A;const Qe=[{field:"name",component:"Input",label:"\u90E8\u95E8\u540D\u79F0",rules:[{required:!0,type:"string"}]},{field:"parentId",component:"TreeSelect",label:"\u4E0A\u7EA7\u90E8\u95E8",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"orderNum",component:"InputNumber",label:"\u6392\u5E8F\u53F7",defaultValue:255,componentProps:{style:{width:"100%"}}}],Ye=[{field:"departmentId",component:"TreeSelect",label:"\u6240\u5C5E\u90E8\u95E8",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"roles",component:"Select",label:"\u6240\u5C5E\u89D2\u8272",rules:[{required:!0,type:"array"}],componentProps:{mode:"multiple",request:()=>f(void 0,null,function*(){return(yield Ie()).map(e=>({label:e.name,value:e.id}))})}},{field:"username",component:"Input",label:"\u7528\u6237\u540D",rules:[{required:!0}]},{field:"name",component:"Input",label:"\u59D3\u540D",colProps:{span:12},rules:[{required:!0}]},{field:"nickName",component:"Input",label:"\u5462\u79F0",colProps:{span:12}},{field:"email",component:"Input",label:"\u90AE\u7BB1",colProps:{span:12}},{field:"phone",component:"Input",label:"\u624B\u673A",colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"\u5907\u6CE8"},{field:"status",component:"RadioGroup",label:"\u72B6\u6001",defaultValue:1,componentProps:{options:[{label:"\u542F\u7528",value:1},{label:"\u7981\u7528",value:0}]}}],Ze=[{field:"password",component:"Input",label:"\u65B0\u5BC6\u7801",rules:[{required:!0,type:"string"}]}],Je=[{field:"departmentId",component:"TreeSelect",label:"\u8F6C\u79FB\u81F3",rules:[{required:!0,type:"number"}]}];function Y(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!fe(n)}const et=[{title:"\u5934\u50CF",width:80,dataIndex:"headImg",hideInSearch:!0,bodyCell:({record:n})=>s(me,{src:n.headImg},null)},{title:"\u59D3\u540D",width:120,dataIndex:"name",align:"center"},{title:"\u7528\u6237\u540D",width:120,align:"center",dataIndex:"username"},{title:"\u6240\u5728\u90E8\u95E8",dataIndex:"departmentName",hideInSearch:!0,align:"center",width:180},{title:"\u6240\u5C5E\u89D2\u8272",dataIndex:"roleNames",align:"center",hideInSearch:!0,width:220,customRender:({text:n})=>{let e;return s(J,null,Y(e=n.map(t=>s(L,{color:"success",key:t},Y(t)?t:{default:()=>[t]})))?e:{default:()=>[e]})}},{title:"\u5462\u79F0",width:120,align:"center",dataIndex:"nickName"},{title:"\u90AE\u7BB1",width:120,align:"center",dataIndex:"email"},{title:"\u624B\u673A",width:120,align:"center",dataIndex:"phone"},{title:"\u5907\u6CE8",width:120,align:"center",dataIndex:"remark"},{title:"\u72B6\u6001",dataIndex:"status",width:100,formItemProps:{component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:1},{label:"\u7981\u7528",value:0}]}},bodyCell:({record:n})=>{const e=n.status===1;return s(L,{color:e?"success":"red"},{default:()=>[e?"\u542F\u7528":"\u7981\u7528"]})}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",width:120,formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"updatedAt",width:120,formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}}];const tt={class:"split-wrapper"},nt={class:"left-content"},at=v(" \u53F3\u8FB9\u5185\u5BB9\u533A "),lt=g("i",null,null,-1),st=g("i",null,null,-1),ot=[lt,st],rt={class:"right-content"},ut=v(" \u53F3\u8FB9\u5185\u5BB9\u533A "),dt=ee({setup(n){const e=C();let t,l;const o=he(function(p){e.value&&(e.value.style.width=`${l+p.clientX-t}px`)},20),c=()=>{document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",o),document.documentElement.removeEventListener("mouseup",c)},h=p=>{t=p.clientX,e.value&&(l=parseInt(window.getComputedStyle(e.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",o),document.documentElement.addEventListener("mouseup",c)};return(p,y)=>(D(),ye("div",tt,[g("div",{ref_key:"scalable",ref:e,class:"scalable"},[g("div",nt,[T(p.$slots,"left-content",{},()=>[at])]),g("div",{ref:"separator",class:"separator",onMousedown:h},ot,544)],512),g("div",rt,[T(p.$slots,"right-content",{},()=>[ut])])]))}});var it=dt;function ct(n){return w({url:_.page,method:"post",data:n})}function pt(n){return w({url:_.add,method:"post",data:n},{successMsg:"\u521B\u5EFA\u7528\u6237\u6210\u529F"})}function mt(n){return w({url:_.info,method:"get",params:n})}function ft(n){return w({url:_.update,method:"post",data:n},{successMsg:"\u4FEE\u6539\u7528\u6237\u6210\u529F"})}function ht(n){return w({url:_.password,method:"post",data:n},{successMsg:"\u64CD\u4F5C\u6210\u529F"})}function Z(n){return w({url:_.delete,method:"post",data:n})}const yt={class:"flex justify-between"},bt=g("div",null,"\u7EC4\u7EC7\u67B6\u6784",-1),vt=v("\u65B0\u589E\u90E8\u95E8 "),gt=v("\u5237\u65B0 "),wt=v(" \u7F16\u8F91 "),_t=v(" \u5220\u9664 "),Ot=v("\u53D6\u6D88\u9009\u62E9"),Pt=v(" \u65B0\u589E "),St=v(" \u8F6C\u79FB "),It=v(" \u5220\u9664 "),$t={name:"SystemUser"};var Nt=ee($(I({},$t),{setup(n){const[e,t]=ke(),[l]=Fe(),o=C(!1),c=be({expandedKeys:[],departmentIds:[],deptTree:[]}),h=C({selectedRowKeys:[],onChange:(a,u)=>{`${a}`,h.value.selectedRowKeys=a}}),p=ve(()=>h.value.selectedRowKeys.length),y=(...u)=>f(this,[...u],function*(a={}){var m;const[d]=yield l({modalProps:{title:`${a.id?"\u7F16\u8F91":"\u65B0\u589E"}\u90E8\u95E8`,width:700,onFinish:b=>f(this,null,function*(){b.id=a.id,yield(a.id?$e:Ee)(b),P()})},formProps:{labelWidth:100,schemas:Qe}});d==null||d.updateSchema([{field:"parentId",componentProps:{treeDefaultExpandedKeys:[-1].concat((a==null?void 0:a.keyPath)||[]),treeData:[{value:-1,title:"#",children:c.deptTree}]}}]),d==null||d.setFieldsValue($(I({},a),{parentId:(m=a.parentId)!=null?m:-1}))}),O=()=>f(this,null,function*(){const[a]=yield l({modalProps:{title:"\u8F6C\u79FB\u90E8\u95E8",width:700,onFinish:u=>f(this,null,function*(){yield Ce({departmentId:u.departmentId,userIds:h.value.selectedRowKeys.map(d=>d)})})},formProps:{labelWidth:100,schemas:Je}});a==null||a.updateSchema([{field:"departmentId",componentProps:{treeData:c.deptTree}}])}),B=(...u)=>f(this,[...u],function*(a={}){var m;const[d]=yield l({modalProps:{title:`${a.id?"\u7F16\u8F91":"\u65B0\u589E"}\u7528\u6237`,width:700,onFinish:b=>f(this,null,function*(){b.id=a.id,yield(a.id?ft:pt)(b),t==null||t.reload()})},formProps:{labelWidth:100,schemas:Ye}});if(d==null||d.updateSchema([{field:"departmentId",componentProps:{treeDefaultExpandedKeys:((m=Ae(a==null?void 0:a.departmentId,c.deptTree))==null?void 0:m.keyPath)||[],treeData:c.deptTree}}]),d==null||d.setFieldsValue(a),a!=null&&a.id){const{roles:b}=yield mt({userId:a.id});d==null||d.setFieldsValue({roles:b})}}),te=a=>f(this,null,function*(){yield l({modalProps:{title:`\u4FEE\u6539\u5BC6\u7801(${a.username})`,width:700,onFinish:u=>f(this,null,function*(){yield ht({userId:a.id,password:u.password})})},formProps:{labelWidth:100,schemas:Ze}})}),ne=a=>{K.confirm({title:"\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u90E8\u95E8\u5417?",icon:s(H,null,null),centered:!0,onOk:()=>f(this,null,function*(){yield De({departmentId:a}),P()})})},P=()=>f(this,null,function*(){o.value=!0;const a=yield xe().finally(()=>o.value=!1);c.deptTree=Be(a),c.expandedKeys=[...c.expandedKeys,...c.deptTree.map(u=>Number(u.key))]});P();const j=a=>f(this,null,function*(){Array.isArray(a)?K.confirm({title:"\u786E\u5B9A\u8981\u5220\u9664\u6240\u9009\u7684\u7528\u6237\u5417?",icon:s(H,null,null),centered:!0,onOk:()=>f(this,null,function*(){yield Z({userIds:a}),P()})}):yield Z({userIds:[a]}).finally(t==null?void 0:t.reload)}),ae=a=>{var u;c.departmentIds=a,(u=t==null?void 0:t.reload)==null||u.call(t)},le=d=>f(this,[d],function*({page:a,limit:u}){const m=yield ct({page:a,limit:u,departmentIds:c.departmentIds.length?c.departmentIds:void 0});return h.value.selectedRowKeys=[],m}),se=[...et,{title:"\u64CD\u4F5C",width:230,dataIndex:"$action",align:"center",fixed:"right",actions:({record:a})=>[{label:"\u7F16\u8F91",auth:{perm:"sys.user.update",effect:"disable"},onClick:()=>B(a)},{label:"\u6539\u5BC6",auth:"sys.user.password",onClick:()=>te(a)},{label:"\u5220\u9664",auth:"sys.user.delete",popConfirm:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:()=>j(a.id)}}]}];return(a,u)=>{const d=ge("a-button");return D(),U(r(it),null,{"left-content":i(()=>[g("div",yt,[bt,s(r(J),null,{default:i(()=>[a.$auth("sys.dept.add")?(D(),U(r(q),{key:0,placement:"top"},{title:i(()=>[vt]),default:i(()=>[s(r(z),{onClick:u[0]||(u[0]=m=>y({}))})]),_:1})):we("",!0),s(r(q),{placement:"top"},{title:i(()=>[gt]),default:i(()=>[s(r(Ge),{spin:o.value,onClick:P},null,8,["spin"])]),_:1})]),_:1})]),s(r(Oe),{expandedKeys:r(c).expandedKeys,"onUpdate:expandedKeys":u[1]||(u[1]=m=>r(c).expandedKeys=m),"auto-expand-parent":"","tree-data":r(c).deptTree,onSelect:ae},{title:i(({key:m,title:b,formData:oe})=>[s(r(_e),{trigger:["contextmenu"]},{overlay:i(()=>[s(r(E),null,{default:i(()=>[s(r(E).Item,{key:"1",disabled:!a.$auth("sys.dept.update"),onClick:re=>y(oe)},{default:i(()=>[wt,s(r(qe))]),_:2},1032,["disabled","onClick"]),s(r(E).Item,{key:"2",disabled:!a.$auth("sys.dept.delete"),onClick:re=>ne(m)},{default:i(()=>[_t,s(r(W))]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:i(()=>[g("span",null,V(b),1)]),_:2},1024)]),_:1},8,["expandedKeys","tree-data"])]),"right-content":i(()=>[s(r(e),{"header-title":"\u7528\u6237\u7BA1\u7406","show-index":"","title-tooltip":"\u8BF7\u4E0D\u8981\u968F\u610F\u5220\u9664\u7528\u6237\uFF0C\u907F\u514D\u5230\u5F71\u54CD\u5176\u4ED6\u7528\u6237\u7684\u4F7F\u7528\u3002","data-request":le,columns:se,scroll:{x:2e3},"row-selection":h.value},Pe({toolbar:i(()=>[s(d,{type:"primary",disabled:!a.$auth("sys.user.add"),onClick:u[3]||(u[3]=m=>B({}))},{default:i(()=>[s(r(z)),Pt]),_:1},8,["disabled"]),s(d,{type:"success",disabled:!r(p)||!a.$auth("sys.dept.transfer"),onClick:O},{default:i(()=>[s(r(He)),St]),_:1},8,["disabled"]),s(d,{type:"danger",disabled:!r(p)||!a.$auth("sys.user.delete"),onClick:u[4]||(u[4]=m=>j(h.value.selectedRowKeys))},{default:i(()=>[s(r(W)),It]),_:1},8,["disabled"])]),_:2},[r(p)?{name:"title",fn:i(()=>[s(r(Se),{class:"w-full",type:"info","show-icon":""},{message:i(()=>[v(" \u5DF2\u9009 "+V(r(p))+" \u9879 ",1),s(d,{type:"link",onClick:u[2]||(u[2]=m=>h.value.selectedRowKeys=[])},{default:i(()=>[Ot]),_:1})]),_:1})])}:void 0]),1032,["row-selection"])]),_:1})}}}));export{Nt as default};
