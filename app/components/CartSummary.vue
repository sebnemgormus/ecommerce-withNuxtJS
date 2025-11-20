<template>
  <div class="checkout-right">
     <h3 class="summary-title">Shopping cart summary</h3>
    <div class="summary-container">
        <ul class="product-list">
            <li v-for="item in cartStore.cartItems" :key="item.id" class="cart-item">
                <div class="item-image">
                    <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
                </div>
                <div class="item-details">
                    <span class="item-title">{{ item.title }}</span>
                    <span class="item-price">{{ formatPrice(item.price * item.quantity) }}</span> 
                </div>
                <div class="quantity-control">
                    <button class="qty-btn" @click="cartStore.decreaseQuantity(item.id)">-</button>
                    <span class="qty-value">{{ item.quantity }}</span> 
                    <button class="qty-btn" @click="cartStore.increaseQuantity(item.id)">+</button>
                </div>
            </li>
        </ul> 
        <div class="summary-totals">
            <div class="discount-code">
            <input type="text" placeholder="Discount code" class="discount-input">
        </div>
            <div class="total-line">
                <span>Subtotal</span>
                <span>{{ formatPrice(cartStore.cartTotal) }}</span>
            </div>
            <div class="total-line">
                <span>Shipping</span>
                <span>{{ formatPrice(shippingCost) }}</span>
            </div>
            <div class="total-line grand-total">
                <strong>Total</strong>
                <strong>{{ formatPrice(cartStore.cartTotal + shippingCost) }}</strong>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const shippingCost = 1.23; 

const subtotal = computed(() => {
    return cartStore.cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
});

const totalAmount = computed(() => {
    return subtotal.value + shippingCost;
});

const formatPrice = (price) => {
    const tlPrice = (price * 8.5).toFixed(2).replace('.', ','); 
    return `${tlPrice} TL`;
};
</script>

<style scoped>

.checkout-right {
  padding: 0;
}

.summary-container {
    background-color: #ffffff; 
    padding: 20px;
    border-radius: 8px;
}

.summary-title {
    font-size: 20px;
    font-weight: 500;
    color: #2A2A48;
    margin-top: 1.5rem;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.product-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
}

.item-image img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 4px;
    margin-right: 15px;
}

.item-details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.item-title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
}

.item-price {
    font-size: 14px;
    color: #485363;
}

.quantity-control {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left: 15px;
}

.qty-btn {
    background: #f7f7f7;
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.2s;
}
.qty-btn:hover {
    background-color: #eee;
}
.qty-value {
    padding: 5px 10px;
    font-size: 14px;
}

.discount-input {
    font-size: 14px;
    font-weight: 400;
}

.discount-code label {
    display: block;
    color: #485363;
    margin-bottom: 5px;
}
.discount-code input {
    width: 100%;
    padding: 14px;
    margin-bottom: 1rem;
    border: 1px solid #ECECEC;
    border-radius: 4px;
    box-sizing: border-box;
}

.summary-totals {
    margin-top: 20px;
    padding-top: 20px;
}

.total-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #485363;
}

.grand-total {
    font-size: 18px;
    font-weight: 700;
    color: #2A2A48;
    margin-top: 15px;
    border-top: 1px solid #ECECEC;
    padding-top: 1rem;
}

/* Desktop */
@media (min-width: 48rem) { 
    .summary-container {
       border: 1px solid #ECECEC;
    }

    .summary-title {
        margin-top: 3rem;
    }
}

</style>