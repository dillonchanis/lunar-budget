<template>
  <div class="bg-indigo-darkest">
    <header class="container mx-auto px-4">
      <div class="flex items-center sm:justify-between py-4">

        <div class="w-1/4 sm:hidden">
          <font-awesome-icon class="fill-current text-white" size="lg" :icon="faBars" />
        </div>

        <div class="w-1/2 sm:w-auto text-center text-white">
          lunar
        </div>

        <div class="w-1/4 sm:w-auto sm:flex text-right">
          <div>
            <img class="inline-block h-8 w-8 rounded-full" src="https://avatars2.githubusercontent.com/u/12295922?s=460&v=4" />
          </div>
          <div class="hidden sm:block sm:flex sm:items-center ml-2">
            <span class="text-white text-sm mr-1">Dillon Chanis</span>
            <div>
              <FontAwesomeIcon class="block fill-current text-white opacity-50" size="xs" :icon="faChevronDown" />
            </div>
          </div>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faBars, faChevronDown } from '@fortawesome/fontawesome-free-solid'

  export default {
    name: 'lunar-navbar-header',

    components: {
      FontAwesomeIcon
    },

    computed: {
      faBars () {
        return faBars
      },
      faChevronDown () {
        return faChevronDown
      }
    }
  }
</script>
