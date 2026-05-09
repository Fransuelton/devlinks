<script setup lang="ts">
import ThemeSwitchButton from "./components/ThemeSwitchButton.vue";
import Button from "./components/Button.vue";
import Profile from "./components/Profile.vue";
</script>

<template>
  <Profile
    :name="'Fransuelton'"
    :title="'Desenvolvedor Full Stack'"
    :image-url="'https://media.licdn.com/dms/image/v2/D4E03AQFfzRwSiZmamQ/profile-displayphoto-scale_200_200/B4EZ0G9U4DHQAY-/0/1773938246072?e=1779926400&v=beta&t=Xa8atKHYreZI6hVR0_lSfAODfhx6w4jfg-ujw_kvEcE'"
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
