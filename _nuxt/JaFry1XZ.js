import{V as h,W as B,s as w,ai as v,aa as $,ac as c,c as S,o as b,b as u,ag as f,w as o,G as s,E as r,a as C,T as i,z as D,ae as k}from"./Qq2h49bs.js";import{s as I}from"./B8rN1Ugl.js";import g from"./COMAmI4j.js";import"./DNBIKvOB.js";import"./CN_ORTm4.js";import"./BSQMOX0f.js";var z=h`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button:focus-visible,
    .p-splitbutton-dropdown:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button:not(:disabled):hover,
    .p-splitbutton-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`,V={root:function(e){var d=e.instance,a=e.props;return["p-splitbutton p-component",{"p-splitbutton-raised":a.raised,"p-splitbutton-rounded":a.rounded,"p-splitbutton-fluid":d.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},E=B.extend({name:"splitbutton",style:z,classes:V}),Z={name:"BaseSplitButton",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:E,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},T={name:"SplitButton",extends:Z,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var e=this;this.$watch("$refs.menu.visible",function(d){e.isExpanded=d})},methods:{onDropdownButtonClick:function(e){e&&e.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(e){(e.code==="ArrowDown"||e.code==="ArrowUp")&&(this.onDropdownButtonClick(),e.preventDefault())},onDefaultButtonClick:function(e){this.isExpanded&&this.$refs.menu.hide(e),this.$emit("click",e)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return $(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:w,PVSMenu:g,ChevronDownIcon:I}},F=["data-p-severity"];function K(t,e,d,a,m,l){var p=c("PVSButton"),y=c("PVSMenu");return b(),S("div",i({class:l.containerClass,style:t.style},t.ptmi("root"),{"data-p-severity":t.severity}),[u(p,i({type:"button",class:t.cx("pcButton"),label:t.label,disabled:t.disabled,severity:t.severity,text:t.text,icon:t.icon,outlined:t.outlined,size:t.size,fluid:t.fluid,"aria-label":t.label,onClick:l.onDefaultButtonClick},t.buttonProps,{pt:t.ptm("pcButton"),unstyled:t.unstyled}),f({default:o(function(){return[s(t.$slots,"default")]}),_:2},[t.$slots.icon?{name:"icon",fn:o(function(n){return[s(t.$slots,"icon",{class:r(n.class)},function(){return[C("span",i({class:[t.icon,n.class]},t.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),u(p,i({ref:"button",type:"button",class:t.cx("pcDropdown"),disabled:t.disabled,"aria-haspopup":"true","aria-expanded":m.isExpanded,"aria-controls":t.$id+"_overlay",onClick:l.onDropdownButtonClick,onKeydown:l.onDropdownKeydown,severity:t.severity,text:t.text,outlined:t.outlined,size:t.size,unstyled:t.unstyled},t.menuButtonProps,{pt:t.ptm("pcDropdown")}),{icon:o(function(n){return[s(t.$slots,t.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:r(n.class)},function(){return[(b(),D(k(t.menuButtonIcon||t.dropdownIcon?"span":"ChevronDownIcon"),i({class:[t.dropdownIcon||t.menuButtonIcon,n.class]},t.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),u(y,{ref:"menu",id:t.$id+"_overlay",model:t.model,popup:!0,autoZIndex:t.autoZIndex,baseZIndex:t.baseZIndex,appendTo:t.appendTo,unstyled:t.unstyled,pt:t.ptm("pcMenu")},f({_:2},[t.$slots.menuitemicon?{name:"itemicon",fn:o(function(n){return[s(t.$slots,"menuitemicon",{item:n.item,class:r(n.class)})]}),key:"0"}:void 0,t.$slots.item?{name:"item",fn:o(function(n){return[s(t.$slots,"item",{item:n.item,hasSubmenu:n.hasSubmenu,label:n.label,props:n.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,F)}T.render=K;export{T as default};
