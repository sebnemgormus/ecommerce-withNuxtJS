import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

  state: () => ({
    cartItems: [], 
  }),

  getters: {
    cartItemCount: (state) => state.cartItems.length,

    totalQuantity: (state) => {
        return state.cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    },
    
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
  },

  actions: {
      addToCart(product) {
          const existingItem = this.cartItems.find(item => item.id === product.id);

          if (existingItem) {
              existingItem.quantity++;
          } else {
              this.cartItems.push({ 
                  ...product, 
                  quantity: 1 
              });
          }
      },
      
      increaseQuantity(productId) {
          const item = this.cartItems.find(i => i.id === productId);
          if (item) {
              item.quantity++;
          }
      },

      decreaseQuantity(productId) {
          const itemIndex = this.cartItems.findIndex(i => i.id === productId);
          
          if (itemIndex > -1) {
              const item = this.cartItems[itemIndex];
              
              if (item.quantity > 1) {
                  item.quantity--;
              } else {
                  this.cartItems.splice(itemIndex, 1);
              }
          }
      }
  }
});