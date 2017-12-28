<template>
  <div id="app" class="font-sans">
    <LunarNavbarHeader />
    <LunarNavbarNav />
    <LunarDrawer :isOpen="drawerOpen">
      <component :is="drawerComponent" />
    </LunarDrawer>
    <div class="flex items-center justify-between flex-wrap p-6">
      <div class="container mx-auto">
        <transition name="slide" mode="out-in" appear>
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
