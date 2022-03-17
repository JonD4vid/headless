<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">

      <h1>
          <span v-if="collapsed">
              <div>V</div>
              <div>S</div>
          </span>
          <span v-else>Vue Sidebar</span>
      </h1>

      <SidebarLink to="/" icon="fas fa-home"> Home</SidebarLink>
      <SidebarLink to="/work" icon="fas fa-briefcase"> Work</SidebarLink>
      <SidebarLink to="/products" icon="fas fa-cart-shopping"> Shop</SidebarLink>
      <SidebarLink to="/docs" icon="fas fa-book"> Docs</SidebarLink>
      <SidebarLink to="/contact" icon="fas fa-handshake"> Contact</SidebarLink>

    <span class="collapse-icon"
         :class="{ 'rotate-180' : collapsed }"
          @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
    components: {SidebarLink},
  props: {},
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>
<style>
:root {
  --sidebar-bg-color: #000000;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  /* Position Left */
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  /* smooth animatiion */
  transition: 0.3s ease;

  /* elements inside container */
  display: flex;
  flex-direction: column;
}

  /* icon style and rotate */
  .collapse-icon{
      position: absolute;
      bottom: 0;
      padding: 0.75em;
      color: rgba(255, 255, 255, 0.7);

      transition: 0.2s linear;
  }
  .rotate-180{
      transform: rotate(180deg);
      transition: 0.2s linear;
  }
</style>
