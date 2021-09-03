<template>
    <div v-if="totalPages" class="dt__pagination dt-bg-white dt-px-4 dt-flex dt-items-center dt-justify-between sm:dt-px-6">
        <div class="dt-hidden sm:dt-flex-1 sm:dt-flex sm:dt-items-center sm:dt-justify-between">
            <div v-show="total">
                <p class="dt__pagination__info dt-text-sm dt-text-gray-700">
                    <slot name="pagination-info" :currentStart="currentStart" :currentEnd="currentEnd" :total="total">
                        Showing
                        <span class="dt-font-medium" v-text="currentStart"/>
                        to
                        <span class="dt-font-medium" v-text="currentEnd"/>
                        of
                        <span class="dt-font-medium" v-text="total"/>
                        results.
                    </slot>
                </p>
            </div>

            <div v-if="totalPages > 1">
                <nav class="dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px" aria-label="Pagination">
                    <pagination-link :disabled="isInFirstPage" class="dt-rounded-l-md" @click.prevent="gotoFirstPage">
                        <span class="dt-sr-only">Go to first</span>
                        &laquo;
                    </pagination-link>

                    <pagination-link :disabled="isInFirstPage" @click.prevent="gotoPreviousPage">
                        <span class="dt-sr-only">Previous</span>
                        &lsaquo;
                    </pagination-link>

                    <template v-if="showDots('left')">
                        <pagination-link class="dt-block sm:dt-hidden" :disabled="isInFirstPage" :active="isInFirstPage" @click.prevent="gotoFirstPage">
                            1
                        </pagination-link>

                        <pagination-link class="sm:dt-hidden">
                            ...
                        </pagination-link>
                    </template>

                    <pagination-link v-for="(page, pageIndex) in pages"
                                     :key="`pages_${pageIndex}`"
                                     class="dt-hidden md:dt-inline-block"
                                     :active="page === currentPage"
                                     :disabled="page === currentPage"
                                     @click.prevent="goToPageNumber(page)">
                        {{ page }}
                    </pagination-link>

                    <template v-if="showDots('right')">
                        <pagination-link class="sm:dt-hidden">
                            ...
                        </pagination-link>

                        <pagination-link class="sm:dt-hidden" :disabled="isInLastPage" :active="isInLastPage" @click.prevent="gotoLastPage">
                            {{ totalPages }}
                        </pagination-link>
                    </template>

                    <pagination-link :disabled="isInLastPage" @click.prevent="gotoNextPage">
                        <span class="dt-sr-only">Next</span>
                        &rsaquo;
                    </pagination-link>

                    <pagination-link :disabled="isInLastPage" class="dt-rounded-r-md" @click.prevent="gotoLastPage">
                        <span class="dt-sr-only">Go to Last</span>
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
