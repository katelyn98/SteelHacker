<template>
<div id="homepage">
    <div id="mask">
      <p class="title">Tureme: connecting with local students</p>
      <p class="keyword"> Tourism, Multiculturism, Friendly, Fun</p>
      <div class="button">
        <router-link to="login" class=" btn-block link">LOGIN</router-link>
      </div>
      <div class="button">
        <router-link to="signup" class=" btn-block link">SIGN UP</router-link>
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
    background-image: url("https://media.giphy.com/media/xUA7b4arnbo3THfzi0/giphy.gif");
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  position: absolute;
  margin-top: -200px;
  font-size: 3rem;
  color: whitesmoke;
}

.keyword {
  position: absolute;
  margin-top: -120px;
  font-size: 2rem;
  color: whitesmoke
}

#mask {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  color: black;
  text-decoration: none;
}

.button {
  margin: 20px;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: solid;
  border-color: white;
  text-align: center;
  padding: 15px 40px;
  text-decoration: none;
  font-size: 20px;
}

/* Change the color of links on hover */
.button:hover{
  color: black;
  background-color: white;
}

.button:hover .link {
  color: black;
}

/* Add a color to the active/current link */
/* #button.active {
  background-color: rgb(72, 150, 252);
  color: white;
} */


</style>


