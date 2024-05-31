<template>
  <div class="elementor-container">
    <div class="elementor-column elementor-col-25 elementor-top-column"></div>
  
    <div class="elementor-column elementor-col-50 elementor-top-column form-container">
      <div class="elementor-widget-wrap elementor-element-populated">
        <div class="elementor-widget elementor-widget-text-editor">
          <div class="elementor-widget-container">
            <p class="bright-text">Register your interest</p>
          </div>
        </div>
        <div class="elementor-widget elementor-widget-text-editor">
          <div class="elementor-widget-container">
            <p class="bright-text"> Fill up your details and we would be delighted to assist you.&nbsp;</p>
          </div>
        </div>
        <div class="elementor-widget elementor-widget-fluent-form-widget">
          <div class="elementor-widget-container">
            <div class="fluentform-widget-wrapper fluentform-widget-align-center">
              <div class="fluentform">
                <form @submit.prevent="handleSubmit" id="fluentform_1">
                  <fieldset>
                    <legend class="ff_screen_reader_title">Enquiry Form</legend>
                    <input type="hidden" name="__fluent_form_embded_post_id" value="6">
                    <input type="hidden" id="_fluentform_1_fluentformnonce" name="_fluentform_1_fluentformnonce" value="32356f147a">
                    <input type="hidden" name="_wp_http_referer" value="/">
                    <div class="ff-el-group ff-el-form-hide_label">
                      <label for="ff_1_input_text" class="ff-el-is-required">Name</label>
                      <input type="text" v-model="form.name" id="ff_1_input_text" class="ff-el-form-control" placeholder="Name*" required>
                    </div>
                    <div class="ff-el-group ff-el-form-hide_label">
                      <label for="ff_1_email" class="ff-el-is-required">Email</label>
                      <input type="email" v-model="form.email" id="ff_1_email" class="ff-el-form-control" placeholder="Email*" required>
                    </div>
                    <div class="ff-el-group ff-el-form-hide_label">
                      <label for="ff_1_input_text_3" class="ff-el-is-required">Mobile</label>
                      <input type="text" v-model="form.mobile" id="ff_1_input_text_3" class="ff-el-form-control" placeholder="Mobile*" required>
                    </div>
                    <div class="ff-el-group ff-el-form-hide_label">
                      <label for="ff_1_input_text_2">Message</label>
                      <input type="text" v-model="form.message" id="ff_1_input_text_2" class="ff-el-form-control" placeholder="Message">
                    </div>
                    <div class="ff-el-group ff-text-center ff_submit_btn_wrapper">
                      <button type="submit" class="ff-btn ff-btn-submit">Yes! Contact Me Now</button>
                    </div>
                  </fieldset>
                </form>
                <div v-if="formErrors.length" id="fluentform_1_errors" class="ff-errors-in-stack">
                  <ul>
                    <li v-for="error in formErrors" :key="error">{{ error }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="elementor-widget elementor-widget-text-editor">
          <div class="elementor-widget-container">
            <p class="bright-text">Select Appointment Date:</p>
            <input type="date" v-model="form.appointmentDate" class="ff-el-form-control" required>
          </div>
        </div>
      
      </div>

      <TimeSlot/>
    </div>
 
   
    <div class="elementor-column elementor-col-25 elementor-top-column"></div>
    
  </div>
</template>

<script>

import TimeSlot from './TimeSlot.vue';
export default {
  components: {
    TimeSlot
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        mobile: '',
        message: '',
        appointmentDate: '' // Add appointmentDate field to form data
      },
      formErrors: []
    };
  },
  methods: {
    handleSubmit() {
      this.formErrors = [];

      if (!this.form.name) {
        this.formErrors.push("Name is required.");
      }
      if (!this.form.email) {
        this.formErrors.push("Email is required.");
      } else if (!this.validEmail(this.form.email)) {
        this.formErrors.push("Valid email is required.");
      }
      if (!this.form.mobile) {
        this.formErrors.push("Mobile is required.");
      }
      if (!this.form.appointmentDate) {
        this.formErrors.push("Appointment Date is required.");
      }

      if (!this.formErrors.length) {
        // Submit form data to the server
        console.log("Form submitted", this.form);
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    }
  }
};
</script>

<style>
.elementor-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.elementor-column {
  padding: 10px;
  flex: 1;
  min-width: 300px;
}
.elementor-widget-wrap {
  margin: 10px;
}
.elementor-widget-container {
  margin-bottom: 15px;
}
.form-container {
  background-image: url('https://res.cloudinary.com/dcqqec7wa/image/upload/v1716336696/Commons/pexels-catiamatos-1072179_y9sydq.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
}
.fluentform fieldset {
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  min-inline-size: 100%;
}
.ff_screen_reader_title {
  display: block;
  margin: 0;
  padding: 0;
  height: 0;
  text-indent: -999999px;
  width: 0;
  overflow: hidden;
}
.ff-el-group {
  margin-bottom: 10px;
}
.ff-el-form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
.ff-btn-submit {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}
.ff-btn-submit:hover {
  background-color: #0056b3
}
.ff-errors-in-stack {
  color: red;
  margin-top: 10px;
}
@media (max-width: 768px) {
  .elementor-column {
    flex-basis: 100%;
  }
  .ff-btn-submit {
    width: auto;
  }
}
.bright-text {
  color: #ffffff; /* Bright white color */
}
</style>
