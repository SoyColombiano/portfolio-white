<script setup>
import { toRefs, defineProps } from 'vue';
import Logo from './Logo.vue';

const props = defineProps({
    refContact: {
        type: Object,
        default: () => {}
    }
})

const { refContact } = toRefs(props)

const scrollIntoViewContact = () => {
    refContact.value.scrollIntoView({
        behavior: 'smooth'
    })
}
</script>

<template>
    <header>
        <section>
            <Logo />
        </section>
        <section>
            <button @click="scrollIntoViewContact">
                Contact
            </button>
        </section>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 1.6rem;
        cursor: pointer;
    }
</style>
