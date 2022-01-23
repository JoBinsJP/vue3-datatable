var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@jobinsjp/vue3-datatable"]={},e.Vue)}(this,(function(e,t){"use strict";var n=t.defineComponent({name:"SearchIcon"});const o={xmlns:"http://www.w3.org/2000/svg",class:"dt-h-5 dt-w-5",viewBox:"0 0 20 20",fill:"currentColor"},a=[t.createElementVNode("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1)];n.render=function(e,n,r,l,d,i){return t.openBlock(),t.createElementBlock("svg",o,a)};var r=t.defineComponent({name:"SearchInput",props:{value:{type:String,required:!1}}});const l=["value"];r.render=function(e,n,o,a,r,d){return t.openBlock(),t.createElementBlock("input",t.mergeProps({value:e.value,type:"search",name:"search",class:"dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2\r\n                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"},e.$attrs),null,16,l)};var d=t.defineComponent({name:"Filter",components:{SearchInput:r,SearchIcon:n},props:{search:{type:String,required:!1}},emits:["input"],methods:{emitirEvento(e){this.$emit("input",e.target.value)}}});const i={class:"dt__filter dt-mb-3 dt-w-full"},s={class:"dt-w-64"},c=t.createElementVNode("label",{for:"email",class:"dt-sr-only"},"Search",-1),p={class:"dt-relative dt-rounded-md dt-shadow-sm"},u={class:"dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"};d.render=function(e,n,o,a,r,l){const d=t.resolveComponent("SearchInput"),m=t.resolveComponent("SearchIcon");return t.openBlock(),t.createElementBlock("div",i,[t.createElementVNode("div",s,[c,t.createElementVNode("div",p,[t.createVNode(d,{value:e.search,onInput:n[0]||(n[0]=t=>e.emitirEvento(t))},null,8,["value"]),t.createElementVNode("div",u,[t.createVNode(m,{class:"dt-text-gray-400"})])])])])};var m=t.defineComponent({name:"Loading"});t.pushScopeId("data-v-39d1a9ee");const g={class:"dt__loading dt-absolute dt-h-full dt-w-full"},f=[t.createElementVNode("div",{class:"dt-flex dt-justify-center dt-items-center"},[t.createElementVNode("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"}),t.createElementVNode("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"})],-1)];t.popScopeId(),m.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",g,f)},m.__scopeId="data-v-39d1a9ee";var _=t.defineComponent({name:"BottomPaginationWrapper"});const v={class:"dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner"},b={class:"dt-px-4 sm:dt-px-6 dt-py-4"};_.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",v,[t.createElementVNode("div",b,[t.renderSlot(e.$slots,"default")])])};var y=t.defineComponent({name:"PaginationButtons"});const h={class:"dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px","aria-label":"Pagination"};y.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("nav",h,[t.renderSlot(e.$slots,"default")])};var C=t.defineComponent({name:"PaginationInfo"});const k={class:"dt__pagination__info"},x={class:"dt-text-sm dt-text-gray-700"};C.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",k,[t.createElementVNode("p",x,[t.renderSlot(e.$slots,"default")])])};var w=t.defineComponent({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:t.computed((()=>e.active?"dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200":e.disabled?"dt-cursor-not-allowed dt-text-gray-400":"dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"))})});w.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("a",t.mergeProps({href:"#",class:["dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium",e.linkClasses]},t.toHandlers(__spreadValues({},e.$attrs))),[t.renderSlot(e.$slots,"default")],16)};const P="left";var B=t.defineComponent({name:"Pagination",components:{PaginationButtons:y,PaginationInfo:C,PaginationLink:w},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:n}){const o=t.computed((()=>(e.currentPage-1)*e.perPage+1)),a=t.computed((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),r=t.computed((()=>Math.ceil(e.total/e.perPage))),l=t.computed((()=>1===e.currentPage?1:e.currentPage===r.value?r.value-e.maxVisibleButtons+1:e.currentPage-1)),d=t.computed((()=>Math.min(l.value+e.maxVisibleButtons-1,r.value))),i=t.computed((()=>{const e=[];for(let t=l.value;t<=d.value;t+=1)t>0&&e.push(t);return e})),s=t.computed((()=>1===e.currentPage)),c=t.computed((()=>e.currentPage===r.value)),p=e=>{n("changed",e)};return{currentStart:o,currentEnd:a,totalPages:r,pages:i,isInFirstPage:s,isInLastPage:c,goToPageNumber:p,gotoFirstPage:()=>p(1),gotoLastPage:()=>p(r.value),gotoNextPage:()=>p(e.currentPage>=r.value?r.value:e.currentPage+1),gotoPreviousPage:()=>p(e.currentPage<=1?1:e.currentPage-1),showDots:(e=P)=>{const t=e===P?1:r.value,n=e===P?2:r.value-1;return!i.value.includes(t)||!i.value.includes(n)}}}});const N={key:0,class:"dt__pagination dt-bg-white dt-flex dt-items-center dt-justify-between"},V={class:"dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between"},S=t.createTextVNode(" Showing "),E=["textContent"],T=t.createTextVNode(" to "),I=["textContent"],q=t.createTextVNode(" of "),$=["textContent"],O=t.createTextVNode(" results. "),D=t.createElementVNode("span",{class:"dt-sr-only"},"Go to first",-1),L=t.createTextVNode(" « "),F=t.createElementVNode("span",{class:"dt-sr-only"},"Previous",-1),j=t.createTextVNode(" ‹ "),M=t.createTextVNode(" 1 "),z=t.createTextVNode(" ... "),H=t.createTextVNode(" ... "),R=t.createElementVNode("span",{class:"dt-sr-only"},"Next",-1),Q=t.createTextVNode(" › "),W=t.createElementVNode("span",{class:"dt-sr-only"},"Go to Last",-1),A=t.createTextVNode(" » ");B.render=function(e,n,o,a,r,l){const d=t.resolveComponent("PaginationInfo"),i=t.resolveComponent("pagination-link"),s=t.resolveComponent("PaginationButtons");return e.totalPages?(t.openBlock(),t.createElementBlock("div",N,[t.createElementVNode("div",V,[e.total?(t.openBlock(),t.createBlock(d,{key:0},{default:t.withCtx((()=>[t.renderSlot(e.$slots,"pagination-info",{start:e.currentStart,end:e.currentEnd,total:e.total},(()=>[S,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(e.currentStart)},null,8,E),T,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(e.currentEnd)},null,8,I),q,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(e.total)},null,8,$),O]))])),_:3})):t.createCommentVNode("",!0),e.totalPages>1?(t.openBlock(),t.createBlock(s,{key:1},{default:t.withCtx((()=>[t.createVNode(i,{key:"page_first",disabled:e.isInFirstPage,class:"dt-rounded-l-md",onClick:t.withModifiers(e.gotoFirstPage,["prevent"])},{default:t.withCtx((()=>[D,L])),_:1},8,["disabled","onClick"]),t.createVNode(i,{key:"page_previous",disabled:e.isInFirstPage,onClick:t.withModifiers(e.gotoPreviousPage,["prevent"])},{default:t.withCtx((()=>[F,j])),_:1},8,["disabled","onClick"]),e.showDots("left")?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createVNode(i,{key:"page_1",class:"dt-block sm:dt-hidden",disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:t.withModifiers(e.gotoFirstPage,["prevent"])},{default:t.withCtx((()=>[M])),_:1},8,["disabled","active","onClick"]),t.createVNode(i,{key:"page_divider_left",class:"sm:dt-hidden"},{default:t.withCtx((()=>[z])),_:1})],64)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.pages,(n=>(t.openBlock(),t.createBlock(i,{key:`pages_${n}`,class:"dt-hidden md:dt-inline-block",active:n===e.currentPage,disabled:n===e.currentPage,onClick:t.withModifiers((t=>e.goToPageNumber(n)),["prevent"])},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(n),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.createVNode(i,{key:"page_divider_right",class:"sm:dt-hidden"},{default:t.withCtx((()=>[H])),_:1}),t.createVNode(i,{key:`page_${e.totalPages}`,class:"sm:dt-hidden",disabled:e.isInLastPage,active:e.isInLastPage,onClick:t.withModifiers(e.gotoLastPage,["prevent"])},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):t.createCommentVNode("",!0),t.createVNode(i,{key:"page_next",disabled:e.isInLastPage,onClick:t.withModifiers(e.gotoNextPage,["prevent"])},{default:t.withCtx((()=>[R,Q])),_:1},8,["disabled","onClick"]),t.createVNode(i,{key:"page_last",disabled:e.isInLastPage,class:"dt-rounded-r-md",onClick:t.withModifiers(e.gotoLastPage,["prevent"])},{default:t.withCtx((()=>[W,A])),_:1},8,["disabled","onClick"])])),_:1})):t.createCommentVNode("",!0)])])):t.createCommentVNode("",!0)};var G=t.defineComponent({name:"PaginationSize",props:{value:{type:[Number,String],required:!0},options:{type:Array,required:!0}},emits:["input"],methods:{emitirEvento(e){this.$emit("input",e.target.value)},obtenerOptions(){return this.options}}});const U={class:"dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto"},J=t.createElementVNode("label",{for:"location",class:"dt-sr-only"},"Per page",-1),K=["value"],X=["value","selected","textContent"];G.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",U,[t.createElementVNode("div",null,[J,t.createElementVNode("select",{value:e.value,name:"per_page",class:"dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border\r\n                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset",onInput:n[0]||(n[0]=t=>e.emitirEvento(t))},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.obtenerOptions(),(n=>(t.openBlock(),t.createElementBlock("option",{key:`per_page_${n}`,value:n,selected:n===e.value,textContent:t.toDisplayString(n)},null,8,X)))),128))],40,K)])])};var Y=t.defineComponent({name:"TopPaginationWrapper",props:{withPagination:{type:Boolean,required:!1,default:!1}}});Y.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center",{"dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6":e.withPagination}])},[t.renderSlot(e.$slots,"default")],2)};var Z=t.defineComponent({name:"TableBodyCell"});const ee={class:"dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500"};Z.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("td",ee,[t.renderSlot(e.$slots,"default")])};var te=t.defineComponent({name:"TableHeadCell"});const ne={scope:"col",class:"dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"};te.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("th",ne,[t.renderSlot(e.$slots,"default")])};var oe=t.defineComponent({name:"TableRow",props:{rowIndex:{type:[Number,String],required:!1,default:0},striped:{type:Boolean,required:!1,default:!1},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup:e=>({formattedRowIndex:t.ref(parseInt(String(e.rowIndex||0)))})});oe.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("tr",{class:t.normalizeClass(["dt__table__row",{"dt-bg-white":!e.striped||e.striped&&e.formattedRowIndex%2==0,"dt-bg-gray-50":e.striped&&e.formattedRowIndex%2,"hover:dt-bg-gray-100":e.hoverable,"dt-cursor-pointer":e.hoverable&&!e.nonClickable}]),onClick:n[0]||(n[0]=t.withModifiers((t=>e.$emit("clicked")),["stop"]))},[t.renderSlot(e.$slots,"default")],2)};var ae=t.defineComponent({name:"TableWrapper"});const re={class:"dt__table_wrapper dt-overflow-auto"},le={class:"dt__table dt-min-w-full dt-divide-y dt-divide-gray-200",style:{width:"100%"}};ae.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("div",re,[t.createElementVNode("table",le,[t.renderSlot(e.$slots,"default")])])};var de=t.defineComponent({name:"TBody"});const ie={class:"dt__table__tbody"};de.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("tbody",ie,[t.renderSlot(e.$slots,"default")])};var se=t.defineComponent({name:"THead"});const ce={class:"dt__table__thead dt-bg-gray-50"},pe={class:"dt__table__thead__tr"};se.render=function(e,n,o,a,r,l){return t.openBlock(),t.createElementBlock("thead",ce,[t.createElementVNode("tr",pe,[t.renderSlot(e.$slots,"default")])])};const ue=[5,10,15,25,50,75,100];var me=t.defineComponent({name:"DataTable",components:{TableHeadCell:te,TableBodyCell:Z,TBody:de,TableRow:oe,THead:se,BottomPaginationWrapper:_,TableWrapper:ae,PaginationSize:G,TopPaginationWrapper:Y,Filter:d,Loading:m,Pagination:B},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},rounded:{type:Boolean,required:!1,default:!1},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>ue},query:{type:Object,required:!1,default:()=>({})},topPagination:{type:Boolean,required:!1,default:!1},bottomPagination:{type:Boolean,required:!1,default:!0},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["loadData","rowClicked"],setup(e,{emit:n}){var o,a;const r=t.ref({page:(null==(o=e.pagination)?void 0:o.page)||1,search:e.query.search||"",per_page:(null==(a=e.pagination)?void 0:a.per_page)||10}),l=t.computed((()=>!!e.pagination)),d=t.computed((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),i=t.computed((()=>e.rows)),s=t.computed((()=>{if(e.columns)return e.columns;if(0===e.rows.length)return{};const t=e.rows;return Object.keys(t[0]).reduce(((e,t)=>{return __spreadProps(__spreadValues({},e),{[t]:(n=t,n.toLowerCase().replace(/[-_]/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))});var n}),{})})),c=t.computed((()=>l.value?Number(r.value.per_page)*(Number(r.value.page)-1):0));t.watch((()=>__spreadValues({},r.value)),(()=>{n("loadData",r.value)}),{deep:!0,immediate:!0});const p=((e,t=400)=>{let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>e(...o)),t)}})((e=>{r.value=__spreadProps(__spreadValues({},r.value),{page:1,search:e})}));return{tableQuery:r,showPagination:l,totalData:d,tableRows:i,tableColumns:s,paginatedRowIndex:c,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{r.value.page=e},handleOnSearchChange:p,handleOnPaginationSizeChange:e=>{r.value=__spreadProps(__spreadValues({},r.value),{page:1,per_page:e})},rowClickHandler:t=>{!e.nonClickable&&e.hoverable&&n("rowClicked",t)}}}});t.pushScopeId("data-v-262a8c6c");const ge={class:"data-table dt-flex dt-flex-col"},fe={class:"dt-align-middle dt-min-w-full"},_e=t.createTextVNode(" Showing "),ve=["textContent"],be=t.createTextVNode(" to "),ye=["textContent"],he=t.createTextVNode(" of "),Ce=["textContent"],ke=t.createTextVNode(" results. "),xe=t.createTextVNode(" Showing "),we=["textContent"],Pe=t.createTextVNode(" to "),Be=["textContent"],Ne=t.createTextVNode(" of "),Ve=["textContent"],Se=t.createTextVNode(" results. ");t.popScopeId(),me.render=function(e,n,o,a,r,l){const d=t.resolveComponent("Filter"),i=t.resolveComponent("Loading"),s=t.resolveComponent("Pagination"),c=t.resolveComponent("PaginationSize"),p=t.resolveComponent("TopPaginationWrapper"),u=t.resolveComponent("TableHeadCell"),m=t.resolveComponent("THead"),g=t.resolveComponent("TableBodyCell"),f=t.resolveComponent("TableRow"),_=t.resolveComponent("TBody"),v=t.resolveComponent("TableWrapper"),b=t.resolveComponent("pagination"),y=t.resolveComponent("BottomPaginationWrapper");return t.openBlock(),t.createElementBlock("div",ge,[t.createElementVNode("div",fe,[e.filter&&e.topPagination?(t.openBlock(),t.createBlock(d,{key:0,search:e.tableQuery.search||"",onInput:e.handleOnSearchChange},null,8,["search","onInput"])):t.createCommentVNode("",!0),t.createElementVNode("div",{class:t.normalizeClass(["dt__wrapper dt-relative",{"sm:dt-rounded-lg":e.rounded}])},[e.loading?t.renderSlot(e.$slots,"loading",{key:0},(()=>[t.createVNode(i)]),{},!0):t.createCommentVNode("",!0),e.tableQuery.per_page?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[e.showPagination?(t.openBlock(),t.createBlock(p,{key:0,"with-pagination":e.topPagination},{default:t.withCtx((()=>[e.topPagination?(t.openBlock(),t.createBlock(s,{key:0,class:"dt-flex-1 dt-pr-4",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},{"pagination-info":t.withCtx((n=>[t.renderSlot(e.$slots,"pagination-info",{start:n.start,end:n.end,total:n.total},(()=>[_e,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.start)},null,8,ve),be,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.end)},null,8,ye),he,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.total)},null,8,Ce),ke]),!0)])),_:3},8,["total","current-page","per-page","onChanged"])):t.createCommentVNode("",!0),e.filter&&!e.topPagination?(t.openBlock(),t.createBlock(d,{key:1,search:e.tableQuery.search||"",onInput:e.handleOnSearchChange},null,8,["search","onInput"])):t.createCommentVNode("",!0),t.createVNode(c,{value:e.tableQuery.per_page,options:e.perPageOptions,onInput:e.handleOnPaginationSizeChange},null,8,["value","options","onInput"])])),_:3},8,["with-pagination"])):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0),t.createVNode(v,null,{default:t.withCtx((()=>[t.createVNode(m,null,{default:t.withCtx((()=>[e.sn?t.renderSlot(e.$slots,"thead-sn",{key:0},(()=>[t.createVNode(u,{class:"dt__table__thead__th_sn",textContent:t.toDisplayString("S.N.")},null,8,["textContent"])]),{},!0):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"thead",{column:e.tableColumns},(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.tableColumns,((e,n)=>(t.openBlock(),t.createBlock(u,{key:`datatable-thead-th-${n}`,textContent:t.toDisplayString(e)},null,8,["textContent"])))),128))]),!0)])),_:3}),t.createVNode(_,null,{default:t.withCtx((()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.tableRows,((n,o)=>(t.openBlock(),t.createBlock(f,{key:`datatable-row-${e.uniqueId()}-${o}`,hoverable:e.hoverable,"non-clickable":e.nonClickable,"row-index":o,striped:e.striped,onClicked:t=>e.rowClickHandler(n)},{default:t.withCtx((()=>[e.sn?t.renderSlot(e.$slots,"tbody-sn",{key:0,sn:o+1},(()=>[t.createVNode(g,{class:"dt__table__tbody_td_sn",textContent:t.toDisplayString(o+1+e.paginatedRowIndex)},null,8,["textContent"])]),!0):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"tbody",{index:o,row:n},(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.tableColumns,((o,a)=>(t.openBlock(),t.createBlock(g,{key:`datatable-tbody-td-${e.uniqueId()}-${a}`,name:o,textContent:t.toDisplayString(n[a])},null,8,["name","textContent"])))),128))]),!0)])),_:2},1032,["hoverable","non-clickable","row-index","striped","onClicked"])))),128)),0===e.tableRows.length?(t.openBlock(),t.createBlock(f,{key:0,"row-index":0},{default:t.withCtx((()=>[t.renderSlot(e.$slots,"empty",{},void 0,!0)])),_:3})):t.createCommentVNode("",!0)])),_:3})])),_:3}),e.tableQuery.per_page?(t.openBlock(),t.createElementBlock(t.Fragment,{key:2},[e.showPagination&&e.bottomPagination?(t.openBlock(),t.createBlock(y,{key:0},{default:t.withCtx((()=>[t.createVNode(b,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},{"pagination-info":t.withCtx((n=>[t.renderSlot(e.$slots,"pagination-info",{start:n.start,end:n.end,total:n.total},(()=>[xe,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.start)},null,8,we),Pe,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.end)},null,8,Be),Ne,t.createElementVNode("span",{class:"dt-font-medium",textContent:t.toDisplayString(n.total)},null,8,Ve),Se]),!0)])),_:3},8,["total","current-page","per-page","onChanged"])])),_:3})):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],2)])])},me.__scopeId="data-v-262a8c6c",e.DataTable=me,e.Pagination=B,e.PaginationLink=w,e.TableBody=Z,e.TableBodyCell=Z,e.TableHead=te,e.TableHeadCell=te,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
