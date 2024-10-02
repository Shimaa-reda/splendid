<template>
<div class="parent">
  <h3 class="pt-5">Innovative solutions tailored for you</h3>
  <div class="vertical-tabs container" id="services">
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        <img :src="require('@/assets/' + tab.icon)" class="tab-icon" alt="icon" />
        <span class="tab-title">{{ tab.title }}</span>
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

  <h3 class="pb-5 mt-5">Ready to take your brand to the next level? 
    <button class="contact-btn" @click="showModal = true">Contact Us</button></h3>

    
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
              <li><i class="bi bi-check2"></i> Advertising strategy</li>
              <li><i class="bi bi-check2"></i> Creative platform origination</li>
              <li><i class="bi bi-check2"></i> Concept testing</li>
              <li><i class="bi bi-check2"></i> Copywriting</li>
              <li><i class="bi bi-check2"></i> Broadcast media production</li>
              <li><i class="bi bi-check2"></i> Production</li>
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap3.png',
          title: 'EVENT MANAGEMENT',
          content: `
            <ul class="text-start">
             
              <li><i class="bi bi-check2"></i>Web Development</li>
              <li><i class="bi bi-check2"></i>Mobile and Slate</li>
              <li><i class="bi bi-check2"></i>Application Development</li>
              <li><i class="bi bi-check2"></i>Digital Brand Analytics</li>
               <li><i class="bi bi-check2"></i>Social Media</li>
              <li><i class="bi bi-check2"></i>Trade Show</li>
              <li><i class="bi bi-check2"></i>Health Gaming</li>
              <li><i class="bi bi-check2"></i>E-Detailing and CLM Platform production</li>
              <li><i class="bi bi-check2"></i>Video Production</li>
              <li><i class="bi bi-check2"></i>Interactive Platform</li>

            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap4.png',
          title: 'DIGITAL MEDIA',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i>Corporate PR strategy and planning</li>
              <li><i class="bi bi-check2"></i>Media relations</li>
              <li><i class="bi bi-check2"></i>Public affairs & governmental relations</li>
              <li><i class="bi bi-check2"></i>Interpersonal communications</li>
              <li><i class="bi bi-check2"></i>CSR management</li>
              <li><i class="bi bi-check2"></i>CRM and loyalty marketing</li>
              <li><i class="bi bi-check2"></i>Crisis management</li>

            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap5.png',
          title: 'PUBLIC RELATIONS',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i>Marketing Training</li>
              <li><i class="bi bi-check2"></i>Business Training</li>
              <li><i class="bi bi-check2"></i>Strategic Planning for mangers</li>
              <li><i class="bi bi-check2"></i>Measuring ROI of Training</li>
             
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap6.png',
          title: 'TRAINING',
          content: `
            <ul class="text-start">
              <li><i class="bi bi-check2"></i>Internal newsletters</li>
              <li><i class="bi bi-check2"></i>Internal meetings, cycle meetings and sales conferences</li>
              <li><i class="bi bi-check2"></i>Employees workshops and training program</li>
              
            </ul>
          `,
          image: 'tap1-image.png',
        },
        {
          icon: 'tap7.png',
          title: 'INTERNAL RELATIONS & TEAM BUILDING ACTIVITIES',
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
/* Global styles */
.bi {
  color: green;
  font-size: 24px; 
}

ul {
  list-style-type: none; 
  padding-left: 0;
}

ul li {
  line-height: 2;
}
</style>

<style scoped>

.header {
  display: flex;
  align-items: center;
  margin-left: 28px; 
}

.header-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

h4.text-start {
  margin: 0; 
  font-size: 1.25rem; 
  color: #F16A23;
  font-weight: bold;
}

/* Styles for larger screens (default) */
.vertical-tabs {
  display: flex;
  height: 100vh;
  
}

.tabs {
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  padding-right: 10px;
  margin-top: 130px;
}

.parent{
  background-color: #F1F5F9;
}
.white-background {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.1);
}
.tab {
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; 
}

.tab img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.tab.active {
  font-weight: bold;
  color: #f16a23;

}
.content-row {
  display: flex;
  flex-wrap: wrap;
 }
.tab-title {
  display: inline; 
}

.content-container {
  flex: 3;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.content {
  display: flex;
  align-items: center;
  height: 100%;
}
.content-container {
  /* flex: 3; */
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-btn {
  background: linear-gradient(to bottom, #FFC371, #F16A23);
  border: none;
  color: white;
  padding: 0.375rem 0.75rem; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem; 
  cursor: pointer;
  border-radius: 5px;
  line-height: 1.5; 
}

/* Responsive styles for smaller screens (below 768px) */
@media (max-width: 768px) {
  .tab.active {
 
  color: #f16a23;
  border-bottom: 2px solid #f16a23;
  
}
  .vertical-tabs {
    flex-direction: column;
  }

  .tabs {
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    margin-top: 0px;
  }

  .tab {
    padding: 10px;
    margin-right: 10px; 
    /* border-bottom: 1px solid #F16A23;; */
    /* border-right: 1px solid #ccc;  */
    
    
  }

  .tab img {
    margin-right: 0; 
    margin-bottom: 5px; 

  }

  .tab-title {
    display: none; 
  }

  .content-container {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

</style>

<style>
/* Global styles */
.bi {
  color: green;
  font-size: 24px; 
}

ul {
  list-style-type: none; 
  padding-left: 0;
}

ul li {
  line-height: 2;
}
</style>

