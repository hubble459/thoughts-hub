<template>
    <section>
        <div class="flex flex-row place-items-center justify-between px-8">
            <div>
                <h1 class="text-5xl">Thoughts Hub</h1>
                <sub>Welcome! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius voluptatibus ipsa voluptas adipisci deleniti odio nesciunt. Perspiciatis nobis rem animi enim dolorum magni, maiores, facilis cumque quia ex accusamus.</sub>
            </div>
            <img :src="logo" alt="thoughts hub logo" draggable="false">
        </div>

        <UCard>
            <template #header>
                <h1>Featured 💥</h1>
            </template>

            <UCarousel ref="carousel" v-slot="{ item }" :items="items" :ui="{ item: 'snap-start' }">
                <ULink as="div" :to="'/blog/' + item.id" class="px-6">
                    <img :src="item.cover" width="200" height="400" draggable="false">
                    <span>{{ item.name }}</span>
                </ULink>
            </UCarousel>
        </UCard>
        <br>
        <UCard>
            <template #header>
                <h1>Fresh Blogs 💃</h1>
            </template>

            <div class="flex flex-row flex-wrap gap-8">
                <ULink v-for="item in items" :key="item.name" as="div" :to="'/blog/' + item.id" >
                    <img :src="item.cover" width="200" height="400" draggable="false">
                    <span>{{ item.name }}</span>
                </ULink>
            </div>
        </UCard>

        <footer class="my-10">
            &copy;thoughts-hub 2024
        </footer>
    </section>
</template>

<script lang="ts" setup>
    import logo from '../assets/logo.png';

    const items = new Array(10).fill(0).map((_, index) => ({ name: 'Example Blog ' + index, cover: 'https://picsum.photos/600/800?random=' + index, id: index }));

    const carousel = ref();

    onMounted(() => {
        setInterval(() => {
            if (!carousel.value) return;

            if (carousel.value.page === carousel.value.pages) {
                return carousel.value.select(0);
            }

            carousel.value.next();
        }, 3000);
    });

</script>
