import{s as r}from"./fMv0ryDC.js";import{W as a,al as e,c as n,o as s,D as i,R as p}from"./wIsIojwp.js";var u=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},c=a.extend({name:"radiobuttongroup",style:u,classes:d}),l={name:"BaseRadioButtonGroup",extends:r,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},m={name:"RadioButtonGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return s(),n("div",p({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}m.render=f;export{m as default};
