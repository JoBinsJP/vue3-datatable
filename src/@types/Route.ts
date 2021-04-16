import { Component } from "vue"

export interface Route {
    title: string,
    group?: string
    component: Component
}

export interface Routes {
    [route: string]: Route
}
