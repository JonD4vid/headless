<template>
  <div>

<div v-if="show">
    <AboutUs  />
</div>
  </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue'

export default {
  components: {
     AboutUs
  },
  data(){
      return{
          show: true

      }
  },
  created(){
  }
}

</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>