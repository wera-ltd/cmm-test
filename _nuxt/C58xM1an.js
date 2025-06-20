import{V as m,W as l,ai as n,bI as c,aw as s,c as p,o as g,G as d,a as h,T as t}from"./Qq2h49bs.js";var u=m`
    .p-imagecompare {
        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .p-imagecompare img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .p-imagecompare img + img {
        clip-path: polygon(0 0, dt('imagecompare.scope.x', '50%') 0, dt('imagecompare.scope.x', '50%') 100%, 0 100%);
    }

    .p-imagecompare:dir(rtl) img + img {
        clip-path: polygon(calc(100% - dt('imagecompare.scope.x', '50%')) 0, 100% 0, 100% 100%, calc(100% - dt('imagecompare.scope.x', '50%')) 100%);
    }

    .p-imagecompare-slider {
        position: relative;
        -webkit-appearance: none;
        width: calc(100% + dt('imagecompare.handle.size'));
        height: 100%;
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.size') / 2));
        background-color: transparent;
        outline: none;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') solid dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-moz-range-thumb {
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') dt('imagecompare.handle.border.style') dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
    }

    .p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:focus-visible::-moz-range-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:hover {
        width: calc(100% + dt('imagecompare.handle.hover.size'));
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.hover.size') / 2));
    }

    .p-imagecompare-slider:hover::-webkit-slider-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }

    .p-imagecompare-slider:hover::-moz-range-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }
`,b={root:"p-imagecompare",slider:"p-imagecompare-slider"},v=l.extend({name:"imagecompare",style:u,classes:b}),f={name:"BaseImageCompare",extends:n,props:{tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:v,provide:function(){return{$pcImageCompare:this,$parentInstance:this}}},w={name:"ImageCompare",extends:f,methods:{onSlide:function(a){var o=a.target.value,i=a.target.previousElementSibling;c(i,s("imagecompare.scope.x").name,"".concat(o,"%"))}}},y=["aria-labelledby","aria-label"];function z(e,a,o,i,k,r){return g(),p("div",t({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root")),[d(e.$slots,"left"),d(e.$slots,"right"),h("input",t({type:"range",min:"0",max:"100",value:"50",onInput:a[0]||(a[0]=function(){return r.onSlide&&r.onSlide.apply(r,arguments)}),class:e.cx("slider")},e.ptm("slider")),null,16)],16,y)}w.render=z;export{w as default};
