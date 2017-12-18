<template>
  <div id="app" class="font-sans">
    <LunarNavbarHeader />
    <LunarNavbarNav />
    <div class="flex items-center justify-between flex-wrap p-6">
      <div class="container">
        <transition name="slide" mode="out-in" appear>
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHeader from './app/Navigation/NavbarHeader'
import NavbarNav from './app/Navigation/NavbarNav'

export default {
  name: 'app',
  components: {
    LunarNavbarHeader: NavbarHeader,
    LunarNavbarNav: NavbarNav
  }
}
</script>

<style lang="scss">
@import './app';

html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
