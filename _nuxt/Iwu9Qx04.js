import{V as o,W as s,b2 as t,ac as n,c as l,o as d,G as i,b as p,T as a}from"./Qq2h49bs.js";var c=o`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},g=s.extend({name:"overlaybadge",style:c,classes:v}),y={name:"OverlayBadge",extends:t,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},m={name:"OverlayBadge",extends:y,inheritAttrs:!1,components:{Badge:t}};function u(e,b,B,$,f,h){var r=n("Badge");return d(),l("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),p(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}m.render=u;export{m as default};
