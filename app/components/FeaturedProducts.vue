<template>
  <section class="featured-products">
    <div class="container">
      <h2 class="section-title">Featured products</h2>
      <div v-if="loading" class="loading-state">
        <p>Products are loading...</p>
      </div>
      <div v-else-if="error" class="error-state">
        <p>An error occurred while loading products: {{ error.message }}</p>
      </div>
      <div v-else class="product-grid">
        <ProductCard 
          v-for="product in featuredProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ProductCard from './ProductCard.vue'; 

const loading = ref(true);
const error = ref(null);
const products = ref([]);
const API_URL = 'https://dummyjson.com/products?limit=4'; 

const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    products.value = data.products;
  } catch (err) {
    error.value = err;
    console.error("API Fetch Error:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);

const featuredProducts = computed(() => products.value.slice(0, 4));
</script>

<style scoped>

.featured-products {
  background-color: #ffffff;
  padding: 1.5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
display: flex; 
  align-items: center; 
  text-align: center;
  color: #0099A8;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.section-title::before,
.section-title::after {
  content: '';
  flex-grow: 1; 
  height: 1px; 
  background-color: #0099A81A; 
}

.section-title::before {
  margin-right: 1rem;
}

.section-title::after {
  margin-left: 1rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem; 
}

@media (min-width: 48rem) {
    .product-grid {
        grid-template-columns: repeat(4, 1fr); 
        gap: 2.5rem;
    }
    .section-title {
    font-size: 24px;
    margin-bottom: 2.5rem;
    margin-top: 2rem;
    }
    .featured-products {
    background-color: #ffffff;
    padding: 1rem 0 2.5rem 0;
   }
}
</style>