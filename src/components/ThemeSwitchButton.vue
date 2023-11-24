<script setup lang="ts">

const toggleMode = () => {
  const html = document.documentElement;

  html.classList.toggle("light");
}

</script>

<template>
  <div id="switch" @click="toggleMode">
    <button></button>
    <span></span>
  </div>
</template>

<style scoped>
#switch {
  position: relative;
  width: 6.4rem;
  margin: 0.4rem auto;
}

#switch button {
  width: 3.2rem;
  height: 3.2rem;
  background: #fff var(--bg-url-switch) no-repeat center;
  border: 0;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);

  animation: slide-back 0.2s;
}

.light #switch button {
  animation: slide-in 0.2s forwards;
}

#switch button:hover {
  outline: 0.8rem solid var(--highlight-color);
}


#switch span {
  display: block;
  width: 6.4rem;
  height: 2.4rem;
  background: rgba(255, 255, 255, 0.1);
  border: 0.1rem solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.4rem);
  border-radius: 100rem;
}
</style>
