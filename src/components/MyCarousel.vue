<template>

    <div class="carousel-container">
      <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
        <img :src="image" alt="Slide {{ index + 1 }}" style="width: 100%;">
      </div>
</div>
</template>

<script>
export default {
  name: 'MyCariousel',
  data() {
    return {
      images: [
        'img/1.png',
        'img/2.png',
        'img/3.png'
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  
  mounted() {
    this.startAutoPlay();
  },
  methods: {
   
    startAutoPlay() {
      this.intervalId = setInterval(this.nextSlide, 3000); // Change image every 3 seconds
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
    prevSlide() {
      this.stopAutoPlay();
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.startAutoPlay();
    },
    nextSlide() {
      this.stopAutoPlay();
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.startAutoPlay();
    }
  }
};
</script>


<style scoped>
.carousel-demo {
  max-width: 800px;
  margin: 0 auto;
}

.carousel-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
}

.carousel-slide {
  display: none;
  width: 100%;
  height: auto;
}

.carousel-slide.active {
  display: block;
}
</style>