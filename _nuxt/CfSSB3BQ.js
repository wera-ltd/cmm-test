import{s as r}from"./CuiPfRR7.js";import{V as a,W as e,c as n,o as s,D as i,X as p}from"./3yYxqf6h.js";var u=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},c=a.extend({name:"radiobuttongroup",style:u,classes:d}),m={name:"BaseRadioButtonGroup",extends:r,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return s(),n("div",p({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}l.render=f;export{l as default};
