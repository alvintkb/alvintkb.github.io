<template>
   
<!-- radio-selector.html -->
<div class="container">
  <div class="selector-wrapper">
    <label class="sd-label selector-label">

      <img id="scroll-to-section" class="svg-icon" src="img/unifihome1a.svg" alt="Unifi Home" @click="scrollToSection('pricing-section-1')">
      <input type="radio" class="sd-radio" name="plan" value="h"><span class="sd-tick"></span>
      <div class="selector-title">RM 89</div>
    </label>
    <label class="sd-label selector-label">
      <img id="scroll-to-section" class="svg-icon" src="img/unifihome1b.svg" alt="Unifi Home" @click="scrollToSection('pricing-section-2')">
      <input type="radio" class="sd-radio" name="plan" value="t"><span class="sd-tick"></span>
      <div class="selector-title">RM 129</div>
    </label>
    <label class="sd-label selector-label">
      <img id="scroll-to-section" class="svg-icon" src="img/unifihome1b.svg" alt="Unifi Home" @click="scrollToSection('pricing-section-3')">
      <input type="radio" class="sd-radio" name="plan" value="m"><span class="sd-tick"></span>
      <div class="selector-title">RM 149</div>
    </label>
    <div class="device-pair txt-small d-none">
      Pair with your Unifi subscription
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MySelector',
  methods: {
    scrollToSection: function(sectionId) {
          // Scroll to the specified section
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
  }
};
  // Add event listener to toggle selected class on click
  document.querySelectorAll('.svg-icon').forEach(item => {
    item.addEventListener('click', event => {
      // Remove selected class from all SVG icons
      document.querySelectorAll('.svg-icon').forEach(svg => {
        svg.classList.remove('selected');
      });
      // Add selected class to the clicked SVG icon
      event.target.classList.add('selected');
    });
  });
</script>

<style>
/* Set a fixed width and height for all SVG images */
.selector-label {
  position: relative;
  display: inline-block;
}

.selector-label .svg-icon {
  width: 80px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  cursor: pointer; /* Change cursor to pointer on hover */
}

/* Style for selected SVG */
.selected {
  border: 2px solid blue; /* Change border color to indicate selection */
}

/* Style for radio buttons */
.sd-radio {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px; /* Add some margin for spacing */
}
</style>


