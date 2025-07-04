import{X as b,aj as v,ar as k,ac as f,aT as P,ad as C,c as u,o as i,A as d,z as w,a as S,S as g,G as n,ah as y,w as l,N as h,F as T,d as $,t as R}from"./C8wjEdNG.js";import L from"./UGO8-seK.js";import"./B-5EPiSd.js";import"./hVUgl_Wq.js";import"./-H9nQnCW.js";import"./CdMfvpR3.js";import"./B5iAZ5CQ.js";import"./BkM5x1Uo.js";import"./Df208iy8.js";import"./D5GYEVXT.js";import"./DjzyW3RL.js";import"./Cm8UbG6e.js";import"./su0bCiy6.js";import"./OLrJazU-.js";import"./ByJ1v8z9.js";import"./k4ULNxN8.js";import"./CLTKwWor.js";import"./DoBSPNEK.js";import"./BO-ISDJv.js";var A=`
    .p-dataview {
        position: relative;
        border-color: dt('dataview.border.color');
        border-width: dt('dataview.border.width');
        border-style: solid;
        border-radius: dt('dataview.border.radius');
        padding: dt('dataview.padding');
    }

    .p-dataview-header {
        background: dt('dataview.header.background');
        color: dt('dataview.header.color');
        border-color: dt('dataview.header.border.color');
        border-width: dt('dataview.header.border.width');
        border-style: solid;
        padding: dt('dataview.header.padding');
        border-radius: dt('dataview.header.border.radius');
    }

    .p-dataview-content {
        background: dt('dataview.content.background');
        border-color: dt('dataview.content.border.color');
        border-width: dt('dataview.content.border.width');
        border-style: solid;
        color: dt('dataview.content.color');
        padding: dt('dataview.content.padding');
        border-radius: dt('dataview.content.border.radius');
    }

    .p-dataview-footer {
        background: dt('dataview.footer.background');
        color: dt('dataview.footer.color');
        border-color: dt('dataview.footer.border.color');
        border-width: dt('dataview.footer.border.width');
        border-style: solid;
        padding: dt('dataview.footer.padding');
        border-radius: dt('dataview.footer.border.radius');
    }

    .p-dataview-paginator-top {
        border-width: dt('dataview.paginator.top.border.width');
        border-color: dt('dataview.paginator.top.border.color');
        border-style: solid;
    }

    .p-dataview-paginator-bottom {
        border-width: dt('dataview.paginator.bottom.border.width');
        border-color: dt('dataview.paginator.bottom.border.color');
        border-style: solid;
    }

    .p-dataview-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
`,z={root:function(t){var r=t.props;return["p-dataview p-component",{"p-dataview-list":r.layout==="list","p-dataview-grid":r.layout==="grid"}]},header:"p-dataview-header",pcPaginator:function(t){var r=t.position;return"p-dataview-paginator-"+r},content:"p-dataview-content",emptyMessage:"p-dataview-empty-message",footer:"p-dataview-footer"},B=b.extend({name:"dataview",style:A,classes:z}),O={name:"BaseDataView",extends:v,props:{value:{type:Array,default:null},layout:{type:String,default:"list"},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},lazy:{type:Boolean,default:!1},dataKey:{type:String,default:null}},style:B,provide:function(){return{$pcDataView:this,$parentInstance:this}}};function F(e){return M(e)||V(e)||N(e)||D()}function D(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(e,t){if(e){if(typeof e=="string")return m(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function V(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return m(e)}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,p=Array(t);r<t;r++)p[r]=e[r];return p}var I={name:"DataView",extends:O,inheritAttrs:!1,emits:["update:first","update:rows","page"],data:function(){return{d_first:this.first,d_rows:this.rows}},watch:{first:function(t){this.d_first=t},rows:function(t){this.d_rows=t},sortField:function(){this.resetPage()},sortOrder:function(){this.resetPage()}},methods:{getKey:function(t,r){return this.dataKey?f(t,this.dataKey):r},onPage:function(t){this.d_first=t.first,this.d_rows=t.rows,this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",t)},sort:function(){var t=this;if(this.value){var r=F(this.value),p=k();return r.sort(function(s,o){var c=f(s,t.sortField),a=f(o,t.sortField);return P(c,a,t.sortOrder,p)}),r}else return null},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)}},computed:{getTotalRecords:function(){return this.totalRecords?this.totalRecords:this.value?this.value.length:0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},items:function(){if(this.value&&this.value.length){var t=this.value;if(t&&t.length&&this.sortField&&(t=this.sort()),this.paginator){var r=this.lazy?0:this.d_first;return t.slice(r,r+this.d_rows)}else return t}else return null}},components:{DVPaginator:L}};function K(e,t,r,p,s,o){var c=C("DVPaginator");return i(),u("div",g({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(i(),u("div",g({key:0,class:e.cx("header")},e.ptm("header")),[n(e.$slots,"header")],16)):d("",!0),o.paginatorTop?(i(),w(c,{key:1,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:h(e.cx("pcPaginator",{position:"top"})),alwaysShow:e.alwaysShowPaginator,onPage:t[0]||(t[0]=function(a){return o.onPage(a)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},y({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[n(e.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:l(function(){return[n(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:l(function(){return[n(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),S("div",g({class:e.cx("content")},e.ptm("content")),[o.empty?(i(),u("div",g({key:1,class:e.cx("emptyMessage")},e.ptm("emptyMessage")),[n(e.$slots,"empty",{layout:e.layout},function(){return[$(R(o.emptyMessageText),1)]})],16)):(i(),u(T,{key:0},[e.$slots.list&&e.layout==="list"?n(e.$slots,"list",{key:0,items:o.items}):d("",!0),e.$slots.grid&&e.layout==="grid"?n(e.$slots,"grid",{key:1,items:o.items}):d("",!0)],64))],16),o.paginatorBottom?(i(),w(c,{key:2,rows:s.d_rows,first:s.d_first,totalRecords:o.getTotalRecords,pageLinkSize:e.pageLinkSize,template:e.paginatorTemplate,rowsPerPageOptions:e.rowsPerPageOptions,currentPageReportTemplate:e.currentPageReportTemplate,class:h(e.cx("pcPaginator",{position:"bottom"})),alwaysShow:e.alwaysShowPaginator,onPage:t[1]||(t[1]=function(a){return o.onPage(a)}),unstyled:e.unstyled,pt:e.ptm("pcPaginator")},y({_:2},[e.$slots.paginatorcontainer?{name:"container",fn:l(function(a){return[n(e.$slots,"paginatorcontainer",{first:a.first,last:a.last,rows:a.rows,page:a.page,pageCount:a.pageCount,pageLinks:a.pageLinks,totalRecords:a.totalRecords,firstPageCallback:a.firstPageCallback,lastPageCallback:a.lastPageCallback,prevPageCallback:a.prevPageCallback,nextPageCallback:a.nextPageCallback,rowChangeCallback:a.rowChangeCallback,changePageCallback:a.changePageCallback})]}),key:"0"}:void 0,e.$slots.paginatorstart?{name:"start",fn:l(function(){return[n(e.$slots,"paginatorstart")]}),key:"1"}:void 0,e.$slots.paginatorend?{name:"end",fn:l(function(){return[n(e.$slots,"paginatorend")]}),key:"2"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):d("",!0),e.$slots.footer?(i(),u("div",g({key:3,class:e.cx("footer")},e.ptm("footer")),[n(e.$slots,"footer")],16)):d("",!0)],16)}I.render=K;export{I as default};
