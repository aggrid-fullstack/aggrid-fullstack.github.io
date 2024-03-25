<template>
    <MainNavBar />
    <div class="columns">
      <div class="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
        <SideMenu />
      </div>
      <div class="column is-10">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script>
  import SideMenu   from '~/components/SideMenu'
  import MainNavBar from '~/components/MainNavBar'


  export default {
    components: {
      SideMenu, MainNavBar
    }
  }
  </script>
  