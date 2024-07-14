<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <p class="text-start ms-2">Contact Us</p>
      <!-- <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="number" placeholder="Phone Number">
        <input type="text" placeholder="Applying For Position">
        <input type="text" placeholder="Country">
        <input type="email" placeholder="City">
        <button type="submit" class="apply-button">Apply</button>
      </form> -->
      <div class="contact-us">
    <div class="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <p>Phone: +123456789</p>
      <p>Email: info@example.com</p>
      <h2>Our Branches</h2>
      <ul>
        <li>New York Branch</li>
        <li>London Branch</li>
        <li>Tokyo Branch</li>
      </ul>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 500px; /* Adjust width as needed */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

p {
  margin-top: 0;
  color: #f16a23;
  font-weight: bold;
}

.contact-us {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact-form {
  width: 45%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.contact-info {
  width: 45%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.contact-info h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 100px;
}

button {
  background-color: #f16a23;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e2581b;
}
</style>
