<script setup>
import { onMounted, ref } from 'vue';
import { getHeaderVideo } from '../services/headerVideo.service'

const url = ref(null)

onMounted(async () => {
    const data = await getHeaderVideo()
    data.forEach(video => {
        url.value = video.data().url
    })
})
</script>

<template>
    <section class="hero">
        <aside>
            <video :src="url" autoplay/>
            <p>Audiovisual design, Facebook ads, Motion graphics, VFX Artist</p>
            <div class="word-bx">
              <h1>I am the</h1>
              <div>
                  <ul class="words">
                      <li>Sales</li>
                      <li>Truth</li>
                      <li>Way</li>
                  </ul>
              </div>
            </div>
        </aside>
    </section>
</template>

<style scoped>
.hero {
    padding-top: 2.4rem;
    height: 50vh;
}

.text-animation {
    display: flex;
    position: absolute;
    width: 100%;
    height: 30rem;
    padding: 0 2.4rem;
    flex-direction: column;
    left: 0;
    background-color: rgb(219, 219, 219);
    box-sizing: border-box;
}

aside {
    position: relative;
}

h1 {
    display: inline;
    font-size: 3.2rem;
    margin: 0;
    float: left;
}

p {
  font-size: 1.2rem;
  color: var(--light-gray-color);
}

.word-bx{
    position: absolute;
    width: 65%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div {
    overflow: hidden;
    position: relative;
    display: flex;
    height: 8.7rem;
}

li {
    font-weight: 700;
    font-size: 3.2rem;
    padding: 0;
    height: 4.3rem;
    margin-bottom: 4.5rem;
    display: block;
}

.words { 
  padding-left: 1.6rem;
    animation: words 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; 
}

@keyframes words {
    0% {
         margin-top: -360px; 
        }
    5% {
         margin-top: -270px; 
        }
    25% {
         margin-top: -270px; 
        }
    30% {
         margin-top: -180px; 
        }
    50% {
         margin-top: -180px; 
        }
    55% {
         margin-top: -90px; 
        }
    75% {
         margin-top: -90px; 
        }
    80% {
         margin-top: 0px; 
        }
    99.99% {
         margin-top: 0px; 
        }
    100% {
         margin-top: -270px; 
        }
}

@media (min-width: 480px) {
    .word-bx{
        width: auto;
    }

    h1 {
      font-size: 4rem;
    }

    p {
        font-size: 1.6rem;
    }

    li {
      font-size: 4rem;
    }
}

@media (min-width: 768px) {
    .hero {
        position: relative;
        height: 52vh;
    }

    .word-bx{
        width: auto;
    }

    h1 {
      font-size: 4.8rem;
    }

    p {
        font-size: 1.6rem;
    }

    li {
      font-size: 4.8rem;
    }
}

@media (min-width: 900px) {
    .hero {
        position: relative;
        height: 58vh;
    }

    h1 {
      font-size: 6.4rem;
    }

    li {
      font-size: 6.4rem;
    }
}
</style>