import{W as R,be as S,$ as B,s as H,ai as K,bC as a,as as l,ab as P,aa as F,bk as j,bt as I,b8 as D,ac as g,ae as C,af as T,z as y,o as c,w as p,b as L,ah as N,Y as r,y as U,A as w,c as u,D as f,F as V,a as d,ag as z,M as Y,t as W,ay as A}from"./Cfjh3e2u.js";import{C as q}from"./v-TB6PGy.js";import{O as M}from"./D-zvpLo-.js";var G=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,J={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},Q=R.extend({name:"confirmpopup",style:G,classes:J}),X={name:"BaseConfirmPopup",extends:K,props:{group:String},style:Q,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},Z={name:"ConfirmPopup",extends:X,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(o){o&&o.group===e.group&&(e.confirmation=o,e.target=o.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},a.on("confirm",this.confirmListener),a.on("close",this.closeListener)},beforeUnmount:function(){a.off("confirm",this.confirmListener),a.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(g.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.accept(),l(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.reject(),l(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),g.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,l(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){g.clear(e)},alignOverlay:function(){F(this.container,this.target,!1);var e=j(this.container),o=j(this.target),m=0;e.left<o.left&&(m=o.left-e.left),this.container.style.setProperty(I("confirmpopup.arrow.left").name,"".concat(m,"px")),e.top<o.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&D(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(o){e.visible&&e.container&&!e.container.contains(o.target)&&!e.isTargetClicked(o)?(e.confirmation.onHide&&e.confirmation.onHide(),e.visible=!1):e.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new q(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!P()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){M.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code==="Escape"&&(a.emit("close",this.closeListener),l(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e,o=this.confirmation;return o.acceptLabel||((e=o.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,o=this.confirmation;return o.rejectLabel||((e=o.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:H,Portal:B},directives:{focustrap:S}},$=["aria-modal"];function x(n,e,o,m,i,t){var k=C("Button"),E=C("Portal"),O=T("focustrap");return c(),y(E,null,{default:p(function(){return[L(N,r({name:"p-confirmpopup",onEnter:t.onEnter,onAfterEnter:t.onAfterEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},n.ptm("transition")),{default:p(function(){var h,b,v;return[i.visible?U((c(),u("div",r({key:0,ref:t.containerRef,role:"alertdialog",class:n.cx("root"),"aria-modal":i.visible,onClick:e[2]||(e[2]=function(){return t.onOverlayClick&&t.onOverlayClick.apply(t,arguments)}),onKeydown:e[3]||(e[3]=function(){return t.onOverlayKeydown&&t.onOverlayKeydown.apply(t,arguments)})},n.ptmi("root")),[n.$slots.container?f(n.$slots,"container",{key:0,message:i.confirmation,acceptCallback:t.accept,rejectCallback:t.reject}):(c(),u(V,{key:1},[n.$slots.message?(c(),y(z(n.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(c(),u("div",r({key:0,class:n.cx("content")},n.ptm("content")),[f(n.$slots,"icon",{},function(){return[n.$slots.icon?(c(),y(z(n.$slots.icon),{key:0,class:Y(n.cx("icon"))},null,8,["class"])):i.confirmation.icon?(c(),u("span",r({key:1,class:[i.confirmation.icon,n.cx("icon")]},n.ptm("icon")),null,16)):w("",!0)]}),d("span",r({class:n.cx("message")},n.ptm("message")),W(i.confirmation.message),17)],16)),d("div",r({class:n.cx("footer")},n.ptm("footer")),[L(k,r({class:[n.cx("pcRejectButton"),i.confirmation.rejectClass],autofocus:i.autoFocusReject,unstyled:n.unstyled,size:((h=i.confirmation.rejectProps)===null||h===void 0?void 0:h.size)||"small",text:((b=i.confirmation.rejectProps)===null||b===void 0?void 0:b.text)||!1,onClick:e[0]||(e[0]=function(s){return t.reject()}),onKeydown:t.onRejectKeydown},i.confirmation.rejectProps,{label:t.rejectLabel,pt:n.ptm("pcRejectButton")}),A({_:2},[t.rejectIcon||n.$slots.rejecticon?{name:"icon",fn:p(function(s){return[f(n.$slots,"rejecticon",{},function(){return[d("span",r({class:[t.rejectIcon,s.class]},n.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),L(k,r({class:[n.cx("pcAcceptButton"),i.confirmation.acceptClass],autofocus:i.autoFocusAccept,unstyled:n.unstyled,size:((v=i.confirmation.acceptProps)===null||v===void 0?void 0:v.size)||"small",onClick:e[1]||(e[1]=function(s){return t.accept()}),onKeydown:t.onAcceptKeydown},i.confirmation.acceptProps,{label:t.acceptLabel,pt:n.ptm("pcAcceptButton")}),A({_:2},[t.acceptIcon||n.$slots.accepticon?{name:"icon",fn:p(function(s){return[f(n.$slots,"accepticon",{},function(){return[d("span",r({class:[t.acceptIcon,s.class]},n.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,$)),[[O]]):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}Z.render=x;export{Z as default};
