<template>
    <div class="columns">
      <div class="column is-one-quarter">
        <SideMenu />
      </div>
      <div class="column">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script>
  import SideMenu from '~/components/SideMenu'
  
  export default {
    components: {
      SideMenu
    }
  }
  </script>
  