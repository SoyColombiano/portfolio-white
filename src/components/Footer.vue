<script setup>
import Fiverr from './Fiverr.vue';
import Contact from './Contact.vue';
</script>

<template>
    <footer>
        <section class="ramper">
            <section class="info">
               <Contact @handleRefContact="handleRefContact" />
            </section>
            <section>
                <Fiverr />
            </section>
        </section>
        <section class="by">
            <small>
                Developed by 
                <a href="https://sneidernarvaez.site" target="_blank">
                    Sneider Narvaez
                </a>
            </small>
        </section>
    </footer>
</template>

<style scoped>
.ramper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    gap: 4rem;
}

.info {
    display: flex;
    flex-direction: column;
    padding-top: 6.4rem;
    padding-bottom: 3.2rem;
    gap: 3.4rem;
}

.by {
    text-align: center;
}

small {
    text-align: center;
    color: var(--light-gray-color);
    font-size: 1.2rem;
}

a {
    color: var(--light-gray-color);
}

@media (min-width: 768px) {
    .ramper {
        flex-direction: row;
        justify-content: space-between;
        padding: 6.4rem 0;
        margin-bottom: 0;
    }
}
</style>