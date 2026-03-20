<script setup lang="ts">
import { profileLinks } from "../data/links";
import { Icon } from "@iconify/vue";
</script>

<template>
  <li>
    <a
      v-for="link in profileLinks"
      :key="link.label"
      :href="link.url"
      target="_blank"
      rel="noopener"
    >
      <Icon :icon="link.icon" class="link-icon" />
      <span>{{ link.label }}</span>
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
  margin: 1.6rem;

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

.link-icon {
  font-size: 4rem;
  margin-right: 1rem;
  position: absolute;
  left: 1rem;
}
</style>
