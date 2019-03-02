<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/giphy.gif" alt=""> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
body {
  margin: 0;
}

#mask {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  font-family: 'Roboto Slab';
  /* Center and scale the image nicely */
}

#login {
  color: white;
  text-align: center;
}
</style>


