<template>
    <div class="dt__loading dt-absolute dt-h-full dt-w-full">
        <div class="dt-flex dt-justify-center dt-items-center">
            <div class="dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"></div>
            <div class="dt__loading_item dt-absolute dt-w-20 dt-h-20 dt-rounded-full"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "Loading",
    })
</script>

<style lang="scss" src="../DataTable.scss?inline" scoped>
    $size: 75px;

    .dt__loading {
        --dt-pagination-loader-circle1: #74acf3;
        --dt-pagination-loader-circle2: #88c3ee;
        --dt-animation-duration: 3000ms;

        background: rgba(160, 210, 239, 0.14);
        z-index: 1;
        cursor: wait;

        & > div {
            height: 400px;
        }

        .dt__loading_item {
            background: var(--dt-clr-spinner);
            animation: dt__doubleSpinner var(--dt-animation-duration) ease-in-out infinite;

            &:nth-of-type(1) {
                --dt-clr-spinner: var(--dt-pagination-loader-circle1);
            }

            &:nth-of-type(2) {
                --dt-clr-spinner: var(--dt-pagination-loader-circle2);
                animation-delay: calc(var(--dt-animation-duration) / -2);
            }
        }
    }

    @keyframes dt__doubleSpinner {
        0%, 100% {
            transform: scale(0.25);
            opacity: 1;
        }
        50% {
            transform: scale(1);
            opacity: 0;
        }
    }
</style>
