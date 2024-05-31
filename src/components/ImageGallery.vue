<template>
  <div class="image-gallery">
    <div v-for="(image, index) in images" :key="index" class="image-item">
      <img :src="getThumbnailUrl(image)" alt="Gallery Image" @click="handleImageClick(image)" />
    </div>

    <!-- Modal for displaying full-size image (conditionally rendered) -->
    <modal-dialog v-if="selectedImage" name="full-size-image" width="80%" @close="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">X</button>
        <img :src="getFullSizeUrl(selectedImage)" alt="Full Size Image" class="full-size-media" v-if="isImage(selectedImage)" />
        <video :src="getFullSizeUrl(selectedImage)" controls class="full-size-media" v-else></video>
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ImageGallery',
  computed: {
    ...mapState(['images', 'selectedImage'])
  },
  created() {
    this.fetchImages();
  },
  methods: {
    ...mapActions(['fetchImages', 'setSelectedImage']),
    handleImageClick(image) {
      this.setSelectedImage(image);
    },
    closeModal() {
      this.setSelectedImage(null); // Clear the selected image to close the modal
    },
    getThumbnailUrl(imageName) {
      // Assuming the thumbnails are hosted on Cloudinary
      return `https://res.cloudinary.com/dcqqec7wa/image/upload/w_200/v1691035708/${imageName}`;
    },
    getFullSizeUrl(mediaName) {
      // Assuming the full-size images and videos are hosted on Cloudinary
      return `https://res.cloudinary.com/dcqqec7wa/image/upload/v1691035708/${mediaName}`;
    },
    isImage(mediaName) {
      const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const extension = mediaName.split('.').pop().toLowerCase();
      return imageExtensions.includes(extension);
    }
  }
}
</script>

<style>
/* Add your custom styles for the image gallery here */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
}

.image-item {
  margin: 10px;
}

.modal-content {
  position: relative;
  text-align: center;
  max-width: 100%;
}

.full-size-media {
  max-width: 100%;
  height: auto;
  width: 100%;
  max-height: calc(100vh - 60px); /* Ensures video doesn't exceed viewport height, accounting for close button */
}

.close-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
