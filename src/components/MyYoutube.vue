<template>
  <div class="video-container" :style="{ paddingBottom: paddingBottom }">
    <iframe
      :src="embedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    aspectRatio: {
      type: String,
      default: '16:9'
    }
  },
  computed: {
    embedUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
    paddingBottom() {
      const [aspectWidth, aspectHeight] = this.aspectRatio.split(':');
      return `${(aspectHeight / aspectWidth) * 100}%`;
    }
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
