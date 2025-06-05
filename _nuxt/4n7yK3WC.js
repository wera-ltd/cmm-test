import{V as t,W as s,ak as r,c as a,o as n,B as c,C as p}from"./i39nrdhh.js";import{s as u}from"./CdH_hktX.js";var i=t`
    .p-checkbox-group {
        display: inline-flex;
    }
`,m={root:"p-checkbox-group p-component"},l=s.extend({name:"checkboxgroup",style:i,classes:m}),d={name:"BaseCheckboxGroup",extends:u,style:l,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},h={name:"CheckboxGroup",extends:d,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function x(e,o,k,f,g,b){return n(),a("div",p({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}h.render=x;export{h as default};
