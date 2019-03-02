<template>
<div id="homepage">
    <div id="mask">
      <div id="login">
        <router-link to="signup" class="btn btn-block btn-outline-primary btn-lg">Sign up</router-link>
        <router-link to="login" class="btn btn-block btn-outline-success btn-lg">login</router-link>
        <router-link to="profile" class="btn btn-block btn-outline-success btn-lg">Profile Page</router-link>
        <router-link to="event-making" class="btn btn-block btn-outline-success btn-lg">Event Making</router-link>
        <router-link to="event-view" class="btn btn-block btn-outline-success btn-lg">Event View</router-link>
        <router-link to="new-home-page" class="btn btn-block btn-outline-success btn-lg">New Home Page</router-link>
      </div>
    </div>
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
#homepage {
    background-image: url("https://media.giphy.com/media/xUA7aRkZwuLP7YVSEw/giphy.gif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#mask {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login {
  color: white;
  text-align: center;
}
</style>


