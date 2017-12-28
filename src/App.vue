<template>
  <div id="app" class="font-sans">
    <div v-if="drawerOpen" class="absolute h-screen w-screen z-10 bg-indigo-darker opacity-50" @click.stop="close"></div>

    <LunarNavbarHeader />
    <LunarNavbarNav />

    <LunarDrawer :isOpen="drawerOpen">
      <component :is="drawerComponent" />
    </LunarDrawer>

    <main class="flex items-center justify-between flex-wrap p-6">
      <div class="container mx-auto">
        <transition name="slide" mode="out-in" appear>
          <router-view />
        </transition>
      </div>
    </main>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NavbarHeader from './app/Navigation/NavbarHeader'
import NavbarNav from './app/Navigation/NavbarNav'
import { LunarDrawer } from '@/app/components/Presentational'

export default {
  name: 'app',

  components: {
    LunarNavbarHeader: NavbarHeader,
    LunarNavbarNav: NavbarNav,
    LunarDrawer
  },

  computed: {
    ...mapGetters({
      drawerComponent: 'drawer/getComponent',
      drawerOpen: 'drawer/isOpen'
    })
  },

  methods: {
    ...mapActions({
      close: 'drawer/reset'
    })
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
  overflow-x: hidden;
}
</style>
