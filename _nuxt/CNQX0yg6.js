import{V as r,W as a,al as e,c as n,o as s,C as u,T as i}from"./fZTEp2sR.js";import{s as p}from"./BekPGWYx.js";var d=r`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,c={root:"p-radiobutton-group p-component"},l=a.extend({name:"radiobuttongroup",style:d,classes:c}),m={name:"BaseRadioButtonGroup",extends:p,style:l,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},f={name:"RadioButtonGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function g(t,o,h,$,v,B){return s(),n("div",i({class:t.cx("root")},t.ptmi("root")),[u(t.$slots,"default")],16)}f.render=g;export{f as default};
