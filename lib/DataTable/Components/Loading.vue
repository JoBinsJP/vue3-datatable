<template>
    <div class="spinner absolute h-full w-full flex justify-center">
        <div class="spinner-item absolute w-20 h-20 rounded-full"></div>
        <div class="spinner-item absolute w-20 h-20 rounded-full"></div>
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

    .spinner {
        --pagination-loader-circle1: #74acf3;
        --pagination-loader-circle2: #88c3ee;
        --animation-duration: 3000ms;

        background: rgba(160, 210, 239, 0.14);
        z-index: 1;

        .spinner-item {
            background: var(--clr-spinner);
            animation: doubleSpinner var(--animation-duration) ease-in-out infinite;

            &:nth-of-type(1) {
                --clr-spinner: var(--pagination-loader-circle1);
            }

            &:nth-of-type(2) {
                --clr-spinner: var(--pagination-loader-circle2);
                animation-delay: calc(var(--animation-duration) / -2);
            }
        }
    }

    @keyframes doubleSpinner {
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
