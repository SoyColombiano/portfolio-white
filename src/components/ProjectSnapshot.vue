<script setup>
import { ref, onMounted } from 'vue';
import { getProjects } from '../services/projects.service'
import ProjectsSkelelon from './ProjectsSkeleton.vue'

const projects = ref([])
const loading = ref(true)

onMounted(async () => {
    getProjects()
        .then(data => {
            data?.forEach(project => {
                projects.value.push(project.data())
            })
            loading.value = false
        })
})
</script>

<template>
    <ul v-show="!loading">
        <li v-for="project in projects">
            <div 
                :class="{
                    'video-horizontal': project.horizontal,
                    'height-100': project.horizontal,
                }"
            >
                <h1>{{ project.name }}</h1>
                <p>{{ project.description }}</p>
            </div>
            <video 
                :src="project.url" 
                :class="{
                    'video-horizontal': project.horizontal,
                }"
                controls
            />
        </li>
    </ul>
    <ProjectsSkelelon v-show="loading" />
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

li:hover div {
    display: flex
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
    display: none;
    position: absolute;
    margin-top: 0;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    width: 35rem;
    height: 80%;
    background: linear-gradient(#0000008e 80%, transparent);
    border-radius: 1.4rem;
    padding: 1.4rem;
    box-sizing: border-box;
    z-index: 1;
}

.height-100 {
    height: 45%;
}

video {
    width: 35rem;
    border-radius: 1.4rem;
    text-align: center;
    background-color: #2c2c2c;
}

.video-horizontal {
    width: 100%;
}

@media (min-width: 768px) {
    li {
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
    }

    video {
        width: 35rem;
        border-radius: 1.4rem;
        text-align: center;
        background-color: rgb(0, 0, 0);
    }
}
</style>