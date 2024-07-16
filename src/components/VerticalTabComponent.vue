<template>
  <div class="vertical-tabs">
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
                <h2>{{ tab.title }}</h2>
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
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap2.png',
          title: 'ADVERTISING',
           content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap3.png',
          title: 'EVENT MANAGEMENT',
           content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap4.png',
          title: 'DIGITAL MEDIA',
          content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap5.png',
          title: 'PUBLIC RELATIONS',
           content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap6.png',
          title: 'TRAINING',
          content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap7.png',
          title: 'INTERNAL RELATIONS & TEAM BUILDING ACTIVITIES',
           content: `
            <ul class="text-start">
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
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
  height: 100vh; /* Adjust height as needed */
  background-color: #D9E4EF57;
}

.tabs {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  background-color: #f9f9f9; /* Adjust background color */
}

.tab {
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #ccc; /* Add border to separate tabs */
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

.white-background {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow:  30px 30px rgba(0, 0, 0, 0.1);

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
  padding-left: 20px; /* Optional: Add some left padding to align with content */
}

.header {
  display: flex;
  align-items: center;
}

.header-icon {
  margin-right: 10px;
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
}
</style>
