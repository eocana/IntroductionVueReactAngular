<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/account">Account</router-link>
    </div>
   <!-- <app-user></app-user> not longer necessaty because we adding routing to app-->
   <router-view></router-view> 
   <p>This is a test, this is form App.vue</p>
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

