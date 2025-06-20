import{V as t,W as s,al as r,c as a,o as n,G as c,T as p}from"./BEbfFFLt.js";import{s as u}from"./DpQChaRY.js";var i=t`
    .p-checkbox-group {
        display: inline-flex;
    }
`,l={root:"p-checkbox-group p-component"},m=s.extend({name:"checkboxgroup",style:i,classes:l}),d={name:"BaseCheckboxGroup",extends:u,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},h={name:"CheckboxGroup",extends:d,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function x(e,o,f,k,g,b){return n(),a("div",p({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}h.render=x;export{h as default};
