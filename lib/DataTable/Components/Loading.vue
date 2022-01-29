<template>
    <div class="dt-jg-loading dt-jg-absolute dt-h-full dt-jg-w-full">
        <div class="dt-jg-flex dt-jg-justify-center dt-jg-items-center">
            <div class="dt-jg-loading-item dt-jg-absolute dt-jg-w-20 dt-jg-h-20 dt-jg-rounded-full"></div>
            <div class="dt-jg-loading-item dt-jg-absolute dt-jg-w-20 dt-jg-h-20 dt-jg-rounded-full"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "Loading",
    })
</script>

<style lang="scss" scoped>
    $size: 75px;

    .dt-jg-loading {
        --dt-jg-pagination-loader-circle1: #74acf3;
        --dt-jg-pagination-loader-circle2: #88c3ee;
        --dt-jg-animation-duration: 3000ms;

        background: rgba(160, 210, 239, 0.14);
        z-index: 1;
        cursor: wait;

        & > div {
            height: 400px;
        }

        .dt-jg-loading-item {
            background: var(--dt-jg-clr-spinner);
            animation: dt-jg-doubleSpinner var(--dt-jg-animation-duration) ease-in-out infinite;

            &:nth-of-type(1) {
                --dt-jg-clr-spinner: var(--dt-jg-pagination-loader-circle1);
            }

            &:nth-of-type(2) {
                --dt-jg-clr-spinner: var(--dt-jg-pagination-loader-circle2);
                animation-delay: calc(var(--dt-jg-animation-duration) / -2);
            }
        }
    }

    @keyframes dt-jg-doubleSpinner {
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
