<template>
  <div :class="['mobile-header-overlay', { 'is-open': isOpen }]" @click.self="$emit('close')">
    <div class="mobile-header-content"> 
      <div class="mobile-header-top">
        <button class="close-btn" @click="$emit('close')">
          <span v-html="closeIcon" class="close-svg-icon"></span>
        </button>
        <h2 class="menu-title">Menu</h2>
      </div>
      <nav class="mobile-category-nav">
        <div v-if="currentMenu === 'sub'" class="submenu-header">
            <button class="back-btn" @click="goBack">
                <span>Skin Care</span>
                <span v-html="arrowIcon" class="back-arrow"></span>
            </button>
        </div>
        <ul v-if="currentMenu === 'main'">
          <li v-for="category in mainCategories" :key="category.name">
            <NuxtLink :to="category.path" @click="handleCategoryClick(category)">
              <span v-html="arrowIcon" class="arrow-svg-icon"></span>
              <span>{{ category.name }}</span>
            </NuxtLink>
          </li>
        </ul>
        <ul v-else-if="currentMenu === 'sub'">
          <li v-for="subCategory in subCategories.skinCare" :key="subCategory.name" class="skincare">
            <NuxtLink :to="subCategory.path" @click="$emit('close')">
              <span>{{ subCategory.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="mobile-action-links" v-if="currentMenu === 'main'">
        <ul>
          <li>
            <NuxtLink to="/" @click="$emit('close')">
              <div class="action-group">
                <div class="link-content">
                  <span>My profile</span>
                </div>
                    <span v-html="profileIcon" class="left-icon icon-svg"></span>
              </div >
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" @click="$emit('close')">
              <div class="action-group">
                <div class="link-content">
                  <span>Order history</span>
                </div>
               <span v-html="orderIcon" class="left-icon icon-svg"></span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" @click="$emit('close')">
              <div class="action-group">
                <div class="link-content">
                  <span>Help center</span>
                </div>
                <span v-html="helpIcon" class="left-icon icon-svg"></span>
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" @click="$emit('close')">
              <div class="action-group">
                <div class="link-content">  
                  <span>Log out</span>
                </div>
                <span v-html="logoutIcon" class="left-icon icon-svg"></span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import closeIcon from '~/assets/icons/close.svg?raw';
import arrowIcon from '~/assets/icons/leftarrow.svg?raw';
import profileIcon from '~/assets/icons/profile.svg?raw';
import orderIcon from '~/assets/icons/order.svg?raw';
import helpIcon from '~/assets/icons/help.svg?raw';
import logoutIcon from '~/assets/icons/logout.svg?raw';

const props = defineProps({ 
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  }
});
const emits = defineEmits(['close']);

const currentMenu = ref('main'); 

const mainCategories = [
  { name: 'Campaigns', path: '#', hasSub: false },
  { name: 'Personal Care', path: '#', hasSub: false },
  { name: 'Skin Care', path: null, hasSub: true, subKey: 'skinCare' }, 
  { name: 'Make - Up', path: '#', hasSub: false },
  { name: 'Mother & Baby', path: '#', hasSub: false },
  { name: 'Men Care', path: '#', hasSub: false },
  { name: 'Healthy Life', path: '#', hasSub: false },
  { name: 'Brands', path: '#', hasSub: false },
];

const subCategories = {
    skinCare: [
        { name: 'Facial Treatment', path: '#'},
        { name: 'Hand and Face Care', path: '#' },
        { name: 'Natural Skin Products', path: '#' },
    ]
};

const handleCategoryClick = (category) => {
    if (category.hasSub && category.subKey === 'skinCare') {
        currentMenu.value = 'sub';
    } else if (category.path) {
        emits('close');
    }
};

const goBack = () => {
    currentMenu.value = 'main';
};
</script>

<style scoped>

.mobile-header-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 100;
  transform: translateX(100%); 
  transition: transform 0.3s ease-in-out;
}
.mobile-header-overlay.is-open {
  transform: translateX(0); 
}
.mobile-header-content {
  width: 100%; 
  max-width: none; 
  height: 100%;
  background-color: #ffffff; 
  padding: 0;
  position: relative; 
  display: flex; 
  flex-direction: column;
  overflow-y: auto; 
}

