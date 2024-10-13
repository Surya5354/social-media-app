<template>
    <div class="profile-container">
      <h2>{{ user.username }}</h2>
      <img :src="user.profilePicture" alt="Profile Picture" />
      <input type="file" @change="onFileChange" />
      <button @click="updateProfile">Update Profile</button>
    </div>
  </template>
  
  <script>
  import { getUserProfile, updateUserProfile } from '../services/api';
  
  export default {
    data() {
      return {
        user: {},
        selectedFile: null,
      };
    },
    created() {
      this.fetchUserProfile();
    },
    methods: {
      async fetchUserProfile() {
        const { data } = await getUserProfile();
        this.user = data;
      },
      onFileChange(e) {
        this.selectedFile = e.target.files[0];
      },
      async updateProfile() {
        const formData = new FormData();
        formData.append('username', this.user.username);
        if (this.selectedFile) {
          formData.append('profilePicture', this.selectedFile);
        }
        await updateUserProfile(formData);
        this.fetchUserProfile();
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  