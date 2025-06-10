import{S as t,T as s,ah as r,c as a,o as n,x as c,I as p}from"./Bp1yg87V.js";import{s as u}from"./Cd8nc_hp.js";var i=t`
    .p-checkbox-group {
        display: inline-flex;
    }
`,m={root:"p-checkbox-group p-component"},h=s.extend({name:"checkboxgroup",style:i,classes:m}),l={name:"BaseCheckboxGroup",extends:u,style:h,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function x(e,o,f,k,g,b){return n(),a("div",p({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}d.render=x;export{d as default};
