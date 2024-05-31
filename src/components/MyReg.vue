<template>
  <h1 id="registration-form">Registration Form</h1>
 <form v-if="!showPopup" @submit.prevent="showPopup = true">
    <div class="form-group">
      <label for="package-name">Package Name:</label>
      <input type="text" id="package-name" name="package-name" required>
    </div>

    <div class="form-group">
      <label for="nric">NRIC / Passport No:</label>
      <input type="text" id="nric" name="nric" required>
    </div>

    <div class="form-group">
      <label for="nationality">Nationality:</label>
      <input type="text" id="nationality" name="nationality" required>
    </div>

    <div class="form-group">
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" required>
    </div>

    <div class="form-group">
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div class="form-group">
      <label for="address">Installation Address:</label>
      <textarea id="address" name="address" required></textarea>
    </div>

    <div class="form-group">
      <label for="state">State:</label>
      <input type="text" id="state" name="state" required>
    </div>

    <div class="form-group">
      <label for="contact-no">Contact No:</label>
      <input type="tel" id="contact-no" name="contact-no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890" required>
    </div>

    <div class="form-group">
      <label for="alt-contact-no">Alternate Contact No:</label>
      <input type="tel" id="alt-contact-no" name="alt-contact-no" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890" required>
    </div>

    <div class="form-group">
      <label for="pref-install-date">Preferred Installation Date:</label>
      <input type="date" id="pref-install-date" name="pref-install-date" required>
    </div>

    <div class="form-group">
      <label for="ic-front">IC Front:</label>
      <input type="file" id="ic-front" name="ic-front" accept="image/*" required>
    </div>

    <div class="form-group">
      <label for="ic-back">IC Back:</label>
      <input type="file" id="ic-back" name="ic-back" accept="image/*" required>
    </div>

    <div class="form-group">
      <label for="utility-bills">Utility Bills (Electric or Water):</label>
      <input type="file" id="utility-bills" name="utility-bills" accept="image/*" required>
    </div>

    <div class="form-group">
      <label for="remark">Remark:</label>
      <textarea id="remark" name="remark"></textarea>
    </div>

    <input type="submit" value="Register">
  </form>

 
</template>

<script>
export default {
  name: 'MyReg'
};
</script>

<style>
  .form-group {
  margin-bottom: 15px;
}

label {
  display: block;
}

input[type="text"],
input[type="tel"],
input[type="email"],
textarea,
select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

</style>