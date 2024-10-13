<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/profile">Profile</router-link>
        <router-link to="/notifications">Notifications</router-link>
        <button v-if="loggedIn" @click="logout">Logout</button>
        <router-link v-else to="/login">Login</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      loggedIn() {
        return !!localStorage.getItem('token');
      },
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style>
  #app {
    text-align: center;
    margin-top: 50px;
  }
  
  nav {
    margin-bottom: 20px;
  }
  
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #42b983;
  }
  
  nav a.router-link-exact-active {
    font-weight: bold;
  }
  </style>
  