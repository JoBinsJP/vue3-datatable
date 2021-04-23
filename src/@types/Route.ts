import { Component, Ref, ComputedRef }       from "vue"

export interface Route {
    title: string,
    group?: string
    component: Component
}

export interface Routes {
    [route: string]: Route
}

export type SetRoute = (href: string) => void
export type IsActive = (href: string) => boolean

export interface UsableRoute {
    setRoute: SetRoute
    isActive: IsActive
    routeUrl: Ref<string>
    currentRoute: ComputedRef<Route>
}
