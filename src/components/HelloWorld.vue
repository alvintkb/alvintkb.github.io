<template>

        <MyCarousel />
        <MySelector />
        <MyPackage/>
        <MyReg />
 
 
</template>

<script>

import MyCarousel from './MyCarousel.vue'; // Assuming the file name is MyApple.vue
import MyPackage from './MyPackage.vue'; // Assuming the file name is MyApple.vue
import MyReg from './MyReg.vue'; // Assuming the file name is MyApple.vue
import MySelector from './MySelector.vue'; // Assuming the file name is MyApple.vue


export default {
  components: {
    MyCarousel,
    MyPackage, 
    MySelector,
    MyReg,
  
    
  },data() {
    return {
      showLaunchButton: false, // Boolean to control visibility
    };
  },
};
</script>


