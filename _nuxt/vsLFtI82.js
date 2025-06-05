import{V as n,W as r,ah as c,a8 as o,bx as d,al as k,bE as m,b9 as l,by as u,c as h,o as p,B as b,C as f}from"./i39nrdhh.js";var v=n`
    .p-blockui {
        position: relative;
    }

    .p-blockui-mask {
        border-radius: dt('blockui.border.radius');
    }

    .p-blockui-mask.p-overlay-mask {
        position: absolute;
    }

    .p-blockui-mask-document.p-overlay-mask {
        position: fixed;
    }
`,y={root:"p-blockui"},B=r.extend({name:"blockui",style:v,classes:y}),x={name:"BaseBlockUI",extends:c,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:B,provide:function(){return{$pcBlockUI:this,$parentInstance:this}}},I={name:"BlockUI",extends:x,inheritAttrs:!1,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(e){e===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var e="p-blockui-mask p-overlay-mask p-overlay-mask-enter";this.fullScreen?(e+=" p-blockui-mask-document",this.mask=l("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),u(),document.activeElement.blur()):(this.mask=l("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&e,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&o.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var e=this;if(this.mask){!this.isUnstyled&&k(this.mask,"p-overlay-mask-leave");var t=function(){clearTimeout(i),e.mask.removeEventListener("animationend",t),e.mask.removeEventListener("webkitAnimationEnd",t)},i=setTimeout(function(){e.removeMask()},10);m(this.mask)>0&&(this.mask.addEventListener("animationend",t),this.mask.addEventListener("webkitAnimationEnd",t))}else this.removeMask()},removeMask:function(){if(o.clear(this.mask),this.fullScreen)document.body.removeChild(this.mask),d();else{var e;(e=this.$refs.container)===null||e===void 0||e.removeChild(this.mask)}this.isBlocked=!1,this.$emit("unblock")}}},S=["aria-busy"];function C(s,e,t,i,a,E){return p(),h("div",f({ref:"container",class:s.cx("root"),"aria-busy":a.isBlocked},s.ptmi("root")),[b(s.$slots,"default")],16,S)}I.render=C;export{I as default};
