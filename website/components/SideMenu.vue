<template>
    <aside class="menu">
      <p class="menu-label">
        General {{ $route.path }}
      </p>
      <ul class="menu-list">
        <li><nuxt-link :class="{ 'is-active': $route.path === '/' }" to="/">Home</nuxt-link></li>
        <li><nuxt-link :class="{ 'is-active': $route.path === '/about' }" to="/about">About</nuxt-link></li>
        <li ><nuxt-link class="is-active" to="/about">Manage Your Team</nuxt-link></li>
        <!-- Add more menu items here -->
      </ul>
      <!-- You can add more sections here -->
    </aside>
  </template>
  
  <script>
/*
Introduction
Tools And Architecture
Getting Started
  Deployment
  Enviornment Variables


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
  }
  </script>
  
  <style scoped>
    /* Your custom styles for SideMenu */
  </style>