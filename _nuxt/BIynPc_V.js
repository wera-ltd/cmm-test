import{W as c,ai as d,bt as g,bF as m,aN as p,bG as u,c as a,o as i,G as t,A as b,z as f,R as o,ae as h}from"./CSdpHFy_.js";var y=`
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
`,w={root:function(e){var s=e.props,r=e.instance;return["p-inlinemessage p-component p-inlinemessage-"+s.severity,{"p-inlinemessage-icon-only":!r.$slots.default}]},icon:function(e){var s=e.props;return["p-inlinemessage-icon",s.icon]},text:"p-inlinemessage-text"},v=c.extend({name:"inlinemessage",style:y,classes:w}),x={name:"BaseInlineMessage",extends:d,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:v,provide:function(){return{$pcInlineMessage:this,$parentInstance:this}}},k={name:"InlineMessage",extends:x,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.sticky||setTimeout(function(){e.visible=!1},this.life)},computed:{iconComponent:function(){return{info:u,success:p,warn:m,error:g}[this.severity]}}};function $(n,e,s,r,z,l){return i(),a("div",o({role:"alert","aria-live":"assertive","aria-atomic":"true",class:n.cx("root")},n.ptmi("root")),[t(n.$slots,"icon",{},function(){return[(i(),f(h(n.icon?"span":l.iconComponent),o({class:n.cx("icon")},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(i(),a("div",o({key:0,class:n.cx("text")},n.ptm("text")),[t(n.$slots,"default")],16)):b("",!0)],16)}k.render=$;export{k as default};
