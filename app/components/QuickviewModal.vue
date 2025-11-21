<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <button class="close-btn" @click="closeModal">&times;</button>
      <div v-if="product" class="product-quick-details">
        <div class="product-qv-image-column">
          <div class="product-qv-image">
            <img :src="product.thumbnail" :alt="product.title" />
          </div>
          <p v-if="product.brand" class="qv-brand">
            Brand: <strong>{{ product.brand }}</strong>
          </p>
        </div>
        <div class="product-qv-info-column">
          <h2 class="qv-title">{{ product.title }}</h2>

          <div class="qv-price-rating">
            <p class="qv-price">{{ formatPrice(product.price) }}</p>
            <div class="qv-rating">
              <span class="rating-stars">⭐ {{ product.rating }}</span>
              <span class="review-count">({{ product.reviews ? product.reviews.length : 0 }} Reviews)</span>
            </div>
          </div>
          <hr>
          <p class="qv-description">{{ product.description }}</p>
          <div class="qv-stock-info">
            <p :class="{'in-stock': product.stock > 0, 'out-stock': product.stock === 0}">
              Stock Status: 
              <span v-if="product.stock > 0">
                **{{ product.availabilityStatus }}** ({{ product.stock }} units)
              </span>
              <span v-else>
                **Out of Stock**
              </span>
            </p>
            <p v-if="product.shippingInformation" class="qv-shipping">
              🚚 Delivery: **{{ product.shippingInformation }}**
            </p>
          </div>
          <div class="qv-actions">
            <button class="qv-add-to-cart" @click="handleAddToCart(product)" :disabled="product.stock === 0">
              <span v-if="product.stock > 0">Add</span>
              <span v-else>Out of Stock</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="loading-state">
        Loading product information...
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useCartStore } from '@/stores/cart'; 

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  product: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['close']);
const cartStore = useCartStore();

const closeModal = () => {
  emit('close');
};

const handleAddToCart = (product) => {
  if (product.stock > 0) {
    cartStore.addToCart(product);
    closeModal(); 
  }
};

const formatPrice = (price) => {
  const tlPrice = (price * 8.5).toFixed(2).replace('.', ','); 
  return `${tlPrice} TL`;
};
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 950px;
  width: 90%;
  position: relative;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  line-height: 1;
}

.product-quick-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.product-qv-image-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-qv-image {
  max-height: 350px;
  overflow: hidden;
  margin-bottom: 15px;
}

.product-qv-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
}

.qv-brand {
  font-size: 16px;
  color: #2A2A48;
}

.product-qv-info-column {
  flex: 2;
}

.qv-title {
  font-size: 28px;
  font-weight: 700;
  color: #2A2A48;
  margin-top: 0;
  margin-bottom: 10px;
}

.qv-price-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.qv-price {
  font-size: 32px;
  font-weight: bold;
  color: #FF27AD; 
  margin: 0;
}

.qv-rating {
  font-size: 14px;
  color: #666;
}
.rating-stars {
    font-weight: bold;
    color: #fdd835; 
}
.review-count {
    margin-left: 5px;
    color: #999;
}

.qv-description {
  margin: 15px 0 20px 0;
  color: #485363;
  line-height: 1.6;
}

.qv-stock-info p {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 500;
}

.in-stock {
    color: #4CAF50; /* Yeşil */
}

.out-stock {
    color: #F44336;
}

.qv-actions {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.qv-add-to-cart {
  padding: 12px 25px;
  background-color: #FF27AD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 32%;
}

.qv-add-to-cart:hover:not(:disabled) {
    background-color: #F1129C;
}

.qv-add-to-cart:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.qv-more-details {
  margin-left: 20px;
  color: #FF27AD;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: color 0.3s;
}

.qv-more-details:hover {
    color: #F1129C;
}

/* Desktop */
@media (min-width: 768px) {
  .product-quick-details {
    flex-direction: row;
  }
  .product-qv-image-column {
    padding-right: 30px;
    align-items: flex-start;
  }
  .product-qv-image {
    max-width: 350px;
  }
}
</style>