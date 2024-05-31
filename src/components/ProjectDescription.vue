<template>
  <div class="project-container">
    <div class="project-description">
      <h1>PROJECT DESCRIPTION: TCS ARCADIA, BANDAR SAUJANA PUTRA</h1>
      <p><strong>The Developer:</strong> TCS Group</p>
      <p><strong>Address:</strong> Bandar Saujana Putra</p>
      <p><strong>Leasehold</strong></p>
      <p><strong>Built Ups:</strong> From 816sq.ft, 973sq.ft, and 976sq.ft</p>
      <p><strong>Selling Price Range:</strong> RM330,000 onwards ~</p>
      <p><strong>2 Bedrooms 2 Bathrooms to 3 Bedrooms 2 Bathrooms</strong></p>

      <h2>PROMOTIONAL PACKAGE</h2>
      <ul>
        <li>Booking Fee RM1,000</li>
        <li>ZERO DownPayment</li>
        <li>FREE Car Park</li>
        <li>FREE SPA & LOAN Legal Fees</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  justify-content: center;
  background-color: white; /* Set the background to white */
}

.project-description {
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  border: 2px solid #ccc;
  border-radius: 10px;
  max-width: calc(100% / 3); /* 1/3 of the screen width */
  width: 100%;
  background-color: darkblue; /* Set the background to dark blue */
  color: white; /* Set the font color to maximum white */
}

h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}

ul {
  padding-left: 20px;
  margin: 5px 0;
}

ul ul {
  padding-left: 20px;
  list-style-type: circle;
}

li {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .project-description {
    padding: 10px;
  }

  h1 {
    font-size: 1.2em;
  }

  h2 {
    font-size: 1em;
  }
}
</style>

<script>
export default {
  name: 'ProjectDescription'
};
</script>
