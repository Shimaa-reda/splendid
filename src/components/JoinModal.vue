<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>
      <p class="text-start ms-2">Join Us</p>
      <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="number" placeholder="Phone Number">
        <input type="text" placeholder="Applying For Position">
        <input type="text" placeholder="Country">
        <input type="email" placeholder="City">
        <button type="submit" class="apply-button">Apply</button>
      </form>
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
  width: 500px; }

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

form {
  margin-bottom: 20px;
}

input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.apply-button {
  width: calc(100% - 20px);
  background-color: #f16a23;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button.apply-button:hover {
  background-color: #e2581b;
}
</style>
