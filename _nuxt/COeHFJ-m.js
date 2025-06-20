import{s as A}from"./DfOJ7mce.js";import{s as P}from"./TlPeBpZ8.js";import k from"./idJi5zDr.js";import _ from"./C3XMtNol.js";import C from"./C1d8725i.js";import{V as I,W as $,ai as x,T as s,ac as v,c as f,o as i,G as w,F as S,C as B,z as l,w as u,b as g,E as N,A as b,ae as p,t as H}from"./Qq2h49bs.js";import"./B8rN1Ugl.js";var E=I`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,D={root:"p-accordion p-component"},z=$.extend({name:"accordion",style:E,classes:D}),F={name:"BaseAccordion",extends:x,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:z,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},K={name:"Accordion",extends:F,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e==null?void 0:e.map(String):e==null?void 0:e.toString())}}},methods:{isItemActive:function(e){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(e):this.d_value===e},updateValue:function(e){var o,c=this.isItemActive(e);this.multiple?c?this.d_value=this.d_value.filter(function(d){return d!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=c?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(c?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,o){return e.props?e.props[o]:void 0},getKey:function(e,o){return this.getTabProp(e,"header")||o},getHeaderPT:function(e,o){var c=this;return{root:s({onClick:function(a){return c.onTabClick(a,o)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",o)),toggleicon:s(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",o))}},getContentPT:function(e,o){return{root:s(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",o)),transition:this.getTabPT(e,"transition",o),content:this.getTabPT(e,"content",o)}},getTabPT:function(e,o,c){var d=this.tabs.length,a={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:c,count:d,first:c===0,last:c===d-1,active:this.isItemActive("".concat(c))}};return s(this.ptm("accordiontab.".concat(o),a),this.ptmo(this.getTabProp(e,"pt"),o,a))},onTabClick:function(e,o){this.$emit("tab-click",{originalEvent:e,index:o})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(o,c){return e.isAccordionTab(c)?o.push(c):c.children&&c.children instanceof Array&&c.children.forEach(function(d){e.isAccordionTab(d)&&o.push(d)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:C,AccordionHeader:_,AccordionContent:k,ChevronUpIcon:P,ChevronRightIcon:A}};function U(r,e,o,c,d,a){var m=v("AccordionHeader"),T=v("AccordionContent"),y=v("AccordionPanel");return i(),f("div",s({class:r.cx("root")},r.ptmi("root")),[a.hasAccordionTab?(i(!0),f(S,{key:0},B(a.tabs,function(t,n){return i(),l(y,{key:a.getKey(t,n),value:"".concat(n),pt:{root:a.getTabPT(t,"root",n)},disabled:a.getTabProp(t,"disabled")},{default:u(function(){return[g(m,{class:N(a.getTabProp(t,"headerClass")),pt:a.getHeaderPT(t,n)},{toggleicon:u(function(h){return[h.active?(i(),l(p(r.$slots.collapseicon?r.$slots.collapseicon:r.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[r.collapseIcon,h.class],"aria-hidden":"true"},{ref_for:!0},a.getTabPT(t,"headericon",n)),null,16,["class"])):(i(),l(p(r.$slots.expandicon?r.$slots.expandicon:r.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[r.expandIcon,h.class],"aria-hidden":"true"},{ref_for:!0},a.getTabPT(t,"headericon",n)),null,16,["class"]))]}),default:u(function(){return[t.children&&t.children.headericon?(i(),l(p(t.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(n)),active:a.isItemActive("".concat(n)),index:n},null,8,["isTabActive","active","index"])):b("",!0),t.props&&t.props.header?(i(),f("span",s({key:1,ref_for:!0},a.getTabPT(t,"headertitle",n)),H(t.props.header),17)):b("",!0),t.children&&t.children.header?(i(),l(p(t.children.header),{key:2})):b("",!0)]}),_:2},1032,["class","pt"]),g(T,{pt:a.getContentPT(t,n)},{default:u(function(){return[(i(),l(p(t)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):w(r.$slots,"default",{key:1})],16)}K.render=U;export{K as default};
