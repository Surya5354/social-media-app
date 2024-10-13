<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <router-link to="/register">Register</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { loginUser } from '../services/api';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          const { data } = await loginUser({
            email: this.email,
            password: this.password,
          });
          localStorage.setItem('token', data.token);
          this.$router.push('/');
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  