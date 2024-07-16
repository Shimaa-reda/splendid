<template>
<div class="parent">
   <h3 class="pt-5">Innovative solutions tailored for you</h3>
 <div class="vertical-tabs" id="services">
    
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        <img :src="require('@/assets/' + tab.icon)" class="tab-icon" alt="icon" />
        {{ tab.title }}
      </div>
    </div>
    <div class="content-container">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="content">
        <div class="white-background">
          <div class="content-row">
            <div class="content-text col-lg-6 col-md-6 col-sm-12">
              <div class="header">
                <img :src="require('@/assets/' + tab.icon)" alt="Header Icon" class="header-icon" />
                <h4 class="text-start">{{ tab.title }}</h4>
              </div>
              <div v-html="tab.content"></div>
            </div>
            <div class="content-image col-lg-6 col-md-6 col-sm-12">
              <img :src="require('@/assets/' + tab.image)" alt="tab image" class="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   <h3 class="pb-5">Ready to take your brand to the next level? <button class="contact-btn" @click="showModal = true">Contact Us</button></h3>
</div>
 
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          icon: 'tap1.png',
          title: 'MARKETING',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap2.png',
          title: 'ADVERTISING',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap3.png',
          title: 'EVENT MANAGEMENT',
          content: `
            <ul class="text-start">
             <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap4.png',
          title: 'DIGITAL MEDIA',
          content: `
            <ul class="text-start">
             <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap5.png',
          title: 'PUBLIC RELATIONS',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap6.png',
          title: 'TRAINING',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap7.png',
          title: 'INTERNAL TEAM BUILDING INTERNAL',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i> Market analysis and planning</li>
              <li><i class="bi bi-check2"></i> Strategic forecasting</li>
              <li><i class="bi bi-check2"></i> Benchmarking</li>
              <li><i class="bi bi-check2"></i> Market testing</li>
              <li><i class="bi bi-check2"></i> Market research</li>
              <li><i class="bi bi-check2"></i> Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
      ],
    };
  },
};
</script>

<style>
.vertical-tabs {
  display: flex;
  height: 100vh;  
  /* background-color: #D9E4EF57; */
}
.parent{
   /* height: 100vh;  */
  background-color: #D9E4EF57;
}
.tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center tabs vertically */
  /* border-right: 1px solid #ccc;
  background-color: #f9f9f9;  */
}

.tab {
  padding: 15px;
  cursor: pointer;
  /* border-bottom: 1px solid #ccc;  */
  display: flex;
  align-items: center;
}

.tab img {
  margin-right: 10px;
}

.tab.active {
  border-bottom: 2px solid #F16A23;
 
  font-weight: bold;
}

.content-container {
  flex: 3;
  padding: 15px;
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

.content {
  display: flex;
  align-items: center; /* Center content vertically */
  height: 100%;
}
.parent h3{
  color: #002347;
  font-weight: bold;
  /* margin-top: 10px; */
}


.white-background {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow:  20px 20px rgba(0, 0, 0, 0.1);
}

.content-row {
  display: flex;
  justify-content: space-between;
}

.content-text {
  flex: 1;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
}

.content-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-image img {
  max-width: 100%;
  height: auto;
}

h2 {
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  /* padding-left: 20px;  */
  line-height: 2;
}

.header {
  display: flex;
  align-items: center;
  color: #F16A23;
}

.header-icon {
  margin-right: 10px;
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
}

.contact-btn {
  background: linear-gradient(to bottom, #FFC371, #F16A23);
  border: none;
  color: white;
  padding: 0.375rem 0.75rem; /* Adjust padding to match the navbar */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem; /* Ensure font size matches navbar links */
  cursor: pointer;
  border-radius: 5px;
  line-height: 1.5; /* Align the button vertically with the navbar */
}
.bi {
  color: green; 
   font-size: 24px;

}
</style>
