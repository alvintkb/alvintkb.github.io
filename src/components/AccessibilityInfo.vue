<template>
  <div class="elementor-container elementor-column-gap-wider black-background">
    <!-- First Content Section -->
    <div class="elementor-column elementor-col-100">
      <div class="elementor-widget-wrap">
        <p class="white-text">Highly Accessible Location</p>
      </div>
    </div>

    <!-- Second Content Section -->
    <section class="elementor-section elementor-inner-section elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div class="elementor-container elementor-column-gap-default">
        <!-- Individual Columns -->
        <div v-for="(item, index) in items" :key="index" class="elementor-column elementor-col-33">
          <div class="elementor-widget-wrap">
            <i :class="item.iconClass + ' white-text'"></i>
            <p v-html="item.text" class="white-text"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      items: [
        {
          iconClass: 'fas fa-train',
          text: '2KM to Putra Heights LRT Station (connects to Kelana Jaya Line and Ampang Line)'
        },
        {
          iconClass: 'fas fa-car',
          text: 'Link Road to:<br>– Rimbayu<br>– Tropicana Aman<br>– Eco Sanctuary <br>– Kota Kemuning<br>– KESAS Highway'
        },
        {
          iconClass: 'fas fa-walking',
          text: 'Walking distance to:<br>– Mahsa University<br>– Mahsa International School<br>– MAHSA Hospital <br>– Saujana Business Park'
        },
        {
          iconClass: 'fas fa-road',
          text: 'Easy access to five major expressways:<br>– ELITE<br>– SKVE<br>– KESAS<br>– LDP<br>– MEX'
        },
        {
          iconClass: 'far fa-building',
          text: 'Close to key neighbourhoods:<br>– Cyberjaya<br>– Putrajaya<br>– Bandar Rimbayu<br>– Eco Sanctuary <br>– Tropicana Aman<br>– Putra Heights<br>– Puchong <br>– USJ'
        },
        {
          iconClass: 'fas fa-landmark',
          text: 'Nearby Amenities:<br>– Sanctuary Mall<br>– IOI City Mall<br>– KLIA'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Override Font Awesome default color */
.white-text {
  color: #fff; /* Set text color to white */
}

/* Background color */
.black-background {
  background-color: #000; /* Set background color to black */
}
</style>
