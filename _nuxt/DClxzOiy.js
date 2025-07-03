import{X as r,am as e,c as a,o as n,G as s,S as u}from"./Cqf5eq1v.js";import{s as i}from"./BQsRpE_H.js";var p=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},m=r.extend({name:"radiobuttongroup",style:p,classes:d}),c={name:"BaseRadioButtonGroup",extends:i,style:m,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:c,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return n(),a("div",u({class:t.cx("root")},t.ptmi("root")),[s(t.$slots,"default")],16)}l.render=f;export{l as default};
