<template>
  <div class="checkout-page container">
    <nav class="breadcrumb">
        <NuxtLink to="/">Homepage</NuxtLink>
        <span class="separator">/</span>
        <NuxtLink to="/#">Shopping Cart</NuxtLink>
        <span class="separator">/</span>
        <span class="current-page">Checkout</span>
    </nav>
    <h2>Checkout</h2>
    <div v-if="cartStore.cartItemCount === 0" class="empty-cart">
      You cannot proceed to checkout because your basket is empty.
    </div>
    <div v-else class="checkout-layout"> 
      <CheckoutForm class="order-form" /> 
      <CartSummary class="order-summary" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'; 
import CheckoutForm from '~/components/CheckoutForm.vue'
import CartSummary from '~/components/CartSummary.vue'

const cartStore = useCartStore();
</script>

<style scoped>
.checkout-page {
  padding: 3rem 1rem 0rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #E0E0E0;
}

.breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: #8493A8; 
}

.breadcrumb a {
    text-decoration: none;
    color: #8493A8;
    transition: color 0.2s;
}

h2 {
    font-size: 24px;
    font-weight: 500;
    color: #2A2A48;
}

.breadcrumb a:hover {
    color: #556677; 
}

.breadcrumb .separator {
    margin: 0 0.5rem;
}

.breadcrumb .current-page {
    font-weight: 400;
    color: #0099A8; 
}

.checkout-layout {
  display: flex;
  flex-direction: column; 
  gap: 20px;
}

.order-summary {
    order: -1; 
}

.order-form {
    order: 0; 
}

.empty-cart {
  margin-top: 6rem;
  margin-bottom: 6rem;
  text-align: center;
}

/* Desktop */
@media (min-width: 48rem) {
    .checkout-layout {
    display: flex;
    flex-direction: row; 
    gap: 20px;
  }

  .order-form {
    flex: 3; 
    order: 0; 
  }
  .order-summary {
    flex: 2; 
    order: 0; 
  }

  h2 {
      font-size: 34px;
  }

}
</style>