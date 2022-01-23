var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&r(e,a,t[a]);return e},i=(e,n)=>t(e,a(n));import{defineComponent as s,pushScopeId as u,popScopeId as p,openBlock as c,createElementBlock as g,createElementVNode as v,mergeProps as b,resolveComponent as _,createVNode as f,renderSlot as m,computed as y,toHandlers as h,createBlock as P,withCtx as x,toDisplayString as w,createCommentVNode as C,withModifiers as k,Fragment as I,renderList as q,createTextVNode as B,normalizeClass as $,ref as T,watch as S}from"vue";var O=s({name:"SearchIcon"});u("data-v-d433c202");const L={xmlns:"http://www.w3.org/2000/svg",class:"dt-h-5 dt-w-5",viewBox:"0 0 20 20",fill:"currentColor"},j=[v("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1)];p(),O.render=function(e,t,a,n,d,o){return c(),g("svg",L,j)},O.__scopeId="data-v-d433c202";var N=s({name:"SearchInput",props:{value:{type:String,required:!1}}});u("data-v-0167447e");const D=["value"];p(),N.render=function(e,t,a,n,d,o){return c(),g("input",b({value:e.value,type:"search",name:"search",class:"dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2\r\n                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"},e.$attrs),null,16,D)},N.__scopeId="data-v-0167447e";var F=s({name:"Filter",components:{SearchInput:N,SearchIcon:O},props:{search:{type:String,required:!1}},emits:["input"],methods:{emitirEvento(e){this.$emit("input",e.target.value)}}});u("data-v-3786d536");const R={class:"dt__filter dt-mb-3 dt-w-full"},z={class:"dt-w-64"},H=v("label",{for:"email",class:"dt-sr-only"},"Search",-1),Q={class:"dt-relative dt-rounded-md dt-shadow-sm"},W={class:"dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"};p(),F.render=function(e,t,a,n,d,o){const r=_("SearchInput"),l=_("SearchIcon");return c(),g("div",R,[v("div",z,[H,v("div",Q,[f(r,{value:e.search,onInput:t[0]||(t[0]=t=>e.emitirEvento(t))},null,8,["value"]),v("div",W,[f(l,{class:"dt-text-gray-400"})])])])])},F.__scopeId="data-v-3786d536";var E=s({name:"Loading"});u("data-v-44d67552");const M={class:"dt__loading dt-absolute dt-h-full dt-w-full"},A=[v("div",{class:"dt-flex dt-justify-center dt-items-center"},[v("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"}),v("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"})],-1)];p(),E.render=function(e,t,a,n,d,o){return c(),g("div",M,A)},E.__scopeId="data-v-44d67552";var V=s({name:"BottomPaginationWrapper"});u("data-v-0f8ac7d3");const G={class:"dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner"},U={class:"dt-px-4 sm:dt-px-6 dt-py-4"};p(),V.render=function(e,t,a,n,d,o){return c(),g("div",G,[v("div",U,[m(e.$slots,"default",{},void 0,!0)])])},V.__scopeId="data-v-0f8ac7d3";var J=s({name:"PaginationButtons"});u("data-v-0335bb7e");const K={class:"dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px","aria-label":"Pagination"};p(),J.render=function(e,t,a,n,d,o){return c(),g("nav",K,[m(e.$slots,"default",{},void 0,!0)])},J.__scopeId="data-v-0335bb7e";var X=s({name:"PaginationInfo"});u("data-v-67dff33a");const Y={class:"dt__pagination__info"},Z={class:"dt-text-sm dt-text-gray-700"};p(),X.render=function(e,t,a,n,d,o){return c(),g("div",Y,[v("p",Z,[m(e.$slots,"default",{},void 0,!0)])])},X.__scopeId="data-v-67dff33a";var ee=s({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:y((()=>e.active?"dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200":e.disabled?"dt-cursor-not-allowed dt-text-gray-400":"dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"))})});ee.render=function(e,t,a,n,d,o){return c(),g("a",b({href:"#",class:["dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium",e.linkClasses]},h(l({},e.$attrs))),[m(e.$slots,"default",{},void 0,!0)],16)},ee.__scopeId="data-v-91e67b52";var te=s({name:"Pagination",components:{PaginationButtons:J,PaginationInfo:X,PaginationLink:ee},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:t}){const a=y((()=>(e.currentPage-1)*e.perPage+1)),n=y((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),d=y((()=>Math.ceil(e.total/e.perPage))),o=y((()=>1===e.currentPage?1:e.currentPage===d.value?d.value-e.maxVisibleButtons+1:e.currentPage-1)),r=y((()=>Math.min(o.value+e.maxVisibleButtons-1,d.value))),l=y((()=>{const e=[];for(let t=o.value;t<=r.value;t+=1)t>0&&e.push(t);return e})),i=y((()=>1===e.currentPage)),s=y((()=>e.currentPage===d.value)),u=e=>{t("changed",e)};return{currentStart:a,currentEnd:n,totalPages:d,pages:l,isInFirstPage:i,isInLastPage:s,goToPageNumber:u,gotoFirstPage:()=>u(1),gotoLastPage:()=>u(d.value),gotoNextPage:()=>u(e.currentPage>=d.value?d.value:e.currentPage+1),gotoPreviousPage:()=>u(e.currentPage<=1?1:e.currentPage-1),showDots:(e="left")=>{const t="left"===e?1:d.value,a="left"===e?2:d.value-1;return!l.value.includes(t)||!l.value.includes(a)}}}});u("data-v-3a88a7d0");const ae={key:0,class:"dt__pagination dt-bg-white dt-flex dt-items-center dt-justify-between"},ne={class:"dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between"},de=B(" Showing "),oe=["textContent"],re=B(" to "),le=["textContent"],ie=B(" of "),se=["textContent"],ue=B(" results. "),pe=v("span",{class:"dt-sr-only"},"Go to first",-1),ce=B(" « "),ge=v("span",{class:"dt-sr-only"},"Previous",-1),ve=B(" ‹ "),be=B(" 1 "),_e=B(" ... "),fe=B(" ... "),me=v("span",{class:"dt-sr-only"},"Next",-1),ye=B(" › "),he=v("span",{class:"dt-sr-only"},"Go to Last",-1),Pe=B(" » ");p(),te.render=function(e,t,a,n,d,o){const r=_("PaginationInfo"),l=_("pagination-link"),i=_("PaginationButtons");return e.totalPages?(c(),g("div",ae,[v("div",ne,[e.total?(c(),P(r,{key:0},{default:x((()=>[m(e.$slots,"pagination-info",{start:e.currentStart,end:e.currentEnd,total:e.total},(()=>[de,v("span",{class:"dt-font-medium",textContent:w(e.currentStart)},null,8,oe),re,v("span",{class:"dt-font-medium",textContent:w(e.currentEnd)},null,8,le),ie,v("span",{class:"dt-font-medium",textContent:w(e.total)},null,8,se),ue]),!0)])),_:3})):C("",!0),e.totalPages>1?(c(),P(i,{key:1},{default:x((()=>[f(l,{key:"page_first",disabled:e.isInFirstPage,class:"dt-rounded-l-md",onClick:k(e.gotoFirstPage,["prevent"])},{default:x((()=>[pe,ce])),_:1},8,["disabled","onClick"]),f(l,{key:"page_previous",disabled:e.isInFirstPage,onClick:k(e.gotoPreviousPage,["prevent"])},{default:x((()=>[ge,ve])),_:1},8,["disabled","onClick"]),e.showDots("left")?(c(),g(I,{key:0},[f(l,{key:"page_1",class:"dt-block sm:dt-hidden",disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:k(e.gotoFirstPage,["prevent"])},{default:x((()=>[be])),_:1},8,["disabled","active","onClick"]),f(l,{key:"page_divider_left",class:"sm:dt-hidden"},{default:x((()=>[_e])),_:1})],64)):C("",!0),(c(!0),g(I,null,q(e.pages,(t=>(c(),P(l,{key:`pages_${t}`,class:"dt-hidden md:dt-inline-block",active:t===e.currentPage,disabled:t===e.currentPage,onClick:k((a=>e.goToPageNumber(t)),["prevent"])},{default:x((()=>[B(w(t),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(c(),g(I,{key:1},[f(l,{key:"page_divider_right",class:"sm:dt-hidden"},{default:x((()=>[fe])),_:1}),f(l,{key:`page_${e.totalPages}`,class:"sm:dt-hidden",disabled:e.isInLastPage,active:e.isInLastPage,onClick:k(e.gotoLastPage,["prevent"])},{default:x((()=>[B(w(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):C("",!0),f(l,{key:"page_next",disabled:e.isInLastPage,onClick:k(e.gotoNextPage,["prevent"])},{default:x((()=>[me,ye])),_:1},8,["disabled","onClick"]),f(l,{key:"page_last",disabled:e.isInLastPage,class:"dt-rounded-r-md",onClick:k(e.gotoLastPage,["prevent"])},{default:x((()=>[he,Pe])),_:1},8,["disabled","onClick"])])),_:1})):C("",!0)])])):C("",!0)},te.__scopeId="data-v-3a88a7d0";var xe=s({name:"PaginationSize",props:{value:{type:[Number,String],required:!0},options:{type:Array,required:!0}},emits:["input"],methods:{emitirEvento(e){this.$emit("input",e.target.value)},obtenerOptions(){return this.options}}});u("data-v-da21a7a2");const we={class:"dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto"},Ce=v("label",{for:"location",class:"dt-sr-only"},"Per page",-1),ke=["value"],Ie=["value","selected","textContent"];p(),xe.render=function(e,t,a,n,d,o){return c(),g("div",we,[v("div",null,[Ce,v("select",{value:e.value,name:"per_page",class:"dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border\r\n                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset",onInput:t[0]||(t[0]=t=>e.emitirEvento(t))},[(c(!0),g(I,null,q(e.obtenerOptions(),(t=>(c(),g("option",{key:`per_page_${t}`,value:t,selected:t===e.value,textContent:w(t)},null,8,Ie)))),128))],40,ke)])])},xe.__scopeId="data-v-da21a7a2";var qe=s({name:"TopPaginationWrapper",props:{withPagination:{type:Boolean,required:!1,default:!1}}});qe.render=function(e,t,a,n,d,o){return c(),g("div",{class:$(["dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center",{"dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6":e.withPagination}])},[m(e.$slots,"default",{},void 0,!0)],2)},qe.__scopeId="data-v-465419a5";var Be=s({name:"TableBodyCell"});u("data-v-3bc294b8");const $e={class:"dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500"};p(),Be.render=function(e,t,a,n,d,o){return c(),g("td",$e,[m(e.$slots,"default",{},void 0,!0)])},Be.__scopeId="data-v-3bc294b8";var Te=s({name:"TableHeadCell"});u("data-v-dc83229a");const Se={scope:"col",class:"dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"};p(),Te.render=function(e,t,a,n,d,o){return c(),g("th",Se,[m(e.$slots,"default",{},void 0,!0)])},Te.__scopeId="data-v-dc83229a";var Oe=s({name:"TableRow",props:{rowIndex:{type:[Number,String],required:!1,default:0},striped:{type:Boolean,required:!1,default:!1},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup:e=>({formattedRowIndex:T(parseInt(String(e.rowIndex||0)))})});Oe.render=function(e,t,a,n,d,o){return c(),g("tr",{class:$(["dt__table__row",{"dt-bg-white":!e.striped||e.striped&&e.formattedRowIndex%2==0,"dt-bg-gray-50":e.striped&&e.formattedRowIndex%2,"hover:dt-bg-gray-100":e.hoverable,"dt-cursor-pointer":e.hoverable&&!e.nonClickable}]),onClick:t[0]||(t[0]=k((t=>e.$emit("clicked")),["stop"]))},[m(e.$slots,"default",{},void 0,!0)],2)},Oe.__scopeId="data-v-70770315";var Le=s({name:"TableWrapper"});u("data-v-02335e7d");const je={class:"dt__table_wrapper dt-overflow-auto"},Ne={class:"dt__table dt-min-w-full dt-divide-y dt-divide-gray-200",style:{width:"100%"}};p(),Le.render=function(e,t,a,n,d,o){return c(),g("div",je,[v("table",Ne,[m(e.$slots,"default",{},void 0,!0)])])},Le.__scopeId="data-v-02335e7d";var De=s({name:"TBody"});u("data-v-b77aedba");const Fe={class:"dt__table__tbody"};p(),De.render=function(e,t,a,n,d,o){return c(),g("tbody",Fe,[m(e.$slots,"default",{},void 0,!0)])},De.__scopeId="data-v-b77aedba";var Re=s({name:"THead"});u("data-v-50bb90f5");const ze={class:"dt__table__thead dt-bg-gray-50"},He={class:"dt__table__thead__tr"};p(),Re.render=function(e,t,a,n,d,o){return c(),g("thead",ze,[v("tr",He,[m(e.$slots,"default",{},void 0,!0)])])},Re.__scopeId="data-v-50bb90f5";const Qe=[5,10,15,25,50,75,100];var We=s({name:"DataTable",components:{TableHeadCell:Te,TableBodyCell:Be,TBody:De,TableRow:Oe,THead:Re,BottomPaginationWrapper:V,TableWrapper:Le,PaginationSize:xe,TopPaginationWrapper:qe,Filter:F,Loading:E,Pagination:te},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},rounded:{type:Boolean,required:!1,default:!1},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>Qe},query:{type:Object,required:!1,default:()=>({})},topPagination:{type:Boolean,required:!1,default:!1},bottomPagination:{type:Boolean,required:!1,default:!0},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["loadData","rowClicked"],setup(e,{emit:t}){var a,n;const d=T({page:(null==(a=e.pagination)?void 0:a.page)||1,search:e.query.search||"",per_page:(null==(n=e.pagination)?void 0:n.per_page)||10}),o=y((()=>!!e.pagination)),r=y((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),s=y((()=>e.rows)),u=y((()=>{if(e.columns)return e.columns;if(0===e.rows.length)return{};const t=e.rows;return Object.keys(t[0]).reduce(((e,t)=>{return i(l({},e),{[t]:(a=t,a.toLowerCase().replace(/[-_]/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))});var a}),{})})),p=y((()=>o.value?Number(d.value.per_page)*(Number(d.value.page)-1):0));S((()=>l({},d.value)),(()=>{t("loadData",d.value)}),{deep:!0,immediate:!0});const c=((e,t=400)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e(...n)),t)}})((e=>{d.value=i(l({},d.value),{page:1,search:e})}));return{tableQuery:d,showPagination:o,totalData:r,tableRows:s,tableColumns:u,paginatedRowIndex:p,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{d.value.page=e},handleOnSearchChange:c,handleOnPaginationSizeChange:e=>{d.value=i(l({},d.value),{page:1,per_page:e})},rowClickHandler:a=>{!e.nonClickable&&e.hoverable&&t("rowClicked",a)}}}});u("data-v-791605c0");const Ee={class:"data-table dt-flex dt-flex-col"},Me={class:"dt-align-middle dt-min-w-full"},Ae=B(" Showing "),Ve=["textContent"],Ge=B(" to "),Ue=["textContent"],Je=B(" of "),Ke=["textContent"],Xe=B(" results. "),Ye=B(" Showing "),Ze=["textContent"],et=B(" to "),tt=["textContent"],at=B(" of "),nt=["textContent"],dt=B(" results. ");p(),We.render=function(e,t,a,n,d,o){const r=_("Filter"),l=_("Loading"),i=_("Pagination"),s=_("PaginationSize"),u=_("TopPaginationWrapper"),p=_("TableHeadCell"),b=_("THead"),y=_("TableBodyCell"),h=_("TableRow"),k=_("TBody"),B=_("TableWrapper"),T=_("pagination"),S=_("BottomPaginationWrapper");return c(),g("div",Ee,[v("div",Me,[e.filter&&e.topPagination?(c(),P(r,{key:0,search:e.tableQuery.search||"",onInput:e.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),v("div",{class:$(["dt__wrapper dt-relative",{"sm:dt-rounded-lg":e.rounded}])},[e.loading?m(e.$slots,"loading",{key:0},(()=>[f(l)]),{},!0):C("",!0),e.tableQuery.per_page?(c(),g(I,{key:1},[e.showPagination?(c(),P(u,{key:0,"with-pagination":e.topPagination},{default:x((()=>[e.topPagination?(c(),P(i,{key:0,class:"dt-flex-1 dt-pr-4",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},{"pagination-info":x((t=>[m(e.$slots,"pagination-info",{start:t.start,end:t.end,total:t.total},(()=>[Ae,v("span",{class:"dt-font-medium",textContent:w(t.start)},null,8,Ve),Ge,v("span",{class:"dt-font-medium",textContent:w(t.end)},null,8,Ue),Je,v("span",{class:"dt-font-medium",textContent:w(t.total)},null,8,Ke),Xe]),!0)])),_:3},8,["total","current-page","per-page","onChanged"])):C("",!0),e.filter&&!e.topPagination?(c(),P(r,{key:1,search:e.tableQuery.search||"",onInput:e.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),f(s,{value:e.tableQuery.per_page,options:e.perPageOptions,onInput:e.handleOnPaginationSizeChange},null,8,["value","options","onInput"])])),_:3},8,["with-pagination"])):C("",!0)],64)):C("",!0),f(B,null,{default:x((()=>[f(b,null,{default:x((()=>[e.sn?m(e.$slots,"thead-sn",{key:0},(()=>[f(p,{class:"dt__table__thead__th_sn",textContent:w("S.N.")},null,8,["textContent"])]),{},!0):C("",!0),m(e.$slots,"thead",{column:e.tableColumns},(()=>[(c(!0),g(I,null,q(e.tableColumns,((e,t)=>(c(),P(p,{key:`datatable-thead-th-${t}`,textContent:w(e)},null,8,["textContent"])))),128))]),!0)])),_:3}),f(k,null,{default:x((()=>[(c(!0),g(I,null,q(e.tableRows,((t,a)=>(c(),P(h,{key:`datatable-row-${e.uniqueId()}-${a}`,hoverable:e.hoverable,"non-clickable":e.nonClickable,"row-index":a,striped:e.striped,onClicked:a=>e.rowClickHandler(t)},{default:x((()=>[e.sn?m(e.$slots,"tbody-sn",{key:0,sn:a+1},(()=>[f(y,{class:"dt__table__tbody_td_sn",textContent:w(a+1+e.paginatedRowIndex)},null,8,["textContent"])]),!0):C("",!0),m(e.$slots,"tbody",{index:a,row:t},(()=>[(c(!0),g(I,null,q(e.tableColumns,((a,n)=>(c(),P(y,{key:`datatable-tbody-td-${e.uniqueId()}-${n}`,name:a,textContent:w(t[n])},null,8,["name","textContent"])))),128))]),!0)])),_:2},1032,["hoverable","non-clickable","row-index","striped","onClicked"])))),128)),0===e.tableRows.length?(c(),P(h,{key:0,"row-index":0},{default:x((()=>[m(e.$slots,"empty",{},void 0,!0)])),_:3})):C("",!0)])),_:3})])),_:3}),e.tableQuery.per_page?(c(),g(I,{key:2},[e.showPagination&&e.bottomPagination?(c(),P(S,{key:0},{default:x((()=>[f(T,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},{"pagination-info":x((t=>[m(e.$slots,"pagination-info",{start:t.start,end:t.end,total:t.total},(()=>[Ye,v("span",{class:"dt-font-medium",textContent:w(t.start)},null,8,Ze),et,v("span",{class:"dt-font-medium",textContent:w(t.end)},null,8,tt),at,v("span",{class:"dt-font-medium",textContent:w(t.total)},null,8,nt),dt]),!0)])),_:3},8,["total","current-page","per-page","onChanged"])])),_:3})):C("",!0)],64)):C("",!0)],2)])])},We.__scopeId="data-v-791605c0";export{We as DataTable,te as Pagination,ee as PaginationLink,Be as TableBody,Be as TableBodyCell,Te as TableHead,Te as TableHeadCell};
