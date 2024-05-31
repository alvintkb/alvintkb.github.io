<template>
  <h1>Project Code - {{ projectCode }}</h1>
  <MyCarousel />
  <ImageGalleryLocal folder="img2" />
  <ProjectDescription />
  <AccessibilityInfo />
  <!-- <ImageGallery folder="eum/acadia" /> -->
  <!-- <VideoPlayer src="showroom.mp4" /> -->
  <MyYoutube videoId="vVUJDFEYv1c" />
  <LaunchButton v-if="showLaunchButton" />
  <!-- <span class="outlined">Type A - 871 sq.ft</span> -->

  <InterestReg />
  <MyChart />
  <FaAcadia :ProjectCode= "projectCode" />

  <MyFlow />
</template>

<script>
import ImageGalleryLocal from "./ImageGalleryLocal.vue";
// import ImageGallery from './ImageGallery.vue';
import ProjectDescription from "./ProjectDescription.vue";
// import VideoPlayer from './VideoPlayer.vue';

import AccessibilityInfo from "./AccessibilityInfo.vue";

import FaAcadia from "./FaAcadia.vue";
import InterestReg from "./InterestReg.vue";
import MyChart from "./MyChart.vue";
import MyFlow from "./MyFlow.vue";
import MyYoutube from "./MyYoutube.vue";

//import MyMermaid from './MyMermaid.vue';

export default {
  props: {
    projectCode: {
      type: String,
      required: true,
    },
  },
  components: {
    ProjectDescription,
    // VideoPlayer,
    MyYoutube,
    ImageGalleryLocal,
    InterestReg,
    AccessibilityInfo,
    FaAcadia,
    MyFlow,
    MyChart,

    //MyMermaid
    // ImageGallery
  },
  data() {
    return {
      showLaunchButton: false, // Boolean to control visibility
    };
  },
};
</script>

<style>
.outlined {
  border: 2px solid green;
  border-radius: 8px;
  padding: 5px;
}
</style>
