<script setup>
const array = Array(2)
</script>

<template>
    <section v-for="item in array">
        <aside>
            <div class="name"/>
            <div class="description"/>
        </aside>
        <div class="video"/>
    </section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-bottom: 2.4rem;
}

div {
    background-color: var(--ultra-light-gray);
}
.name {
    display: none;
}

.description {
    display: none;
}

.video {
    width: 35rem;
    height: 40rem;
    border-radius: 1.4rem;
}

@media (min-width: 768px) {
    section {
        justify-content: space-between;
        align-items: center;
    }
    
    .name {
        display: block;
        width: 35rem;
        height: 5rem;
        border-radius: 1.4rem;
    }

    .description {
        display: block;
        width: 30rem;
        height: 3rem;
        margin-top: 1.4rem;
        border-radius: 1.4rem;
    }

    .video {
        height: 45rem;
    }
}
</style>