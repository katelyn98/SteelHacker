<template>
  <form @submit.prevent="handleSubmit" class="signupform">
    <h1 class="header">Sign Up</h1>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="FirstName">First Name</label>
        <input type="text" class="form-control" v-model="user.firstname" id="firstName">
      </div>
      <div class="form-group col-md-6">
        <label for="LastName">Last Name</label>
        <input type="text" class="form-control" v-model="user.lastname" id="lastName">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="user.email"
          id="inputEmail"
          placeholder="example@pitt.edu"
        >
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="user.password"
          id="inputPassword"
          placeholder="Password"
        >
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCountry">Nationality</label>
        <input
          type="text"
          class="form-control"
          v-model="user.nationality"
          id="inputCountry"
          placeholder="United States"
        >
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress2">Language</label>
        <input
          type="text"
          class="form-control"
          v-model="user.language"
          id="inputLanguage"
          placeholder="English"
        >
      </div>
    </div>
    <div class="submitbutton">
      <button type="submit" class="btn btn-primary">Sign up</button>
    </div>
  </form>
</template>

<script>
const axios = require("axios");
export default {
  name: "Signup",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        nationality: "",
        language: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("/signup", {
          firstName: this.user.firstname,
          lastName: this.user.lastname,
          email: this.user.email,
          password: this.user.password,
          nationality: this.user.nationality,
          language: this.user.language
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.submitbutton {
  text-align: center;
  margin: 1.5em;
}
.header {
  text-align: center;
  margin: 1em;
  color: dodgerblue;
}

.btn {
  width: 10em;
}

.signupform {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
  padding: 4em;
}
</style>
