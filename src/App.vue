<script setup lang="ts">
import ThemeSwitchButton from "./components/ThemeSwitchButton.vue";
import Button from "./components/Button.vue";
import Profile from "./components/Profile.vue";
</script>

<template>
  <Profile
    :name="'Fransuelton'"
    :title="'Desenvolvedor Full Stack'"
    :image-url="'https://media.licdn.com/dms/image/v2/D4E03AQFfzRwSiZmamQ/profile-displayphoto-scale_400_400/B4EZ0G9U4DHQAg-/0/1773938246072?e=1775692800&v=beta&t=rOeE4w7JDre-2IYbe5CSwI9FZ7z8oHsjZAizK1Rng-0'"
  />

  <ThemeSwitchButton />

  <section>
    <ul>
      <Button />
    </ul>
  </section>

  <footer>
    <p>Desenvolvido com ☕ por Fransuelton.</p>
  </footer>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer {
  padding: 2.4rem 0;
  font-size: 1.4rem;
}

section {
  margin-top: 2rem;
}
</style>
