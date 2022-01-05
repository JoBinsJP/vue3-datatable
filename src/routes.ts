import { Routes }      from "./@types/Route"
import Basic           from "./components/Tables/Basic.vue"
import ClickableRow    from "./components/Tables/ClickableRow.vue"
import CustomLoader    from "./components/Tables/CustomLoader.vue"
import CustomRowColumn from "./components/Tables/CustomRowColumn.vue"
import EmptyTable      from "./components/Tables/EmptyTable.vue"
import Filter          from "./components/Tables/Filter.vue"
import Paginated       from "./components/Tables/Paginated.vue"
import Responsive      from "./components/Tables/Responsive.vue"
import Striped         from "./components/Tables/Striped.vue"
import TestTable       from "./components/Tables/Test.vue"

const routes: Routes = {
    "/": {
        title: "Basic",
        component: Basic,
    },

    "/table/basic": {
        title: "Basic",
        group: "table",
        component: Basic,
    },

    "/table/striped": {
        title: "Striped",
        group: "table",
        component: Striped,
    },

    "/table/custom": {
        title: "Custom Row & Column",
        group: "table",
        component: CustomRowColumn,
    },

    "/table/paginated": {
        title: "Paginated",
        group: "table",
        component: Paginated,
    },

    "/table/filter": {
        title: "Filter",
        group: "table",
        component: Filter,
    },

    "/table/loading": {
        title: "Custom Loader",
        group: "table",
        component: CustomLoader,
    },

    "/table/responsive": {
        title: "Responsive",
        group: "table",
        component: Responsive,
    },

    "/table/clickable": {
        title: "Clickable Row",
        group: "table",
        component: ClickableRow,
    },

    "/table/empty": {
        title: "Empty Table",
        group: "table",
        component: EmptyTable,
    },

    "/table/test": {
        title: "Test Table",
        group: "table",
        component: TestTable,
    },
}

export default routes
