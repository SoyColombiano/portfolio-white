<script setup>
import { onMounted, ref, defineEmits } from 'vue';
import Button from './Button.vue';
import Logo from './Logo.vue';

const refContact = ref(null)
const emit = defineEmits(['handleRefContact'])

onMounted(() => {
    emit('handleRefContact', refContact.value)
})

</script>

<template>
    <section class="contact-me">
        <p class="wantToStartAProject">
            Want to start a project?
        </p>
        <h1 class="letTalk">Let’s Talk</h1>
        <Button>CONTACT ME</Button>
    </section>
    <section>
        <section class="container">
            <p class="contact-info">
                juane.dream@gmail.com
            </p>
            <p class="contact-info">
                +57 319 420 6228
            </p>
        </section>
        <Logo />
    </section>
</template>

<style scoped>
.contact-me {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}
.wantToStartAProject {
    font-size: 2rem;
    color: var(--light-gray-color);
    margin: 0;
}

.letTalk {
    font-size: 6.4rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
}

.container {
    margin-bottom: 1.4rem;
}

.contact-info {
    font-size: 2rem;
    color: var(--light-gray-color);
    margin: 0;
}

</style>