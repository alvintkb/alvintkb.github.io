<template>
 
    
<div class="pricing-container">
<section id="pricing-section-1" class="pricing-section">
    <div class="pricing-table">
        <div class="pricing-card">
            <h3 class="pricing-title">Unifi Home 100Mbps</h3>
            <div class="pricing-action">
                <button class="apply-now-btn" @click="fillPackageName('Unifi Home 100Mbps')">Apply Now</button>
              </div>
              
            <div class="pricing-details">
                <ul class="pricing-features-list">
                    <li>Unlimited Data</li>
                    <li>Download speed: 100mbps</li>
                    <li>Upload speed: 50mbps</li>
                    <li>Recommended for 2 - 3 users on up to 5 devices</li>
                    <li>Free Wi-Fi 5 router</li>
                    <li>Voice call flat rate 20 sen/min to all lines</li>
                    <li>24 months contract</li>
                    <li>Add On RM28/Month For Netflix</li>
                </ul>
                <div class="pricing-image">
                    <img loading="lazy" src="img/6month.jpeg" alt="Unifi Home 100Mbps">
                </div>
                <div class="pricing-info">
                    <p>PROMO: 1 MONTH FREE</p>
                    <p>RM89/Month</p>
                </div>
                <div class="pricing-content">
                    <p>FREE Wi-Fi 5 CERTIFIED ROUTER</p>
                </div>
              
            </div><!-- .pricing-details -->
        </div><!-- .pricing-card -->
        
        <!-- Add more pricing cards as needed -->
    </div><!-- .pricing-table -->
</section><!-- .pricing-section -->

<section id="pricing-section-2" class="pricing-section">
    <div class="pricing-table">
        <div class="pricing-card">
            <h3 class="pricing-title">Unifi Home 300Mbps</h3>
            <div class="pricing-action">
                <button class="apply-now-btn" @click="fillPackageName('Unifi Home 300Mbps')">Apply Now</button>
              </div>
            <div class="pricing-details">
                <ul class="pricing-features-list">
                    <li>Unlimited Data</li>
                    <li>Download speed: 100mbps</li>
                    <li>Upload speed: 50mbps</li>
                    <li>Recommended for 2 - 3 users on up to 5 devices</li>
                    <li>Free Wi-Fi 5 router</li>
                    <li>Voice call flat rate 20 sen/min to all lines</li>
                    <li>24 months contract</li>
                    <li>Add On RM28/Month For Netflix</li>
                </ul>
                <div class="pricing-image">
                    <img loading="lazy" src="img/6month.jpeg" alt="Unifi Home 100Mbps">
                </div>
                <div class="pricing-info">
                    <p>PROMO: 1 MONTH FREE</p>
                    <p>RM89/Month</p>
                </div>
                <div class="pricing-content">
                    <p>FREE Wi-Fi 5 CERTIFIED ROUTER</p>
                </div>
             
            </div><!-- .pricing-details -->
        </div><!-- .pricing-card -->
        
        <!-- Add more pricing cards as needed -->
    </div><!-- .pricing-table -->
</section><!-- .pricing-section -->

<section id="pricing-section-3" class="pricing-section">
    <div class="pricing-table">
        <div class="pricing-card">
            <h3 class="pricing-title">Unifi Home 500Mbps</h3>
            <div class="pricing-action">
                <button class="apply-now-btn" @click="fillPackageName('Unifi Home 500Mbps')">Apply Now</button>
              </div>
            <div class="pricing-details">
                <ul class="pricing-features-list">
                    <li>Unlimited Data</li>
                    <li>Download speed: 100mbps</li>
                    <li>Upload speed: 50mbps</li>
                    <li>Recommended for 2 - 3 users on up to 5 devices</li>
                    <li>Free Wi-Fi 5 router</li>
                    <li>Voice call flat rate 20 sen/min to all lines</li>
                    <li>24 months contract</li>
                    <li>Add On RM28/Month For Netflix</li>
                </ul>
                <div class="pricing-image">
                    <img loading="lazy" src="img/6month.jpeg" alt="Unifi Home 100Mbps">
                </div>
                <div class="pricing-info">
                    <p>PROMO: 1 MONTH FREE</p>
                    <p>RM89/Month</p>
                </div>
                <div class="pricing-content">
                    <p>FREE Wi-Fi 5 CERTIFIED ROUTER</p>
                </div>
              
            </div><!-- .pricing-details -->
        </div><!-- .pricing-card -->
        
        <!-- Add more pricing cards as needed -->
    </div><!-- .pricing-table -->
</section><!-- .pricing-section -->
</div>

</template>

<script>
export default {
  name: 'MyPackage',
  methods: {
    
    fillPackageName: function(packageName) {
          this.packageName = packageName;
          // Target the input field directly
          document.getElementById('package-name').value = packageName;
          // Scroll to the registration form section
          document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
        }
      
  }
};

</script>

<style>
/* CSS for responsive layout */

body {
 font-family: Arial, sans-serif;
 margin: 0;
 padding: 20px;
}

h1 {
 text-align: center;
}

form {
 max-width: 500px;
 margin: 0 auto;
}

.pricing-container {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
}

.pricing-section {
 width: calc(33.33% - 20px);
 margin-bottom: 20px;
 background-color: #D9f9f9;
 border-radius: 10px;
 padding: 20px;
}

.pricing-details {
 flex: 1; /* Allow flex-grow */
}

.pricing-image img {
 max-width: 100%;
 height: auto;
}

.apply-now-btn {
 display: inline-block;
 padding: 10px 20px;
 background-color: #4CAF50; /* Set background color */
 color: white; /* Set text color */
 text-decoration: none;
 border-radius: 5px;
}

.apply-now-btn:hover {
 background-color: #45a049; /* Change background color on hover */
}

@media only screen and (max-width: 768px) {
 .pricing-section {
     width: 100%;
 }
}

   </style>