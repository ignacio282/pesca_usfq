<template>
  <div id="app">
    <transition name="fade-home" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}

.fade-home-enter-active,
.fade-home-leave-active {
  transition: opacity 0.5s;
}
.fade-home-enter,
.fade-home-leave-to {
  opacity: 0;
}
</style>
