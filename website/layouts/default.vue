<template>
    <MainNavBar />
    <div class="columns">
      <div class="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile" id="side-menu">
        <SideMenu />
      </div>
      <div class="column is-10" id="main-body">
        <div class="container"> 
          <NuxtPage />
        </div>
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
  
<style scoped>

#side-menu {
  max-height: calc(100vh - 3rem); /* Full height minus navbar height */
  overflow-y: auto;
}

#main-body {
  max-height: calc(100vh - 3rem); /* Full height minus navbar height */
  overflow-y: auto;
}

</style>