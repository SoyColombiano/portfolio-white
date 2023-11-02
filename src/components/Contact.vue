<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import Button from './Button.vue';
import Fiverr from './Fiverr.vue';

const refContact = ref(null)
const emit = defineEmits(['handleRefContact'])

onMounted(() => {
    emit('handleRefContact', refContact.value)
})

</script>

<template>
    <section ref="refContact">
        <p>Want to start a project?</p>
        <h1>Let’s Talk</h1>
        <div>
            <Fiverr />
            <Button>CONTACT ME</Button>
        </div>
    </section>
</template>

<style scoped>
section {
    text-align: center;
}

p {
    font-size: 2rem;
    color: var(--light-gray-color);
    margin: 0;
}

h1 {
    font-size: 6.4rem;
    margin-top: 2.4rem;
    margin-bottom: 4.8rem;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
}
</style>