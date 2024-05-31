<!-- src/components/AdContactList.vue -->
<template>
    <div>
      <h1>Ad Contacts</h1>
      <ul>
        <li v-for="contact in adContacts" :key="contact.id">
          <p><strong>Name:</strong> {{ contact.name }}</p>
          <p><strong>Email:</strong> {{ contact.email }}</p>
          <p><strong>NRIC:</strong> {{ contact.nric }}</p>
          <p><strong>Nationality:</strong> {{ contact.nationality }}</p>
          <p><strong>Gender:</strong> {{ contact.gender }}</p>
          <p><strong>Address:</strong> {{ contact.address }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { gql } from '@apollo/client/core';
import { onMounted, ref } from 'vue';
import client from '../apollo-client';
  
  export default {
    name: 'AdContactList',
    setup() {
      const adContacts = ref([]);
  
      const FETCH_AD_CONTACTS = gql`
        query {
          adContacts {
            id
            name
            email
            nric
            nationality
            gender
            address
          }
        }
      `;
  
      onMounted(async () => {
        try {
          const { data } = await client.query({
            query: FETCH_AD_CONTACTS,
          });
          adContacts.value = data.adContacts;
        } catch (error) {
          console.error('Error fetching ad contacts:', error);
        }
      });
  
      return {
        adContacts,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    font-size: 18px;
  }
  p {
    margin: 5px 0;
  }
  </style>
  