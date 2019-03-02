
<template>
<div class="navbar">
  <router-link to="/" >Homepage</router-link>
  <!-- <router-link to="about" >About</router-link> -->
  <router-link to="event-view" >Events</router-link>
  <router-link to="event-making" >Create an Event</router-link>
  <!-- <router-link to="chattmakeeventslisting" >Messages</router-link> -->
  <router-link to="/profile">Profile</router-link>
</div>

</template>

<script>
export default {

}
</script>

<style>
/* Add a black background color to the top navigation */
.navbar {
  flex: 0 0 100%;
  overflow: hidden;
  background-color:rgba(90, 214, 233, 0.616);
  flex-direction: row;
  justify-content: first baseline;
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  color: black;
  background-color: rgba(223, 248, 252, .5); 
  border-radius: 10%;
  text-align: center;
  padding: 16px 20px;
  text-decoration: none;
  font-size: 20px;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: rgba(46, 141, 219, 0.747);;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: rgb(72, 150, 252);
  color: white;
}
</style>
