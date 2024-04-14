<script setup>
import { defineAsyncComponent } from 'vue';

import ProjectsSkelelon from './ProjectsSkeleton.vue'
// import ProjectSnapshot from './ProjectSnapshot.vue'

const ProjectSnapshot = defineAsyncComponent(() => 
    import('./ProjectSnapshot.vue')
)
</script>

<template>
    <div>
        <p>Check my ads with</p>
        <h1>
            <span>
                IMMENSE
            </span>
            POWER
        </h1>
    </div>
    <Suspense>
        <ProjectSnapshot />
        <template #fallback>
            <ProjectsSkelelon />
        </template>
    </Suspense>
</template>

<style scoped>
 
    p {
        font-size: 2rem;
        color: var(--gray-color);
        margin: 0;
    }

    h1 {
        font-size: 8rem;
        margin: 0;
    }

    h1 > span {
        color: var(--gray-color);
    }

</style>