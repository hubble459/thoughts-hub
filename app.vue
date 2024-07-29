<template>
    <UContainer>
        <svg class="absolute inset-0 z-0 pointer-events-none opacity-30" viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E8DAFF" d="M34.9,-34.7C44.3,-16,50.4,-1.5,50.2,16.3C50,34.2,43.5,55.4,30.8,60.1C18.1,64.8,-0.8,52.9,-21,43.3C-41.2,33.7,-62.7,26.4,-67.7,13C-72.8,-0.5,-61.5,-20.3,-47.5,-40C-33.4,-59.7,-16.7,-79.5,-2,-77.9C12.7,-76.3,25.5,-53.4,34.9,-34.7Z" transform="translate(100 100)" />
        </svg>
        <UHorizontalNavigation :links="links" />
        <NuxtPage />
    </UContainer>
</template>

<script setup lang="ts">
    const config = useAppConfig();

    useSeoMeta({
        title: config.title,
        ogTitle: config.title,
        description: config.description,
        ogDescription: config.description,
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    });

    const links = [
        [
            {
                label: 'Thoughts Hub',
                icon: 'i-heroicons-light-bulb-solid',
                to: '/',
            },
        ],
        [
            {
                label: 'About',
                to: '/about',
            },
        ],
    ];
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 200ms;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
