<script setup>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Projects from './components/Projects.vue';
import Services from './components/Services.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

const refContact = ref(null)

const handleRefContact = (value) => {
    refContact.value = value
}
  
</script>

<template>
    <Header :refContact="refContact"/>
    <main>
        <Hero />
        <div class="container">
            <About />
            <marquee>
                INMENSE POWER INMENSE POWER INMENSE POWER INMENSE POWER
            </marquee>
            <Projects />
            <Services />
            <Contact @handleRefContact="handleRefContact"/>
        </div>
    </main>
    <Footer />
</template>

<style scoped>
marquee {
    font-size: 8rem;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
}
</style>
