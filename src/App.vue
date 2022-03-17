<template>
  <Sidebar />
  <div :style="{'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import { sidebarWidth } from '@/components/sidebar/state'
import Sidebar from '@/components/sidebar/Sidebar'
export default {
  components: { Sidebar },
  setup(){
    return {
      sidebarWidth
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: #fff;
}
.menu-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-text{
  font-size: 20px;
  color: #818181;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid #080808;
  width: fit-content;
}
.menu-text:hover {
  border-bottom: 2px solid #fc4f00;
}
/* .menu-center {
  font-size: 36px;
  color: #EAEAEA;
} */

</style>
