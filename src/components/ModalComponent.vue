<template>
    <div class="modal">
      <div class="modal-content">
        <slot></slot> <!-- This slot will be replaced by the content you pass to the modal -->
        <button @click="closeModal">Close</button> <!-- Button to close the modal -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closeModal() {
        this.$emit("close"); // Emit an event to notify parent component to close the modal
      }
    }
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  