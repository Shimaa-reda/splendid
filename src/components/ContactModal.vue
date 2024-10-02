<template>
  <div class="modal" v-if="visible">
    <div class="modal-content">
      <span class="close-btn" @click="closeModal">&times;</span>

      <div
        class="contact-us d-flex justify-contenct-space-between align-items-flex-start"
      >
        <div class="contact-form">
          <h4 class="text-start">Contact Us</h4>
          <form>
            <div class="form-group">
              <input type="text" placeholder="Name" class="form-control" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email" class="form-control" />
            </div>
            <div class="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                placeholder="Applying For Position"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Country" class="form-control" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="City" class="form-control" />
            </div>
            <div class="form-group">
              <textarea
                id="message"
                placeholder="Message"
                class="form-control"
                rows="8"
              ></textarea>
            </div>

            <button type="submit" class="contact-button">Contact Us</button>
          </form>
        </div>

        <div class="divider"></div>

        <div class="contact-info">
          <h4 class="text-start">Our Contacts</h4>
          <p class="text-start"><b>UAE</b>: +971 4 409 6899</p>
          <p class="text-start"><b>KSA</b>: +966 12 601 7642</p>
          <p class="text-start">
            <b>Egypt</b>: +20 2 230 67380 / +20 2 230 67379
          </p>
          <p class="text-start"><b>Email</b>: info@splendidad.com</p>

          <hr>

          <h5 class="mt-3">United Kingdom</h5>
          <p class="text-black-50">
            116 Maidstone Road Chatham ME4 6DQ Registration number 11129823
          </p>

          <hr>

          <h5 class="mt-3">United Arab Emirates</h5>
          <p class="text-black-50">
            Office 2317, Level 23, Boulevard Plaza Tower 2, Sheikh Mohamed Bin
            Rashed Boulevard, Downtown, Dubai, United Arab Emirates
          </p>

          <hr>

          <h5 class="mt-3">EGYPT</h5>
          <p class="text-black-50">
            level 3, Trivium Business Complex, 5th Settlement, North 90 St. New
            Cairo I Office B14-B15, Cairo, Egypt
          </p>

          <hr>

          <h5 class="mt-3">Saudi Arabia - Jeddah</h5>
          <p class="text-black-50">
            Level 7 Al Murjanah Tower Prince Sultan St, Ar Rawdah Corner of
            Prince Sultan St. and Alkayyal St. PO Box 10113 Jeddah 21433, KSA
          </p>

          <hr>

          <h5 class="mt-3">Saudi Arabia - Riyadh Branch</h5>
          <p class="text-black-50">
            Ground Floor, Levels 1 & 2, Building S4, Roshn Business Front,
            Airport Road, P.O Box 22080, Riyadh 13413, Saudi Arabia
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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
  z-index: 1000;
  overflow: auto; 
}

.modal-content {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh; 
  overflow-y: auto; 
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

h4,
h5 {
  margin-top: 0;
  color: #f16a23;
  font-weight: bold;
}

.contact-form {
  width: 50%;
  padding: 10px; 
  border-radius: 8px;
}

.contact-info {
  width: 50%;
  padding: 10px; 
  border-radius: 8px;
}

.contact-info p {
  margin-bottom: 5px; 
  padding: 0;
  line-height: 1.4; 
  color: black;
}

/* Divider Line Style */
.divider {
  width: 1px;
  background-color: #ccc;
  margin: 0 10px; 
}


.contact-info h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 10px; 
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px; 
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea.form-control {
  height: auto; 
}

button.contact-button {
  width: 100%;
  background-color: #f16a23;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button.contact-button:hover {
  background-color: #e2581b;
}
</style>
