<template>
  <div class="video-container">
    <video :controls="controls" class="responsive-video">
      <source :src="src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    controls: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto; /* Add overflow property to make the video scrollable */
}

.responsive-video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ensure the video is fully visible without cropping */
}
</style>
