import{u,a as l,b as d,d as i,_}from"./common-BsyvhB2n.js";import"./vendor-BAiHylQU.js";const V=e=>(Vue.pushScopeId("data-v-6dcdf372"),e=e(),Vue.popScopeId(),e),p={class:"choose-location"},m=V(()=>Vue.createElementVNode("span",{class:"f16"},"成都",-1)),h={class:"content"},f={class:"schools"},v=Vue.defineComponent({name:"ChooseCity",__name:"ChooseCity",setup(e){const o=u(),s=Vue.ref(["河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","台湾","内蒙古","广西","西藏","宁夏","新疆","北京","天津","上海","重庆","香港","澳门"]);async function n(){l(),o.userinfo={...o.userinfo,location:"中国-四川-成都"},await d(500),i(),history.go(-3)}return(C,t)=>{const c=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",p,[Vue.createVNode(c,null,{center:Vue.withCtx(()=>[m]),_:1}),Vue.createElementVNode("div",h,[Vue.createElementVNode("div",f,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.value,(a,r)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"row",onClick:t[0]||(t[0]=B=>n()),key:r},[Vue.createElementVNode("span",null,Vue.toDisplayString(a),1)]))),128))])])])}}}),E=_(v,[["__scopeId","data-v-6dcdf372"]]);export{E as default};
