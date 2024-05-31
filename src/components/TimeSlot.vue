<template>
  <div>
    <label for="appointment_time">Appointment Time:</label>
    <select v-model="selectedAppointmentTime" id="appointment_time" class="form-control">
      <option disabled value="">Select time</option>
      <option v-for="time in appointmentTimes" :key="time" :value="time">{{ time }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectedTime: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      appointmentTimes: this.generateAppointmentTimes()
    };
  },
  computed: {
    selectedAppointmentTime: {
      get() {
        return this.selectedTime;
      },
      set(value) {
        this.$emit('update:selectedTime', value);
      }
    }
  },
  methods: {
    generateAppointmentTimes() {
      let times = [];
      for (let hour = 10; hour <= 17; hour++) {
        times.push(this.convertToAMPM(hour, 0));
        times.push(this.convertToAMPM(hour, 30));
      }
      return times;
    },
    convertToAMPM(hour, minute) {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const adjustedHour = hour % 12 === 0 ? 12 : hour % 12;
      const adjustedMinute = minute.toString().padStart(2, '0');
      return `${adjustedHour}:${adjustedMinute} ${ampm}`;
    }
  }
};
</script>

<style scoped>
/* Add your component's styles here */
.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
</style>
