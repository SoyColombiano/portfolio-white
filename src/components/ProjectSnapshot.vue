<script setup>
import { ref, onMounted } from 'vue';
import { getProjects } from '../services/projects.service'
const projects = ref([])

onMounted(async () => {
    getProjects()
        .then(data => {
            data.forEach(project => {
                projects.value.push(project.data())
            })
        })
})
</script>

<template>
    <ul>
        <li v-for="project in projects">
            <div>
                <h1>{{ project.name }}</h1>
                <p>{{ project.description }}</p>
            </div>
            <video :src="project.url" controls/>
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
}

li {
    display: flex;
    justify-content: center;
    list-style: none;
}

h1 {
    font-size: 3.2rem;
    margin: 0;
    color: #fff;
}

p {
    font-size: 1.6rem;
    margin: 0;
    color: #fff;
}

div {
    position: absolute;
    width: 35rem;
    background-color: #0000008e;
    border-radius: 1.4rem;
    padding: 1.4rem;
    box-sizing: border-box;
    z-index: 1;
}

video {
    position: relative;
    width: 35rem;
    border-radius: 1.4rem;
    text-align: center;
    background-color: #2c2c2c;
}

@media (min-width: 768px) {
    li {
        justify-content: space-between;
        align-items: center;
    }

    div {
        position: static;
        width: auto;
        background: none;
        padding: 0;
    }

    h1 {
        font-size: 4rem;
        color: #000;
    }

    p {
        font-size: 2rem;
        color: #000;
    }

    video {
        width: 35rem;
        border-radius: 1.4rem;
        text-align: center;
        background-color: rgb(0, 0, 0);
    }
}
</style>