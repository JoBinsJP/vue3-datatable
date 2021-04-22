<template>
    <div v-if="totalPages" class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div v-show="total">
                <p class="text-sm text-gray-700">
                    <slot name="pagination-info" :currentStart="currentStart" :currentEnd="currentEnd" :total="total">
                        Showing
                        <span class="font-medium" v-text="currentStart"/>
                        to
                        <span class="font-medium" v-text="currentEnd"/>
                        of
                        <span class="font-medium" v-text="total"/>
                        results.
                    </slot>
                </p>
            </div>

            <div v-if="totalPages > 1">
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <pagination-link :disabled="isInFirstPage" class="rounded-l-md" @click.prevent="gotoFirstPage">
                        <span class="sr-only">Go to first</span>
                        &laquo;
                    </pagination-link>

                    <pagination-link :disabled="isInFirstPage" @click.prevent="gotoPreviousPage">
                        <span class="sr-only">Previous</span>
                        &lsaquo;
                    </pagination-link>

                    <template v-if="showDots('left')">
                        <pagination-link :disabled="isInFirstPage" :active="isInFirstPage" @click.prevent="gotoFirstPage">
                            1
                        </pagination-link>

                        <pagination-link>
                            ...
                        </pagination-link>
                    </template>

                    <pagination-link v-for="(page, pageIndex) in pages"
                                     :key="`pages_${pageIndex}`"
                                     :active="page === currentPage"
                                     :disabled="page === currentPage"
                                     @click.prevent="goToPageNumber(page)">
                        {{ page }}
                    </pagination-link>

                    <template v-if="showDots('right')">
                        <pagination-link>
                            ...
                        </pagination-link>

                        <pagination-link :disabled="isInLastPage" :active="isInLastPage" @click.prevent="gotoLastPage">
                            {{ totalPages }}
                        </pagination-link>
                    </template>

                    <pagination-link :disabled="isInLastPage" @click.prevent="gotoNextPage">
                        <span class="sr-only">Next</span>
                        &rsaquo;
                    </pagination-link>

                    <pagination-link :disabled="isInLastPage" class="rounded-r-md" @click.prevent="gotoLastPage">
                        <span class="sr-only">Go to Last</span>
                        &raquo;
                    </pagination-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
    }                     from "vue"
    import PaginationLink from "./PaginationLink.vue"

    const LEFT = "left"

    export default defineComponent({
        name: "Pagination",

        components: { PaginationLink },

        props: {
            total: { type: Number, required: true },
            perPage: { type: Number, required: true },
            currentPage: { type: Number, required: false, default: 1 },
            maxVisibleButtons: { type: Number, required: false, default: 5 },
        },

        emits: ["changed"],

        setup(props, { emit }) {
            const currentStart = computed(() => (props.currentPage - 1) * props.perPage + 1)
            const currentEnd = computed(() => props.total > (props.currentPage * props.perPage) ? (props.currentPage * props.perPage) : props.total)
            const totalPages = computed(() => Math.ceil(props.total / props.perPage))

            const startPage = computed(() => {
                if (props.currentPage === 1) {
                    return 1
                }

                if (props.currentPage === totalPages.value) {
                    return totalPages.value - props.maxVisibleButtons + 1
                }

                return props.currentPage - 1
            })
            const endPage = computed(() => Math.min(startPage.value + props.maxVisibleButtons - 1, totalPages.value))

            const pages = computed(() => {
                const range = []

                for (let i = startPage.value; i <= endPage.value; i += 1) {
                    if (i > 0) {
                        range.push(i)
                    }
                }

                return range
            })

            const isInFirstPage = computed(() => props.currentPage === 1)
            const isInLastPage = computed(() => props.currentPage === totalPages.value)

            const goToPageNumber = (page: number) => {
                emit("changed", page)
            }
            const gotoFirstPage = () => goToPageNumber(1)
            const gotoLastPage = () => goToPageNumber(totalPages.value)
            const gotoNextPage = () => goToPageNumber((props.currentPage >= totalPages.value) ? totalPages.value : (props.currentPage + 1))
            const gotoPreviousPage = () => goToPageNumber((props.currentPage <= 1) ? 1 : (props.currentPage - 1))

            const showDots = (position = LEFT): boolean => {
                const number = position === LEFT ? 1 : totalPages.value
                const nextNumber = position === LEFT ? 2 : totalPages.value - 1

                return !pages.value.includes(number) || !pages.value.includes(nextNumber)
            }

            return {
                currentStart,
                currentEnd,
                totalPages,
                pages,
                isInFirstPage,
                isInLastPage,
                goToPageNumber,
                gotoFirstPage,
                gotoLastPage,
                gotoNextPage,
                gotoPreviousPage,
                showDots,
            }
        },
    })
</script>
