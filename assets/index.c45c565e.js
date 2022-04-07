var b=Object.defineProperty,v=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var d=(o,e,u)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[e]=u,m=(o,e)=>{for(var u in e||(e={}))A.call(e,u)&&d(o,u,e[u]);if(c)for(var u of c(e))P.call(e,u)&&d(o,u,e[u]);return o},B=(o,e)=>v(o,C(e));var f=(o,e,u)=>new Promise((l,a)=>{var s=r=>{try{n(u.next(r))}catch(i){a(i)}},t=r=>{try{n(u.throw(r))}catch(i){a(i)}},n=r=>r.done?l(r.value):Promise.resolve(r.value).then(s,t);n((u=u.apply(o,e)).next())});import{J as E,d as g,k as h,Y as y,N as D,O as q,c as p,a7 as _,$ as F,al as x,V as k,W as I,ai as w,U as S}from"./index.0ac8147a.js";import{A as Y}from"./index.095e9e6f.js";import{_ as M}from"./schema-form.80d054b2.js";import"./index.f7ce767b.js";const R={},N=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(o,e)=>f(void 0,null,function*(){return e?e==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(o,e=""){return new Promise((u,l)=>{setTimeout(()=>{e.includes("admin")?l("\u8BE5\u5B57\u6BB5\u4E0D\u80FD\u5305\u542Badmin\u5173\u952E\u5B57"):u()},100)})}}]}];const V=o=>(k("data-v-ed289b7a"),o=o(),I(),o),j=V(()=>S("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/rule-form/index.vue"}," \u67E5\u770B\u6E90\u7801 ",-1)),G={name:"DemosFormRuleForm"},O=g(B(m({},G),{setup(o){R.url;const e=h(),u={schemas:N,labelWidth:120,actionColOptions:{span:24}};function l(){var a,s;(a=e.value)==null||a.formModel,(s=e.value)==null||s.validate().then(()=>w.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}return(a,s)=>{const t=y("a-card");return D(),q("div",null,[p(F(Y),{message:"\u9A8C\u8BC1\u8868\u5355",description:"\u52A8\u6001\u9A8C\u8BC1\u8868\u5355",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:_(()=>[j]),_:1}),p(t,null,{default:_(()=>[p(F(M),x({ref_key:"dynamicForm",ref:e},u,{onSubmit:l}),null,16)]),_:1})])}}}));var z=E(O,[["__scopeId","data-v-ed289b7a"]]);export{z as default};
