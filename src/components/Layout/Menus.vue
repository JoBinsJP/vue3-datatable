<template>
    <nav class="flex-1 px-2 bg-white space-y-1">
        <div class="mt-8">
            <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" v-text="menu.group"/>

                <div class="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
                    <v-link v-for="(menuItem, menuItemIndex) in menu.items"
                            :key="menuItemIndex"
                            :href="menuItem.url"
                            :class="isActive(menuItem.url) ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'"
                            class="group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                        <span class="w-2.5 h-2.5 mr-4 rounded-full"
                              :class="getRandomColor()"
                              aria-hidden="true"/>
                        <span class="truncate" v-text="menuItem.label"/>
                    </v-link>
                </div>
            </template>
        </div>
    </nav>
</template>

<script type="ts">
    import {
        defineComponent,
        inject,
    }             from "vue"
    import routes from "../../routes"
    import VLink  from "../VLink.vue"

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

            const { isActive } = inject("route")

            const colors = ["bg-black-500", "bg-gray-500", "bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-pink-500"]
            const getRandomColor = () => colors[Math.floor(Math.random() * (colors.length - 1))]

            return { menus, getRandomColor, isActive }
        },
    })
</script>
