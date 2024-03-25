<template>
    <aside class="menu">

      <div v-for="xlabel in labels">
        <p class="menu-label">
          {{ xlabel.group_label }}
        </p>

        <ul class="menu-list">
          <li v-for="sub_label in xlabel.sub_labels"><nuxt-link :class="{ 'is-active': $route.path === sub_label.route_path }" :to="sub_label.route_path">
              {{ sub_label.route_name }}</nuxt-link>
          </li>
        </ul> 
      </div>


    </aside>
  </template>
  
  <script>
/*
Introduction
Tools And Architecture
Getting Started
  Deployment
  Enviornment Variables


        <!-- <ul class="menu-list">
          <li v-for="sub_label in xlabel.sub_labels"><nuxt-link :class="{ 'is-active': $route.path === sub_label.route_path }" to='/'>
              {{ sub_label.route_name }}</nuxt-link>
          </li>
        </ul> -->

<template>
    <aside class="menu">
      <div v-for="xlabel in labels">
        <p class="menu-label">
          {{ xlabel.group_label }}
        </p>
        <ul class="menu-list">
          <li v-for="sub_label in xlabel.sub_labels"><nuxt-link :class="{ 'is-active': $route.path === '/' }" to="/">Home</nuxt-link></li>
          <li><nuxt-link :class="{ 'is-active': $route.path === '/about' }" to="/about">About</nuxt-link></li>
          <li ><nuxt-link class="is-active" to="/about">Manage Your Team</nuxt-link></li>
          <!-- Add more menu items here -->
        </ul>
        <!-- You can add more sections here -->
      </div>


    </aside>
  </template>



Apps
  Readonly?

Grid Operations
  url params
  Pin  
  Hide
  Actions
  Quick Search
  Filter
  Sort

Survey Operations:
  URL params
  hide: if

UI API


Server API
  Introduction
  Select
  Insert
  Update
  Delete

Params
  batch?

Test or prod.



Field Types
Text
  Single Line Text
  Long Text
  Rich Text
  Phone Number
  URL
Numerical
  Number
  Decimal
  Percent
  Currency
Formula
Lookup
Dropdown
Validation
SubGrid
SubSurvey



Roles and Permissions



*/


  export default {
    // Component logic here
    // need welcome component and menu bar
    data() {
      return {
        labels: [
          { group_label: 'Getting Started', 
              sub_labels: [
                {route_name: 'OAuth Login',            route_path: '/app_layout/login'},
                {route_name: 'Architecture',           route_path: '/app_layout/landing_page'},
                {route_name: 'Environment Variables',  route_path: '/app_layout/grid.vue'},
                {route_name: 'Docker' ,                route_path: '/app_layout/survey'},
                {route_name: 'Docker Compose',         route_path: '/app_layout/dynamic_survey'},
              ]
            },

          { group_label: 'App Layout', 
            sub_labels: [
              {route_name: 'Login',          route_path: '/app_layout/login'},
              {route_name: 'Landing_Page',   route_path: '/app_layout/landing_page'},
              {route_name: 'Grid',           route_path: '/app_layout/grid.vue'},
              {route_name: 'Survey',         route_path: '/app_layout/survey'},
              {route_name: 'Dynamic Survey', route_path: '/app_layout/dynamic_survey'},
            ]
          },

          { group_label: 'API', 
            sub_labels: [ 
              {route_name: 'Introduction',  route_path: '/api/'},
              {route_name: 'Select',        route_path: '/api/select'},
              {route_name: 'Insert',        route_path: '/api/insert'},
              {route_name: 'Upsert',        route_path: '/api/upsert'},
              {route_name: 'Update',        route_path: '/api/update'},
              {route_name: 'Delete',        route_path: '/api/delete'}, 
              {route_name: 'DeletedAt',     route_path: '/api/deleted_at'},
              {route_name: 'Params',        route_path: '/api/params'},
            ]
          },

        ]
        //ui_labels
        
      }
    }


  }
  </script>
