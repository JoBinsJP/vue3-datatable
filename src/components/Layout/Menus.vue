<template>
    <nav class="dt-flex-1 dt-px-2 dt-bg-white dt-space-y-1">
        <div class="dt-mt-8">
            <div v-for="(menu, menuIndex) in menus" :key="menuIndex">
                <h3 class="dt-px-3 dt-text-xs dt-font-semibold dt-text-gray-500 dt-uppercase dt-tracking-wider" v-text="menu.group"/>

                <div class="dt-mt-1 dt-space-y-1" role="group">
                    <v-link v-for="(menuItem, menuItemIndex) in menu.items"
                            :key="menuItemIndex"
                            :href="menuItem.url"
                            :class="isActive(menuItem.url) ? 'dt-bg-gray-100 dt-text-gray-900' : 'dt-text-gray-700 hover:dt-text-gray-900 hover:dt-bg-gray-50'"
                            class="dt-group dt-flex dt-items-center dt-px-3 dt-py-2 dt-text-sm dt-font-medium dt-rounded-md">
                        <span class="dt-w-2.5 dt-h-2.5 dt-mr-4 dt-rounded-full"
                              :class="getRandomColor()"
                              aria-hidden="true"/>
                        <span class="dt-truncate" v-text="menuItem.label"/>
                    </v-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import {
        defineComponent,
        inject,
    }                      from "vue"
    import { UsableRoute } from "../../@types/Route"
    import routes          from "../../routes"
    import VLink           from "../VLink.vue"

    export default defineComponent({
        name: "Menus",

        components: { VLink },

        setup() {
            const menus = [
                {
                    group: "Tables",
                    items: [
                        ...Object.entries(routes)
                            .map(([url, route]) => ({ url, label: route.title, group: route.group }))
                            .filter((route) => route.group === "table"),
                    ],
                },
            ]

            const { isActive } = inject<UsableRoute>("route") as UsableRoute

            const colors = ["dt-bg-black", "dt-bg-gray-500", "dt-bg-red-500", "dt-bg-yellow-500", "dt-bg-green-500", "dt-bg-blue-500", "dt-bg-indigo-500", "dt-bg-purple-500", "dt-bg-pink-500"]
            const getRandomColor = () => colors[Math.floor(Math.random() * (colors.length - 1))]

            return { menus, getRandomColor, isActive }
        },
    })
</script>
