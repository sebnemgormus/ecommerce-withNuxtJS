<template>
  <div class="topbar-wrapper">
    <div class="container topbar-inner"> 
      <div class="topbar-left">
        <div class="topbar-left-storage">
          <span v-html="storageIcon" class="store-icon"></span>
          <a href="#">Store</a>
        </div>
        <div class="topbar-left-catalog">
          <span v-html="catalogIcon" class="catalog-icon"></span>
          <a href="#">Catalog</a>
        </div>
      </div>
      <div class="topbar-center">
        Watsons Beauty and Personal Care Awards Nominees!
      </div>
      <div class="topbar-right">
        <span class="phone-number">Call us:(+90) 850 123 45 67</span>
        <span v-html="phoneIcon" class="phone-icon"></span>
      </div>
    </div>
  </div>
</template>

<script setup>

import storageIcon from '~/assets/icons/storage.svg?raw';
import catalogIcon from '~/assets/icons/catalog.svg?raw';
import phoneIcon from '~/assets/icons/phone.svg?raw';

</script>

<style scoped>

.topbar-wrapper {
  background-color: #505357; 
  width: 100%;
}

.topbar-inner {
    display: flex;
    justify-content: space-around;
    gap: 8.5rem;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.2;
}

/* Mobil */
.topbar-left {
  display: flex;
  gap: 2.5rem; 
  align-items: center;
}

.topbar-right {
  display: flex;
  gap: 0.70rem; 
  align-items: center;
}

.topbar-left-storage,
.topbar-left-catalog {
  display: flex;
  gap: 0.50rem; 
  align-items: center;
}

.topbar-left a,
.topbar-right span {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.store-icon, .catalog-icon, .phone-icon {
  vertical-align: middle; 
  display: inline-flex; 
  align-items: center;
  height: 1rem; 
}

.store-icon :deep(svg),
.catalog-icon :deep(svg),
.phone-icon :deep(svg) {
  width: 1rem; 
  height: 1rem; 
  fill: #fff;
  stroke: #fff;
}

.topbar-center {
  display: none;
}

.phone-number {
  display: none; 
}

/* Desktop/Tablet */
@media (min-width: 48rem) { 
  .topbar-inner {
    padding-top: 0.625rem; 
    padding-bottom: 0.625rem; 
    justify-content: space-between; 
    gap: 0;
  }
  
  .topbar-left {
    gap: 3rem;
  }

  .phone-number {
    display: block;
  }
  
  .topbar-center {
    display: block; 
    flex: 1;
    text-align: center;
    color: rgba(236,236,236,0.5);
    font-weight: 400;
  }
}
</style>