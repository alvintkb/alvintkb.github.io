<template>
  <div>
    <svg width="400" height="200">
      <!-- Draw rectangles for nodes -->
      <rect x="50" y="20" width="100" height="50" fill="#f2f2f2" stroke="#000" stroke-width="1"/>
      <rect x="250" y="20" width="100" height="50" fill="#f2f2f2" stroke="#000" stroke-width="1"/>
      <rect x="150" y="120" width="100" height="50" fill="#f2f2f2" stroke="#000" stroke-width="1"/>
      
      <!-- Draw lines for connections -->
      <line x1="100" y1="45" x2="250" y2="45" stroke="#000" stroke-width="1"/>
      <line x1="200" y1="70" x2="200" y2="120" stroke="#000" stroke-width="1"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FlowChart',
}
</script>

<style>
/* Add your custom styles here */
</style>
