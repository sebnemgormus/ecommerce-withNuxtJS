<template>
  <header class="header">
    <div class="container"> 
      <div class="main-header">
        <div class="header-left">
          <NuxtLink to="/">
            <img src="assets/images/logo.png" alt="Logo" class="logo" />
          </NuxtLink>
        </div>
        <div class="header-center">
          <SearchBar/>
        </div>
        <div class="header-right">
          <div class="profile-info">
            <p>Hello, <span>Clara Clara</span></p>
            <span v-html="Avatar" class="avatar"></span>
            <span v-html="ArrowDown" class="arrow-svg-icon"></span>
          </div>
          <span v-html="mobilesearchIcon" class="mobile-search-icon"></span>
          <span v-html="BasketIcon" class="basket-icon"></span>
          <button class="burger-btn" @click="toggleMobileMenu">☰</button>
        </div>
      </div>
    </div>

    <div class="container"> 
      <nav class="nav-menu">
        <ul>
          <li><NuxtLink to="#">Campaigns</NuxtLink></li>
          <li><NuxtLink to="#">Personal Care</NuxtLink></li>
          <li><NuxtLink to="#">Skin Care</NuxtLink></li>
          <li><NuxtLink to="#">Make - Up</NuxtLink></li>
          <li><NuxtLink to="/#">Mother & Baby</NuxtLink></li>
          <li><NuxtLink to="#">Men Care</NuxtLink></li>
          <li><NuxtLink to="#">Healthy Life</NuxtLink></li>
          <li><NuxtLink to="#">Brands</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <MobileHeader :is-open="isMenuOpen" @close="isMenuOpen = false" />
    
  </header>
</template>

<script setup>
import { ref } from 'vue';
import MobileHeader from './MobileHeader.vue';
import SearchBar from '~/components/Searchbar.vue'
import BasketIcon from '~/assets/icons/Basket.svg?raw'
import mobilesearchIcon from '~/assets/icons/mainsearch.svg?raw'
import Avatar from '~/assets/icons/Avatar.svg?raw'
import ArrowDown from '~/assets/icons/arrowdown.svg?raw'

const isMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%; 
  padding-bottom: 0.50rem; 
}

.main-header .header-left .logo {
  height: auto; 
  min-width: 130px; 
}

.main-header .header-center {
  display: none; 
}

.main-header .header-right {
  display: flex;
  gap: 2rem; 
  align-items: center;
}

.header-right button {
  font-size: 1.25rem; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem; 
}

.header-center .search-btn {
  display: none; 
}

.nav-menu {
  display: none; 
  background-color: #ffffff;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  justify-content: space-between; 
}

.nav-menu li a {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  transition: color 0.2s;
}

.profile-info {
  display: none; 
}

.mobile-search-icon {
  display: inline-block;
}

/* Tablet */
@media (min-width: 48rem) { 
  .main-header {
    padding-top: 0.5rem; 

  }

  .main-header .header-left .logo {
    width: 25%;
    max-width: 280px;
  }

  .main-header .header-center {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  
  .header-center .search-btn {
    display: block; 
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .main-header .header-right {
    gap: 3rem; 
  }
  
  .header-right .search-btn-mobile,
  .header-right .burger-btn {
    display: none; 
  }

  .nav-menu {
    display: block; 
  }

  .profile-info {
    display: flex;
    align-items:center;
    gap: 0.25rem;
  }

  .profile-info p{
    font-size: 14px;
    font-weight: 400;
    color: #8493A8;
  }

  .profile-info p span{
    font-weight: 500;
    color: #2A2A48;
  }

  .mobile-search-icon {
    display: none; 
  }
}

/* Desktop */
@media (min-width: 64rem) { 
  .main-header {
    padding-top: 0.50rem; 
  }

.mobile-search-icon {
    display: none;
  }
}
</style>