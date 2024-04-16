<template>
    <section class="services">
        <h1>Services</h1>
        <ul>
            <li>
                <h2>Video edition</h2>
                <p>You need an ad with Inmense Power.</p>
            </li>
            <li>
                <h2>Graphic Design</h2>
                <p>Don’t leave your visual identity to chance.</p>
            </li>
            <li>
                <h2>Facebook Ads (Meta)</h2>
                <p>Chupe cabeza</p>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.services {
    display: grid;
    justify-content: center;
}

ul {
    padding: 0;
}

h1 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 0;
}

h2 {
    margin: 0;
}

li {
    list-style: none;
}

p {
    color: var(--light-gray-color);
    font-size: 1.6rem;
    margin-top: .4rem;
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    h1 {
        font-size: 4rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }

    li {
        display: grid;
        grid-template-columns: 30% 1fr;
        padding-bottom: .8rem;
        border-bottom: solid 1px var(--ultra-light-gray);
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1.6rem;
        margin: 0;
    }
}
</style>