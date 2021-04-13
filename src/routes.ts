import { Routes } from "./@types/Route"
import Basic      from "./components/Tables/Basic.vue"
import Striped    from "./components/Tables/Striped.vue"

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
}

export default routes
