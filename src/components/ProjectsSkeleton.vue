<script setup>
const array = Array(4)
</script>

<template>
    <ul>
        <li>
            <div class="video video-horizontal"/>
        </li>
        <li v-for="item in array">
            <div class="video"/>
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    gap: 2.4rem;
}

li {
    position: relative;
    list-style: none;
}

div {
    background-color: var(--ultra-light-gray);
}

.video {
    width: 35rem;
    height: 40rem;
    border-radius: 1.4rem;
}

.video-horizontal {
    width: 75rem;
    height: 40rem;
}

@media (min-width: 768px) {
    section {
        justify-content: space-between;
        align-items: center;
    }

    .video {
        height: 45rem;
    }
}
</style>