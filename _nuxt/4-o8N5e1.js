import{S as v,T as g,V as S,Y as O,a0 as c,a8 as d,H as B,c as b,o as p,F as L,q as w,y as V,ac as A,w as K,x as T,a as I,I as y,t as D}from"./BbW87dmS.js";import R from"./C1X9h0Rl.js";import{s as k}from"./tfODCGAZ.js";var q=v`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,C={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},E=g.extend({name:"selectbutton",style:q,classes:C}),_={name:"BaseSelectButton",extends:k,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:E,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function x(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=h(e))||n){t&&(e=t);var o=0,s=function(){};return{s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,l=!0,r=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return l=u.done,u},e:function(u){r=!0,a=u},f:function(){try{l||t.return==null||t.return()}finally{if(r)throw a}}}}function $(e){return P(e)||F(e)||h(e)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(e,n){if(e){if(typeof e=="string")return f(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function F(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return f(e)}function f(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var j={name:"SelectButton",extends:_,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?d(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?d(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?d(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?d(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,o){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var a=this.isSelected(t),l=this.getOptionValue(t),r;if(this.multiple)if(a){if(r=this.d_value.filter(function(i){return!c(i,l,s.equalityKey)}),!this.allowEmpty&&r.length===0)return}else r=this.d_value?[].concat($(this.d_value),[l]):[l];else{if(a&&!this.allowEmpty)return;r=a?null:l}this.writeValue(r,n),this.$emit("change",{event:n,value:r})}},isSelected:function(n){var t=!1,o=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=x(this.d_value),a;try{for(s.s();!(a=s.n()).done;){var l=a.value;if(c(l,o,this.equalityKey)){t=!0;break}}}catch(r){s.e(r)}finally{s.f()}}}else t=c(this.d_value,o,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return O({invalid:this.$invalid})}},directives:{ripple:S},components:{ToggleButton:R}},H=["aria-labelledby","data-p"];function M(e,n,t,o,s,a){var l=B("ToggleButton");return p(),b("div",y({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":a.dataP}),[(p(!0),b(L,null,w(e.options,function(r,i){return p(),V(l,{key:a.getOptionRenderKey(r),modelValue:a.isSelected(r),onLabel:a.getOptionLabel(r),offLabel:a.getOptionLabel(r),disabled:e.disabled||a.isOptionDisabled(r),unstyled:e.unstyled,size:e.size,readonly:a.isOptionReadonly(r),onChange:function(m){return a.onOptionSelect(m,r,i)},pt:e.ptm("pcToggleButton")},A({_:2},[e.$slots.option?{name:"default",fn:K(function(){return[T(e.$slots,"option",{option:r,index:i},function(){return[I("span",y({ref_for:!0},e.ptm("pcToggleButton").label),D(a.getOptionLabel(r)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,H)}j.render=M;export{j as default};
