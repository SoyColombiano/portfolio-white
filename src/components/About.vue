<script setup>
import Button from './Button.vue';
</script>

<template>
    <div class="about">
        <section class="your-business">
            <div class="networks">
                <Button :round="true">
                    <img src="../assets/instagram.svg"/>
                </Button>
                <Button :round="true">
                    <img src="../assets/whatsapp.svg"/>
                </Button>
            </div>
            <p class="tag">Video artist, Facebook ads expert</p>
            <div class="invisible">
                <div class="background-rectangle">
                    <img 
                        class="img-juan-posando"
                        src="../assets/general.svg"
                        alt="Juan posando"
                    />
                    <h2>
                        Your 
                        <span class="text-business-white">
                            business is my 
                        </span> 
                        <span class="text-business-underline">
                            business
                        </span>
                    </h2>
                </div>
            </div>
        </section>
        <section class="hello">
            <div>
                <p class="intro">PARENTAL ADVISORY: EXPLICIT HONESTY</p>
                <p class="intro">
                    Hi what’s up!
                    Juan here, I’m from Colombia.
                    With my team, we are a Latin army with a single 
                    military objective: <span class="absolute-black-text">MAKE YOU SELL MASSIVE.</span>
                </p>
                <p class="intro">
                    I will handle your marketing campaign with 
                    immense power, humble as f**k
                </p>
                <Button>
                    LEAVE ME A MESSAGE
                </Button>
            </div>
        </section>
    </div>
</template>

<style scoped>
.about {
    position: relative;
    height: 45rem;
}

.your-business {
    /* display: flex;
    justify-content: center; */
}

.networks {
    display: flex;
    gap: 1.4rem;
    margin-bottom: 3.2rem;
    margin-left: 20rem;
}

.tag {
    font-size: 1.2rem;
    color: var(--light-gray-color);
    margin: 0;
    font-weight: 500;
}

.invisible {
    position: relative;
    width: 33rem;
    height: auto;
}
.background-rectangle {
    display: flex;
    align-items: center;
    width: 28rem;
    height: 18rem;
    background-color: var(--pink-color);
}

.img-juan-posando {
    position: absolute;
    width: 22rem;
    height: auto;
    left: 2.4rem;
    bottom: 0;
}

h2 {
    position: absolute;
    margin: 0;
    font-size: 2.4rem;
    top: 7.5rem;
}

.text-business-white {
    color: #fff;
}

.text-business-underline {
    text-decoration: underline;
}

.hello {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 6.4rem;
}

.hello > div {
    width: 80%;
    text-align: center;
}

.intro {
    font-size: 1.4rem;
    color: var(--gray-color);
}

.absolute-black-text {
    color: #000;
}

@media (min-width: 768px) {
    .about {
        display: grid;
        justify-content: center;
        grid-template-rows: 0;
        height: 45rem;
    }
    .your-business {
        display: block;
    }

    .tag {
        font-size: 1.6rem;
    }
    .invisible {
        display: flex;
        justify-content: end;
        width: 70rem;
    }

    .background-rectangle {
        width: 37rem;
        height: 24rem;
    }

    .img-juan-posando {
        width: 27rem;
        left: auto;
        right: 7.5rem;
    }

    h2 {
        font-size: 4.4rem;
        left: 0;
        top: 2.4rem;
    }

    .text-business-white {
        color: #000;
    }

    .text-business-underline {
        color: #fff;
        text-decoration: underline;
    }

    .hello {
        align-items: start;
    }

    .hello > div {
        width: 37%;
        position: absolute;
        top: 17.6rem;
        text-align: left;
    }

    .intro {
        font-size: 1.6rem;
    }
}

@media (min-width: 1024px) {
    .about {
        height: 45rem;
    }
    .invisible {
        width: 100rem;
    }

    .hello > div {
        width: 45%;
    }

    .background-rectangle {
        width: 51rem;
        height: 30rem;
    }

    .img-juan-posando {
        width: 38rem;
        right: 8.5rem;
    }

    h2 {
        font-size: 6.5rem;
        top: 0;
    }

    .intro {
        font-size: 2rem;
    }
}
</style>