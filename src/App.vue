<script >
import Home from './page/Home.vue';
export default {
  components:{
    Home
  },
  watch:{
    "$route.path"(){
      console.log(this.$route.path)
    }
  }
}
</script>

<template>
 <router-view></router-view>
</template>


