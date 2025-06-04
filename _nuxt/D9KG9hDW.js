import{c as l}from"./Be1fzYNM.js";import{s as u}from"./DfH7obzV.js";import{V as g,W as p,c as i,o as s,s as y,x as c,y as f,z as o,aa as b,a as m,t as v}from"./BoN1M236.js";var k=g`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,h={root:function(r){var e=r.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},S=p.extend({name:"tag",style:k,classes:h}),w={name:"BaseTag",extends:u,props:{value:null,severity:null,rounded:Boolean,icon:String},style:S,provide:function(){return{$pcTag:this,$parentInstance:this}}};function a(t){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},a(t)}function $(t,r,e){return(r=P(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function P(t){var r=z(t,"string");return a(r)=="symbol"?r:r+""}function z(t,r){if(a(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r);if(a(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}var B={name:"Tag",extends:w,inheritAttrs:!1,computed:{dataP:function(){return l($({rounded:this.rounded},this.severity,this.severity))}}},T=["data-p"];function j(t,r,e,n,N,d){return s(),i("span",o({class:t.cx("root"),"data-p":d.dataP},t.ptmi("root")),[t.$slots.icon?(s(),y(b(t.$slots.icon),o({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(s(),i("span",o({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):c("",!0),t.value!=null||t.$slots.default?f(t.$slots,"default",{key:2},function(){return[m("span",o({class:t.cx("label")},t.ptm("label")),v(t.value),17)]}):c("",!0)],16,T)}B.render=j;export{B as default};
