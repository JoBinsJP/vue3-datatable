import {
    computed,
    ref,
}                        from "vue"
import { Route }         from "../@types/Route"
import NotFoundComponent from "../components/NotFoundComponent.vue"
import routes            from "../routes"

const useRoute = () => {
    const routeUrl = ref(window.location.pathname)

    const currentRoute = computed<Route>(() => routes[routeUrl.value] || {
        title: "Not found!",
        component: NotFoundComponent,
    })

    const setRoute = (href: string) => {
        routeUrl.value = href
        window.history.pushState(null, routes[href].title, href)
    }

    return {
        setRoute,
        routeUrl,
        currentRoute,
    }
}

export default useRoute
