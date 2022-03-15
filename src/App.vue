<template>
<div>
  <div class="menu">
    <div class="menu-item"><div class="menu-text" @click="()=>{this.$router.push('/home')}">Home</div></div>
    <div class="menu-item"><div class="menu-text" @click="()=>{this.$router.push('/work')}">Our Work</div></div>
    <div class="menu-item"><div class="menu-text" @click="()=>{this.$router.push('/products')}">Products</div></div>
    <div class="menu-item"><div class="menu-text" @click="()=>{this.$router.push('/docs')}">Docs</div></div>
    <div class="menu-item"><div class="menu-text" @click="()=>{this.$router.push('/contact')}">Contact</div></div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>

</div>

  <router-view />
</template>

<script>

export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
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
  border-bottom: 2px solid #c278ff;
}
/* .menu-center {
  font-size: 36px;
  color: #EAEAEA;
} */

</style>
