import{S as f,T as m,V as y,s as v,ae as B,Y as k,H as w,c as p,o as d,a as s,b as g,x as l,E as c,I as a,t as P,A as $,w as h,y as C,aa as A,p as D,ar as S,ab as I}from"./BbW87dmS.js";import{s as T}from"./4cgr6iXC.js";import{s as E}from"./B2zBY0Ln.js";var K=f`
    .p-panel {
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,L={root:function(t){var u=t.props;return["p-panel p-component",{"p-panel-toggleable":u.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},N=m.extend({name:"panel",style:K,classes:L}),V={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:N,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:V,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return k({toggleable:this.toggleable})}},components:{PlusIcon:E,MinusIcon:T,Button:v},directives:{ripple:y}},M=["data-p"],z=["data-p"],H=["id"],O=["id","aria-labelledby"];function R(e,t,u,Y,r,o){var b=w("Button");return d(),p("div",a({class:e.cx("root"),"data-p":o.dataP},e.ptmi("root")),[s("div",a({class:e.cx("header"),"data-p":o.dataP},e.ptm("header")),[l(e.$slots,"header",{id:e.$id+"_header",class:$(e.cx("title"))},function(){return[e.header?(d(),p("span",a({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,H)):c("",!0)]}),s("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[l(e.$slots,"icons"),e.toggleable?l(e.$slots,"togglebutton",{key:0,collapsed:r.d_collapsed,toggleCallback:function(i){return o.toggle(i)},keydownCallback:function(i){return o.onKeyDown(i)}},function(){return[g(b,a({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":o.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,unstyled:e.unstyled,onClick:t[0]||(t[0]=function(n){return o.toggle(n)}),onKeydown:t[1]||(t[1]=function(n){return o.onKeyDown(n)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(n){return[l(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed},function(){return[(d(),C(A(r.d_collapsed?"PlusIcon":"MinusIcon"),a({class:n.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,z),g(I,a({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[D(s("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",a({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"default")],16),e.$slots.footer?(d(),p("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):c("",!0)],16,O),[[S,!r.d_collapsed]])]}),_:3},16)],16,M)}j.render=R;export{j as default};
