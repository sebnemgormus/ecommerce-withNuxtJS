<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-links-wrapper">
        <div 
          v-for="(group, index) in footerGroups" 
          :key="index" 
          class="link-group" 
          :class="{ 'contact-group': group.title === 'CONTACT US' }">
          
          <div class="group-header" @click="toggleGroup(index)">
            <h3 class="group-title">{{ group.title }}</h3>
            <span class="toggle-icon mobile-only" v-if="!isDesktop">
              <svg :class="{ 'open': group.isOpen }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 10L12 14L8 10" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <transition name="accordion">
            <ul v-show="group.isOpen || isDesktop" class="group-list">
                <li v-for="(link, i) in group.links" :key="i">
                <a :href="link.url" v-if="link.type === 'link'">{{ link.text }}</a>
                <template v-else-if="link.type === 'contact'">
           <Icon 
               :name="link.iconClass" 
               class="contact-icon" 
               width="16" 
               height="16" 
           />
           <span class="contact-text">{{ link.text }}</span>
                </template>
            </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-links">
        <a href="#" class="social-icon facebook">
            <Icon name="mdi:facebook" width="20" height="20" />
        </a>
        <a href="#" class="social-icon twitter">
            <Icon name="mdi:twitter" width="20" height="20" />
        </a>
        <a href="#" class="social-icon instagram">
            <Icon name="mdi:instagram" width="20" height="20" />
        </a>
        <a href="#" class="social-icon youtube">
            <Icon name="mdi:youtube" width="20" height="20" />
        </a>
        <a href="#" class="social-icon pinterest">
            <Icon name="mdi:pinterest" width="20" height="20" />
        </a>
    </div>
    <p class="copyright">
       &copy; Watsons 2021 all rıghts reserved  |  a member of ck hutchıson holdıngs
    </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, reactive } from 'vue';

const footerGroups = reactive([
  {
    title: 'CORPORATE',
    isOpen: false,
    links: [
      { type: 'link', text: 'About us', url: '#' },
      { type: 'link', text: 'Press', url: '#' },
      { type: 'link', text: 'Human resources', url: '#' },
      { type: 'link', text: 'News from us', url: '#' },
    ],
  },
  {
    title: 'SHOPPING',
    isOpen: false,
    links: [
      { type: 'link', text: 'Order and Payment', url: '#' },
      { type: 'link', text: 'Cancellation and Refund', url: '#' },
      { type: 'link', text: 'Delivery Conditions', url: '#' },
      { type: 'link', text: 'Secure shopping', url: '#' },
    ],
  },
  {
    title: 'LEGAL',
    isOpen: false,
    links: [
      { type: 'link', text: 'Terms of Use', url: '#' },
      { type: 'link', text: 'Privacy Policy', url: '#' },
      { type: 'link', text: 'Membership Agreement', url: '#' },
      { type: 'link', text: 'Distance Selling Contract', url: '#' },
    ],
  },
    {
    title: 'HELP CENTER',
    isOpen: false,
    links: [
      { type: 'link', text: 'FAQ', url: '#' },
      { type: 'link', text: 'Contact center', url: '#' },
    ],
  },
  {
    title: 'CONTACT US', 
    isOpen: false,
    links: [
      { type: 'contact', iconClass: 'mdi:map-marker', text: 'Saray Mah. Site Yolu Cad. Anel İş Merkez, D No:5/4, 34768 Ümraniye/İstanbul' },
      { type: 'contact', iconClass: 'mdi:phone', text: '0850 755 9987' },
      { type: 'contact', iconClass: 'mdi:email', text: 'info@watsons.com.tr' },
    ],
  },
]);

const windowWidth = ref(0); 
const desktopBreakpoint = 768; 

const isDesktop = computed(() => {
  return windowWidth.value >= desktopBreakpoint;
});

const handleResize = () => {
  const previousWidth = windowWidth.value; 
  windowWidth.value = window.innerWidth;
  
  if (previousWidth >= desktopBreakpoint && windowWidth.value < desktopBreakpoint) {
    footerGroups.forEach(group => {
      group.isOpen = false; 
    });
  }
  else if (previousWidth < desktopBreakpoint && windowWidth.value >= desktopBreakpoint) {
    footerGroups.forEach(group => {
      group.isOpen = true; 
    });
  }
};

const toggleGroup = (index) => {
  if (!isDesktop.value) {
    footerGroups.forEach((group, i) => {
      if (i !== index) {
        group.isOpen = false;
      }
    });

    footerGroups[index].isOpen = !footerGroups[index].isOpen;
  }
};

onMounted(() => {
  windowWidth.value = window.innerWidth; 
  window.addEventListener('resize', handleResize);
  
  if (isDesktop.value) {
      footerGroups.forEach(group => group.isOpen = true);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

.main-footer {
  background-color: #ffffff;
  color: #485363;
  padding: 6px 0 10px 0;
  font-family: sans-serif;
}

.footer-content {
  padding: 0 15px;
}

.link-group {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px 0;
}

.group-title {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  color: #2A2A48;
}

.toggle-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.toggle-icon svg {
  width: 14px;
  height: 14px;
}

.toggle-icon .open {
  transform: rotate(180deg);
}

.group-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
}

.group-list li {
  margin-bottom: 5px;
}

.group-list a {
  text-decoration: none;
  color: #485363;
  font-size: 12px;
  font-weight: 400;
}

.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
  max-height: 200px;
}

.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.contact-group .group-list li {
    display: flex; 
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    align-items: center; 
    gap: 8px;
    line-height: 1.5rem;
}

.contact-group .group-list li i {
    margin-right: 10px;
}

.footer-bottom {
  text-align: center;
  padding: 15px 15px 5px 15px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 15px;
}

.social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  text-decoration: none;
}
.facebook { background-color: #3b5998; }
.twitter { background-color: #00acee; }
.instagram { background-color: #e1306c; }
.youtube { background-color: #ff0000; }
.pinterest { background-color: #c8232c; }

.copyright {
  font-size: 10px;
  font-weight: 500;
  color: #8493A8;
  text-transform: uppercase;
}

/* Desktop*/

@media (min-width: 48rem) {
   .main-footer {
    background-color: #ffffff;
    color: #485363;
    padding: 42px 0 10px 0;
    font-family: sans-serif;
    }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex; 
    justify-content: space-between;
    padding: 20px 50px;
  }
  
  .footer-links-wrapper {
      display: flex; 
      flex-grow: 1; 
      justify-content: space-between;
  }

  .link-group {
    border-bottom: none;
    padding: 0;
    width: auto; 
  }
  
  .group-header {
    cursor: default;
  }
  .toggle-icon {
    display: none;
  }

  .group-list {
    display: block !important;
    margin-top: 1.5rem;
  }
  
  .contact-group { 
    order: 2; 
    flex-shrink: 0; 
    margin-left: 40px;
  }

  .footer-links-wrapper > .link-group:not(.contact-group) {
    order: 1;
    flex-basis: 20%; 
  }

  .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 50px;
      max-width: 1400px;
      margin: 0 auto;
  }

  .social-links {
      order: 2;
      margin-bottom: 0;
  }

  .copyright {
      order: 1;
  }
}
</style>