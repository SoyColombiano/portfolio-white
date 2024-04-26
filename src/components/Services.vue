<template>
    <section class="services">
        <h1>Services</h1>
        <ul>
            <li>
                <h2>Video editing</h2>
                <p>You need an ad with Immense Power.</p>
            </li>
            <li>
                <h2>Filmmaking</h2>
                <p>You want me to shot your ideas</p>
            </li>
            <li>
                <h2>Youtube Editor</h2>
                <p>Do you want me to edit for your channel? Let's talk</p>
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