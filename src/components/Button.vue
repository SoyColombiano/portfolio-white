<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    round: {
        type: Boolean,
        default: false
    },
    click: {
        type: Function,
        default: () => {}
    }
})

const { round, click } = toRefs(props)
</script>

<template>
    <button 
        @click="click"
        :class="{'primary': !round, 'round': round}"
    >
        <slot />
    </button>
</template>

<style scoped>
    button {
        background: none;
        max-width: 20rem;
    }

    .primary {
        border-radius: 2.4rem;
        border: solid .2rem var(--color-purple);
        padding: 1.4rem 2.4rem;
        color: var(--color-purple);
        cursor: pointer;
    }

    .round {
        width: 5rem;
        height: 5rem;
        flex-shrink: 0;
        border-radius: 100%;
        border: solid .2rem var(--light-gray-color);
    }
</style>
