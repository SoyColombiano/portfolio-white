<script setup>
import Logo from './Logo.vue';
</script>

<template>
    <footer>
        <section class="info">
            <Logo />
            <section>
                <p>juane.dream@gmail.com</p>
                <p>+57 319 420 6228</p>
            </section>
        </section>
        <section class="by">
            <small>
                Developed by 
                <a href="https:/sneidernarvaez.site" target="_blank">
                    Sneider Narvaez
                </a>
            </small>
        </section>
    </footer>
</template>

<style scoped>
.info {
    display: flex;
    justify-content: space-between;
    padding-top: 6.4rem;
    padding-bottom: 3.2rem;
}

.by {
    text-align: center;
}

p {
    font-size: 1.6rem;
    color: var(--light-gray-color);
    margin: .8rem 0;
}

small {
    text-align: center;
    color: var(--light-gray-color);
    font-size: 1.2rem;
}

a {
    color: var(--light-gray-color);
}
</style>