<template>
  <div class="search-bar">
    <span class="search-icon" v-html="searchIcon"></span>
    <input
      type="text"
      placeholder="Write the product or category you are looking for"
      v-model="query"
      @input="handleInput"
    />
  </div>
</template>

<script setup>

import searchIcon from '~/assets/icons/searchbar.svg?raw'

</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: rgba(236, 236, 236, 0.3); 
  border-radius: 32px;
  padding: 0 8px;
  height: 40px; 
  width: 60%;
  gap: 3px;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  color: #8493A8;
}

.search-bar .search-icon :deep(svg) {
  height: 20px;
  fill: #2A2A48;
  padding-top: 4px;
}
</style>
