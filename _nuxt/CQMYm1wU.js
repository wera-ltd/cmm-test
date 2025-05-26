import{s as l}from"./BRZIKFme.js";import{z as i,B as c,c as a,o as r,s,a as d,S as t,x as o}from"./Dqyc9jRY.js";var n=i`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,p={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},u=c.extend({name:"card",style:n,classes:p}),m={name:"BaseCard",extends:l,style:u,provide:function(){return{$pcCard:this,$parentInstance:this}}},f={name:"Card",extends:m,inheritAttrs:!1};function b(e,y,$,v,h,g){return r(),a("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(r(),a("div",t({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):s("",!0),d("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(r(),a("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(r(),a("div",t({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):s("",!0),e.$slots.subtitle?(r(),a("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):s("",!0)],16)):s("",!0),d("div",t({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(r(),a("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):s("",!0)],16)],16)}f.render=b;export{f as default};
