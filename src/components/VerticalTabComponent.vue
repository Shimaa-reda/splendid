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
        <div class="col-lg-6 col-md-6 col-sm-12 content-text" v-html="tab.content"></div>
        <div class="col-lg-6 col-md-6 col-sm-12 content-image">
          <img :src="require('@/assets/' + tab.image)" alt="tab image" class="w-100" />
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
            <div class="header"><h2>Marketing</h2></div>
            <ul>
              <li>Market analysis and planning</li>
              <li>Strategic forecasting</li>
              <li>Benchmarking</li>
              <li>Market testing</li>
              <li>Market research</li>
              <li>Telephone call center experiential communication</li>
            </ul>
          `,
          image:'tap1-image.png'
        },
        {
          icon: 'tap2.png',
          title: 'ADVERTISING',
          content: `
            <div class="header"><h2>Advertising</h2></div>
            <p>Content for Advertising</p>
          `,
          image:'tap1-image.png'
        },
        {
          icon: 'tap3.png',
          title: 'EVENT MANAGEMENT',
          content: `
            <div class="header"><h2>Event Management</h2></div>
            <p>Content for Event Management</p>
          `,
          image:'tap1-image.png'
        },
        {
          icon: 'tap4.png',
          title: 'DIGITAL MEDIA',
          content: `
            <div class="header"><h2>Digital Media</h2></div>
            <p>Content for Digital Media</p>
          `,
          image:'tap1-image.png'

        },
        {
          icon: 'tap5.png',
          title: 'PUBLIC RELATIONS',
          content: `
            <div class="header"><h2>Public Relations</h2></div>
            <p>Content for Public Relations</p>
          `,
          image:'tap1-image.png'
        },
        {
          icon: 'tap6.png',
          title: 'TRAINING',
          content: `
            <div class="header"><h2>Training</h2></div>
            <p>Content for Training</p>
          `,
          image:'tap1-image.png'
        },
        {
          icon: 'tap7.png',
          title: 'INTERNAL RELATIONS & TEAM BUILDING ACTIVITIES',
          content: `
            <div class="header"><h2>Internal Relations & Team Building Activities</h2></div>
            <p>Content for Internal Relations & Team Building Activities</p>
          `,
          image:'tap1-image.png'
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
  overflow-y: auto; 
  /* background-color: white; */
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  
}

.content {
  display: flex;
}

.content-text {
  flex: 2;
  padding-right: 20px;
}

.content-image {
  flex: 1;
}

.content-image img {
  max-width: 100%;
  height: auto;
}

h2 {
  margin-top: 0;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
