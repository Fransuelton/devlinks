<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
  imageUrl: string;
}>();
</script>

<template>
  <section class="profile">
    <img :src="props.imageUrl" :alt="`Foto de perfil de ${props.name}`" />
    <h1>{{ props.name }}</h1>
    <h2>{{ props.title }}</h2>
  </section>
</template>

<style scoped>
.profile {
  padding: 1rem;
}

.profile img {
  width: 12rem;
  border-radius: 50%;
}

.profile h1 {
  font-size: 2rem;
}

.profile h1,
h2 {
  font-weight: 500;
  margin: 0.8rem;
}
</style>
