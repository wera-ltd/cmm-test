import{Y as d,ak as v,a1 as u,c as l,o as e,D as c,z as g,A as f,T as o,t as m,M as y,ag as b}from"./U1tzv9eA.js";var h=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,z={root:function(t){var r=t.props;return["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},S=d.extend({name:"avatar",style:h,classes:z}),w={name:"BaseAvatar",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function i(a){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(a)}function p(a,t,r){return(t=P(t))in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function P(a){var t=k(a,"string");return i(t)=="symbol"?t:t+""}function k(a,t){if(i(a)!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var s=r.call(a,t);if(i(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var E={name:"Avatar",extends:w,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return u(p(p({},this.shape,this.shape),this.size,this.size))}}},A=["aria-labelledby","aria-label","data-p"],x=["data-p"],B=["data-p"],L=["src","alt","data-p"];function $(a,t,r,s,j,n){return e(),l("div",o({class:a.cx("root"),"aria-labelledby":a.ariaLabelledby,"aria-label":a.ariaLabel},a.ptmi("root"),{"data-p":n.dataP}),[c(a.$slots,"default",{},function(){return[a.label?(e(),l("span",o({key:0,class:a.cx("label")},a.ptm("label"),{"data-p":n.dataP}),m(a.label),17,x)):a.$slots.icon?(e(),g(b(a.$slots.icon),{key:1,class:y(a.cx("icon"))},null,8,["class"])):a.icon?(e(),l("span",o({key:2,class:[a.cx("icon"),a.icon]},a.ptm("icon"),{"data-p":n.dataP}),null,16,B)):a.image?(e(),l("img",o({key:3,src:a.image,alt:a.ariaLabel,onError:t[0]||(t[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},a.ptm("image"),{"data-p":n.dataP}),null,16,L)):f("",!0)]})],16,A)}E.render=$;export{E as default};
