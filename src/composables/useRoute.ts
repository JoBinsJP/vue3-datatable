import {
    computed,
    ref,
}                        from "vue"
import {
    Route,
    UsableRoute,
}                        from "../@types/Route"
import NotFoundComponent from "../components/NotFoundComponent.vue"
import routes            from "../routes"

const useRoute = (): UsableRoute => {
    const routeUrl = ref(window.location.pathname)

    const currentRoute = computed<Route>(() => routes[routeUrl.value] || {
        title: "Not found!",
        component: NotFoundComponent,
    })

    const setRoute = (href: string) => {
        routeUrl.value = href
        window.history.pushState(null, routes[href].title, href)
    }

    const isActive = (href: string): boolean => routeUrl.value === href

    return {
        setRoute,
        isActive,
        routeUrl,
        currentRoute,
    }
}

export default useRoute
