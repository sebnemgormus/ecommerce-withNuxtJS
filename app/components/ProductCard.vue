<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <div class="product-image">
        <img :src="product.thumbnail" :alt="product.title" loading="lazy" />
      </div>
      <div class="product-actions-overlay">
        <button class="action-btn quick-view" @click="handleQuickView">
          <span class="btn-inner">
            <img src="@/assets/icons/eye.svg" alt="Quick View" />
            Quick View
          </span>
        </button>
        <button class="action-btn add-to-cart" @click="handleAddToCart">
          <img src="@/assets/icons/plus.svg" alt="Add to Cart" />
          Add
        </button>
      </div>
    </div>
    <div class="product-details">
      <p class="product-price">{{ formatPrice(product.price) }}</p>
      <p class="product-title-line">
        {{ getTitleAndSubtitle(product) }}
      </p>
       <button class="mobile-add-btn"  @click="handleAddToCart">
          <img src="@/assets/icons/plus.svg" alt="Add to Cart" />
          Add
        </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useCartStore } from '@/stores/cart';

const emit = defineEmits(['quick-view']);

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const handleQuickView = () => {
  emit('quick-view', props.product); 
};

const handleAddToCart = () => {

  cartStore.addToCart(props.product);

  console.log(`${props.product.title} sepete eklendi`);
};

const formatPrice = (price) => {
  const tlPrice = (price * 8.5).toFixed(2).replace('.', ','); 
  return `${tlPrice} TL`;
};

const getTitleAndSubtitle = (product) => {  
    return product.title;
};
</script>

<style scoped>

.product-card {
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative; 
  overflow: hidden; 
}

.product-image-wrapper {
  position: relative; 
  height: 200px;
  overflow: hidden;
  padding: 0 1rem; 
}

.product-image {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.product-actions-overlay {
  display: none; 
}

.product-details {
  text-align: left;
  padding: 0rem 1.5rem 1rem 1.5rem; 
  position: relative;
}

.product-details::after {
  content: '';
  position: absolute;
  height: 1px;
  background-color: #f2f2f2;
  left: 0;
  right: 0;
  bottom: 4.5rem;
}

.product-price {
  font-size: 16px; 
  font-weight: 700;
  color: #2A2A48;
  margin-bottom: 0.25rem;
}

.product-title-line {
  font-size: 14px;
  font-weight: 400;
  color: #485363;
  line-height: 1.3;
  min-height: 5.25rem; 
  white-space: pre-wrap; 
}

.mobile-add-btn {
  width: 100%; 
  background-color: #FF27AD; 
  color: white;
  border: none;
  border-radius: 4px; 
  border-top: 1px solid #f2f2f2;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  z-index: 5;
}

.mobile-add-btn:hover {
  background-color: #F1129C;
}

.mobile-add-btn img {
  width: 16px;
  height: 16px;
}

/* Desktop */

@media (min-width: 48rem) {
  .product-card {
    padding-bottom: 1rem; 
  }
  
  .mobile-add-btn {
    display: none;
  }

  .product-price {
  font-size: 20px; 
}
  
  .product-actions-overlay {
    display: flex;
    opacity: 0;
    transform: translateY(100%); 
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 10;
  }
  
  .product-card:hover .product-actions-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  
  .product-card:hover .product-image {
    opacity: 0.8; 
  }
  
  .action-btn {
    flex-grow: 1;
    flex-basis: 50%; 
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap; 
    overflow: hidden;
    gap: 0.15rem;
    border: none;
    background: transparent;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    position: relative;
  }

  .action-btn img {
    width: 16px; 
    height: 16px;
  }

  .btn-inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem; 
  }

  .quick-view {
    border-right: none;
  }

  .quick-view::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;          
    height: 60%;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.25); 
  }

  .action-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .product-image-wrapper {
    height: 220px;
  }

  .product-price {
    font-size: 20px;
    font-weight: 700;
  }

    
  .product-title-line {
    font-size: 16px;
    font-weight: 400;
    color: #485363;
    margin-top: 0.50rem;
  }

  .product-details {
    padding: 1.5rem 1.5rem 0rem 1.5rem;
  }

  .product-details::after {
    display: none;
  }

  .product-card {
    padding-bottom: 0rem;
  }
}
</style>