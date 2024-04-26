<template>
    <picture>
        <img src="../assets/logo.svg" alt="Logo"/>
        <span>Video <br /> Artist</span>
    </picture>
</template>

<style scoped>
    picture {
        display: flex;
        align-items: center;
        gap: 1.4rem;
    }

    img {
        width: 5rem;
        height: auto;
    }

    span {
        font-size: 1.4rem;
        font-weight: 400;
        color: var(--light-gray-color)
    }
</style>
