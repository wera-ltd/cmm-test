import{X as d,Y as f,s as h,aj as m,aa as o,b6 as v,ae as b,l as i,o as r,w as a,m as L,G as s,E as y,D as S,ag as w,ah as g}from"./CWc7XYsS.js";import{s as k}from"./C7xefTHA.js";var E=d`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
`,$={root:function(t){var l=t.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},C=f.extend({name:"scrolltop",style:E,classes:$}),T={name:"BaseScrollTop",extends:m,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:C,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},A={name:"ScrollTop",extends:T,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(o.clear(this.container),this.overlay=null)},methods:{onClick:function(){var t=this.target==="window"?window:this.$el.parentElement;t.scroll({top:0,behavior:this.behavior})},checkVisibility:function(t){t>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(t.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(v())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(t){o.set("overlay",t,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(t){o.clear(t)},containerRef:function(t){this.container=t?t.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:k,Button:h}};function P(e,t,l,D,c,n){var p=b("Button");return r(),i(g,s({name:"p-scrolltop",appear:"",onEnter:n.onEnter,onAfterLeave:n.onAfterLeave},e.ptm("transition")),{default:a(function(){return[c.visible?(r(),i(p,s({key:0,ref:n.containerRef,class:e.cx("root"),onClick:n.onClick,"aria-label":n.scrollTopAriaLabel,unstyled:e.unstyled},e.buttonProps,{pt:e.ptm("root")}),{icon:a(function(u){return[y(e.$slots,"icon",{class:S(e.cx("icon"))},function(){return[(r(),i(w(e.icon?"span":"ChevronUpIcon"),s({class:[e.cx("icon"),e.icon,u.class]},e.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):L("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}A.render=P;export{A as default};
