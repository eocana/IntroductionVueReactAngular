<template>
  <div id="app">
   <!-- <app-user></app-user> not longer necessaty because we adding routing to app-->
   <router-view></router-view> 
   <p>This is a test</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

