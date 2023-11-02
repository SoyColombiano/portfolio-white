<script setup>
import { defineAsyncComponent } from 'vue';

import ProjectsSkelelon from './ProjectsSkeleton.vue'

const ProjectSnapshot = defineAsyncComponent(() => 
    import('./ProjectSnapshot.vue')
)
</script>

<template>
    <Suspense>
        <template #default>
            <ProjectSnapshot />
        </template>
        <template #fallback>
            <ProjectsSkelelon />
        </template>
    </Suspense>
</template>