.mobile-header-top {
  background-color: #F2F0FF; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  margin-bottom: 0;
  position: relative;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  padding: 0;
  z-index: 10;
}

.close-svg-icon {
  display: flex;
  align-items: center;
  vertical-align: middle; 
}

.close-svg-icon :deep(svg) {
  width: 1rem; 
  height: 0.75rem; 
  fill: #2A2A48; 
  stroke: none;
}

.menu-title {
  position: relative; 
  font-size: 20px;
  font-weight: 500;
  color: #2A2A48;
}

.mobile-category-nav { 
    flex-grow: 1; 
    border-top: 1px solid #ECECEC; 
}

.submenu-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #ECECEC; 
}

.submenu-header span {
    font-size: 16px;
    font-weight: 500;
    color: #2A2A48;
}

.submenu-header .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #485363;
    padding: 0;
}

.submenu-header .back-arrow :deep(svg) {
    width: 1rem; 
    height: 1rem; 
    fill: #485363; 
    transform: rotate(180deg);
}

.mobile-category-nav ul { list-style: none; padding: 0; }
.mobile-category-nav li a {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 1rem 0; 
  text-decoration: none;
  color: #2A2A48;
  font-weight: 500;
  font-size: 16px;
  border-bottom: none;
}

.submenu-header {
    padding: 1rem 1.5rem;
    border-bottom: none; 
    background-color: rgba(236, 236, 236, 0.3);
}

.submenu-header .back-btn {
    display: flex;
    justify-content: flex-end; 
    width: 100%;
    gap: 0.5rem;
}

.submenu-header .back-btn span {
  text-align: right;
}

.mobile-category-nav ul .skincare {
  text-align: right;   
}

.mobile-category-nav ul .skincare a {
  justify-content: flex-end;  
}

.mobile-category-nav ul .skincare span {
  display: block;
  width: 100%;
  text-align: right;  
  font-weight: 400;
  font-size: 16px;
  color: #485363; 
  padding: 0;
}

.mobile-category-nav li.skincare::after {
  display: none !important;
}

.mobile-category-nav li {
    position: relative;
    padding: 0 1.5rem; 
}

.mobile-category-nav li:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.5rem; 
    right: 1.5rem; 
    height: 1px;
    background-color: #ECECEC; 
}

.arrow-svg-icon {
  order: -1; 
  display: flex;
  align-items: center;
  margin-right: 0.5rem; 
}

.arrow-svg-icon :deep(svg) {
    width: 1rem; 
    height: 1rem; 
    fill: #485363; 
    stroke: none;
}

.mobile-category-nav li:last-child::after { 
    display: none; 
}

.mobile-action-links {
  background-color: #fafafa;
  padding: 8px 0px;
}

.mobile-action-links ul { 
    list-style: none; 
    padding: 0; 
}

.mobile-action-links li a {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem 0; 
  text-decoration: none;
  color: #485363;
  font-size: 14px;
  font-weight: 500;
  border-bottom: none;
}

.mobile-action-links li {
    position: relative;
    padding: 0 1.5rem;
}

.mobile-action-links .action-group {
    display: flex;
    align-items: center;
    gap: 1rem; 
}

.mobile-action-links .link-content {
    display: flex;
    align-items: center;
    gap: 0.5rem; 
}

.mobile-action-links .link-content .icon-svg {
    display: flex;
    align-items: center;
}
.mobile-action-links .link-content .icon-svg :deep(svg) {
    width: 1.25rem; 
    height: 1.25rem; 
    fill: #485363;
    stroke: none;
}

.action-arrow-svg {
    display: flex;
    align-items: center;
}

.action-arrow-svg :deep(svg) {
    width: 1rem; 
    height: 1rem; 
    fill: #485363; 
    stroke: none;
}

.mobile-action-links li:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1.5rem; 
    right: 1.5rem; 
    height: 1px;
    background-color: #ECECEC; 
}

.mobile-action-links li:last-child::after {
    display: none;
}
</style>