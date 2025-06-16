import{S as t,T as s,ai as r,c as a,o as n,B as c,Q as p}from"./DZpt-K9K.js";import{s as i}from"./Bok46OH9.js";var u=t`
    .p-checkbox-group {
        display: inline-flex;
    }
`,m={root:"p-checkbox-group p-component"},l=s.extend({name:"checkboxgroup",style:u,classes:m}),d={name:"BaseCheckboxGroup",extends:i,style:l,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},h={name:"CheckboxGroup",extends:d,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function x(e,o,f,k,g,b){return n(),a("div",p({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}h.render=x;export{h as default};
