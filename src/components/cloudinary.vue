<template>
    <div class="image-gallery">
      <div v-if="images.length === 0">No images found in the specified directory.</div>
      <div v-for="image in images" :key="image.public_id" class="image-container">
        <img :src="getImageUrl(image.public_id)" alt="Image" @click="showImage(getImageUrl(image.public_id))" />
      </div>
      <div v-if="showModal">
        <div class="modal">
          <img :src="selectedImage" alt="Enlarged Image" />
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageGallery',
    props: {
      folder: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        images: [],
        showModal: false,
        selectedImage: ''
      };
    },
    created() {
      this.loadImages();
    },
    methods: {
      async loadImages() {
        try {
          console.log(`Loading images from Cloudinary folder: ${this.folder}`);
          const response = await fetch(`https://res.cloudinary.com/dcqqec7wa/image/list/${this.folder}.json`);
          const data = await response.json();
          this.images = data.resources;
          console.log('Images loaded:', this.images);
        } catch (error) {
          console.error(`Failed to load images from Cloudinary folder: ${this.folder}`, error);
          this.images = [];
        }
      },
      showImage(imageUrl) {
        this.selectedImage = imageUrl;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      getImageUrl(publicId) {
        return `https://res.cloudinary.com/dcqqec7wa/image/upload/${publicId}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .image-container {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal img {
    max-width: 90%;
    max-height: 90%;
  }
  </style>
  