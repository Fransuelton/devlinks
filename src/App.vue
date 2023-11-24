<script setup lang="ts">
import ThemeSwitchButton from "./components/ThemeSwitchButton.vue";
import Button from "./components/Button.vue";
import Profile from "./components/Profile.vue";
</script>

<template>
  <Profile />

  <ThemeSwitchButton />

  <section>
    <ul>
      <Button :msg="'Veja meu portfólio'" :icon="'person'" :link="'https://www.fransuelton.dev/'" />
      <Button :msg="'GitHub'" :icon="'logo-github'" :link="'https://github.com/Fransuelton'" />
      <Button :msg="'LinkedIn'" :icon="'logo-linkedin'" link="https://www.linkedin.com/in/fransuelton/" />
      <Button :msg="'Discord'" :icon="'logo-discord'" link="" />
      <Button :msg="'E-mail'" :icon="'mail'" link="mailto:fransuelton.dev@gmail.com" />
      <Button :msg="'WhatsApp'" :icon="'logo-whatsapp'" link="https://api.whatsapp.com/send?phone=558499778995" />
    </ul>
  </section>

  <footer>
    <p>Desenvolvido por <a href="https://github.com/Fransuelton" target="_blank" rel="noopener">Fransuelton</a></p>
  </footer>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
