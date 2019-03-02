<template>
  <div id="app">
    <div id="mask">
      <div id="login">
        <login-board></login-board>
      </div>
    </div>

    <!-- <img src="./assets/giphy.gif" alt=""> -->
  </div>
</template>

<script>
import LoginBoard from './components/LoginBoard';
export default {
  name: 'app',
  components: {
    LoginBoard,
  },
}
</script>

<style>
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
  /* Center and scale the image nicely */
  background-image: url("./assets/giphy.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#login {
  color: white;
  text-align: center;
}
</style>


