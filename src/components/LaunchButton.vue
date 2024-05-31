<!-- src/components/LaunchButton.vue -->
<template>
    <button @click="goToAdContacts">View Ad Contacts</button>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'LaunchButton',
    setup() {
      const router = useRouter();
      const goToAdContacts = () => {
        router.push('/ad-contacts');
      };
  
      return {
        goToAdContacts,
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  