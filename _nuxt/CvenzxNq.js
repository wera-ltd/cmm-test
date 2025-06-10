import{S as r,T as a,ah as e,c as n,o as s,x as u,I as i}from"./BLZYQgz0.js";import{s as p}from"./Cd7yhVC3.js";var d=r`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,c={root:"p-radiobutton-group p-component"},m=a.extend({name:"radiobuttongroup",style:d,classes:c}),l={name:"BaseRadioButtonGroup",extends:p,style:m,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},f={name:"RadioButtonGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function g(t,o,h,$,v,B){return s(),n("div",i({class:t.cx("root")},t.ptmi("root")),[u(t.$slots,"default")],16)}f.render=g;export{f as default};
