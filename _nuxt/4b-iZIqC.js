import{W as t,al as r,c as a,o as s,G as n,R as p}from"./Cfk2_o-h.js";import{s as c}from"./Bd5ETX1_.js";var u=`
    .p-checkbox-group {
        display: inline-flex;
    }
`,i={root:"p-checkbox-group p-component"},l=t.extend({name:"checkboxgroup",style:u,classes:i}),m={name:"BaseCheckboxGroup",extends:c,style:l,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function h(e,o,x,f,k,g){return s(),a("div",p({class:e.cx("root")},e.ptmi("root")),[n(e.$slots,"default")],16)}d.render=h;export{d as default};
