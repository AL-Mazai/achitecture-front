<template>
  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default{
  name: 'app',
  provide(){
    return {
      reload: this.reload
    }
  },
  data(){
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function (){
        this.isRouterAlive = true
      })
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
  color: #2c3e50;
  height: 100%;
}
body,html {
  margin: 0;
  width: 100%;
  height: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
