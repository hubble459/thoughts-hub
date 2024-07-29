<template>
    <UCard>
        <template #header>
            <h1>{{ blog.name }}</h1>
        </template>

        <img :src="blog.cover" width="200" height="400" draggable="false">

        <template #footer>
            <h1>{{ blog.author }}</h1>
        </template>
    </UCard>
</template>

<script lang="ts" setup>
    const route = useRoute();

    const blogId = route.params.blog;

    const blog = ref({
        name: '',
        cover: '',
        id: 0,
        author: '',
    });

    function getBlog() {
        return { name: 'Example Blog ' + blogId, cover: 'https://picsum.photos/600/800?random=' + blogId, id: +blogId, author: 'Demo' };
    }

    onMounted(() => {
        blog.value = getBlog();
    });
</script>

<style>

</style>
