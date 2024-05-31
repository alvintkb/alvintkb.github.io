<template>
  <div class="image-gallery">
    <div v-if="images.length === 0">No images found in the specified directory.</div>
    <div v-for="image in images" :key="image.src" class="image-container">
      <img :src="image.src" :alt="image.label" @click="showImage(image.src)" />
      <div class="image-label">{{ image.label }}</div>
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
  name: 'ImageGalleryLocal',
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
    loadImages() {
      try {
        console.log(`Loading images from folder: ${this.folder}`);
        const imagesContext = require.context(`../assets/img2`, false, /\.(png|jpe?g|svg|webp)$/);
        this.images = imagesContext.keys().map(key => ({
          src: imagesContext(key),
          label: key.replace('./', '').replace(/\.\w+$/, '')
        }));
        console.log('Images loaded:', this.images);
      } catch (e) {
        console.error(`Failed to load images from folder: ${this.folder}`, e);
        this.images = [];
      }
    },
    showImage(image) {
      this.selectedImage = image;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
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
  flex: 1;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.image-label {
  margin-top: 8px;
  text-align: center;
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
