<script setup lang="ts">
defineProps<{ msg: string; icon: string; link: string }>();
</script>

<template>
  <li>
    <a :href="link" target="_blank" rel="noopener">
      <ion-icon :name="icon"></ion-icon>
      {{ msg }}
    </a>
  </li>
</template>

<style scoped>
li {
  position: relative;
}

li a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 2.4rem;
  background: var(--surface-color);
  border: 0.1rem solid var(--stroke-color);
  border-radius: 0.8rem;
  backdrop-filter: blur(2rem);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  width: 40rem;

  transition: background 0.2s;
}

li a:hover {
  background: var(--highlight-color);
  border: 0.1rem solid var(--text-color);
}

@media (max-width: 1024px) {
  li a {
    width: 35rem;
  }
}

ion-icon {
  font-size: 4rem;
  margin-right: 1rem;
  position: absolute;
  left: 1rem;
}
</style>
