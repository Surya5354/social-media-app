<template>
    <div class="notifications">
      <h2>Notifications</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification._id">
          {{ notification.message }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getNotifications } from '../services/api';
  
  export default {
    data() {
      return {
        notifications: [],
      };
    },
    async created() {
      const { data } = await getNotifications();
      this.notifications = data;
    },
  };
  </script>
  
  <style scoped>
  .notifications {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  