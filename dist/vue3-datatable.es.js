var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&d(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&d(e,a,t[a]);return e},i=(e,n)=>t(e,a(n));import{defineComponent as s,openBlock as u,createElementBlock as p,createElementVNode as c,mergeProps as g,resolveComponent as b,createVNode as f,pushScopeId as v,popScopeId as m,renderSlot as y,computed as _,toHandlers as h,createBlock as P,withCtx as w,toDisplayString as x,createCommentVNode as C,withModifiers as k,Fragment as I,renderList as q,createTextVNode as B,normalizeClass as $,ref as T,watch as S}from"vue";var O=s({name:"SearchIcon"});const L={xmlns:"http://www.w3.org/2000/svg",class:"dt-h-5 dt-w-5",viewBox:"0 0 20 20",fill:"currentColor"},j=[c("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"},null,-1)];O.render=function(e,t,a,n,r,l){return u(),p("svg",L,j)};var N=s({name:"SearchInput",props:{value:{type:String,required:!0}}});const F=["value"];N.render=function(e,t,a,n,r,l){return u(),p("input",g({value:e.value,type:"search",name:"search",class:"dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2\n                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"},e.$attrs),null,16,F)};var R=s({name:"Filter",components:{SearchInput:N,SearchIcon:O},props:{search:{type:String,required:!0}},emits:["input"]});const z={class:"dt__filter dt-mb-3 dt-w-full"},D={class:"dt-w-64"},H=c("label",{for:"email",class:"dt-sr-only"},"Search",-1),W={class:"dt-relative dt-rounded-md dt-shadow-sm"},Q={class:"dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none"};R.render=function(e,t,a,n,r,l){const d=b("SearchInput"),o=b("SearchIcon");return u(),p("div",z,[c("div",D,[H,c("div",W,[f(d,{value:e.search,onInput:t[0]||(t[0]=t=>e.$emit("input",t.target.value))},null,8,["value"]),c("div",Q,[f(o,{class:"dt-text-gray-400"})])])])])};var M=s({name:"Loading"});v("data-v-685865e4");const A={class:"dt__loading dt-absolute dt-h-full dt-w-full"},E=[c("div",{class:"dt-flex dt-justify-center dt-items-center"},[c("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"}),c("div",{class:"dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"})],-1)];m(),M.render=function(e,t,a,n,r,l){return u(),p("div",A,E)},M.__scopeId="data-v-685865e4";var V=s({name:"BottomPaginationWrapper"});const G={class:"dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner"},U={class:"dt-px-4 sm:dt-px-6 dt-py-4"};V.render=function(e,t,a,n,r,l){return u(),p("div",G,[c("div",U,[y(e.$slots,"default")])])};var J=s({name:"PaginationButtons"});const K={class:"dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px","aria-label":"Pagination"};J.render=function(e,t,a,n,r,l){return u(),p("nav",K,[y(e.$slots,"default")])};var X=s({name:"PaginationInfo"});const Y={class:"dt__pagination__info"},Z={class:"dt-text-sm dt-text-gray-700"};X.render=function(e,t,a,n,r,l){return u(),p("div",Y,[c("p",Z,[y(e.$slots,"default")])])};var ee=s({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:_((()=>e.active?"dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200":e.disabled?"dt-cursor-not-allowed dt-text-gray-400":"dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"))})});ee.render=function(e,t,a,n,r,l){return u(),p("a",g({href:"#",class:["dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium",e.linkClasses]},h(o({},e.$attrs))),[y(e.$slots,"default")],16)};var te=s({name:"Pagination",components:{PaginationButtons:J,PaginationInfo:X,PaginationLink:ee},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:t}){const a=_((()=>(e.currentPage-1)*e.perPage+1)),n=_((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),r=_((()=>Math.ceil(e.total/e.perPage))),l=_((()=>1===e.currentPage?1:e.currentPage===r.value?r.value-e.maxVisibleButtons+1:e.currentPage-1)),d=_((()=>Math.min(l.value+e.maxVisibleButtons-1,r.value))),o=_((()=>{const e=[];for(let t=l.value;t<=d.value;t+=1)t>0&&e.push(t);return e})),i=_((()=>1===e.currentPage)),s=_((()=>e.currentPage===r.value)),u=e=>{t("changed",e)};return{currentStart:a,currentEnd:n,totalPages:r,pages:o,isInFirstPage:i,isInLastPage:s,goToPageNumber:u,gotoFirstPage:()=>u(1),gotoLastPage:()=>u(r.value),gotoNextPage:()=>u(e.currentPage>=r.value?r.value:e.currentPage+1),gotoPreviousPage:()=>u(e.currentPage<=1?1:e.currentPage-1),showDots:(e="left")=>{const t="left"===e?1:r.value,a="left"===e?2:r.value-1;return!o.value.includes(t)||!o.value.includes(a)}}}});const ae={key:0,class:"dt__pagination dt-bg-white dt-flex dt-items-center dt-justify-between"},ne={class:"dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between"},re=B(" Showing "),le=["textContent"],de=B(" to "),oe=["textContent"],ie=B(" of "),se=["textContent"],ue=B(" results. "),pe=c("span",{class:"dt-sr-only"},"Go to first",-1),ce=B(" « "),ge=c("span",{class:"dt-sr-only"},"Previous",-1),be=B(" ‹ "),fe=B(" 1 "),ve=B(" ... "),me=B(" ... "),ye=c("span",{class:"dt-sr-only"},"Next",-1),_e=B(" › "),he=c("span",{class:"dt-sr-only"},"Go to Last",-1),Pe=B(" » ");te.render=function(e,t,a,n,r,l){const d=b("PaginationInfo"),o=b("pagination-link"),i=b("PaginationButtons");return e.totalPages?(u(),p("div",ae,[c("div",ne,[e.total?(u(),P(d,{key:0},{default:w((()=>[y(e.$slots,"pagination-info",{start:e.currentStart,end:e.currentEnd,total:e.total},(()=>[re,c("span",{class:"dt-font-medium",textContent:x(e.currentStart)},null,8,le),de,c("span",{class:"dt-font-medium",textContent:x(e.currentEnd)},null,8,oe),ie,c("span",{class:"dt-font-medium",textContent:x(e.total)},null,8,se),ue]))])),_:3})):C("",!0),e.totalPages>1?(u(),P(i,{key:1},{default:w((()=>[f(o,{key:"page_first",disabled:e.isInFirstPage,class:"dt-rounded-l-md",onClick:k(e.gotoFirstPage,["prevent"])},{default:w((()=>[pe,ce])),_:1},8,["disabled","onClick"]),f(o,{key:"page_previous",disabled:e.isInFirstPage,onClick:k(e.gotoPreviousPage,["prevent"])},{default:w((()=>[ge,be])),_:1},8,["disabled","onClick"]),e.showDots("left")?(u(),p(I,{key:0},[f(o,{key:"page_1",class:"dt-block sm:dt-hidden",disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:k(e.gotoFirstPage,["prevent"])},{default:w((()=>[fe])),_:1},8,["disabled","active","onClick"]),f(o,{key:"page_divider_left",class:"sm:dt-hidden"},{default:w((()=>[ve])),_:1})],64)):C("",!0),(u(!0),p(I,null,q(e.pages,(t=>(u(),P(o,{key:`pages_${t}`,class:"dt-hidden md:dt-inline-block",active:t===e.currentPage,disabled:t===e.currentPage,onClick:k((a=>e.goToPageNumber(t)),["prevent"])},{default:w((()=>[B(x(t),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(u(),p(I,{key:1},[f(o,{key:"page_divider_right",class:"sm:dt-hidden"},{default:w((()=>[me])),_:1}),f(o,{key:`page_${e.totalPages}`,class:"sm:dt-hidden",disabled:e.isInLastPage,active:e.isInLastPage,onClick:k(e.gotoLastPage,["prevent"])},{default:w((()=>[B(x(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):C("",!0),f(o,{key:"page_next",disabled:e.isInLastPage,onClick:k(e.gotoNextPage,["prevent"])},{default:w((()=>[ye,_e])),_:1},8,["disabled","onClick"]),f(o,{key:"page_last",disabled:e.isInLastPage,class:"dt-rounded-r-md",onClick:k(e.gotoLastPage,["prevent"])},{default:w((()=>[he,Pe])),_:1},8,["disabled","onClick"])])),_:1})):C("",!0)])])):C("",!0)};var we=s({name:"PaginationSize",props:{value:{type:[Number,String],required:!0},options:{type:Array,required:!0}},emits:["input"]});const xe={class:"dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto"},Ce=c("label",{for:"location",class:"dt-sr-only"},"Per page",-1),ke=["value"],Ie=["value","selected","textContent"];we.render=function(e,t,a,n,r,l){return u(),p("div",xe,[c("div",null,[Ce,c("select",{value:e.value,name:"per_page",class:"dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border\n                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset",onInput:t[0]||(t[0]=t=>e.$emit("input",t.target.value))},[(u(!0),p(I,null,q(e.options,(t=>(u(),p("option",{key:`per_page_${t}`,value:t,selected:t===e.value,textContent:x(t)},null,8,Ie)))),128))],40,ke)])])};var qe=s({name:"TopPaginationWrapper",props:{withPagination:{type:Boolean,required:!1,default:!1}}});qe.render=function(e,t,a,n,r,l){return u(),p("div",{class:$(["dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center",{"dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6":e.withPagination}])},[y(e.$slots,"default")],2)};var Be=s({name:"TableBodyCell"});const $e={class:"dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500"};Be.render=function(e,t,a,n,r,l){return u(),p("td",$e,[y(e.$slots,"default")])};var Te=s({name:"TableHeadCell"});const Se={scope:"col",class:"dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"};Te.render=function(e,t,a,n,r,l){return u(),p("th",Se,[y(e.$slots,"default")])};var Oe=s({name:"TableRow",props:{rowIndex:{type:[Number,String],required:!1,default:0},striped:{type:Boolean,required:!1,default:!1},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["clicked"],setup:e=>({formattedRowIndex:T(parseInt(e.rowIndex)||0)})});Oe.render=function(e,t,a,n,r,l){return u(),p("tr",{class:$(["dt__table__row",{"dt-bg-white":!e.striped||e.striped&&e.formattedRowIndex%2==0,"dt-bg-gray-50":e.striped&&e.formattedRowIndex%2,"hover:dt-bg-gray-100":e.hoverable,"dt-cursor-pointer":e.hoverable&&!e.nonClickable}]),onClick:t[0]||(t[0]=k((t=>e.$emit("clicked")),["stop"]))},[y(e.$slots,"default")],2)};var Le=s({name:"TableWrapper"});const je={class:"dt__table_wrapper dt-overflow-auto"},Ne={class:"dt__table dt-min-w-full dt-divide-y dt-divide-gray-200"};Le.render=function(e,t,a,n,r,l){return u(),p("div",je,[c("table",Ne,[y(e.$slots,"default")])])};var Fe=s({name:"TBody"});const Re={class:"dt__table__tbody"};Fe.render=function(e,t,a,n,r,l){return u(),p("tbody",Re,[y(e.$slots,"default")])};var ze=s({name:"THead"});const De={class:"dt__table__thead dt-bg-gray-50"},He={class:"dt__table__thead__tr"};ze.render=function(e,t,a,n,r,l){return u(),p("thead",De,[c("tr",He,[y(e.$slots,"default")])])};const We=[5,10,15,25,50,75,100],Qe=s({name:"DataTable",components:{TableHeadCell:Te,TableBodyCell:Be,TBody:Fe,TableRow:Oe,THead:ze,BottomPaginationWrapper:V,TableWrapper:Le,PaginationSize:we,TopPaginationWrapper:qe,Filter:R,Loading:M,Pagination:te},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>We},query:{type:Object,required:!1,default:()=>({})},topPagination:{type:Boolean,required:!1,default:!1},bottomPagination:{type:Boolean,required:!1,default:!0},hoverable:{type:Boolean,required:!1,default:!1},nonClickable:{type:Boolean,required:!1,default:!1}},emits:["loadData","rowClicked"],setup(e,{emit:t}){var a,n;const r=T({page:(null==(a=e.pagination)?void 0:a.page)||1,search:e.query.search||"",per_page:(null==(n=e.pagination)?void 0:n.per_page)||10}),l=_((()=>!!e.pagination)),d=_((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),s=_((()=>e.rows)),u=_((()=>e.columns?e.columns:0===e.rows.length?{}:Object.keys(e.rows[0]).reduce(((e,t)=>{return i(o({},e),{[t]:(a=t,a.toLowerCase().replace(/[-_]/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "))});var a}),{}))),p=_((()=>l.value?r.value.per_page*(r.value.page-1):0));S((()=>o({},r.value)),(()=>{t("loadData",r.value)}),{deep:!0,immediate:!0});const c=((e,t=400)=>{let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e(...n)),t)}})((e=>{r.value=i(o({},r.value),{page:1,search:e})}));return{tableQuery:r,showPagination:l,totalData:d,tableRows:s,tableColumns:u,paginatedRowIndex:p,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{r.value.page=e},handleOnSearchChange:c,handleOnPaginationSizeChange:e=>{r.value=i(o({},r.value),{page:1,per_page:e})},rowClickHandler:a=>{!e.nonClickable&&e.hoverable&&t("rowClicked",a)}}}});const Me={class:"data-table dt-flex dt-flex-col"},Ae={class:"dt-align-middle dt-min-w-full"},Ee={class:"dt__wrapper dt-relative dt-overflow-hidden sm:dt-rounded-lg"};Qe.render=function(e,t,a,n,r,l){const d=b("Filter"),o=b("Loading"),i=b("Pagination"),s=b("PaginationSize"),g=b("TopPaginationWrapper"),v=b("TableHeadCell"),m=b("THead"),_=b("TableBodyCell"),h=b("TableRow"),k=b("TBody"),B=b("TableWrapper"),$=b("pagination"),T=b("BottomPaginationWrapper");return u(),p("div",Me,[c("div",Ae,[e.filter&&e.topPagination?(u(),P(d,{key:0,search:e.tableQuery.search,onInput:e.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),c("div",Ee,[e.loading?y(e.$slots,"loading",{key:0},(()=>[f(o)])):C("",!0),e.showPagination?(u(),P(g,{key:1,"with-pagination":e.topPagination},{default:w((()=>[e.topPagination?(u(),P(i,{key:0,class:"dt-flex-1 dt-pr-4",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"])):C("",!0),e.filter&&!e.topPagination?(u(),P(d,{key:1,search:e.tableQuery.search,onInput:e.handleOnSearchChange},null,8,["search","onInput"])):C("",!0),f(s,{value:e.tableQuery.per_page,options:e.perPageOptions,onInput:e.handleOnPaginationSizeChange},null,8,["value","options","onInput"])])),_:1},8,["with-pagination"])):C("",!0),f(B,null,{default:w((()=>[f(m,null,{default:w((()=>[e.sn?y(e.$slots,"thead-sn",{key:0},(()=>[f(v,{textContent:x("S.N.")},null,8,["textContent"])])):C("",!0),y(e.$slots,"thead",{column:e.tableColumns},(()=>[(u(!0),p(I,null,q(e.tableColumns,((e,t)=>(u(),P(v,{key:`datatable-thead-th-${t}`,textContent:x(e)},null,8,["textContent"])))),128))]))])),_:3}),f(k,null,{default:w((()=>[(u(!0),p(I,null,q(e.tableRows,((t,a)=>(u(),P(h,{key:`datatable-row-${e.uniqueId()}-${a}`,hoverable:e.hoverable,"non-clickable":e.nonClickable,"row-index":a,striped:e.striped,onClicked:a=>e.rowClickHandler(t)},{default:w((()=>[e.sn?y(e.$slots,"tbody-sn",{key:0,sn:a+1},(()=>[f(_,{textContent:x(a+1+e.paginatedRowIndex)},null,8,["textContent"])])):C("",!0),y(e.$slots,"tbody",{index:a,row:t},(()=>[(u(!0),p(I,null,q(e.tableColumns,((a,n)=>(u(),P(_,{key:`datatable-tbody-td-${e.uniqueId()}-${n}`,name:a,textContent:x(t[n])},null,8,["name","textContent"])))),128))]))])),_:2},1032,["hoverable","non-clickable","row-index","striped","onClicked"])))),128)),0===e.tableRows.length?(u(),P(h,{key:0,"row-index":0},{default:w((()=>[y(e.$slots,"empty")])),_:3})):C("",!0)])),_:3})])),_:3}),e.showPagination&&e.bottomPagination?(u(),P(T,{key:2},{default:w((()=>[f($,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"])])),_:1})):C("",!0)])])])};export{Qe as DataTable,te as Pagination,ee as PaginationLink,Be as TableBody,Be as TableBodyCell,Te as TableHead,Te as TableHeadCell};