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



  export default {
    // Component logic here
    // need welcome component and menu bar
    data() {
      return {
        labels: [
          // { group_label: 'Getting Started', 
          //     sub_labels: [
          //       {route_name: 'OAuth Login',            route_path: '/app_layout/login'},
          //       {route_name: 'Architecture',           route_path: '/app_layout/landing_page'},
          //       {route_name: 'Environment Variables',  route_path: '/app_layout/grid'},
          //       {route_name: 'Docker' ,                route_path: '/app_layout/survey'},
          //       {route_name: 'Docker Compose',         route_path: '/app_layout/dynamic_survey'},
          //     ]
          //   },

          // { group_label: 'App Layout', 
          //   sub_labels: [
          //     {route_name: 'Login',          route_path: '/app_layout/login'},
          //     {route_name: 'Landing_Page',   route_path: '/app_layout/landing_page'},
          //     {route_name: 'Grid',           route_path: '/app_layout/grid'},
          //     {route_name: 'GridMetaData',   route_path: '/app_layout/grid_meta_data'},
          //     {route_name: 'Survey',         route_path: '/app_layout/survey'},
          //     {route_name: 'Dynamic Survey', route_path: '/app_layout/dynamic_survey'},
          //     {route_name: 'SubForms',       route_path: '/app_layout/subforms'},
          //     {route_name: 'URL Parameters', route_path: '/app_layout/url_parameters'},
          //     {route_name: 'QuickFilter',    route_path: '/app_layout/quick_filter'},
          //   ]
          // },

          { group_label: 'API', 
            sub_labels: [ 
              {route_name: 'Introduction',  route_path: '/api/'},
              {route_name: 'Select',        route_path: '/api/select'},
              {route_name: 'Where',         route_path: '/api/where'},
              {route_name: 'OrderBy',       route_path: '/api/order_by'},
              {route_name: 'Pagination',    route_path: '/api/pagination'},
              {route_name: 'Insert',        route_path: '/api/insert'},
              {route_name: 'Upsert',        route_path: '/api/upsert'},
              {route_name: 'Update',        route_path: '/api/update'},
              {route_name: 'Delete',        route_path: '/api/delete'}, 
              {route_name: 'DeletedAt',     route_path: '/api/deleted_at'},
              {route_name: 'Modify',        route_path: '/api/modify'},
              {route_name: 'Search',        route_path: '/api/search'},
              {route_name: 'Payload',        route_path:'/api/payload'},
            ]
          },
          // { group_label: 'UI_Entry', 
          //   sub_labels: [ 
          //     {route_name: 'Introduction',    route_path: '/ui/'},
          //     {route_name: 'Integer',         route_path: '/ui/select'},
          //     {route_name: 'Numeric',         route_path: '/ui/where'},
          //     {route_name: 'Text',            route_path: '/ui/order_by'},
          //     {route_name: 'DateTime',        route_path: '/ui/pagination'},
          //     {route_name: 'Array',           route_path: '/ui/insert'},
          //     {route_name: 'JSON',            route_path: '/ui/upsert'},
          //     {route_name: 'Actions',         route_path: '/ui/delete'}, 
          //     {route_name: 'Boolean',         route_path: '/ui/deleted_at'},
          //     {route_name: 'Flag',            route_path: '/ui/modify'},
          //     {route_name: 'Formula',         route_path: '/ui/search'},
          //     {route_name: 'ReadOnly',        route_path: '/ui/payload'},
          //     {route_name: 'Links',           route_path: '/ui/payload'},
          //     {route_name: 'Lookup',          route_path: '/ui/payload'},
          //     {route_name: 'DropHandle',      route_path: '/ui/drop_handle'},
          //     {route_name: 'DropDown',        route_path: '/ui/drop_handle'},
          //     {route_name: 'EntryTable',      route_path: '/ui/entry_table'},
          //     {route_name: 'Radio',           route_path: '/ui/radio'},
          //   ]
          // },
          // { group_label: 'UI_Display', 
          //   sub_labels: [ 
          //     {route_name: 'Introduction',    route_path: '/ui/'},
          //     {route_name: 'ReadOnly',        route_path: '/ui/payload'},
          //     {route_name: 'SummaryGrid',     route_path: '/ui/update'},
          //     {route_name: 'Plots',           route_path: '/ui/payload'},
          //   ]
          // }
        ]
        
      }
    }
  }

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


  </script>
