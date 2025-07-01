import{ao as O,c as v,o as u,a as s,R as i,W as E,_ as z,$ as c,a4 as $,a5 as j,a6 as R,a7 as V,a8 as f,a9 as B,ac as b,b as m,G as l,A as y,z as g,ae as w,t as k,w as C,af as M}from"./gXFK7R9O.js";import{C as D}from"./XvLRFYlF.js";import{s as A}from"./4LBJ2-AC.js";import H from"./Bv-VIchh.js";import{O as U}from"./D1SN4nE-.js";import{s as q}from"./DcyTZFdp.js";import"./DUvjW_oa.js";var L={name:"EyeSlashIcon",extends:O};function x(e,n,t,r,o,a){return u(),v("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}L.render=x;var K=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }
`,Z={root:function(n){var t=n.props;return{position:t.appendTo==="self"?"relative":void 0}}},F={root:function(n){var t=n.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":t.focused,"p-password-fluid":t.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(n){var t=n.instance;return"p-password-meter-label ".concat(t.meter?"p-password-meter-"+t.meter.strength:"")},meterText:"p-password-meter-text"},N=E.extend({name:"password",style:K,classes:F,inlineStyles:Z}),W={name:"BasePassword",extends:q,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:N,provide:function(){return{$pcPassword:this,$parentInstance:this}}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function S(e,n,t){return(n=G(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){var n=J(e,"string");return d(n)=="symbol"?n:n+""}function J(e,n){if(d(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Q={name:"Password",extends:W,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(f.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(n){f.set("overlay",n,this.$primevue.config.zIndex.overlay),B(n,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener(),this.$attrSelector&&n.setAttribute(this.$attrSelector,"")},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(n){f.clear(n)},alignOverlay:function(){this.appendTo==="self"?j(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=R(this.$refs.input.$el)+"px",V(this.overlay,this.$refs.input.$el))},testStrength:function(n){var t=0;return this.strongCheckRegExp.test(n)?t=3:this.mediumCheckRegExp.test(n)?t=2:n.length&&(t=1),t},onInput:function(n){this.writeValue(n.target.value,n),this.$emit("change",n)},onFocus:function(n){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",n)},onBlur:function(n){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",n)},onKeyUp:function(n){if(this.feedback){var t=n.target.value,r=this.checkPasswordStrength(t),o=r.meter,a=r.label;if(this.meter=o,this.infoText=a,n.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var n=this.checkPasswordStrength(this.d_value),t=n.meter,r=n.label;this.meter=t,this.infoText=r,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(n){var t=null,r=null;switch(this.testStrength(n)){case 1:t=this.weakText,r={strength:"weak",width:"33.33%"};break;case 2:t=this.mediumText,r={strength:"medium",width:"66.66%"};break;case 3:t=this.strongText,r={strength:"strong",width:"100%"};break;default:t=this.promptText,r=null;break}return{label:t,meter:r}},onInvalid:function(n){this.$emit("invalid",n)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new D(this.$refs.input.$el,function(){n.overlayVisible&&(n.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!$()&&(n.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(n){this.overlay=n},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(n){U.emit("overlay-click",{originalEvent:n,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.$id+"_overlay"},containerDataP:function(){return c({fluid:this.$fluid})},meterDataP:function(){var n,t;return c(S({},(n=this.meter)===null||n===void 0?void 0:n.strength,(t=this.meter)===null||t===void 0?void 0:t.strength))},overlayDataP:function(){return c(S({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},components:{InputText:H,Portal:z,EyeSlashIcon:L,EyeIcon:A}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(e)}function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?P(Object(t),!0).forEach(function(r){X(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function X(e,n,t){return(n=Y(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y(e){var n=_(e,"string");return p(n)=="symbol"?n:n+""}function _(e,n){if(p(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ee=["data-p"],ne=["id","data-p"],te=["data-p"];function re(e,n,t,r,o,a){var I=b("InputText"),T=b("Portal");return u(),v("div",i({class:e.cx("root"),style:e.sx("root"),"data-p":a.containerDataP},e.ptmi("root")),[m(I,i({ref:"input",id:e.inputId,type:a.inputType,class:[e.cx("pcInputText"),e.inputClass],style:e.inputStyle,defaultValue:e.d_value,name:e.$formName,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-controls":e.overlayProps&&e.overlayProps.id||e.overlayId||e.panelProps&&e.panelProps.id||e.panelId||a.overlayUniqueId,"aria-haspopup":!0,placeholder:e.placeholder,required:e.required,fluid:e.fluid,disabled:e.disabled,variant:e.variant,invalid:e.invalid,size:e.size,autofocus:e.autofocus,onInput:a.onInput,onFocus:a.onFocus,onBlur:a.onBlur,onKeyup:a.onKeyUp,onInvalid:a.onInvalid},e.inputProps,{"data-p-has-e-icon":e.toggleMask,pt:e.ptm("pcInputText"),unstyled:e.unstyled,formControl:{novalidate:!0}}),null,16,["id","type","class","style","defaultValue","name","aria-labelledby","aria-label","aria-controls","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","data-p-has-e-icon","pt","unstyled"]),e.toggleMask&&o.unmasked?l(e.$slots,e.$slots.maskicon?"maskicon":"hideicon",i({key:0,toggleCallback:a.onMaskToggle,class:[e.cx("maskIcon"),e.maskIcon]},e.ptm("maskIcon")),function(){return[(u(),g(w(e.maskIcon?"i":"EyeSlashIcon"),i({class:[e.cx("maskIcon"),e.maskIcon],onClick:a.onMaskToggle},e.ptm("maskIcon")),null,16,["class","onClick"]))]}):y("",!0),e.toggleMask&&!o.unmasked?l(e.$slots,e.$slots.unmaskicon?"unmaskicon":"showicon",i({key:1,toggleCallback:a.onMaskToggle,class:[e.cx("unmaskIcon")]},e.ptm("unmaskIcon")),function(){return[(u(),g(w(e.unmaskIcon?"i":"EyeIcon"),i({class:[e.cx("unmaskIcon"),e.unmaskIcon],onClick:a.onMaskToggle},e.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):y("",!0),s("span",i({class:"p-hidden-accessible","aria-live":"polite"},e.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),k(o.infoText),17),m(T,{appendTo:e.appendTo},{default:C(function(){return[m(M,i({name:"p-connected-overlay",onEnter:a.onOverlayEnter,onLeave:a.onOverlayLeave,onAfterLeave:a.onOverlayAfterLeave},e.ptm("transition")),{default:C(function(){return[o.overlayVisible?(u(),v("div",i({key:0,ref:a.overlayRef,id:e.overlayId||e.panelId||a.overlayUniqueId,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:[e.overlayStyle,e.panelStyle],onClick:n[0]||(n[0]=function(){return a.onOverlayClick&&a.onOverlayClick.apply(a,arguments)}),"data-p":a.overlayDataP,role:"dialog","aria-live":"polite"},h(h(h({},e.panelProps),e.overlayProps),e.ptm("overlay"))),[l(e.$slots,"header"),l(e.$slots,"content",{},function(){return[s("div",i({class:e.cx("content")},e.ptm("content")),[s("div",i({class:e.cx("meter")},e.ptm("meter")),[s("div",i({class:e.cx("meterLabel"),style:{width:o.meter?o.meter.width:""},"data-p":a.meterDataP},e.ptm("meterLabel")),null,16,te)],16),s("div",i({class:e.cx("meterText")},e.ptm("meterText")),k(o.infoText),17)],16)]}),l(e.$slots,"footer")],16,ne)):y("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,ee)}Q.render=re;export{Q as default};
