import{S as c,T as d,ae as g,aN as m,bB as p,aP as u,bC as b,c as a,o as i,x as t,E as f,y as h,I as o,aa as y}from"./3D932mJn.js";var w=c`
    .p-inlinemessage {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: dt('inlinemessage.padding');
        border-radius: dt('inlinemessage.border.radius');
        gap: dt('inlinemessage.gap');
    }

    .p-inlinemessage-text {
        font-weight: dt('inlinemessage.text.font.weight');
    }

    .p-inlinemessage-icon {
        flex-shrink: 0;
        font-size: dt('inlinemessage.icon.size');
        width: dt('inlinemessage.icon.size');
        height: dt('inlinemessage.icon.size');
    }

    .p-inlinemessage-icon-only .p-inlinemessage-text {
        visibility: hidden;
        width: 0;
    }

    .p-inlinemessage-info {
        background: dt('inlinemessage.info.background');
        border: 1px solid dt('inlinemessage.info.border.color');
        color: dt('inlinemessage.info.color');
        box-shadow: dt('inlinemessage.info.shadow');
    }

    .p-inlinemessage-info .p-inlinemessage-icon {
        color: dt('inlinemessage.info.color');
    }

    .p-inlinemessage-success {
        background: dt('inlinemessage.success.background');
        border: 1px solid dt('inlinemessage.success.border.color');
        color: dt('inlinemessage.success.color');
        box-shadow: dt('inlinemessage.success.shadow');
    }

    .p-inlinemessage-success .p-inlinemessage-icon {
        color: dt('inlinemessage.success.color');
    }

    .p-inlinemessage-warn {
        background: dt('inlinemessage.warn.background');
        border: 1px solid dt('inlinemessage.warn.border.color');
        color: dt('inlinemessage.warn.color');
        box-shadow: dt('inlinemessage.warn.shadow');
    }

    .p-inlinemessage-warn .p-inlinemessage-icon {
        color: dt('inlinemessage.warn.color');
    }

    .p-inlinemessage-error {
        background: dt('inlinemessage.error.background');
        border: 1px solid dt('inlinemessage.error.border.color');
        color: dt('inlinemessage.error.color');
        box-shadow: dt('inlinemessage.error.shadow');
    }

    .p-inlinemessage-error .p-inlinemessage-icon {
        color: dt('inlinemessage.error.color');
    }

    .p-inlinemessage-secondary {
        background: dt('inlinemessage.secondary.background');
        border: 1px solid dt('inlinemessage.secondary.border.color');
        color: dt('inlinemessage.secondary.color');
        box-shadow: dt('inlinemessage.secondary.shadow');
    }

    .p-inlinemessage-secondary .p-inlinemessage-icon {
        color: dt('inlinemessage.secondary.color');
    }

    .p-inlinemessage-contrast {
        background: dt('inlinemessage.contrast.background');
        border: 1px solid dt('inlinemessage.contrast.border.color');
        color: dt('inlinemessage.contrast.color');
        box-shadow: dt('inlinemessage.contrast.shadow');
    }

    .p-inlinemessage-contrast .p-inlinemessage-icon {
        color: dt('inlinemessage.contrast.color');
    }
`,v={root:function(s){var n=s.props,r=s.instance;return["p-inlinemessage p-component p-inlinemessage-"+n.severity,{"p-inlinemessage-icon-only":!r.$slots.default}]},icon:function(s){var n=s.props;return["p-inlinemessage-icon",n.icon]},text:"p-inlinemessage-text"},x=d.extend({name:"inlinemessage",style:w,classes:v}),k={name:"BaseInlineMessage",extends:g,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:x,provide:function(){return{$pcInlineMessage:this,$parentInstance:this}}},$={name:"InlineMessage",extends:k,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:b,success:u,warn:p,error:m}[this.severity]}}};function B(e,s,n,r,C,l){return i(),a("div",o({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[t(e.$slots,"icon",{},function(){return[(i(),h(y(e.icon?"span":l.iconComponent),o({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(i(),a("div",o({key:0,class:e.cx("text")},e.ptm("text")),[t(e.$slots,"default")],16)):f("",!0)],16)}$.render=B;export{$ as default};
