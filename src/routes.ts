import { Routes }      from "./@types/Route"
import Basic           from "./components/Tables/Basic.vue"
import CustomRowColumn from "./components/Tables/CustomRowColumn.vue"
import Striped         from "./components/Tables/Striped.vue"

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
}

export default routes
