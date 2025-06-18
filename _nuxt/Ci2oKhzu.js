import{V as o,W as d,ai as p,$ as u,c as n,o as r,A as l,T as a,E as b,d as m,t as g}from"./GSjj7r6D.js";var c=o`
    .p-progressbar {
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,v={root:function(s){var i=s.instance;return["p-progressbar p-component",{"p-progressbar-determinate":i.determinate,"p-progressbar-indeterminate":i.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},h=d.extend({name:"progressbar",style:c,classes:v}),f={name:"BaseProgressBar",extends:p,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:h,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},y={name:"ProgressBar",extends:f,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return u({determinate:this.determinate,indeterminate:this.indeterminate})}}},k=["aria-valuenow","data-p"],w=["data-p"],P=["data-p"],B=["data-p"];function S(e,s,i,V,z,t){return r(),n("div",a({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":t.dataP},e.ptmi("root")),[t.determinate?(r(),n("div",a({key:0,class:e.cx("value"),style:t.progressStyle,"data-p":t.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),n("div",a({key:0,class:e.cx("label"),"data-p":t.dataP},e.ptm("label")),[b(e.$slots,"default",{},function(){return[m(g(e.value+"%"),1)]})],16,P)):l("",!0)],16,w)):t.indeterminate?(r(),n("div",a({key:1,class:e.cx("value"),"data-p":t.dataP},e.ptm("value")),null,16,B)):l("",!0)],16,k)}y.render=S;export{y as default};
